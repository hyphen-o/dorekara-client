cp:
	@docker cp dorekara-app:/works/node_modules/ ./app/

up:
	@docker compose up

down:
	@docker compose down

exec:
	@docker compose exec node sh

check:
	@docker compose exec node yarn check

format:
	@docker compose exec node yarn format

install:
	@docker compose exec node yarn install
