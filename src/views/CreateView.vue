<script setup>
import { ref } from 'vue';
import MakeCard from '../components/MakeCard.vue';
import LinkIcon from '../components/icons/LinkIcon.vue';
import CopyIcon from '../components/icons/CopyIcon.vue';

const ScratchCardText = ref('');
const ScratchCardImage = ref('https://images.squarespace-cdn.com/content/551a19f8e4b0e8322a93850a/1573861732601-PTWHSU2HW5BZ9C2IASCM/Intro_Parallax.gif?content-type=image%2Fgif');
const ScratchCardTextColor = ref('#000000');
const generatedLink = ref('');
const copyMessage = ref('');

const copyToClipboardFallback = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        copyMessage.value = 'Link copied to clipboard!';
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        copyMessage.value = 'Failed to copy link';
    }
    document.body.removeChild(textarea);
};

const generateLink = () => {
    const baseUrl = `${window.location.origin}/scratch/card`;
    const encodedText = encodeURIComponent(ScratchCardText.value);
    const encodedImage = encodeURIComponent(ScratchCardImage.value);
    const encodedColor = encodeURIComponent(ScratchCardTextColor.value);
    generatedLink.value = `${baseUrl}?text=${encodedText}&img=${encodedImage}&color=${encodedColor}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(generatedLink.value).then(() => {
            copyMessage.value = 'Link copied to clipboard!';
            setTimeout(() => {
                copyMessage.value = '';
            }, 2000); // message disappears after 2 seconds
        }).catch(() => {
            copyToClipboardFallback(generatedLink.value);
        });
    } else {
        copyToClipboardFallback(generatedLink.value);
    }
};

const updateText = (newText) => {
    ScratchCardText.value = newText;
};
</script>

<template>
    <h1>Create</h1>
    <h3>Add a message and an image to create a memorable <span class="underlined-text">scratch card</span></h3>
    <div class="container">
        <MakeCard :backgroundImage="ScratchCardImage" :textColor="ScratchCardTextColor" @update:text="updateText" />
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
            <button class="create-button" @click="generateLink" @touchstart="generateLink" @touchend="generateLink">
                <CopyIcon width="15" height="15" /> Share Card
            </button>
            <p v-if="copyMessage" class="copy-message">{{ copyMessage }}</p>
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

.color-picker,
.background-image-field {
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

.create-button {
    display: inline-block;
    width: 90%;
    align-self: center;
    margin-top: 0.5em;
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0 56px;
    height: 45px;
    line-height: 45px;
    background-color: #00f3a6;
    color: var(--text-color);
    font-weight: 400;
    font-size: 16px;
    box-shadow: 0 4px 14px 0 rgba(0, 255, 119, 0.39);
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.create-button:hover {
    background: rgba(153, 255, 0, 0.834);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
}

.copy-message {
    color: green;
    font-size: 0.9em;
    text-align: center;
    text-transform: capitalize;
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
        flex-wrap: wrap;
    }
}
</style>
