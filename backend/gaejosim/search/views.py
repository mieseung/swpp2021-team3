"""search views"""
import requests
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_http_methods
from user.models import Summoner

api_default = {
    "asia": "https://asia.api.riotgames.com",  # asia server
    "korea": "https://kr.api.riotgames.com",  # korea server
    # api key : needs to regenerate every 24hr
    "key": "RGAPI-1d887aa4-2333-452f-8b1e-b4e884434cd1",  # updated 11/22
}


@require_http_methods(["GET"])
def search(request):
    """single/multi search"""
    search_type = request.GET["type"]
    summoners = request.GET["summoners"]

    if search_type == "":
        return HttpResponse(status=400)
    if summoners == "":
        return HttpResponse(status=400)

    summoners = request.GET["summoners"].split(",")
    multisearch_results = []

    for summoner in summoners:
        summoner_name_url = (
            f"{api_default['korea']}/lol/summoner/v4/summoners/by-name/"
            + f"{summoner}?api_key={api_default['key']}"
        )
        summoner_name_req = requests.get(summoner_name_url)
        if summoner_name_req.status_code == 404:
            multisearch_results.append(
                {
                    "summoner_name": summoner,
                }
            )
            continue
        # print(summoner_name_req.json())
        summoner_puuid = summoner_name_req.json()["puuid"]

        summoner_league_url = (
            f"{api_default['korea']}/lol/league/v4/entries/by-summoner/"
            + f"{summoner_name_req.json()['id']}?api_key={api_default['key']}"
        )
        summoner_league_req = requests.get(summoner_league_url)
        tier = {"tier": None, "rank": None}
        if summoner_league_req.json() != []:
            for league_dto in summoner_league_req.json():
                if league_dto["queueType"] == "RANKED_SOLO_5x5":
                    tier = {"tier": league_dto["tier"], "rank": league_dto["rank"]}
                    break

        matches_by_summoner_url = (
            f"{api_default['asia']}/lol/match/v5/matches/by-puuid/"
            + f"{summoner_puuid}/ids?type=ranked&start=0&count=10&api_key={api_default['key']}"
        )
        matches_by_summoner_req = requests.get(matches_by_summoner_url)
        matches_by_summoner_list = matches_by_summoner_req.json()
        recent_result = []
        recent_win_lose = []

        for match in matches_by_summoner_list:
            match_metadata_url = (
                f"{api_default['asia']}/lol/match/v5/matches/"
                + f"{match}?api_key={api_default['key']}"
            )
            match_metadata_req = requests.get(match_metadata_url)
            match_metadata = match_metadata_req.json()
            summoner_index = match_metadata["metadata"]["participants"].index(
                summoner_puuid
            )
            summoner_metadata = match_metadata["info"]["participants"][summoner_index]
            recent_result.append(
                {
                    "lane": summoner_metadata["lane"],
                    "kills": summoner_metadata["kills"],
                    "assists": summoner_metadata["assists"],
                    "deaths": summoner_metadata["deaths"],
                    "champion_id": summoner_metadata["championId"],
                    "win": summoner_metadata["win"],
                }
            )
            recent_win_lose.append("W" if summoner_metadata["win"] else "L")

        if Summoner.objects.filter(summoner_puuid=summoner_puuid).exists():
            manner_point_obj = Summoner.objects.get(
                summoner_puuid=summoner_puuid
            ).manner_point
            manner_point = manner_point_obj.point
            tag_list = []
            tag_list.append(manner_point_obj.tag1)
            tag_list.append(manner_point_obj.tag2)
            tag_list.append(manner_point_obj.tag3)
            tag_list.append(manner_point_obj.tag4)
            tag_list.append(manner_point_obj.tag5)
        else:
            manner_point = None
            tag_list = None

        multisearch_results.append(
            {
                "summoner_name": summoner,
                "manner_point": manner_point,
                "tag_values": tag_list,
                "tier": tier["tier"],
                "rank": tier["rank"],
                "recent_result": recent_result,
                "win_lose": recent_win_lose,
            }
        )

    return JsonResponse(
        {"matchers": multisearch_results},
        status=200,
        json_dumps_params={"ensure_ascii": False},
    )
