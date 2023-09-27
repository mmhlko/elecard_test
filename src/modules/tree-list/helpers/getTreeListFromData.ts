import {TCard} from "modules/card-list/types/cardListTypes"
import {TreeLastChildName} from "../components/TreeList"
import {getDate} from "utils/getDate"

export const getTreeListFromData = (list: TCard[]) => {
    return [{
        id: "1",
        name: "Root",
        children: list.map((item, index) => {
            return {
                id: item.image,
                name: `Child ${index + 1}`,
                children: [
                    {id: `${index}-1`, name: TreeLastChildName.image, value: item.image},
                    {id: `${index}-2`, name: TreeLastChildName.category, value: item.category},
                    {id: `${index}-3`, name: TreeLastChildName.filesize, value: item.filesize},
                    {id: `${index}-4`, name: TreeLastChildName.timestamp, value: getDate(item.timestamp)},
                ]
            }
        })

    }]
}