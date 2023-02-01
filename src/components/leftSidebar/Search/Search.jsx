import CustomLink from "../../base/CustomLink";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from "../../../store/slices/search";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Search = () => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const generateLinkClass = ({ isActive }) =>
  isActive ? "link active_link" : "link";
  const dataSearch = useSelector((state) => {
    return state.searchData.searchRes;
  });
  const changeHandler = (event) => {
    setInputValue(event);
    dispatch(getSearchData(event));
    if (event) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const clearInput = () => {
    setInputValue("");
  };
  console.log(dataSearch);
  return (
    <SearchContainer>
      <InputSearch>
        <input
          placeholder="Что хотите послушать?"
          onChange={(event) => changeHandler(event.target.value)}
          value={inputValue}
        />
        <svg
          onClick={clearInput}
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          class="Svg-sc-ytk21e-0 uPxdw mOLTJ2mxkzHJj6Y9_na_"
          viewBox="0 0 24 24"
          data-encore-id="icon"
        >
          <path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path>
        </svg>
      </InputSearch>
      <Change activeMode={active}>
        <NavLink className={generateLinkClass} to={"all"}>Все</NavLink>
        <NavLink className={generateLinkClass} to={"artists"}>Исполнители</NavLink>
        <NavLink className={generateLinkClass} to={"playlists"}>Плейлисты</NavLink>
        <NavLink className={generateLinkClass} to={"tracks"}>Треки</NavLink>
        <NavLink className={generateLinkClass} to={"albums"}>Альбомы</NavLink>
      </Change>
      <Outlet/>
      {/* <SearchTrack tracklist={dataSearch}/> */}
    </SearchContainer>
  );        
};

export default Search;

const SearchContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-height: 90vh;
  flex: 1;
  padding: 24px 10px 24px 32px;
  background: #121212;
  button {
    margin: 20px;
    width: 50px;
    height: 20px;
  }
`;

const InputSearch = styled.div`
  display: flex;
  width: 365px;
  min-height: 50px;
  background: #fff;
  border-radius: 25px;
  align-items: center;
  padding: 0 20px;
  svg{
    fill: #121212;
    transition: fill 0.5s ease;
    :hover {
        fill: #1ed760;
        transition: fill 0.5s ease;
    }
  }
  input {
    flex: 1;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    border: none;
    outline: none;
    padding-bottom: 2px; 
    ::placeholder {
      font-weight: 400;
    }
    
`;

const Change = styled.div`
  display: flex;
    gap: 15px;
    min-height: 80px;
    align-items: center;
  visibility: ${({ activeMode }) => {
    if (activeMode) {
      return "visible";
    } else {
      return "hidden";
    }
  }};
  .link{
    height: 55px;
    background: #ffffff12;
    color: #fff;
    padding: 15px;
    border-radius: 15px;
    transition: background 0.5s ease;
    font-weight: 600;
    text-decoration: none; 
  }
  .active_link {
    background: #fff;
    color: black;
}
`;

const TestT = styled.div`
  width: 200px;
  height: 200px;
  backgtound: red;
`;
