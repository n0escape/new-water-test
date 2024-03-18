import s from './ContactsInfo.module.css';
import classNames from 'classnames';
import MailAddresses from '../MailAddresses/MailAddresses';
import PhoneNumbers from '../PhoneNumbers/PhoneNumbers';
import React from 'react';

const ContactsInfo = ({context, contacts}) => {
    const listClass = classNames(s.contactsContainer, {
        [s.contacts]: context === 'contacts',
        [s.footer]: context === 'footer',
    });
    return (
        <div className={listClass}>
            <div className={s.officesInfo}>
            {contacts.offices.map((office, index) => (
                <p key={index}>{office.address}</p>
            ))}
            </div>
            <div>
                <PhoneNumbers context={'contacts'} phoneNumbersList={contacts.phoneNumbers} />
            </div>
            <div>
                <MailAddresses mailAddressesList={contacts.mailAddresses} />
            </div>
            <div>
                <p>{contacts.schedule}</p>
            </div>
        </div>
    )
}

export default ContactsInfo