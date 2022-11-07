import { UserContorl } from "./controller/index";
const uc = new UserContorl("jerry", "123456", 18, "man");
uc.username = "Tom";
uc.password = "20";
console.log(uc.userInfo());
