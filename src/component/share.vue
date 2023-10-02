<template>
    <ion-modal ref="shareModal" :presentingElement="props.presentingElement" swipe-to-close>
        <ion-header>
            <ion-toolbar>
                <ion-title>共有</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="dismiss">閉じる</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content v-if="state.isLoading" class="text-center ion-padding">
            <ion-spinner name="crescent"></ion-spinner>
        </ion-content>
        <ion-content v-else>
            <p class="text-center">
                <img src="/example-com-qrcode.png" class="o-qrcode">
            </p>
            <p class="text-center">
                <ion-label>
                    <h2 class="font-weight-bold">{{ props.title }}</h2>
                    <p>{{ props.appName }}</p>
                </ion-label>
            </p>
            <p class="text-size-small text-center">
                <ion-text color="medium">
                    https://opstid.com{{ props.path }}
                </ion-text>

            </p>
            <p class="text-center">
                <ion-button size="small" @click="copy">コピー</ion-button>
            </p>
            <ion-list lines="none">
                <ion-item button>
                    <ion-icon :icon="linkOutline" slot="start"></ion-icon>
                    LINE
                </ion-item>
                <ion-item button>
                    <ion-icon :icon="logoTwitter" slot="start"></ion-icon>
                    Twitter
                </ion-item>
                <ion-item button>
                    <ion-icon :icon="logoInstagram" slot="start"></ion-icon>
                    Instagram
                </ion-item>
                <ion-item button @click="openNativeShareDialog">
                    <ion-icon :icon="appsOutline" slot="start"></ion-icon>
                    その他のアプリ
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-modal>
</template>
<script setup lang="ts">
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonLabel,
    IonText,
    IonIcon,
    IonList,
    IonItem,
    IonSpinner,
    toastController
} from "@ionic/vue"
import { appsOutline, checkmark, linkOutline, logoInstagram, logoTwitter, qrCodeOutline } from "ionicons/icons";
import { onMounted, reactive, ref } from "vue"

const props = defineProps({
    presentingElement: HTMLElement,
    title: String,
    path: String,
    appName: String
})

const shareModal = ref()

const state = reactive({
    isLoading: true,
})


const dismiss = () => {
    shareModal.value!.$el.dismiss()
}

const openNativeShareDialog = () => {
    navigator.share({
        title: props.title,
        url: "https://opstid.com" + props.path
    })
}
const copy = async () => {
    navigator.clipboard.writeText("https://opstid.com" + props.path)
    const toast = await toastController.create({
        message:"URLをクリップボードにコピーしました",
        duration:2000,
        position:"bottom",
        color:"primary",
        icon:checkmark
    })
    await toast.present()
}

onMounted(() => {
    setTimeout(() => state.isLoading = false, 1000)
})
</script>
<style scoped>
img.o-qrcode {
    width: 200px;
}
</style>