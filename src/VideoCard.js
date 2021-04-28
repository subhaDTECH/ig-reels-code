import React from 'react';
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

const VideoCard = ({src,account,follwers,likes,AvatarSrc,comment,share,song}) => {
    return (
        <div className="videoCard">
           <VideoHeader/>
           <img src={src} alt="not"/>
           <VideoFooter 
               account={account}
                follwers={follwers}
                likes={likes}
                AvatarSrc={AvatarSrc}
                comment={comment}
                share={share}
                song={song}
           />
        </div>
    )
}

export default VideoCard;
