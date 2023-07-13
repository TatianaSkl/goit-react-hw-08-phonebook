import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Section, ContactForm, ContactList, Filter, Heading } from 'components';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main>
      <Section>
        <Heading>Phonebook</Heading>
        <ContactForm />
      </Section>
      <Section>
        <Heading>Contacts</Heading>
        <Filter />
        <ContactList />
      </Section>
    </main>
  );
};
