import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './VideoHeader.css';

const VideoHeader = () => {
    return (
        <div className="top_icon">
         <ArrowBackIcon/>
           <h5>Reels</h5>
        <CameraAltIcon />
         
       </div>
    )
}

export default VideoHeader;
