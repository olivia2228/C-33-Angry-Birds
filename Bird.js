class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = []
    this.smokeImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.velocity.x > 8 && this.body.position.x > 210) {
      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position)
    }
    for (var i = 0; i < this.trajectory.length; i = i + 1) {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1])
    }
    super.display();
  }
}
