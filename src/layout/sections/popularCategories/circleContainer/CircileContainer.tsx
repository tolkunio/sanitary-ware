import s from './CircileContainer.module.css'
type CircileContainerPropsTYpe={
    imgSrc:string,
    title:string
}
export const CircileContainer = ({imgSrc,title}:CircileContainerPropsTYpe) => {
    return (
        <div className={s.circle}>
            <img className={s.photo} src={imgSrc}/>
            <span className={s.title}>{title}</span>
        </div>
    );
};
