import UsestaeInput from "./UsestaeInput";


const Hookform = () => {

    const namestate  = UsestaeInput('saikat')

    const handelSubmit = e => {
        console.log(namestate.value);
        e.preventDefault();
    }

    return (
        <div className="text-center mt-28">
            <form onSubmit={handelSubmit} >
                <input {...namestate} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="name" />
                <br />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="phone" />
                <br />
                <input  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="password" name="password" id=""  />
                <br />
                <input className="bg-blue-600 px-6 rounded-lg py-4" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;