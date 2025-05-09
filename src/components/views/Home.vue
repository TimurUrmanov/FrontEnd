<template>
  <div class="home">
    <h1>Туристичні подорожі</h1>

    <div class="search-bar">
      <input type="text" placeholder="Пошук турів" v-model="searchQuery" />
    </div>

    <div class="tour-section">
      <h2>Подорожі Україною</h2>
      <div class="tour-slider">
        <div
          class="tour"
          v-for="tour in filteredUkrainianTours"
          :key="tour.id"
        >
          <img :src="tour.image" :alt="tour.name" />
          <h3>{{ tour.name }}</h3>
          <p>{{ tour.description }}</p>
          <button @click="selectTour(tour)">Переглянути</button>
        </div>
      </div>
    </div>

    <div class="tour-section">
      <h2>Подорожі світом</h2>
      <div class="tour-slider">
        <div class="tour" v-for="tour in filteredWorldTours" :key="tour.id">
          <img :src="tour.image" :alt="tour.name" />
          <h3>{{ tour.name }}</h3>
          <p>{{ tour.description }}</p>
          <button @click="selectTour(tour)">Переглянути</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      searchQuery: "",
      ukrainianTours: [
        { id: 1, name: "Карпати", image: "/image/Тури/Укр/carpathians.jpg", description: "Похід в Карпати з гідом." },
        { id: 2, name: "Київ", image: "/image/Тури/Укр/kyiv.jpg", description: "Оглядова екскурсія по столиці." },
        { id: 3, name: "Львів", image: "/image/Тури/Укр/lviv.jpg", description: "Кавова історія Львова." },
        { id: 4, name: "Одеса", image: "/image/Тури/Укр/odesa.jpg", description: "Морський відпочинок на півдні." },
        { id: 5, name: "Кам'янець-Подільський", image: "/image/Тури/Укр/kamyanets.jpg", description: "Фортеця та фестивалі." },
        { id: 6, name: "Буковель", image: "/image/Тури/Укр/bukovel.jpg", description: "Гірськолижний курорт." },
        { id: 7, name: "Ужгород", image: "/image/Тури/Укр/uzhhorod.jpg", description: "Місто сакур і вин." },
        { id: 8, name: "Харків", image: "/image/Тури/Укр/kharkiv.jpg", description: "Технопарк, зоопарк, екскурсії." },
        { id: 9, name: "Полтава", image: "/image/Тури/Укр/poltava.jpg", description: "Культурна столиця Лівобережжя." },
        { id: 10, name: "Чернівці", image: "/image/Тури/Укр/chernivtsi.jpg", description: "Місто з європейською архітектурою." }
      ],
      worldTours: [
        { id: 11, name: "Таїланд", image: "/image/Тури/Світ/thailand.jpg", description: "Пляжний відпочинок у Пхукеті." },
        { id: 12, name: "Єгипет", image: "/image/Тури/Світ/egypt.jpg", description: "Піраміди, Ніл, дайвінг." },
        { id: 13, name: "Італія", image: "/image/Тури/Світ/italy.jpg", description: "Рим, Венеція та гастротури." },
        { id: 14, name: "Іспанія", image: "/image/Тури/Світ/spain.jpg", description: "Барселона, Севілья, мадридське сонце." },
        { id: 15, name: "Франція", image: "/image/Тури/Світ/france.jpg", description: "Париж та Лувр." },
        { id: 16, name: "Туреччина", image: "/image/Тури/Світ/turkey.jpg", description: "Анталія, Бодрум, Каппадокія." },
        { id: 17, name: "Чехія", image: "/image/Тури/Світ/czech.jpg", description: "Прага та старе місто." },
        { id: 18, name: "Німеччина", image: "/image/Тури/Світ/germany.jpg", description: "Берлін та Баварія." },
        { id: 19, name: "Індонезія (Балі)", image: "/image/Тури/Світ/bali.jpg", description: "Тропічний рай на острові Балі." },
        { id: 20, name: "США (Нью-Йорк)", image: "/image/Тури/Світ/ny.jpg", description: "Мегаполіс, Бродвей, Центральний парк." }
      ]
    };
  },
  computed: {
    filteredUkrainianTours() {
      return this.ukrainianTours.filter(tour =>
        tour.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredWorldTours() {
      return this.worldTours.filter(tour =>
        tour.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    selectTour(tour) {
      alert(`Ви вибрали тур: ${tour.name}`);
    }
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 450px; 
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.tour-section {
  margin-bottom: 40px;
}

.tour-slider {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 20px;
}

.tour {
  min-width: 200px;
  flex-shrink: 0;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.tour img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.tour h3 {
  margin: 10px 0 5px;
}

.tour p {
  font-size: 14px;
  color: #555;
}

.tour button {
  margin-top: 10px;
  background: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.tour button:hover {
  background: #0056b3;
}
</style>
