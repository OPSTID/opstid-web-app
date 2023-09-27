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
                <h2 class="container-left font-weight-bold ion-padding" style="padding-bottom:0">
                    <img src="/favicon.png" width="48" alt="OPSTID Logo" style="margin-right:0.5em"> Apps
                </h2>
                <div class="ion-padding text-size-small">OPSTID は人やものごとをつなぐための様々なアプリの複合体です。<br>それぞれのアプリの情報は <strong>OPSTID タグ</strong> で関連付けることにより「つながり」をもたせることができます。</div>
                <ion-list lines="none">
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
    IonTitle,
    IonContent,
    IonGrid,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonIcon
} from "@ionic/vue"
import { bulbOutline, documentOutline, gameControllerOutline, peopleOutline, readerOutline, school } from "ionicons/icons";
</script>