# Projeto Dockerizado com NGINX e Backend Simples

## Objetivo
O objetivo deste trabalho prático é desenvolver uma aplicação Dockerizada utilizando o NGINX como servidor frontend e uma aplicação de backend simples, implementada em Node.js ou Python Flask.

---
## Requisitos

1. **Ambiente**
   - Docker e NGINX instalados e executando em suas últimas versões estáveis (Linux).

2. **Configurações**
   - Um Dockerfile para o NGINX configurado para servir arquivos estáticos e fazer proxy reverso para o backend.
   - Uma aplicação backend simples que responde a requisições HTTP, containerizada com seu próprio Dockerfile.
   - Um arquivo `docker-compose.yml` que define os serviços e as redes necessárias.

---
## Construir e iniciar os containers:


docker compose up --build

Acessar a aplicação:

    O frontend estará disponível em http://localhost (ou na porta configurada).
    O backend pode ser acessado através do NGINX.

---

## Descrição da Arquitetura do Projeto

    Frontend (NGINX):
        O NGINX serve arquivos estáticos da pasta html/.
        Ele também atua como um proxy reverso, encaminhando requisições para o backend.

    Backend:
        A aplicação backend é uma API simples que retorna dados em formato JSON.
        É containerizada e configurada para se comunicar com o NGINX.

## DOCKER HUB
[docker_hub](https://hub.docker.com/repository/docker/frams/projeto_dockerizado/general)
