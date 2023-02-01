import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import CustomLink from "../../components/base/CustomLink";

function PlaylistHeader() {
  const [img, setImg] = useState(0);
  const { id } = useParams();
  const playlist = useSelector((state) =>
    state.playlists.playlistsCollection.find((item) => item.id === id)
  );
  if (playlist?.images[0]?.url && img !== playlist.images[0].url) {
    setImg(playlist?.images[0]?.url);
  } else if (!playlist?.images[0]?.url && img !== 0) {
    setImg(0);
  }

  return (
    <Header>
      {playlist && (
        <div className="playlist-info">
          <div className="playlist-info__image">
            {(function () {
              if (img) {
                return <img src={img} alt="" />;
              } else {
                return (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#7f7f7f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="18" r="3" />
                  </svg>
                );
              }
            })()}
          </div>
          <div className="playlist-info__title">
            <div className="typePlaylist">
              <span>{playlist.type}</span>
            </div>
            <div>
              <h2>{playlist.name}</h2>
            </div>
            <div>
              <p>{playlist.description ? playlist.description : "Описание"}</p>
            </div>
            <div className="additional">
              <CustomLink
                to={`/user/${playlist.owner.id}`}
                margin={"0px"}
                color="#fff"
              >
                {playlist.owner.display_name}
              </CustomLink>
              <span>54 Лайка</span>
              <span>{playlist.tracks.total} Треков</span>
            </div>
          </div>
        </div>
      )}
    </Header>
  );
}

export default PlaylistHeader;

const Header = styled.div`
  width: 100%;
  padding: 60px 32px 15px 32px;
  .playlist-info {
    display: flex;
    gap: 16px;
    &__image {
      width: 232px;
      min-width: 232px;
      box-shadow: 0px 0px 9px 7px rgba(34, 60, 80, 0.2);
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    &__title {
      display: flex;
      flex-direction: column;
      color: #fff;
      span {
        font-weight: 600;
      }
      h2 {
        display: flex;
        color: #fff;
        visibility: visible;
        font-size: calc(0.7rem + 1.5vw);
        word-break: break-word;
        min-height: 170px;
        // align-items: end;
      }
      p {
        color: #b3b3b3;
      }
      .additional {
        display: flex;
        gap: 10px;
        font-size: 14px;
        .link {
          font-weight: 600;
          :hover {
            text-decoration: underline;
          }
        }
        span::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fff;
          display: inline-block;
          margin: 0 2px 2px 0;
        }
      }
    }
  }
`;

const ImgPlace = styled.div``;
