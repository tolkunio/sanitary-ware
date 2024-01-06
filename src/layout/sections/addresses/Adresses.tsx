import s from './Adresses.module.css';
import {Icon} from "../../../components/icon/Icon";
import {ReactNode} from "react";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {AdressItem} from "./AdressItem/AdressItem";

type Addresstype = {
    id: number,
    title: string,
    actionLink: string,
    logo: ReactNode,
    address: Address,
    time: string,
    phone: string
}
type Address={
    city:string,
    street:string
}
export const Adresses = () => {
    const logoIcon = <Icon iconId={'addressLogo'} height={'42'} width={'42'} viewBox={'0 0 42 42'}/>
    const addresses: Addresstype[] = [
        {
            id: 1,
            title: 'Iskender home    ',
            actionLink: 'открыть в карте',
            logo: logoIcon,
            address: {
                city:'Кыргызстан, г. Бишкек',
                street:'ул. Турусбекова A167'
            },
            time: '08:00 - 22:00',
            phone: '+996 500 345 345'
        },
        {
            id: 2,
            title: 'Iskender home    ',
            actionLink: 'открыть в карте',
            logo: logoIcon,
            address: {
                city:'Кыргызстан, г. Бишкек',
                street:'ул. Турусбекова A167'
            },
            time: '08:00 - 22:00',
            phone: '+996 500 345 345'
        },
        {
            id: 3,
            title: 'Iskender home    ',
            actionLink: 'открыть в карте',
            logo: logoIcon,
            address: {
                city:'Кыргызстан, г. Бишкек',
                street:'ул. Турусбекова A167'
            },
            time: '08:00 - 22:00',
            phone: '+996 500 345 345'
        }
    ]
    return (
        <div className={s.addreses}>
            <div className={s.container}>
                <SectionTitle title={'Адреса магазинов'}/>
                <div className={s.wrapper}>
                    {addresses.map(el => <
                        AdressItem title={el.title} actionLink={el.actionLink}
                                   logo={el.logo} address={el.address} time={el.time} phone={el.phone}/>)}
                </div>
            </div>
        </div>
    );
};
