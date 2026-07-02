<template>
  <div class="min-h-screen px-8 max-w-[480px] mx-auto">

    <!-- Nav -->
    <div class="flex items-center justify-between pt-12">
      <NuxtLink to="/">
        <img src="/sullivan-ko.png" alt="Sullivan" class="h-[24px] w-auto invert" />
      </NuxtLink>
      <a
        href="mailto:hello@sullivanpractice.com"
        class="inquire text-[11.5px] font-medium text-muted font-body no-underline hover:text-ink transition-colors duration-150"
      >
        Inquire
      </a>
    </div>

    <!-- Back -->
    <div class="pt-8">
      <NuxtLink
        to="/"
        class="text-[20px] text-muted font-body no-underline hover:text-ink transition-colors duration-150"
      >
        ←
      </NuxtLink>
    </div>

    <template v-if="observation">

      <!-- Header -->
      <div class="mt-6 mb-10">
        <TextReveal
          :text="observation.title"
          tag="h1"
          class="font-display text-[1.25rem] font-normal leading-[1.25] text-ink"
          @midpoint="onHeadlineMidpoint"
          @done="onHeadlineDone"
        />
      </div>

      <!-- Body -->
      <div class="space-y-6 text-[14.5px] leading-[1.7] text-ink font-body pb-20">
        <p :style="fadeStyle(0)">
          When lumber became cheap, we did not need more houses. We needed better architects.
          The abundance of a material changes the nature of the problem — but it does not change
          the nature of judgment. It makes judgment more necessary, not less.
        </p>
        <p :style="fadeStyle(1)">
          A product grows in proportion to its team's loss of confidence. Features accumulate
          the way rooms are added to a house that was never properly designed. Each addition is
          individually defensible. The accumulation becomes uninhabitable.
        </p>
        <p :style="fadeStyle(2)">
          Complexity settles the way dust does — silently, continuously, without announcement.
          You don't notice until the light catches it at a particular angle. By then the habit
          of accumulation is well established, and clearing it feels like destruction rather
          than restoration.
        </p>
        <p :style="fadeStyle(3)">
          An architectural review is not a hostile act. It is a necessary one. Buildings are
          inspected. Bridges are load-tested. The question is not whether something was built,
          but whether it deserves to stand — and whether what it has become is still what
          it was meant to be.
        </p>
        <p :style="fadeStyle(4)">
          Placeholder text. This observation will be replaced with the full essay. The structure,
          reading experience, and typographic system are in place and ready to receive it.
        </p>
      </div>

    </template>

    <template v-else>
      <p class="mt-14 text-[14.5px] text-muted font-body">Observation not found.</p>
    </template>

  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { find } = useObservations()
const observation = find(route.params.slug as string)

const headlineDone = ref(false)
const allBodyDone = ref(false)
const bodyReduced = ref(false)

const LAST_ORDER = 4
const STAGGER = 100
const FADE_DURATION = 500

onMounted(() => {
  bodyReduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (bodyReduced.value) headlineDone.value = true
})

function onHeadlineMidpoint() {
  headlineDone.value = true
}

function onHeadlineDone() {
  setTimeout(() => { allBodyDone.value = true }, LAST_ORDER * STAGGER + FADE_DURATION)
}

function fadeStyle(order: number) {
  if (bodyReduced.value || allBodyDone.value) return {}
  return {
    opacity: headlineDone.value ? 1 : 0,
    transition: `opacity ${FADE_DURATION}ms ease`,
    transitionDelay: `${order * STAGGER}ms`,
  }
}
</script>
