import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import InputOption from "./InputOption";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-inputcontainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button>submit</button>
          </form>
        </div>
        <div className="feed-inputoption">
          <InputOption Icon={InsertPhotoIcon} title="Photo" />
          <InputOption Icon={YouTubeIcon} title="Video" />
          <InputOption Icon={EventIcon} title="Event" />
          <InputOption Icon={ArticleIcon} title="Write article" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
