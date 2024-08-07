import { iconFileDomain, imgFileDomain } from "./constant";

export function getIconFileLink(iconId: number) {
  return `${iconFileDomain}/icon/${iconId}.png`;
}

export function getXinfaImageLink(xfId: number) {
  return `${imgFileDomain}/image/xf/${xfId}.png`;
}