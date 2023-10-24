<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Profiles</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-top">
            <ion-grid fixed>
                <ion-header collapse="condense">
                    <ion-toolbar>
                        <ion-title size="large">Profiles</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-searchbar placeholder="プロフィールを検索"></ion-searchbar>
                <ion-list lines="none">
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">Main</h1>
                            <p>メインプロフィール</p>
                        </ion-label>

                        <ion-button size="small" router-link="/@p/main-profile/change" style="margin-bottom: :1em;">
                            <ion-icon :icon="reloadCircle" slot="end"></ion-icon>
                            変更
                        </ion-button>
                    </ion-list-header>
                    <ion-item button router-link="/@p/main-profile">
                        <ion-avatar slot="start">
                            <img src="/example-identicon.png">
                        </ion-avatar>
                        <ion-label>
                            <h2 class="font-weight-bold">Example User</h2>
                            <p>@example_user</p>
                            <p><strong>120</strong> フォロー中</p>
                        </ion-label>
                    </ion-item>
                </ion-list>
                <div class="ion-text-right ion-padding-bottom">
                </div>
                <ion-list lines="none">
                    <ion-list-header>
                        <ion-label>
                            <h1 class="font-weight-bold">All</h1>
                            <p>すべてのプロフィール</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item v-for="profileData in state.allMyProfiles">
                        <ion-avatar slot="start">
                            <img :src="jdenticonSvgDataurl(profileData.id)">
                        </ion-avatar>
                        <ion-label>
                            <h2 class="font-weight-bold">{{ profileData.name }}</h2>
                            <p>@{{ profileData.id}}</p>
                            <p><strong>120</strong> フォロー中</p>
                        </ion-label>
                    </ion-item>
                </ion-list>
                <ion-card style="box-shadow:none;background-color: rgba(127,127,127,0.15);cursor:pointer" router-link="/@p/create">
                    <ion-card-content>
                        <ion-item lines="none" color="transparent">
                            <ion-label class="ion-text-wrap">
                                <h2 class="font-weight-bold">新しいプロフィールを作成</h2>
                                <p>OPSTID Profiles では複数のプロフィールを作成して、場面に合わせて使い分けができます</p>
                            </ion-label>
                            <ion-icon :icon="chevronForward" slot="end"></ion-icon>
                        </ion-item>
                    </ion-card-content>
                </ion-card>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonList,
    IonListHeader,
    IonAvatar,
    IonItem,
    IonLabel,
    IonIcon,
    IonSearchbar,
    IonText,
    IonCard,
    IonCardContent
} from "@ionic/vue"
import { addOutline, checkmarkCircle, chevronForward, documentsOutline, refreshCircle, reloadCircle, shapesOutline } from "ionicons/icons";
import { reactive } from "vue"
import { OPSTIDProfileData, db } from "../db"
import { liveQuery, Observable } from "dexie"
import { useObservable } from "@vueuse/rxjs"
import jdenticonSvgDataurl from "@/lib/jdenticon-svg-dataurl";

const state = reactive({
    allMyProfiles:useObservable<OPSTIDProfileData[]>(
        // @ts-ignore
        liveQuery(() => db.myProfiles.toArray())
    )
})
</script>