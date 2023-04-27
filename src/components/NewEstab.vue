<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { register } from 'swiper/element/bundle'

import { useRestaurantsStore } from '@/stores/restaurants'
register()

const swiperEl = ref()
const nextBtn = ref()
const prevBtn = ref()
let swiper, progress
onMounted(() => {
  console.log(swiperEl.value)

  const swiperParams = {
    slidesPerView: 1,

    pagination: {
      el: '.pagination'
    }
  }

  console.log(swiperParams)

  Object.assign(swiperEl, swiperParams)

  swiperEl.value.initialize()
})

// function next() {
//   swiperEl.value.swiper.slideNext()
// }

// function prev(event: any) {
//   swiperEl.value.swiper.slidePrev()
//   console.log(swiper.activeIndex)
// }

function up(event: any) {
  [swiper, progress] = event.detail
}

const restaurantsStore = useRestaurantsStore()

function showPageRestaurant(
  id: number,
  name: string,
  kitchen: Array<string>,
  averageCheck: string,
  type: Array<string>,
  peculiarities: Array<string>,
  description: string,
  imageBig: string,
  address: string,
  workingDay: string,
  titleSecond: string,
  descriptionSecond: string,
  descriptionThird: string,
  descriptionFouth: string,
  descriptionFifth: string,
  mapLink: string,
  events: string
) {
  restaurantsStore.clickedRestaurant.id = id
  restaurantsStore.clickedRestaurant.name = name
  restaurantsStore.clickedRestaurant.kitchen = kitchen
  restaurantsStore.clickedRestaurant.averageCheck = averageCheck
  restaurantsStore.clickedRestaurant.type = type
  restaurantsStore.clickedRestaurant.peculiarities = peculiarities
  restaurantsStore.clickedRestaurant.description = description
  restaurantsStore.clickedRestaurant.imageBig = imageBig
  restaurantsStore.clickedRestaurant.address = address
  restaurantsStore.clickedRestaurant.workingDay = workingDay
  restaurantsStore.clickedRestaurant.titleSecond = titleSecond
  restaurantsStore.clickedRestaurant.descriptionSecond = descriptionSecond
  restaurantsStore.clickedRestaurant.descriptionThird = descriptionThird
  restaurantsStore.clickedRestaurant.descriptionFouth = descriptionFouth
  restaurantsStore.clickedRestaurant.descriptionFifth = descriptionFifth
  restaurantsStore.clickedRestaurant.mapLink = mapLink
  restaurantsStore.clickedRestaurant.events = events
}
</script>

<template>
  <article class="new-establishments">
    <div class="new-establishments-text">
      <span class="new-establishments-text__name-section">New establishments</span>

      <h2 class="new-establishments-text__title">
        Check out our <span class="new-establishments-text__title_yellow">new restaurants</span>
      </h2>
    </div>

    <div class="new-establishments-search-wrapper">
      <swiper-container ref="swiperEl" init="false" @progress="up($event)" class="swiper-container">
        <swiper-slide class="swiper-slide">
          <router-link to="/restaurant" class="carousel__link">
            <div
              class="carousel__item item"
              v-for="restaurant in restaurantsStore.newResta"
              :key="restaurant.id"
              @click="
                showPageRestaurant(
                  restaurant.id,
                  restaurant.name,
                  restaurant.kitchen,
                  restaurant.averageCheck,
                  restaurant.type,
                  restaurant.peculiarities,
                  restaurant.description,
                  restaurant.imageBig,
                  restaurant.address,
                  restaurant.workingDay,
                  restaurant.titleSecond,
                  restaurant.descriptionSecond,
                  restaurant.descriptionThird,
                  restaurant.descriptionFouth,
                  restaurant.descriptionFifth,
                  restaurant.mapLink,
                  restaurant.events
                )
              "
            >
              <div class="item__img">
                <img :src="`${restaurant.imageSmall}`" alt="estab" />
              </div>

              <div class="item-text-wrapper">
                <h3 class="item-text__title">{{ restaurant.name }}</h3>

                <div class="item-text-about">
                  <div class="item-text-about-kitchen">
                    <span class="item-text-about__nomination">Kitchen</span>

                    <span class="item-text-about__nomination-value">{{
                      restaurant.kitchen[0]
                    }}</span>
                  </div>

                  <div class="item-text-about-average-check">
                    <span class="item-text-about__nomination">Average check</span>

                    <span class="item-text-about__nomination-value"
                      >{{ restaurant.averageCheck }}₸</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper-container>

      <div class="new-establishments-search search">
        <span class="search__text">Elect venues by kitchens you prefer</span>

        <select name="type-estab" id="4">
          <option value="" disabled selected hidden class="placeholder">Kitchen</option>
          <option value="1">Turkish</option>
          <option value="2">European</option>
          <option value="3">Asian</option>
          <option value="4">Uzbek</option>
          <option value="5">Kazakh</option>
          <option value="6">Georgian</option>
          <option value="7">American</option>
          <option value="8">Author`s</option>
          <option value="9">Pan-Asian</option>
        </select>

        <div class="control__navigation">
          <div class="custom-prev navigation__item" ref="prevBtn">
            <img src="../assets/images/carousel/arrow/prev.svg" alt="arrow" />
          </div>
          <div class="custom-next navigation__item" ref="nextBtn">
            <img src="../assets/images/carousel/arrow/next.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped src="../assets/css/newEstab.css"></style>
