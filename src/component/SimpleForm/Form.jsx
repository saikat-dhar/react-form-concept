import { useState } from "react";

const Form = () => {

    const [name , setname] = useState(null);
    const [phone, setphone] = useState(null);
    const [password, setpassword] = useState(null);
    const [error, seterror] = useState('');

    const handelName = e => {
        setname(e.target.value)
    }

    const handelpassword = e => {
        setpassword(e.target.value)
    }

    const handelnumber = e => {
        setphone(e.target.value)
    }

    const handelsubmit = e => {
        e.preventDefault();
        if(password.length < 6) {
            seterror('password must be 6 characters')
        }
        else{
           seterror('');
            console.log(name, phone, password);
        }
      
    }


    return (
        <div className="text-center mt-28">
            <form  onSubmit={handelsubmit} >
                <input onChange={handelName} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="name" />
                <br />
                <input onChange={handelnumber} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="phone" />
                <br />
                <input onChange={handelpassword} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="password" name="password" id="" required />
                <br />
                <input className="bg-blue-600 px-6 rounded-lg py-4" type="submit" value="Submit" />
                {
                  error && <p className="text-red-700">{error}</p>
                }
            </form>
        </div>
    );
};

export default Form;