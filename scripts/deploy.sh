!/bin/bash

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# This feature is depricated, but may need for reference
# BRANCH="$(git rev-parse --abbrev-ref HEAD)"
# if [[ "$BRANCH" != "master" ]]; then
#     echo -e "${RED}You must be in the master branch to deploy.${NC}";
#     exit 1;
# fi

echo -e "${YELLOW}Are you ready to deploy to production? ${NC}"
read -p "(Y/n): " answer
if [ $answer == "Y" ]; then
    git checkout master
    git merge dev -m "merging dev"
    git push
    echo -e "${GREEN}Building and Deploying${NC}"
    npm run deploy
    echo -e "${YELLOW}Checking out dev branch${NC}"
    git checkout dev
    git branch -v
else
    exit;
fi
