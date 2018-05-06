class Button
{
  constructor()
  {
    this.valLast = this.val = 0;
    this.x = width-120;
    this.y = height/2+140;
  }

  setVal(n)
  {
    this.val = n;
    if(this.valLast != this.val)
    {
      doAnimation = !doAnimation;
      this.valLast = this.val;
    }
  }

  draw()
  {
    push();
    fill(0);
    translate(this.x, this.y);
    text("Button", -15, 40);
    scale(0.75);
    noFill();
    stroke(0);
    for(var i=0; i<3; i++)
    {
      line(0, 0, 0, -150);
      line(0, -150, 128, 75);
      rotate(TWO_PI/3);
    }
    //noStroke();

    fill(this.val*255);   // fill with 0 or 255
    ellipse(0, 0, 40, 40);
    pop();
  }
}
