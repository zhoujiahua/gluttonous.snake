import { UserContorl } from "./controller/index";
const uc = new UserContorl("jerry", "123456", 18, "man");
console.log(uc.userInfo());