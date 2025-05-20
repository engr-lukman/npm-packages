<template>
  <div>
    <div
      v-if="title"
      class="numeric-keyboard__title"
    >
      {{ title }}
    </div>
    <div class="numeric-keyboard">
      <div class="numeric-keyboard__grid">
        <button
          v-for="(num, index) in shuffledNumbers.slice(0, 9)"
          :key="index"
          class="numeric-keyboard__button"
          type="button"
          @click="onClickHandler(num)"
        >
          {{ num }}
        </button>

        <button
          class="numeric-keyboard__button numeric-keyboard__button--double"
          type="button"
          @click="onClickHandler(shuffledNumbers[shuffledNumbers.length - 1])"
        >
          {{ shuffledNumbers[shuffledNumbers.length - 1] }}
        </button>

        <button
          class="numeric-keyboard__button numeric-keyboard__button--clear"
          type="button"
          @click="$emit('clear')"
        >
          {{ clearLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { PROPS } from "../utils/constants";

/**
 * Component props definition
 */
interface NumericKeyboardProps {
  isEnableShuffle?: boolean;
  isMaxLengthReached?: boolean;
  title?: string;
  clearLabel?: string;
}

const props = withDefaults(defineProps<NumericKeyboardProps>(), {
  isEnableShuffle: PROPS.isEnableShuffle,
  isMaxLengthReached: false,
  title: PROPS.title,
  clearLabel: PROPS.clearLabel,
});

/**
 * Define emitted events
 */
const emit = defineEmits<{
  (e: 'input', value: number): void;
  (e: 'clear'): void;
}>();

// Initialize numeric keypad with digits 0-9
const numbers = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/**
 * Shuffles array using Fisher-Yates algorithm for improved security
 * 
 * @param array - Array of numbers to shuffle
 * @returns Shuffled array or original if shuffling is disabled
 */
const shuffleArray = (array: number[]): number[] => {
  if (!props.isEnableShuffle) {
    return array;
  }

  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

/**
 * Returns shuffled or original number array based on configuration
 */
const shuffledNumbers = computed<number[]>(() =>
  props.isEnableShuffle ? shuffleArray([...numbers.value]) : numbers.value
);

/**
 * Handles digit button clicks and reshuffles if enabled
 * 
 * @param num - Digit number that was clicked
 */
const onClickHandler = (num: number): void => {
  // Prevent input when max length is reached
  if (props.isMaxLengthReached) return;

  // Reshuffle numbers if shuffle is enabled
  if (props.isEnableShuffle) {
    numbers.value = shuffleArray(numbers.value);
  }

  emit("input", num);
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.numeric-keyboard {
  min-width: 250px;
  padding: 10px;
  margin: 5px 0;
  background: white;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease;
  transition: background 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.numeric-keyboard__title {
  font-family: Arial, Helvetica, sans-serif;
  color: #e2136e;
  text-align: center;
  padding-bottom: 8px;
}

/* 3x4 grid layout for number buttons */
.numeric-keyboard__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

/* Base button styling */
.numeric-keyboard__button {
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  font-size: 16px;
}

.numeric-keyboard__button:hover {
  background: #f5f5f5;
}

/* Clear button with accent color */
.numeric-keyboard__button--clear {
  background: #e2136e;
  color: white;
  border: none;
}

.numeric-keyboard__button--clear:hover {
  background: #c91161;
}

/* Double-width button for zero digit */
.numeric-keyboard__button--double {
  grid-column: span 2;
}
</style>
