.PHONY: server client
server:
	cd server; npm run dev;
client:
	cd my-best-album; npm run build; npm run start;