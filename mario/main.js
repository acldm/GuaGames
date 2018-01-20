const e = sel => document.querySelector(sel)

const log = console.log.bind(console);

let ajax = request => {
  let r = new XMLHttpRequest();
  r.open(request.method, request.url, true);
  r.responseType = "arraybuffer"
  r.onreadystatechange = event => {
    if (r.readyState == 4) {
      request.callback(r.response)
    }
  }
  r.send()
}

const colors = [
  'white',
  'red',
  'blue',
  'black'
]

const drawBlock = (x, y, context, data, pixelWidth) => {
  let w = pixelWidth
  let h = pixelWidth
  for (let i=0; i<8; i++) {
    let p1 = data[i]
    let p2 = data[i + 8]
    for (let j=0; j<8; j++) {
      let c1 = (p1 >> (7 - j)) & 1
      let c2 = (p2 >> (7 - j)) & 1
      let pixel = (c1 << 1) + c2
      let px = x + j * w
      let py = y + i * h
      let color = colors[pixel]
      context.fillStyle = color
      context.fillRect(px, py, w, h)
    }
  }
}

const drawNes = bytes => {
  let canvas = e("#id-canvas")
  let context = canvas.getContext("2d")

  let blockSize = 8
  let blockWidth = 8
  let pixelWidth = 10
  let numberofBytesPerBlock = 16

  for (let i=0; i<blockSize; i++) {
    for (let j=0; j<blockSize; j++) {
      let x = j * pixelWidth * blockWidth
      let y = i * pixelWidth * blockWidth
      let index = (i * 8 + j) * numberofBytesPerBlock;
      drawBlock(x, y, context, bytes.slice(index), pixelWidth)
    }
  }
}

const __main__ = () => {
  let request = {
    method: "get",
    url: "mario.nes",
    callback(r) {
      let bytes = new Uint8Array(r)
      drawNes(bytes)
      //log('bytes', bytes)
    },
  }
  ajax(request)
}

__main__()
