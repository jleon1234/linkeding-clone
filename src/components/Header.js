import './Header.css';

import {  
    Search, 
    Home, 
    SupervisorAccount,
    BusinessCenter,
    Chat,
    Notifications
 } from '@material-ui/icons';
import HeaderOption from './HeaderOption';

const Header = () => {
    return ( 
        <div className="header" >
            <div className="header__left">
                <img src="https://www.flaticon.es/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <Search />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />
                <HeaderOption avatar="https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png" title="Juan" />
            </div>
        </div>
    );
}
 
export default Header;