import { HTTP_STATUS } from '../constants/httpStatus.js';
import { MESSAGES } from '../constants/messages.js';
import { getAllContacts, getContactById } from '../services/contacts.js';

export const getContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.CONTACT_FETCH_SUCCESS,
      data: contacts,
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: MESSAGES.SERVER_ERROR,
    });
  }
};

export const getContactByIdHandler = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        message: MESSAGES.CONTACT_NOT_FOUND,
      });
    }

    res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: `${MESSAGES.CONTACT_BY_ID_SUCCESS} ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: MESSAGES.SERVER_ERROR,
    });
  }
};
