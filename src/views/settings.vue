<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title>設定</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid fixed>
                <ion-list>
                    <ion-list-header mode="md">共通</ion-list-header>
                    <ion-item>
                        <ion-select justify="space-between" label="Select Language" placeholder="言語">
                            <ion-select-option value="en-us">English (en-US)</ion-select-option>
                            <ion-select-option value="ja-jp">日本語 (ja-JP)</ion-select-option>
                            <ion-select-option value="ko-kr">한국어 (ko-KR)</ion-select-option>
                        </ion-select>
                    </ion-item><br>
                    <ion-list-header mode="md">このアプリについて</ion-list-header>
                    <ion-item>
                        <ion-label>
                            <h2>OPSTID</h2>
                            <p>V. 0.3 (beta)</p>

                            <router-link to="/term">利用規約</router-link>
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
    IonListHeader,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
} from "@ionic/vue"
</script>