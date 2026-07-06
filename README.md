
# Saleh jeddi Portfolio Website

Overview

This project is a personal portfolio website built with a Production-oriented DevOps workflow.

The goal is not only to deploy a website, but also to practice modern DevOps concepts such as containerization,CI/CD, 
reverse proxy, and automated deployments.


#Architecture
Browser
    │
    ▼
Nginx (Reverse Proxy)
    │
    ▼
Node.js Application


#Deployment flow:

Developer
    │
    ▼
GitHub
    │
    ▼
Jenkins (Windows)
    │
SSH
    │
    ▼
Ubuntu VM
    │
docker compose up -d --build
    │
    ▼
Application Deployment


#Technologies
Node.js
Docker
Docker Compose
Nginx
Jenkins
Git
GitHub
Ubuntu Server
SSH


#Project Structure
.
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── nginx/
│   └── nginx.conf
├── src/
├── package.json
└── README.md


#Current Features
Dockerized Node.js application
Nginx as Reverse Proxy
Docker Compose orchestration
Jenkins CI/CD pipeline
SSH-based deployment
Automatic application rebuild on deployment


#CI/CD Pipeline
Current deployment process:

Git Push
      │
      ▼
GitHub
      │
      ▼
Jenkins
      │
      ▼
SSH to Ubuntu VM
      │
      ▼
git pull
      │
      ▼
docker compose up -d --build


#Networking
Nginx is the only service exposed to clients.
Node.js is available only inside the Docker network.
Communication between containers uses Docker DNS (node-app).
