import { Scene } from "phaser";
import { Tomato } from "../Player/Tomato.js";

export class Level extends Scene {
  wall_floor: any;
  tomato: Tomato;
  constructor() {
    super({
      key: "LevelScene",
    });
  }

  create(): void {
    // BACKGROUND
    this.add.image(0, 0, "background").setOrigin(0);

    // WALL & FLOOR STATIC GROUP
    this.wall_floor = this.physics.add.staticGroup();

    this.wall_floor.create(0, 0, "wall").setOrigin(0);
    this.wall_floor
      .create(this.scale.width, 0, "wall")
      .setOrigin(1, 0)
      .setFlipX(true);

    this.wall_floor.create(0, this.scale.height, "floor").setOrigin(0, 1);

    this.wall_floor.refresh();
    this.wall_floor.getChildren()[2].setOffset(0, 15);

    // TOMATO
    // this.tomato = this.physics.add.sprite(100, 100, "tomato");
    this.tomato = new Tomato({
      scene: this,
      x: 200,
      y: 200,
    });

    this.physics.add.collider([this.tomato], this.wall_floor);
  }
}
