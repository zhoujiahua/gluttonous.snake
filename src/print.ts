// import QRCode from "qrcodejs2";
import { Home, QRCode } from "./controller/index";
let hm = new Home("https://api.panghu.org", "Hello Jerry");
console.log(hm.getBaseUrl(), hm.accessToken());
const qr = new QRCode("qrcode");
qr.createQRCode();
console.log(qr);
