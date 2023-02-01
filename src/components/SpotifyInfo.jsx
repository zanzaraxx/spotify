import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Sidebar from "./leftSidebar/Sidebar";

function SpotifyInfo(props) {
  return (
    <InfoContainer>
      <Sidebar />
      <Outlet />
    </InfoContainer>
  );
}

export default SpotifyInfo;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background: #121212;
`;
