// import Form from "./component/SimpleForm/Form"

import Reusableform from "./component/SimpleForm/Reusableform/Reusableform"

// import Hookform from "./component/SimpleForm/Hookform/Hookform"

// import Uncontrol from "./component/SimpleForm/uncontroled/uncontrol"



function App() {

  const handelsingup = data => {
    console.log('sing up' , data);
  }

  const handelupdate = data => {
    console.log('update data', data);
  }

  return (
    <>
    {/* <Form></Form> */}
    {/* <Uncontrol></Uncontrol> */}
    {/* <Hookform></Hookform> */}
    <Reusableform handelSubmit={handelsingup} formtitle={'Sing Up'}></Reusableform>
    <Reusableform handelSubmit={handelupdate} formtitle={'Update Profile'} submitbtn="Update"></Reusableform>
    </>
  )
}

export default App
