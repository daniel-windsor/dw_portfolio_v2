import React from "react"
import Phaser from "phaser"
import flares from "../game/flares.png"
import flaresJson from "../game/flares.json"

class Game extends React.Component {
  componentDidMount() {
    var graphics

    const config = {
      type: Phaser.WEBGL,
      width: "100%",
      height: window.innerHeight,
      transparent: true,
      scene: {
        preload: function () {
          this.load.atlas("flares", flares, flaresJson)
        },
        create: function () {
          var emitZone = new Phaser.Geom.Rectangle(
            0,
            0,
            window.innerWidth,
            window.innerHeight
          )

          var particles = this.add.particles("flares")

          var emitter = particles.createEmitter({
            frame: ["blue", "white"],
            speed: { min: -20, max: 20 },
            frequency: 1000,
            lifespan: { min: 5000, max: 10000 },
            quantity: { min: 1, max: 5 },
            scale: { min: 0.1, max: 0.4 },
            blendMode: "ADD",
            emitZone: { source: emitZone },
            bounds: {x: 0, y: 0, w: "100%", h: window.innerHeight - 10},
            collideBottom: true,
            bounce: 0.9
          })

          emitter.setAlpha(function (p, k, t) {
            return 1 - 2 * Math.abs(t - 0.5)
          })

          emitter.start()

          graphics = this.add.graphics()
        },
        update: function () {
          graphics.clear()
        },
      },
    }

    new Phaser.Game(config)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return <div id="phaser-game" />
  }
}

export default Game
