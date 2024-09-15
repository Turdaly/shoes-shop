<template>
  <h1 class="t-text-xl t-font-medium t-uppercase">Обувь</h1>
  <div class="t-mb-6">
    <h2 class="t-text-lg t-font-bold t-mb-2">Подкатегории:</h2>
    <ul class="t-flex t-gap-2">
      <li class="t-bg-support t-rounded-lg">
        <div class="t-p-2 t-text-sm t-tracking-wider">Кроссовки</div>
      </li>
      <li class="t-bg-support t-rounded-lg">
        <div class="t-p-2 t-text-sm t-tracking-wider">Зимняя обувь</div>
      </li>
    </ul>
  </div>
  <div class="t-flex t-justify-between t-mb-2">
    <img
      src="~assets/icons/filter.svg"
      alt="filter icon"
      class="t-w-10 t-p-2"
    />
    <div class="t-flex t-items-center">
      <p class="t-font-bold t-text-sm t-hidden xs:t-block">Сортировать:</p>
      <Select class="t-translate-y-2 t-ml-1" />
    </div>
  </div>
  <div class="t-flex t-flex-wrap t-gap-4 lg:t-items-center">
    <Card :shoes="shoes" v-for="shoes in shoesList" :key="shoes.id" />
  </div>
  <v-container>
    <v-row justify="center">
      <v-col :cols="15">
        <v-container class="max-width">
          <v-pagination
            v-model="page"
            :length="totalPages"
            class="my-4"
            @update:modelValue="changePage"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useShoes } from "~/stores/shoes";
const route = useRoute();
const router = useRouter();
const itemsPerPage = 8;
const pageTo = ref<number>(8);
const page = ref<number>(Number(route.query.page) || 1);
const totalPages = ref<number>(
  Math.ceil(useShoes().shoes.length / itemsPerPage)
);
const shoesList = computed(() =>
  useShoes().filterByPrice.slice(
    pageTo.value * page.value - itemsPerPage,
    pageTo.value * page.value
  )
);

const changePage = (page: number) => {
  if (page === 1) {
    router.push({ name: "shoes" });
  } else {
    router.push({ query: { ...route.query, page } });
  }
};
</script>
