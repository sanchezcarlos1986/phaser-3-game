import { Scene } from "phaser";

export class Level extends Scene {
  cubix: Phaser.GameObjects.Image;
  leftKey: Phaser.Input.Keyboard.Key;
  rightKey: Phaser.Input.Keyboard.Key;
  upKey: Phaser.Input.Keyboard.Key;
  downKey: Phaser.Input.Keyboard.Key;
  constructor() {
    super({
      key: "LevelScene",
    });
  }

  preload() {
    this.load.setPath("assets");
    this.load.image("cubix", "images/cubix.png");
  }

  create(): void {
    this.cubix = this.add.image(100, 100, "cubix").setOrigin(0.5);
    const keyCodes = Phaser.Input.Keyboard.KeyCodes;

    this.leftKey = this.input.keyboard.addKey(keyCodes.LEFT);
    this.rightKey = this.input.keyboard.addKey(keyCodes.RIGHT);
    this.upKey = this.input.keyboard.addKey(keyCodes.UP);
    this.downKey = this.input.keyboard.addKey(keyCodes.DOWN);

    this.leftKey.on("down", () => {
      console.log("left");
    });

    this.rightKey.on("down", () => {
      console.log("right");
    });

    this.upKey.on("down", () => {
      console.log("up");
    });

    this.downKey.on("down", () => {
      console.log("down");
    });
  }

  update() {
    if (this.leftKey.isDown) {
      this.cubix.setScale(-1, 1);
      this.cubix.x--;
    }

    if (this.rightKey.isDown) {
      this.cubix.setScale(1, 1);
      this.cubix.x++;
    }
  }
}
