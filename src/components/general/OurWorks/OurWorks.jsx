import s from './OurWorks.module.css';
import React from 'react';

const OurWorks = ({ourWorks}) => (
    <div className={s.worksContainer}>
        {
            ourWorks.map( work => (
            <div key={work.title} className={s.workItem}>
                <div className={s.workItemContent}>
                <div>
                    <img src={process.env.PUBLIC_URL + work.imageSrc} alt={work.title} />
                </div>
                <div className={s.itemDetails}>
                    <h3>{work.title}</h3>
                    <b><p>{work.date !== null ? work.date : null}</p></b>
                    <p>{work.description}</p>
                </div>
                </div>
                <hr />
            </div>
            ))
        }
    </div>
)

export default OurWorks