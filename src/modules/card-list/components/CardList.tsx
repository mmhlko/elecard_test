import {Card} from "components/card/Card";
import s from "./styles.module.scss";
import classNames from "classnames";
import {memo, useCallback, useEffect, useState} from "react";
import {apiLoadCardList} from "../api/apiLoadFightsList";
import {useDispatch} from "react-redux";
import {useAppSelector} from "storage/hookTypes";
import {Pagination} from "antd";
import {TABS, TCard} from "../types/cardListTypes";
import {Spinner} from "components/spinner/Spinner";
import {cardListSelector} from "modules/card-list";
import {ContentHeader} from "ui/content-header/ContentHeader";
import {setCurrentSortAction} from "modules/card-list";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {RadioList} from "components/radio-list/RadioList";

const renderCard = (item: TCard, index: number) => <Card key={item.image + index} {...item} />

export const CardList = memo(() => {
    const [page, setPage] = useState(1);
    const [startItem, setStartItem] = useState(0);
    const dispatch = useDispatch();
    const {data: cardList, errorState, loading, total: totalCardsCount} = useAppSelector(cardListSelector);
    const PAGE_SIZE = 6;
    const endItem = startItem + PAGE_SIZE;
    const isPaginated = totalCardsCount / PAGE_SIZE > 1;

    const handleClickPage = useCallback((page: number) => {
        setPage(page);
        page === 1 ? setStartItem(0) : setStartItem((page - 1) * PAGE_SIZE)
    }, [])
    const handleSortInputChange = (tab: string) => {
        dispatch(setCurrentSortAction(tab))
    }
    const handleResetClick = () => {
        apiLoadCardList(dispatch)
    }
    useEffect(() => {
        !cardList && apiLoadCardList(dispatch)
    }, [])

    return (
        <>
            {!loading
                ?
                <>
                    {errorState
                        ? <ErrorMessage errorText={errorState}/>
                        : <section className={"container"}>
                            <ContentHeader title="Список карточек"/>
                            <RadioList tabs={TABS} action={handleSortInputChange} title="Сортировка">
                                <button className={classNames("button", s.button_reset)}
                                        onClick={handleResetClick}>Сбросить по умолчанию
                                </button>
                            </RadioList>
                            <div className={s.list_wrapper}>
                                {cardList && cardList.slice(startItem, endItem).map(renderCard)}
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
                : <Spinner/>
            }
        </>
    )
})