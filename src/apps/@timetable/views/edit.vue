<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/@timetable/" ref="backButton"></ion-back-button>
                </ion-buttons>
                <ion-title>時間割を編集</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <div class="font-weight-bold ion-padding">月曜日 4時限目を編集中</div>
                <ion-list>
                    <ion-list-header>
                        <ion-label>
                            <p>基本情報</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-icon :icon="checkmarkCircle" color="success" v-if="state.classData.name.length > 0" class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-icon :icon="warning" color="danger" v-else class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-input placeholder="科目名"
                            v-model="state.classData.name"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-icon :icon="checkmarkCircle" color="success" v-if="state.classData.teacher.length > 0" class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-icon :icon="removeOutline" v-else class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-input placeholder="講師名" v-model="state.classData.teacher"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-icon :icon="checkmarkCircle" color="success" v-if="state.classData.room.length > 0" class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-icon :icon="removeOutline" v-else class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-input placeholder="教室"
                            v-model="state.classData.room"></ion-input>
                    </ion-item>
                    <ion-list-header>
                        <ion-label>
                            <p>開始・終了時間</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item @click="state.startTimeModal.present">
                        <ion-icon :icon="checkmarkCircle" color="success" v-if="state.classData.startTime < state.classData.endTime" class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-icon :icon="warning" color="danger" v-else class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-label>開始時間*</ion-label>
                        <ion-datetime-button datetime="start-time"></ion-datetime-button>
                    </ion-item>
                    <ion-item @click="state.endTimeModal.present">
                        <ion-icon :icon="checkmarkCircle" color="success" v-if="state.classData.startTime < state.classData.endTime" class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-icon :icon="warning" color="danger" v-else class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-label>終了時間*</ion-label>
                        <ion-datetime-button datetime="end-time"></ion-datetime-button>
                    </ion-item>
                </ion-list>
                <p class="ion-padding">
                    <ion-button expand="block" @click="state.save"
                        :disabled="!state.classData.name || state.classData.startTime >= state.classData.endTime">保存</ion-button>
                </p>
            </ion-grid>
        </ion-content>
        <ion-modal :keep-contents-mounted="true" ref="startTimeModal">
            <ion-label class="ion-text-center ion-padding">
                <h2>開始時間</h2>
                <p class="ion-hide-sm-down">PCの場合は直接入力をおすすめします</p>
            </ion-label>
            <ion-datetime id="start-time" presentation="time" v-model="state.classData.startTime"></ion-datetime>
            <input type="time" v-model="state.classData.startTime" style="font-size: 1.2em;" class="ion-hide-sm-down" />
            <ion-button fill="clear" @click="state.startTimeModal.dismiss">OK</ion-button>
        </ion-modal>
        <ion-modal :keep-contents-mounted="true" ref="endTimeModal">
            <ion-label class="ion-text-center ion-padding">
                <h2>終了時間</h2>
                <p class="ion-hide-sm-down">PCの場合は直接入力をおすすめします</p>
            </ion-label>
            <ion-datetime id="end-time" presentation="time" v-model="state.classData.endTime"></ion-datetime>
            <input type="time" v-model="state.classData.endTime" style="font-size: 1.2em;" class="ion-hide-sm-down" />
            <ion-button fill="clear" @click="state.endTimeModal.dismiss">OK</ion-button>
        </ion-modal>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonButtons,
    IonButton,
    IonBackButton,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonText,
    IonInput,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonIcon,
    toastController,
} from "@ionic/vue"
import { checkmarkCircle, removeOutline, warning } from "ionicons/icons";
import { ref, reactive } from "vue";

const startTimeModal = ref()
const endTimeModal = ref()
const backButton = ref()

const state = reactive({
    startTimeModal: {
        dismiss() {
            startTimeModal.value.$el.dismiss!()
        },
        present() {
            startTimeModal.value.$el.present!()
        }
    },
    endTimeModal: {
        dismiss() {
            endTimeModal.value.$el.dismiss!()
        },
        present() {
            endTimeModal.value.$el.present!()
        }
    },
    async save() {
        (await (toastController.create({
            message: "月曜日 4時限目の授業内容を保存しました",
            duration: 3000
        }))).present()
        backButton.value.$el.click()
    },
    classData: {
        name: "",
        teacher: "",
        room: "",
        startTime: "00:00",
        endTime: "00:00"
    }
})
</script>