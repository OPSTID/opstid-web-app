<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start"></ion-buttons>
        <ion-title>ホーム</ion-title>
        <ion-buttons slot="end">
          <ion-button router-link="/settings">
            <ion-icon slot="icon-only" :icon="settingsOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content :pulling-icon="arrowDown">
        </ion-refresher-content>
      </ion-refresher>
      <ion-grid fixed>
        <ion-row>
          <ion-col>
            <ion-header collapse="condense">
              <ion-toolbar>
                <ion-avatar style="margin-left:0.5em">
                  <img src="/opstid_icon.svg">
                </ion-avatar>
              </ion-toolbar>
            </ion-header>

            <ion-searchbar placeholder="検索"></ion-searchbar>
            <div class="text-right ion-padding" style="padding-top:0">
              <ion-button size="small" fill="clear" router-link="/apps">
                <ion-icon :icon="apps" slot="start"></ion-icon>
                アプリ一覧
              </ion-button>
              <ion-button size="small" router-link="/qr-reader">
                <ion-icon :icon="qrCodeOutline" slot="start"></ion-icon>
                QR 読み取り
              </ion-button>
            </div>
            <div>
              <ion-chip>
                <ion-icon :icon="bookmarkOutline"></ion-icon>
                <ion-label>統計の数理Ⅱ</ion-label>
              </ion-chip>
              <ion-chip color="primary">
                <ion-icon :icon="bookmarkOutline"></ion-icon>
                <ion-label>VoxBox</ion-label>
              </ion-chip>
              <ion-chip color="tertiary">
                <ion-icon :icon="bookmarkOutline"></ion-icon>
                <ion-label>バイト</ion-label>
              </ion-chip>
              
            </div>
            <div class="container" v-if="false">
              <ion-spinner name="lines"></ion-spinner>
            </div>
            <ion-list>
              <ion-list-header>
                <ion-label>
                  <h2 class="font-weight-bold">To-do</h2>
                  <p class="font-weight-normal">これからすべきことは？</p>
                </ion-label>

                <ion-button router-link="to-do-list" fill="clear" size="small" style="margin-bottom:1.5em">
                  すべて確認
                  <ion-icon slot="end" :icon="chevronForward"></ion-icon>
                </ion-button>
              </ion-list-header>
              <ion-item>
                <ion-label>
                  <h2 class="font-weight-bold">統計の数理Ⅱ</h2>
                  <p>月曜日 3時限目</p>
                  <p>まもなく授業が始まります(4 分後)</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonSpinner,
  IonRefresher,
  IonRefresherContent,
  IonChip
} from '@ionic/vue';

import { RefresherCustomEvent } from '@ionic/vue';

import {
  settingsOutline,
  homeOutline,
  qrCodeOutline,
  apps,
  openOutline,
  arrowDown,
  chevronForward,
  pricetagOutline,
bookmarkOutline
} from "ionicons/icons"

const refresh = (event: RefresherCustomEvent) => {
  setTimeout(() => { event.target.complete() }, 1000)
}
</script>