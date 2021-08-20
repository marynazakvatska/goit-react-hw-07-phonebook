import { useEffect } from "react";
import "./ContactList.module.css";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { getVisibleContacts } from "../../redux/contacts-selectors";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import * as contactsOperations from "../../redux/contactsOperations";
import { contactsSelectors } from "../../redux/slice";
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from "../../redux/contactsApi";

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();
  const { data: contacts } = useGetContactsQuery();
  const [onDeleteContact] = useDeleteContactsMutation();
  // const stateContact = useSelector(contactsSelectors.selectAll); //new

  // useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  // const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <>
      {/* {stateContact.length > 0 && ( //new
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.contactItem}>
              <p className={s.contactDescription}>
                {name}: {number}
              </p>
              <button
                className={s.deleteBtn}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )} */}
      <ul className={s.contactList}>
        {contacts &&
          visibleContacts.map(({ id, name, number }) => (
            <li key={id} className={s.contactItem}>
              <p className={s.contactDescription}>
                {name}: {number}
              </p>
              <button
                className={s.deleteBtn}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
