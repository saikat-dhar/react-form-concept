

const Reusableform = ({formtitle, submitbtn="Submit", handelSubmit}) => {

    const localhandelsubmit = e => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            password: e.target.password.value
        }
        handelSubmit(data)
    }

    return (
        <div className="text-center mt-28">
            <h3 className="text-3xl mb-8">{formtitle}</h3>
            <form onSubmit={localhandelsubmit} >
                <input  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="name" />
                <br />
                <input  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" name="phone" />
                <br />
                <input  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="password" name="password" id="" required />
                <br />
                <input className="bg-blue-600 px-6 rounded-lg py-4" type="submit" value={submitbtn} />
            </form>
        </div>
    );
};

export default Reusableform;