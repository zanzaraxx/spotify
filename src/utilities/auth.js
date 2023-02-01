const CLIENT_ID = "110d37a891ca4722ab0aa28583c0e43c";
const REDIRECT = "http://localhost:3000";
const SCOPES = "user-top-read user-read-recently-played user-follow-modify app-remote-control user-read-playback-position streaming user-read-playback-state playlist-read-private user-follow-read user-read-private user-read-email user-library-modify user-library-read user-modify-playback-state user-modify-playback-state playlist-read-collaborative playlist-modify-private playlist-modify-public ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing";
const SCOPEST = "user-read-playback-state playlist-read-private streaming"

export const login = () => {
  const locationUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&response_type=token&scope=${SCOPES}`;
  window.location.replace(locationUrl);
};

// app-remote-control user-read-playback-position user-top-read user-read-recently-played user-follow-modify