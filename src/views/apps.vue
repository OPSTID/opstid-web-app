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
        <ion-content fullscreen>
            <ion-grid fixed>
                <h2 class="container-center font-weight-bold ion-padding text-center" style="padding-bottom:0">
                    <img src="/favicon.png" width="48" alt="OPSTID Logo" style="margin-right:0.5em"> Apps
                </h2>
                <div class="ion-padding text-size-small ion-text-center">
                    <ion-text color="medium">
                        <strong>OPSTID</strong> は人・情報がつながるためのアプリの集合体。
                        <br>
                        <strong>OPSTID のアプリ</strong> でつながりをみつけよう。
                    </ion-text>
                </div>
                <div class="ion-text-center text-size-small">
                    <ion-text color="medium">アプリ開発の目的を明確化するために<strong>開発方針</strong>を定めています</ion-text><br>
                    <ion-button size="small" fill="clear">
                        <strong>OPSTID アプリ開発方針</strong>
                        <ion-icon :icon="chevronForward" slot="end"></ion-icon>
                    </ion-button>
                </div>
                <ion-list lines="none">
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">Core</h1>
                            <p class="font-weight-normal">基本アプリ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item button>
                        <ion-icon :icon="bookmarkOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Tags</h2>
                            <p>人と情報のつながりをまとめて管理</p>
                        </ion-label>
                    </ion-item>
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">General</h1>
                            <p class="font-weight-normal">一般向けアプリ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item button>
                        <ion-icon :icon="readerOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Profiles</h2>
                            <p>プロフィールを交換して、つながろう</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="gameControllerOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">GG</h2>
                            <p>ゲームアカウントを共有して、つながろう</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="peopleOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Groups</h2>
                            <p>グループで予定、場所、ドキュメントを共有</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="bulbOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">EZ Forms</h2>
                            <p>少人数向けのフォーム（アンケート）作成ツール</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="documentOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">Mark</h2>
                            <p>Markdown記法で簡易ドキュメントを作成</p>
                        </ion-label>
                    </ion-item>
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">for Students</h1>
                            <p class="font-weight-normal">学生向けアプリ</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item router-link="/@univ-tt" button>
                        <ion-icon :icon="school" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
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
    IonButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonIcon,
    IonText
} from "@ionic/vue"
import { bookmarkOutline, bulbOutline, chevronForward, documentOutline, gameControllerOutline, peopleOutline, readerOutline, school } from "ionicons/icons";
</script>