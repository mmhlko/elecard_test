import classNames from "classnames";
import {ContentHeader} from "ui/content-header/ContentHeader";
import s from "./styles.module.scss";
import {NodeRendererProps, Tree} from "react-arborist";
import {useAppSelector} from "storage/hookTypes";
import {cardListSelector} from "modules/card-list/store/cardListSelectors";
import {BASE_URL} from "modules/card-list/api/constants";
import FileSvg from "../assets/file.svg"
import FolderSvg from "../assets/folder.svg"
import {PhotoView, PhotoProvider} from "react-photo-view";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {getTreeListFromData} from "modules/tree-list/helpers/getTreeListFromData";

export enum TreeLastChildName {
    image = "Изображение",
    category = "Категория",
    filesize = "Размер файла",
    timestamp = "Дата"
}

export const TreeList = () => {

    const {data: cardList, errorState } = useAppSelector(cardListSelector);

    return (
        <section className={classNames("container")}>
            <ContentHeader title="Древовидный список"/>
            {!errorState
                ? <div className={s.tree_wrapper}>
                    <Tree
                        className={s.tree_list}
                        initialData={getTreeListFromData(cardList)}
                        openByDefault={false}
                        width={"100%"}
                        height={400}
                        indent={20}
                        rowHeight={36}
                        overscanCount={10}
                        paddingTop={150}
                        paddingBottom={10}
                        padding={50}
                    >
                        {Node}
                    </Tree>
                </div>
                : <ErrorMessage errorText={errorState}/>
            }
        </section>
    )
}

const Node = ({node, style, dragHandle}: NodeRendererProps<any>) => {
    return (
        <div className={s.item} style={style} ref={dragHandle} onClick={() => node.toggle()}>
            {node.isLeaf
                ? <div className={s.node}>
                    {node.data.name === TreeLastChildName.image
                        ? <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
                            <PhotoView src={`${BASE_URL}${node.data.value}`}>
                                <img className={s.thumbnail} src={`${BASE_URL}${node.data.value}`}
                                     alt={node.data.value}/>
                            </PhotoView>
                        </PhotoProvider>
                        : <>
                            <FileSvg/>
                            <span className={s.node_title}>{node.data.name}</span>
                            <span>{node.data.value}</span>
                        </>
                    }
                </div>
                : <div className={s.node}>
                    <FolderSvg/>
                    {node.data.name}
                </div>
            }
        </div>
    );
}