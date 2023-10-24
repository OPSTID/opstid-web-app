<template>
  <ion-page>
    <ion-header translucent class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start"></ion-buttons>
        <ion-title>ホーム</ion-title>
        <ion-buttons slot="end">
          <ion-button router-link="/@p/main-profile/">
            <ion-icon slot="icon-only" :icon="personCircleOutline"></ion-icon>
          </ion-button>
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
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-avatar style="margin-left:0.5em">
              <img src="/opstid_icon.svg">
            </ion-avatar>
          </ion-toolbar>
        </ion-header>

        <ion-searchbar placeholder="検索" v-model="state.searchQuery" inputmode="search" @keydown="searchTrigger"></ion-searchbar>
        <div class="text-right ion-padding" style="padding-top:0">
          <ion-button size="small" router-link="/qr-reader">
            <ion-icon :icon="qrCodeOutline" slot="start"></ion-icon>
            QR 読み取り
          </ion-button>
        </div>
        <div>
          <ion-list-header>
            <ion-label>
              <h1 class="font-weight-bold">Tags & Profiles</h1>
              <p>よく使う Tag や Profile にすぐにアクセス</p>
            </ion-label>
            <ion-button size="small" style="margin-bottom:1.5em">
              編集
              <ion-icon :icon="chevronForward" slot="end"></ion-icon>
            </ion-button>
          </ion-list-header>
          <div class="ion-padding-start ion-padding-end">
            <ion-chip router-link="/@tags/統計の数理Ⅱ">
              <ion-icon :icon="bookmarkOutline"></ion-icon>
              <ion-label>統計の数理Ⅱ</ion-label>
            </ion-chip>
            <ion-chip color="primary" router-link="/@tags/アカペラ部">
              <ion-icon :icon="bookmarkOutline"></ion-icon>
              <ion-label>アカペラ部</ion-label>
            </ion-chip>
            <ion-chip color="tertiary" router-link="/@tags/バイト">
              <ion-icon :icon="bookmarkOutline"></ion-icon>
              <ion-label>バイト</ion-label>
            </ion-chip>
            <ion-chip color="tertiary" router-link="/@tags/バイト">
              <ion-icon :icon="personCircleOutline"></ion-icon>
              <ion-label>@satokei20030405</ion-label>
            </ion-chip>
          </div>

        </div>
        <div class="container" v-if="false">
          <ion-spinner name="lines"></ion-spinner>
        </div>
        <ion-list lines="none">
          <ion-list-header>
            <ion-label>
              <h1 class="font-weight-bold">To-do</h1>
              <p>これからすべきことは？</p>
            </ion-label>

            <ion-button router-link="to-do-list" fill="clear" size="small" style="margin-bottom:1.5em">
              すべて確認
              <ion-icon slot="end" :icon="chevronForward"></ion-icon>
            </ion-button>
          </ion-list-header>
          <ion-item router-link="/@timetable" button>
            <ion-label>
              <h2 class="font-weight-bold">統計の数理Ⅱ</h2>
              <p>月曜日 3時限目</p>
              <p>まもなく授業が始まります(4 分後)</p>
            </ion-label>

            <ion-badge slot="end" class="font-weight-normal">4 min</ion-badge>
          </ion-item>
        </ion-list>
      </ion-grid>
      <ion-grid fixed>
        <ion-list-header class="ion-padding-bottom">
          <ion-label>
            <h1 class="font-weight-bold">Apps</h1>
            <p>アプリをえらんではじめよう。</p>
          </ion-label>
          <ion-button size="small" fill="clear" router-link="/apps/sort-app-list" style="margin-bottom:1.5em;">
            <ion-icon :icon="chevronExpandOutline" slot="end"></ion-icon>
            並べ替え
          </ion-button>
          <ion-button size="small" fill="clear" router-link="/apps" style="margin-bottom:1.5em;">
            <ion-icon :icon="chevronForward" slot="end"></ion-icon>
            詳細
          </ion-button>
        </ion-list-header>
        <ion-row>
          <ion-col size="3" size-sm="2" class="ion-text-center">
            <o-app-icon :icon="personCircleOutline" app-name="Profiles" router-link="/@p"></o-app-icon>
          </ion-col>
          <ion-col size="3" size-sm="2" class="ion-text-center">
            <o-app-icon :icon="bookmarkOutline" app-name="Tags"></o-app-icon>
          </ion-col>
          <ion-col size="3" size-sm="2" class="ion-text-center">
            <o-app-icon :icon="calendarOutline" app-name="Schedules"></o-app-icon>
          </ion-col>
          <ion-col size="3" size-sm="2" class="ion-text-center">
            <o-app-icon :icon="schoolOutline" app-name="Timetable" router-link="/@timetable/"></o-app-icon>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-alert header="バックアップ" sub-header="前回のバックアップから30日以上経過しました"
      message="OPSTIDのデータはこの端末内のみに保存されています。端末の故障・紛失やデータ消失に備えてバックアップをダウンロードし、クラウドストレージに保存しましょう。この処理により通信が発生することはありません。"
      :is-open="state.isActive.backupAlert" :buttons="['今はしない', 'ダウンロード']" translucent></ion-alert>
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
  IonChip,
  IonAlert,
  IonPopover,
  IonBadge,
  IonText
} from '@ionic/vue';

import oAppIcon from "@/component/appIcon.vue"

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
  bookmarkOutline,
  personCircleOutline,
  calendarOutline,
  schoolOutline,
  chevronExpandOutline
} from "ionicons/icons"

import { reactive } from "vue"
import { useRouter } from 'vue-router';

const router = useRouter()
const state = reactive({
  isActive: {
    backupAlert: false
  },
  searchQuery: ""
})

const refresh = (event: RefresherCustomEvent) => {
  setTimeout(() => { event.target.complete() }, 1000)
}

const searchTrigger = (event:KeyboardEvent) => {
  if(event.key === "Enter") {
    router.push(`/search?q=${state.searchQuery}`)
  }
}
</script>