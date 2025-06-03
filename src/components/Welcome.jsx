import { Link } from "react-router";

 function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-sm w-full text-center pt-96 px-4 border-2 border-gray-200">
        <div className="text-left">
           <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        </div>
        <Link
          to="/signup"
          className="block w-full bg-purple-600 text-white py-2 rounded mb-3"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block w-full bg-purple-100 text-purple-600 py-2 mb-4 rounded"
        >
          Already Registered? Login
        </Link>
      </div>
      </div>
  );
}
export default Welcome