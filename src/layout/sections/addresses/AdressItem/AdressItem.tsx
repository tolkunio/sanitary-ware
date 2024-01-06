import s from './AdressItem.module.css';
import {ReactNode} from "react";
import {Icon} from "../../../../components/icon/Icon";

type AdressItemPropstype = {
    title: string,
    actionLink: string,
    logo: ReactNode,
    address: Address,
    time: string,
    phone: string
}
type Address = {
    city: string,
    street: string
}
export const AdressItem = ({title, actionLink, address, logo, time, phone}: AdressItemPropstype) => {
    return (
        <div className={s.addressItem}>
            <div className={s.titleRow}>
                <div className={s.logoTitle}>
                    <div className={s.logo}>
                        {logo}
                    </div>
                    <div className={s.titleDesc}>
                        <div className={s.title}>{title}</div>
                        <div className={s.actionLink}>{actionLink}</div>
                    </div>
                </div>
                <div className={s.arrow}>
                    <Icon iconId={'arrow'} height={'16'} width={'16'} viewBox={'0 0 16 16'}/>
                </div>
            </div>
            <div className={s.line}>
                <Icon iconId={'divider'} width={'350'} height={'1'} viewBox={'0 0 350 1'}/>
            </div>

            <div className={s.addressRow}>
                <div className={s.addressPin}>
                    <Icon iconId={'addressPin'} width={'17'} height={'17'} viewBox={'0 0 17 17'}/>
                </div>
                <div className={s.adressCityStreet}>
                    <div className={s.address}>
                        {address.city}
                    </div>
                    <div className={s.address}>
                        {address.street}
                    </div>
                </div>
            </div>
            <div className={s.timeRow}>
                <div className={s.timePinWrapper}>
                    <div className={s.timePin}>
                        <Icon iconId={'timePin'} width={'17'} height={'17'} viewBox={'0 0 17 17'}/>
                    </div>
                    <div className={s.time}>
                        {time}
                    </div>
                </div>
                <div className={s.phonePinWrapper}>
                    <div className={s.phonePin}>
                        <Icon iconId={'phonePin'} width={'18'} height={'19'} viewBox={'0 0 18 19'}/>
                    </div>
                    <div className={s.phone}>
                        {phone}
                    </div>
                </div>
            </div>
        </div>
    );
};
