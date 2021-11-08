import { SET_VIDEO_URL } from './../context/API'


export type Action = { type: "SET_VIDEO"; payload: { url: string, name: string } };

export const setVideo = (videoUrl: string, videoName: string): Action => ({
  type: "SET_VIDEO",
  payload: { url: videoUrl, name: videoName },
});

export const setVideoBackend = (videoUrl: string, videoName: string) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ videoUrl: videoUrl, videoName: videoName })
  };
  console.log(SET_VIDEO_URL, requestOptions)
  return function (dispatch: (_: any) => any) {
    return fetch(SET_VIDEO_URL, requestOptions)
      .then(response => response.json())
      .then(
        (response) => dispatch(setVideo(response.videoUrl, response.videoName)),
        (error) => console.log(error),
      );
  };
}