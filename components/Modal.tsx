import React, { Children, Dispatch, FC, ReactNode, SetStateAction } from 'react';

const Modal:FC<{children:ReactNode, open:boolean, setOpen:Dispatch<SetStateAction<boolean>>}> = ({children, open, setOpen}) => {
    return (
        <div onClick={(e)=>(e.target as HTMLDivElement).id == "modal-wrapper" && setOpen(false)} id='modal-wrapper' className={` ${open ? "" : "scale-0"} duration-300 fixed left-0 right-0 flex items-center justify-center  h-[100vh] backdrop-blur w-full bg-[#00000097] z-[99] top-0`}>
            <div>
                {children}
            </div>
             
        </div>
    );
}

export default Modal;
