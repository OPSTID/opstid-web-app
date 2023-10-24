<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/@p/" v-if="state.currentPage==='id'"></ion-back-button>
                    <ion-back-button v-else @click="e => {e.preventDefault(); state.currentPage = 'id'}" default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>プロフィールを作成</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <p class="ion-padding">
                    <ion-label>
                        <h1>
                            <ion-icon :icon="personCircleOutline" size="large"></ion-icon>
                        </h1>
                        <h1 class="font-weight-bold">プロフィールを作成</h1>
                        <p>プロフィールを作成して、OPSTIDをもっと便利に活用しよう👍</p>
                    </ion-label>
                </p>
                <ion-list v-if="state.currentPage === 'id'" class="o-animation-slide-in-left">
                    <ion-list-header>
                        <ion-label class="ion-text-wrap">
                            <h2>プロフィールID</h2>
                            <p class="font-weight-normal">
                                まずは、プロフィールID を設定しましょう。
                                <ul>
                                    <li>10文字以上、50文字以下 {{ (state.profileData.id.length >= 10 && state.profileData.id.length <= 50) ? "✅" : "❌"}}</li>
                                    <li>半角英数字、"."、""-"、"_" が使用可能です {{ (!!state.profileData.id.match(/^[a-zA-Z0-9\._-]*$/) && state.profileData.id.length !== 0) ? "✅" : "❌" }}</li>
                                    <li>特に希望がない・自分では決められない場合は、「おまかせする」をクリックしてください</li>
                                    <li><ion-text color="danger">あとから変更できませんのでご注意ください。</ion-text></li>
                                </ul>
                            </p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-icon :icon="checkmarkCircle" color="success" v-if="validateId()" class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-icon :icon="warning" color="danger" v-else class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-input v-model="state.profileData.id" label=" @" class="o-input-prefix-at" :maxlength="50" clear-input></ion-input>
                        <ion-button @click="generateRandomId" size="small" fill="clear" v-if="state.profileData.id === ''" slot="end">
                            <ion-icon :icon="refreshCircle" slot="end"></ion-icon>
                            おまかせする
                        </ion-button>
                    </ion-item>
                    <ion-list-header>
                        <ion-label class="ion-text-wrap">
                            <h2>ニックネーム</h2>
                            <p class="font-weight-normal">50字以内。個人情報保護のため、本名は入力しないでください</p>
                        </ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-icon :icon="checkmarkCircle" color="success" v-if="validateNickname()" class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-icon :icon="warning" color="danger" v-else class="o-animation-slide-in-left" slot="start"></ion-icon>
                        <ion-input v-model="state.profileData.name" placeholder="ニックネーム（本名不可）" :maxlength="50"></ion-input>
                    </ion-item>
                    <p class="ion-padding">
                        <ion-button expand="block" @click="state.currentPage = 'confirm'" :disabled="!validateIdAndNickname()">
                            次へ
                        </ion-button>
                    </p>
                </ion-list>
                <div v-if="state.currentPage==='confirm'" class="o-animation-slide-in-right">
                    <p class="ion-text-center">
                        <ion-thumbnail style="display:inline-block;width:5em;height:5em">
                            <img :src="jdenticonSvg(state.profileData.id)">
                        </ion-thumbnail><br>
                        <ion-label>
                            <h2 class="font-weight-bold">{{ state.profileData.name }}</h2>
                            <p>@{{ state.profileData.id }}</p>
                        </ion-label>
                    </p>
                    <p class="ion-text-center">以上の内容でプロフィールを作成します</p>
                    <ion-grid>
                        <ion-row>
                            <ion-col size="6" offset-md="2" size-md="4">
                                <ion-button expand="block" fill="outline" @click="state.currentPage='id'">戻る</ion-button>
                            </ion-col>
                            <ion-col size="6" size-md="4">
                                <ion-button expand="block" @click="createProfile">プロフィールを作成</ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div v-if="state.currentPage==='complete'" class="o-animation-slide-in-right">
                    <p class="ion-text-center">
                        <ion-thumbnail style="display:inline-block;width:5em;height:5em" class="o-profile-create-complete-usericon">
                            <img :src="jdenticonSvg(state.profileData.id)">
                        </ion-thumbnail><br>
                        <ion-label>
                            <h2 class="font-weight-bold">{{ state.profileData.name }}</h2>
                            <p>@{{ state.profileData.id }}</p>
                        </ion-label>
                    </p>
                    <p class="ion-text-center">プロフィールの作成が完了しました🎉</p>
                    <p><ion-button expand="block" @click="$router.back()">戻る</ion-button></p>
                </div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonBackButton,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonText,
    IonInput,
    IonIcon,
    IonThumbnail,
} from "@ionic/vue"
import { atCircle, atCircleOutline, checkmarkCircle, checkmarkCircleOutline, checkmarkOutline, chevronBack, personCircleOutline, refreshCircle, warning } from "ionicons/icons";
import { reactive } from "vue"
import { db } from "../db"
import jdenticonSvg from "@/lib/jdenticon-svg-dataurl"

const state = reactive({
    currentPage: <"id"|"confirm" | "complete">"id",
    profileData:{
        id: "",
        name:""
    }
})

const validateId = () => {    
    if(state.profileData.id.length < 10) return false
    else if(state.profileData.id.length > 50) return false
    else if(state.profileData.id.match(/^[a-zA-Z0-9\._-]*$/)) return true
    else return false
}

const validateNickname = () => {
    if(state.profileData.name.length === 0) return false
    else if(state.profileData.name.length > 50) return false
    else return true
}
const validateIdAndNickname = () => {
    return validateId() && validateNickname()
}

const generateRandomId = () => {
    const str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-"
    // generate 16 characters id
    let generatedId = ""
    for(let i = 0; i < 16; i++){
        generatedId += str[Math.floor(Math.random() * str.length)]
    }

    state.profileData.id = generatedId
}

const createProfile = async () => {
    if(await db.myProfiles.get(state.profileData.id)){
        alert(`@${state.profileData.id} はすでに使用されています。他のIDを指定してください`)
        state.currentPage = 'id'
        return;
    }
    // generate current iso datetime string
    const date = new Date()
    const isoDateTimeString = date.toISOString()
    db.myProfiles.add({
        id: state.profileData.id,
        name: state.profileData.name,
        lastUpdated: isoDateTimeString
    }).then(() => {
        state.currentPage = "complete"
    })
}
</script>
<style scoped>
@keyframes pulseRotate {
    0%{
        transform:scale(1)
    }
    70%{
        transform:scale(1.4) rotate(10deg)
    }
    100%{
        transform:scale(1)
    }
}
.o-profile-create-complete-usericon{
    animation: pulseRotate 0.5s;
    animation-delay: 0.3s;
}
</style>