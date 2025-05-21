<template>
  <div class="keyboard">
    <div
      v-if="title"
      class="keyboard-title"
    >
      {{ title }}
    </div>

    <div class="keyboard-container">
      <div class="keyboard-section">
        <div class="section-title">Alpha Numeric</div>
        <div class="keyboard-grid alphanumeric-grid">
          <button
            v-for="(item, index) in numberKeys"
            :key="`num-${index}`"
            class="keyboard-btn"
            type="button"
            @click="onClickHandler(item)"
          >
            {{ item }}
          </button>

          <button
            v-for="(item, index) in letterKeys"
            :key="`letter-${index}`"
            class="keyboard-btn"
            type="button"
            @click="onClickHandler(item)"
          >
            {{ isUpperCase ? item?.toUpperCase() : item?.toLowerCase() }}
          </button>

          <button
            :class="['keyboard-btn shift', { active: isUpperCase }]"
            type="button"
            @click="toggleHandler"
          >
            {{ shiftLabel }}
            <span
              v-if="isUpperCase"
              class="shift-indicator"
            ></span>
          </button>

          <button
            class="keyboard-btn clear"
            type="button"
            @click="$emit('clear')"
          >
            {{ clearLabel }}
          </button>
        </div>
      </div>

      <div class="keyboard-section">
        <div class="section-title">Special Characters</div>
        <div class="keyboard-grid special-grid">
          <button
            v-for="(item, index) in specialKeys"
            :key="`special-${index}`"
            class="keyboard-btn"
            type="button"
            @click="onClickHandler(item)"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { PROPS } from "../utils/constants";

interface Props {
  isEnableShuffle?: boolean;
  isMaxLengthReached?: boolean;
  title?: string;
  shiftLabel?: string;
  clearLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isEnableShuffle: PROPS.isEnableShuffle,
  isMaxLengthReached: false,
  title: PROPS.title,
  shiftLabel: PROPS.shiftLabel,
  clearLabel: PROPS.clearLabel,
});

const emit = defineEmits<{
  (e: 'input', value: string): void;
  (e: 'clear'): void;
}>();

const numbers = ref("1234567890");
const letters = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const specials = ref("!@#$%^&*()-_+=[]{}:;'\",.<>/?|\\`~");

const isUpperCase = ref(true);

const shuffle = (str) => {
  const strArray = str.split("");

  const newArray = [...strArray];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray.join("");
};

const numberKeys = computed(() => numbers.value.split(""));
const letterKeys = computed(() => letters.value.split(""));
const specialKeys = computed(() => specials.value.split(""));

const toggleHandler = () => {
  isUpperCase.value = !isUpperCase.value;
};

const onClickHandler = (char) => {
  if (props?.isMaxLengthReached) return;

  if (props?.isEnableShuffle) {
    if ([...numbers.value, ...letters.value].includes(char)) {
      numbers.value = shuffle(numbers.value);
      letters.value = shuffle(letters.value);
    } else if (specials.value.includes(char)) {
      specials.value = shuffle(specials.value);
    }
  }

  emit("input", char);
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

/* Main keyboard container */
.keyboard {
  background: white;
  font-family: Arial, Helvetica, sans-serif;
  animation: fadeIn 0.25s ease;
  user-select: none;
}

/* Keyboard title */
.keyboard-title {
  color: #e2136e;
  text-align: center;
  padding-bottom: 6px;
  font-size: 15px;
  font-weight: 500;
}

/* Container for side-by-side layout */
.keyboard-container {
  display: flex;
  gap: 5px;
}

/* Section styles */
.keyboard-section {
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 5px;
  flex: 1;
}

/* Section title */
.section-title {
  color: #444;
  text-align: center;
  padding-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 6px;
}

/* Grid layout for keyboard keys */
.keyboard-grid {
  display: grid;
  gap: 2px;
  justify-content: center;
  margin-bottom: 5px;
}

.keyboard-grid:last-child {
  margin-bottom: 0;
}

/* Alphanumeric grid at the top */
.alphanumeric-grid {
  grid-template-columns: repeat(10, 30px);
}

/* Special characters grid */
.special-grid {
  grid-template-columns: repeat(8, 30px);
}

/* Button styles */
.keyboard-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  font-weight: semibold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keyboard-btn:hover {
  background: #ccc;
}

/* Clear button */
.keyboard-btn.clear {
  width: 60px;
  background: #e2136e;
  color: white;
  border: none;
  grid-column: span 2;
}

.keyboard-btn.clear:hover {
  background: #c91161;
}

/* Shift button */
.keyboard-btn.shift {
  position: relative;
  width: 60px;
  background: #708daa;
  color: white;
  border: none;
  grid-column: span 2;
  transition: background-color 0.2s ease;
}

.keyboard-btn.shift:hover {
  background: #5f7182;
}

/* Active state for shift button */
.keyboard-btn.shift.active {
  background: #0671c9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  font-weight: bold;
}

.keyboard-btn.shift.active:hover {
  background: #1e88e5;
}

/* Shift indicator dot */
.shift-indicator {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 5px;
  height: 5px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
</style>
