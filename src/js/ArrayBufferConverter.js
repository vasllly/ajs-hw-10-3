export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint8Array(this.buffer);
    const output = [];
    for (let i = 0; i < bufferView.length; i += 1) {
      output[i] = String.fromCharCode(bufferView[i]);
    }
    return output.join('');
  }
}
