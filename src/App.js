import './App.css';
import VideoCard from "./VideoCard";
import myimg from "./images/myimg.jpeg";

function App() {
  return (
    <div className="App">
      <div className="top_header">
      <figure>
        <img className="ig_img" src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="not found"/>
        <h2>Reels</h2>
      </figure>

      </div>
      <div className="App_videos">
         <VideoCard 
           src="https://cdn.pixabay.com/photo/2020/12/15/13/54/children-5833719_1280.jpg"
           account="subha@duley11"
           follwers={898}
           likes={230}
           AvatarSrc={myimg}
           comment={323}
           share={890}
           song="Believer song"
         />
         <VideoCard
          src="https://cdn.pixabay.com/photo/2018/07/01/20/01/mercedes-3510327_1280.jpg"
          account="lappa@duley001"
          follwers={20001}
          likes={1078}
          comment={201}
          share={78}
          song="Aja na farari me"
          />
           <VideoCard
          src="https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190__340.jpg"
          account="sarthak@duley001"
          follwers={20001}
          likes={304}
          comment={305}
          share={200}
          song="tum mere ho"
 />
 <VideoCard
          src="https://cdn.pixabay.com/photo/2017/08/22/00/27/car-dashboard-2667434_1280.jpg"
          account="raman@Thakur111"
          follwers={20001}
          likes={129}
          comment={508}
          share={700}
          song="tui hi meri jan"


         />
        

      </div>

    </div>
  );
}

export default App;
