export class SecuredClient {
  private username: string
  private password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  private createAuthOptions(): any {}

  private async makeAuthRequest(method: string, endpoint: string, opts: any): Promise<any> {}

  public async getAccountHoldings(): Promise<any> {}
}
