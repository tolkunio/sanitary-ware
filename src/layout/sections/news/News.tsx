import s from './News.module.css';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Article} from "./article/Article";
import {SubTitle} from "../../../components/subTitle/SubTitle";
type ArticleType={
    id:number,
    discount:string,
    title:string
}
export const News = () => {
    const articles:ArticleType[]=[
        {
            id:1,
            discount:'-50%',
            title:'На кухонную мебель'
        },
        {
            id:2,
            discount:'-50%',
            title:'На кухонную мебель',
        },
        {
            id:3,
            discount:'-50%',
            title:'На кухонную мебель',
        }
    ]

    return (
        <div className={s.news}>
            <div className={s.container}>
                <div className={s.textWrapper}>
                    <SectionTitle title={'Новости'}/>
                    <SubTitle text={'все'}/>
                </div>

                <div className={s.wrapper}>
                    {articles.map(el=><Article key={el.id} discount={el.discount} title={el.title}/>)}
                </div>
            </div>
        </div>
    );
};
