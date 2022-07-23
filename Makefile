build:
	pnpm run build
	docker build -t stayradiated/briefly-rss:latest .
