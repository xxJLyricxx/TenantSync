import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';


const databaseURL = process.env.FIREBASE_DATABASE_URL;

if (!databaseURL) {
  throw new Error('FIREBASE_DATABASE_URL is not set');
}

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL,
  });
}

export const db = admin.database();