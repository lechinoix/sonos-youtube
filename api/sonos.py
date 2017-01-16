from soco import SoCo
import sys
import hug


sonos = SoCo('192.168.12.34')

@hug.get('/play')
def sonos(url):
    if sonos.get_current_track_info():
        sonos.play()
    else:
        sonos.play_uri(url)
    return "Playing"

@hug.get('/pause')
def sonos():
    sonos.pause()
    return "Paused"

@hug.get('/volume')
def sonos(vol):
    sonos.volume(vol)
    return "Volume updated"


