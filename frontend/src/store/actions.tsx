export type Action = { type: "SET_VIDEO"; payload: string };

export const setVideo = (videoUrl: string): Action => ({
  type: "SET_VIDEO",
  payload: videoUrl,
});