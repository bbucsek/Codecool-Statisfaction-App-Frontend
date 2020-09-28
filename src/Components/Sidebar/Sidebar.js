import React from 'react'
import SidebarOption from './SidebarOption'
import '../Sidebar/Sidebar.css'
import { logout } from "../../Api/AuthCalls";
import { useHistory } from 'react-router-dom'

function Sidebar() {

    const history = useHistory();

    const questsionsPage = () => {
        history.push("/questions");
    }

    const profilePage = () => {
        history.push("/profile")
    }

    const homePage = () => {
        history.push("/")
    }

    const handleLogout = async () => {
        if( await logout()) history.push("/login")
    }

    return (
        <div className="sidebar">
            <SidebarOption active onClick={homePage} text="Home"/>
            <SidebarOption onClick={questsionsPage} text="Questions"/>
            <SidebarOption onClick={profilePage} text="Profile"/>
            <SidebarOption onClick={handleLogout} text="Logout"/>
        </div>
    )
}

export default Sidebar
