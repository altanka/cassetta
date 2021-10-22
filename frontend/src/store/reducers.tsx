export interface PlayerState {
  videoUrl: string;
}

const initialState = {
  videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
};

export type Action = { type: "SET_VIDEO"; payload: string };

export const playerReducer = (
  state: PlayerState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "SET_VIDEO": {
      return { ...state, videoUrl: action.payload };
    }
    default:
      return state;
  }
};
