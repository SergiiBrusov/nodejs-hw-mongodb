import mongoose from 'mongoose';
import { getContactById } from '../services/contacts.js';
import createError from 'http-errors';

export const verifyIdContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      return next(createError(400, 'Invalid contact ID format'));
    }

    const contact = await getContactById(contactId);

    if (!contact) {
      return next(createError(404, 'Contact not found'));
    }

    res.status(200).json({
      status: 200,
      message: 'Contact found',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};
