const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contactId = String(id);
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact || null;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (id, name, email, phone) => {
  const contactId = String(id);
  const contacts = await listContacts();
  const contactToUpdate = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactToUpdate === -1) {
    return null;
  }

  contacts[contactToUpdate] = { id, name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[contactToUpdate];
};

const removeContact = async (id) => {
  const contactId = String(id);
  const contacts = await listContacts();
  const contactToRemove = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactToRemove === -1) {
    return null;
  }

  const [removedContact] = contacts.splice(contactToRemove, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removedContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
