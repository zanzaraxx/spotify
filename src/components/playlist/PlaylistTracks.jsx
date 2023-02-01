import styled from "styled-components";
import Track from "./track/Track";

const PlaylistTracks = ({tracklist}) => {
  return (
    <TrackList>
      <div>
        {tracklist?.items?.map((item, index) => (
          <Track key={index} order={index} track={item} />
        ))}
      </div>
    </TrackList>
  );
};

export default PlaylistTracks;

const TrackList = styled.section`
  flex: 1;
  background: #12121270;
  overflow: auto;
`;
