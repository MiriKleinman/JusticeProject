import React from 'react';
import Participant from '../participant/participant';
import './participantsList.css';


const Participants = ({participantsList}) => {
    const judges = participantsList.filter(participant => participant.role === 'speaker');
    const sides = participantsList.filter(participant => participant.role !== 'speaker');

    return (
        <div className='participantsList-wrapper'>
            <div className='upper-part'>
                {judges.map(judge => (
                    <Participant key={judge.firstName} participant={judge}/>
                ))}
            </div>
            <div className='lower-part'>
                {sides.map(side => (
                    <Participant key={side.firstName} participant={side} />
                ))}
            </div>
        </div>

    )
}
export default Participants;






