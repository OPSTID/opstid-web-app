<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>検索</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-searchbar :value="$route.query['q']"></ion-searchbar>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <ion-list>
                    <ion-item :href="`https://google.com/search?q=${$route.query['q']}`" target="_blank">
                        <ion-icon :icon="logoGoogle" slot="start"></ion-icon>
                        <ion-label>
                            <h2>"{{ $route.query["q"] }}" を検索する</h2>
                            <p>Google</p>
                        </ion-label>
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
    IonTitle,
    IonContent,
    IonGrid,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonSearchbar
} from "@ionic/vue"
import { logoGoogle } from "ionicons/icons";
</script>