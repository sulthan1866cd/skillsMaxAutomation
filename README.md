# SkillsMax Automation
Automated testing for skillsmax's login, create Organization feature


## Table of Contents
- [Usage](#usage)
- [Tech Used](#tech-used)
- [Feautre](#features)

## Usage
```shell
# install dependencies
npm i
# test login pade
npm run test:login
# test create organization
npm run test:createOrg
# run all tests
npm run test
```
## Tech Used 
- playwright - ^1.54.2
- cucumber js - ^12.1.0
- ts-node - ^10.9.2
- typescript - "^5.9.2


## Features
### Login 
- successfull login and unsuccessful login with wrong password are tested

### Create Organization
- leave one required field empty and successful organization creation are tested

## .env
- MY_MAIL='your.registered@mail.com'
- MY_PASSWORD='password for given mail'