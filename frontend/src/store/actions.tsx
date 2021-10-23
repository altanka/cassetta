export type Action = { type: "SET_VIDEO"; payload: { url: string, name: string} };

export const setVideo = (videoUrl: string, videoName: string): Action => ({
  type: "SET_VIDEO",
  payload: {url: videoUrl, name: videoName},
});