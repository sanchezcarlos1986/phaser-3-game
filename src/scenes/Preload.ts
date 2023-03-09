import { Scene } from "phaser";
import WebFontFile from "../helpers/WebFontFile";

export class Preload extends Scene {
  constructor() {
    super({
      key: "PreloadScene",
    });
  }

  preload() {
    this.load.setPath("assets");
    this.load.image("background", "background.png");
    this.load.image("wall", "wall.png");
    this.load.image("floor", "floor.png");

    this.load.audio("bongo", "bongo.mp3");
    this.load.audio("pop", "pop.mp3");
    this.load.audio("draw", "draw.mp3");

    this.load;

    this.load.atlas(
      "tomato",
      "sprites/tomato.png",
      "sprites/tomato_atlas.json"
    );
    this.load.animation("tomatoAnim", "sprites/tomato_anim.json");

    this.load.addFile(new WebFontFile(this.load, "Press Start 2P"));

    this.load.on("complete", () => {
      this.scene.start("LevelScene");
    });
  }
}
