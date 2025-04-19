import React from 'react';
import { useState } from 'react';
function Profile() {
    const user = JSON.parse(localStorage.getItem("indiaMart-user"));
    console.log(user);
   
    const userRole = user ? user.role : null;
    const userName = user ? user.name : null;
    const userEmail = user ? user.email : null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-4xl font-bold shadow-md mb-4">
                        {userName ? userName.charAt(0).toUpperCase() : "?"}
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Welcome, {userName}</h1>
                    <p className="text-sm text-gray-500">Here's your profile information</p>
                </div>

                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h2 className="text-sm text-gray-500">Name</h2>
                        <p className="text-lg font-medium text-gray-800">{userName}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h2 className="text-sm text-gray-500">Email</h2>
                        <p className="text-lg font-medium text-gray-800">{userEmail}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h2 className="text-sm text-gray-500">Role</h2>
                        <p className="text-lg font-medium text-gray-800 capitalize">{userRole}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
