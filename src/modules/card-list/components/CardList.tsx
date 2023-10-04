import { Card } from "components/card/Card";
import s from "./styles.module.scss";
import classNames from "classnames";
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "storage/hookTypes";
import { Pagination } from "antd";
import { TABS, TCard } from "../types/cardListTypes";
import { Spinner } from "components/spinner/Spinner";
import { cardListSelector } from "modules/card-list";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { setDataByCurrentSortAction } from "modules/card-list";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { RadioList } from "components/radio-list/RadioList";
import { deleteCardListItemAction, resetCardListAction, setStartItemAction } from "../store/cardListActions";
import { apiLoadData } from "storage/data/api/apiLoadData";
import { resetDeletedCardsAction } from "storage/storageData/store/storageDataActions";
import { PAGE_SIZE } from "utils/constants";

const renderCard = (item: TCard, index: number) => <Card key={item.image + index} {...item} />;

export const CardList = memo(() => {
    const [page, setPage] = useState(1);
    const ref = useRef<HTMLDivElement>()
    const dispatch = useDispatch();
    const { data: cardList, errorState, total: totalCardsCount, currentSort, startItem, endItem } = useAppSelector(cardListSelector);
    const { data: initialData, loading } = useAppSelector(state => state.dataList)
    const { deletedCards } = useAppSelector(state => state.storageData)    
    // const endItem = startItem + PAGE_SIZE;    
    const lastPage = Math.ceil(totalCardsCount / PAGE_SIZE)
    const isPaginated = totalCardsCount / PAGE_SIZE > 1;

    const handleClickPage = (page: number) => {
        console.log('lastPage', totalCardsCount);
        setPage(page);
        page === 1 ? dispatch(setStartItemAction(0)) : dispatch(setStartItemAction((page - 1) * PAGE_SIZE));       
        page === lastPage && dispatch(setStartItemAction(totalCardsCount - PAGE_SIZE))
    }
    const handleSortInputChange = (tab: string) => {
        dispatch(setDataByCurrentSortAction(tab))
    }
    const handleResetClick = () => {
        dispatch(resetCardListAction(initialData))
        //dispatch(setCurrentSortAction(null))
        dispatch(resetDeletedCardsAction())
        currentSort && dispatch(setDataByCurrentSortAction(currentSort))
    }

    useEffect(() => {
        apiLoadData(dispatch).then(() => {
            deletedCards?.forEach(card => dispatch(deleteCardListItemAction(card)))
            //currentSort && dispatch(setDataByCurrentSortAction(currentSort))
        })
    }, [])

    return (
        <>
            {!loading
                ?
                <>
                    {errorState
                        ? <ErrorMessage errorText={errorState} />
                        : <section className={classNames(s.wrapper, "container")}>
                            <ContentHeader title="Список карточек" />
                            <RadioList
                                name="sorting"
                                tabs={TABS}
                                action={handleSortInputChange}
                                title="Сортировка"
                                currentCheckedItem={currentSort}
                                extraClass={s.sort_sticky}
                                defaultChecked
                            >
                                <button
                                    className={classNames("button", s.button_reset)}
                                    onClick={handleResetClick}
                                    disabled={cardList?.length === initialData?.length}
                                >
                                    Сбросить по умолчанию
                                </button>
                            </RadioList>
                            <div className={s.list_wrapper} ref={ref}>
                                {cardList && cardList?.slice(startItem, endItem).map(renderCard)}
                            </div>
                            {isPaginated &&
                                <Pagination
                                    total={totalCardsCount}
                                    pageSize={PAGE_SIZE}
                                    current={page}
                                    onChange={handleClickPage}
                                    className={s.pagination}
                                    showSizeChanger={false}
                                />
                            }
                        </section>
                    }
                </>
                : <Spinner />
            }
        </>
    )
})