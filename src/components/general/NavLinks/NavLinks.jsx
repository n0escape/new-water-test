import s from './NavLinks.module.css'
import classNames from 'classnames';
import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({direction}) => {
    const linksClass = classNames(s.links, {
        [s.header]: direction === 'header',
        [s.footer]: direction === 'footer',
    });

    return (
        <ul className={linksClass}>
            <li>
                <Link to="/#anchorAboutUs">Про компанію</Link>
            </li>
            <li>
                <Link to="/#anchorServices">Послуги</Link>
            </li>
            <li>
                <Link to="/#anchorOurWorks">Наші роботи</Link>
            </li>
            <li>
                <Link to="/#anchorContacts">Контакти</Link>
            </li>
        </ul>
    )
}

export default NavLinks