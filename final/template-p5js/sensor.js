class Sensor
{
  constructor()
  {
    this.valLast = this.val = 0;
    this.x = width-120;
    this.y = 100;
  }

  setVal(n)
  {
    this.val = n;
  }

  draw()
  {
    push();
    fill(0);
    translate(this.x, this.y);
    text("Sensor", -20, -30);
    scale(0.75);
    noFill();
    stroke(0);
    for(var i=0; i<3; i++)
    {
      line(0, 0, 0, 150);
      line(0, 150, -132, -75);
      rotate(TWO_PI/3);
    }
    //noStroke();
    fill(255-this.val);
    ellipse(0, 0, 40, 40);
    pop();
  }
}
