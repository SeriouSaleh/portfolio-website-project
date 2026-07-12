#!/usr/bin/env bash

set -Eeuo pipefail

PROJECT_DIR="/opt/apps/portfolio"

cd "$PROJECT_DIR"

git pull --ff-only origin main

docker compose up -d --build

docker image prune -f
