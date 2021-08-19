
import './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';
import Filter from '../Filter/Filter';
import s from './Phonebook.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import { contactSelector } from '../../redux/slice'; */

 function Phonebook() {
  
    return (
        <div className={s.section}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />

            <h2 className={s.title_contact}>Contacts</h2>
        <Filter />
        <ContactList />
        <ToastContainer/>

      </div>
    );
}

export default Phonebook