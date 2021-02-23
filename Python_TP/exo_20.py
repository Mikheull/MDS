import json
import requests

def requestUrl():
    link = 'https://restcountries.eu/rest/v2/region/europe'
    data = requests.get(link).text

    data = json.loads(data)
    for item in data:
        print(item['population'])

requestUrl()