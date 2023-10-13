import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto my-3'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;