<template>
    <ion-modal ref="shareModal" class="o-share-modal" :presentingElement="props.presentingElement" swipe-to-close
        @did-dismiss="didDismiss" @did-present="didPresent">
        <ion-header>
            <ion-toolbar>
                <ion-buttons v-if="state.currentPage === 'selectMainProfile'" class="o-animation-slide-in-right">
                    <ion-button @click="state.currentPage = 'default'">
                        <ion-icon :icon="chevronBack" slot="start"></ion-icon>
                        戻る
                    </ion-button>
                </ion-buttons>
                <ion-title>共有</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="dismiss">閉じる</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content v-if="state.isLoading" class="text-center ion-padding">
            <ion-spinner class="content-center"></ion-spinner>
        </ion-content>
        <ion-content v-else-if="state.currentPage === 'default'" class="o-animation-slide-in-left">
            <p class="text-center">
            <div v-if="!state.isQRCodeHidden">
                <img src="/example-com-qrcode.png" class="o-qrcode o-animation-slide-in-left"><br>
                <ion-button size="small" fill="clear" @click="state.isQRCodeHidden = true">
                    <ion-icon :icon="eyeOffOutline" slot="start"></ion-icon>
                    QRコードを隠す
                </ion-button>
            </div>
            <div v-else style="margin:80px auto;">
                <ion-label>
                    <p>QRコードは非表示になっています</p>
                </ion-label>
                <ion-button size="small" fill="clear" @click="state.isQRCodeHidden = false">表示する</ion-button>
            </div>
            </p>
            <ion-list lines="none">
                <ion-item button @click="state.currentPage = 'selectMainProfile'">
                    <ion-avatar slot="start">
                        <img src="example-identicon.png">
                    </ion-avatar>
                    <ion-label class="ion-text-wrap">
                        <h2>@example_user</h2>
                        <p>今回の共有に使用するプロフィール</p>
                    </ion-label>
                </ion-item>
            </ion-list>
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
        <ion-content v-if="state.currentPage === 'selectMainProfile'" class="o-animation-slide-in-right">
            <ion-list lines="none">
                <ion-list-header class="ion-padding-bottom">
                    <ion-label class="ion-text-center">
                        <h1><ion-icon :icon="personCircleOutline" size="large"></ion-icon></h1>
                        <h2 class="font-weight-bold">プロフィールを選択</h2>
                        <p class="font-weight-normal">この共有で使用するプロフィールを選択してください</p>
                    </ion-label>
                </ion-list-header>
                <ion-item button lines="full" @click="state.currentPage = 'default'">
                    <ion-icon :icon="ellipseOutline" slot="start"></ion-icon>
                    <ion-label>
                        <h2 class="font-weight-bold">匿名 として共有</h2>
                        <p>プロフィールを指定せずに共有</p>
                    </ion-label>
                </ion-item>
                <ion-item button v-for="(num, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
                    @click="state.currentPage = 'default'">
                    <ion-avatar slot="start">
                        <img src="example-identicon.png">
                    </ion-avatar>
                    <ion-label>
                        <h2 class="font-weight-bold">Example User</h2>
                        <p>@example_user</p>
                        <p v-if="index === 0"><ion-text color="primary">メイン プロフィール</ion-text></p>
                    </ion-label>
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
    IonListHeader,
    IonItem,
    IonSpinner,
    toastController,
    IonAvatar
} from "@ionic/vue"

import { appsOutline, atCircleOutline, checkmark, chevronBack, chevronForward, closeCircleOutline, ellipseOutline, linkOutline, logoInstagram, logoTwitter, qrCodeOutline, personCircleOutline, skullOutline, eyeOutline, eyeOffOutline, eyeOff } from "ionicons/icons";
import { onMounted, onUnmounted, reactive, ref, shallowReactive } from "vue"
import * as QRCode from "qrcode"
const props = defineProps({
    presentingElement: HTMLElement,
    title: String,
    path: String,
    appName: String
})

const shareModal = ref()

const state = reactive({
    isLoading: true,
    currentPage: <"default" | "selectMainProfile">"default",
    isQRCodeHidden: false,
    hasClosedByCloseOnBack: false
})


const dismiss = () => {
    shareModal.value.$el.dismiss()
}

const didDismiss = () => {
    state.currentPage = 'default'
    state.isLoading = true
}

const didPresent = () => {
    state.isLoading = false
    state.hasClosedByCloseOnBack = false
}

const toggleQRCodeHidden = () => {
    state.isQRCodeHidden = !state.isQRCodeHidden
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
        message: "URLをクリップボードにコピーしました",
        duration: 2000,
        position: "bottom",
        color: "primary",
        icon: checkmark
    })
    await toast.present()
}
</script>
<style scoped>
img.o-qrcode {
    width: 200px;
    transition-duration: 0.3s;
}
</style>