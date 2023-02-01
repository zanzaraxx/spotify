import {useState} from "react"
import CustomLink from "../../../base/CustomLink";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from '../../../../store/slices/track';


const AlbumsSearch = () => {
    const dispatch = useDispatch()
    const playSong = () => {
        dispatch(setCurrentSong(dataSearch.tracks.items[0].preview_url))
      }
    const [hoverable, setHoverable] = useState(false)
    const dataSearch = useSelector((state) => {
        return state.searchData.searchRes;
      });
       const imgSrc = "https://i.scdn.co/image/ab6775700000ee8555c25988a6ac314394d3fbf5"
    return (
        <Album>
        {dataSearch?.albums?.items?.map((item, index) => (
  
          <AlbumBlock hoverable={hoverable} key={index} onMouseEnter={() => setHoverable(true)} onMouseLeave={() => setHoverable(false)}>
            <div>
              <img src={item.images[0]?.url || imgSrc} alt="" />
            </div>
            <div className="footer-text">
              <div className="textInfo">
                <h4>{item.name}</h4>
                <p>Исполнитель</p>
              </div>
              <div className="btnPlay">
                <button>
                  <svg
                    onClick={playSong}
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
          </AlbumBlock>
        ))}
      </Album>
    );
  };
  
  export default AlbumsSearch;
  
  const Album = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    background: #12121270;
  `;
  const AlbumBlock = styled.div`
    display: flex;
    flex-basis: 22%;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    background: #181818;
    margin: 10px 10px;
    border-radius: 10px;
    min-height: 260px;
    max-width: 215px;
    min-width: 195px;
    padding: 20px 0 0 0;
    img {
      border-radius: 10px;
      height: 153px;
      width: 153px;
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
        // opacity: ${({hoverable}) => hoverable? '1' : '0'};
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
  `;
  