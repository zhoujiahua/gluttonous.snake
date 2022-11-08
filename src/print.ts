import { Home } from "./controller/index";
let hm = new Home("https://api.panghu.org", "Hello Jerry");
console.log(hm.getBaseUrl(), hm.accessToken());
