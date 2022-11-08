import QRC from "qrcodejs2";

interface QRCOptions {
  text?: string;
  width?: number;
  height?: number;
  colorDark?: string;
  correctLevel?: any;
  colorLight?: string;
}

export class QRCode {
  options: QRCOptions;
  element: HTMLElement;
  private level: string[];

  constructor(el: string, options: QRCOptions = {}) {
    this.element = document.getElementById(el)!;
    this.level = ["L", "M", "Q", "H"];
    this.options = options;
  }

  /**
   * @Description 容错级别
   *（1）QRCode.CorrectLevel.L
   *（2）QRCode.CorrectLevel.M
   *（3）QRCode.CorrectLevel.Q
   *（4）QRCode.CorrectLevel.H
   * @Return void
   */
  private setOptions(ops: QRCOptions = {}): QRCOptions {
    let element = this.element;
    let clv = ops.correctLevel;
    ops.colorDark = ops.colorDark || "#000000";
    ops.text = ops.text || window.location.href;
    ops.colorLight = ops.colorLight || "#ffffff";
    ops.width = ops.width || element.offsetWidth;
    ops.height = ops.height || element.offsetHeight;
    if (clv && this.level.includes(clv)) {
      ops.correctLevel = QRC.CorrectLevel[clv];
    } else {
      ops.correctLevel = QRC.CorrectLevel.H;
    }
    return Object.assign(this.options, ops);
  }

  createQRCode(ops: QRCOptions = {}) {
    let element = this.element;
    let options = this.setOptions(ops);
    return new QRC(element, options);
  }
}
