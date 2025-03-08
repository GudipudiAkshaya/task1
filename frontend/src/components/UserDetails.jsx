import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <>
   <h1 className="flex items-center text-black font-bold">User Details</h1>
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Gender:</strong> {user.gender || "Not specified"}</p>
      <p><strong>Subject:</strong> {user.subject}</p>
      <p><strong>About:</strong> {user.about || "No description available"}</p>

      {user.resume && (
        <a href={user.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View Resume
        </a>
      )}
    </div>
    </>
  );
}

export default UserDetails;

