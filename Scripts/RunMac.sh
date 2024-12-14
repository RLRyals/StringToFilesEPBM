#!/bin/bash  
cd "$(dirname "$0")" || exit  
npm install   
node app.js   
read -p "Press any key to continue..."   
