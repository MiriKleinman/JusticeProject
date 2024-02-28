import React from 'react';
import { Button } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import './meetingBtns.css';


const MeetingBtns = () => {

    const shareScreen = () =>{
        console.log("share screen");
    }

    const openMicrophone = () =>{
        console.log("open microphone");
    }

    const openCamera = () =>{
        console.log("open camera");
    }
    return (
        <div className='meetingBtns-wrraper'>
            <Button onClick={openCamera} className='meetingBtn'>מצלמה<VideocamIcon/></Button>
            <Button onClick={openMicrophone} className='meetingBtn'>מיקרופון<KeyboardVoiceIcon/></Button>
            <Button onClick={shareScreen} className='meetingBtn'>שיתוף <PresentToAllIcon/></Button>
        </div>
    )

}
export default MeetingBtns;







