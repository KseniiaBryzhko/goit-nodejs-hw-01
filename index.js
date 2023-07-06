console.log("Welcome to Hell:)");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const selectedContact = await contacts.getContactById(id);
      return console.log(selectedContact);
    case "add":
      const addedContact = await contacts.addContact(name, email, phone);
      return console.log(addedContact);
    case "update":
      const updatedContact = await contacts.updateContact(
        id,
        name,
        email,
        phone
      );
      return console.log(updatedContact);
    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Kseniia",
//   email: "kseniya.brizhko@gmail.com",
//   phone: "(099) 496-9271",
// });

// invokeAction({
//   action: "update",
//   id: "IcY_fZe3MwfJ3TT6z-DNj",
//   name: "UPDATE",
//   email: "kseniya.brizhko@gmail.com",
//   phone: "(099) 496-9271",
// });

// invokeAction({ action: "remove", id: "fXVzsS99gLMi-RtdVXnjT" });
