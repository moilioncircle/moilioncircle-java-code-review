<template>
  <i :class="['icon',  iconPrefix + icon]"></i>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { themeOption } from '../configs/theme';

defineProps<{
  icon: string;
}>();

const iconPrefix = themeOption.iconPrefix || '';
</script>

<style scoped>
</style>
