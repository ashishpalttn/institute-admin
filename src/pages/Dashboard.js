import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

const DashboardData = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="p-12">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-lg font-medium">Total Students</h3>
                    <p className="text-2xl font-semibold">1,200</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-lg font-medium">Active Events</h3>
                    <p className="text-2xl font-semibold">8</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-lg font-medium">Teachers</h3>
                    <p className="text-2xl font-semibold">75</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="text-lg font-medium">New Admissions</h3>
                    <p className="text-2xl font-semibold">340</p>
                </div>
                <div>
                    <h1>Count: {count}</h1>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
                    <button onClick={() => dispatch(incrementByAmount(5))}>
                        Increment by 5
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardData;
