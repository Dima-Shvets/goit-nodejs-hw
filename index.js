const yargs = require('yargs');
const { hideBin } = require('yargs/helper');

const contactsOperations = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          const contacts = await contactsOperations.listContacts();
          console.log(contacts)
          return contacts;
      
      case 'get':
          console.log('get')
          const contact = await contactsOperations.getContactById(id);
          console.log(contact)
          return contact

      case 'add':
          const addedContact = await contactsOperations.addContact(name, email, phone);
          console.log(addedContact);
          return addedContact;

      case 'remove':
          const removedContact = await contactsOperations.removeContact(id);
        //   console.log(removedContact);
          return removedContact;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const arr = hideBin(process.argv)

const { argv } = yargs(arr);

invokeAction(argv);