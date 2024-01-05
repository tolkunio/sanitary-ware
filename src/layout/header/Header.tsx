import s from './Header.module.css'
import {Logo} from "../../components/logo/Logo";
import {SearchBar} from "../../components/searchBar/SearchBar";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";
import {Icon} from "../../components/icon/Icon";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Logo/>
                    <BurgerMenu/>
                    <SearchBar/>
                    <div className={s.greeting}>
                        <span className={s.hello}>Добро пожаловать</span>
                        <span className={s.login}>Вход/Регистрация</span>
                    </div>
                    <div className={s.headerIcons}>
                        <div className={s.iconRectangle}>
                            <Icon iconId={'user'} width={'13'} height={'15'} viewBox={'0 0 13 15'}/>
                        </div>
                        <div className={s.line}>
                            <Icon iconId={'line'} width={'1'} height={'30'} viewBox={'0 0 1 30'}/>
                        </div>
                        <div className={s.iconRectangle}>
                            <Icon iconId={'cart'} width={'17'} height={'16'} viewBox={'0 0 17 16'}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
