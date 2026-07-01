<template>
  <div class="min-h-screen flex flex-col px-8 max-w-[600px] mx-auto">

    <!-- Logo + Contact -->
    <div class="flex items-center justify-between pt-12">
      <img src="/sullivan-ko.png" alt="Sullivan" class="h-[24px] w-auto invert" />
      <a
        href="mailto:hello@sullivanpractice.com"
        class="text-[11.5px] text-muted font-body no-underline hover:text-ink transition-colors duration-150"
      >
        Contact
      </a>
    </div>

    <!-- Thesis -->
    <div class="mt-16">
      <p class="font-display text-[1.625rem] font-normal leading-[1.2] text-ink hyphens-none">
        The best products are remembered<br>for what they refuse to become.
      </p>
      <p class="mt-10 text-[13.5px] leading-[1.7] text-ink/70 font-body">
        Every tool eventually creates its own form of excess.
      </p>
      <p class="mt-4 text-[13.5px] leading-[1.7] text-ink/70 font-body">
        Today, that excess is software.
      </p>
      <p class="mt-4 text-[13.5px] leading-[1.7] text-ink/70 font-body">
        What remains scarce is judgment: the ability to distinguish a necessary idea from an unnecessary one, subtraction from accumulation, conviction from panic.
      </p>
      <p class="mt-4 text-[13.5px] leading-[1.7] text-ink/70 font-body">
        Sullivan exists before ideas acquire momentum.
      </p>
    </div>

    <!-- Rule -->
    <div class="mt-14 border-t border-[#dedad5]" />

    <!-- Observations -->
    <div class="mt-8">
      <p class="text-[10px] uppercase tracking-[0.14em] text-muted font-body mb-1">
        Observations
      </p>
      <ul class="list-none p-0 m-0 divide-y divide-[#e4e0da]">
        <li v-for="obs in list" :key="obs.slug">
          <NuxtLink
            :to="`/${obs.slug}`"
            class="flex items-baseline gap-5 no-underline group py-[11px]"
          >
            <span class="text-[10.5px] text-muted font-body tabular-nums w-7 shrink-0 leading-none">
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
</script>
