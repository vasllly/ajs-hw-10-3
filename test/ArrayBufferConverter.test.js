import ArrayBufferConverter from '../src/js/ArrayBufferConverter';

test('validate is "Vasia"', () => {
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  const buffer = new Uint16Array(getBuffer());
  const converter = new ArrayBufferConverter();
  converter.load(buffer);

  const received = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(received).toBe(expected);
});
