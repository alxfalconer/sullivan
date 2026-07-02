<template>
  <div class="min-h-screen flex flex-col px-8 max-w-[480px] mx-auto">

    <!-- Logo + Contact -->
    <div class="flex items-center justify-between pt-12">
      <img src="/sullivan-ko.png" alt="Sullivan" class="h-[24px] w-auto invert" />
      <a
        href="mailto:hello@sullivanpractice.com"
        class="text-[11.5px] text-muted font-body no-underline hover:text-ink transition-colors duration-150"
      >
        Inquire
      </a>
    </div>

    <!-- Thesis -->
    <div class="mt-16">
      <TextReveal
        :text="'The best products are remembered\nfor what they refuse to become.'"
        tag="p"
        class="font-display text-[1.625rem] font-normal leading-[1.2] text-ink hyphens-none"
        :skip="alreadyPlayed"
        @midpoint="onHeadlineMidpoint"
        @done="onHeadlineDone"
      />
      <p class="mt-10 text-[13.5px] leading-[1.7] text-ink/70 font-body" :style="fadeStyle(0)">
        Every tool eventually creates its own form of excess.
      </p>
      <p class="mt-4 text-[13.5px] leading-[1.7] text-ink/70 font-body" :style="fadeStyle(1)">
        Today, that excess is software.
      </p>
      <p class="mt-4 text-[13.5px] leading-[1.7] text-ink/70 font-body" :style="fadeStyle(2)">
        What remains scarce is judgment: the ability to distinguish a necessary idea from an unnecessary one, subtraction from accumulation, conviction from panic.
      </p>
      <p class="mt-4 text-[13.5px] leading-[1.7] text-ink/70 font-body font-bold" :style="fadeStyle(3)">
        Sullivan is an editorial practice for product judgment.
      </p>
    </div>

    <!-- Rule -->
    <div class="mt-14 border-t border-[#dedad5]" :style="fadeStyle(4)" />

    <!-- Observations -->
    <div class="mt-8">
      <ul class="list-none p-0 m-0 divide-y divide-[#e4e0da]">
        <li v-for="(obs, i) in list" :key="obs.slug" :style="fadeStyle(5 + i)">
          <NuxtLink
            :to="`/${obs.slug}`"
            class="flex items-baseline gap-5 no-underline group py-[11px]"
          >
            <span class="text-[10.5px] text-muted font-body w-7 shrink-0 leading-none">
              {{ obs.number }}
            </span>
            <span class="text-[13.5px] text-ink font-body leading-snug group-hover:text-muted transition-colors duration-150">
              {{ obs.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
const { list } = useObservations()

const alreadyPlayed = ref(false)
const headlineDone = ref(false)
const allBodyDone = ref(false)
const bodyReduced = ref(false)

const LAST_ORDER = 10
const STAGGER = 100
const FADE_DURATION = 500

onMounted(() => {
  alreadyPlayed.value = !!sessionStorage.getItem('sullivan_intro_played')

  if (alreadyPlayed.value) {
    headlineDone.value = true
    allBodyDone.value = true
    return
  }

  bodyReduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (bodyReduced.value) headlineDone.value = true
})

function onHeadlineMidpoint() {
  headlineDone.value = true
  sessionStorage.setItem('sullivan_intro_played', '1')
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
