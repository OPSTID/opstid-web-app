<template>
  <ion-page>
    <ion-header translucent class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start"></ion-buttons>
        <ion-title>ホーム</ion-title>
        <ion-buttons slot="end">
          <ion-button id="o-profile-button">
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
              
            </div>
            <div class="container" v-if="false">
              <ion-spinner name="lines"></ion-spinner>
            </div>
            <ion-list lines="none">
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
              <ion-item router-link="/@univ-tt" button>
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
    <ion-popover trigger="o-profile-button" trigger-action="click">
      <ion-list lines="none">
        <div class="ion-text-center ion-padding-top">
          <ion-avatar style="display:inline-block;">
            <img src="/example-identicon.png">
          </ion-avatar>
        </div>
        <ion-item class="ion-text-center">
          <ion-label>
            <h2 class="font-weight-bold">Example User</h2>
            <p>@ad2dkoaowa</p>
          </ion-label>
        </ion-item>
        <ion-item button class="text-size-small">プロフィールを表示</ion-item>
        <ion-item button class="text-size-small">フォロー中</ion-item>
        <ion-item button class="text-size-small">メインプロフィール変更</ion-item>
      </ion-list>
    </ion-popover>
  <ion-alert header="バックアップ" sub-header="前回のバックアップから30日以上経過しました" message="OPSTIDのデータはこの端末内のみに保存されています。端末の故障・紛失やデータ消失に備えてバックアップをダウンロードし、クラウドストレージに保存しましょう。この処理により通信が発生することはありません。" :is-open="state.isActive.backupAlert" :buttons="['今はしない','ダウンロード']" translucent></ion-alert>
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
  IonPopover
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
bookmarkOutline,
personCircleOutline
} from "ionicons/icons"

import { reactive } from "vue"

const state = reactive({
  isActive:{
    backupAlert:false
  }
})

const refresh = (event: RefresherCustomEvent) => {
  setTimeout(() => { event.target.complete() }, 1000)
}
</script>