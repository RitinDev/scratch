<script setup>
import { ref } from 'vue';
import MakeCard from '../components/MakeCard.vue';
import LinkIcon from '../components/icons/LinkIcon.vue';

const ScratchCardTextColor = ref('#000000');
const ScratchCardImage = ref('https://images.squarespace-cdn.com/content/551a19f8e4b0e8322a93850a/1573861732601-PTWHSU2HW5BZ9C2IASCM/Intro_Parallax.gif?content-type=image%2Fgif');
</script>

<template>
    <h1>Create</h1>
    <h3>Add a message and an image to create a memorable <span class="underlined-text">scratch card</span></h3>
    <div class="container">
        <MakeCard :backgroundImage="ScratchCardImage" :textColor="ScratchCardTextColor" />
        <div class="fields">
            <div class="color-picker">
                <span>Text Color</span>
                <input type="color" v-model="ScratchCardTextColor" />
            </div>
            <div class="background-image-field">
                <span>Background Image</span>
                <div class="image-input">
                    <div class="input-wrapper">
                        <LinkIcon class="link-icon" />
                        <input type="url" v-model="ScratchCardImage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input[type=color] {
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 50%;
    overflow: hidden;
    align-self: center;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

input[type=color]::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
    padding: 0;
}

input[type=color]::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 50%;
    padding: 0;
}

.container {
    display: flex;
    flex-direction: row;
    gap: 1em;
}

.color-picker, .background-image-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
}

.background-image-field input {
    padding: 0 8px 0 32px;
    vertical-align: middle;
    border-width: 100%;
    min-height: 36px;
    background-color: #ffffff;
    border: 1px solid rgba(36, 28, 21, 0.3);
    transition: all 0.2s ease-in-out 0s;
    font-size: 16px;
    line-height: 18px;
    font-weight: normal;
}

.color-picker span,
.background-image-field span {
    font-size: 1.1em;
}

.image-input {
    display: flex;
    align-items: center;
    position: relative;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.link-icon {
    position: absolute;
    left: 10px;
    pointer-events: none;
}

.input-wrapper input {
    padding-left: 32px;
}

.fields {
    display: flex;
    flex-direction: column;
    gap: 0.7em;

    width: 250px;
    height: fit-content;

    padding-top: 1em;
}

@media screen and (max-width: 800px) {
    .container {
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }

    .fields {
        flex-direction: row;
        gap: 2em;
        width: 80%;
        justify-content: space-around;
    }

}
</style>
