interface User {
  _username: string;
  _password: string;
  age?: number;
  sex?: string;
}

export class UserContorl implements User {
  _username: string;
  _password: string;
  age?: number;
  sex?: string;

  constructor(username: string, password: string, age: number, sex: string) {
    this._username = username;
    this._password = password;
    this.age = age;
    this.sex = sex;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    if (!value) return;
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    if (!value) return;
    this._password = value;
  }

  userInfo() {
    let username = this.username;
    let password = this.password;
    let age = this.age;
    let sex = this.sex;
    return { username, password, age, sex };
  }
}
