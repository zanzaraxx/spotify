// import { useEffect } from "react";
import styled from "styled-components";
// import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";

function SpotifyAudio() {
  const currentTrack = useSelector((state) => state.track.currentTrack);
  return (
    <>
      {currentTrack && (
        <AudioContainer>
          {/* {currentTrack.name}
          <SpotifyPlayer
            play
            styles={{
              activeColor: "#fff",
              bgColor: "#333",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
            token={localStorage.getItem("authToken")}
            uris={[currentTrack.uri]}
          /> */}
        </AudioContainer>
      )}
    </>
  );
}

export default SpotifyAudio;

const AudioContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  background: #181818;
  border-top: 1px solid #282828;
  color: #fff;
`;

