import profileImg from "../assets/prodile.jpg"
function AccountSettings() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
      <div className="w-full max-w-md border border-gray-300 bg-white rounded-md">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-sm font-semibold text-gray-800">Account Settings</h2>
        </div>

        <div className="px-6 py-4 flex flex-col gap-4 border-b border-gray-200">
          <div className="flex items-start gap-4">
            <img
              src={profileImg}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-gray-900">Marry Doe</h3>
                <span className="bg-purple-600 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-bold">
                  P
                </span>
              </div>
              <p className="text-xs text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="text-sm text-gray-700">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        <div className="py-20 px-6"></div>
      </div>
    </div>
  );
}

export default AccountSettings;
