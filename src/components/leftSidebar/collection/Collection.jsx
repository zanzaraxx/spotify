import React from "react";
import styled from "styled-components";
import CustomLink from "../../base/CustomLink";
import { Outlet, NavLink } from "react-router-dom";

function Collection() {
  const generateLinkClass = ({ isActive }) =>
    isActive ? "link active_link" : "link";
  return (
    <Container>
      <div className="menuBar">
        <NavLink className={generateLinkClass} to="playlists">
          Плейлисты
        </NavLink>
        <NavLink className={generateLinkClass} to="artists">
          Исполнители
        </NavLink>
        <NavLink className={generateLinkClass} to="albums">
          Альбомы
        </NavLink>
      </div>
      <Outlet />
    </Container>
  );
}

export default Collection;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 90vh;
  padding: 20px;
  background: #121212;
  .link {
    height: 55px;
    gap: 10px;
    background: #ffffff12;
    color: #fff;
    padding: 15px;
    border-radius: 15px;
    transition: background 0.5s ease;
    font-weight: 600;
    text-decoration: none;
    margin: 0 10px;
  }
  .active_link {
    background: #fff;
    color: black;
  }
  .menuBar {
    display: flex;
    min-height: 100px;
  }
`;
