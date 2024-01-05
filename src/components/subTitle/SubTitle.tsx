import s from './SubTitle.module.css'
type SubTitlePropsType={
    text:string
}
export const SubTitle = ({text}:SubTitlePropsType) => {
    return (
        <span className={s.subtitle}>
        {text}
        </span>
    );
};
