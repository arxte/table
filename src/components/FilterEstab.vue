<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRestaurantsStore } from '@/stores/restaurants'
const restaurantsStore = useRestaurantsStore()
import { useScrollStore } from '../stores/scrollNavbar'
const scrollStore = useScrollStore()

const search = ref()

onMounted(() => {
  scrollStore.search = search.value
  console.log(scrollStore.search)
})

const estab = ref()
const kitchen = ref()
const average = ref()

// onMounted(() => {
//   console.log(estab.value, kitchen.value, average.value)
// })

function startFilter() {
  restaurantsStore.filteredEstab = []
  console.log(estab.value, kitchen.value, average.value)
  restaurantsStore.restaurants.forEach((item) => {
    item.kitchen.forEach((kit) => {
      if(kitchen.value === kit && average.value === item.averageCheck && estab.value === item.events) {
      console.log(item)
      restaurantsStore.filteredEstab.push(item)
      console.log(restaurantsStore.filteredEstab)
    } else {
      console.log('nety')
    }
    })
  })
  
}

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

  console.log(restaurantsStore.clickedRestaurant)
}
</script>

<template>
  <article class="filter-estab" ref="search">
    <div class="filter-estab-text">
      <span class="filter-estab-text__name-section">Selection of establishments</span>

      <h2 class="filter-estab-text__title">
        Find <span class="filter-estab-text__title_yellow"> the right</span> restaurant
      </h2>

      <p class="filter-estab-text__paragraph">
        Look for the venue that fits you the best by using our search — fill in the important
        criterias and find the best choice
      </p>
    </div>

    <div class="filter-estab-form">
      <select name="type-estab" id="1" v-model="estab">
        <option value="" disabled selected hidden class="placeholder">
          Value of establishments
        </option>
        <option value="Iftar">Iftar</option>
        <option value="New Year">New Year</option>
        <option value="Corporate">Corporate</option>
        <option value="8th march">8th march</option>
      </select>

      <select name="kitchen" id="1" v-model="kitchen">
        <option value="" disabled selected hidden class="placeholder">Kitchen</option>
        <option value="Turkish">Turkish</option>
        <option value="European">European</option>
        <option value="Asian">Asian</option>
        <option value="Uzbek">Uzbek</option>
        <option value="Kazakh">Kazakh</option>
        <option value="Georgian">Georgian</option>
        <option value="American">American</option>
        <option value="Author`s">Author`s</option>
        <option value="Pan-Asian">Pan-Asian</option>
      </select>

      <select name="average" id="1" v-model="average">
        <option value="" disabled selected hidden class="placeholder">Average check</option>
        <option value="4000">4000</option>
        <option value="4500">4500</option>
        <option value="5000">5000</option>
        <option value="6000">6000</option>
        <option value="7000">7000</option>
        <option value="8000">8000</option>
        <option value="10000">10000</option>
        <option value="15000">15000</option>
      </select>

      <button type="button" class="filter-estab-form__btn" @click="startFilter()">Search</button>
    </div>
  </article>
  <section class="filtered-estab">
      <div
            class="carousel__item item"
            v-for="restaurant in restaurantsStore.filteredEstab"
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

                  <span class="item-text-about__nomination-value">{{ restaurant.kitchen[0] }}</span>
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
    </section>
</template>

<style scoped src="../assets/css/filterEstab.css"></style>
