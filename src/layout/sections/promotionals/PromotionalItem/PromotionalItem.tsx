import s from './PromotionalItem.module.css'
import {Icon} from "../../../../components/icon/Icon";
export type PromotionalItemPropsType={
    id?:number,
    imgSrc:string,
    isLiked:boolean,
    description:string,
    oldPrice:string,
    newPrice:string,
    inStock:boolean,
    isComplect:boolean
    count:number
}
export const PromotionalItem = ({imgSrc,isLiked,description,oldPrice,newPrice,inStock,isComplect,count}:PromotionalItemPropsType) => {
    const inStockStr = inStock?'В наличии':'';
    const isComplectStr =isComplect?'Комплект':'';
    return (
        <div className={s.bestItem}>
            <img className={s.img} src={imgSrc} alt={''}/>
            <span className={s.heartRectangle}>
              <Icon iconId={'heart-outline'} height={'18'} width={'18'} viewBox={'0 0 18 18'}/>
            </span>
            <span className={s.desc}>{description}</span>
            <div className={s.priceWrapper}>
                <span className={s.newPrice}>{newPrice}</span>
                <span className={s.oldPrice}>{oldPrice}</span>
            </div>
            <span className={s.inStock}>{inStockStr}</span>
            <div className={s.isComplect}>
                <Icon iconId={'circle'} height={'6'} width={'7'} viewBox={'0 0 6 7'}/>
                <span className={s.isComplectSpan}>{isComplectStr}</span>
            </div>

            <div className={s.footer}>
                <div className={s.circle}>
                    <Icon iconId={'minus'} width={'24'} height={'24'} viewBox={'0 0 24 24'}/>
                </div>
                <span className={s.count}>{count}</span>
                <div className={s.circle}>
                    <Icon iconId={'plus'} width={'24'} height={'24'} viewBox={'0 0 24 24'}/>
                </div>
            </div>
        </div>
    );
};
