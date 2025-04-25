import { useState } from "react";
import axios from "axios";
import Card from "../component/card";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in both fields");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signin`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      toast.success("Login Successful!");
      localStorage.setItem("token", response.data.token);
      navigate("/user");
      return response.data;

    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      toast.error("Login Failed. Please check your credentials.");
      return null;
    }
  };

  return (
    <div>
      <Card
        login={true}
        handleSubmit={handleLogin}
        handleChange={handleChange}
        formData={formData} // optional: if Card needs values for controlled inputs
      />
    </div>
  );
}

export default Login;
