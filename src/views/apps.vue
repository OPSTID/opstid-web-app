<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Apps</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding-top">
            <ion-grid fixed>
                <ion-header collapse="condense">
                    <ion-toolbar>
                        <ion-title size="large">
                            Apps
                        </ion-title>
                    </ion-toolbar>
                </ion-header>
                <div class="text-size-small ion-padding-start ion-padding-bottom">
                    <p><ion-text color="medium">
                        <strong>OPSTID</strong> は人・情報がつながるためのアプリの集合体。
                        <br>
                        <strong>OPSTID のアプリ</strong> でつながりをみつけよう。
                    </ion-text></p>
                    <p><ion-text color="medium">アプリ開発の目的を明確化するために <a class="font-weight-bold">開発方針</a> を定めています</ion-text></p>
                </div>
                <ion-segment v-model="state.currentTab">
                    <ion-segment-button value="released">使用可能なアプリ</ion-segment-button>
                    <ion-segment-button value="in-development">今後公開予定のアプリ</ion-segment-button>
                </ion-segment>
                <ion-list lines="none" v-if="state.currentTab === 'released'" class="o-animation-slide-in-left">
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">for Students</h1>
                            <p class="font-weight-normal">学生向けアプリ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item router-link="/@timetable" button>
                        <ion-icon :icon="school" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Timetable <ion-badge color="warning" style="margin-left:10px;margin-bottom:-2px">Beta</ion-badge></h2>
                            <p>大学生向けの時間割作成アプリ。</p>
                        </ion-label>
                    </ion-item>
                </ion-list>
                <ion-list lines="none" v-if="state.currentTab === 'in-development'" class="o-animation-slide-in-right">
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">Core</h1>
                            <p class="font-weight-normal">基本アプリ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item button router-link="/@tags/">
                        <ion-icon :icon="bookmarkOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Tags</h2>
                            <p>人と情報のつながりをまとめて管理</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button router-link="/@schedules/">
                        <ion-icon :icon="calendarOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Schedules</h2>
                            <p>予定をまとめよう。日程調整も簡単にできます。</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button router-link="/@p/">
                        <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Profiles</h2>
                            <p>Profiles を交換して、様々な人とつながろう。</p>
                        </ion-label>
                    </ion-item>
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">General</h1>
                            <p class="font-weight-normal">一般向けアプリ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item button router-link="/@grp/">
                        <ion-icon :icon="peopleOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Groups</h2>
                            <p>グループで予定、場所、ドキュメントを共有</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button router-link="/@forms/">
                        <ion-icon :icon="bulbOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Forms</h2>
                            <p>少人数向けのフォーム（アンケート）作成ツール</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button router-link="/@mark/">
                        <ion-icon :icon="documentOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Mark</h2>
                            <p>Markdown記法でメモや簡易ドキュメントを作成</p>
                        </ion-label>
                    </ion-item>
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">for Students</h1>
                            <p class="font-weight-normal">学生向けアプリ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item button router-link="/@shift/">
                        <ion-icon :icon="stopwatchOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Shift</h2>
                            <p>バイトのシフトと給料を管理できます</p>
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
    IonButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonSegment,
    IonSegmentButton,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonIcon,
    IonText,
    IonBadge
} from "@ionic/vue"
import { bookmarkOutline, bulbOutline, calendarOutline, chevronForward, documentOutline, gameControllerOutline, peopleOutline, personCircleOutline, school, stopwatchOutline } from "ionicons/icons";
import { reactive } from "vue"

const state = reactive({
    currentTab: <"released" | "in-development">"released"
})
</script>