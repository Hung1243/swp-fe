echo "Building app..."
npm run build
echo "Deploy files to server..."
scp -r  dist/* root@167.71.195.137:/var/www/html/
echo "Done!"