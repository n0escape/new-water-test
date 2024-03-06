import s from './Footer.module.css'
import SocialMedias from '../SocialMedias/SocialMedias'
import NavLinks from '../NavLinks/NavLinks';
import Contacts from '../Contacts/Contacts';

const Footer = ({logo, contacts}) => {
    return (
      <footer id={s.pageFooter}>
        <div className={s.container}>

          <div className={s.logo}>
            <img className={s.logoIcon} 
              src={process.env.PUBLIC_URL + logo} 
              alt="Company logo" width="150px" />
          </div>

          <div className={s.nav}>
            <h2>Навігація</h2>
            <NavLinks direction={'column'}/>
          </div>

          <div className={s.contacts}>
            <h2>Контакти</h2>
            <Contacts context={'footer'} contacts={contacts}/>
          </div>

          <div className={s.socialMedias}>
            <h2>Соціальні мережі</h2>
            <SocialMedias context={'footer'} socialMediasList={contacts.socialMedias} />
          </div>
        </div>
    </footer>
  )
}

export default Footer;