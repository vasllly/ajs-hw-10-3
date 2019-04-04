export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint8Array(this.buffer);
    return [...bufferView].map(char => String.fromCharCode(char)).join('');
  }
}
