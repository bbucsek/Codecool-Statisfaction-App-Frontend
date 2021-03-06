import React, { useEffect, useState } from "react";
import SidebarOption from "./SidebarOption";
import "../Sidebar/Sidebar.css";
import { isAdmin, logout } from "../../Api/AuthCalls";
import { useHistory } from "react-router-dom";

export default function Sidebar(props) {
  const history = useHistory();
  const [admin, setAdmin] = useState(false);

  const questsionsPage = () => {
    history.push("/questions");
  };

  const profilePage = () => {
    history.push("/profile");
  };

  const homePage = () => {
    history.push("/");
  };

  const handleLogout = async () => {
    if (await logout()) history.push("/login");
  };

  const feedbacksPage = () => {
    history.push("/feedbacks");
  };

  const adminPage = () => {
    history.push("/addadmin");
  };

  useEffect(() => {
    async function FetchAdmin() {
      let result = await isAdmin();
      setAdmin(result);
    }
    FetchAdmin();
  }, []);

  return (
    <div className="sidebar">
      <SidebarOption onClick={homePage} text="News" iconName="announcement" />
      <SidebarOption
        onClick={feedbacksPage}
        text="Feedbacks"
        iconName="error"
      />
      <SidebarOption onClick={questsionsPage} text="Surveys" iconName="help" />
      <SidebarOption onClick={profilePage} text="Profile" iconName="person" />
      <SidebarOption onClick={handleLogout} text="Logout" iconName="lock" />
      {admin ? (
        <SidebarOption
          onClick={adminPage}
          text="Add admin"
          iconName="add_circle"
        />
      ) : null}
    </div>
  );
}
