import * as _ from 'lodash'
import { validateConfiguration } from '../utils'
import { SecuredClient } from './SecuredClient'
import { UnsecuredClient } from './UnsecuredClient'

export class RobinhoodClient {
  private config: IRobinhoodClientConfig
  private securedClient: SecuredClient
  private unsecuredClient: UnsecuredClient

  constructor(config: IRobinhoodClientConfig) {
    validateConfiguration(config)
    this.config = config
    this.securedClient = new SecuredClient(config.username, config.password)
    this.unsecuredClient = new UnsecuredClient()
  }

  public async getAccountHoldings(): Promise<any> {
    return this.securedClient.getAccountHoldings()
  }

  public async searchForTicker(): Promise<any> {
    return this.unsecuredClient.searchForTicker()
  }
}
