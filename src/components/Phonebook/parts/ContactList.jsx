import React from "react";
import css from './/ContactList.module.css'

const ContactList = ({contactsAray, onDelete}) => (
   <ul>
      {contactsAray.map(({ id, name, number }) => {
         return (
            <li className={css.list__item} key={id}>{name}: {number} <button className={css.list__btnDelete} type="button" onClick={() => {onDelete(id)}}>delete</button></li>
         );
      })}
   </ul>
);

export default ContactList;
