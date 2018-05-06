var enableGammaCorrection = false;

var gamma = [
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,
    1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2,  2,
    2,  3,  3,  3,  3,  3,  3,  3,  4,  4,  4,  4,  4,  5,  5,  5,
    5,  6,  6,  6,  6,  7,  7,  7,  7,  8,  8,  8,  9,  9,  9, 10,
   10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16,
   17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 24, 24, 25,
   25, 26, 27, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 35, 35, 36,
   37, 38, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50,
   51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68,
   69, 70, 72, 73, 74, 75, 77, 78, 79, 81, 82, 83, 85, 86, 87, 89,
   90, 92, 93, 95, 96, 98, 99,101,102,104,105,107,109,110,112,114,
  115,117,119,120,122,124,126,127,129,131,133,135,137,138,140,142,
  144,146,148,150,152,154,156,158,160,162,164,167,169,171,173,175,
  177,180,182,184,186,189,191,193,196,198,200,203,205,208,210,213,
  215,218,220,223,225,228,231,233,236,239,241,244,247,249,252,255
];

function wheelColor(wheelPos)
{
  wheelPos = 255 - wheelPos;
  if(wheelPos < 85) {
    return hexColor(255 - wheelPos * 3, 0, wheelPos * 3);
  }
  if(wheelPos < 170) {
    wheelPos -= 85;
    return hexColor(0, wheelPos * 3, 255 - wheelPos * 3);
  }
  wheelPos -= 170;
  return hexColor(wheelPos * 3, 255 - wheelPos * 3, 0);
}

function rainbowColor(i, rainbowPos)
{
  return wheelColor(((i * 256 / pix.length) + rainbowPos) & 255);
}


class Pixel
{
  constructor()
  {
    this.r = this.g = this.b = 0;
    this.ledr = this.ledg = this.ledb = 0;
    this.rf = this.gf = this.bf = 0;
    this.hexColor = "#000000";
    this.isFading = false;
  }

  setHexColor(c)
  {
    this.r = red(c);
    this.g = green(c);
    this.b = blue(c);
    this.ledr = gamma[this.r];
    this.ledg = gamma[this.g];
    this.ledb = gamma[this.b];
    this.hexColor = c;
    this.ledColor = hexColor(this.ledr, this.ledg, this.ledb);
  }

  setColor(r, g, b)
  {
    this.r = r;
    this.g = g;
    this.b = b;
    this.ledr = gamma[r];
    this.ledg = gamma[g];
    this.ledb = gamma[b];
    this.hexColor = hexColor(this.r, this.g, this.b);
    this.ledColor = hexColor(this.ledr, this.ledg, this.ledb);
  }

  fadeColor(r, g, b)
  {
    this.rf = r;
    this.gf = g;
    this.bf = b;
    this.isFading = true;
  }

  fadeHexColor(c)
  {
    this.rf = red(c);
    this.gf = green(c);
    this.bf = blue(c);
    this.isFading = true;
  }

  updateColor()
  {
    if(this.isFading)
    {
      var newr, newg, newb;
      newr = int(this.r + (this.rf - this.r)/8);
      newg = int(this.g + (this.gf - this.g)/8);
      newb = int(this.b + (this.bf - this.b)/8);

      if(newr == this.r && newg == this.g && newb == this.b)
        this.isFading = false;
      else
        this.setColor(newr, newg, newb);
    }
  }
}
