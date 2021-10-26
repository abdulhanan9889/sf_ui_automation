import {cliUsername,cliPassword,cliInstanceUrl,cliLoginUrl} from "../../stepdefinitions/authFlow.steps"

class Connection {
  username: string;
  password: string;
  loginUrl:string;
  instanceUrl:string;
  constructor() {
    this.username = cliUsername
    this.password = cliPassword
    this.loginUrl = cliLoginUrl
    this.instanceUrl = cliInstanceUrl
  }
}

export default Connection;
