import { UserContorl } from "./controller/index";
const uc = new UserContorl("Tom", "123456", 20, "man");
console.log(uc.userInfo());
