import { useTranslation } from "react-i18next";
import { pages } from "../data";

const RightSidebar = () => {
  const { t } = useTranslation();
  return (
    <nav
      id="logo-sidebar"
      className="sidebar z-40 h-full md:pt-8 transition-transform -translate-x-full bg-white border-r border-base-300 md:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 md:pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium fixed">
          {Object.values(pages).map(({ key_name, icon, route }, index) => {
            return (
              <li key={index}>
                <a
                  href={route}
                  className="flex items-center text-base-400 rounded-lg hover:bg-primary-light hover:text-white"
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
  );
};

export default RightSidebar;
