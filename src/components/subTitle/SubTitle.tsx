import s from './SubTitle.module.css'
type SubTitlePropsType={
    text:string
}
export const SubTitle = ({text}:SubTitlePropsType) => {
    return (
        <a href={'#'} className={s.subtitle}>
        {text}
        </a>
    );
};
