<script setup>
import { ref, onMounted } from 'vue';
import ScratchCard from '../components/ScratchCard.vue'

const ScratchCardText = ref('');
const ScratchCardImage = ref('');
const ScratchCardTextColor = ref('');

const extractValuesFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    ScratchCardText.value = decodeURIComponent(params.get('text') || '');
    ScratchCardImage.value = decodeURIComponent(params.get('img') || '');
    ScratchCardTextColor.value = decodeURIComponent(params.get('color') || '');

    console.log(ScratchCardText.value, ScratchCardImage.value, ScratchCardTextColor.value);
};

onMounted(() => {
    extractValuesFromURL();
});
</script>

<template>
    <h1>Card</h1>
    <h3><span class="underlined-text">Swipe</span> for a pleasant surprise</h3>
    <ScratchCard :text="ScratchCardText" :backgroundImage="ScratchCardImage" :textColor="ScratchCardTextColor" />
</template>