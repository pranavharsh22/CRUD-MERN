import React, { useEffect, useState } from 'react'
import { addUser,getSingleUser,EditUserdetails } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const EditUser = () => {

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
   const {id}=useParams();
   const getalluserdetails=async()=>{
    const response=await getSingleUser(id)
    setUser(response.data)

   }
   useEffect(()=>{
    getalluserdetails()
   },[])

   const finaledituserdetails=async()=>{
    await EditUserdetails(user,id)
  

   }
   const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required')
  });
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await EditUserdetails(values, id);
      navigate('/all');
    } catch (error) {
      console.error('Error editing user:', error);
    } finally {
      setSubmitting(false);
    }
  };
  const handleFormikChange = (formikValues) => {
    setUser(formikValues);
  };

  return (
    <div className='add-form'>
        <div className="final-form">
          <Formik   initialValues={user}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize 
          onChange={handleFormikChange} >
            <Form style={{width:'100%'}}>
              <div style={{paddingBottom:'10px'}}>
            <label htmlFor="">Name</label>
            <Field type="text" name='name' onChange={(e)=>onchangeValue(e)} value={user.name}/>
            <ErrorMessage name="name" component="div" className="error" style={{ color: 'red' }} />
            </div>
            <div style={{paddingBottom:'10px'}}>
            <label htmlFor="">Username</label>
            <Field type="text" name='username' onChange={(e)=>onchangeValue(e)} value={user.username}/>
            <ErrorMessage name="username" component="div" className="error" style={{ color: 'red' }} />
            </div>
            <div style={{paddingBottom:'10px'}}>
            <label htmlFor="">Email</label>
            <Field type="text" name='email'onChange={(e)=>onchangeValue(e)} value={user.email}/>
            <ErrorMessage name="email" component="div" className="error" style={{ color: 'red' }} />
            </div>
            <div style={{paddingBottom:'10px'}}>
            <label htmlFor="">Phone Number</label>
            <Field type="text" name='phone'onChange={(e)=>onchangeValue(e)} value={user.phone}/>
            <ErrorMessage name="phone" component="div" className="error" style={{ color: 'red' }} />
            </div>
            <button type='submit'>Edit User</button>
            </Form>
            </Formik>
        
           
      
  
        </div>
      
    </div>
  )
}

export default EditUser;
