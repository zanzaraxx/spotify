import styled from "styled-components";


const PlaylistMiddleLineSticky = () => {
  return (
    <MiddlePanel>
      <ButtonPanel>
        <PlayButton>
          <svg
            role="img"
            height="28"
            width="28"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
            class="Svg-sc-ytk21e-0 uPxdw"
          >
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
          </svg>
        </PlayButton>
        <div className="threeDotBtn">
          <svg
            fill="#a5a5a5"
            role="img"
            height="32"
            width="32"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
            class="Svg-sc-ytk21e-0 uPxdw"
          >
            <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
      </ButtonPanel>
      <ArticalePanel>
        <div className="articaleBlock">
          <div className="trackInfo">
            <div className="num">#</div>
            <div className="name">Название</div>
          </div>
          <div className="album">Альбом</div>
          <div className="data">Дата добавления</div>
          <div className="duration">
            <svg
              overflow="hidden"
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              class="Svg-sc-ytk21e-0 uPxdw"
            >
              <path
                overflow="hidden"
                fill="#b3b3b3"
                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
              ></path>
              <path
                fill="#b3b3b3"
                d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"
              ></path>
            </svg>
          </div>
        </div>
      </ArticalePanel>
    </MiddlePanel>
  );
};

export default PlaylistMiddleLineSticky;

const MiddlePanel = styled.section`
  display: flex;
  flex-direction: column;
  padding: 24px 32px 0px;
  background: #12121270;
  overflow: hidden;
`;

const PlayButton = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: #1ed760;
  transition: background 0.4s ease;
  :hover {
    background: #1fdf6490;
    transition: background 0.4s ease;
  }
  svg {
    display: flex;
    margin: auto;
  }
`;

const ButtonPanel = styled.div`
  display: flex;
  gap: 35px;
  .threeDotBtn {
    display: flex;
    align-items: center;
    svg:hover {
      fill: #ffffff;
    }
  }
`;

const ArticalePanel = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  color: #b3b3b3;
  margin-top: 24px;
  padding: 6px 12px;
  gap: 10px;
  border-bottom: 2px solid #282828;
  .articaleBlock {
    display: flex;
    width: 100%;
    .trackInfo {
      display: flex;
      flex: 2;
      align-items: center;
      gap: 20px;
      margin-left: 10px;
      min-width: 260px;
      @media screen and (max-width: 1200px) {
        max-width: 350px;
      }
    }
    .album {
      display: flex;
      align-item: center;
      flex: 2;
      min-width: 160px;
      margin-right: 12px;
    }
    .data {
      flex: 1;
      margin-right: 60px;
      white-space: nowrap;
      text-overflow: ellipsis;
      min-weight: 50px;
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
    .duration {
      margin-right: 40px;
    }
  }
`;
