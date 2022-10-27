import { NEXTPROJECT, PREVPROJECT } from "../types";

const initialState: { projectId: number } = {
  projectId: 0,
}

export const portfolioReducer = (state = initialState, action: { type: string }) => {

  switch (action.type) {

    case NEXTPROJECT:
      return {
        ...state,
        projectId: state.projectId + 1,
      }
    case PREVPROJECT:
      return {
        ...state,
        projectId: state.projectId - 1,
      }

    default:
      return state;
  }
}