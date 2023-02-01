import { useMemo } from "react";
import styled from "styled-components";
import { diffDate } from "../../../../utilities/mathData";

const DateAdd = ({added_at}) => {
  const dateAgo = useMemo(() => {
    const diff = diffDate(added_at);
    if (diff.years) return `Over a year ago`;
    else if (diff.months) return `${diff.months} Months ago  `;
    else if (diff.days) return `${diff.days} days ago`;
    else if (diff.minutes) return `${Math.floor(diff.minutes)} Minutes ago`;
    else if (diff.seconds) return `${Math.floor(diff.seconds)} Seconds ago`;
  }, [added_at]);
  return (
    <Date>
      <span>{dateAgo}</span>
    </Date>
  );
}

export default DateAdd;

const Date = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    color: #a7a7a7;
  }
`;
