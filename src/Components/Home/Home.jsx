import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import LeftNav from '../Navbar/LeftSIdeNav/LeftNav';
import RightNav from '../Navbar/RightSideNav/RightNav';
import Breaking from './Breaking';
import { useLoaderData } from 'react-router-dom';
import News from './News';

const Home = () => {
    // const [news, setNews] = useState([]);
    const newses = useLoaderData();
    return (
        <div>
            <div><Header></Header></div>
            <Breaking/>
            <Navbar></Navbar>
            
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div className=''><LeftNav></LeftNav></div>
                <div className=' lg:col-span-2'>
                    <h2 className="text-4xl">News</h2>
                    <div>
                        {
                            newses.map(news => <News key={news._id} news={news}></News>)
                        }
                    </div>
                </div>
                <div className=''><RightNav></RightNav></div>
            </div>
        </div>
    );
};

export default Home;