import React, { useContext, useEffect, useState } from 'react';
import './screen.css';
import SideMenu from '../side_menu/side_menu';
import judge from '../../Images/judge.png';
import lawyer from '../../Images/lawyer.png';
import lawyer1 from '../../Images/lawyer1.png';
import ParticipantsList from '../participantsList/participantsList';
import MeetingBtns from '../meetingBtns/meetingBtns';
import { BagDetailsContext } from './bagDetailsProvider';
import { Button } from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const Screen = () => {
    const bagDetails = useContext(BagDetailsContext);
    const participantsList = [
        {firstName: 'ישראלה', lastName: 'ישראלוף', role: 'speaker', isMuted: false, img: judge},
        {firstName: 'בצלאל', lastName: 'סמוטריץ', role: 'appellant', isMuted: true, img: lawyer},
        {firstName: 'יריב', lastName: 'לוין', role: 'answering', isMuted: true, img: lawyer1}
    ];
    const [fullScreen, setFullScreen] = useState(false);
    const [timer, setTimer] = useState(0);

    const openInFullOutlined = () => {
        setFullScreen(true);
        const contentElement = document.querySelector('.content');
        if (contentElement) 
            contentElement.classList.toggle('fullScreen');   
    }

    const closeFullscreenOutlined = () => {
        setFullScreen(false);
        const contentElement = document.querySelector('.content');
        if (contentElement) 
            contentElement.classList.toggle('fullScreen'); 
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        return new Date(time * 1000).toISOString().substr(11, 8);
    }

    return (
        <div className='screen-wrapper'>
            <div className='side-menu'>
                <SideMenu key={participantsList.length} participantsNumber={participantsList.length} />
            </div>
            <div className='content'>
                <div className='contentHeader'>
                    <div className='bagDetails'>
                        <div>{`משרד המשפטים, ${bagDetails.commitee} - ${bagDetails.discussion}`}</div>                
                        <div>{`תיק מספר ${bagDetails.bagNumber}`}</div>
                    </div>
                    <div className='meetingActivities'>
                        {fullScreen ? <div onClick={()=>closeFullscreenOutlined()}><CloseFullscreenOutlinedIcon className='closeFullscreenOutlinedIcon'/></div> : 
                                      <div onClick={()=>openInFullOutlined()}><OpenInFullOutlinedIcon className='openInFullOutlinedIcon'/></div>                                            }
                        <ShieldOutlinedIcon className='shieldOutlinedIcon'/>
                        <div className='audio'><CircleIcon className='circleIcon'/>מקליט</div>
                    </div>
                </div>
                <ParticipantsList key={participantsList} participantsList={participantsList} />
                <div className='contentFooter'>
                    <MeetingBtns />
                    <div className='meetingProperties'>
                        <Button className='liveMeetingBtn'>Live</Button>
                        <div className='timer'>{formatTime(timer)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screen;







