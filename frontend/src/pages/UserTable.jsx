import { users } from "../utlis/data";
import { FaCog, FaTimesCircle } from "react-icons/fa";

const UserTable = () => {
  return (
    <div className="overflow-x-auto p-6">
      <div className=" flex justify-center items-center  text-4xl font-mono font-bold mb-10 underline ">
        {" "}
        User Table
      </div>
      <table className="w-full border-collapse border border-gray-200 shadow-lg">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border border-gray-300">#</th>
            <th className="p-3 border border-gray-300">Name</th>
            <th className="p-3 border border-gray-300">Date Created</th>
            <th className="p-3 border border-gray-300">Role</th>
            <th className="p-3 border border-gray-300">Status</th>
            <th className="p-3 border border-gray-300">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className="hover:bg-gray-100 transition border-b border-gray-200"
            >
              <td className="p-3 border border-gray-300">{index + 1}</td>

              {/* Name with Avatar */}
              <td className="p-3 flex items-center space-x-3 ">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">{user.name}</span>
              </td>

              <td className="p-3 border border-gray-300">{user.dateCreated}</td>
              <td className="p-3 border border-gray-300">{user.role}</td>

              {/* Status */}
              <td className="p-3 border border-gray-300">
                <span
                  className={`inline-flex items-center space-x-2 px-2 py-1 rounded-full text-sm ${
                    user.status === "Active"
                      ? "text-green-600 bg-green-100"
                      : "text-red-600 bg-red-100"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {user.status}
                </span>
              </td>

              {/* Action Buttons */}
              <td className="p-3 flex space-x-6 ">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaCog size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTimesCircle size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
