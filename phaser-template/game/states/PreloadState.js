import '~/phaser-template/game/PhaserBridge'

class PreloadState extends Phaser.State {

  preload() {

  }

  create() {
    this.state.start('MainMenu');
  }

}

export default PreloadState;