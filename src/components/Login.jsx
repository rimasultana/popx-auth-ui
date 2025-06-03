import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate('/accountsettings');
  };
  return (
    <div className="min-h-screen flex justify-center bg-[#f9f9f9] px-4">
      <div className="w-full max-w-sm  bg-gray-50 border border-gray-300 px-5 my-8 rounded-md">
        <h2 className="text-xl font-bold text-gray-900 mb-1 pt-10">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-purple-600 mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition duration-200"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-purple-600 mb-1 block">
              Password 
            </label>
            <input
              type="password"
              placeholder="Enter password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-md font-semibold text-sm hover:bg-gray-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
