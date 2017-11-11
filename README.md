# Sonder
Tiny software use to keep tracking of incoming startups on Indiegogo or Kickstarter.
### Feature list : 
- Login to Kickstarter
- Login to Indiegogo
- Search on kickstarter and indiegogo crowdfunding projects through their APIs
- Display seen and unseen projects
- Leave comments on each projects
- Filters results
- Keep tracking of site updates

## How to get the code : 

1) Get the code with `git clone https://github.com/Calderis/hwc-business-tool
2) Open the folder `cd hwc-business-tool`
3) Install packages `npm install`

You'll find all the code inside src/

If you want to compile the programm, then execute my little shell script `sh build.sh` or else open package.json et look into "scripts", you may find instructions that interest you. To execute on of them, do `npm run ______` where ____ is the instruction (example : `npm run build:prod`).

### Dependencies
What you need to run this app (only for those who want to develop the program, the compiled version doesn't need those):
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

### How to publish
You need to set GH_TOKEN as environment variable (on UNIX do export GH_TOKEN=[SET TOKEN HERE]).
To generate a token, go to [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)

### If you want to build for different os than your
Go and see the documentation ofr [multiplatform building].

[multiplatform building]: <https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build#os-x>
