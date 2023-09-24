<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/@univ-tt"></ion-back-button>
                </ion-buttons>
                <ion-title>授業の詳細</ion-title>
                <ion-buttons slot="end">
                    <ion-button router-link="/@univ-tt/edit/1/4">編集</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <p class="ion-padding">
                    <ion-label>
                        <h1 class="font-weight-bold" style="font-size:1.8em">統計の数理 Ⅱ</h1>
                        <p>本302・ワン</p>
                    </ion-label>
                </p>
                <ion-list>
                    <ion-list-header>課題</ion-list-header>
                    <ion-item>
                        <ion-label>
                            <h2>教科書P132-133</h2>
                            <p>明日(9/22) まで</p>
                        </ion-label>
                    </ion-item>
                    <ion-list-header>
                        <ion-label>リンク</ion-label>
                        <ion-button>
                            編集
                        </ion-button>
                    </ion-list-header>
                    <ion-item href="https://ycuboard.yokohama-cu.ac.jp/lms/" target="_blank">
                        <ion-label>
                            <h2>YCU Board</h2>
                            <p>https://ycuboard.yokohama-cu.ac.jp/lms/TDH2321-32132-123-1</p>
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
    IonButton,
    IonBackButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel
} from "@ionic/vue"
</script>