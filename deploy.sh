cd ~/dorekara-client
pm2 stop next
git fetch origin main
git pull origin main
cd app
sudo yarn install
sudo yarn build
pm2 start next
