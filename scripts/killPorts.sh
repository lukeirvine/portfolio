!/bin/bash

lsof -P | grep ':8001' | awk '{print $2}' | xargs kill -9
echo "Database Port 8001 freed"
lsof -P | grep ':9099' | awk '{print $2}' | xargs kill -9
echo "Auth Port 9099 freed"
lsof -P | grep ':4000' | awk '{print $2}' | xargs kill -9
echo "UI Port 4000 freed"
lsof -P | grep ':9199' | awk '{print $2}' | xargs kill -9
echo "Storage Port 9199 freed"
lsof -P | grep ':5001' | awk '{print $2}' | xargs kill -9
echo "Functions Port 5001 freed"
lsof -P | grep ':6000' | awk '{print $2}' | xargs kill -9
echo "Hosting Port 6000 freed"