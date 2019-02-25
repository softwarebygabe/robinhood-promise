import * as _ from 'lodash'

type SecretGetterP = () => Promise<string>
type SecretGetterFn = SecretGetterP

interface IRobinhoodClientConfig {
  username: string | SecretGetterFn
  password: string | SecretGetterFn
}

function validateConfiguration(config: IRobinhoodClientConfig): void {
  // TODO - validate the config
  return
}

export class RobinhoodClient {
  private config: IRobinhoodClientConfig

  constructor(config: IRobinhoodClientConfig) {
    validateConfiguration(config)
    this.config = config
  }

  private async getCredentials(): Promise<{ username: string; password: string }> {
    const creds = {
      username: '',
      password: '',
    }
    if (_.isString(this.config.username)) {
      creds.username = this.config.username as string
    } else {
      const getterFn = this.config.username as SecretGetterP
      creds.username = await getterFn()
    }
    if (_.isString(this.config.password)) {
      creds.password = this.config.password as string
    } else {
      const getterFn = this.config.password as SecretGetterP
      creds.password = await getterFn()
    }
    return creds
  }

  public async printCredentials(): Promise<void> {
    const credentials = await this.getCredentials()
    console.log(JSON.stringify(credentials, null, 2))
  }
}
