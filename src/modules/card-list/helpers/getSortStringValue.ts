import { TABS_ID, TCard } from "../types/cardListTypes"

const getSortStringValue = (card:TCard, key: keyof TCard) => {
    return key === TABS_ID.FILE_NAMES ? (card[key] as string).toString().split("/")[1].toLocaleLowerCase() : card[key].toString().toLocaleLowerCase()
}

export const cardListSort = (a: TCard, b: TCard, key: keyof TCard) => {
    if (typeof (a[key] && b[key]) === "string") {
        const x = getSortStringValue(a, key)
        const y = getSortStringValue(b, key)
        return (x < y) ? -1 : (x > y) ? 1 : 0;
    } else if (typeof (a[key] && b[key]) === "number") {
        const x = a[key] as number
        const y = b[key] as number
        return x - y
    }
}