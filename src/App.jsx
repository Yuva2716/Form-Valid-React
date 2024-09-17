import React,{useState} from 'react'
import {useFormik} from 'formik'
import Popup from './Components/Popup'
import "./App.css"

const validate = values =>{
  const errors = {};
  if(!values.firstname){
    errors.firstname = "*Required"
  }else if (values.firstname.length >= 8){
    errors.firstname = "*Must be 8 characters or less"
  }

  if(!values.lastname){
    errors.lastname = "*Required"
  }else if (values.lastname.length >= 8){
    errors.lastname = "*Must be 8 characters or less"
  }
  if(!values.email){
    errors.email = "*Required"
  }

  if(!values.password){
    errors.password = "*Required"
  }else if (values.password.length < 6 ){
    errors.password = "Minimum 6 characters required"
  }

  if(!values.confirmpassword){
    errors.confirmpassword = "*Required"
  }else if (values.password !== values.confirmpassword ){
    errors.confirmpassword = "Password must match"
  }
  return errors
}


const App = () => {
  const [bool,setBool] = useState(0)
  const formik = useFormik({
    initialValues :{
      firstname : '',
      lastname : '',
      email : '',
      password : '',
      confirmpassword : '',
    },
    validate,
    onSubmit : (values ,{resetForm})  =>{
      if(bool){
        setBool(0);
        resetForm({values : ""})
      }else {
        setBool(1)
        console.log(values)
      }
    }
  })
  

  return (
    <>
    <div className='main'>
      <div className="signup-form">
        <h2>Sign Up Here</h2>
        <form onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} type="text" name='firstname' placeholder='First Name...' />
            {formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span> : null}

            <input onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} type="text" name='lastname' placeholder='Last Name...'/>
            {formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null}

            <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="email" name='email' placeholder='Enter eMail...'/>
            {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}

            <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" name='password' placeholder='Password...'/>
            {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null}

            <input onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur} type="password" name='confirmpassword' placeholder='Confirm Password...'/>
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null}
            <input type='submit' name='submit' value='Submit' />
        </form>
      </div>
      <div className='message-box'>
        {
          bool? (<Popup onClick = {formik.handleSubmit}/>) : null
        }
      </div>
    </div>    
    </>
  )
}

export default App