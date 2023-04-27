import { ref } from 'vue'
import { defineStore } from 'pinia'

import verde from '../assets/images/carousel/dami.png'

import dami from '../assets/images/carousel/dami.png'
import khanSaray from '../assets/images/carousel/khanSaray.png'
import hisan from '../assets/images/carousel/hisan.png'
import viceCity from '../assets/images/carousel/viceCity.png'
import zena from '../assets/images/carousel/zena.png'
import onlyFans from '../assets/images/carousel/onlyFans.png'
import friends from '../assets/images/carousel/friends.png'
import sansara from '../assets/images/carousel/sansara.png'
import meduza from '../assets/images/carousel/meduza.png'
import ezo from '../assets/images/carousel/ezo.png'

import verdeBig from '../assets/images/restaurants/verdeBig.png'

import damiBig from '../assets/images/restaurants/damiBig.png'
import khanSarayBig from '../assets/images/restaurants/khanSarayBig.png'
import hisanBig from '../assets/images/restaurants/hisanBig.png'
import viceCityBig from '../assets/images/restaurants/viceCityBig.png'
import zenaBig from '../assets/images/restaurants/zenaBig.png'
import onlyFansBig from '../assets/images/restaurants/onlyFansBig.png'
import friendsBig from '../assets/images/restaurants/friendsBig.png'
import sansaraBig from '../assets/images/restaurants/sansaraBig.png'
import meduzaBig from '../assets/images/restaurants/meduzaBig.png'
import ezoBig from '../assets/images/restaurants/ezoBig.png'

export const useRestaurantsStore = defineStore('restaurants', () => {
  const iftarResta = ref([
    {
      id: 0,
      name: 'Dami',
      kitchen: ['Turkish', 'European'],
      averageCheck: '4000',
      type: ['Restaraunts'],
      peculiarities: ['VIP hall', 'Playground', 'Wi-Fi'],
      description:
        'Dami is a Halal restaurant located on the outskirts of Almaty, Kazakhstan. The restaurant specializes in providing delicious iftar meals during the month of Ramadan. The interior of the restaurant is beautifully decorated, with a warm and welcoming atmosphere that will make you feel right at home.',
      imageSmall: dami,
      imageBig: damiBig,
      address: 'St. Rozybakiev, 153a',
      workingDay: '11:00 — 00:00',
      titleSecond:
        'From savory soups and stews to flavorful rice dishes and succulent grilled meats',
      descriptionSecond:
        'The menu at Dami features a variety of mouth-watering dishes that are prepared using only the freshest and highest quality Halal ingredients',
      descriptionThird:
        'During iftar, the restaurant offers a special menu that includes traditional Ramadan dishes such as dates, samosas, and freshly squeezed juices. The iftar menu changes daily to provide customers with a diverse selection of dishes throughout the month of Ramadan.',
      descriptionFouth: '',
      descriptionFifth:
        "Overall, Dami is a must-visit Halal restaurant in Almaty, especially during Ramadan. Whether you're looking to break your fast with family and friends or simply want to enjoy a delicious meal in a beautiful setting, Dami is the perfect choice.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.4310937428822!2d76.88900427670627!3d43.22142048024919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883697c610620f7%3A0xa81f853395eee734!2sDAMI%20CAFE%20ALMATY!5e0!3m2!1sru!2skz!4v1682580115224!5m2!1sru!2skz',
      events: 'Iftar'
    },

    {
      id: 1,
      name: 'Khan Saray',
      kitchen: ['Uzbek', 'Kazakh'],
      averageCheck: '6000',
      type: ['Cafe', 'Karaoke'],
      peculiarities: [
        'Background music',
        'Live music',
        'Dance floor',
        'Karaoke',
        'Show program',
        'Wi-Fi',
        'LED-TV'
      ],
      description:
        "Restaurant Saksaul offers to enjoy dishes of national and European cuisines.It offers live music, a children's room for little fidgets, banquet and VIP rooms for a secluded atmosphere.",
      imageSmall: khanSaray,
      imageBig: khanSarayBig,
      address: 'St. Tole Bi, 128',
      workingDay: '10:00 — 02:00',
      titleSecond: 'In the best traditions of national hospitality',
      descriptionSecond:
        "The best chefs from Kazakhstan will demonstrate their skills, who will cook beshbarmak, cheese in a bread yurt, kuyrdak, manti and many other dishes of national cuisine, according to recipes from the book published by the chef 'Kazakh Dastarkhan'",
      descriptionThird:
        'Amazing cuisine is the key to the success of any event! Our menu will not leave indifferent even the most demanding gourmets!',
      descriptionFouth: '',
      descriptionFifth: '',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9502587554525!2d76.9133152767074!3d43.25246427825633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369285202cd0f%3A0xd4b9abe08ba97442!2z0KXQsNC9INCh0LDRgNCw0Lk!5e0!3m2!1sru!2skz!4v1682580071281!5m2!1sru!2skz',
      events: 'Iftar'
    },

    {
      id: 2,
      name: 'HISAN',
      kitchen: ['European'],
      averageCheck: '20000',
      type: ['Restaraunts'],
      peculiarities: [
        'Panoramic view',
        'Halal',
        'Summer terrace',
        'Breakfast',
        'Banquets',
        'Wi-Fi'
      ],
      description:
        'Indulge in our exquisite menu, prepared by our talented chefs using only the finest, locally sourced ingredients. Each dish is a masterpiece, blending traditional and contemporary flavors to create a unique culinary experience that will tantalize your taste buds.',
      imageSmall: hisan,
      imageBig: hisanBig,
      address: 'St. Inkardaria, 102',
      workingDay: '10:00 — 00:00',
      titleSecond: 'Be surrounded by breathtaking panoramic views and a warm, welcoming atmosphere',
      descriptionSecond:
        "Our knowledgeable and attentive staff will cater to your every need, ensuring that you have a memorable dining experience. Whether it's a romantic dinner for two, a celebration with friends, or a business lunch, Hisan is the perfect place for any occasion.",
      descriptionThird:
        'Join us at Hisan and discover the ultimate dining destination in Almaty. Book your table today and treat yourself to an unforgettable culinary journey.',
      descriptionFouth: '',
      descriptionFifth: '',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92967.40434455691!2d76.84114884912282!3d43.267528079402396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369d7aa26ed9b%3A0x8b9fa9cc51e34bf!2z0KXQsNC9INCi0LXQvdCz0YDQuA!5e0!3m2!1sru!2skz!4v1682580028919!5m2!1sru!2skz',
      events: 'Iftar'
    }
  ])

  const marchResta = ref([
    {
      id: 3,
      name: 'Vice City Lounge',
      kitchen: ['American', 'European'],
      averageCheck: '10000',
      type: ['Restaraunts'],
      peculiarities: [
        'VIP hall',
        'Wine Map',
        'Dancing floor',
        'Wi-Fi',
        'Summer Terrace',
        'Banquets'
      ],
      description:
        'Vice City Lounge is a trendy and sophisticated lounge bar located in the heart of Almaty, Kazakhstan. The bar is known for its sleek and modern decor, which features luxurious leather seating, dim lighting, and a contemporary ambiance that is perfect for a night out with friends or a romantic evening with a loved one.',
      imageSmall: viceCity,
      imageBig: viceCityBig,
      address: 'St. Zhandosova, 58/1',
      workingDay: '12:00 — 02:00',
      titleSecond: 'Leather seating, dim lighting, and a contemporary ambiance',
      descriptionSecond:
        'The menu at Vice City Lounge is extensive and includes a variety of classic and creative cocktails, as well as a wide selection of wines and spirits.',
      descriptionThird:
        'The bartenders are highly skilled and can create custom drinks to suit your individual tastes and preferences.',
      descriptionFouth:
        'In addition to the impressive drink menu, Vice City Lounge also offers a small but delicious selection of bar bites and light snacks, perfect for enjoying alongside your drinks.',
      descriptionFifth:
        "Overall, Dami is a must-visit Halal restaurant in Almaty, especially during Ramadan. Whether you're looking to break your fast with family and friends or simply want to enjoy a delicious meal in a beautiful setting, Dami is the perfect choice.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.9913132412007!2d76.89481757670656!3d43.23064177965723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369bc5a780b77%3A0x87127fc08438e185!2sVice%20City%20Lounge!5e0!3m2!1sru!2skz!4v1682580388766!5m2!1sru!2skz',
      events: '8th March'
    },

    {
      id: 4,
      name: 'Zena',
      kitchen: ['Author`s'],
      averageCheck: '7000',
      type: ['Restaraunts'],
      peculiarities: ['Hookah', 'Sport Broadcasts', 'Dancing floor', 'Wi-Fi', 'VIP Halls'],
      description:
        'Zena is a charming restaurant located in Almaty, Kazakhstan, that offers a unique and memorable dining experience. The restaurant is particularly known for its annual 8th March celebration, which is a special day dedicated to honoring women.',
      imageSmall: zena,
      imageBig: zenaBig,
      address: 'St. Gabdullina, 67a',
      workingDay: '12:00 — 02:00',
      titleSecond: 'An ideal venue for birthday parties, anniversaries, and other festive events.',
      descriptionSecond:
        'The menu at Zena features a variety of dishes that are inspired by traditional Kazakh cuisine, as well as international flavors. ',
      descriptionThird:
        'The food is prepared using only the freshest and highest quality ingredients, ensuring that each dish is bursting with flavor.',
      descriptionFouth:
        'The menu includes dishes such as fresh salads, savory soups, and decadent desserts, all prepared with a special touch to make the occasion unforgettable.',
      descriptionFifth:
        'During the 8th March celebration, Zena offers a special menu that features a variety of dishes that are specifically designed to celebrate and honor women. ',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.0987126114755!2d76.90440007670658!3d43.228389979801996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369a70ebd22d3%3A0x9fa4b4bc4c022808!2z0KDQtdGB0YLQvtGA0LDQvSBaZW5h!5e0!3m2!1sru!2skz!4v1682580312688!5m2!1sru!2skz',
      events: '8th March'
    },

    {
      id: 5,
      name: 'Only Fans',
      kitchen: ['Pan-Asian'],
      averageCheck: '8000',
      type: ['Restaraunts'],
      peculiarities: ['Background music', 'Live Music', 'Dancing floor', 'Hookah', 'Show program'],
      description:
        "Only Fans is a unique and stylish thematic pub located in Almaty. The pub's decor is carefully designed to create an atmosphere of intrigue and sensuality, with dark lighting, plush seating, and a range of suggestive artwork and decorations.",
      imageSmall: onlyFans,
      imageBig: onlyFansBig,
      address: 'Dostyk Ave., 172, Grand Mildom​ Hotel',
      workingDay: '18:00 — 03:00',
      titleSecond:
        "the Ana's Blush, each drink is crafted to tantalize the senses and add to the sensual atmosphere of the pub",
      descriptionSecond:
        "Only Fans is  a destination for anyone looking for a night out that's a little bit different. Whether you're looking to spice up your date night or celebrate a special occasion with friends, Only Fans is the perfect spot.",
      descriptionThird:
        "Step into the world of '50 Shades of Grey' and experience the sensual atmosphere of Only Fans for yourself?",
      descriptionFouth:
        "With great drinks, an alluring atmosphere, and a range of unique experiences, it's the perfect spot for a night out with friends or a date with that special someone. ",
      descriptionFifth:
        "Don't miss out on the fun - visit Only Fans and see why it's quickly becoming one of the most popular pubs in Almaty.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.888784100376!2d76.95676217670672!3d43.2327913795193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fb570ab9335%3A0x2450a5f91292ba63!2sONLY%20FANS%20BAR%20By%20Mildom%20hotels!5e0!3m2!1sru!2skz!4v1682580285624!5m2!1sru!2skz',
      events: '8th March'
    }
  ])

  const newYearResta = ref([
    {
      id: 6,
      name: 'The FRIENDS',
      kitchen: ['European', 'Georgian'],
      averageCheck: '10000',
      type: ['Restaraunts'],
      peculiarities: ['Business lunch', 'DJ', 'Dancing floor', 'Live music'],
      description:
        'The FRIENDS restaurant with live music is a cozy place with a unique atmosphere and unique interior, where visitors can enjoy delicious food and live music in the company of their relatives and friends.',
      imageSmall: friends,
      imageBig: friendsBig,
      address: 'St. Manas, 50',
      workingDay: '12:00 — 01:00',
      titleSecond:
        "From the moment you step inside, you'll be struck by the elegant decor and welcoming atmosphere",
      descriptionSecond:
        'The restaurant is designed to create a warm and inviting ambiance, with comfortable seating and soft lighting that creates a relaxing environment.',
      descriptionThird:
        'But the real star of the show is the food. The menu is carefully crafted to showcase the flavors and textures of each dish, with a focus on locally sourced ingredients and innovative flavor combinations. From appetizers to desserts, each dish is a work of art that will leave you feeling satisfied and impressed.',
      descriptionFouth:
        "If you're looking for a dining experience that you won't forget, head to this popular restaurant and indulge in a delicious meal that will leave you feeling satisfied and impressed. Don't miss out on the chance to experience one of the best restaurants in town.",
      descriptionFifth: '',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.02754755676!2d76.9076943767066!3d43.22988207970603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369c6854b32a1%3A0xa34022905ea1404d!2sThe%20FRIENDS%20Restaurant%20Meat%7CDrink%7CDance!5e0!3m2!1sru!2skz!4v1682580220007!5m2!1sru!2skz',
      events: 'New Year'
    },

    {
      id: 7,
      name: 'Sansara',
      kitchen: ['European'],
      averageCheck: '6000',
      type: ['Restaraunts'],
      peculiarities: ['Summer Terrace', 'DJ', 'Dancing floor', 'Business lunch', 'VIP Hall'],
      description:
        "Sansara is a stylish bar and pub located in the heart of Almaty, and it's the perfect spot for anyone looking for a great night out. With a vibrant atmosphere, a range of delicious drinks, and a friendly staff, it's no wonder that Sansara has become one of the most popular bars in the city.",
      imageSmall: sansara,
      imageBig: sansaraBig,
      address: 'St. Nauryzbai batyr, 85',
      workingDay: '11:00 — 02:00',
      titleSecond:
        "Whether you're meeting friends for drinks after work or enjoying a night out, Sansara has something for everyone",
      descriptionSecond:
        "The menu features a range of delicious cocktails, wines, and beers, with options to suit all tastes and preferences. From classic drinks like martinis and old fashioneds to more creative concoctions, there's something for everyone at Sansara",
      descriptionThird:
        "Sansara is more than just a place to drink. It's also a hub for socializing and meeting new people. The friendly staff and welcoming atmosphere make it easy to strike up a conversation and make new friends. Whether you're a regular or a first-time visitor, you'll feel right at home at Sansara.",
      descriptionFouth: '',
      descriptionFifth:
        "Head to Sansara tonight and experience the best of Almaty's nightlife. With great drinks, a lively atmosphere, and a friendly staff, it's the perfect spot for a night out with friends or a date with that special someone.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1390227629377!2d76.93420097670722!3d43.24850807851029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f1de67d3c29%3A0x16dd6e0bd2c92870!2sSansara!5e0!3m2!1sru!2skz!4v1682580248504!5m2!1sru!2skz',
      events: 'New Year'
    }
  ])

  const corporateResta = ref([
    {
      id: 8,
      name: 'MEDUZA',
      kitchen: ['European'],
      averageCheck: '4500',
      type: ['Restaraunts'],
      peculiarities: ['Hookah', 'Karaoke', 'Billiadrs', 'Wi-Fi', 'VIP-Halls'],
      description:
        'Meduza is a unique restaurant located in Almaty, Kazakhstan that offers a perfect blend of great food and recreational activities. The restaurant is known for its beautiful outdoor seating areas and provides a unique dining experience for guests looking to relax and unwind.',
      imageSmall: meduza,
      imageBig: meduzaBig,
      address: 'St. Utegen batyr, 90',
      workingDay: '12:00 — 03:00',
      titleSecond: 'Elegantly decorated, with a warm and inviting atmosphere',
      descriptionSecond:
        'The interior of Meduza is elegantly decorated, with a warm and inviting atmosphere that makes you feel right at home. The menu at Meduza features a variety of dishes, including local and international cuisine, prepared using only the freshest and highest quality ingredients.',
      descriptionThird:
        'What sets Meduza apart from other restaurants in Almaty is its expansive outdoor space, which includes a beautiful garden and a variety of recreational activities. Guests can enjoy a game of volleyball, football, or badminton, or simply relax in one of the many comfortable seating areas.',
      descriptionFouth: '',
      descriptionFifth:
        "Whether you're looking to relax with friends and family or want to enjoy a delicious meal in a beautiful outdoor setting, Meduza has something for everyone.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.019744606612!2d76.94470737670649!3d43.23004567969566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f1c293c32d7%3A0xdf80f094d7faef76!2sMeduse%20Cafeteria%20Bar!5e0!3m2!1sru!2skz!4v1682580153943!5m2!1sru!2skz',
      events: 'Corporate'
    },

    {
      id: 9,
      name: 'Ezo',
      kitchen: ['Georgian'],
      averageCheck: '5000',
      type: ['Restaraunts'],
      peculiarities: ['Bakground music', 'Live Music', 'Dancing floor', 'Hookah', 'Show program'],
      description:
        "Ezo is a delightful Georgian restaurant located in the heart of Almaty, and it's the perfect spot for anyone looking to enjoy a taste of authentic Georgian cuisine. The restaurant's decor is warm and inviting, with traditional Georgian accents and comfortable seating that creates a welcoming atmosphere.",
      imageSmall: ezo,
      imageBig: ezoBig,
      address: 'St. Bogenbai batyr, 128',
      workingDay: '12:00 — 00:00',
      titleSecond: 'Traditional Georgian accents and comfortable seating',
      descriptionSecond:
        'The menu features a range of delicious Georgian dishes, with a focus on fresh ingredients and authentic flavors.',
      descriptionThird:
        "From hearty meat dishes like khinkali and chashushuli to vegetarian options like pkhali and lobio, there's something for everyone at Ezo. And don't forget to try the traditional Georgian cheese bread, khachapuri - it's a must-try dish!",
      descriptionFouth:
        "It's a destination for anyone looking to experience the rich culture and hospitality of Georgia. The friendly staff are always happy to answer questions and share stories about Georgian traditions and customs, making it a great spot for a cultural experience as well as a delicious meal.",
      descriptionFifth:
        "With delicious food, a warm and inviting atmosphere, and friendly staff, it's the perfect spot for a night out with friends or a date with that special someone. Don't miss out on the chance to experience one of the best Georgian restaurants in town - visit Ezo and see why it's quickly becoming a favorite among locals and visitors alike.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9269640818297!2d76.9449309767074!3d43.25295247822487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f8d85517127%3A0x3b77cac569f523b4!2zRVpPINCg0JXQodCi0J7QoNCQ0J0g0JPQoNCj0JfQmNCd0KHQmtCe0Jkg0JrQo9Cl0J3QmA!5e0!3m2!1sru!2skz!4v1682580189744!5m2!1sru!2skz',
      events: 'Corporate'
    }
  ])

  const newResta = ref([
    {
      id: 0,
      name: 'Dami',
      kitchen: ['Turkish', 'European'],
      averageCheck: '4000',
      type: ['Restaraunts'],
      peculiarities: ['VIP hall', 'Playground', 'Wi-Fi'],
      description:
        'Dami is a Halal restaurant located on the outskirts of Almaty, Kazakhstan. The restaurant specializes in providing delicious iftar meals during the month of Ramadan. The interior of the restaurant is beautifully decorated, with a warm and welcoming atmosphere that will make you feel right at home.',
      imageSmall: dami,
      imageBig: damiBig,
      address: 'St. Rozybakiev, 153a',
      workingDay: '11:00 — 00:00',
      titleSecond:
        'From savory soups and stews to flavorful rice dishes and succulent grilled meats',
      descriptionSecond:
        'The menu at Dami features a variety of mouth-watering dishes that are prepared using only the freshest and highest quality Halal ingredients',
      descriptionThird:
        'During iftar, the restaurant offers a special menu that includes traditional Ramadan dishes such as dates, samosas, and freshly squeezed juices. The iftar menu changes daily to provide customers with a diverse selection of dishes throughout the month of Ramadan.',
      descriptionFouth: '',
      descriptionFifth:
        "Overall, Dami is a must-visit Halal restaurant in Almaty, especially during Ramadan. Whether you're looking to break your fast with family and friends or simply want to enjoy a delicious meal in a beautiful setting, Dami is the perfect choice.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.4310937428822!2d76.88900427670627!3d43.22142048024919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883697c610620f7%3A0xa81f853395eee734!2sDAMI%20CAFE%20ALMATY!5e0!3m2!1sru!2skz!4v1682580115224!5m2!1sru!2skz',
      events: 'Iftar'
    },

    {
      id: 1,
      name: 'Khan Saray',
      kitchen: ['Uzbek', 'Kazakh'],
      averageCheck: '6000',
      type: ['Cafe', 'Karaoke'],
      peculiarities: [
        'Background music',
        'Live music',
        'Dance floor',
        'Karaoke',
        'Show program',
        'Wi-Fi',
        'LED-TV'
      ],
      description:
        "Restaurant Saksaul offers to enjoy dishes of national and European cuisines.It offers live music, a children's room for little fidgets, banquet and VIP rooms for a secluded atmosphere.",
      imageSmall: khanSaray,
      imageBig: khanSarayBig,
      address: 'St. Tole Bi, 128',
      workingDay: '10:00 — 02:00',
      titleSecond: 'In the best traditions of national hospitality',
      descriptionSecond:
        "The best chefs from Kazakhstan will demonstrate their skills, who will cook beshbarmak, cheese in a bread yurt, kuyrdak, manti and many other dishes of national cuisine, according to recipes from the book published by the chef 'Kazakh Dastarkhan'",
      descriptionThird:
        'Amazing cuisine is the key to the success of any event! Our menu will not leave indifferent even the most demanding gourmets!',
      descriptionFouth: '',
      descriptionFifth: '',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9502587554525!2d76.9133152767074!3d43.25246427825633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369285202cd0f%3A0xd4b9abe08ba97442!2z0KXQsNC9INCh0LDRgNCw0Lk!5e0!3m2!1sru!2skz!4v1682580071281!5m2!1sru!2skz',
      events: 'Iftar'
    },

    {
      id: 2,
      name: 'HISAN',
      kitchen: ['European'],
      averageCheck: '20000',
      type: ['Restaraunts'],
      peculiarities: [
        'Panoramic view',
        'Halal',
        'Summer terrace',
        'Breakfast',
        'Banquets',
        'Wi-Fi'
      ],
      description:
        'Indulge in our exquisite menu, prepared by our talented chefs using only the finest, locally sourced ingredients. Each dish is a masterpiece, blending traditional and contemporary flavors to create a unique culinary experience that will tantalize your taste buds.',
      imageSmall: hisan,
      imageBig: hisanBig,
      address: 'St. Inkardaria, 102',
      workingDay: '10:00 — 00:00',
      titleSecond: 'Be surrounded by breathtaking panoramic views and a warm, welcoming atmosphere',
      descriptionSecond:
        "Our knowledgeable and attentive staff will cater to your every need, ensuring that you have a memorable dining experience. Whether it's a romantic dinner for two, a celebration with friends, or a business lunch, Hisan is the perfect place for any occasion.",
      descriptionThird:
        'Join us at Hisan and discover the ultimate dining destination in Almaty. Book your table today and treat yourself to an unforgettable culinary journey.',
      descriptionFouth: '',
      descriptionFifth: '',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92967.40434455691!2d76.84114884912282!3d43.267528079402396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369d7aa26ed9b%3A0x8b9fa9cc51e34bf!2z0KXQsNC9INCi0LXQvdCz0YDQuA!5e0!3m2!1sru!2skz!4v1682580028919!5m2!1sru!2skz',
      events: 'Iftar'
    }
  ])

  const clickedRestaurant = ref({
    id: 0,
    name: '',
    kitchen: [''],
    averageCheck: '',
    type: [''],
    peculiarities: [''],
    description: '',
    imageBig: '',
    address: '',
    workingDay: '',
    titleSecond: '',
    descriptionSecond: '',
    descriptionThird: '',
    descriptionFouth: '',
    descriptionFifth: '',
    mapLink: '',
    events: ''
  })

  const restaurants = ref(
    iftarResta.value.concat(marchResta.value, newYearResta.value, corporateResta.value)
  )

  const filteredEstab = ref<Array<filtered>>([])

  interface filtered {
    id: number
    name: string
    kitchen: Array<string>
    averageCheck: string
    type: Array<string>
    peculiarities: Array<string>
    description: string
    imageSmall: string
    imageBig: string
    address: string
    workingDay: string
    titleSecond: string
    descriptionSecond: string
    descriptionThird: string
    descriptionFouth: string
    descriptionFifth: string
    mapLink: string
    events: string
  }

  const hotOfferRestaurant = ref([
    {
      id: 10,
      name: 'Verde',
      kitchen: ['European'],
      averageCheck: '8000',
      type: ['Restaraunts'],
      peculiarities: ['Breakfasts', 'Hotel', 'Background music', 'Wine map', 'Live music'],
      description:
        'Verde is a new restaurant in Almaty, located on the first floor of the GRAND MILDOM hotel. The conceptual themed restaurant allows guests to plunge into the atmosphere of an oasis, a picturesque entourage flora of several spaces.',
      imageSmall: verde,
      imageBig: verdeBig,
      address: 'Dostyk Ave., 172, Grand Mildom​ Hotel',
      workingDay: '07:00 — 00:00',
      titleSecond:
        'From the moment you step inside Verde, you are transported to a different world',
      descriptionSecond:
        'The decor, lighting, and music are all carefully designed to create a specific atmosphere that complements the theme of the restaurant.',
      descriptionThird:
        'The menu is also crafted to reflect the theme, with dishes that are not only delicious but also visually stunning.',
      descriptionFouth:
        "But Verde is more than just a place to eat. It's an opportunity to immerse yourself in a different culture, time period, or fantasy world.",
      descriptionFifth:
        "So why not step outside of your comfort zone and try something new? Visit Verde and experience the magic for yourself. Don't miss out on the chance to create lasting memories and indulge in a truly unique dining experience.",
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.872752820444!2d76.95705187670667!3d43.23312747949765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f7df13a14dd%3A0x3065dcf045bc4188!2sVERDE%20RESTAURANT%20by%20Grand%20Mildom%20Almaty!5e0!3m2!1sru!2skz!4v1682557909932!5m2!1sru!2skz',
      events: 'Iftar'
    }
  ])

  return {
    iftarResta,
    marchResta,
    newYearResta,
    corporateResta,
    newResta,
    clickedRestaurant,
    restaurants,
    filteredEstab,
    hotOfferRestaurant
  }
})
