import { Auth } from "./base";

export class Home extends Auth {
  title?: string;
  constructor(baseUrl: string, title: string) {
    super(baseUrl);
    this.title = title;
  }
  getBaseUrl(): string {
    return this.baseUrl;
  }
}
