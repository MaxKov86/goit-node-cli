// import { program } from "commander";
const contacts = require("./contacts");
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse();

// const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      return console.table(listContacts);

    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    case "add":
      const addedContact = await contacts.addContact(name, email, phone);
      return console.log(addedContact);

    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
invokeAction({ action: "remove", id: "a-Bga3LqQIuyyfer0ASai" });
// invokeAction({
//   action: "add",
//   name: "Max",
//   email: "max@google.com",
//   phone: "111-11-11",
// });
