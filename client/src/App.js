import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { getProducts } from './redux/actions';
import HomePage from './components/HomePage/HomePage';
// import Footer from '';
import AdminView from './components/Admin/AdminView';
// import Loading from '';
import HelpUsImprove from './components/HelpUsToImprove/HelpUsImprove'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])


  return (
    <BrowserRouter>
      {/* <AuthProvider> */}

        <div className="App">

          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='/helpusimprove' element={<HelpUsImprove/>}/>
            <Route path='/adminView//*' element={<AdminView/>} />
            <Route path='*' element={<Navigate to='/home'/>}/>
          </Routes>

        </div>

      {/* </AuthProvider> */}
    </BrowserRouter>
  )
};

export default App;
