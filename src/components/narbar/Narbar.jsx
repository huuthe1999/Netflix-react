import './narbar.scss';
import imageLogo from 'assets/images/Netflix_logo.png'
import imageAvatar from 'assets/images/avatar.jpg'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Narbar = () => {
    return (
        <div className="narbar">
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
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src={imageAvatar} alt="avatar" />
                    <ArrowDropDown className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Narbar
