import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './parts/ContactForm';
import ContactList from './parts/ContactList';
import Filter from './parts/Filter';
function Phonebook (){
   const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? [])
   const [filter, setFilter] = useState('')

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts])


   function addContact (name, number) {
      const contact = {
         id: nanoid(),
         name,
         number,
      };
      const alreadyHas = contacts.map(contact => {
         return contact.name;
      });

      if (alreadyHas.includes(contact.name)) {
         alert(contact.name + ' is already in contacts');
         return;
      }

      setContacts(prev => [contact, ...prev])
   };

   function changeFilter(e) {
      setFilter(e.currentTarget.value)
   };

   function onDelete(contactId) {
      setContacts(contacts.filter(({id}) => id !== contactId));
   };

      const normalizeFilter = filter.toLowerCase();

      const visibleContacts = contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter)
      );

      return (
         <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={addContact} />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
               contactsAray={visibleContacts}
               onDelete={onDelete}
            />
         </div>
      );
   }


export default Phonebook;
