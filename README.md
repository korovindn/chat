# chat
```
mkdir my_app
cd my_app
git clone https://github.com/korovindn/chat.git
cd client
npm i 
npm run start
cd ../server
echo "export const ALLOWED_ORIGIN = {your_client_url}; \nexport const MONGODB_URI = {your_mongodb_uri};" > config.js
npm i
npm run start
```
