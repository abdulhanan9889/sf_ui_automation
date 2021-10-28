
var config = require("../../../config/config")[process.env.NODE_ENV || "uatCred"]
class Connection {
  username: string;  
  password: string;
  loginUrl:string;
  instanceUrl:string;
  constructor() {
    this.username = config.username
    this.password =  config.password
    this.loginUrl =  config.loginUrl
    this.instanceUrl = config.instanceUrl
  }
}
let c = new Connection()
console.log(c.password)
export default Connection;
