import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useAuth } from "../../context/authContext";
import { useContext, useState } from "react";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { user, logout } = useAuth();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const notifications = [
        { id: 1, message: "New user registered", time: "2 min ago", type: "user" },
        { id: 2, message: "Order #1234 completed", time: "5 min ago", type: "order" },
        { id: 3, message: "System backup completed", time: "1 hour ago", type: "system" }
    ];

    const handleLogout = () => {
        logout();
        setShowProfile(false);
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon 
                            className="icon"
                            onClick={() => {
                                if (document.fullscreenElement) {
                                    document.exitFullscreen();
                                } else {
                                    document.documentElement.requestFullscreen();
                                }
                            }}
                        />
                    </div>
                    <div className="item notification-item">
                        <NotificationsNoneOutlinedIcon 
                            className="icon"
                            onClick={() => setShowNotifications(!showNotifications)}
                        />
                        <div className="counter">3</div>
                        {showNotifications && (
                            <div className="notification-dropdown">
                                <div className="notification-header">
                                    <h4>Notifications</h4>
                                </div>
                                <div className="notification-list">
                                    {notifications.map(notification => (
                                        <div key={notification.id} className="notification-item">
                                            <div className="notification-content">
                                                <p>{notification.message}</p>
                                                <span className="notification-time">{notification.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="notification-footer">
                                    <button onClick={() => setShowNotifications(false)}>
                                        View All
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item profile-item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                            onClick={() => setShowProfile(!showProfile)}
                        />
                        {showProfile && (
                            <div className="profile-dropdown">
                                <div className="profile-info">
                                    <p className="profile-name">{user?.name}</p>
                                    <p className="profile-email">{user?.email}</p>
                                </div>
                                <hr />
                                <div className="profile-actions">
                                    <button className="profile-action">Profile</button>
                                    <button className="profile-action">Settings</button>
                                    <button className="profile-action logout" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;