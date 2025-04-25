import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ login, handleSubmit, handleChange, formData }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-teal-800 to-teal-500">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <div className="bg-teal-400 text-white py-3 rounded-t-lg text-lg font-semibold -mt-14">
          {login ? "SIGN IN" : "SIGN UP"}
        </div>
        <div className="flex justify-center my-10">
          <FaRegUserCircle className="text-white text-8xl" />
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!login && (
            <div className="relative">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData?.name || ""}
                placeholder="Name"
                required
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
              />
              <FaUser className="absolute left-3 top-3 text-white" />
            </div>
          )}

          {!login && (
            <div className="relative">
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                value={formData?.dateOfBirth || ""}
                required
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
              />
              <FaCalendarAlt className="absolute left-3 top-3 text-white" />
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData?.email || ""}
              placeholder="Email"
              required
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
            />
            <MdEmail className="absolute left-3 top-3 text-white" />
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData?.password || ""}
              placeholder="Password"
              required
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
            />
            <TbLockPassword className="absolute left-3 top-3 text-white" />
          </div>

          <div className="flex justify-between text-gray-400 text-sm">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            {login ? (
              <Link to="/">
                <div className="hover:text-white cursor-pointer">Sign up?</div>
              </Link>
            ) : (
              <Link to="/login">
                <div className="hover:text-white cursor-pointer">Already have an account?</div>
              </Link>
            )}
          </div>

          <button
            type="submit"
            className="bg-teal-400 text-white py-2 rounded-lg hover:bg-teal-500 transition"
          >
            {login ? "LOGIN" : "SIGNUP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
