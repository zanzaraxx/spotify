import styled from 'styled-components'
import logo from '../img/logo.jpg'
import { login } from "../utilities/auth";

const SpotifyAuth = () => {
  return (
    <Login>
      <img src={logo} alt=""/>
      <button onClick={login}>Go to Spotify</button>
    </Login>
  );
}
const Login = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1ed75f;
  img {
    height: 300px;
  }
  button {
    width: 400px;
    padding: 20px 0;
    border-radius: 20px;
    margin-top: 16px;
    background-color: #064216;
    color: white;
    border: none;
    font-size: 26px;
    cursor: pointer;
    &:hover {
      background-color: #2a8743;
    }
  }
`;
export default SpotifyAuth;
