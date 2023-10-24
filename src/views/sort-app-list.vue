<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>アプリの並べ替え</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid fixed>
                <div class="ion-padding">
                    <ion-label>
                        <p><ion-icon :icon="reorderThreeOutline" style="vertical-align: center;"></ion-icon>
                            をタップしながら動かすと並べかえができます</p>
                    </ion-label>
                </div>
                <ion-list lines="none">

                    <ion-reorder-group :disabled="false" @ion-item-reorder="handleAppsReorder($event)">
                        <ion-item>
                            <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
                            <ion-label>
                                <h2 class="font-weight-bold">Profiles</h2>
                            </ion-label>
                            <ion-reorder slot="end"></ion-reorder>
                        </ion-item>
                        <ion-item>
                            <ion-icon :icon="bookmarkOutline" slot="start"></ion-icon>
                            <ion-label>
                                <h2 class="font-weight-bold">Tags</h2>
                            </ion-label>
                            <ion-reorder slot="end"></ion-reorder>
                        </ion-item>
                        <ion-item>
                            <ion-icon :icon="calendarOutline" slot="start"></ion-icon>
                            <ion-label>
                                <h2 class="font-weight-bold">Schedules</h2>
                            </ion-label>
                            <ion-reorder slot="end"></ion-reorder>
                        </ion-item>
                        <ion-item>
                            <ion-icon :icon="schoolOutline" slot="start"></ion-icon>
                            <ion-label>
                                <h2 class="font-weight-bold">時間割</h2>
                            </ion-label>
                            <ion-reorder slot="end"></ion-reorder>
                        </ion-item>
                        <ion-item>
                            <ion-icon :icon="bulbOutline" slot="start"></ion-icon>
                            <ion-label>
                                <h2 class="font-weight-bold">Forms</h2>
                            </ion-label>
                            <ion-reorder slot="end"></ion-reorder>
                        </ion-item>
                    </ion-reorder-group>
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
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonGrid,
    IonReorderGroup,
    IonReorder,
    IonList,
    IonItem,
    IonIcon,
    IonLabel
} from "@ionic/vue"
import { bookmarkOutline, bulbOutline, calendarOutline, personCircleOutline, reorderThree, reorderThreeOutline, schoolOutline } from "ionicons/icons";

const handleAppsReorder = (event: CustomEvent) => {
    event.detail.complete()
}
</script>