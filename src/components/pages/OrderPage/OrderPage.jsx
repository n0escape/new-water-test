import { Link, useParams } from 'react-router-dom';
import ContactForm from '../../imported/ContactForm/ContactForm';
import s from './OrderPage.module.css'

const OrderPage = ({servicesList}) => {
    const { idService } = useParams();
    
    return (
        <div className={s.orderPage}>
            <div className={s.orderPageContent}>
                <div className={s.header}>
                    <h1>Замовити послугу</h1>
                </div>
                <ContactForm servicesList={servicesList} selectedService={idService} />
            </div>
            <div className={s.moveBack}>
                <Link to="/#anchorServices">Повернутись до списку послуг</Link>
            </div>
        </div>
    )
}

export default OrderPage;