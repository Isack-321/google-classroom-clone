

import {Avatar,IconButton,MenuItem,Menu} from 'material-ui';
import {Add,Apps,Menu as MenuIcon} from 'material-ui/icons';
import {useAuthState} from "react-firebase-hooks/auth";
import React, {useState} from 'react';
import {auth,Logout} from "../Firebase";
import "./NavBar.css"


const Navbar = () => {
    const [user,loading,error]=useAuthState(auth);
    const [anchorel,setAnchorEl]=useState(null);

        const handleClick = (e) => {

            setAnchorEl(e.currentTarget);
        };
        const handleCose = () => {
            setAnchorEl(null);
        };

    return ( 
        /* <CreateClass/>
        <JoinClass/> */
        <nav className="navbar">
            <div className="navbar-left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
                    alt="Google Logo"
                    className="navbar-logo">
                           {" "}
                           <span>ClassRoom</span> 
                    </img>
            </div>
            <div className="navbar-right">
                <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                >
                    <Add/>

                </IconButton>

                <IconButton>
                    <Apps/>
                </IconButton>
                <IconButton onClick={Logout}>
                    <Avatar src={user?.photoURL}/>

                </IconButton>
                <Menu id="simple-menu" anchorel={anchorel} keepMounted 
                open={Boolean(anchorel)}
                onClose={handleCose}>
                    <MenuItem>Create Class</MenuItem>
                    <MenuItem>Join Class</MenuItem>
                </Menu>
            </div>

        </nav>
     );
}
 
export default Navbar;