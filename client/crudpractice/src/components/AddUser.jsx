import React, { useState } from 'react'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const AddUser = () => {

   const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
   }
   const navigate=useNavigate()
   const [user,setUser]=useState(defaultValue)
   const onchangeValue=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
   }
   const adduserdetails=async()=>{
    await addUser(user)
    

    


   }
   const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required')
  });

  const handleSubmit = async (values) => {
    try {
      await addUser(values);
      navigate('/all');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  return (
    <div className='add-form'>
        <div className="final-form">
<Formik  initialValues={user}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize // Allow reinitialization of form values
          onChange={(formikValues) => setUser(formikValues)}>
            
  <Form style={{width:'100%'}}>
    <div style={{paddingBottom:'10px'}}> <label htmlFor="">Name</label>
            <Field type="text" name='name' onChange={(e)=>onchangeValue(e)}/>
            <ErrorMessage name="name" component="div" className="error" style={{ color: 'red' }} />
            </div>
            <div style={{paddingBottom:'10px'}}>
            <label htmlFor="">Username</label>
            <Field type="text" name='username' onChange={(e)=>onchangeValue(e)}/>
            <ErrorMessage name="username" component="div" className="error" style={{ color: 'red' }} />

            </div>
            <div style={{paddingBottom:'10px'}}>
            <label htmlFor="">Email</label>
            <Field type="text" name='email'onChange={(e)=>onchangeValue(e)}/>
            <ErrorMessage name="email" component="div" className="error" style={{ color: 'red' }} />
            </div>
            <div style={{paddingBottom:'10px'}}>
            <label htmlFor="">Phone Number</label>
            <Field type="text" name='phone'onChange={(e)=>onchangeValue(e)} />
            <ErrorMessage name="phone" component="div" className="error" style={{ color: 'red' }} />
            </div>
           
            
            
         
            <button type='submit'>Add User</button>
            </Form>
            </Formik>
  
        </div>
      
    </div>
  )
}

export default AddUser
