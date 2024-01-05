import s from './Article.module.css';
import {Icon} from "../../../../components/icon/Icon";
type ArticlePropsType={
    discount:string,
    title:string
}
export const Article = ({discount,title}:ArticlePropsType) => {
    return (
        <div className={s.article}>
            <div className={s.desc}>
                <span className={s.discount}>{discount}</span>
                <span className={s.title}>{title}</span>
                <button className={s.btn}>Подробнее</button>
            </div>
            <div>
                <Icon iconId={'newsLogo'} height={'112'} width={'168'} viewBox={'0 0 168 112'}/>
            </div>
        </div>
    );
};

