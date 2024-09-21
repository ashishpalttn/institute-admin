import React from 'react';

const DashboardData = () => {
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
            </div>
        </div>
    );
};

export default DashboardData;
