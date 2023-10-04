import {CardList} from "modules/card-list";
import {TreeList} from "modules/tree-list";
import { useAppSelector } from "storage/hookTypes";
import {ListTypes} from "utils/constants";

export const HomePage = () => {    

   const listType = useAppSelector(state => state.dataList.listType)  

    return (
        <>            
            {listType === ListTypes.cardList ? <CardList/> : <TreeList/>}
        </>
    );
}