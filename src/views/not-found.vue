<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>OPSTID</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <div class="ion-padding text-center content-center">
                <ion-icon :icon="sadOutline" size="large"></ion-icon>
                <h4 class="font-weight-bold">Hmm...</h4>
                <ion-text color="medium">
                    <p class="text-size-small">指定されたURLにページはありません<br>URLを確認してください</p>
                </ion-text>
                <p>
                    <ion-button size="small">
                        フィードバックを送る
                        <ion-icon :icon="openOutline" slot="end"></ion-icon>
                    </ion-button>
                </p>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton,
    IonTitle,
    IonContent,
    IonIcon,
    IonText,
} from "@ionic/vue"

import {
    sadOutline,
    openOutline
} from "ionicons/icons"
</script>