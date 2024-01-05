import React from 'react';
import {Icon} from "../icon/Icon";
import s from './Logo.module.css';

export const Logo = () => {
    return (
        <a className={s.logo}>
            <Icon iconId={'logo'} width={'115'} height={'30'} viewBox={'0 0 115 30'}/>
        </a>
    );
};