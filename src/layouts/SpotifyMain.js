import React from "react";
import styled from "styled-components"
import SpotifyAudio from "../components/SpotifyAudio";
import SpotifyInfo from "../components/SpotifyInfo";

const Spotify = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;`

function SpotifyMain() {
  return (  
  <Spotify>
    <SpotifyInfo/>
    <SpotifyAudio/>
  </Spotify>
)}

export default SpotifyMain;
