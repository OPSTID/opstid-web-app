<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title>アプリ一覧</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid fixed>
                <h2 class="container-left font-weight-bold ion-padding" style="padding-bottom:0">
                    <img src="/favicon.png" width="48" alt="OPSTID Logo" style="margin-right:0.5em"> Apps
                </h2>
                <p class="ion-padding text-size-small">OPSTID は人やものごとをつなぐための様々なアプリの複合体です。<br>それぞれのアプリの情報は <strong>OPSTID タグ</strong> で関連付けることにより「つながり」をもたせることができます。</p>
                <ion-list lines="full">
                    <ion-item router-link="/@univ-tt" button>
                        <ion-icon :icon="school" slot="start"></ion-icon>
                        <ion-label>
                            <h2 class="font-weight-bold">大学生の時間割</h2>
                            <p>大学生向けの時間割作成アプリ。</p>
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
    IonIcon
} from "@ionic/vue"
import { school } from "ionicons/icons";
</script>