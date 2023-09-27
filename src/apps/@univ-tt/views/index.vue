<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>大学生の時間割</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid fixed>
                <ion-card class="o-univtt-current-class">
                    <ion-card-header>
                        <ion-card-title style="font-size:1.6em">統計の数理 Ⅱ</ion-card-title>
                        <ion-card-subtitle style="font-size:1em;font-weight:normal;">月曜日 4時限目</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>4 分後に授業が始まります</ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col size="12" size-md="8" offset-md="2">
                                <ion-button expand="block" router-link="/@univ-tt/detail/1/4">
                                    <ion-icon :icon="school" slot="start"></ion-icon>
                                    詳細を確認
                                </ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card>
                <ion-button expand="block" fill="clear" size="small" router-link="/@univ-tt/timetable">
                    <ion-icon :icon="gridOutline" slot="start"></ion-icon>
                    <strong style="font-size:1.2em">時間割を確認・編集</strong>
                </ion-button>
                <ion-list style="margin-top:-0.5em" lines="none">
                    <ion-list-header>
                        <ion-label>
                            <h2 class="font-weight-bold">課題</h2>
                            <p class="font-weight-normal">直近7日以内に締切の課題一覧</p>
                        </ion-label>
                        <ion-button size="small" style="margin-bottom:1.5em">
                            すべて表示
                            <ion-icon :icon="chevronForward" slot="end"></ion-icon>
                        </ion-button>
                    </ion-list-header>
                    <ion-item>
                        <ion-label>
                            <h2>統計の数理</h2>
                            <p>教科書 P132-133</p>
                        </ion-label>
                        <ion-button slot="end" fill="clear">
                            <ion-icon slot="start" :icon="checkmark"></ion-icon>
                            完了としてマーク
                        </ion-button>
                    </ion-item>
                </ion-list>
                <ion-list style="margin-top:1em" lines="none">
                    <ion-list-header>
                        <ion-label>
                            <h2 class="font-weight-bold">管理</h2>
                        </ion-label>
                    </ion-list-header>
                    <ion-item button>
                        <ion-icon :icon="listOutline" slot="start"></ion-icon>
                        <ion-label>
                            <h2>保存した時間割</h2>
                            <p>保存した時間割を一覧で確認できます</p>
                        </ion-label>
                    </ion-item>
                </ion-list>

            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { reactive } from "vue";
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
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonFooter
} from "@ionic/vue"
import { calendarClearOutline, checkmark, chevronForward, gridOutline, listOutline, school } from "ionicons/icons";


const state = reactive({
    currentDay: 0
})

const setToday = () => {
    const date = new Date()
    state.currentDay = date.getDay()
}
</script>