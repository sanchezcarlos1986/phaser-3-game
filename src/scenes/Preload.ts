import { Scene } from "phaser";
import WebFontFile from "../helpers/WebFontFile";

export class Preload extends Scene {
  constructor() {
    super({
      key: "PreloadScene",
    });
  }

  preload() {
    this.load.addFile(new WebFontFile(this.load, "Press Start 2P"));
  }

  create(): void {
    this.scene.start("LevelScene");
  }
}
