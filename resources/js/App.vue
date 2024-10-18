<template>
    <navbar-component></navbar-component>

    <router-view></router-view>

    <footer-component></footer-component>
</template>

<script setup>
    import navbarComponent from './components/navbarComponent.vue'
    import footerComponent from './components/footerComponent.vue'
</script>

<style scoped>
</style>
