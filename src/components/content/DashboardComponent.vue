<template>
    <div class="card-wrapper">
        <CardDashboard card-color="#8566DE" :quantidade="quantidades" description="Registered books" @click="goToBooks()">
        </CardDashboard>
        <CardDashboard card-color="#4311D2" quantidade="8" description="Books read" @click="goToBooks()"></CardDashboard>
        <CardDashboard card-color="#8566DE" quantidade="2" description="Books in progress" @click="goToBooks()"></CardDashboard>
        <CardDashboard card-color="#4311D2" quantidade="10" description="Upcoming books" @click="goToBooks()"></CardDashboard>

        <div class="graphic-container">
            <Pie id="graphic" :options="optionsChart" :data="dataChart" />
        </div>
    </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { ref } from 'vue';
import CardDashboard from '../cards/CardDashboard.vue';
import { useRouter } from 'vue-router';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const dataChart = ref({
  labels: ['Books read', 'Books in progress', 'Books to read'],
  datasets: [
    {
      label: 'My Dataset',
      data: [40, 20, 12],
      backgroundColor: ['#FCBA02', '#FB9C02', '#57A2E5']
    }
  ]
})

const optionsChart = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Progress of your readings'
    }
  }
})

const quantidades = ref(21); // aqui tem ser o dado vindo do back com as funções de cada quantidade

const router = useRouter();

const goToBooks = () => {
  router.push({ name: 'books'});
}

</script>


<style scoped>
.card-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

}

.graphic-container {
  background-color: #fff;
  box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
}

@media screen and (max-width: 800px) {
  .graphic-container {
    width: 350px;
  }
}

@media screen and (max-width: 475px) {
  .graphic-container {
    width: 300px;
  }
}
</style>