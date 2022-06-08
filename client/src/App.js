import React, { Component, us } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


// Import From Login Component
import Login from './components/Login/Login';

// Import from HomePage Component
import HomePage from './components/HomePage/HomePage';

// Import from Admin Component
import AdminView from './components/Admin/AdminView';

// Import from Doctor Component
import DoctorView from './components/Doctor/DoctorView';
import DoctorInfo from './components/Doctor/DoctorInfo';

// Import from Patient Component
import PatientView from './components/Patient/PatientView';
import BookAppointment from './components/Patient/BookAppointment';
import PatientInfo from './components/Patient/PatientInfo';


class App extends Component {
    
    render() { 
        return (
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/admin" element={<AdminView />}/>
                        <Route path="/doctor" element={<DoctorView />}/>
                        <Route path="/patient" element={<PatientView />}/>
                        <Route path="/DoctorInfo" element={<DoctorInfo />}/>
                        <Route path="/PatientInfo" element={<PatientInfo />}/>
                        <Route path="/BookAppointment" element={<BookAppointment />}/>
                        <Route path="/Login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;