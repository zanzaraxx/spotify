import { DateTime } from "luxon";

export const formatTime = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms - minutes * 60000) / 1000);
  const formatSeconds = () => {
    return seconds < 10 ? `0${seconds}` : seconds;
  };
  return `${minutes}:${formatSeconds()}`;
};

export const diffDate = (startTime) => {
  const res = DateTime.now()
    .diff(DateTime.fromISO(startTime), [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ])
    .toObject();
  return res;
};
