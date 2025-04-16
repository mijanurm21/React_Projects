import React from 'react'


const Navbar = ({setSearchQuery}) => {


  const today = new Date();

  const options = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);


  return (
    
    <nav>    
        <div className='flex place-content-between items-center mb-20 '>
            <div className='flex flex-col '>
                <h2 className='text-xl font-semibold opacity-60'>
                    {formattedDate}
                </h2 >
                <h1 className='text-2xl font-semibold '>Flavoro Foods</h1>
            </div>
            <div>
                <input type="text" placeholder='Search' className='border rounded-md p-2 w-[23vw] text-lg text-medium' onChange={(e)=>setSearchQuery(e.target.value)} />
            </div>
        </div>
    </nav>
  )
}

export default Navbar