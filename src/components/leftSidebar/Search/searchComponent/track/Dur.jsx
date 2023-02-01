import styled from "styled-components";
import { formatTime } from "../../../../../utilities/mathData";

const Dur = ({ track }) => {

  return (
    <DurationBlock>
      <div className="durationInfo">
        <p>{formatTime(track.duration_ms)}</p>
      </div>
    </DurationBlock>
  );
};

export default Dur;

const DurationBlock = styled.div`
    p {
      font-weight: 400;
      font-size: 14px;
      color: #a7a7a7;
    }
`