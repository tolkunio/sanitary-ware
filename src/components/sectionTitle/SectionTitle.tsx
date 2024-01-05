import s from './SectionTitle.module.css';
type SectionTitlePropsType={
    title:string
}
export const SectionTitle = ({title}:SectionTitlePropsType) => {
    return (
        <h2 className={s.sectionTitle}>
            {title}
        </h2>
    );
};
