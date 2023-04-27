<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollStore } from '../stores/scrollNavbar'
const scrollStore = useScrollStore()

const forPartner = ref()

onMounted(() => {
  scrollStore.forPartner = forPartner.value
  console.log(scrollStore.forPartner)
})
</script>

<template>
  <article class="send-application" ref="forPartner">
    <div class="send-application-text">
      <span class="send-application-text__name-section">For partners</span>

      <h2 class="send-application-text__title">
        Request <span class="send-application-text__title_yellow">collaboration</span>
      </h2>

      <p class="send-application-text__paragraph">
        Collab is critical in case of promoting your restaurant — our service can help you in
        achieving objectives in this task
      </p>
    </div>

    <div class="send-application-form-wrapper">
      <form action="#" class="send-application-form form">
        <div class="form-input-wrapper">
          <input
            type="text"
            required
            class="form__input"
            autocomplete="off"
            name="name"
            placeholder="Name"
          />
          <input
            type="text"
            required
            class="form__input"
            autocomplete="off"
            name="email"
            placeholder="Email"
          />
        </div>

        <textarea
          name="comment"
          id="1"
          cols="30"
          rows="10"
          class="form__input"
          autocomplete="off"
          placeholder="Commentary"
        ></textarea>

          <button type="button" class="form__btn">Request</button>
      </form>
    </div>
  </article>
</template>

<style scoped src="../assets/css/sendApplication.css"></style>
