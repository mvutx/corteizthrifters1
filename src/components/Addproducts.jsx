import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import Footer from './Footer';

const Addproducts = () => {
  // introduce the hooks
  const[product_name,setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // declare the additional hook to manage the application 
  const[loading,setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // create a function to handle the submit action 
  const handleSubmit = async (e) =>{
    // prevent the ste from reloading
    e.preventDefault()
    // setloading hook with a message (activate it) 
    setLoading(true)

    try{
      // create a form data
      const formdata = new FormData()

      // append the details to the form data created
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      // interact with axios to help you use themethod post 
      const response = await axios.post("https://kivuti.alwaysdata.net/api/add_product", formdata)

      // set the loading hook back to default 
      setLoading(false)

      // update the success hook with a message 
      setSuccess(response.data.message)

      // clearing the hooks (setting them back to default/empty)
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
      e.target.reset()
           setTimeout(() => {
      setSuccess("");
  }, 5000);

    }
    catch(error){
      // set loading hook back to default
      setLoading(false)

      // update the setError with a message
      setError(error.message)

    }
  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>
        <h3 className='text-primary'>Welcome to Corteiz Thrifters</h3>

        {/*bind the loading hook*/}
        {loading && <Loader />}

         <h3 className='text-success'>{success}</h3>

        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder="Add Clothing Item"
          className='form-control'
          required 
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}/> <br />
          {/*product_name*/}

          <input type="text"
          placeholder='Enter clothing description'
          className='form-control'
          required 
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}/> <br />

          {/*product_description*/}

          <input type="number"
          placeholder='Enter clothing price'
          className='form-control'
          required 
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}/> <br />

          {/*product_cost*/}

          <label className='text-primary'>Product Photo</label>
          <input type="file"
          className='form-control'
          required 
          accept='image/*' onChange={(e) => setProductPhoto(e.target.files[0])}/> <br />


          <input type="submit"
          value="Add Item"
          className="btn btn-outline-primary" />
        </form>
      </div>
      <Footer/>
    </div> 
    
  )
}

export default Addproducts;
