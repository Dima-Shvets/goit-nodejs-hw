const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const contactsOperations = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          const contacts = await contactsOperations.listContacts();
          console.log(contacts)
          return;
      
      case 'get':
          console.log('get')
          const contact = await contactsOperations.getContactById(id);
          console.log(contact)
          return;

      case 'add':
          const addedContact = await contactsOperations.addContact(name, email, phone);
          console.log(addedContact);
          return;

      case 'remove':
          const removedContact = await contactsOperations.removeContact(id);
          console.log(removedContact);
          return;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);