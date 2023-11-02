import { useTranslation } from "react-i18next";
import { pages } from "../../data";

const RightSidebar = () => {
  const { t } = useTranslation();

  return (
    <>
      <input
        type="checkbox"
        id="menu"
        className="hidden peer"
        aria-label="Menu open/close"
      />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="absolute backdrop bg-black md:hidden top-[80px] w-screen inset-0 z-40 opacity-50 invisible peer-checked:visible transition-all duration-300"
      />

      <nav
        aria-haspopup="true"
        id="logo-sidebar"
        className={`w-64 fixed top-[80px] z-50 h-full overflow-visible pt-8 bg-white border-r border-base-300 -translate-x-full md:translate-x-0 peer-checked:translate-x-0 transition-all ease-in-out`}
      >
        <div className="h-full px-3 md:pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {Object.values(pages).map(({ key_name, icon, route }, index) => {
              return (
                <li key={index}>
                  <a
                    href={route}
                    className="flex items-center p-2 lg:pl-8 w-full text-base-400 rounded-lg hover:bg-primary-light hover:text-white"
                  >
                    <i className={`fa-solid ${icon} w-5 h-5`} />
                    <span className="ml-3">{t(key_name)}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default RightSidebar;
