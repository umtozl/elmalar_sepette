input.onButtonPressed(Button.A, function () {
    sepet.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sepet.change(LedSpriteProperty.X, 1)
})
let hak = 0
let sepet: game.LedSprite = null
let elma = game.createSprite(randint(0, 4), 0)
sepet = game.createSprite(2, 4)
let oyun = true
basic.forever(function () {
    while (oyun == true) {
        elma.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (elma.get(LedSpriteProperty.Y) == 4) {
            if (elma.isTouching(sepet)) {
                game.addScore(10)
            } else {
                hak += 1
                game.setScore(game.score() - -10)
            }
            if (hak == 0) {
                game.gameOver()
            }
            elma.set(LedSpriteProperty.X, randint(0, 4))
            elma.set(LedSpriteProperty.Y, 0)
        }
    }
})
