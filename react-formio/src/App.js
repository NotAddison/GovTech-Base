import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FormViewer } from './pages/FormViewer/FormViewer';
import { FormBuilder } from '@formio/react';
import { FormBuilderComponent } from './pages/FormBuilder/FormBuilder';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/FormViewer" element={<FormViewer />}/>
            <Route path="/FormBuilder" element={<FormBuilderComponent formSchema={{}}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
