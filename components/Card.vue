<template>
  <div
    class="md:t-w-[calc(33%-10px)] lg:t-w-[calc(25%-15px)] xl:t-w-[calc(20%-15px)]  t-w-[calc(50%-10px)]"
  >
    <div class="t-relative t-border t-rounded-xl t-group t-cursor-pointer" @click="useRouter().push({ name: 'shoes-id', params: { id: 1}})">
      <img :src="shoes.img[0]" alt="" />
      <Icon
        :name="
          shoes.isFavorite
            ? 'material-symbols-light:favorite'
            : 'material-symbols-light:favorite-outline'
        "
        class="t-absolute t-top-2 t-right-2 t-p-3.5 t-opacity-1 md:t-opacity-0 md:group-hover:t-opacity-100 t-transition-opacity t-duration-300 t-cursor-pointer"
        :class="shoes.isFavorite ? 't-bg-red-400' : ''"
        @click="toggleColor"
        @click.stop
      />
      <Icon
        name="material-symbols-light:close"
        class="t-p-3.5 t-absolute t-top-2 t-left-2 t-opacity-1 md:t-opacity-0 md:group-hover:t-opacity-100 t-transition-opacity t-duration-300 t-cursor-pointer"
        @click="isOpenDialog = true"
        @click.stop
        />
    </div>
    <div class="t-mt-12 t-mb-1">
      <NuxtLink :to="{ name: 'shoes-id', params: {id: 1}}" class="t-text-gray-400">
        {{ shoes.title }}
      </NuxtLink>
    </div>
    <p class="t-font-bold">{{ shoes.price }} ₽</p>

    <!-- Dialog -->
    <div
      v-if="isOpenDialog"
      class="t-fixed t-inset-0 t-flex t-items-center t-justify-center t-bg-neutral-600 t-bg-opacity-50 t-z-10"
      @click="isOpenDialog = false"
    >
      <div
        class="t-bg-white t-rounded-md t-shadow-lg t-max-w-lg t-w-full t-p-6"
        @click.stop
      >
        <h3 class="t-text-xl t-font-medium t-text-center">Вы точно хотите удалить этот обувь {{ shoes.title }}?</h3>
        <div class="t-flex t-justify-end t-mt-4 t-gap-4">
          <button class="t-p-2 t-bg-support t-rounded-md t-px-6" @click="isOpenDialog = false">Отмена</button>
          <button class="t-p-2 t-bg-red-400 t-rounded-md t-px-6" @click="useShoes().removeShoes(shoes.id)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ shoes: any }>();
const isFavorite = ref<boolean>(false);
const isOpenDialog = ref<boolean>(false);
const toggleColor = () => {
  isFavorite.value = !isFavorite.value;
  props.shoes.isFavorite = isFavorite.value;
};
</script>
