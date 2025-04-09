import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Top from './Top';

const BASE_URL = 'http://localhost:9000';



const Body = () => {

    const [data, setData] =  useState(null);
    const [error, setError] =  useState(false);
    const [filterData , setFilterData] = useState(null)
    const [loading, setLoading] =  useState(false);


    useEffect(()=>{
        const fetchdata = async () => {
            setLoading(true);
            try {
                const response = await fetch(BASE_URL);
                const json = await response.json();
                setData(json);
                setFilterData(json);
                setLoading(false);
                
            } catch (err) {
                setError(err);
            }
        }
        
        fetchdata();
    },[]);

    
    const handleSearch = (searchTerm) => {
        if (!data) return;
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm)
        );
        setFilterData(filtered);
    };

  return (
    
    <div className='h-screen  ' style={{ backgroundImage: "url('/images/bg.png')", backgroundSize: "contain" }}>
        <Top handle = {handleSearch}/>
        <Cards data = {filterData}/>
    </div>
  )
}

export default Body