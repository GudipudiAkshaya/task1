import React, { useState, useEffect } from "react";
import Model from "./Model";
import axios from "axios";
import UserData from "./UserData";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [User, setUser] = useState([]); // Initialize as empty array
  const [open,setOpen]=useState(false)
  const infostudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/students");
      if (Array.isArray(response.data) && response.data.length > 0) {
        setUser(response.data);
      } else {
        setUser([]); // Ensure state is always an array
      }
      setOpen(!open);
    } catch (error) {
      console.error("Error fetching student data:", error);
      setUser([]); // Handle errors by setting an empty array
    }
  };

  // Fetch data when the component loads
  useEffect(() => {
    infostudents();
  }, []);
  return (
    <div className="flex flex-col  items-center h-screen w-full bg-zinc-800">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4  text-white">
      Enter Student Details
    </h1>

    {/* Open Modal Button */}
    <button
      onClick={() => setIsOpen(true)}
      className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg text-lg hover:bg-indigo-600"
    >
      Fill Form
    </button>

    {/* Show modal only when isOpen is true */}
    {isOpen && <Model onClose={() => setIsOpen(false)} />}

    <button
      className="bg-white py-2 px-4 rounded-2xl mt-2"
      onClick={infostudents} 
    >
      Get/Hide Details of all the students
    </button>
   {open&&<div className="w-full text-white overflow-x-auto px-2 mt-4">
    <table>
      <thead>
        <tr className="w-full">
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={User} />
      </tbody>
    </table>
    </div>}
  </div>
  )
}

export default Home
