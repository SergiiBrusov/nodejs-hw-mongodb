import createError from 'http-errors';
import {
  getAllContacts,
  getContactById,
  createContact,
  editContact,
  removeContact,
} from '../services/contacts.js';

export const getContacts = async (req, res) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Contacts retrieved successfully',
    data: contacts,
  });
};

export const getContactByIdHandler = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) throw createError(404, 'Contact not found');
  res.json({
    status: 200,
    message: 'Contact found',
    data: contact,
  });
};

export const addContact = async (req, res) => {
  const newContact = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

export const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await editContact(contactId, req.body);
  if (!updatedContact) throw createError(404, 'Contact not found');
  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: updatedContact,
  });
};

export const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await removeContact(contactId);
  if (!deletedContact) throw createError(404, 'Contact not found');
  res.status(204).send();
};
