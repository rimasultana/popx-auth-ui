import { useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/accountsettings');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm border border-gray-300 p-8 rounded-md bg-white">
        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
          Create your <br /> PopX account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4 text-sm">
          <div>
            <label className="block text-xs font-semibold text-purple-600 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-600 mb-1">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-800 mb-2">
              Are you an Agency?*<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  className="accent-purple-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>

          <button
        
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold text-sm mt-2 transition duration-150"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup
