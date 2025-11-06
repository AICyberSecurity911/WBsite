
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let app: App;
let db: Firestore;

export function getFirebaseAdmin() {
  if (!app) {
    const apps = getApps();
    if (apps.length === 0) {
      // Initialize with service account credentials
      const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT 
        ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
        : {
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          };

      app = initializeApp({
        credential: cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
    } else {
      app = apps[0];
    }
  }
  return app;
}

export function getFirestoreAdmin(): Firestore {
  if (!db) {
    getFirebaseAdmin();
    db = getFirestore();
  }
  return db;
}
