import s from './Footer.module.css';
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.logoWrapper}>
                        <div className={s.logo}>
                            <Logo/>
                        </div>
                        <p className={s.logoDesc}>
                            Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»
                        </p>
                        <div className={s.logoIconWrapper}>
                            <Icon iconId={'appstore'} width={'144'} height={'46'} viewBox={'0 0 144 46'}/>
                        </div>
                        <p className={s.copy}>
                            © 2023 Iskender.kg - Отечественный бренд сантехники
                        </p>
                    </div>
                    <div className={s.addressWrapper}>
                        <span className={s.address}>Адреса</span>
                        <div className={s.addressInfo}>
                            <span className={s.name}>ЭлитСтрой</span>
                            <span className={s.location}>ул. Ден-Сяопина 18/1</span>
                        </div>
                        <div className={s.addressInfo}>
                            <span className={s.name}>Баткен</span>
                            <span className={s.location}>ул. Льва-Толстого 19</span>
                        </div>
                        <div className={s.addressInfo}>
                            <span className={s.name}>ТааТан</span>
                            <span className={s.location}>ул. Лермонтова 6</span>
                        </div>
                    </div>
                    <div className={s.companyWrapper}>
                        <span className={s.company}>Компания</span>
                        <span className={s.companyItem}>Каталог</span>
                        <span className={s.companyItem}>Избранное</span>
                        <span className={s.companyItem}>Личный кабинет</span>
                    </div>
                    <div className={s.contactWrapper}>
                        <span className={s.contact}>Контакты</span>
                        <span className={s.email}>Email:</span>
                        <span className={s.emailValue}>iskender.kg@gmail.com</span>
                        <span className={s.phone}>Телефон:</span>
                        <span className={s.phoneValue}>+996 (500) 000-104</span>
                        <span className={s.phoneValue}>+996 (997) 000-104</span>
                        <span className={s.phoneValue}>+996 (997) 000-104</span>

                        <div className={s.socialWrapper}>
                            <Icon iconId={'whatsapp'} height={'24'} width={'24'} viewBox={'0 0 17 17'}/>
                            <Icon iconId={'instagram'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                            <Icon iconId={'facebook'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
