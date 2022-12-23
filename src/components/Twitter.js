import "./Studio.css";
import React from "react";
import TweetEmbed from "react-tweet-embed";

const Twitter = () => {
  return (
    <div className="twitter">
      <TweetEmbed className="feed" tweetId="1583267989771935744" />
      <TweetEmbed className="feed" tweetId="1583268007752912897" />
      <TweetEmbed className="feed" tweetId="1583268026819891201" />
      <TweetEmbed className="feed" tweetId="1583268046814121985" />
    </div>
  );
};
export default Twitter;
