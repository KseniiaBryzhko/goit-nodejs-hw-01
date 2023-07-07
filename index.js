const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const selectedContact = await contacts.getContactById(id);
      return console.log(selectedContact);
    case "add":
      const addedContact = await contacts.addContact(name, email, phone);
      return console.log(addedContact);
    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);
