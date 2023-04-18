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

lint:
	@docker compose exec node yarn lint

install:
	@docker compose exec node yarn install

cp:
	@docker cp dorekara-app:/works/node_modules/ ./app/
