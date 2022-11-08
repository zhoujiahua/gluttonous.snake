interface Base {
  baseUrl: string;
  getBaseUrl: () => string;
  accessToken: () => string;
}

export abstract class Auth implements Base {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  abstract getBaseUrl(): string;
  accessToken(): string {
    let token = "DG6vnwPfdByXEam3";
    return token;
  }
}
