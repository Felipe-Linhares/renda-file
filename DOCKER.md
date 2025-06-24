# Docker Setup para Renda Filé Catálogo

Este projeto pode ser executado usando Docker para facilitar o desenvolvimento e deploy.

## Pré-requisitos

- Docker
- Docker Compose

## Comandos Disponíveis

### Produção

```bash
# Construir a imagem
npm run docker:build

# Executar em produção
npm run docker:prod

# Ou usando docker-compose diretamente
docker-compose up renda-file-catalogo
```

### Desenvolvimento

```bash
# Executar em modo desenvolvimento (com hot reload)
npm run docker:dev

# Ou usando docker-compose diretamente
docker-compose --profile dev up renda-file-catalogo-dev
```

### Comandos Úteis

```bash
# Parar os containers
npm run docker:stop

# Ver logs
docker-compose logs -f

# Entrar no container
docker-compose exec renda-file-catalogo sh

# Remover containers e volumes
docker-compose down -v

# Rebuild sem cache
docker-compose build --no-cache
```

## Estrutura dos Arquivos Docker

- **Dockerfile**: Imagem de produção otimizada com multi-stage build
- **Dockerfile.dev**: Imagem para desenvolvimento com hot reload
- **docker-compose.yml**: Orquestração dos containers
- **.dockerignore**: Arquivos ignorados no build

## Portas

- **Produção**: http://localhost:3000
- **Desenvolvimento**: http://localhost:3333

## Variáveis de Ambiente

O container de produção automaticamente usa:

- `NODE_ENV=production`
- Serve arquivos estáticos da pasta `out/`

## Build Multi-Stage

O Dockerfile de produção usa multi-stage build para:

1. **deps**: Instalar apenas dependências de produção
2. **builder**: Construir a aplicação
3. **runner**: Servir arquivos estáticos com o mínimo necessário

Isso resulta em uma imagem final muito menor e mais segura.
