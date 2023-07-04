const fs = require("fs/promises");
const path = require("path");

// const contactsPath = path.join(__dirname, "db/contacts.json");

// fs.readFile("./db/contacts.json")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const contactsPath = "./db/contacts.json";

// const readFile = async () => {
//   const data = await fs.readFile(contactsPath);
//   console.log(data.toString());
// };

// const readFile = async () => {
//   const data = await fs.readFile("./db/contacts.json", "utf-8");
//   console.log(data);
// };

// readFile();

// const newUser = {
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
//   name: "Allen Raymond",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(992) 914-3792",
// };

// const addText = async () => {
//   await fs.appendFile("./db/contacts.json", newUser);
// };

// addText();

// const replaceText = async () => {
//   await fs.writeFile("./db/contacts.json", newUser);
// };

// replaceText();

// TODO: задокументувати кожну функцію
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  console.log(data.toString());
  return data.toString();
};

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const contact = contacts.find((contact) => contact.id === contactId);

//   return contact || null;
// };

// function getContactById(contactId) {
// ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// }

// function removeContact(contactId) {
// ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

// function addContact(name, email, phone) {
// ...твій код. Повертає об'єкт доданого контакту.
// }

const admins = ["Alex", "Petya"];
const clients = ["Ira", "Masha"];
const users = {
  admins,
  clients,
};

// module.exports = users;

module.exports = { users, listContacts };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// };
