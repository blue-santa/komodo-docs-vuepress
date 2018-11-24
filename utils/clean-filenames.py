#!/usr/bin/python3

import os

directory = os.fsencode('/home/gcharang/gitrepos/komodo-docs-vuepress/utils/fileName-cleanup')

for file in os.listdir(directory):
    filename = os.fsdecode(file)
    x = filename.split("-")
    x = x[1:]
    x = "-".join(x)
    path = str('fileName-cleanup/' + filename)
    pathN = str('fileName-cleanup/' + x)
    os.rename(path, pathN)
