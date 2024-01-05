import s from './BestSellers.module.css';
import bestItem from '../../../assets/images/bestItem.png';
import {BestItem} from "./BestItem/BestItem";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {SubTitle} from "../../../components/subTitle/SubTitle";
export type BestItemsType = {
    id: number,
    imgSrc: string,
    like: boolean,
    description: string,
    price: string,
    inStock: boolean,
    isComplect: boolean
    count: number
}
export const BestSellers = () => {

    const bestItems: BestItemsType[] = [
        {
            id: 1,
            imgSrc: bestItem,
            like: false,
            description: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
            price: '1294 c',
            inStock: true,
            isComplect: true,
            count: 999
        },
        {
            id: 2,
            imgSrc: bestItem,
            like: true,
            description: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605',
            price: '1294 c',
            inStock: true,
            isComplect: true,
            count: 0
        },
        {
            id: 3,
            imgSrc: bestItem,
            like: false,
            description: 'Держатель для лейки',
            price: '1294 c',
            inStock: true,
            isComplect: true,
            count: 1
        },
        {
            id: 4,
            imgSrc: bestItem,
            like: false,
            description: 'Держатель для лейки BOOU PG605 ',
            price: '1294 c',
            inStock: true,
            isComplect: true,
            count: 1
        },
        {
            id: 5,
            imgSrc: bestItem,
            like: false,
            description: 'Держатель для лейки BOOU PG605 ',
            price: '1294 c',
            inStock: true,
            isComplect: true,
            count: 1
        },
    ];

    return (
        <div className={s.bestSellers}>
            <div className={s.container}>
                <div className={s.textWrapper}>
                    <SectionTitle title={'Хиты продаж'}/>
                    <SubTitle text={'перейти в каталог'}/>
                </div>
                <div className={s.wrapper}>
                    {bestItems.map(el => <BestItem key={el.id}
                                                   imgSrc={el.imgSrc}
                                                   isLiked={el.like}
                                                   description={el.description}
                                                   price={el.price}
                                                   inStock={el.inStock}
                                                   isComplect={el.isComplect}
                                                   count={el.count}/>)}
                </div>
            </div>
        </div>
    );
};
