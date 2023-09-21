<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>To-do</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <ion-list lines="full">
                <ion-list-header>
                    <ion-label>
                        <p class="font-weight-normal">重要</p>
                    </ion-label>
                </ion-list-header>
                <ion-item button>
                    <ion-label>
                        <h2>文化祭野外ステージのキーボード出演可否</h2>
                        <p>あと 4 日で回答受付終了</p>
                    </ion-label>
                </ion-item>
                <ion-list-header>
                    <ion-label>
                        <p class="font-weight-normal">今日</p>
                    </ion-label>
                </ion-list-header>
                <ion-item button>
                    <ion-label>
                        <h2>統計の数理Ⅱ</h2>
                        <p>40 分後に授業開始</p>
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
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonGrid
} from "@ionic/vue"
</script>