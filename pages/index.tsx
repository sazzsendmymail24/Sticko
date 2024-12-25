import Sidebar from "../components/sidebar";
import SettingsPage from "../components/settings-page";

const Settings = () => {
  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-start pt-[33px] pb-[388px] pl-9 pr-[35px] box-border gap-4 leading-[normal] tracking-[normal]">
      <Sidebar
        sidebarItemTrueFalseBorderRadius="6px"
        sidebarItemTrueFalseBackground="unset"
        calendar="/calendar.svg"
        addUsersColor="#191919"
        sidebarItemTrueFalseBorderRadius1="41px"
        sidebarItemTrueFalseBackground1="linear-gradient(108.27deg, #0077ff 2.38%, #2dc2ff)"
        chat="/chat.svg"
        settingsColor="#fff"
      />
      <SettingsPage />
    </div>
  );
};

export default Settings;
