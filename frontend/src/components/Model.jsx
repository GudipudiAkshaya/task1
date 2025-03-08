import React from "react";
import { X } from "lucide-react";
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Model = ({ onClose }) => {
  const navigate = useNavigate();
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
            const response = await axios.post("http://localhost:3000/api/students", value);
            console.log("Student added successfully:", response.data);
            
        } catch (error) {
            console.error("Error adding student:", error);
        }
        finally {
          console.log("before nav")
          navigate('/');  // Ensures navigation happens
          console.log('after nav')
      }
     }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-400 bg-opacity-30 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-96">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

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
          <input type="radio" name="gender" onChange={(e)=>handleChange(e)} />male
          <input type="radio" name="gender" onChange={(e)=>handleChange(e)}/>Female
          <input type="radio" name="gender" onChange={(e)=>handleChange(e)}/>Other
          </div>
          </div>
          <div className="flex flex-col">
          <label htmlFor="">Subject</label>
          <select name='subject' onChange={(e)=>handleChange(e)} id="subject">
          <option  className="text-black" value="">Select Subject</option>
              <option className="text-black" value="math">Math</option>
              <option className="text-black" value="physics">Physics</option>
              <option className="text-black" value="chemistry">Chemistry</option>
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
  {/* Reset Button */}
  <button
    type="button"
    onClick={() => setValue({
      name: "",
      email: "",
      phone: "",
      gender: "",
      subject: "",
      resume: null,
      about: "",
    })}
    className="w-1/2 bg-blue-500 text-white font-semibold rounded-2xl py-2 mt-4 hover:bg-blue-600 transition"
  >
    Reset
  </button>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-1/2 bg-green-500 text-white font-semibold rounded-2xl py-2 mt-4 hover:bg-green-600 transition"
  >
    Submit
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Model;

