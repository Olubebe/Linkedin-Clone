import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  //   });
  // });

  useEffect(() => {
  const querySelec
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* posts */}
      {posts.map((post) => {
        <Post />;
      })}

      <Post
        name="Oluwibe"
        description="This is a test"
        message="Wow this worked"
      />
    </div>
  );
};

export default Feed;
