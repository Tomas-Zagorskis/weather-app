# Weather app

The weather app is built using Vite, a fast development build tool for modern web development. It's a React app written in TypeScript, which provides static typing and other advanced features to the codebase. The app utilizes the OpenWeather API to fetch weather data and Google Maps API for location services.

## Prerequisites

Docker:

- Windows: Visit the Docker Desktop for Windows website (https://hub.docker.com/editions/community/docker-ce-desktop-windows) and follow the installation instructions provided.
- macOS: Visit the Docker Desktop for Mac website (https://hub.docker.com/editions/community/docker-ce-desktop-mac) and follow the installation instructions provided.
- Linux: Visit the Docker Engine installation documentation (https://docs.docker.com/engine/install/) for detailed installation instructions based on your Linux distribution.

## Getting Started

To launch the app, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Tomas-Zagorskis/weather-app.git
   cd weather-app
   ```
2. Rename `.env.local.example` file and add values for variables.

   ```bash
   cp .env.local.example .env.local
   ```

3. Launch the app:
   1. Installing dependencies and run app:
   ```bash
   npm install
   npm run dev
   ```
   2. Or running docker image:
   ```bash
   docker compose up -d
   ```

## Deployed website

The app is deployed on Vercel and can be accessed at the following URL: https://weather-locations.vercel.app/
