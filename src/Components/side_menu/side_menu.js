import React from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Emblem_of_Israel from '../../Images/Emblem_of_Israel.png';
import './side_menu.css';
import { Button } from '@mui/material';


const SideMenu = ({participantsNumber}) => {

    const exitFromDiscussion = () => {
        console.log("exit from discussion");
    }

    return (
        <div className='menu-wrraper'>
            <Sidebar>
                <img src={Emblem_of_Israel} className='emblemOfIsrael'></img>
                <Menu>
                <MenuItem icon={<div className="iconWithBadge"><PeopleOutlinedIcon fontSize="small" /><span className="badge">{participantsNumber}</span></div>} className="smallFont">אנשים</MenuItem>
                <MenuItem icon={<BalanceOutlinedIcon fontSize="small" />} className="smallFont">פרטי דיון</MenuItem>
                <MenuItem icon={<AdminPanelSettingsOutlinedIcon fontSize="small"/>} className="smallFont">מנהל דיון</MenuItem>
                <MenuItem icon={<SettingsOutlinedIcon fontSize="small" />} className="smallFont">הגדרות</MenuItem>
                </Menu>
                <Button onClick={exitFromDiscussion} className='leaveMeetingBtn'>יציאה מהדיון</Button>
            </Sidebar>
        </div>
    )

}
export default SideMenu;







