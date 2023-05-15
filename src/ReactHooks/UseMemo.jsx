import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [sortOrder, setSortOrder] = useState('asc')

    const animals = useMemo(() => {
        const animals = ['monkey', 'dog', 'cat', 'racoon']
        return sortOrder === 'asc' ? animals.sort() : animals.sort().reverse();
    }, [sortOrder])

    const handleSortClick = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }

    return (
        <div className='text-center'>
            <button onClick={handleSortClick} className='bg-lime-500 px-5 text-3xl text-white text-center'>Sort</button>
            <ul className='flex justify-around m-5 text-4xl font-bold'>
                {animals.map(animal => (
                    <li key={animal}>{animal}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseMemo
