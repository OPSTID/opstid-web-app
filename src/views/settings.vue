<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title>設定</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid fixed>
                <ion-list lines="none">
                    <ion-list-header>
                        <ion-label>
                            <p>共通</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-icon :icon="languageOutline" slot="start"></ion-icon>
                        <ion-select justify="space-between" label="Language" placeholder="言語" interface="popover">
                            <ion-select-option value="en-us">English (en-US)</ion-select-option>
                            <ion-select-option value="ja-jp">日本語 (ja-JP)</ion-select-option>
                            <ion-select-option value="ko-kr">한국어 (ko-KR)</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item button>
                        <ion-icon :icon="cloudOutline" slot="start"></ion-icon>
                        バックアップの管理
                    </ion-item>
                    <ion-list-header>
                        <ion-label>
                            <p>About</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item button router-link="/about">
                        <ion-icon :icon="informationCircleOutline" slot="start"></ion-icon>
                        <ion-label>
                            OPSTID について
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
    IonSelect,
    IonSelectOption,
    IonIcon
} from "@ionic/vue"
import { cloudOutline, informationCircle, informationCircleOutline, languageOutline } from "ionicons/icons";
</script>