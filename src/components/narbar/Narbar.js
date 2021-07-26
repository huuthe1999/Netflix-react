import "./narbar.scss";
import imageLogo from "assets/images/Netflix_logo.png";
import imageAvatar from "assets/images/avatar.jpg";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const Narbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={`narbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="left">
                    <img src={imageLogo} alt="logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src={imageAvatar} alt="avatar" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Narbar;
