import s from './MailAddresses.module.css';
import React from 'react';

const MailAddresses = ({mailAddressesList}) => {
  return (
    <ul className={s.mailList}>
      {mailAddressesList.map( (mail, index) => (
        <li key={index}>
          <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer" key={index}>
            {mail}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MailAddresses;