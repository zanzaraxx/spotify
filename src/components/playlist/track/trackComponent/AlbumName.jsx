import CustomLink from "../../../base/CustomLink";
import styled from "styled-components";

const AlbumName = ({ track }) => {
  return (
    <AlbumBlock className="albumName">
      <CustomLink color="#b3b3b3" to={`/artist/${track.album.id}`} margin="0px">
        {track.album.name}
      </CustomLink>
    </AlbumBlock>
  );
};

export default AlbumName;

const AlbumBlock = styled.div`
  min-width: 160px;
  flex: 2;
`;
