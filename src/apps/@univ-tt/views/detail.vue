<template>
    <ion-page ref="page">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/@univ-tt"></ion-back-button>
                </ion-buttons>
                <ion-title>授業の詳細</ion-title>
                <ion-buttons slot="end">
                    <ion-button router-link="/@univ-tt/edit/1/4">
                        編集
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <ion-list-header class="ion-padding">
                    <ion-label>
                        <p>月曜日 4時限目</p>
                        <h1 class="font-weight-bold" style="font-size:1.3em">統計の数理 Ⅱ</h1>
                        <p>本302・ワン</p>
                    </ion-label>
                    <ion-button id="o-univtt-detail-share-button" style="margin-bottom:1.5em">
                        <ion-icon :icon="shareOutline" slot="start"></ion-icon>
                        共有
                    </ion-button>
                </ion-list-header>
                <div>
                    <ion-chip router-link="/@tags/統計の数理Ⅱ">
                        <ion-icon :icon="bookmarkOutline"></ion-icon>
                        <ion-label>統計の数理 Ⅱ</ion-label>
                    </ion-chip>
                </div>
                <ion-list>
                    <ion-list-header>課題</ion-list-header>
                    <ion-item>
                        <ion-label>
                            <h2>教科書P132-133</h2>
                            <p>明日(9/22) まで</p>
                        </ion-label>
                    </ion-item>
                    <ion-list-header>
                        <ion-label>リンク</ion-label>
                        <ion-button id="o-edit-links-button">
                            <ion-icon :icon="chevronForward" slot="end"></ion-icon>
                            編集
                        </ion-button>
                    </ion-list-header>
                    <ion-item v-for="linkData in state.links" :href="linkData.url" target="_blank">
                        <ion-label>
                            <h2>{{ linkData.name }}</h2>
                            <p>{{ linkData.url }}</p>
                        </ion-label>
                    </ion-item>
                </ion-list>
            </ion-grid>
        </ion-content>
        <ion-modal ref="linksModal" trigger="o-edit-links-button" :presentingElement="state.linksModal.presentingElement"
            @didDismiss="state.linksModal.reset" swipe-to-close>
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-button v-if="state.linksModal.currentPage === 'create'"
                            @click="state.linksModal.currentPage = 'linkList'">
                            <ion-icon :icon="chevronBack" slot="start"></ion-icon>
                            戻る
                        </ion-button>
                    </ion-buttons>
                    <ion-title>リンクを編集</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="state.linksModal.dismiss">閉じる</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding" v-if="state.linksModal.currentPage === 'linkList'">
                <ion-list lines="full">
                    <ion-item v-for="linkData in state.links">
                        <ion-label>
                            <h2>{{ linkData.name }}</h2>
                            <p>{{ linkData.url }}</p>
                        </ion-label>
                        <ion-button :href="linkData.url" target="_blank">
                            開く
                        </ion-button>
                        <ion-button color="danger">
                            削除
                        </ion-button>
                    </ion-item>
                </ion-list>
                <p class="text-center">
                    <ion-button @click="state.linksModal.currentPage = 'create'">
                        <ion-icon :icon="addOutline" slot="start"></ion-icon>
                        リンクを追加
                    </ion-button>
                </p>
            </ion-content>
            <ion-content class="ion-padding" v-else-if="state.linksModal.currentPage === 'create'">
                <div class="text-center">
                    <ion-icon :icon="linkOutline" size="large"></ion-icon>
                </div>
                <h2 class="font-weight-bold text-center">リンクを作成</h2>
                <p class="text-center text-size-small">
                    <ion-text color="medium">
                        リンクの名前とURLを入力して、リンクを作成しましょう
                    </ion-text>
                </p>
                <ion-list>
                    <ion-item>
                        <ion-input v-model="state.linksModal.create.name" label="名前" placeholder="例：教授のホームページ"
                            label-placement="floating"></ion-input>
                    </ion-item>
                    <ion-item>

                        <ion-input v-model="state.linksModal.create.url" label="URL" placeholder="例：https://example.com"
                            label-placement="floating"></ion-input>
                    </ion-item>
                </ion-list>
                <p class="text-center">
                    <ion-button @click="state.linksModal.currentPage = 'linkList'" fill="outline">
                        <ion-icon :icon="chevronBack" slot="start"></ion-icon>
                        戻る
                    </ion-button>
                    <ion-button @click="state.linksModal.create.createLink" :disabled="state.linksModal.create.name === '' || state.linksModal.create.url === ''">
                        リンクを作成
                        <ion-icon :icon="chevronForward" slot="end"></ion-icon>
                    </ion-button>
                </p>
            </ion-content>
        </ion-modal>
        <o-share trigger="o-univtt-detail-share-button" app-name="大学生の時間割" title="この授業を共有" path="/@univ-tt/add-class/"
            :presenting-element="state.linksModal.presentingElement!"></o-share>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonList,
    IonListHeader,
    IonItem,
    IonInput,
    IonLabel,
    IonModal,
    IonIcon,
    IonText,
    IonChip
} from "@ionic/vue"
import { addOutline, browsersOutline, chevronBack, chevronForward, chevronUp, chevronUpCircle, chevronUpCircleOutline, create, createOutline, linkOutline, openOutline, pencilOutline, share, shareOutline, schoolOutline, bookmarkOutline } from "ionicons/icons";

import { reactive, onMounted, ref } from "vue"
import oShare from "@/component/share.vue"

// create page ref
const page = ref()
// create links-modal ref
const linksModal = ref()

const state = reactive({
    linksModal: {
        dismiss() {
            linksModal.value!.$el.dismiss()
            state.linksModal.reset()
        },
        reset() {
            state.linksModal.currentPage = 'linkList'
            state.linksModal.create.name = ""
            state.linksModal.create.url = ""
        },
        presentingElement: null,
        currentPage: "linkList",
        create: {
            name: "",
            url: "",
            createLink() {
                state.links.push({
                    name: state.linksModal.create.name,
                    url: state.linksModal.create.url
                })
                state.linksModal.reset()
            }
        }
    },
    links: [
        {
            name: "Google",
            url: "https://google.com"
        },
        {
            name: "Example",
            url: "https://example.com"
        },
    ]
})



onMounted(() => {
    state.linksModal.presentingElement = page.value.$el
})
</script>