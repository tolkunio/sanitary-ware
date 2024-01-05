import s from './Promotionals.module.css';
import bestItem from '../../../assets/images/bestItem.png';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {SubTitle} from "../../../components/subTitle/SubTitle";
import {BestItem} from "../bestSellers/BestItem/BestItem";
import {PromotionalItemPropsType} from "./PromotionalItem/PromotionalItem";
import {PromotionalItem} from "./PromotionalItem/PromotionalItem";

export const Promotionals = () => {
    const bestItems: PromotionalItemPropsType[] = [
        {
            id: 1,
            imgSrc: bestItem,
            isLiked: false,
            description: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
            newPrice: '1294 c',
            oldPrice: '1294 c',
            inStock: true,
            isComplect: true,
            count: 999
        },
        {
            id: 2,
            imgSrc: bestItem,
            isLiked: true,
            description: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605',
            newPrice: '1294 c',
            oldPrice: '1294 c',
            inStock: true,
            isComplect: true,
            count: 0
        },
        {
            id: 3,
            imgSrc: bestItem,
            isLiked: false,
            description: 'Держатель для лейки',
            newPrice: '1294 c',
            oldPrice: '1294 c',
            inStock: true,
            isComplect: true,
            count: 1
        },
        {
            id: 4,
            imgSrc: bestItem,
            isLiked: false,
            description: 'Держатель для лейки BOOU PG605 ',
            newPrice: '1294 c',
            oldPrice: '1294 c',
            inStock: true,
            isComplect: true,
            count: 1
        },
        {
            id: 5,
            imgSrc: bestItem,
            isLiked: false,
            description: 'Держатель для лейки BOOU PG605 ',
            newPrice: '1294 c',
            oldPrice: '1294 c',
            inStock: true,
            isComplect: true,
            count: 1
        },
    ];

    return (
        <div className={s.promotionals}>
            <div className={s.container}>
                <div className={s.textWrapper}>
                    <SectionTitle title={'Аукционные товары'}/>
                    <SubTitle text={'перейти в каталог'}/>
                </div>
                <div className={s.wrapper}>
                    {bestItems.map(el => <PromotionalItem key={el.id}
                                                   imgSrc={el.imgSrc}
                                                   isLiked={el.isLiked}
                                                   description={el.description}
                                                   oldPrice={el.oldPrice}
                                                   newPrice={el.newPrice}
                                                   inStock={el.inStock}
                                                   isComplect={el.isComplect}
                                                   count={el.count}/>)}
                </div>
            </div>
        </div>
    );
};
