import '~/phaser-template/game/PhaserBridge'
import BootState from '~/phaser-template/game/states/BootState'
import PreloadState from '~/phaser-template/game/states/PreloadState'
import MainMenuState from '~/phaser-template/game/states/MainMenuState'
import GameState from '~/phaser-template/game/states/GameState'

class Game extends Phaser.Game {

  constructor(settings) {
    super(settings.width, settings.height, Phaser.AUTO, settings.containerId, null);

    this.$settings = settings;

    this.state.add('Boot', BootState, false);
    this.state.add('Preload', PreloadState, false);
    this.state.add('MainMenu', MainMenuState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }

}

export default Game;