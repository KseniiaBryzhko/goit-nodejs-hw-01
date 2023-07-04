const users = require("./contacts");
console.log(users);
console.log("Welcome to Hell:)");

// const { getContactById } = require("./contacts");
// const contactById = getContactById();
// console.log(contactById);

// const { removeContact } = require("./contacts");
// const removedContact = removeContact();
// console.log(removedContact);

// const {addContact} = require("./contacts");
// const addedContact = addContact();
// console.log(addedContact);

const { listContacts } = require("./contacts");
const contacts = listContacts();
console.log(contacts);
