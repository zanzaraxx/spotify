import { useState } from "react";
import styled from "styled-components";
import TrackName from "./trackComponent/TrackName";
import AlbumName from "./trackComponent/AlbumName";
import DateInfo from "./trackComponent/DateAdd";
import Duration from "./trackComponent/Duration";

const Track = ({ track: { track, added_at }, order }) => {
  const [hoverable, setHoverable] = useState(false);
  return (
    <TrackBlock onMouseEnter={() => setHoverable(true)} onMouseLeave={() => setHoverable(false)}>
      <TrackName track={track} order={order} hoverable={hoverable} />
      <AlbumName track={track} />
      <DateInfo added_at={added_at} />
      <LikeBtn stateBlock={hoverable}>
        <svg fill="#c0c0c0" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path></svg>
      </LikeBtn>
      <Duration track={track} />
      <ThreeDotsBtn stateBlock={hoverable}>
        <svg fill="#c0c0c0" role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
      </ThreeDotsBtn>
    </TrackBlock>
  );
};

export default Track;

const TrackBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  margin: 5px 32px;
  color: white;
  // overflow: hidden;
  &:hover {
    border-radius: 5px;
    background: #2a2a2a;
  }
`;

const ThreeDotsBtn = styled.div`
  display: flex;
  padding: 2px 0 0 0;
  visibility: ${({ stateBlock }) => {
    return stateBlock ? "visible" : "hidden";
  }};
  svg:hover {
    fill: #fff;
  }
`;
const LikeBtn = styled.div`
  display: flex;
  padding: 2px 20px 0 0;
  visibility: ${({ stateBlock }) => {
    return stateBlock ? "visible" : "hidden";
  }};
  svg:hover {
    fill: #fff;
  }
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;
