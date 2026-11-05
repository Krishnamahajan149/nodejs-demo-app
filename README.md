# Node.js CI/CD Pipeline Using GitHub Actions and Docker

This repository is a sample Node.js web application for the DevOps Internship Task 1.

## Pipeline overview

When code is pushed to the `main` branch, GitHub Actions:

1. Checks out the repository.
2. Sets up Node.js 20.
3. Installs dependencies with `npm ci`.
4. Runs the automated test.
5. Builds a Docker image.
6. Pushes the image to Docker Hub with `latest` and commit-SHA tags.

The Docker image is published only if the test job succeeds.

## Technologies

- Node.js 20
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## Run locally

```bash
npm ci
npm test
npm start
```

Open http://localhost:3000.

## Build and run with Docker

```bash
docker build -t nodejs-demo-app .
docker run --rm -p 3000:3000 nodejs-demo-app
```

Open http://localhost:3000.

## GitHub setup

1. Create a Docker Hub repository named `nodejs-demo-app`.
2. Create a Docker Hub access token with Read & Write permissions.
3. In your GitHub repository, open **Settings → Secrets and variables → Actions**.
4. Add these repository secrets:
   - `DOCKERHUB_USERNAME` — your Docker Hub username.
   - `DOCKERHUB_TOKEN` — your Docker Hub access token.
5. Push this project to the `main` branch.
6. Open the **Actions** tab and check that both jobs pass.

Do not put Docker Hub credentials in source files or commit them to Git.

## Docker image

After a successful workflow, the image is available at:

```text
YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest
```

Replace `YOUR_DOCKERHUB_USERNAME` with your Docker Hub username.

## Author

Krishna Mahajan
