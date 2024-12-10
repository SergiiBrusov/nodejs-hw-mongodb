import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getContacts, getContactByIdHandler } from './controllers/contacts.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(pino());

  app.get('/contacts', getContacts);
  app.get('/contacts/:contactId', getContactByIdHandler);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
};
