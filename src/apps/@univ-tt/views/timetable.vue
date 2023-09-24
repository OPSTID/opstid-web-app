<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/@univ-tt"></ion-back-button>
                </ion-buttons>
                <ion-title>時間割を確認・編集</ion-title>
                <ion-buttons slot="end">
                    <ion-button id="menu-trigger">
                        <ion-icon :icon="ellipsisHorizontal" slot="icon-only"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-popover trigger="menu-trigger" trigger-action="click" size="auto">
            <ion-list lines="none">
                <ion-item button>
                    <ion-label>
                        <h2>新規作成</h2>
                        <p>新学期はこちらから</p>
                    </ion-label>
                </ion-item>
                <ion-item button>
                    <ion-label>
                        <h2>過去の時間割</h2>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-popover>
        <ion-content>
            <ion-grid fixed class="text-center o-univtt-timetable">
                <ion-row>
                    <ion-col size="2"></ion-col>
                    <ion-col size="2">月</ion-col>
                    <ion-col size="2">火</ion-col>
                    <ion-col size="2">水</ion-col>
                    <ion-col size="2">木</ion-col>
                    <ion-col size="2">金</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">統計の数理 Ⅱ<br><span class="text-size-small">本302</span></ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="2" class="text-size-small">1限<br>08:50<br>10:20</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                    <ion-col size="2">-</ion-col>
                </ion-row>

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
    IonPopover,
    IonBackButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon

} from "@ionic/vue"
import { ellipse, ellipsisHorizontal } from "ionicons/icons";
</script>
<style scoped>
ion-grid.o-univtt-timetable ion-col {
    border: 1px solid var(--ion-color-medium);
    font-size: 0.8em
}
</style>