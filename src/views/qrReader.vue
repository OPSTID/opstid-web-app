<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/" text="戻る"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <!-- camera not found error -->
            <div v-if="state.isActive.cameraNotFoundErrorAlert" class="ion-padding text-center content-center">
                <p>
                    <ion-icon :icon="alertCircleOutline" style="font-size:2.5em"></ion-icon>
                </p>
                <h4 class="font-weight-bold">使用可能なカメラがありません</h4>
                <ion-text color="medium">
                    <p class="text-size-small">機器の接続状況やブラウザの設定を確認してください</p>
                </ion-text>
                <p class="text-size-small">
                    <ion-button href="/@docs/core/qr-reader-camera-notfound" target="_blank" size="small" fill="outline">
                        <ion-icon slot="start" :icon="checkmarkOutline"></ion-icon>
                        対処方法を確認
                    </ion-button>
                    <ion-button size="small" @click="launchCamera">
                        <ion-icon slot="start" :icon="reload"></ion-icon>
                        再試行
                    </ion-button>
                </p>
            </div>
            <!-- unexpected error -->
            <div v-else class="ion-padding text-center content-center">
                <p>
                    <ion-icon :icon="alertCircleOutline" style="font-size:2.5em"></ion-icon>
                </p>
                <h4 class="font-weight-bold">エラー</h4>
                <p class="text-size-small">不明なエラーが発生しました<br>この機能はこのブラウザでは利用できない可能性があります</p>
            </div>
            <!-- camera canvas -->
            <div class="container" v-else>
                <canvas id="o-qr-reader-canvas"></canvas>
            </div>
        </ion-content>

        <!-- loader and alerts -->
        <ion-loading :is-open="state.isActive.launchingCameraLoader" message="カメラを起動中..." duration="1500"></ion-loading>

        <!-- url toast -->
        <ion-toast :is-open="state.urlToast.isActive" message="クリックして開く" :header="state.urlToast.url" position="top"
            class="o-url-toast" @click="openUrl(state.urlToast.url)"></ion-toast>
    </ion-page>
</template>
<script setup lang="ts">
import { onUnmounted, reactive } from "vue";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonButton,
    IonLoading,
    IonIcon,
    IonText,
    IonToast
} from "@ionic/vue"

import {
    alertCircleOutline,
    checkmarkOutline,
    reload,
    stop,
    stopOutline
} from "ionicons/icons"

import { useRouter } from "vue-router";

import jsQR from "jsqr"
import { Point } from "jsqr/dist/locator/index"

const router = useRouter()

const state = reactive({
    isActive: {
        launchingCameraLoader: false,
        cameraNotFoundErrorAlert: false,
        unexpectedErrorAlert: false,
    },
    urlToast: {
        isActive: false,
        url: ""
    }
})
// store animation frame id to stop looping on moving from this page
let currentAnimationFrameId = 0
// function to stop camera (prepared in launchCamera)
let stopCamera = () => { }
// function to launch camera
const launchCamera = async () => {
    try {
        // init state
        state.isActive.launchingCameraLoader = false
        state.isActive.cameraNotFoundErrorAlert = false
        state.isActive.unexpectedErrorAlert = false
        // show loading
        state.isActive.launchingCameraLoader = true;
        // access to device camera
        const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
            }
        });
        // create video element to draw the video
        const video: HTMLVideoElement = document.createElement("video")
        // get the canvas element to capture qrcode
        const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas#o-qr-reader-canvas")
        const canvasContext = <CanvasRenderingContext2D>canvas.getContext("2d")

        // code from https://cozmo.github.io/jsQR/
        const drawLine = (begin: Point, end: Point, color: string) => {
            canvasContext.beginPath();
            canvasContext.moveTo(begin.x, begin.y);
            canvasContext.lineTo(end.x, end.y);
            canvasContext.lineWidth = 4;
            canvasContext.strokeStyle = color;
            canvasContext.stroke();
        }
        const tick = () => {
            if (video.readyState === video.HAVE_ENOUGH_DATA) {

                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
                var imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
                var code = jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: "dontInvert",
                });
                if (code) {
                    // test if the data of the QR Code is URL
                    try {
                        const url = new URL(code.data)
                        if (url.hostname === "opstid.com") {
                            // stop capture and go to the page
                            stopCamera()
                            setTimeout(() => router.replace(url.pathname), 300)
                            const color = "#3880ff"
                            // draw rectangle around the detected QRCode
                            drawLine(code.location.topLeftCorner, code.location.topRightCorner, color);
                            drawLine(code.location.topRightCorner, code.location.bottomRightCorner, color);
                            drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, color);
                            drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, color);

                        }
                        // show url toast
                        else if (!state.urlToast.isActive) {
                            state.urlToast.isActive = true
                            state.urlToast.url = code.data

                            // close url toast in 2s
                            setTimeout(() => state.urlToast.isActive = false, 5000)
                        }

                    } catch (e) {
                        // nothing to do
                    }
                }
            }
            currentAnimationFrameId = requestAnimationFrame(tick);


        }

        if (video) {
            // start streaming camera
            video.srcObject = mediaStream
            video.play()
            // close loading modal
            state.isActive.launchingCameraLoader = false
            // start jsqr
            currentAnimationFrameId = requestAnimationFrame(tick)
        } else {
            // close loading modal
            state.isActive.launchingCameraLoader = false

            // show error alert
            state.isActive.unexpectedErrorAlert = true
        }

        // create stopCamera function
        stopCamera = () => {
            video.pause()
            mediaStream.getTracks().forEach(track => track.stop())
            // stop animation frame
            cancelAnimationFrame(currentAnimationFrameId)
        }
    } catch (e) {
        // close loading
        state.isActive.launchingCameraLoader = false
        // show camera not found error alert
        state.isActive.cameraNotFoundErrorAlert = true
    }

}

const openUrl = (url:string) => {
    window.open(url, "_blank")
}

// stop camera on moving from this page
onUnmounted(() => {
    stopCamera()
})

// init camera
launchCamera()
</script>
<style scoped>
canvas#o-qr-reader-canvas {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
}
ion-toast.o-url-toast{
    cursor:pointer;
}
ion-toast.o-url-toast::part(header) {
    
    color:var(--ion-color-primary);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width:80vw !important;
}
</style>