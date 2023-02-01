import CustomLink from "../../../base/CustomLink";
import styled from "styled-components";
import { useSelector } from "react-redux";


const PlaylistsSearch = () => {
    const dataSearch = useSelector((state) => {
        return state.searchData.searchRes;
      });
       const imgSrc = "https://i.scdn.co/image/ab6775700000ee8555c25988a6ac314394d3fbf5"
    return (
        <Playlists>
        {dataSearch?.playlists?.items?.map((item, index) => (
          <PlaylistsBlock key={index}>
            <div>
              <img src={item.images[0]?.url || imgSrc} alt="" />
            </div>
            <div className="footer-text">
              <div className="textInfo">
                <h4>{item.name}</h4>
                <p>{item.owner.display_name}</p>
              </div>
              <div className="btnPlay">
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
            </div>
          </PlaylistsBlock>
        ))}
      </Playlists>
    );
  };
  
  export default PlaylistsSearch;
  
  const Playlists = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    background: #12121270;
  `;
  const PlaylistsBlock = styled.div`
    display: flex;
    flex-basis: 23%;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    background: #181818;
    margin: 10px 10px;
    border-radius: 10px;
    min-height: 260px;
    max-width: 215px;
    min-width: 195px;
    padding: 15px 0 0 0;
    img {
      border-radius: 10px;
      height: 165px;
      width: 165px;
    }
    .footer-text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 10px;
      .textInfo {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 25px 0 0 0;
        overflow: hidden;
        h4 {
          color: #fff;
          max-width: 120px;
          white-space: nowrap;
        }
        p {
          color: #6a6a6a;
          font-weight: 600;
          max-width: 120px;
          white-space: nowrap;
        }
      }
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
  `;
  