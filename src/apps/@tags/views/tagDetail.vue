<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid fixed>
                <ion-list-header class="ion-text-center ion-no-padding">
                    <ion-label>
                        <h1 style="font-size:1.3em" class="font-weight-bold">
                            <ion-icon :icon="bookmarkOutline"></ion-icon><br>{{ state.tag }}
                        </h1>
                        <p>10 件のつながり</p>
                    </ion-label>
                </ion-list-header>
                <ion-list lines="none">
                    <ion-list-header>通知</ion-list-header>
                    <ion-item button>
                        <ion-label>
                            <h2>教科書 P132-133</h2>
                            <p>教養基礎Ⅰ・期限: 明日</p>
                        </ion-label>
                    </ion-item>
                    <ion-list-header style="margin-top:1em">すべて</ion-list-header>
                    <ion-item button>
                        <ion-label>
                            <h2>4/14 授業メモ</h2>
                            <p>最終編集: 2023/9/14 13:50</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-label>
                            <h2>4/21 授業メモ</h2>
                            <p>最終編集: 2023/9/14 13:50</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-label>
                            <h2>5/8 授業メモ</h2>
                            <p>最終編集: 2023/9/14 13:50</p>
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
    IonList,
    IonListHeader,
    IonItem,
    IonIcon,
    IonLabel
} from "@ionic/vue"
import { bookmarkOutline } from "ionicons/icons";

import { reactive } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const state = reactive({
    tag: ""
})

state.tag = <string>route.params["tagName"]
</script>