import React, { useState } from 'react';
import Form from './Components/Form';
import Members from './Components/Members';
import Modals from './Components/Modals';

const App = () => {
  const [button, setButton] = useState(false);
  const [formData, setFormData] = useState([]); 

  return (   
    <>
      {button ? (
        <div className="flex justify-center items-center h-screen">
          <Members formData={formData} setFormData={setFormData}/>
          <button 
            onClick={() => setButton(false)} 
            className="absolute top-5 right-5 rounded bg-red-200 px-4 py-2">
            Back
          </button>
        </div>
      ) : 
      (  // button false
        <div className='flex py-30 px-10 justify-evenly items-center'>
          <Form formData={formData} setFormData={setFormData}/>
          <button 
            onClick={() => setButton(true)} 
            className="rounded bg-red-200 w-[14vw] h-[7vh]">
            Show Members
          </button>
        </div>
      )}
    // </>
    

  );
};

export default App;
