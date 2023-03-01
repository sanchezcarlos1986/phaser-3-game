import { Scene } from "phaser";
import WebFontFile from "../helpers/WebFontFile";

export class IntroStory extends Scene {
  introductionMusic: Phaser.Sound.BaseSound;
  logo: Phaser.GameObjects.Image;
  constructor() {
    super({
      key: "IntroStoryScene",
    });
  }

  init() {
    console.log("IntrStoryScene");
  }

  preload() {
    this.load.addFile(new WebFontFile(this.load, "Press Start 2P"));
    this.load.audio("introductionMusic", ["assets/audio/01 Opening.mp3"]);
    this.load.image("backgroundCity", "assets/image/megaman-city-games.jpg");
  }

  create(): void {
    // FadeIn
    this.cameras.main.fadeIn(1000);

    // Background city image
    this.add.image(this.game.canvas.width / 2, 0, "backgroundCity");

    // Music
    const introductionMusic = this.sound.add("introductionMusic");
    introductionMusic.play();

    // Texts
    const storyTextArray = {
      text: [
        "IN THE YEAR OF 200X,\n\nA SUPER ROBOT NAMED MEGAMAN",
        "WAS CREATED.\n\nDR.LIGHT CREATED MEGAMAN",
        "TO STOP THE EVIL DESIRES\n\nOF DR.WILY.",
        "HOWEVER, AFTER HIS DEFEAT\n\nDR.WILLY CREATED EIGHT",
        "OF HIS OWN ROBOTS\n\nTO COUNTER MEGAMAN.",
      ],
      count: 0,
    };

    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;

    // Rectangle as text background
    const rectangleSize = {
      width: this.game.canvas.width,
      height: 150,
    };
    const rectangle = this.add.rectangle(
      0,
      this.game.canvas.height - rectangleSize.height,
      rectangleSize.width,
      rectangleSize.height,
      0x000000
    );

    rectangle.setOrigin(0);

    const historyText = this.add
      .text(
        screenCenterX,
        this.game.canvas.height - rectangleSize.height / 2,
        storyTextArray.text[0].toUpperCase(),
        {
          color: "white",
          align: "center",
          fontSize: "20px",
          fixedWidth: this.game.canvas.width,
          fontFamily: '"Press Start 2P"',
        }
      )
      .setOrigin(0.5)
      .setAlpha(0);

    // Timeline
    this.tweens.timeline({
      targets: historyText,
      loop: storyTextArray.text.length - 1,
      onLoop() {
        console.log("onLoop", { count: storyTextArray?.count });
        storyTextArray.count++;
        historyText.setText(storyTextArray?.text[storyTextArray?.count]);
      },
      onComplete() {
        rectangle.setAlpha(0);
      },
      tweens: [
        {
          alpha: 1,
          ease: "Power2",
          duration: 1000,
          hold: 3600,
          yoyo: true,
        },
      ],
    });
  }
}
