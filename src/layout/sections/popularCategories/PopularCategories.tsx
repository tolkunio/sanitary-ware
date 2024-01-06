import s from './PopularCategories.module.css';
import circle1 from '../../../assets/images/circle1.png';
import circle2 from '../../../assets/images/circle2.png';
import circle3 from '../../../assets/images/circle3.png';
import circle4 from '../../../assets/images/circle4.png';
import circle5 from '../../../assets/images/circle5.png'

import {CircileContainer} from "./circleContainer/CircileContainer";
type CategoryItem={
    id:number,
    imgSrc:string,
    title:string
}
export const PopularCategories = () => {
    const items:CategoryItem[] =[
        {
            id:1,
            imgSrc:circle1,
            title:'Скидки'
        },
        {
            id:2,
            imgSrc:circle2,
            title:'Акции'
        },
        {
            id:3,
            imgSrc:circle3,
            title:'Распродажа'
        },
        {
            id:4,
            imgSrc:circle4,
            title:'Хиты'
        },
        {
            id:5,
            imgSrc:circle5,
            title:'Новости'
        },
        {
            id:6,
            imgSrc:circle1,
            title:'Скидки'
        },
        {
            id:7,
            imgSrc:circle2,
            title:'Акции'
        },
        {
            id:8,
            imgSrc:circle3,
            title:'Распродажа'
        },
        {
            id:9,
            imgSrc:circle4,
            title:'Хиты'
        },
        {
            id:10,
            imgSrc:circle5,
            title:'Новости'
        },{
            id:11,
            imgSrc:circle2,
            title:'Акции'
        },
        {
            id:12,
            imgSrc:circle3,
            title:'Распродажа'
        },
        {
            id:13,
            imgSrc:circle4,
            title:'Хиты'
        }
    ]
    return (
        <div className={s.popularCategories}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    {items.map(item=><CircileContainer  key={item.id} imgSrc={item.imgSrc} title={item.title}/>)}
                </div>
            </div>

        </div>
    );
};
