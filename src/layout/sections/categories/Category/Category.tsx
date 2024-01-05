import s from './Category.module.css';

type CategoryPropsType = {
    title: string,
    count: number,
    imgSrc: string
}
export const Category = ({title, count, imgSrc}: CategoryPropsType) => {
    return (
        <div className={s.category}>
            <div className={s.text}>
                <span className={s.title}>{title}</span>
                <span className={s.count}>{`${count} товаров`}</span>
            </div>
            <img className={s.img} src={imgSrc}/>
        </div>
    );
};
