!/bin/bash

# How to run: 'bash scripts/clean-history.sh <FILE or DIRECTORY>'
# Make sure to run from root directory of git repository

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

TYPE=""
if [ -f "$1" ]; then
    echo -e "${YELLOW}You have supplied a file name${NC}"
    TYPE="file"
elif [ -d "$1" ]; then
    echo -e "${YELLOW}You have supplied a directory name${NC}"
    TYPE="directory"
else
    echo -e "${RED}Must supply file or directory name as command line argument${NC}"
    exit
fi

echo -e "${YELLOW}Are you sure you want to remove $TYPE ${GREEN}$1${YELLOW} from this repository's history?${NC}"
echo -e "${RED}This action cannot be undone${NC}"
read -p "(y/n): " answer

if [ $answer == "y" ]; then
    echo -e "${YELLOW}Oh boy here we go.${NC}"
    # Clear backups
    git update-ref -d refs/original/refs/heads/master

    if [ $TYPE == "file" ]; then
        git filter-branch --tree-filter "rm -f $1" HEAD
    fi
    # directories? untested vvv
    if [ $TYPE == "directory" ]; then
        git filter-branch --tree-filter "rm -rf $1" --prune-empty HEAD
    fi

    # add file to gitignore
    echo -e "${YELLOW}All done. Adding $TYPE to .gitignore${NC}"
    echo -e -n "\n$1" >> .gitignore
    git add --all
    git commit -m "removed $1 from history and updated .gitignore"
    echo -e "${YELLOW}It is finished."
    echo -e "Run this command to push history changes to origin remote:"
    echo -e "${GREEN}git push origin --force --all${NC}"
    exit;
elif [ $answer == "n" ]; then
    echo -e "${YELLOW}Way to play it safe. Goodbye.${NC}"
    exit;
else
    echo -e "${RED}Error: ${YELLOW}Try again and enter valid input.${NC}"
    exit;
fi
