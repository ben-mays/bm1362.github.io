#!/bin/bash

DIR="ben-mays.github.io"
REPO=git@github.com:ben-mays/ben-mays.github.io.git
DATE=`date +%Y-%m-%d`

cd ~
git clone $REPO
cd ~/$DIR
curl https://github.com/users/ben-mays/contributions > contribution-data.svg
git add contribution-data.svg
git commit -m "Updating contributions on $DATE"
git push origin master
cd ~
