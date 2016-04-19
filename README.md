# recipe_backend
The NodeJS backend server the site is hosted on.

## Installation Instructions
Make sure your ssh keys are uploaded to github and you have NodeJS 4.4.3 installed (https://nodejs.org).
### Anyone other than Synch Team
 * ```git clone git@github.com:umlse-16/recipe_backend.git```
 * TODO add how to install mongo for using mongoose
 * At the root of the package run ```npm install```

### Synch Team
 * ```git clone git@github.com:umlse-16/recipe_backend.git```
 * TODO add how to install mongo for using mongoose
 * ```git clone git@github.com:umlse-16/sync_backend.git``` to ```<package_root>/..```
 * ```npm link ../sync_backend```
 * ```npm install```

## Adding web content
 To add web content simply place it at app/public_html and it will be available on localhost:8000 by default.

## Updating the sync_backend
 Non sync team only (sync team just needs to pull newest version)
 ```javascript
 npm update sync_backend
 ```

## Running the backend
 From the root of the package do ```npm run app```