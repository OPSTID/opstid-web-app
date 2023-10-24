import { toSvg } from "jdenticon"

export default (hash: string) => {
    return `data:image/svg+xml,${encodeURIComponent(toSvg(hash, 200))}`
}