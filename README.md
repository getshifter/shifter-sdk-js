Shifter API wrapper SDK (Using axios).

## Usage

### Get API Access Token

```typescript
import {
  Configuration,
  LoginApi,
  SitesApi,
} from '@shifter/sdk'

const getConfByLogin = async () => {
  const loginClient = new LoginApi()
  const params = {
    username: process.env.SHIFTER_USERNAME,
    password: process.env.SHIFTER_PASSWORD
  }
  const {
    data: {
      AccessToken: apiKey
    }
  } = await loginClient.loginPost(params)
  const conf = new Configuration({
    apiKey
  })
  return conf
}

```

### Example (List sites)

```typescript
import {
  Configuration,
  LoginApi,
  SitesApi,
} from '@shifter/sdk'

const listSitesWithLogin = async () => {
  const loginClient = new LoginApi()
  const params = {
    username: process.env.SHIFTER_USERNAME,
    password: process.env.SHIFTER_PASSWORD
  }
  const {
    data: {
      AccessToken: apiKey
    }
  } = await loginClient.loginPost(params)
  if (!apiKey) throw new Error('UnAuthorized')

  const conf = new Configuration({
    apiKey
  })
  const client = new SitesApi(conf)
  console.log(await client.sitesGet())
}

listSitesWithLogin()
.catch(e => {
  console.log(e)
}) 

```

## API Document
[WIP]
https://getshifter.github.io/shifter-sdk-js/

## Development

### Data source
Open API Docs: https://developer.getshifter.io/swagger.yaml

### Build SDK

```bash
$ ./bin/generate-sdk.sh
```

### Update docs

```bash
$ git checkout master
$ yarn docs
$ git add ./docs/
$ git commit -m "docs: update docs"
$ git push origin master
```

### Publish SDK to npm

```bash
$ yarn build
$ npm version [patch|minor|major]
$ npm publish .
```