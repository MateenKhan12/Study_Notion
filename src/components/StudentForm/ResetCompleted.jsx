import React, {useState} from 'react'
import Navigation from './Navigation'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"; 

function ResetCompleted() {
    // const [reset, setReset] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Password reset completed");
        navigate("/resetcomplete");
        setTimeout(() => {
            navigate("/verification"); // After 1 second, navigate to the 'passwordcreated' page
          }, 1000);
      };
  return (
    <div className="min-h-screen mb-8  bg-gray-900 text-white">
    <div className="bg-gray-800 rounded-lg shadow-lg p-5 flex justify-between items-center mb-8">
      <Navigation />
      <div className="flex  items-center gap-4">
        <AiOutlineSearch
          size={20}
          className="text-gray-400 hover:text-yellow-500"
        />
        <AiOutlineShoppingCart
          size={20}
          className="text-gray-400 hover:text-yellow-500"
        />
        <Link
          to="/signup"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-yellow-500"
        >
          Sign up
        </Link>
      </div>
    </div>
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Reset complete!</h2>
            <p className="mb-6 text-gray-500">All done!We have sent an email to m***********@gmail.com to confirm</p>

            <button 
            onClick={handleSubmit}
             className='w-full py-2 bg-yellow-500 text-black font-semibold rounded'>
                Next
                </button>
            
            <div className="mt-4">
            <Link to="/login" className="text-gray-400 hover:underline">
              ← Back to login
            </Link>
          </div>

        </div>
    </div>
    </div>
  )
}

export default ResetCompleted
