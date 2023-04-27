<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollStore } from '../stores/scrollNavbar'
const scrollStore = useScrollStore()

const specialEvent = ref()

onMounted(() => {
  scrollStore.specialEvent = specialEvent.value
  console.log(scrollStore.specialEvent)
})
</script>

<template>
  <article class="choose-best" ref="specialEvent">
    <div class="choose-best-text">
      <span class="choose-best-text__name-section">Choose the best venues</span>

      <h2 class="choose-best-text__title">
        Choosing <span class="choose-best-text__title_yellow">the best venue</span> for an event is
        a critical decision that can greatly
        <span class="choose-best-text__title_yellow">impact the success of the event</span>
      </h2>
    </div>

    <div class="choose-best-find">
      <p class="choose-best-find__paragraph">
        The venue sets the stage for the entire event, from the ambiance to the catering, and it's
        important to find the perfect setting that matches your vision, budget, and audience.
      </p>

      <button type="button" class="choose-best-find__btn">Find restaurant</button>
    </div>
  </article>
</template>

<style scoped src="../assets/css/chooseBest.css"></style>
