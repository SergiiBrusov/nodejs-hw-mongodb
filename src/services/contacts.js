import { Contact } from '../db/models/contact.js';

export const getAllContacts = async () => {
  return await Contact.find({});
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};

export const createContact = async (contactData) => {
  return await Contact.create(contactData);
};

export const editContact = async (id, updatedData) => {
  return await Contact.findByIdAndUpdate(id, updatedData, { new: true });
};

export const removeContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};
