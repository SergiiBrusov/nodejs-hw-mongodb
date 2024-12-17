import express from 'express';
import { verifyIdContact } from '../controllers/verifyIdContact.js';
import {
  getContacts,
  getContactByIdHandler,
  addContact,
  updateContact,
  deleteContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContacts));
router.get('/:contactId', verifyIdContact, ctrlWrapper(getContactByIdHandler));
router.post('/', ctrlWrapper(addContact));
router.patch('/:contactId', ctrlWrapper(updateContact));
router.delete('/:contactId', ctrlWrapper(deleteContact));

export default router;
