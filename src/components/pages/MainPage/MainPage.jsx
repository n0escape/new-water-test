import s from './MainPage.module.css';

import MapFrame from '../../imported/Map/Map.jsx';
import ContactForm from '../../imported/ContactForm/ContactForm.jsx';
import { Link } from 'react-router-dom';
import Contacts from '../../general/Contacts/Contacts.jsx';
import SocialMedias from '../../general/SocialMedias/SocialMedias.jsx';
import OurWorks from '../../general/OurWorks/OurWorks.jsx';

const MainPage = ({aboutUs, services, ourWorks, contacts, servicesList}) => {
  
  return (
    <div className={s.generalOutput}>

      <div id="anchorAboutUs" className={s.anchorAboutUs}></div>
      <section id={s.aboutUs} className={s.container}>
        <div className={s.details}>
          <h1>{aboutUs.companyName}</h1>
          <p>{aboutUs.companyDescription}</p>
        </div>
        <div className={s.featuresBlock}>
          <div className={s.featuresSection}>
            <div>
              <h2>Обираючи нас ви отримаєте</h2>
            </div>
            <div className={s.featuresContainer}>
              {aboutUs.advantages.map( avantage => (
                <div key={avantage.title} className={s.featureItem}>
                  <div className={s.header}>
                    <h3>{avantage.title}</h3>
                  </div>
                  <div className={s.info}>
                    <p>{avantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={s.contactUsBtn}>
            <Link to="/#anchorContactUs">Залишити замовлення</Link>
          </div>
        </div>
      </section>

      <div id="anchorServices" className={s.anchorServices}></div>
      <section id={s.services} className={s.container}>
        <div>
          <h1>Послуги</h1>
        </div>
        <div className={s.servicesList}>
          {services.map( service => (
            <div key={service.id} className={s.serviceCard}>
              <div>
                <img src={process.env.PUBLIC_URL + service.photos[0]} alt={service.title}/>
              </div>
              <div className={s.serviceCardInfo}>
                <div className={s.serviceDetails}>
                  <h3>{service.title}</h3>
                  <p className={s.serviceDescription}>{service.description}</p>
                </div>
                <div className={s.servicePrice}>
                  <p>від <strong>{service.minPrice}</strong></p>
                </div>
                <div className={s.serviceBtn}>
                  <Link to={`service/${service.id}`}> Детальніше </Link>
                </div>
              </div>
            </div>
          ))}
          {services.map( service => (
            <div key={service.id} className={s.serviceCard}>
              <div>
                <img src={process.env.PUBLIC_URL + service.photos[0]} alt={service.title}/>
              </div>
              <div className={s.serviceCardInfo}>
                <div className={s.serviceDetails}>
                  <h3>{service.title}</h3>
                  <p className={s.serviceDescription}>{service.description}</p>
                </div>
                <div className={s.servicePrice}>
                  <p>від <strong>{service.minPrice}</strong></p>
                </div>
                <div className={s.serviceBtn}>
                  <Link to={`service/${service.id}`}> Детальніше </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="anchorOurWorks" className={s.anchorOurWorks}></div>
      <section id={s.ourWorks} className={s.container}>
          <h1>Виконані замовлення</h1>
          <MapFrame content='works' markers={ourWorks}/>
          <OurWorks ourWorks={ourWorks}/>
      </section>

      <div id="anchorContactUs" className={s.anchorContactUs}></div>
      <section id={s.contactUs} className={s.container}>
        <div className={s.header}>
          <h1>Маєте запитання чи бажаєте замовити послугу?</h1>
          <h2>Тоді просто залиште свою заявку через форму...</h2>
        </div>
        <div>
          <ContactForm servicesList={servicesList}/>
        </div>
      </section>

      <div id="anchorContacts" className={s.anchorContacts}></div>
      <section id={s.contacts} className={s.container}>
        <div className={s.header}>
          <h2>
            ...або зв'яжіться з нами за наступними контактами
          </h2>
        </div>
        <div className={s.contactsBox}>
          <MapFrame content={'office'} markers={contacts.offices}/>
          <div>
            <Contacts context={'contacts'} contacts={contacts}/>
            <SocialMedias context={'contacts'} socialMediasList={contacts.socialMedias} />
          </div>
        </div>
      </section>     
    </div>
  );
}

export default MainPage;