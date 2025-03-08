import React from 'react';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';  // Import axios

function UserData({ users }) {
  const onDel = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/user/${userId}`);
      alert("User deleted successfully");
      window.location.reload(); // Refresh the page to update UI (Optional: Use state instead)
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (!users || users.length === 0) {
    return (
      <tr>
        <td colSpan="5" style={{ textAlign: "center" }}>
          No users available
        </td>
      </tr>
    );
  }

  return users.map((curUser) => (
    <tr className="px-4 py-2" key={curUser._id}>
      <td className="px-4 py-2">
        <Link to={`/users/${curUser._id}`} className="text-blue-500 hover:underline">
          {curUser._id}
        </Link>
      </td>
      <td className="px-4 py-2">{curUser.name}</td>
      <td className="px-4 py-2">{curUser.email}</td>
      <td className="px-4 py-2">{curUser.phone}</td>
      <td className="px-4 py-2">{curUser.about}</td>
      <td className="px-6 py-2" ><Link to={`/user/${curUser._id}`}><CiEdit /></Link>
        
      </td>
      <td className="px-4 py-2" onClick={() => onDel(curUser._id)} style={{ cursor: "pointer", color: "red" }}>
        <MdDeleteOutline />
      </td>
    </tr>
  ));
}

export default UserData;




