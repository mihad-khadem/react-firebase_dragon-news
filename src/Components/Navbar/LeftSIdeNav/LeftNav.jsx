import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-2xl">All Category</h2>
                <div>
                    {
                        categories.map(category => <Link
                            to={`/category/${category.id}`}
                            className='block text-xl px-4'
                            key={category.id}>{category?.name}</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftNav;