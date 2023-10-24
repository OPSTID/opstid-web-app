import { Ref } from "vue"

class IonModalHistory {
    targetIonModalRefValue: any
    constructor(targetIonModalRef: Ref) {
        this.targetIonModalRefValue = targetIonModalRef.value
    }
    onPopState(){
        this.targetIonModalRefValue.dismiss()
    }
    closeModal() {
        console.log(this.targetIonModalRefValue)
        this.targetIonModalRefValue.dismiss()
        history.back()
    }
    onDidDismiss(){
        if(location.hash === "#modal:close-on-back"){
            history.back()
        }
        window.removeEventListener("popstate", this.onPopState)
    }
    onDidPresent(){
        history.pushState("ion-modal:close-on-back", "", location.href.split("#")[0] + "#modal:close-on-back")
        window.addEventListener("popstate", this.onPopState)
    }
    onUnmounted(){
        window.removeEventListener("popstate", this.onPopState)
    }
}

export default IonModalHistory