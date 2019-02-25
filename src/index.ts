export default class RobinhoodClient {
  private property: string
  constructor(value: string) {
    this.property = value
  }
  public do = () => {
    console.log(this.property)
  }
}
