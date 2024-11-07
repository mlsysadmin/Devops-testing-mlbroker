# Get Started

## - BACKEND SET UP -
Run project on your local machine

## Install required packages
### Run Command: 
This will create a node_modules folder containing installed packages.
   
```
npm i 
```

## Copy and Create .env file
### Run Command: 
This will copy and paste .env.example to the directory and rename to .env.

Ask for the values of .env file server
```
cp .env.example .env
```
     
## Run backend server
### Run Command: 

```
npm run dev
```

## Running on localhost

### Server
Server will run on localhost on port 8002:
`
http://localhost:8002
`

## - FRONTEND SET UP -

Run project on your local machine

## Install required packages
### Run Command: 
This will create a node_modules folder containing installed packages.
   
```
npm i 
```

## Copy and Create .env file
### Run Command: 
This will copy and paste .env.example to the directory and rename to .env.

Ask for the values of .env file server
```
cp .env.example .env
```
     
## Run frontend server
### Run Command: 

```
npm start
```

## Running on localhost

### Server
Server will run on localhost on port `3000`:
`
http://localhost:3000
`

# Contributing

### 1. Create a branch reference to `master`

Branch naming guidelines:

- `feature/feature-name` - For code that adds a feature.

- `fix/fix-name` - For code that needs fixing from an existing feature.

- `adjustment/adjustment-name` - For code that needs changes to an existing feature.


### 2. Commiting codes

Commit according to codes' purpose. If your adding a new feature, make sure to use proper commit message, e.g: `[Feature][Jona] Create middleware`

Commit messages format:
`[Commit type][dev-name] message`

Commit Types:

- `Feature` - For commits that adds a feature.
- `Fix` - For commits that has fixes from an existing feature.
- `Adjustments` - For commits that has changes to an existing feature.


### 3. Push Changes to `dev` Branch: Rebase often


Make sure your branch is in sync with the `dev` branch. To do so, try to `pull` from the `dev` branch more often to avoid code conflicts. Check your code, if no conflicts found, you're good to go.

### 4. Pull request

When ready, create a `Pull Request` from your branch to the dev branch.

### 5. Merge

Good Job! Keep it up!! 🥳😎
