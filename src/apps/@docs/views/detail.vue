<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-title>ヘルプ</ion-title>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button @click="fetchArticle" :disabled="!state.isLoaded">
                        <ion-icon slot="icon-only" :icon="refresh"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid fixed>
                <div v-if="!state.isLoaded" class="content-center text-center" style="height:2em">
                    <ion-spinner></ion-spinner>
                </div>
                <div class="ion-padding text-center content-center" v-else-if="state.isOffline">
                    <ion-icon :icon="cloudOfflineOutline" size="large"></ion-icon>
                    <h4 class="font-weight-bold">インターネット接続がありません</h4>
                    <ion-text color="medium">
                        <p class="text-size-small">ヘルプを確認するには、インターネット接続が必要です</p>
                    </ion-text>
                    <p>
                        <ion-button size="small" @click="fetchArticle">
                            <ion-icon :icon="refresh" slot="start"></ion-icon>
                            再試行
                        </ion-button>
                    </p>
                </div>
                <div class="ion-padding text-center content-center" v-else-if="state.isArticleNotFound">
                    <ion-icon :icon="sadOutline" size="large"></ion-icon>
                    <h4 class="font-weight-bold">ヘルプが見つかりません</h4>
                    <ion-text color="medium">
                        <p class="text-size-small">指定されたヘルプは見つかりませんでした<br>URLを確認してください</p>
                    </ion-text>
                    <p>
                        <ion-button size="small" @click="fetchArticle">
                            <ion-icon :icon="refresh" slot="start"></ion-icon>
                            再試行
                        </ion-button>
                    </p>
                </div>
                <div v-html="state.docHTML" v-else class="markdown-body ion-padding"></div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { reactive } from "vue"
import { parse } from "marked"
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonSpinner,
    IonIcon,
    IonText,
    IonButton
} from "@ionic/vue"

import { cloudOfflineOutline, refresh, sadOutline } from "ionicons/icons";

import { useRoute } from "vue-router";

const route = useRoute()

const state = reactive({
    isLoaded: false,
    isArticleNotFound: false,
    isOffline: false,
    docHTML: ""
})

const appId = route.params.appId
const articleName = route.params.articleName

// fetch article from server
const fetchArticle = () => {
    // init state
    state.isLoaded = false
    state.isArticleNotFound = false
    state.isOffline = false
    state.docHTML = ""

    // get article
    setTimeout(() => {
        if (!navigator.onLine) {
            console.log(navigator.onLine, "offline")
            // show offline error
            state.isLoaded = true
            state.isOffline = true
        } else {
            fetch(`/docs/ja-jp/${appId}/${articleName}.md`)
                .then(res => {
                    console.log(res.ok)
                    if (res.ok) {
                        res.text().then(docMd => {
                            state.docHTML = parse(docMd)
                            state.isLoaded = true
                        })
                    } else {
                        state.isArticleNotFound = true
                        state.isLoaded = true
                    }
                })
        }

    }, 600)
}

// close window
const closeWindow = () => window.close()

fetchArticle()

</script>