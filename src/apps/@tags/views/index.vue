<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Tags</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <div style="font-size:2.6em" class="container-left ion-padding">
                    <ion-icon :icon="bookmarkOutline"></ion-icon>
                    <div class="font-weight-bold" style="margin-left:0.3em">Tags</div>
                </div>
                <ion-list lines="none">
                    <ion-list-header>
                        <ion-label>
                            <h2 class="font-weight-bold">おすすめ</h2>
                            <p class="font-weight-normal">この時間帯にあなたがよく見るタグ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-chip>
                            <ion-icon :icon="bookmarkOutline"></ion-icon>
                            <ion-label>バイト</ion-label>
                        </ion-chip>
                    </ion-item>
                </ion-list>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonList,
    IonListHeader,
    IonIcon,
    IonLabel
} from "@ionic/vue"
import { bookmarkOutline, timeOutline } from "ionicons/icons";
</script>