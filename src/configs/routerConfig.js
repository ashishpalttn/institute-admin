import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import  EventRegisterPage  from '../pages/EventRegisterPage';
import DashboardData from '../pages/Dashboard';
import LiveEvents from '../pages/LiveEvents';
import ParticepantsList from '../pages/ParticepantsList';


// import './index.css';

const RouteConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage/>}>
                    <Route index = {true} element = {<DashboardData/>}/>
                    <Route path="/dashboard/overview" element={<DashboardData/>} />
                    <Route path="/events/register" element={<EventRegisterPage/>} />
                    <Route path="/live-events" element={<LiveEvents />} />
                    <Route path="/particepants" element={<ParticepantsList />} />
                </Route>
                <Route path="/dashboard" element={<DashboardPage />} />
                
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default RouteConfig;