<template>
  <v-menu open-on-hover open-on-click>
    <template v-slot:activator="{ props }">
      <h3 v-bind="props" class="t-cursor-pointer hover:t-text-hover_primary">
        {{ title }}
      </h3>
    </template>

    <v-list class="t-w-64">
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title
          class="t-cursor-pointer hover:t-text-hover_secondary"
          >{{ item.title }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; items: any }>();
</script>
