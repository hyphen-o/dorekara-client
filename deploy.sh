cd ~/dorekara-client
pm2 stop next
git pull origin main
cd app
sudo yarn install
sudo yarn build
pm2 start next
