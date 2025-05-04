import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // inject
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { firebaseConfig } from './environments/firebase_config';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; // FirebaseApp
import {provideFirestore, getFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => {
      return initializeApp(firebaseConfig);
    }),
    provideFirestore(() => getFirestore()),
  ]
};