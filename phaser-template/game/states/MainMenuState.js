import '~/phaser-template/game/PhaserBridge'

class MainMenuState extends Phaser.State {

  create() {
    this.spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  update() {
    if (this.spacebar.isDown) {
      this.StartGame();
    }
  }

  StartGame() {
    this.state.start('Game');
  }

}

export default MainMenuState;