<template>
  <component :is="tag" ref="el" :aria-label="text">
    <template v-for="(line, li) in lines" :key="li">
      <span
        v-for="(char, ci) in line"
        :key="`${li}-${ci}`"
        aria-hidden="true"
        :class="shouldAnimate ? ['tr-char', isVisible ? 'tr-char--in' : ''] : []"
        :style="shouldAnimate && isVisible ? { animationDelay: `${globalIndex(li, ci) * 13}ms` } : {}"
      >{{ char === ' ' ? ' ' : char }}</span>
      <br v-if="li < lines.length - 1" aria-hidden="true" />
    </template>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  tag?: string
  skip?: boolean
}>(), {
  tag: 'span',
  skip: false,
})

const emit = defineEmits<{ midpoint: [], done: [] }>()

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const reduced = ref(false)

const lines = computed(() => props.text.split('\n').map(l => l.split('')))
const shouldAnimate = computed(() => !reduced.value && !props.skip)
const totalChars = computed(() => lines.value.reduce((sum, line) => sum + line.length, 0))

function globalIndex(li: number, ci: number): number {
  let n = 0
  for (let i = 0; i < li; i++) n += lines.value[i].length
  return n + ci
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (props.skip || reduced.value) {
    nextTick(() => { emit('midpoint'); emit('done') })
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
        const totalTime = (totalChars.value - 1) * 13 + 550
        setTimeout(() => emit('midpoint'), totalTime / 2)
        setTimeout(() => emit('done'), totalTime)
      }
    },
    { threshold: 0.1 },
  )

  if (el.value) observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.tr-char {
  display: inline;
  opacity: 0;
}

.tr-char--in {
  animation: tr-char-in 550ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes tr-char-in {
  from {
    opacity: 0;
    filter: blur(10px) brightness(0%);
  }
  to {
    opacity: 1;
    filter: blur(0px) brightness(100%);
  }
}
</style>
