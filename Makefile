.PHONY: server client
server:
	cd server; npm run dev;
client:
	cd my-best-album-client; npm run build; npm run start;