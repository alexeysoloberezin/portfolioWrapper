import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store/store';
import Portfolio from "./pages/admin/Portfolio";
import CanIHelp from "./pages/admin/CanIHelp";
import 'firebase/compat/auth';
import Case from "./pages/case";
import Cases from "./pages/case/cases";

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
