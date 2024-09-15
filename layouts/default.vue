<template>
  <div class="t-h-full">
    <header
      class="t-flex t-justify-between sm:t-justify-end t-items-center t-border-b t-p-2 sm:t-border-b-0"
    >
      <div class="sm:t-hidden">
        <Icon
          v-if="isOpenMenu"
          name="material-symbols-light:close-rounded"
          class="t-p-4 t-mr-2"
          @click="isOpenMenu = false"
        />
        <Icon
          v-if="!isOpenMenu"
          name="material-symbols-light:menu"
          class="t-p-4 t-mr-2"
          @click="isOpenMenu = true"
        />
        <Icon name="material-symbols-light:search-rounded" class="t-p-3.5" />
      </div>
      <img
        src="https://sneakershox.ru/uploads/sfef.webp?rev=1716464082"
        alt="Sneaker Shox"
        class="t-absolute t-m-auto t-left-0 t-right-0 t-w-12 -t-translate-y-1 t-justify-between"
      />
      <div class="t-flex t-items-center t-gap-2">
        <Icon
          name="material-symbols-light:search-rounded"
          class="t-p-3.5 t-hidden sm:t-block"
        />
        <Icon name="material-symbols-light:favorite-outline" class="t-p-3.5" />
        <span class="t-text-xs t-px-1 -t-translate-x-5 -t-translate-y-1 t-bg-support t-rounded-full t-font-bold">{{ useShoes().counterLikes }}</span>
        <Icon
          name="material-symbols-light:person-outline-rounded"
          class="t-p-4 t-hidden sm:t-block"
        />
        <Icon name="material-symbols-light:garden-cart-outline" class="t-p-4" />
      </div>
    </header>
    <nav class="t-hidden sm:t-block">
      <ul class="t-flex t-justify-center t-gap-6">
        <Menu title="Обувь" :items="items"></Menu>
        <h3>Одежда</h3>
        <h3>Аксессуары</h3>
        <h3>Бренды</h3>
        <h3>Новинки</h3>
      </ul>
    </nav>
    <div class="t-flex">
      <aside></aside>
    </div>
    <main class="t-p-4">
      <slot> </slot>
    </main>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Все",
  },
  {
    title: "Кроссовки",
  },
  {
    title: "Зимняя обувь",
  },
];

const isOpenMenu = ref<boolean>(false);
</script>

<style scoped></style>
