import { useState } from "react";
import axios from "axios"; 
import Card from "../component/card";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Simple validation check
    if (!formData.name || !formData.email || !formData.password || !formData.dateOfBirth) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signup`,
        formData
      );

      toast.success("Signup Successful!");
      navigate("/login"); 
      return response.data;
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      toast.error("Signup Failed. Please try again.");
      return null;
    }
  };

  return (
    <div>
      <Card
        login={false}
        handleSubmit={handleSignup}
        handleChange={handleChange}
        formData={formData}  // Pass formData to Card component
      />
    </div>
  );
}

export default Signup;
