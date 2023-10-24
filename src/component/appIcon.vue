<template>
    <button class="o-app-icon ion-text-center" :class="{'o-app-icon-launched':state.launched}" @click="launchApp(props.routerLink)" tabindex="0">
        <div class="o-app-icon-wrapper">
            <ion-icon :icon="props.icon" class="o-app-icon-icon-body"></ion-icon>
        </div>
        <p class="ion-text-center o-app-icon-app-name">{{ props.appName }}</p>
    </button>
</template>
<script setup lang="ts">
import { defineProps, reactive, ref } from "vue"
import { useRouter, RouteLocationRaw } from "vue-router";
import { IonIcon } from "@ionic/vue"

const router = useRouter()
const props = defineProps<{
    icon: string
    appName: string
    routerLink?: RouteLocationRaw,
}>()

const state = reactive({
    launched: false
})

const oAppIconWrapper = ref()

const launchApp = (path: RouteLocationRaw | undefined) => {
    if(path){
        // start launch animation
        state.launched = true
        setTimeout(() => {
            router.push(path)
            setTimeout(() => {
                state.launched = false
            },500)
        },100)
    }
}
</script>
<style scoped>
.o-app-icon{
    width:100%;
    height:100%;
    cursor:pointer;
    transition-duration: 0.3s;
    background-color: transparent;
    outline-color: var(--ion-color-primary);
}
.o-app-icon:hover, .o-app-icon:focus{
    opacity: 0.7;
    transform: translateY(-5px);
}
.o-app-icon-wrapper{
    position: relative;
    display:inline-block;
    width:2em;
    height:2em;
    border-radius:50%;
    background-color:rgba(155,155,155,0.25);
    font-size:1.8rem;
    vertical-align: middle;
    transition-duration: inherit;
}
.o-app-icon.o-app-icon-launched .o-app-icon-wrapper{
    transform:scale(15);
    opacity:0
}
.o-app-icon-icon-body{
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    position: absolute;
}

.o-app-icon-app-name{
    font-size:0.9rem;
    font-weight: bold;
}
</style>