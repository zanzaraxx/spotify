import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import "./style.css";
import SpotifyAuth from "./layouts/SpotifyAuth";
import SpotifyMain from "./layouts/SpotifyMain";
import PlaylistInfo from "./components/playlist/PlaylistInfo";
import Search from "./components/leftSidebar/Search/Search";
import Collection from "./components/leftSidebar/collection/Collection";
import AlbumsCollection from "./components/leftSidebar/collection/AlbumsCollection";
import ArtistsCollection from "./components/leftSidebar/collection/ArtistsCollection";
import PlaylistsCollection from "./components/leftSidebar/collection/PlaylistsCollection";
import TracksCollection from "./components/leftSidebar/collection/TracksCollection";
import AllSearch from "./components/leftSidebar/Search/searchComponent/AllSearch";
import ArtistsSearch from "./components/leftSidebar/Search/searchComponent/ArtistsSearch";
import PlaylistsSearch from "./components/leftSidebar/Search/searchComponent/PlaylistsSearch";
import TracksSearch from "./components/leftSidebar/Search/searchComponent/TracksSearch";
import AlbumsSearch from "./components/leftSidebar/Search/searchComponent/AlbumsSearch";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.hash) {
      localStorage.setItem(
        "authToken",
        location.hash.split("=")[1].split("&")[0]
      );
    } else {
      const token = localStorage.getItem("authToken");
      if (token) {
        navigate("/");
      } else {
        navigate("/auth");
      }
    }
  }, [location.hash]);
  return (
    <Routes>
      <Route path="/" element={<SpotifyMain />}>
        <Route path="search/*" element={<Search />}>
          <Route path="all" element={<AllSearch/>}/>
          <Route path="artists" element={<ArtistsSearch/>}/>
          <Route path="playlists" element={<PlaylistsSearch/>}/>
          <Route path="tracks" element={<TracksSearch/>}/>
          <Route path="albums" element={<AlbumsSearch/>}/>
        </Route>
        <Route path="collection/*" element={<Collection />}>
          <Route path="albums" element={<AlbumsCollection />} />
          <Route path="artists" element={<ArtistsCollection />} />
          <Route path="playlists" element={<PlaylistsCollection />} />
          <Route path="tracks" element={<TracksCollection />} />
        </Route>
        <Route path="playlist/:id" element={<PlaylistInfo />} />
      </Route>
      <Route path="/auth" element={<SpotifyAuth />} />
    </Routes>
  );
}

export default App;
