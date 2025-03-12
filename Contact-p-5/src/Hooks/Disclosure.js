import { useState } from 'react'


const Disclosure = () => {
    const [open, setOpen] = useState(false);
   
    
      const isOpen = ()=>{
        setOpen(true);
      }
    
      const onClose = ()=>{
        setOpen(false);
      }
      return { isOpen, onClose, open };
}

export default Disclosure