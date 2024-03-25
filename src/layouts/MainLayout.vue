<template>
    <div>
        <HeaderSection />
        <router-view />
        <FooterSection />
    </div>
</template>
<script setup>
import FooterSection from './sections/FooterSection.vue';
import HeaderSection from './sections/HeaderSection.vue';
</script>