import React from "react"
import Phaser from "phaser"
import flares from "../game/flares.png"
import flaresJson from "../game/flares.json"

class Game extends React.Component {
  componentDidMount() {
    var graphics
    var cursor

    const config = {
      type: Phaser.WEBGL,
      width: window.innerWidth,
      height: window.innerHeight,
      // transparent: true,
      background: "#000",
      scene: {
        preload: function () {
          this.load.atlas(
            "flares",
            flares,
            flaresJson
          )
        },
        create: function () {
          cursor = new Phaser.Geom.Circle(0, 0, 26)
          var emitZone = new Phaser.Geom.Rectangle(
            0,
            0,
            window.innerWidth,
            window.innerHeight
          )

          var particles = this.add.particles("flares")

          var emitter = particles.createEmitter({
            frame: ["red", "green", "blue"],
            speed: { min: -20, max: 20 },
            frequency: 1000,
            lifespan: 10000,
            quantity: 5,
            scale: { min: 0.1, max: 0.4 },
            blendMode: "ADD",
            emitZone: { source: emitZone },
            deathZone: { type: "onEnter", source: cursor },
            on: false
          })

          emitter.setAlpha(function (p, k, t) {
            return 1 - 2 * Math.abs(t - 0.5);
          })

          emitter.start()

          graphics = this.add.graphics()

          this.input.on("pointermove", pointer => {
            cursor.x = pointer.x
            cursor.y = pointer.y
          })
        },
        update: function () {
          graphics.clear()
          // graphics.lineStyle(1, 0x00ff00, 1)
          graphics.strokeCircleShape(cursor)
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
