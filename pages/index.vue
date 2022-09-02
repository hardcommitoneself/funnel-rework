<template>
    <component :is="Theme">
        Hello Funnel
    </component>
</template>

<script setup>
const themeName = 'ContentPage'; // <!-- Template From Page
const Theme = resolveComponent(themeName)
</script>
  