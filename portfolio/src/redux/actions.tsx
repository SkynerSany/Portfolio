import { NEXTPROJECT, PREVPROJECT } from "./types";

export function setNextProject() {
  return {
    type: NEXTPROJECT,
  }
}

export function setPrevProject() {
  return {
    type: PREVPROJECT,
  }
}