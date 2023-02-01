import { HandySvg } from "handy-svg";
import playBtn from "../img/playBtn.svg";
import likeBtn from "../img/like.svg";
import likeGreenBtn from "../img/likeGreen.svg";
import threeDot from "../img/threeDot.svg";
import clock from "../img/clock.svg";

export const playButtonSvg = () => (
  <HandySvg src={playBtn} width="36" height="32" />
);

export const likeButtonSvg = () => (
  <HandySvg src={likeBtn} width="36" height="32" />
);

export const likeGreenButtonSvg = () => (
  <HandySvg src={likeGreenBtn} width="36" height="32" />
);

export const threeDotButton = () => (
  <HandySvg src={threeDot} width="36" height="32" />
);

export const clockMarker = () => (
    <HandySvg src={clock} width="16" height="16" />
  );
