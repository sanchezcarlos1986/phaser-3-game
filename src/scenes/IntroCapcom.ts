import { Scene } from "phaser";
import WebFontFile from "../helpers/WebFontFile";

export class IntroCapcom extends Scene {
  constructor() {
    super({
      key: "IntroCapcomScene",
    });
  }

  preload() {
    this.load.addFile(new WebFontFile(this.load, "Press Start 2P"));
  }

  create(): void {
    const capcomLtdText =
      "© 1988 CAPCOM CO. LTD\n\nTM AND © 1989 CAPCOM U.S.A., INC.\n\nLICENCED BY\n\nNINTENDO OF AMERICA. INC.";

    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.add
      .text(screenCenterX, screenCenterY, capcomLtdText, {
        color: "white",
        align: "center",
        fontSize: "20px",
        fontFamily: '"Press Start 2P"',
      })
      .setOrigin(0.5);

    setTimeout(() => {
      console.log("fadeOut");

      this.cameras.main.fadeOut(1000);
    }, 5000);

    setTimeout(() => {
      this.scene.start("IntroStoryScene");
    }, 6000);
  }
}
