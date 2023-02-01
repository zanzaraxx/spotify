import { useSelector } from "react-redux";
import styled from "styled-components";
import Tracks from "./track/Tracks";

const TracksSearch = () => {
  const dataSearch = useSelector((state) => {
    return state.searchData.searchRes;
  });

  return (
    <TrackList>
      {dataSearch?.tracks.items?.map((item, index) => (
        <Tracks key={index} order={index} track={item}>
          {item.name}
        </Tracks>
      ))}
    </TrackList>
  );
};

export default TracksSearch;

const TrackList = styled.section`
  flex-direction: column;
  overflow: auto;
  background: #12121270;
`;
