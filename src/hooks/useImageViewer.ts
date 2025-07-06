import {useState } from 'react'

const useImageViewer = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    
  return {open, setOpen, image, setImage};
}

export default useImageViewer
