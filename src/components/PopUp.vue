<script setup lang="ts">
import { ref } from 'vue'
import { usePopupStore } from '../stores/popup'
const popup = usePopupStore()

function closePopup(value: boolean) {
  popup.isVisible = value
  popup.messageBtn = 'Reserve a table'
}

let mainPageBtn = ref(false)

function showGoMainPage(value: boolean) {
  mainPageBtn.value = value
  popup.messageBtn = 'Table Reserved!'
}
</script>

<template>
  <div class="popup-helper" @click="closePopup(false)"></div>
  <article class="popup-reserve">
    <h3 class="popup-reserve__title">Book a table</h3>

    <form action="#" class="popup-reserve__form form">
      <div class="form-input-wrapper">
        <input
          type="text"
          required
          class="form__input"
          autocomplete="off"
          name="email"
          placeholder="Phone number"
        />
        <input
          type="text"
          required
          class="form__input"
          autocomplete="off"
          name="email"
          placeholder="Amount of guests"
        />
      </div>

      <div class="form-input-wrapper">
        <input
          type="text"
          required
          class="form__input"
          autocomplete="off"
          name="email"
          placeholder="Date of booking"
        />
        <input
          type="text"
          required
          class="form__input"
          autocomplete="off"
          name="email"
          placeholder="Time of booking"
        />
      </div>

      <button
        type="button"
        :class="[
          'form__btn',
          {
            non_active: mainPageBtn === true
          }
        ]"
        @click="showGoMainPage(true)"
      >
        {{ popup.messageBtn }}
      </button>

      <button
        type="button"
        class="form__main-page-btn"
        v-if="mainPageBtn === true"
        @click="closePopup(false)"
      >
        Return to main
      </button>
      <span class="form__agreement"
        >By clicking the "Reserve a table" button, you agree with privacy policy</span
      >
    </form>
  </article>
</template>

<style scoped src="../assets/css/popUp.css"></style>
