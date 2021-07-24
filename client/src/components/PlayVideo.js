import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import videos from "../data";
export function PlayVideo() {
  const { videoId } = useParams();
  const video = videos.find((video) => video.id === videoId);
  return (
    <>
      <div>
        <ReactPlayer url={video.video} controls></ReactPlayer>
      </div>
    </>
  );
}
