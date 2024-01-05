import s from './Categories.module.css';
import bath from '../../../assets/images/card1.png';
import sink from '../../../assets/images/card2.png';
import hood from '../../../assets/images/card3.png'
import kitchenSink from '../../../assets/images/card4.png'
import other from '../../../assets/images/card5.png'
import toilet from '../../../assets/images/card6.png'
import washbasin from '../../../assets/images/card7.png'
import towelrail from '../../../assets/images/card8.png'
import ariston from '../../../assets/images/card9.png'
import showers from '../../../assets/images/card10.png'
import convector from '../../../assets/images/card11.png'
import {Category} from "./Category/Category";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";

type CategoryType = {
    id: number,
    title: string,
    count: number,
    imgSrc: string
}
export const Categories = () => {
    const categories: CategoryType[] = [
        {
            id: 1,
            title: 'Ванны',
            count: 3000,
            imgSrc: bath
        },
        {
            id: 2,
            title: 'Смесители',
            count: 3000,
            imgSrc: sink
        },
        {
            id: 3,
            title: 'Вытяжки для кухни',
            count: 3000,
            imgSrc: hood
        },
        {
            id: 4,
            title: 'Кухонные мойки',
            count: 3000,
            imgSrc: kitchenSink
        },
        {
            id: 5,
            title: 'Другие',
            count: 3000,
            imgSrc: other
        },
        {
            id: 6,
            title: 'Унитазы',
            count: 3000,
            imgSrc: toilet
        },
        {
            id: 7,
            title: 'Вытяжки для кухни',
            count: 3000,
            imgSrc: sink
        },
        {
            id: 8,
            title: 'Умывальники ',
            count: 3000,
            imgSrc: washbasin
        },
        {
            id: 9,
            title: 'Полотенцесушители',
            count: 3000,
            imgSrc: towelrail
        },
        {
            id: 10,
            title: 'Водонагреватели',
            count: 3000,
            imgSrc: ariston
        },
        {
            id: 11,
            title: 'Душевые ',
            count: 3000,
            imgSrc: showers
        },
        {
            id: 12,
            title: 'Водонагреватели ',
            count: 3000,
            imgSrc: convector
        },
        {
            id: 13,
            title: 'Водонагреватели ',
            count: 3000,
            imgSrc: convector
        },
        {
            id: 14,
            title: 'Полотенцесушители ',
            count: 3000,
            imgSrc: towelrail
        }
    ]
    return (
        <div className={s.categories}>
            <div className={s.container}>
                <SectionTitle title={'Категории'}/>
                <div className={s.wrapper}>
                    {categories.map(el =>
                        <Category key={el.id} title={el.title} count={el.count} imgSrc={el.imgSrc}/>)}
                </div>

            </div>
        </div>
    );
};
