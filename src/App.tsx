import React from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store/store';
import Portfolio from "./pages/admin/Portfolio";
import CanIHelp from "./pages/admin/CanIHelp";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import Case from "./pages/case";
import {getStorage} from "firebase/storage";
import Cases from "./pages/case/cases";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {en} from "./locale/en";
import {ru} from "./locale/ru";

export const firebaseConfig = {
  apiKey: "AIzaSyA_U7p7EBZl9nnuq0KTqgxHQFupYb9IWoc",
  authDomain: "wrapperport.firebaseapp.com",
  projectId: "wrapperport",
  storageBucket: "wrapperport.appspot.com",
  messagingSenderId: "588210714125",
  appId: "1:588210714125:web:5de3a618f4aca958048744",
  measurementId: "G-DE69V34BFJ"
};

const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ru
    },
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/cases/" element={<Cases/>}/>
            <Route path="/case/:id" element={<Case/>}/>

            <Route path='/admin/portfolio' element={<Portfolio/>}/>
            <Route path='/admin/canIHelp' element={<CanIHelp/>}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
