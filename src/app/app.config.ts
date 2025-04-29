import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp, FirebaseApp } from '@angular/fire/app';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
// import { provideDatabase, getDatabase } from '@angular/fire/database';
// import { firebaseConfig } from './environments/firebase_config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => {
      return initializeApp(firebaseConfig);
    }),
    provideFirestore(() => getFirestore()),
    // provideDatabase(() => {
    //   const app = inject(FirebaseApp);
    //   return getDatabase(app);
    // }),
  ]
};
