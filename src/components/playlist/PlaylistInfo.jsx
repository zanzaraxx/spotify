import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { getPlaylistsCollectionById } from "../../store/slices/playlist";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistMiddleLineSticky from "./PlaylistMiddleLineSticky";
import PlaylistTracks from "./PlaylistTracks";

const PlaylistInfo = (props) => {
  const [colorHeader, setColorHeader] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataSelectedPlaylist = useSelector((state) =>
    state.playlists.playlistsCollection.find((item) => item.id === id)
  );
  useEffect(() => {
    if (!dataSelectedPlaylist.tracks.items) {
      dispatch(getPlaylistsCollectionById(id));
    }
  }, [id]);
  const backgroundHeader = new FastAverageColor();
  if (dataSelectedPlaylist.images[0]) {
    backgroundHeader
      .getColorAsync(dataSelectedPlaylist.images[0].url)
      .then((color) => {
        if (color) {
          setColorHeader(color.hex);
        }
      });
  } else if (!dataSelectedPlaylist.images[0] && colorHeader !== "#282828") {
    setColorHeader("#282828")
  }
  const color = colorHeader;
  return (
    <PlaylistSection color={color}>
      <PlaylistHeader />
      <PlaylistMiddleLineSticky/>
      <PlaylistTracks tracklist={dataSelectedPlaylist?.tracks} />
    </PlaylistSection>
  );
};

export default PlaylistInfo;

const PlaylistSection = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  flex: 1;
  background: ${({ color }) =>
    `linear-gradient(180deg, ${color} 10%, rgba(18,18,18,1) 60%, rgba(18,18,18,1) 40%)`};
`;
