# Humane Tech SF - Splashpage
This is where new community members can sign up for the Humane Tech SF newsletter.

## Development Environment
There are several tools you'll need in order to start development on macOS  
Use the terminal and the following snippets to install them.  

[**Homebrew**](https://brew.sh/) - System package manager  
`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

[**nvm**](https://github.com/creationix/nvm) - Node.js version manager  
`$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`

[**Node.js**](https://nodejs.org/en/) - Javascript server environment  
`$ nvm install v10`

[**Yarn**](https://yarnpkg.com/en/) - Javascript dependency management  
`$ brew install yarn --without-node`

## Getting Started
Clone the repository and navigate to the project folder, then install the project dependencies.
```bash
$ git clone git@github.com:rongierlach/humanetechsf-splashpage.git
$ cd humanetechsf-splashpage
$ yarn
```

### Develop
Starts the dev server at `localhost:3000`
`$ yarn dev`

### Deploy
Builds static source and pushes to `gh-pages` branch.
`$ yarn deploy`
