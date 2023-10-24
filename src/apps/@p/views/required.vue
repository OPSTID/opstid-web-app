<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>プロフィール の作成が必要です</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <h1 class="ion-text-center"><ion-icon :icon="personCircleOutline" size="large"></ion-icon></h1>
                <h3 class="ion-text-center font-weight-bold">この機能を利用するには、プロフィールの作成が必要です</h3>

                <p>プロフィールの作成が必要な操作を実行しようとしました。今すぐプロフィールを作成して、OPSTIDをもっと便利に活用しましょう。</p>
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
    IonIcon
} from "@ionic/vue"
import { personCircleOutline } from "ionicons/icons";
</script>