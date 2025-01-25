import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectWeather, getWeather} from '../../src/store/weatherSlice'
import StudentSearch from '../components/StudentSearch';

const DashboardData = () => {
    const weather = useSelector(selectWeather);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getWeather())
    },[])
    return (
        <div className="p-12">
            <h2 className="text-2xl font-semibold mb-4">Weather App</h2>
            <p>{}</p>
        
        </div>
    );
};

export default DashboardData;
