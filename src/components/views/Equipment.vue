<template>
  <div class="equipment">
    <h1>Туристичне спорядження</h1>

    <!-- Розділ оренди спорядження -->
    <div class="section">
      <h2>Оренда спорядження</h2>
      <input
        type="text"
        v-model="rentalSearch"
        placeholder="Пошук орендованого спорядження..."
        class="search-input"
      />
      <div class="slider">
        <div class="item" v-for="item in filteredRentalGear" :key="item.id">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <button @click="selectItem(item)">Орендувати</button>
        </div>
      </div>
    </div>

    <!-- Розділ покупки спорядження -->
    <div class="section">
      <h2>Покупка спорядження</h2>
      <input
        type="text"
        v-model="saleSearch"
        placeholder="Пошук для покупки..."
        class="search-input"
      />
      <div class="slider">
        <div class="item" v-for="item in filteredSaleGear" :key="item.id">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <button @click="selectItem(item)">Придбати</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { rentEquipment } from '@/components/conect/RentalsAPI';

export default {
  name: "EquipmentList", // Назва компонента
  data() {
    return {
      rentalSearch: "", // Пошуковий запит для оренди
      saleSearch: "", // Пошуковий запит для покупки
      rentalGear: [ // Список орендованого спорядження
        { id: 1, name: "Електросамокат", image: "/image/Спорядження/Оренда/electroscooter.jpg", description: "Для пересування по містах." },
        { id: 2, name: "Велосипед", image: "/image/Спорядження/Оренда/bicycle.jpg", description: "Для міських або гірських подорожей." },
        { id: 3, name: "Палатка", image: "/image/Спорядження/Оренда/tent.jpg", description: "Для кемпінгу або трекінгу." },
        { id: 4, name: "Спальний мішок", image: "/image/Спорядження/Оренда/sleeping_bag.jpg", description: "Для комфортного ночівлі на природі." },
        { id: 5, name: "Обладнання для кемпінгу", image: "/image/Спорядження/Оренда/camping_gear.jpg", description: "Столи, стільці, кухонні прилади." },
        { id: 6, name: "Скуба-дайвінг обладнання", image: "/image/Спорядження/Оренда/scuba_gear.jpg", description: "Для підводного плавання." },
        { id: 7, name: "Гірські лижі", image: "/image/Спорядження/Оренда/ski.jpg", description: "Для зимових відпочинків." },
        { id: 8, name: "Туристичний рюкзак", image: "/image/Спорядження/Оренда/backpack.jpg", description: "Різних розмірів для подорожей." },
        { id: 9, name: "Лодка або каное", image: "/image/Спорядження/Оренда/boat.jpg", description: "Для активного відпочинку на воді." },
        { id: 10, name: "Гамак", image: "/image/Спорядження/Оренда/hammock.jpg", description: "Для комфортного відпочинку на природі." }
      ],
      saleGear: [ // Список спорядження для продажу
        { id: 11, name: "Сонцезахисний крем", image: "/image/Спорядження/Продаж/sunscreen.jpg", description: "Для захисту від ультрафіолету." },
        { id: 12, name: "Туристичний набір 4 в 1", image: "/image/Спорядження/Продаж/travel_kit.jpg", description: "Ніж, лопата, сокира, пила" },
        { id: 13, name: "Туристичне взуття", image: "/image/Спорядження/Продаж/boots.jpg", description: "Черевики, сандалії для різних типів подорожей." },
        { id: 14, name: "Мультитул", image: "/image/Спорядження/Продаж/multitool.jpg", description: "Універсальний інструмент для різних потреб." },
        { id: 15, name: "Компас", image: "/image/Спорядження/Продаж/compass.jpg", description: "Для орієнтації на місцевості." },
        { id: 16, name: "Термос", image: "/image/Спорядження/Продаж/thermos.jpg", description: "Для збереження води." },
        { id: 17, name: "Одяг для активного відпочинку", image: "/image/Спорядження/Продаж/clothing.jpg", description: "Штани, футболки, куртки для туризму." },
        { id: 18, name: "Павербанк", image: "/image/Спорядження/Продаж/power_bank.jpg", description: "Для підтримки заряду у пристроях." },
        { id: 19, name: "Засоби від комарів", image: "/image/Спорядження/Продаж/repellent.jpg", description: "Спреї, браслети." },
        { id: 20, name: "Медичний набір", image: "/image/Спорядження/Продаж/first_aid_kit.jpg", description: "Аптечка для домедичної допомоги." }
      ]
    };
  },
  computed: {
    filteredRentalGear() {
      return this.rentalGear.filter(item =>
        item.name.toLowerCase().includes(this.rentalSearch.toLowerCase())
      );
    },
    filteredSaleGear() {
      return this.saleGear.filter(item =>
        item.name.toLowerCase().includes(this.saleSearch.toLowerCase())
      );
    }
  },
  methods: {
    async selectItem(item) {
      const userId = 1; // ID користувача (можна отримати з сесії або авторизації)
      const rentalPeriod = 5; // Приклад періоду оренди (5 днів)

      try {
        // Викликаємо API для оренди спорядження
        const rentalData = await rentEquipment(item.id, userId, rentalPeriod);
        alert(`Оренда успішно оформлена для: ${item.name}`);
        console.log(rentalData); // Лог даних оренди для подальшої обробки
      } catch (error) {
        alert('Не вдалося оформити оренду');
      }
    }
  }
};
</script>

<style scoped>
.equipment {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.section {
  margin-bottom: 40px;
}

.search-input {
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 450px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0;
}

.item {
  min-width: 300px;
  background: #f0f0f0;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.item h3 {
  margin: 10px 0 5px;
}

.item p {
  font-size: 14px;
  color: #555;
}

.item button {
  margin-top: 10px;
  background: #28a745;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.item button:hover {
  background: #218838;
}
</style>
