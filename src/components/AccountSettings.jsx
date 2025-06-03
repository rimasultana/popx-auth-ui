import profileImg from "../assets/prodile.jpg";
import { FaCamera } from "react-icons/fa";

function AccountSettings() {
  return (
    <div className="min-h-screen flex justify-center bg-[#f9f9f9] px-4">
      <div className="w-full max-w-sm bg-white rounded-md my-8 shadow-sm border border-gray-200 overflow-hidden">
        
        <div className="bg-white px-6 py-4 shadow-md">
          <h2 className="text-lg font-semibold text-black">Account Settings</h2>
        </div>

          <div className="px-6 pt-6 pb-4 flex flex-col sm:flex-row items-start gap-4">
            <div className="relative w-16 h-16">
              <img
                src={profileImg}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
                <FaCamera className="text-white text-xs" />
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-md font-bold text-black">Marry Doe</h3>
              <p className="text-sm text-gray-700">Marry@gmail.com</p>
            </div>
          </div>

          <div className="px-6 pb-4">
            <p className="text-sm text-black leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadip Scing Elitr. Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam.
            </p>
          </div>
         
          <div className="border-t border-dashed border-gray-300 px-6 py-6"></div>

        <div className="border-b border-dashed border-gray-300  pb-72"></div>

        </div>
      </div>
  );
}

export default AccountSettings;
