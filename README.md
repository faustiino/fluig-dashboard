# Fluig Server Dashboard (Angular + PO UI + Tailwind)

Dashboard para monitorar saúde do Fluig (mockável, sem expor dados reais).

## Features
- Health check (uptime, latência, erros)
- BPM: filas, SLAs, throughput
- Datasets/API: p95/p99, taxa de erro
- Estados: OK / Degradado / Offline

## Demo
[🔗 Live Demo](#) – [🎥 GIF de 10s](#)

## Stack
Angular 19 (standalone) • PO UI • Tailwind • RxJS • Docker • Cypress

## Rodando local
```bash
npm i
npm run start:mock   # inicia mock-api + app
# abre http://localhost:4200
