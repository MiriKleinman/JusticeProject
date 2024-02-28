import React, { useState, useContext } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MicOffIcon from '@mui/icons-material/MicOff';
import Emblem_of_Israel from '../../Images/Emblem_of_Israel.png';
import { BagDetailsContext } from '../screen/bagDetailsProvider';
import './participant.css';

const Participant = ({ participant }) => {
    const [participantDetails, setParticipantDetails] = useState(participant);
    const bagDetails = useContext(BagDetailsContext);

    const openMicrophone = (isMuted) => {
        setParticipantDetails((prevParticipant) => ({
            ...prevParticipant,
            isMuted: isMuted,
        }));
    };

    return (
        <div className='participant-wrapper'>
            <Card sx={{ maxWidth: 345 }}>
            <div className='cardMedia-wrraper'>
                {participantDetails.role === 'speaker' ?
                    <CardMedia
                    sx={{ height: 200 }}
                    image={participantDetails.img}
                    />:
                    <CardMedia
                        sx={{ height: 140 }}
                        image={participantDetails.img}
                    />
                 }
                <div className="overlay-div">
                    {participantDetails.role === 'speaker' ? ' דובר' : participantDetails.role === 'appellant' ? 'צד עורר' : 'צד משיב'}
                </div>
            </div>
                <CardContent>
                    {participantDetails.role === 'speaker' ? <img src={Emblem_of_Israel} className='emblemOfIsraelMini'></img> : null}
                    <div>
                        <div className='participantRole'> 
                            {participantDetails.role === 'speaker' ? `${bagDetails.commitee}` : participantDetails.role === 'appellant' ? 'צד עורר' : 'צד משיב'}
                        </div>
                        <div className='participantName'>{participantDetails.role === 'speaker' ? 'כבוד השופט   ' : null}{participantDetails.firstName} {participantDetails.lastName}</div>
                    </div>
                    <div onClick={() => openMicrophone(!participantDetails.isMuted)}>
                        {participantDetails.isMuted ? <MicOffIcon /> : <KeyboardVoiceIcon />}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Participant;
