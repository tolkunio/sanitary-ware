import s from './BurgerMenu.module.css';
import {Icon} from "../../../components/icon/Icon";
export const BurgerMenu = () => {
    return (
        <div className={s.nav}>
            <Icon iconId={'burger'} width={'15'} height={'9'} viewBox={'0 0 15 9'}/>
            <span className={s.catalog}>Каталог</span>
        </div>
    );
};
