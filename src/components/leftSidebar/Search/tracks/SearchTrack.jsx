import React from "react";
import styled from "styled-components";

const SearchTrack = ({ tracklist }) => {
    console.log(tracklist);
  return (
    <TrackList>
      <div>
        {tracklist?.items?.map((item, index) => (
          <Track key={index} order={index} track={item}>{item.name}</Track>
        ))}
      </div>
    </TrackList>
  );
};

export default SearchTrack;

const TrackList = styled.section`
  background: #12121270;
  overflow: auto;
`;
const Track = styled.div`
    display: flex;
    margin: 10px;
    width: 200px;
    height: 50px;
    background: #a7a7a7;
`
