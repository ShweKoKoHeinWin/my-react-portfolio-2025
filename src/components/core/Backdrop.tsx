import { type Dispatch, type SetStateAction } from 'react'

const Backdrop = ({setState, z= '20'}: {setState: Dispatch<SetStateAction<boolean>>, z?: string}) => {
  return (
    <div className={`fixed w-screen h-screen left-0 top-0 z-${z} bg-lgray/70 drop-shadow-lg drop-shadow-light`} onClick={() => setState(false)}>
    </div>
  )
}

export default Backdrop
