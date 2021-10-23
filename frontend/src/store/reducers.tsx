export interface PlayerState {
  videoUrl: string;
  videoName: string;
}

const initialState = {
  videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  videoName: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
};

export type Action = { type: "SET_VIDEO"; payload: { url: string, name: string } };

export const playerReducer = (
  state: PlayerState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "SET_VIDEO": {
      return { ...state, videoUrl: action.payload.url, videoName: action.payload.name };
    }
    default:
      return state;
  }
};
