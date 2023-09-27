export type TCard = {
    image: string,
	filesize: number,
	timestamp: number,
	category: string
}

export enum TABS_ID  {
    FILE_SIZE = "filesize",
    DATE = "timestamp",
    FILE_NAMES = "image",
	CATEGORY = "category",
}
export type Tab = {
    id: string,
    title: string,
}

export const TABS: Tab[] = [
    {
        id: TABS_ID.FILE_SIZE,
        title: "По размеру файла",
    },
    {
        id: TABS_ID.DATE,
        title: "По дате",
    },
    {
        id: TABS_ID.CATEGORY,
        title: "По категории"
    },
    {
        id: TABS_ID.FILE_NAMES,
        title: "По имени файла"
    },
]