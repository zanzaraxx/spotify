import styled from "styled-components";
import { formatTime } from "../../../../utilities/mathData";

const Duration = ({ track }) => {

  return (
    <DurationBlock>
      <div className="durationInfo">
        <p>{formatTime(track.duration_ms)}</p>
      </div>
    </DurationBlock>
  );
};

export default Duration;

const DurationBlock = styled.div`
@media screen and (max-width: 1200px) {
  max-width: 30px;
}
    p {
      font-weight: 400;
      font-size: 14px;
      color: #a7a7a7;
    }
`