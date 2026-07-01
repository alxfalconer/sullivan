<template>
  <div class="min-h-screen px-8 max-w-[560px] mx-auto">

    <!-- Back -->
    <div class="pt-10">
      <NuxtLink
        to="/"
        class="text-[13px] text-muted font-body no-underline hover:text-ink transition-colors duration-150"
      >
        ←
      </NuxtLink>
    </div>

    <template v-if="observation">

      <!-- Header -->
      <div class="mt-14 mb-10">
        <span class="text-[10.5px] uppercase tracking-[0.1em] text-muted font-body">
          {{ observation.number }}
        </span>
        <h1 class="font-display text-[1.25rem] font-normal leading-[1.25] text-ink mt-3">
          {{ observation.title }}
        </h1>
      </div>

      <!-- Body -->
      <div class="space-y-6 text-[14.5px] leading-[1.7] text-ink font-body pb-20">
        <slot>
          <p>
            When lumber became cheap, we did not need more houses. We needed better architects.
            The abundance of a material changes the nature of the problem — but it does not change
            the nature of judgment. It makes judgment more necessary, not less.
          </p>
          <p>
            A product grows in proportion to its team's loss of confidence. Features accumulate
            the way rooms are added to a house that was never properly designed. Each addition is
            individually defensible. The accumulation becomes uninhabitable.
          </p>
          <p>
            Complexity settles the way dust does — silently, continuously, without announcement.
            You don't notice until the light catches it at a particular angle. By then the habit
            of accumulation is well established, and clearing it feels like destruction rather
            than restoration.
          </p>
          <p>
            An architectural review is not a hostile act. It is a necessary one. Buildings are
            inspected. Bridges are load-tested. The question is not whether something was built,
            but whether it deserves to stand — and whether what it has become is still what
            it was meant to be.
          </p>
          <p>
            Placeholder text. This observation will be replaced with the full essay. The structure,
            reading experience, and typographic system are in place and ready to receive it.
          </p>
        </slot>
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
</script>
