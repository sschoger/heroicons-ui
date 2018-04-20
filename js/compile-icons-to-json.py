from json import dump
from os import listdir
from os.path import join

svg_path = "../svg"
map = {}
all_html = ""
for filename in listdir(svg_path):
    iconname = filename[5:-4] # remove icon- and .svg
    svg = open(join(svg_path, filename)).read()
    map["hi-" + iconname] = svg[112:-9] # reduce to just path
    all_html += '<i class="hi hi-%s"></i> ' % iconname

dump(map, open("_icon-paths.json", "w"), indent=4)
open("_all-heroicons.html", "w").write(all_html)
