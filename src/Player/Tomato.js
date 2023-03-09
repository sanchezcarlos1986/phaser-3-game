import Phaser from "phaser";

export class Tomato extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "tomato");

    this.scene = config.scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);

    this.setScale(2.4);
    this.body.setSize(14, 20);
    this.body.setOffset(2, 5);
    this.body.setBounce(0.7);

    this.jumping = false;
  }
}
