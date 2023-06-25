# Сhat (socket.io + express + mongodb + react)
Project in order to learn websockets better in practice.
This is an anonymous chat app with multiple rooms that you can choose from or create your own to discuss topics you want.
## Quick start
```
mkdir my_app
cd my_app
git clone https://github.com/korovindn/chat.git
cd client
echo "export const SERVER_URL = {your_server_url};" > ./src/config.ts
npm i 
npm run start
cd ../server
echo "export const ALLOWED_ORIGIN = {your_client_url}; \nexport const MONGODB_URI = {your_mongodb_uri};" > config.js
npm i
npm run start
```
