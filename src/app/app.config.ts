import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-604df","appId":"1:688396289569:web:8c93ced180f7afcbe2c560","storageBucket":"simple-crm-604df.appspot.com","apiKey":"AIzaSyBlkq-AEaCEuW-CqeMLTk0QyB_9e204cWQ","authDomain":"simple-crm-604df.firebaseapp.com","messagingSenderId":"688396289569"}))), 
    importProvidersFrom(provideFirestore(() => getFirestore()))]
};
