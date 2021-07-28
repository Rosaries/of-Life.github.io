#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -A
git commit -m "New Deployment"
git branch -M main
git remote remove origin
git remote add origin https://github.com/Rosaries.github.io/of-Life.git
git push -f git@github.com:Rosaries/of-Life.git master:gh-pages

cd -