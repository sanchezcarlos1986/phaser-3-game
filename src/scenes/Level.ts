import { Scene } from "phaser";

export class Level extends Scene {
  leftKey: Phaser.Input.Keyboard.Key;
  rightKey: Phaser.Input.Keyboard.Key;
  upKey: Phaser.Input.Keyboard.Key;
  downKey: Phaser.Input.Keyboard.Key;
  cubix: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  tomato: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  constructor() {
    super({
      key: "LevelScene",
    });
  }

  preload() {
    this.load.setPath("assets");
    this.load.image("cubix", "images/cubix.png");

    this.load.atlas(
      "tomato",
      "sprites/tomato.png",
      "sprites/tomato_atlas.json"
    );
    this.load.animation("tomatoAnim", "sprites/tomato_anim.json");
  }

  create(): void {
    //sprites
    this.tomato = this.physics.add
      .sprite(300, 300, "tomato")
      .setScale(4)
      .refreshBody();
    this.tomato.anims.play("tomato_walk");

    this.cubix = this.physics.add
      .image(100, 100, "cubix")
      .setOrigin(0.5)
      .refreshBody();

    this.cubix.body.setCollideWorldBounds(true);
    this.tomato.body.setCollideWorldBounds(true);

    // this.add.tween({
    //   targets: [this.cubix],
    //   ease: "Bounce",
    //   y: 600,
    // });

    this.physics.add.collider(this.cubix, this.tomato);

    this.cubix.body.setBounceY(0.5);

    // text
    // this.add
    //   .text(400, 400, "TEXTO DE MEGA MAN", {
    //     color: "white",
    //     align: "center",
    //     fontSize: "20px",
    //     fontFamily: '"Press Start 2P"',
    //   })
    //   .setOrigin(0.5);

    const keyCodes = Phaser.Input.Keyboard.KeyCodes;

    this.leftKey = this.input.keyboard.addKey(keyCodes.LEFT);
    this.rightKey = this.input.keyboard.addKey(keyCodes.RIGHT);
    this.upKey = this.input.keyboard.addKey(keyCodes.UP);
    this.downKey = this.input.keyboard.addKey(keyCodes.DOWN);

    this.leftKey.on("down", () => console.log("left"));
    this.rightKey.on("down", () => {
      this.cubix.body.setAcceleration(800, 0);
    });
    this.upKey.on("down", () => console.log("up"));
    this.downKey.on("down", () => console.log("down"));
  }

  update() {
    // if (this.leftKey.isDown) {
    //   this.cubix.setScale(-1, 1);
    //   this.cubix.x = this.cubix.x - 8;
    // }
    // if (this.rightKey.isDown) {
    //   this.cubix.setScale(1);
    //   this.cubix.x = this.cubix.x + 8;
    // }
    // if (this.upKey.isDown) {
    //   this.cubix.y = this.cubix.y - 8;
    // }
    // if (this.downKey.isDown) {
    //   this.cubix.y = this.cubix.y + 8;
    // }
  }
}
