# E-COMMERCE-NEEMBLY-EXERCISE FRONTEND

Step on how to setup the project

## Pre-requisites

Before you begin the installation process, make sure you have the following software installed in your machine:

1. **Node.js**: Required for asset compilation, Version **18.17.1** or **higher**
2. **npm**: Node.js package manager, Version **9.6.7** or **higher**

## Requirements

1. **VueJS** (v3)
2. **Vuex** (v4.1)
3. **Vue Router** (v4.3)
4. **Bootstrap** (v5)
5. **Vite** (v5.2)

## Clone the repository

```bash
git clone <repository>

# example
git clone https://github.com/dogomeo5794/e-commerce-neembly-exercise.git
```

## Git branches

- `dev` for development or staging
- `master` for production

## Install the dependencies

```bash
npm install
# or
yarn install
```

### Start the app in development mode

- Make sure **.env** file is exist in your root project directory, if not exist create one and put it in your **.env** file
  ```
  VITE_APP_ENV=dev
  VITE_APP_PORT=2001
  VITE_APP_BASE_API=https://api.escuelajs.co/api
  VITE_APP_BASE_API_VERSION=v1
  ```
- To run the project in development mode

  ```bash
  npm run dev
  # or
  yarn dev
  ```

### Build the app for production

```bash
npm run build
# or
yarn build
```
