import {TCard} from "modules/card-list/types/cardListTypes"
import {TreeLastChildName} from "../components/TreeList"
import {getDate} from "utils/getDate"

export const getTreeListFromDataByCategory = (list: TCard[]) => {
    const categories = Array.from(new Set(list.map(item => item.category)))     
    const parsedList = categories.map((category, index) => ({ category: category, id: index + 1, data: list.filter(item => item.category === category)}));
    return [{
        id: "1",
        name: "Root",
        children: parsedList.map((listItem, index) => {           
            return {
                id: `${index + 1} ${listItem.id.toString()}`,
                name: listItem.category,
                children: listItem.data.map((item, index) => {
                    return {
                        id: item.image,
                        name: `${item.category} ${index + 1}`,
                        children: [
                            {id: `${index}-1`, name: TreeLastChildName.image, value: item.image},
                            {id: `${index}-2`, name: TreeLastChildName.category, value: item.category},
                            {id: `${index}-3`, name: TreeLastChildName.filesize, value: item.filesize},
                            {id: `${index}-4`, name: TreeLastChildName.timestamp, value: getDate(item.timestamp)},
                        ]
                    }
                })                
            }
        })

    }]
}