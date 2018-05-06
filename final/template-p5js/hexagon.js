class Hexagon
{
  constructor()
  {
    this.angle = 0;
  }

  draw()
  {
    noFill();
    stroke(0);

    push();
    translate(height/2, height/2);
    scale(0.75);
    rotate(this.angle*PI/180);
    for(var i=0; i<18; i++)
    {
      push();
        rotate(i*TWO_PI/12);
        if(i%2 == 1)
        {
          line(0, 0, 220, 0);
          push();
            translate(220, 0);
            rotate(75*PI/180);
            line(0, 0, 155, 0);
            rotate(-150*PI/180);
            line(0, 0, 155, 0);
            translate(155, 0);
            rotate(165*PI/180);
            line(0, 0, 300, 0);
          pop();
        }
        else
          line(0, 0, 300, 0);
      pop();
    }
    pop();
  }
}
