import styled from "styled-components";
import CustomLink from "../../../base/CustomLink";
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../../../../store/slices/track';

const TrackName = ({ track, order, hoverable }) => {
  const dispatch = useDispatch()
  const imgSrc = track.album.images[track.album.images.length - 1].url;
  const playSong = () => {
    dispatch(setCurrentSong(track))
  }
  return (
    <Info>
      <div className="NumPlay">
        {hoverable ? (
          <svg
            onClick={playSong}
            role="img"
            height="20"
            width="20"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
            class="Svg-sc-ytk21e-0 uPxdw"
          >
            <path
              height="20"
              width="27"
              fill="#fff"
              d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
            ></path>
          </svg>
        ) : (
          order + 1
        )}
      </div>
      <div className="imageTrack">
        <img src={imgSrc} alt="album" />
      </div>
      <div className="trackName">
        <h4>{track.name}</h4>
        <CustomLink
          color="#b3b3b3"
          to={`/artist/${track.artists[0].id}`}
          margin="0px"
        >
          {track.artists[0].name}
        </CustomLink>
      </div>
    </Info>
  );
};

export default TrackName;

const Info = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    gap: 11px;
    min-width: 260px;
    @media screen and (max-width: 1200px) {
      max-width: 350px;
    }
    img {
      height: 40px;
      width: 40px;
    }
    .imageTrack {
      display: flex;
      width: 40px;
      min-width: 40px;
    }
    .trackName {
      display: flex;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex-direction: column;
      justify-content: center;
    }
    h4 {
      font-size: 16px;
      font-weight: 500;
    }
    .NumPlay {
      display: flex;
      justify-content: center;
      width: 30px;
      min-width: 30px;
    }
`;
