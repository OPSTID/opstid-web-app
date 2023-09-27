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
                        <ion-icon :icon="saveOutline" slot="icon-only"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-popover trigger="menu-trigger" trigger-action="click" size="auto">
            <ion-label class="ion-text-wrap ion-padding">
                <h2 class="font-weight-bold">時間割の保存</h2>
                <p>時間割を保存すると、来年度に後輩に自分の時間割を共有したり、自分の単位取得状況を計算したりできます。<router-link to="/@docs/@univ-tt/save-timetable">詳細</router-link></p>
            </ion-label>
            <ion-list lines="none">
                <ion-item button>
                    <ion-label class="ion-text-wrap">
                        <h2>時間割を保存</h2>
                        <p>現在の時間割を保存</p>
                    </ion-label>
                </ion-item>
                <ion-item button>
                    <ion-label class="ion-text-wrap">
                        <h2>保存した時間割</h2>
                        <p>保存した時間割を確認できます</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-popover>
        <ion-content>
            <ion-grid fixed>
                <div class="text-size-small text-center">
                    <ion-text color="medium">各時限をタップすると、授業内容を確認・編集できます</ion-text>
                </div>
            </ion-grid>
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
                    <ion-col size="2" @click="$router.push('/@univ-tt/detail/1/4')">統計の数理 Ⅱ<br><span class="text-size-small">本302</span></ion-col>
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
    IonListHeader,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonText

} from "@ionic/vue"
import { ellipse, ellipsisHorizontal, saveOutline } from "ionicons/icons";
</script>
<style scoped>
ion-grid.o-univtt-timetable ion-col {
    border: 1px solid var(--ion-color-medium);
    font-size: 0.8em
}
</style>