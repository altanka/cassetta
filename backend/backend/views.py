from django.http import JsonResponse

import json

def set_video(request):
    req_dict = json.loads(request.body)
    video_url = req_dict['videoUrl']
    video_name = req_dict['videoName']
    print(req_dict)

    return JsonResponse({"videoUrl": video_url, "videoName": video_name})