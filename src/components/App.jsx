import { useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const handleSubmit = (values, actions) => {
    values.id = nanoid();

    setContacts((prev) => [...prev, values]);

    actions.resetForm();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "24px" }}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox onChange={handleFilterChange} value={searchQuery} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
