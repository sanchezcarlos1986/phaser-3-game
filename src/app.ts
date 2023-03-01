import { IntroCapcom } from "./scenes/IntroCapcom";
import { IntroStory } from "./scenes/IntroStory";

const config: Phaser.Types.Core.GameConfig = {
  title: "Demo Game",

  scene: [IntroCapcom, IntroStory],
  backgroundColor: "#000",
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-container",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    max: {
      width: 800,
      height: 600,
    },
  },
};

window.addEventListener("load", () => {
  window["game"] = new Phaser.Game(config);
});
