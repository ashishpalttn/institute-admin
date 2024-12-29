import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import  EventRegisterPage  from '../pages/EventRegisterPage';
import DashboardData from '../pages/Dashboard';
import LiveEvents from '../pages/LiveEvents';
import ParticepantsList from '../pages/ParticepantsList';
import ProtectedRoute from './ProtectedRoute';
import StudentAdmissionPage from '../pages/StudentAdmission';


// import './index.css';

const RouteConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage/>}>
                    <Route index = {true} element = {<DashboardData/>}/>
                    <Route path="/dashboard/overview" element={<ProtectedRoute><DashboardData/></ProtectedRoute>} />
                    <Route path="/events/register" element={<ProtectedRoute><EventRegisterPage/></ProtectedRoute>} />
                    <Route path="/live-events" element={<ProtectedRoute><LiveEvents /></ProtectedRoute> } />
                    <Route path="/particepants" element={<ProtectedRoute><ParticepantsList /></ProtectedRoute>} />
                    <Route path='/students/admissions' element={<ProtectedRoute><StudentAdmissionPage/></ProtectedRoute>}/>
                </Route>
                <Route path="/dashboard" element={<DashboardPage />} />
                
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default RouteConfig;