<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>メインプロフィール</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding-top">
            <ion-grid fixed>
                <ion-list lines="none">
                    <div class="ion-text-center">
                        <ion-avatar style="display:inline-block;width:80px;height:80px">
                            <img src="/example-identicon.png">
                        </ion-avatar>
                    </div>
                    <ion-item class="ion-text-center">
                        <ion-label>
                            <h2 class="font-weight-bold">Example User</h2>
                            <p>@ad2dkoaowa</p>
                            <h3 class="ion-text-center text-size-small">
                                <strong>120</strong> <ion-text color="medium">フォロー中</ion-text>
                            </h3>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">プロフィールを表示</h2>
                            <p>@ad2dkoaowa のプロフィールを確認します</p>
                        </ion-label>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="checkmarkCircleOutline" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">フォロー中のプロフィール</h2>
                            <p>フォロー中のプロフィール一覧を表示します</p>
                        </ion-label>
                        <ion-badge slot="end">120</ion-badge>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="sync" slot="start"></ion-icon>
                        <ion-label class="ion-text-wrap">
                            <h2 class="font-weight-bold">メインプロフィール変更</h2>
                            <p>OPSTID で共有するときにデフォルトで選択されるプロフィールを変更します</p>
                        </ion-label>
                    </ion-item>
                </ion-list>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonGrid, IonList, IonItem, IonLabel, IonBadge, IonAvatar, IonIcon } from "@ionic/vue"
import { checkmarkCircle, checkmarkCircleOutline, personCircleOutline, reload, sync, syncCircleOutline, syncOutline } from "ionicons/icons"
</script>