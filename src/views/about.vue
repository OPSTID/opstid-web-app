<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>About</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <h2 class="container-center font-weight-bold ion-padding text-center" style="padding-bottom:0">
                    <img src="/favicon.png" width="48" alt="OPSTID Logo" style="margin-right:0.5em"> OPSTID
                </h2>

                <p class="ion-text-center font-weight-bold">
                    <ion-text color="medium">つながりをみつけよう</ion-text>
                </p>
                <p class="ion-text-center text-size-small">
                    <ion-text color="medium">&copy; 2023-present OPSTID</ion-text>
                </p>

                <ion-list style="margin-top:1em;">
                    <ion-list-header>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">オープンソースライセンス</h2>
                            <p class="font-weight-normal">OPSTID はこれらのオープンソースソフトウェアを使用することにより実現しています。</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item v-for="(license, name) in state.licenseData" v-if="state.hasLicenseLoaded">
                        <ion-label class="ion-text-wrap">
                            <h2>{{ name }}</h2>
                            <p>{{ license.licenses }}</p>
                        </ion-label>
                    </ion-item>
                    <p class="ion-text-center" v-if="!state.hasLicenseLoaded">
                        <ion-button @click="loadLicense" size="small">ライセンス情報を読み込む</ion-button>
                    </p>
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
    IonTitle,
    IonButtons,
    IonButton,
    IonBackButton,
    IonContent,
    IonGrid,
    IonList,
    IonListHeader,
    IonItem,
    IonText,
    IonLabel
} from "@ionic/vue"

import { reactive } from "vue"

const state = reactive({
    hasLicenseLoaded: false,
    licenseData:{
        // for ts error
        "null":{
            licenses:[]
        }
    }
})

const loadLicense = async () => {
    state.licenseData = await (await fetch("/license.json")).json()
    state.hasLicenseLoaded = true
}
</script>