import React from 'react';
import {Button,Avatar} from "@material-ui/core";
import "./VideoFooter.css";
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
const VideoFooter = ({account,follwers,likes,AvatarSrc,comment,share,song}) => {
    return (
        <div className="footer">
        <div className="videofooterText">
        
         <p> <Avatar  src= {AvatarSrc}/>Instagram Reels 🔥</p>
          <Button> #<span>follow</span></Button>
         <h4>{account}</h4>
        <p className="tickerbox">
          <span> <MusicNoteIcon/></span>
       
        <Ticker className="ticker">
        {({ index }) => (
            <>
                <p className="song">{song}</p>
                {/* <img src="www.my-image-source.com/" alt=""/> */}
            </>
        )}
        </Ticker>
        
          </p>  
         
         </div>
         <div className="sidefooter">
            <div className="sideicon">
            <div className="icon_box">
            <FavoriteIcon/>
            <p>{likes}</p>
            </div>
            <div className="icon_box">
            <InsertCommentIcon/>
            <p>{comment}</p>
            </div>
            <div className="icon_box">
            <ShareIcon/>
            <p>{share}</p>
            </div>
     </div>
    </div>
      </div>
    )
}

export default VideoFooter;
