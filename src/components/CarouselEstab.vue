<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import 'swiper/css'
// import 'swiper/css/bundle'
import { register } from 'swiper/element/bundle'

import { useRestaurantsStore } from '@/stores/restaurants'
register()

const swiperEl = ref()
const nextBtn = ref()
const prevBtn = ref()
const paginationOne = ref()
const paginationTwo = ref()
const paginationThree = ref()
const paginationFour = ref()
let paginationBullet: any
let swiper: any, progress
onMounted(() => {
  // console.log(paginationBullet.value)
  paginationBullet = [
    paginationOne.value,
    paginationTwo.value,
    paginationThree.value,
    paginationFour.value
  ]

  const swiperParams = {
    slidesPerView: 1,

    pagination: {
      el: '.pagination'
    }
  }

  Object.assign(swiperEl, swiperParams)

  swiperEl.value.initialize()
})

function next() {
  swiperEl.value.swiper.slideNext()
  paginationBullet.forEach((element: any, id: number) => {
    element.classList.remove('pagination__item_active')
    if (id === swiper.activeIndex) {
      element.classList.add('pagination__item_active')
    }
  })
}

function prev(event: any) {
  swiperEl.value.swiper.slidePrev()
  paginationBullet.forEach((element: any, id: number) => {
    element.classList.remove('pagination__item_active')
    if (id === swiper.activeIndex) {
      element.classList.add('pagination__item_active')
    }
  })
}

function up(event: any) {
  ;[swiper, progress] = event.detail
  // console.log(swiper.activeIndex, progress)
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
// const modules = [Navigation, Pagination, Scrollbar, A11y]
</script>

<template>
  <article class="carousel-estab">
    <div class="carousel-estab-text">
      <span class="carousel-estab-text__name-section">Thematic establishments</span>

      <h2 class="carousel-estab-text__title">
        Venues for <span class="carousel-estab-text__title_yellow">various</span> events
      </h2>
    </div>

    <div class="carousel">
      <swiper-container ref="swiperEl" init="false" @progress="up($event)" class="swiper-container">
        <swiper-slide class="swiper-slide">
          <router-link to="/restaurant" class="carousel__link">
            <div
              class="carousel__item item"
              v-for="restaurant in restaurantsStore.marchResta"
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

        <swiper-slide class="swiper-slide">
          <router-link to="/restaurant" class="carousel__link">
            <div
              class="carousel__item item"
              v-for="restaurant in restaurantsStore.iftarResta"
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

        <swiper-slide class="swiper-slide">
          <router-link to="/restaurant" class="carousel__link">
            <div
              class="carousel__item item"
              v-for="restaurant in restaurantsStore.newYearResta"
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

        <swiper-slide class="swiper-slide">
          <router-link to="/restaurant" class="carousel__link">
            <div
              class="carousel__item item"
              v-for="restaurant in restaurantsStore.corporateResta"
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

      <div class="carousel__control control">
        <div class="control__pagination pagination">
          <span class="pagination__item pagination__item_active" ref="paginationOne">
            8th March
          </span>

          <span class="pagination__item" ref="paginationTwo"> Iftar </span>

          <span class="pagination__item" ref="paginationThree"> New Year </span>

          <span class="pagination__item" ref="paginationFour"> Corporate </span>
        </div>

        <div class="control__navigation">
          <div class="custom-prev navigation__item" ref="prevBtn" @click="prev($event)">
            <img src="../assets/images/carousel/arrow/prev.svg" alt="arrow" />
          </div>
          <div class="custom-next navigation__item" ref="nextBtn" @click="next">
            <img src="../assets/images/carousel/arrow/next.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped src="../assets/css/carouselEstab.css"></style>
