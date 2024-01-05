import s from './SearchBar.module.css'
import {Icon} from "../icon/Icon";

export const SearchBar = () => {
    return (
        <>
            <input className={s.searchBar} placeholder={'Поиск'}></input>
            <div className={s.searchIcon}>
                <Icon iconId={'search'} width={'19'} height={'18'} viewBox={'0 0 19 18'}/>
            </div>
        </>

    );
};
