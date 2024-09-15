<template>
  <v-select
    v-model="select"
    :items="items"
    item-title="label"
    item-value="value"
    label="Select"
    variant="outlined"
    persistent-hint
    return-object
    single-line
    @update:modelValue="changeSelect"
  ></v-select>
</template>

<script setup lang="ts">
const select = ref<Types.Select>({
  label: "по цене, сначала недорогие",
  value: "CH",
});
const items = [
  { label: "по цене, сначала недорогие", value: "CH" },
  { label: "по цене, сначала дорогие", value: "EX" },
  { label: "Избранные", value: "LIKE" },

];

const changeSelect = (newValue: any) => {
  useShoes().setSelect(newValue.value);
};
</script>
