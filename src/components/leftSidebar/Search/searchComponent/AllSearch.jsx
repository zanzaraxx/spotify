import styled from "styled-components";
import { useSelector } from "react-redux";

const AllSearch = () => {
  const dataSearch = useSelector((state) => {
    return state.searchData.searchRes;
  });
  const imgSrc =
    "https://i.scdn.co/image/ab6775700000ee8555c25988a6ac314394d3fbf5";
  return (
    <HeaderBlock>
      <div className="bestResult">
        <h2>Лучший результат</h2>
        <PlaylistHeader>
          <img
            src={dataSearch.playlists.items[0]?.images[0]?.url || imgSrc}
            alt=""
          />
          <h2>
            {dataSearch.playlists.items[0]?.name ||
              "Такого плейлиста не существует"}
          </h2>
          <div className="headerTitleInfo">
            <span className="nameOwner">
              {dataSearch.playlists?.items[0]?.owner.display_name ||
                "Такого не существует"}
            </span>
            <span className="playlistTitle">плейлист</span>
            <button>
              <svg
                role="img"
                height="28"
                width="28"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                class="Svg-sc-ytk21e-0 uPxdw"
              >
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
              </svg>
            </button>
          </div>
        </PlaylistHeader>
      </div>
      <div className="TrackskBlock">
        <h2>Треки</h2>
        <div></div>
      </div>
    </HeaderBlock>
  );
};

export default AllSearch;

const HeaderBlock = styled.div`
  display: flex;
  color: #fff;
  .bestResult {
    display: flex;
    flex-basis: 35%;
  }
  .TrackskBlock {
    display: flex;
    flex-basis: 65%;
  }
  .bestResult {
    flex-direction: column;
  }
`;
const PlaylistHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px 0 0 0;
  background: #181818;
  transition: background 0.3s ease;
  border-radius: 10px;
  :hover {
    background: #282828;
  };
  img {
    width: 100px;
    height: 100px;
    margin: 0 0 20px 0;
  };
  h2 {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 0 20px 0;
  };
  .headerTitleInfo {
    display: flex;
    font-weight: 600;
    gap: 20px;  
    button {
        display: flex;
        position: sticky;
        width: 50px;
        height: 50px;
        margin: 0;
        border: none;
        border-radius: 50%;
        background: #1ed760;
        transition: background 0.4s ease;
        transition: opacity 0.4s ease;
        :hover {
          background: #1fdf6490;
          transition: background 0.4s ease;
        }
        svg {
          display: flex;
          margin: auto;
        }
      }
     }
    .playlistTitle {
        display: flex;
        text-transform: uppercase;
      }
      .nameOwner {
        display: flex;
        font:size: 14px;
        color: #6a6a6a;
        margin-right: 10px;
      }
  };
  
`;