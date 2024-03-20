import s from './Header.module.css';
import { Link } from 'react-router-dom';

import PhoneNumbers from '../PhoneNumbers/PhoneNumbers';
import NavLinks from '../NavLinks/NavLinks'

const Header = ({logo, contacts}) => {
  return (
      <header id={s.pageHeader}>
        <div className={s.mainPart}>
          <div className={s.logo}>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + logo} alt="Company logo" />
            </Link>
          </div>

          <div className={s.nav}>
            <div className={s.hiddenMenu}>Меню</div>
            <NavLinks direction={'header'}/>
          </div>
        </div>
        <div className={s.contactsBlock}>
          <PhoneNumbers context={'header'} phoneNumbersList={contacts.phoneNumbers} />
          <div className={s.schedule}>
            <p>{contacts.schedule}</p>
          </div>
        </div>
      </header>
    )
}

export default Header;