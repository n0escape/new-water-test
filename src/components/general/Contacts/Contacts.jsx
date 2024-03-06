import classNames from 'classnames';
import MailAddresses from '../MailAddresses/MailAddresses';
import PhoneNumbers from '../PhoneNumbers/PhoneNumbers';
import s from './Contacts.module.css';
import React from 'react';

const Contacts = ({context, contacts}) => {
    const listClass = classNames(s.contactsContainer, {
        [s.contacts]: context === 'contacts',
        [s.footer]: context === 'footer',
    });
    return (
        <div className={listClass}>
            <div>
            {contacts.offices.map((office, index) => (
                <p key={index}>{office.address}</p>
            ))}
            </div>
            <div>
                <PhoneNumbers phoneNumbersList={contacts.phoneNumbers} />
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

export default Contacts