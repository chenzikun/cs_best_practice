.PHONY:	help

help:
	@echo "make dev | server"

dev:
	@gulp dev

server:
	@nohup gulp server &
