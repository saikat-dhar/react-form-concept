import { useEffect, useRef, useState } from "react";


const Uncontrol = () => {

    const nameref = useRef(null);
    const phoneref = useRef(null);
    const passwordref = useRef(null);
    const [error, seterror] = useState('')


    useEffect ( () => {
        nameref.current.focus();
    } ,[])


    const handelSubmit = e => {
        e.preventDefault();
        if( passwordref.length <6 ){
            seterror('password must be 6 charecters')
        }
        else{
            seterror('')
            console.log(nameref.current.value);
            console.log(phoneref.current.value);
            console.log(passwordref.current.value);
        }
      
    }
    return (
        <div className="text-center mt-28">
        <form onSubmit={handelSubmit}>
            <input ref={nameref} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="name" />
            <br />
            <input ref={phoneref} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="phone" />
            <br />
            <input ref={passwordref} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="password" name="password" id="" required />
            <br />
            <input className="bg-blue-600 px-6 rounded-lg py-4" type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
        </form>
    </div>
    );
};

export default Uncontrol;