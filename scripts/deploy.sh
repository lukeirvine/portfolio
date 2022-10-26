!/bin/bash

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# This feature is deprecated, but may need for reference
# BRANCH="$(git rev-parse --abbrev-ref HEAD)"
# if [[ "$BRANCH" != "master" ]]; then
#     echo -e "${RED}You must be in the master branch to deploy.${NC}";
#     exit 1;
# fi

echo -e "${YELLOW}Are you ready to deploy to production?${NC}"
read -p "(Y/n): " answer
echo -e "${YELLOW}Deploy functions as well?${NC}"
read -p "(Y/n): " deployFunctions
if [ $answer == "Y" ]; then
    git checkout master
    git merge dev -m "merging dev"
    git push
    echo -e "${GREEN}Building${NC}"
    npm run build
    echo -e "${GREEN}Deploying${NC}"
    if [ $deployFunctions == "Y" ]; then
        firebase deploy
    else
        firebase deploy --only hosting
    fi
    echo -e "${YELLOW}Checking out dev branch${NC}"
    git checkout dev
    git branch -v
else
    exit;
fi
