import React, { useState } from 'react'
import Button from './Button'


const Second = () => {
    const [show ,setShow] = useState(false);
    const [num, setNum] = useState(1);
    const [score, setScore] = useState(0);
    const [selectedNum, setseletedNum] = useState(null);
  
    

    const handleshow = ()=>{
        setShow((prev) => !prev)
    }

    

    const arr = [1,2,3,4,5,6];
    const handleSelectedNum = (elem)=>{
        setseletedNum(elem)
        console.log("seleted elem is ", elem)
       
    }

    const random = () => {
        if (selectedNum === null) {
            alert("Please select a number first!");
            return;
        }

        const newNum = Math.floor(Math.random() * 6) + 1;
        setNum(newNum);
        console.log(newNum);

        setScore((prevScore) =>(
            selectedNum === newNum ? prevScore + newNum : Math.max(0, prevScore - 2)           
        )        
        );
        setseletedNum(null);
    }


  return (
    
    <div>
        <nav className='flex place-content-between items-center p-5  '>
            <div>
                <h1 className='text-5xl'>{score}</h1>
                <h4 className='font-semibold'>Total Score</h4>
            </div>
            <div className=' flex gap-3'>
                {arr.map((value, i) =>{                    
                    return <Button text = {value} key={i}  onClick = {()=>handleSelectedNum(value)}/>
                })}
                
            </div>
        </nav>

        <div className='flex justify-center items-center mt-5'>        
            <div className='w-[180px] h-[310px]  '>
                <div >
                    <img src={`/Images/dice_${num}.png`} className='object-fill cursor-pointer' onClick={random}  />
                </div>
                <div className='flex flex-col justify-center items-center gap-5 mt-10'>
                    <Button isTrue = {true} text = {"Reset Score"} onClick={() => setScore(0)} />
                    <Button isTrue = {true} text = {"Show Rules"} handle = {handleshow} />
                </div>
            </div>
        </div>

        <div className='mt-10 flex justify-center items-center'>
            <div className={` flex flex-col ${show ? "" : "hidden"}   w-[700px] `}>
            <h1 className='font-semibold text-xl'>How to play dice game</h1>
            <ol>
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>after click on  dice  if selected number is equal to dice number you will get same point as dice</li>
                <li>if you get wrong guess then  2 point will be dedcuted </li>
            </ol>
            
            </div>
        </div>
        
    </div>
  )
}

export default Second