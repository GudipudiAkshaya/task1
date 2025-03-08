import React from "react";
import { X } from "lucide-react";
import {useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
const Update = () => {
  const {id}=useParams();
     const [value,setValue]=useState({
        name:"",
        email:"",
        phone:"",
        gender:"",
        subject:"",
        resume:"",
        about:"",
     })
     const handleChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
     }
     const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/update/students/${id}`, value);
            console.log("Student updated successfully:", response.data);
        } catch (error) {
            console.error("Error adding student:", error);
        }
        console.log(value)
     }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-400 bg-opacity-30 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-96">
        {/* Close Button */}
      

        {/* Title */}
        <h1 className="text-center text-white text-2xl font-semibold mb-4">
          Student Details
        </h1>

        {/* Form */}
        <form className="text-white space-y-4" onSubmit={(e)=>handleSubmit(e)}>
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="mb-1">Name:</label>
            <input
              type="text"
              name="name"
              className="outline-none py-2 px-3 bg-white text-black rounded-lg"
              placeholder="Enter Name" 
              value={value.name}
              required onChange={(e)=>handleChange(e)}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="mb-1">Email:</label>
            <input
              type="email"
              name="email"
              className="outline-none py-2 px-3 bg-white text-black rounded-lg"
              placeholder="Enter Email"
              value={value.email}
              required onChange={(e)=>handleChange(e)}
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col">
            <label className="mb-1">Contact:</label>
            <input
              type="text"
              name="phone"
              value={value.phone}
              className="outline-none py-2 px-3 bg-white text-black rounded-lg"
              placeholder="Enter Phone No" onChange={(e)=>handleChange(e)} 
            />
          </div>
          <div className="flex flex-col">
          <label className="mb-1">Gender</label>
          <div className="flex gap-2">
          <input type="radio" name="male" onChange={(e)=>handleChange(e)} />male
          <input type="radio" name="female" onChange={(e)=>handleChange(e)}/>Female
          <input type="radio" name="other" onChange={(e)=>handleChange(e)}/>Other
          </div>
          </div>
          <div className="flex flex-col">
          <label htmlFor="">Subject</label>
          <select name='subject'onChange={(e)=>handleChange(e)} id="subject">
          <option value="">Select Subject</option>
              <option value="math">Math</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
          </select>
          </div>
          <div>
            <label htmlFor="resume">Resume</label>
            <input type="file" placeholder="select your resume" name="resume" onChange={(e)=>handleChange(e)}/>
          </div>
          <div>
            <label htmlFor="">About</label>
            <textarea name="about" id="" cols='30'rows="2" placeholder="enter address" onChange={(e)=>handleChange(e)}></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-between gap-4 px-4">

 

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-yellow-500 text-white font-semibold rounded-2xl py-2 mt-4 hover:bg-green-600 transition"
  >
    Update
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Update;