import { useContext, useState } from "react";
import logo from "../../assets/logo.svg";
import AuthContext from "../../context/authContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white border-b border-base-300 header">
      <div className="px-3 py-3 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-base-400 hover:bg-primary-light hover:text-white rounded-lg md:hidden hover:bg-base-100 focus:outline-none focus:ring-2 focus:ring-base-200"
            >
              <span className="sr-only">Open sidebar</span>
              <label htmlFor="menu">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </label>
            </button>
            <a href="/" className="flex ml-2 md:mr-24">
              <img src={logo} className="mr-3 h-14" alt="Logo" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex relative items-center ml-3">
              <button
                type="button"
                className="flex text-sm bg-gray-200 rounded-full focus:ring-4 focus:ring-gray-300"
                aria-expanded={isOpen}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
              {isOpen && (
                <div
                  className="z-50 absolute top-8 right-2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3 text-sm" role="none">
                    <p className="text-primary-dark font-semibold">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-base-400">{user.email}</p>
                  </div>
                  <ul className="py-1" role="none">
                    <li className="px-4 py-2 text-sm text-base-400 hover:bg-primary-light hover:text-white">
                      <a href="#" role="menuitem">
                        Profile
                      </a>
                    </li>
                    <li className="px-4 py-2 text-sm text-base-400 hover:bg-primary-light hover:text-white">
                      <a href="#" role="menuitem">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
