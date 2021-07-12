#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init previewkeen
git add -A
git commit -m 'deploying keen'
git remote add previewkeen https://github.com/alexthecurator/previewkeen.git
git push -f git@github.com:alexthecurator/previewkeen.git master:gh-pages
cd -