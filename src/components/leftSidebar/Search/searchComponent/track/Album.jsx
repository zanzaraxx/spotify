import CustomLink from "../../../../base/CustomLink";
import styled from "styled-components";

const Album = ({ track }) => {
  return (
    <AlbumBlock className="albumName">
      <CustomLink color="#b3b3b3" to={`/artist/${track.album.id}`} margin="0px">
        {track.album.name}
      </CustomLink>
    </AlbumBlock>
  );
};

export default Album;

const AlbumBlock = styled.div`
  flex: 2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 135px;
`;
