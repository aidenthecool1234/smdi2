namespace SpriteKind {
    export const coolpipi = SpriteKind.create()
    export const Layer = SpriteKind.create()
    export const ScoreParticle = SpriteKind.create()
    export const Hud = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    timer.after(20, function () {
        if (sprites.readDataString(sprite, "type") == "G") {
            animation.runImageAnimation(
            sprite,
            [img`
                . . . . . . e e e e . . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . e e e e e e e e . . . . 
                . . . e e e e e e e e e e . . . 
                . . e f f e e e e e e f f e . . 
                . e e e d f e e e e f d e e e . 
                . e e e d f f f f f f d e e e . 
                e e e e d f d e e d f d e e e e 
                e e e e d d d e e d d d e e e e 
                e e e e e e e e e e e e e e e e 
                . e e e e d d d d d d e e e e . 
                . . . . d d d d d d d d . . . . 
                . . . . d d d d d d d d f f . . 
                . . . f f d d d d d f f f f f . 
                . . . f f f d d d f f f f f f . 
                . . . . f f f . . f f f f f . . 
                `,img`
                . . . . . . e e e e . . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . e e e e e e e e . . . . 
                . . . e e e e e e e e e e . . . 
                . . e f f e e e e e e f f e . . 
                . e e e d f e e e e f d e e e . 
                . e e e d f f f f f f d e e e . 
                e e e e d f d e e d f d e e e e 
                e e e e d d d e e d d d e e e e 
                e e e e e e e e e e e e e e e e 
                . e e e e d d d d d d e e e e . 
                . . . . d d d d d d d d . . . . 
                . . f f d d d d d d d d . . . . 
                . f f f f f d d d d d f f . . . 
                . f f f f f f d d d f f f . . . 
                . . f f f f f . . f f f . . . . 
                `],
            150,
            true
            )
            sprite.vx = -30
            sprite.ay = 1000
        }
    })
})
function initiateBig () {
    characterAnimations.setCharacterAnimationsEnabled(mSprBig, false)
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        ................
        ................
        .......22222....
        .....2222224....
        ....22222244....
        ....22222222222.
        ....ccc44c444...
        ...c44c44cc4444.
        ...c44cc44444444
        ..cc44cc444c4444
        ..cc44444cccccc.
        ...cc44444ccccc.
        .....c44444444..
        ....c222444.....
        ...c2ccc2c......
        ..c22cccc2c.....
        ..c22ccccc2244..
        .cc22ccccccc4444
        .c2222cccccc4444
        .c2222ccccccc444
        ..22222cccccc444
        ..2222222ccc2...
        ..22222222222...
        ..2222222222c...
        cccc2222222c22..
        cccc22222cc222..
        cccc2222c2222...
        cccc222..2222...
        cccc.....cccc...
        cc.......cccc...
        c........cccccc.
        .........cccccc.
        `,img`
        ................
        ......22222.....
        ....2222224.....
        ...22222244.....
        ...22222222222..
        ...ccc44c444....
        ..c44c44cc4444..
        ..c44cc44444444.
        .cc44cc444c4444.
        .cc44444cccccc..
        .ccc44444ccccc..
        ...cc44444444...
        ....222244......
        ...c2cc22.......
        ..c2cccc22......
        ..c2cccc22......
        ..c2cccc222.....
        ..c2ccccc44.....
        ..c2cccc4444....
        ..22cccc44442...
        ..222ccc444422..
        ..2222cc444222..
        ..222222cc2222..
        ...22222ccc22...
        ....222cccccc...
        ....22cccccc....
        .....22cccc.....
        .....c222ccc....
        .....cccc.cc....
        ....ccccc.......
        ....ccccccc.....
        ......ccccc.....
        `,img`
        ......22222.....
        ....2222224.....
        ...22222244.....
        ...22222222222..
        ...ccc44c444....
        ..c44c44cc4444..
        ..c44cc44444444.
        .cc44cc444c4444.
        .cc44444cccccc..
        ..cc44444ccccc..
        ...cc44444444...
        .....ccc44......
        ....2222cc2...4.
        ...cccc22cc2.444
        ..cccccc22c2c444
        .ccccccc22cc2444
        .ccccccc22cc2c4c
        .cccccc222cc2cc.
        cccccc22242c4c..
        cccc222222222...
        4444422222222...
        4444422222222..c
        4444222222222.cc
        .4442222222ccccc
        ...2c222222ccccc
        ..c22c22222ccccc
        ccc222cc222ccccc
        cccc2222...ccccc
        ccccc2..........
        .ccc............
        .ccc............
        ..ccc...........
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        ......22222.....
        ....2222224.....
        ...22222244.....
        ...22222222222..
        ...ccc44c444....
        ..c44c44cc4444..
        ..c44cc44444444.
        .cc44cc444c4444.
        .cc44444cccccc..
        .ccc44444ccccc..
        ...cc44444444...
        ....c44444c.....
        ....c2cccc2c....
        ...cc2cccc2cc...
        ..ccc2cccc2ccc..
        .cccc2cccc2cccc.
        .ccc22cccc22ccc.
        cccc22cccc22cccc
        cccc22222222cccc
        cccc24222242cccc
        4444222222224444
        4444222222224444
        .44422222222444.
        .44222222222244.
        ..222222222222..
        .222222..222222.
        .22222....22222.
        .22222....22222.
        ..cccc....cccc..
        ..cccc....cccc..
        cccccc....cccccc
        cccccc....cccccc
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        ................
        ................
        ....22222.......
        ....4222222.....
        ....44222222....
        .22222222222....
        ...444c44ccc....
        .4444cc44c44c...
        44444444cc44c...
        4444c444cc44cc..
        .cccccc44444cc..
        .ccccc44444cc...
        ..44444444c.....
        .....444222c....
        ......c2ccc2c...
        .....c2cccc22c..
        ..4422ccccc22c..
        4444ccccccc22cc.
        4444cccccc2222c.
        444ccccccc2222c.
        444cccccc22222..
        ...2ccc2222222..
        ...22222222222..
        ...c2222222222..
        ..22c2222222cccc
        ..222cc22222cccc
        ...2222c2222cccc
        ...2222..222cccc
        ...cccc.....cccc
        ...cccc.......cc
        .cccccc........c
        .cccccc.........
        `,img`
        ................
        .....22222......
        .....4222222....
        .....44222222...
        ..22222222222...
        ....444c44ccc...
        ..4444cc44c44c..
        .44444444cc44c..
        .4444c444cc44cc.
        ..cccccc44444cc.
        ..ccccc44444ccc.
        ...44444444cc...
        ......442222....
        .......22cc2c...
        ......22cccc2c..
        ......22cccc2c..
        .....222cccc2c..
        .....44ccccc2c..
        ....4444cccc2c..
        ...24444cccc22..
        ..224444ccc222..
        ..222444cc2222..
        ..2222cc222222..
        ...22ccc22222...
        ...cccccc222....
        ....cccccc22....
        .....cccc22.....
        ....ccc222c.....
        ....cc.cccc.....
        .......ccccc....
        .....ccccccc....
        .....ccccc......
        `,img`
        .....22222......
        .....4222222....
        .....44222222...
        ..22222222222...
        ....444c44ccc...
        ..4444cc44c44c..
        .44444444cc44c..
        .4444c444cc44cc.
        ..cccccc44444cc.
        ..ccccc44444cc..
        ...44444444cc...
        ......44ccc.....
        .4...2cc2222....
        444.2cc22cccc...
        444c2c22cccccc..
        4442cc22ccccccc.
        c4c2cc22ccccccc.
        .cc2cc222cccccc.
        ..c4c24222cccccc
        ...222222222cccc
        ...2222222244444
        c..2222222244444
        cc.2222222224444
        ccccc2222222444.
        ccccc222222c2...
        ccccc22222c22c..
        ccccc222cc222ccc
        ccccc...2222cccc
        ..........2ccccc
        ............ccc.
        ............ccc.
        ...........ccc..
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        .....22222......
        .....4222222....
        .....44222222...
        ..22222222222...
        ....444c44ccc...
        ..4444cc44c44c..
        .44444444cc44c..
        .4444c444cc44cc.
        ..cccccc44444cc.
        ..ccccc44444ccc.
        ...44444444cc...
        .....c44444c....
        ....c2cccc2c....
        ...cc2cccc2cc...
        ..ccc2cccc2ccc..
        .cccc2cccc2cccc.
        .ccc22cccc22ccc.
        cccc22cccc22cccc
        cccc22222222cccc
        cccc24222242cccc
        4444222222224444
        4444222222224444
        .44422222222444.
        .44222222222244.
        ..222222222222..
        .222222..222222.
        .22222....22222.
        .22222....22222.
        ..cccc....cccc..
        ..cccc....cccc..
        cccccc....cccccc
        cccccc....cccccc
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        ............444.
        ...........44c44
        ......2222244cc4
        ....222222244444
        ...22222222ccccc
        ...22222222222cc
        ...ccc44c444cccc
        ..c44c44c44444cc
        ..c44cc44444444c
        ..c44cc444c4444c
        .cc44444ccccccc.
        .cccc4444cccc4c.
        ...cc44444444cc.
        ....2222cc2cccc.
        .cccccc22c2ccc..
        cccccccc2cc2cc..
        cccccccc22c2c...
        cc44cccc22cc2...
        c4444cc2222c4...
        44444c2224222...
        4444422222222...
        4.44222222222..c
        .442222222222.cc
        ...222222222cccc
        ...c22222222cccc
        ccc2cc222222cccc
        ccc222cc2222cccc
        ccc22222..22cccc
        ccc22222........
        ccc2222.........
        cc..............
        c...............
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        .444............
        44c44...........
        4cc4422222......
        444442222222....
        ccccc22222222...
        cc22222222222...
        cccc444c44ccc...
        cc44444c44c44c..
        c44444444cc44c..
        c4444c444cc44c..
        .ccccccc44444cc.
        .c4cccc4444cccc.
        .cc44444444cc...
        .cccc2cc2222....
        ..ccc2c22cccccc.
        ..cc2cc2cccccccc
        ...c2c22cccccccc
        ...2cc22cccc44cc
        ...4c2222cc4444c
        ...2224222c44444
        ...2222222244444
        c..22222222244.4
        cc.222222222244.
        cccc222222222...
        cccc22222222c...
        cccc222222cc2ccc
        cccc2222cc222ccc
        cccc22..22222ccc
        ........22222ccc
        .........2222ccc
        ..............cc
        ...............c
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        ......2222222...
        ..cc222222244...
        .ccc22222224....
        .44cc44c222222..
        4444c44c44c4422.
        4444c44c44cc4...
        44c42444c444444.
        4c4c2244444c4444
        44c22cc44cccc444
        ...2ccc4444cccc.
        ..22ccccc44444..
        ..2cc444cc222cc.
        ..2c44444222ccc.
        ..2c44444cc2ccc.
        ....44444ccccccc
        ..2224c44ccccccc
        ..222244cccccccc
        ..2222222ccccccc
        ...2222222cccccc
        ....ccc22222ccc.
        .....ccccc22222.
        ..cccccccc22222.
        ..c4444cccc222..
        ..c444444cc2....
        ....222244c.....
        c..2222222......
        cc..c2222.......
        ccccccc22.......
        .ccccccc........
        ..cccccc........
        ...cccc.........
        ....ccc.........
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        ...2222222......
        ...442222222cc..
        ....42222222ccc.
        ..222222c44cc44.
        .2244c44c44c4444
        ...4cc44c44c4444
        .444444c44424c44
        4444c4444422c4c4
        444cccc44cc22c44
        .cccc4444ccc2...
        ..44444ccccc22..
        .cc222cc444cc2..
        .ccc22244444c2..
        .ccc2cc44444c2..
        ccccccc44444....
        ccccccc44c4222..
        cccccccc442222..
        ccccccc2222222..
        cccccc2222222...
        .ccc22222ccc....
        .22222ccccc.....
        .22222cccccccc..
        ..222cccc4444c..
        ....2cc444444c..
        .....c442222....
        ......2222222..c
        .......2222c..cc
        .......22ccccccc
        ........ccccccc.
        ........cccccc..
        .........cccc...
        .........ccc....
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mSprBig,
    [img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . 4 . 2 2 2 2 2 2 . 4 . . . 
        . 4 4 4 c 4 c 4 4 c 4 c 4 4 4 . 
        . 4 4 c c 4 c 4 4 c 4 c c 4 4 . 
        . 4 4 c c c 4 4 4 4 c c c 4 4 . 
        . . . c c c c 4 4 c c c c . . . 
        . . . . c 4 c c c c 4 c . . . . 
        . . . . c 4 4 4 4 4 4 c . . . . 
        . . . 2 2 2 4 4 4 4 2 2 2 . . . 
        . . c c 2 2 c c c c 2 2 c c . . 
        . . c c c 2 2 c c 2 2 c c c . . 
        . . c c c 2 4 2 2 4 2 c c c . . 
        . . c c c 2 2 2 2 2 2 c c c . . 
        . . . c c 2 2 2 2 2 2 c c . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingUp)
    )
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (location.bottom == sprite.top) {
        sprite.vy = Math.abs(sprite.vy) / 2
        music.play(music.createSoundEffect(WaveShape.Square, 241, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 241, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 241, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 241, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (tiles.tileAtLocationEquals(location, myTiles.tile3) || tiles.tileAtLocationEquals(location, myTiles.tile32)) {
            QParticle = sprites.create(img`
                . f f f f f f f f f f f f f f . 
                f e e e e e e e e e e e e e e f 
                f e f e e e e e e e e e e f e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e f e e e e e e e e e e f e f 
                f e e e e e e e e e e e e e e f 
                . f f f f f f f f f f f f f f . 
                `, SpriteKind.Projectile)
            sprites.setDataNumber(QParticle, "yval", location.y)
            sprites.setDataNumber(QParticle, "yrow", location.row)
            sprites.setDataString(QParticle, "type", "Q")
            tiles.setTileAt(location, myTiles.transparency16)
            tiles.placeOnTile(QParticle, location)
            if (QParticle.tileKindAt(TileDirection.Top, myTiles.tile34)) {
                if (sprites.readDataNumber(mySprite, "power") > 0) {
                    powerUp = sprites.create(img`
                        . . . . 1 1 1 1 1 1 1 1 . . . . 
                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                        . 1 1 1 4 4 4 4 4 4 4 4 1 1 1 . 
                        1 1 4 4 4 a a a a a a 4 4 4 1 1 
                        1 1 4 4 4 a a a a a a 4 4 4 1 1 
                        . 1 1 1 4 4 4 4 4 4 4 4 1 1 1 . 
                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                        . . . . 1 1 1 1 1 1 1 1 . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        8 8 8 . . . . 8 8 . . . . 8 8 8 
                        . 8 8 8 . . . 8 8 . . . 8 8 8 . 
                        . 8 8 8 8 . . 8 8 . . 8 8 8 8 . 
                        . . 8 8 8 8 . 8 8 . 8 8 8 8 . . 
                        . . 8 8 8 8 . 8 8 . 8 8 8 8 . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 8 8 . . . . . . 
                        `, SpriteKind.Food)
                    sprites.setDataString(powerUp, "type", "F")
                } else {
                    powerUp = sprites.create(img`
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . 4 4 4 4 e e . . . . . 
                        . . . . 4 4 4 4 e e e e . . . . 
                        . . . 4 4 4 4 4 e e e e e . . . 
                        . . 4 4 4 4 4 4 4 e e e 4 4 . . 
                        . 4 4 e e e 4 4 4 4 4 4 4 4 4 . 
                        . 4 e e e e e 4 4 4 4 4 4 4 4 . 
                        4 4 e e e e e 4 4 4 4 4 e e 4 4 
                        4 4 e e e e e 4 4 4 4 4 e e e 4 
                        4 4 4 e e e 4 4 4 4 4 4 4 e e 4 
                        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                        . 4 e e e 1 1 1 1 1 1 e e e 4 . 
                        . . . . 1 1 1 1 1 1 1 1 . . . . 
                        . . . . 1 1 1 1 1 1 4 1 . . . . 
                        . . . . 1 1 1 1 1 1 4 1 . . . . 
                        . . . . . 1 1 1 1 4 1 . . . . . 
                        `, SpriteKind.Food)
                    sprites.setDataString(powerUp, "type", "M")
                }
                tiles.placeOnTile(powerUp, location)
                tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Top), myTiles.transparency16)
            } else if (QParticle.tileKindAt(TileDirection.Top, myTiles.tile35)) {
                powerUp = sprites.create(img`
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . 4 4 4 4 8 8 . . . . . 
                    . . . . 4 4 4 4 8 8 8 8 . . . . 
                    . . . 4 4 4 4 4 8 8 8 8 8 . . . 
                    . . 4 4 4 4 4 4 4 8 8 8 4 4 . . 
                    . 4 4 8 8 8 4 4 4 4 4 4 4 4 4 . 
                    . 4 8 8 8 8 8 4 4 4 4 4 4 4 4 . 
                    4 4 8 8 8 8 8 4 4 4 4 4 8 8 4 4 
                    4 4 8 8 8 8 8 4 4 4 4 4 8 8 8 4 
                    4 4 4 8 8 8 4 4 4 4 4 4 4 8 8 4 
                    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                    . 4 8 8 8 1 1 1 1 1 1 8 8 8 4 . 
                    . . . . 1 1 1 1 1 1 1 1 . . . . 
                    . . . . 1 1 1 1 1 1 4 1 . . . . 
                    . . . . 1 1 1 1 1 1 4 1 . . . . 
                    . . . . . 1 1 1 1 4 1 . . . . . 
                    `, SpriteKind.Food)
                sprites.setDataString(powerUp, "type", "P")
                tiles.placeOnTile(powerUp, location)
                tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Top), myTiles.transparency16)
            } else {
                coins += 1
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            }
        } else if (tiles.tileAtLocationEquals(location, myTiles.tile2)) {
            if (sprites.readDataNumber(sprite, "power") == 0 || !(tiles.tileAtLocationEquals(location.getNeighboringLocation(CollisionDirection.Top), myTiles.transparency16))) {
                QParticle = sprites.create(img`
                    d d d d d d d d d d d d d d d d 
                    e e e e e e e f e e e e e e e f 
                    e e e e e e e f e e e e e e e f 
                    f f f f f f f f f f f f f f f f 
                    e e e f e e e e e e e f e e e e 
                    e e e f e e e e e e e f e e e e 
                    e e e f e e e e e e e f e e e e 
                    f f f f f f f f f f f f f f f f 
                    e e e e e e e f e e e e e e e f 
                    e e e e e e e f e e e e e e e f 
                    e e e e e e e f e e e e e e e f 
                    f f f f f f f f f f f f f f f f 
                    e e e f e e e e e e e f e e e e 
                    e e e f e e e e e e e f e e e e 
                    e e e f e e e e e e e f e e e e 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.Projectile)
                sprites.setDataNumber(QParticle, "yval", location.y)
                sprites.setDataNumber(QParticle, "yrow", location.row)
                sprites.setDataString(QParticle, "type", "B")
                tiles.setTileAt(location, myTiles.transparency16)
                tiles.placeOnTile(QParticle, location)
                if (QParticle.tileKindAt(TileDirection.Top, myTiles.tile36)) {
                    powerUp = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Food)
                    sprites.setDataString(powerUp, "type", "S")
                    animation.runImageAnimation(
                    powerUp,
                    [img`
                        . . . . . . . c c . . . . . . . 
                        . . . . . . . c c . . . . . . . 
                        . . . . . . c c c c . . . . . . 
                        . . . . . . c c c c . . . . . . 
                        . . . . . c c c c c c . . . . . 
                        . c c c c c c c c c c c c c c . 
                        . c c c c c 2 c c 2 c c c c c . 
                        . . c c c c 2 c c 2 c c c c . . 
                        . . . c c c 2 c c 2 c c c . . . 
                        . . . . c c c c c c c c . . . . 
                        . . . . c c c c c c c c . . . . 
                        . . . c c c c c c c c c c . . . 
                        . . . c c c c c c c c c c . . . 
                        . . . c c c c . . c c c c . . . 
                        . . c c c . . . . . . c c c . . 
                        . . c c . . . . . . . . c c . . 
                        `,img`
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . 4 4 4 4 4 4 . . . . . 
                        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                        . 4 4 4 4 4 8 4 4 8 4 4 4 4 4 . 
                        . . 4 4 4 4 8 4 4 8 4 4 4 4 . . 
                        . . . 4 4 4 8 4 4 8 4 4 4 . . . 
                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                        . . . 4 4 4 4 . . 4 4 4 4 . . . 
                        . . 4 4 4 . . . . . . 4 4 4 . . 
                        . . 4 4 . . . . . . . . 4 4 . . 
                        `,img`
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . 4 4 4 4 4 4 . . . . . 
                        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                        . 4 4 4 4 4 a 4 4 a 4 4 4 4 4 . 
                        . . 4 4 4 4 a 4 4 a 4 4 4 4 . . 
                        . . . 4 4 4 a 4 4 a 4 4 4 . . . 
                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                        . . . 4 4 4 4 . . 4 4 4 4 . . . 
                        . . 4 4 4 . . . . . . 4 4 4 . . 
                        . . 4 4 . . . . . . . . 4 4 . . 
                        `,img`
                        . . . . . . . e e . . . . . . . 
                        . . . . . . . e e . . . . . . . 
                        . . . . . . e e e e . . . . . . 
                        . . . . . . e e e e . . . . . . 
                        . . . . . e e e e e e . . . . . 
                        . e e e e e e e e e e e e e e . 
                        . e e e e e f e e f e e e e e . 
                        . . e e e e f e e f e e e e . . 
                        . . . e e e f e e f e e e . . . 
                        . . . . e e e e e e e e . . . . 
                        . . . . e e e e e e e e . . . . 
                        . . . e e e e e e e e e e . . . 
                        . . . e e e e e e e e e e . . . 
                        . . . e e e e . . e e e e . . . 
                        . . e e e . . . . . . e e e . . 
                        . . e e . . . . . . . . e e . . 
                        `],
                    100,
                    true
                    )
                    tiles.placeOnTile(powerUp, location)
                    tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Top), myTiles.transparency16)
                }
            } else {
                tiles.setTileAt(location, myTiles.transparency16)
                tiles.setWallAt(location, false)
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(mySprite, "power") == 2 && sprites.allOfKind(SpriteKind.Fireball).length < 2) {
        tempsprite = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Fireball)
        tempsprite.setPosition(mySprite.x, mySprite.y)
        animation.runImageAnimation(
        tempsprite,
        [img`
            . . a a a a . . 
            . a a 4 4 a a . 
            . a 4 4 1 4 a a 
            a a a a 4 1 4 a 
            a . . a 4 4 4 a 
            . a . a a 4 a a 
            a . . . a a a . 
            . . a . . . . . 
            `,img`
            . a . a a . . . 
            . . a . a a a . 
            a . . . a 4 a a 
            . . a a a 4 4 a 
            . a a 4 4 1 4 a 
            . a 4 4 1 4 a a 
            . a a 4 4 a a . 
            . . a a a a . . 
            `,img`
            . . . . . a . . 
            . a a a . . . a 
            a a 4 a a . a . 
            a 4 4 4 a . . a 
            a 4 1 4 a a a a 
            a a 4 1 4 4 a . 
            . a a 4 4 a a . 
            . . a a a a . . 
            `,img`
            . . a a a a . . 
            . a a 4 4 a a . 
            a a 4 1 4 4 a . 
            a 4 1 4 4 a a . 
            a 4 4 a a a . . 
            a a 4 a . . . a 
            . a a a . a . . 
            . . . a a . a . 
            `],
        100,
        true
        )
        tempsprite.ay = 600
        if (lastXVno0 > 0) {
            tempsprite.vx = 150
        } else {
            tempsprite.vx = -150
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && !(cantMove)) {
        mySprite.vy = -290 + Math.abs(mySprite.vx) / -50
        music.play(music.createSoundEffect(WaveShape.Square, 420, 1000, 255, 112, 600, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 420, 1000, 255, 112, 600, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 420, 1000, 255, 112, 600, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.z = -100
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    timer.after(10, function () {
        if (tiles.tileAtLocationIsWall(sprite.tilemapLocation())) {
            story.spriteMoveToLocation(sprite, sprite.x, sprite.y + -16, 20)
            sprite.z = 100
            sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
            sprite.ay = 1000
            if (["M", "P", "S"].indexOf(sprites.readDataString(sprite, "type")) > -1) {
                if (mySprite.x > sprite.x) {
                    sprite.vx = -60
                } else {
                    sprite.vx = 60
                }
            }
        }
    })
})
function die () {
    dead = true
    mySprite.setFlag(SpriteFlag.Ghost, true)
    music.stopAllSounds()
    mySprite.vy = 0
    mySprite.ay = 0
    music.play(music.createSoundEffect(WaveShape.Square, 642, 553, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Square, 642, 553, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Square, 330, 286, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Square, 330, 286, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Square, 642, 553, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Square, 642, 553, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    timer.after(750, function () {
        mySprite.vy = -200
        mySprite.ay = 400
        music.play(music.createSong(assets.song`die`), music.PlaybackMode.InBackground)
        timer.after(2500, function () {
            game.reset()
        })
    })
}
info.onCountdownEnd(function () {
	
})
function initiateSmall () {
    characterAnimations.setCharacterAnimationsEnabled(mSpr, false)
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . c c c 4 4 c 4 . . . . . 
        . . . c 4 c 4 4 4 c 4 4 4 . . . 
        . . . c 4 c c 4 4 4 c 4 4 4 . . 
        . . . c c 4 4 4 4 c c c c . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . c c c c 2 2 c c . . . . . . 
        4 4 c c c c 2 2 2 c c c 4 4 4 . 
        4 4 4 . c c 2 4 2 2 2 c c 4 4 . 
        4 4 . . 2 2 2 2 2 2 2 . . c . . 
        . . . 2 2 2 2 2 2 2 2 2 c c . . 
        . . 2 2 2 2 2 2 2 2 2 2 c c . . 
        . c c 2 2 2 . . . 2 2 2 c c . . 
        . c c c . . . . . . . . . . . . 
        . . c c c . . . . . . . . . . . 
        `,img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . c c c 4 4 c 4 . . . . . 
        . . . c 4 c 4 4 4 c 4 4 4 . . . 
        . . . c 4 c c 4 4 4 c 4 4 4 . . 
        . . . c c 4 4 4 4 c c c c . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . c c 2 c c c . . . . . . 
        . . . c c c c 2 2 c c . . . . . 
        . . . c c c 2 2 4 2 2 4 . . . . 
        . . . c c c c 2 2 2 2 2 . . . . 
        . . . 2 c c 4 4 4 2 2 2 . . . . 
        . . . . 2 c 4 4 2 2 2 . . . . . 
        . . . . . 2 2 2 c c c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . c c c c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . . c c c 4 4 c 4 . . . . 
        . . . . c 4 c 4 4 4 c 4 4 4 . . 
        . . . . c 4 c c 4 4 4 c 4 4 4 . 
        . . . . c c 4 4 4 4 c c c c . . 
        . . . . . . 4 4 4 4 4 4 4 . . . 
        . . . . . c c c c 2 c . 4 . . . 
        . . . . 4 c c c c c c 4 4 4 . . 
        . . . 4 4 2 c c c c c 4 4 . . . 
        . . . c c 2 2 2 2 2 2 2 . . . . 
        . . . c 2 2 2 2 2 2 2 2 . . . . 
        . . c c 2 2 2 . 2 2 2 . . . . . 
        . . c . . . . c c c . . . . . . 
        . . . . . . . c c c c . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . c c c 4 4 c 4 . . . . . 
        . . . c 4 c 4 4 4 c 4 4 4 . . . 
        . . . c 4 c c 4 4 4 c 4 4 4 . . 
        . . . c c 4 4 4 4 c c c c . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . c c 2 c c c . . . . . . 
        . . . c c c 2 c c 2 c c c . . . 
        . . c c c c 2 2 2 2 c c c c . . 
        . . 4 4 c 2 4 2 2 4 2 c 4 4 . . 
        . . 4 4 4 2 2 2 2 2 2 4 4 4 . . 
        . . 4 4 2 2 2 2 2 2 2 2 4 4 . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . c c c . . . . c c c . . . 
        . . c c c c . . . . c c c c . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 4 c 4 4 c c c . . . . 
        . . . 4 4 4 c 4 4 4 c 4 c . . . 
        . . 4 4 4 c 4 4 4 c c 4 c . . . 
        . . . c c c c 4 4 4 4 c c . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . c c 2 2 c c c c . . 
        . 4 4 4 c c c 2 2 2 c c c c 4 4 
        . 4 4 c c 2 2 2 4 2 c c . 4 4 4 
        . . c . . 2 2 2 2 2 2 2 . . 4 4 
        . . c c 2 2 2 2 2 2 2 2 2 . . . 
        . . c c 2 2 2 2 2 2 2 2 2 2 . . 
        . . c c 2 2 2 . . . 2 2 2 c c . 
        . . . . . . . . . . . . c c c . 
        . . . . . . . . . . . c c c . . 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 4 c 4 4 c c c . . . . 
        . . . 4 4 4 c 4 4 4 c 4 c . . . 
        . . 4 4 4 c 4 4 4 c c 4 c . . . 
        . . . c c c c 4 4 4 4 c c . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . c c c 2 c c . . . . 
        . . . . . c c 2 2 c c c c . . . 
        . . . . 4 2 2 4 2 2 c c c . . . 
        . . . . 2 2 2 2 2 c c c c . . . 
        . . . . 2 2 2 4 4 4 c c 2 . . . 
        . . . . . 2 2 2 4 4 c 2 . . . . 
        . . . . . c c c 2 2 2 . . . . . 
        . . . . c c c c c c c . . . . . 
        . . . . . . . c c c c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . . . 4 c 4 4 c c c . . . . . 
        . . 4 4 4 c 4 4 4 c 4 c . . . . 
        . 4 4 4 c 4 4 4 c c 4 c . . . . 
        . . c c c c 4 4 4 4 c c . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 . c 2 c c c c . . . . . 
        . . 4 4 4 c c c c c c 4 . . . . 
        . . . 4 4 c c c c c 2 4 4 . . . 
        . . . . 2 2 2 2 2 2 2 c c . . . 
        . . . . 2 2 2 2 2 2 2 2 c . . . 
        . . . . . 2 2 2 . 2 2 2 c c . . 
        . . . . . . c c c . . . . c . . 
        . . . . . c c c c . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 4 c 4 4 c c c . . . . 
        . . . 4 4 4 c 4 4 4 c 4 c . . . 
        . . 4 4 4 c 4 4 4 c c 4 c . . . 
        . . . c c c c 4 4 4 4 c c . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . c c c 2 c c . . . . 
        . . . c c c 2 c c 2 c c c . . . 
        . . c c c c 2 2 2 2 c c c c . . 
        . . 4 4 c 2 4 2 2 4 2 c 4 4 . . 
        . . 4 4 4 2 2 2 2 2 2 4 4 4 . . 
        . . 4 4 2 2 2 2 2 2 2 2 4 4 . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . c c c . . . . c c c . . . 
        . . c c c c . . . . c c c c . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . . . . . . . . . 4 4 4 
        . . . . . . 2 2 2 2 2 . . 4 4 4 
        . . . . . 2 2 2 2 2 2 2 2 2 4 4 
        . . . . . c c c 4 4 c 4 . c c c 
        . . . . c 4 c 4 4 4 c 4 4 c c c 
        . . . . c 4 c c 4 4 4 c 4 4 4 c 
        . . . . c c 4 4 4 4 c c c c c . 
        . . . . . . 4 4 4 4 4 4 4 c . . 
        . . c c c c c 2 c c c 2 c . . . 
        . c c c c c c c 2 c c c 2 . . c 
        4 4 c c c c c c 2 2 2 2 2 . . c 
        4 4 4 . 2 2 c 2 2 4 2 2 4 2 c c 
        . 4 . c 2 2 2 2 2 2 2 2 2 2 c c 
        . . c c c 2 2 2 2 2 2 2 2 2 c c 
        . c c c 2 2 2 2 2 2 2 . . . . . 
        . c . . 2 2 2 2 . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        4 4 4 . . . . . . . . . . . . . 
        4 4 4 . . 2 2 2 2 2 . . . . . . 
        4 4 2 2 2 2 2 2 2 2 2 . . . . . 
        c c c . 4 c 4 4 c c c . . . . . 
        c c c 4 4 c 4 4 4 c 4 c . . . . 
        c 4 4 4 c 4 4 4 c c 4 c . . . . 
        . c c c c c 4 4 4 4 c c . . . . 
        . . c 4 4 4 4 4 4 4 . . . . . . 
        . . . c 2 c c c 2 c c c c c . . 
        c . . 2 c c c 2 c c c c c c c . 
        c . . 2 2 2 2 2 c c c c c c 4 4 
        c c 2 4 2 2 4 2 2 c 2 2 . 4 4 4 
        c c 2 2 2 2 2 2 2 2 2 2 c . 4 . 
        c c 2 2 2 2 2 2 2 2 2 c c c . . 
        . . . . . 2 2 2 2 2 2 2 c c c . 
        . . . . . . . . 2 2 2 2 . . c . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . c 2 2 2 2 2 2 2 2 . . . . 
        . . c c c c c c 4 c 4 . . . . . 
        . 4 4 c 4 4 c 4 4 4 4 4 4 . . . 
        . 4 4 c 4 4 c c 4 4 c c 4 4 . . 
        . . 4 4 c 4 4 4 4 4 4 c c . . . 
        . . . 2 2 2 c c c 2 4 4 . . . . 
        . . 2 2 4 4 4 c 2 2 c c c . . . 
        . . 2 c 4 4 4 c c c c c c . . . 
        . . 2 2 2 4 4 c c c c c c . . . 
        . . . 2 2 2 2 2 c c c c . . . . 
        . . . 2 c c c 2 2 2 2 . . . . . 
        . . . . c c c c 2 2 2 . . . . . 
        . c . c 2 2 c c c 2 . . . . . . 
        . c c c c c 2 . . . . . . . . . 
        . . c c c c . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 c . . . 
        . . . . . 4 c 4 c c c c c c . . 
        . . . 4 4 4 4 4 4 c 4 4 c 4 4 . 
        . . 4 4 c c 4 4 c c 4 4 c 4 4 . 
        . . . c c 4 4 4 4 4 4 c 4 4 . . 
        . . . . 4 4 2 c c c 2 2 2 . . . 
        . . . c c c 2 2 c 4 4 4 2 2 . . 
        . . . c c c c c c 4 4 4 c 2 . . 
        . . . c c c c c c 4 4 2 2 2 . . 
        . . . . c c c c 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 c c c 2 . . . 
        . . . . . 2 2 2 c c c c . . . . 
        . . . . . . 2 c c c 2 2 c . c . 
        . . . . . . . . . 2 c c c c c . 
        . . . . . . . . . . c c c c . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mSpr,
    [img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . 4 . 2 2 2 2 2 2 . 4 . . . 
        . 4 4 4 c 4 c 4 4 c 4 c 4 4 4 . 
        . 4 4 c c 4 c 4 4 c 4 c c 4 4 . 
        . 4 4 c c c 4 4 4 4 c c c 4 4 . 
        . . . c c c c 4 4 c c c c . . . 
        . . . . c 4 c c c c 4 c . . . . 
        . . . . c 4 4 4 4 4 4 c . . . . 
        . . . 2 2 2 4 4 4 4 2 2 2 . . . 
        . . c c 2 2 c c c c 2 2 c c . . 
        . . c c c 2 2 c c 2 2 c c c . . 
        . . c c c 2 4 2 2 4 2 c c c . . 
        . . c c c 2 2 2 2 2 2 c c c . . 
        . . . c c 2 2 2 2 2 2 c c . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingUp)
    )
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprite.tilemapLocation().column == 0) {
        sprites.destroy(sprite)
    } else {
        if (sprites.readDataString(sprite, "type") == "G" && (sprite.left == location.right || sprite.right == location.left)) {
            if (sprite.y > location.top) {
                sprite.vx = 0 - sprite.vx
            }
        }
    }
    if (sprite.vx == 0 && !(sprites.readDataBoolean(sprite, "dead"))) {
        sprite.vx = -30
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.vy < -100 && (!(cantMove) && !(dead))) {
        mySprite.vy = -100
    }
})
sprites.onCreated(SpriteKind.ScoreParticle, function (sprite) {
    sprite.vy = -50
    sprite.lifespan = 300
})
function numberImage (num: number) {
    if (num == 0) {
        return img`
            . . 1 1 1 . . . 
            . 1 . . 1 1 . . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 . . 1 . . 
            . . 1 1 1 . . . 
            . . . . . . . . 
            `
    } else if (num == 1) {
        return img`
            . . . 1 1 . . . 
            . . 1 1 1 . . . 
            . . . 1 1 . . . 
            . . . 1 1 . . . 
            . . . 1 1 . . . 
            . . . 1 1 . . . 
            . 1 1 1 1 1 1 . 
            . . . . . . . . 
            `
    } else if (num == 2) {
        return img`
            . 1 1 1 1 1 . . 
            1 1 . . . 1 1 . 
            . . . . 1 1 1 . 
            . . 1 1 1 1 . . 
            . 1 1 1 1 . . . 
            1 1 1 . . . . . 
            1 1 1 1 1 1 1 . 
            . . . . . . . . 
            `
    } else if (num == 3) {
        return img`
            . 1 1 1 1 1 1 . 
            . . . . 1 1 . . 
            . . . 1 1 . . . 
            . . 1 1 1 1 . . 
            . . . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 1 1 1 . . 
            . . . . . . . . 
            `
    } else if (num == 4) {
        return img`
            . . . 1 1 1 . . 
            . . 1 1 1 1 . . 
            . 1 1 . 1 1 . . 
            1 1 . . 1 1 . . 
            1 1 1 1 1 1 1 . 
            . . . . 1 1 . . 
            . . . . 1 1 . . 
            . . . . . . . . 
            `
    } else if (num == 5) {
        return img`
            1 1 1 1 1 1 . . 
            1 1 . . . . . . 
            1 1 1 1 1 1 . . 
            . . . . . 1 1 . 
            . . . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 1 1 1 . . 
            . . . . . . . . 
            `
    } else if (num == 6) {
        return img`
            . . 1 1 1 1 . . 
            . 1 1 . . . . . 
            1 1 . . . . . . 
            1 1 1 1 1 1 . . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 1 1 1 . . 
            . . . . . . . . 
            `
    } else if (num == 7) {
        return img`
            1 1 1 1 1 1 1 . 
            1 1 . . . 1 1 . 
            . . . . 1 1 . . 
            . . . 1 1 . . . 
            . . 1 1 . . . . 
            . . 1 1 . . . . 
            . . 1 1 . . . . 
            . . . . . . . . 
            `
    } else if (num == 8) {
        return img`
            . 1 1 1 1 1 . . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 1 1 1 . . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 1 1 1 . . 
            . . . . . . . . 
            `
    } else if (num == 9) {
        return img`
            . 1 1 1 1 1 . . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 1 1 1 1 . 
            . . . . . 1 1 . 
            . . . . 1 1 . . 
            . 1 1 1 1 . . . 
            . . . . . . . . 
            `
    } else {
        return img`
            . . 1 1 1 . . . 
            . 1 . . 1 1 . . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            1 1 . . . 1 1 . 
            . 1 1 . . 1 . . 
            . . 1 1 1 . . . 
            . . . . . . . . 
            `
    }
}
sprites.onOverlap(SpriteKind.Fireball, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    for (let index = 0; index < 3; index++) {
        music.play(music.createSoundEffect(WaveShape.Square, 731, 553, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
    timer.after(100, function () {
        for (let index = 0; index < 3; index++) {
            music.play(music.createSoundEffect(WaveShape.Square, 954, 776, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    })
})
scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    if (sprite.tilemapLocation().column == 0) {
        sprites.destroy(sprite)
    } else if (sprites.readDataString(sprite, "type") == "M" && (sprite.left == location.right || sprite.right == location.left)) {
        if (sprite.top >= location.top) {
            sprite.vx = 0 - sprite.vx
        }
    } else if (sprite.vx == 0 && ["M", "P", "S"].indexOf(sprites.readDataString(sprite, "type")) > -1) {
        sprite.vx = 60
    } else if (sprite.bottom == location.top && sprites.readDataString(sprite, "type") == "S") {
        sprite.vy = -300
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (sprites.readDataString(otherSprite, "type") == "M" || sprites.readDataString(otherSprite, "type") == "F") {
        if (sprites.readDataNumber(mySprite, "power") > 0) {
            sprites.setDataNumber(mySprite, "power", 2)
        } else {
            sprites.setDataNumber(mySprite, "power", 1)
        }
    } else if (sprites.readDataString(otherSprite, "type") == "P") {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    } else if (sprites.readDataString(otherSprite, "type") == "S") {
        sprites.setDataNumber(mySprite, "inv", 750)
    }
    sprites.destroy(otherSprite)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    sprite.vy = -100
    timer.after(100, function () {
        sprite.vy = 100
    })
})
scene.onHitWall(SpriteKind.Fireball, function (sprite, location) {
    if (location.top == sprite.bottom) {
        sprite.vy = -100
    } else {
        sprites.destroy(sprite)
    }
})
function setupHud () {
    for (let index = 0; index <= 3; index++) {
        tempsprite = sprites.create(img`
            . . 7 7 f . . . 
            . 7 7 7 7 f . . 
            . 7 7 7 7 f . . 
            . 7 7 7 7 f . . 
            . 7 7 7 7 f . . 
            . 7 7 7 7 f . . 
            . f 7 7 f e . . 
            . . f f e . . . 
            `, SpriteKind.Hud)
        sprites.setDataNumber(tempsprite, "index", index)
        tempsprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        if (index == 1) {
            tempsprite.setImage(img`
                . . . . . . . . 
                . . . . . . . . 
                . 1 . . . 1 . . 
                . . 1 . 1 . . . 
                . . . 1 . . . . 
                . . 1 . 1 . . . 
                . 1 . . . 1 . . 
                . . . . . . . . 
                `)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(sprites.readDataBoolean(otherSprite, "dead"))) {
        if (sprites.readDataString(otherSprite, "type") == "G") {
            if (sprite.vy > 0) {
                sprite.vy = -100
                sprite.y += -5
                sprites.setDataBoolean(otherSprite, "dead", true)
                otherSprite.vx = 0
                otherSprite.lifespan = 500
                animation.runImageAnimation(
                otherSprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . e e e e . . . . . . 
                    . . . e e e e e e e e e e . . . 
                    . e e f f f e e e e f f f e e . 
                    e e d d d d f f f f d d d d e e 
                    e e e e e e e e e e e e e e e e 
                    . . . d d d d d d d d d d . . . 
                    . . . . d d d d d d d d . . . . 
                    . f f f f f . . . . f f f f f . 
                    `],
                500,
                false
                )
                scoreParticle = sprites.create(img`
                    . . . 1 . . . 1 . . . 1 . . . . 
                    . . 1 1 . . 1 . 1 . 1 . 1 . . . 
                    . . . 1 . . 1 . 1 . 1 . 1 . . . 
                    . . . 1 . . 1 . 1 . 1 . 1 . . . 
                    . . . 1 . . 1 . 1 . 1 . 1 . . . 
                    . . . 1 . . 1 . 1 . 1 . 1 . . . 
                    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
                    . . 1 1 1 . . 1 . . . 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.ScoreParticle)
                scoreParticle.setPosition(otherSprite.x, otherSprite.y)
                music.play(music.createSoundEffect(WaveShape.Square, 731, 553, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Square, 731, 553, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Square, 731, 553, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                timer.after(100, function () {
                    music.play(music.createSoundEffect(WaveShape.Square, 954, 776, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 954, 776, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    music.play(music.createSoundEffect(WaveShape.Square, 954, 776, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                })
            } else if (sprite.bottom >= otherSprite.bottom && sprites.readDataNumber(mySprite, "inv") == 0) {
                if (sprites.readDataNumber(mySprite, "power") > 0) {
                    sprites.setDataNumber(mySprite, "inv", 100)
                    sprites.setDataNumber(mySprite, "power", 0)
                    timer.throttle("psound", 5000, function () {
                        for (let index = 0; index < 5; index++) {
                            music.play(music.createSoundEffect(WaveShape.Square, 910, 107, 255, 0, 175, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        }
                        timer.after(200, function () {
                            for (let index = 0; index < 5; index++) {
                                music.play(music.createSoundEffect(WaveShape.Square, 910, 107, 255, 0, 175, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                            }
                            timer.after(200, function () {
                                for (let index = 0; index < 5; index++) {
                                    music.play(music.createSoundEffect(WaveShape.Square, 910, 107, 255, 0, 175, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                                }
                            })
                        })
                    })
                } else {
                    die()
                }
            } else if (sprites.readDataNumber(mySprite, "inv") > 100) {
                sprites.destroy(otherSprite)
                for (let index = 0; index < 3; index++) {
                    music.play(music.createSoundEffect(WaveShape.Square, 731, 553, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
                timer.after(100, function () {
                    for (let index = 0; index < 3; index++) {
                        music.play(music.createSoundEffect(WaveShape.Square, 954, 776, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    }
                })
            } else {
            	
            }
        } else {
        	
        }
    }
})
let flagTimer = 0
let enemySpawner: Sprite = null
let scoreParticle: Sprite = null
let tempsprite: Sprite = null
let powerUp: Sprite = null
let QParticle: Sprite = null
let lastXVno0 = 0
let dead = false
let cantMove = false
let mSprBig: Sprite = null
let mSpr: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`1-1`)
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 
    9 6 9 9 9 9 9 9 9 9 9 9 9 9 b 9 
    9 6 9 9 9 1 1 1 1 1 9 9 9 9 b 9 
    9 6 9 9 1 1 6 6 6 1 1 9 9 9 b 9 
    9 6 9 9 1 1 6 9 9 1 1 6 9 9 b 9 
    9 6 9 9 9 6 6 9 1 1 6 6 9 9 b 9 
    9 6 9 9 9 9 9 1 1 6 6 9 9 9 b 9 
    9 6 9 9 9 9 9 1 1 6 9 9 9 9 b 9 
    9 6 9 9 9 9 9 9 6 6 9 9 9 9 b 9 
    9 6 9 9 9 9 9 1 1 9 9 9 9 9 b 9 
    9 6 9 9 9 9 1 1 1 1 9 9 9 9 b 9 
    9 6 9 9 9 9 9 1 1 6 6 9 9 9 b 9 
    9 6 9 9 9 9 9 9 6 6 9 9 9 9 b 9 
    9 6 b b b b b b b b b b b b b 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
mySprite.ay = 600
mySprite.fx = 400
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
mySprite.x += 8
mSpr = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Layer)
mSprBig = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.Layer)
let pip = sprites.create(img`
    ..fffffffffffffff.................
    ..f5855555555555f.................
    ..f5855555555555ffffffffffffffffff
    ..f5885858585858ff5555555555555555
    ..f5858585858585ff5555555555555555
    ..f5885858585858ff5858585858585858
    ..f5858585858585ff8585858585858585
    ..f5888888888888ff5858585858585858
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff8888888888888888
    ..f5888888888888ff5555555555555555
    ..f5855555555555ff5555555555555555
    ..f5855555555555ff8888888888888888
    ..f5888888888888ff5555555555555555
    ..f5555555555555ff5555555555555555
    ..f5555555555555ff5555555555555555
    ..f5555555555555ff5555555555555555
    ..f5555555555555ff5555555555555555
    ..f5555555555555ff8888888888888888
    ..f5555555555555ff8888888888888888
    ..f5888888888888ff5555555555555555
    ..f5888888888888ff5555555555555555
    ..f5855555555555ff5555555555555555
    ..f5855555555555ffffffffffffffffff
    ..f5855555555555f6................
    .6fffffffffffffff6................
    `, SpriteKind.coolpipi)
pip.setFlag(SpriteFlag.GhostThroughWalls, true)
tiles.placeOnTile(pip, tiles.getTileLocation(251, 12))
pip.x += 7
pip.y += 8
let coins = 0
cantMove = false
dead = false
initiateSmall()
initiateBig()
mySprite.setFlag(SpriteFlag.Invisible, true)
mSprBig.setFlag(SpriteFlag.Invisible, true)
sprites.setDataNumber(mySprite, "power", 0)
sprites.setDataNumber(mySprite, "dtpower", 0)
sprites.setDataNumber(mySprite, "inv", 0)
lastXVno0 = 1
setupHud()
let song = music.createSong(assets.song`overworld`)
music.play(song, music.PlaybackMode.LoopingInBackground)
let level = 1
let qcolortick = 0
game.onUpdate(function () {
    if (sprites.readDataNumber(mySprite, "power") > 0) {
        if (sprites.readDataNumber(mySprite, "dtpower") < 1) {
            mySprite.y += -16
            mySprite.setImage(img`
                9999999999999999
                9999999999999999
                9222222222222229
                9222222222222229
                9222222222222229
                9222229999922229
                9222229999922229
                9222229999922229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9222222222222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                9922222299222229
                `)
            sprites.setDataNumber(mySprite, "dtpower", sprites.readDataNumber(mySprite, "power"))
            mSpr.setFlag(SpriteFlag.Invisible, true)
            mSprBig.setFlag(SpriteFlag.Invisible, false)
        }
    } else if (sprites.readDataNumber(mySprite, "dtpower") > 0) {
        mySprite.y += 16
        mySprite.setImage(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 b 9 
            9 6 9 9 9 1 1 1 1 1 9 9 9 9 b 9 
            9 6 9 9 1 1 6 6 6 1 1 9 9 9 b 9 
            9 6 9 9 1 1 6 9 9 1 1 6 9 9 b 9 
            9 6 9 9 9 6 6 9 1 1 6 6 9 9 b 9 
            9 6 9 9 9 9 9 1 1 6 6 9 9 9 b 9 
            9 6 9 9 9 9 9 1 1 6 9 9 9 9 b 9 
            9 6 9 9 9 9 9 9 6 6 9 9 9 9 b 9 
            9 6 9 9 9 9 9 1 1 9 9 9 9 9 b 9 
            9 6 9 9 9 9 1 1 1 1 9 9 9 9 b 9 
            9 6 9 9 9 9 9 1 1 6 6 9 9 9 b 9 
            9 6 9 9 9 9 9 9 6 6 9 9 9 9 b 9 
            9 6 b b b b b b b b b b b b b 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `)
        sprites.setDataNumber(mySprite, "dtpower", sprites.readDataNumber(mySprite, "power"))
        mSpr.setFlag(SpriteFlag.Invisible, false)
        mSprBig.setFlag(SpriteFlag.Invisible, true)
    }
    if (sprites.readDataNumber(mySprite, "inv") > 0) {
        sprites.changeDataNumberBy(mySprite, "inv", -1)
        if (sprites.readDataNumber(mySprite, "inv") > 740) {
            timer.throttle("starmusic", 500, function () {
                music.stopAllSounds()
                music.play(music.createSong(assets.song`superstar`), music.PlaybackMode.LoopingInBackground)
            })
        } else if (sprites.readDataNumber(mySprite, "inv") > 110) {
        	
        } else if (sprites.readDataNumber(mySprite, "inv") % 2 == 0) {
            if (sprites.readDataNumber(mySprite, "power") == 0) {
                mSpr.setFlag(SpriteFlag.Invisible, false)
            }
            if (sprites.readDataNumber(mySprite, "power") > 0) {
                mSprBig.setFlag(SpriteFlag.Invisible, false)
            }
            if (sprites.readDataNumber(mySprite, "inv") > 100) {
                timer.throttle("overmusic", 500, function () {
                    music.stopAllSounds()
                    music.play(song, music.PlaybackMode.LoopingInBackground)
                })
            }
        } else {
            mSpr.setFlag(SpriteFlag.Invisible, true)
            mSprBig.setFlag(SpriteFlag.Invisible, true)
        }
    }
    if (sprites.readDataNumber(mySprite, "inv") % 4 > 0 && sprites.readDataNumber(mySprite, "inv") > 100) {
        if (sprites.readDataNumber(mySprite, "inv") % 4 == 1) {
            color.setColor(2, color.rgb(0, 168, 0))
            color.setColor(4, color.rgb(255, 255, 255))
            color.setColor(12, color.rgb(252, 152, 56))
        } else if (sprites.readDataNumber(mySprite, "inv") % 4 == 2) {
            color.setColor(2, color.rgb(216, 40, 0))
            color.setColor(4, color.rgb(255, 255, 255))
            color.setColor(12, color.rgb(252, 152, 56))
        } else if (sprites.readDataNumber(mySprite, "inv") % 4 == 3) {
            color.setColor(2, color.rgb(0, 0, 0))
            color.setColor(4, color.rgb(252, 188, 176))
            color.setColor(12, color.rgb(200, 76, 12))
        }
    } else {
        if (sprites.readDataNumber(mySprite, "power") == 2) {
            color.setColor(12, color.rgb(181, 49, 32))
            color.setColor(2, color.rgb(247, 216, 165))
        } else {
            color.setColor(12, color.rgb(136, 112, 0))
            color.setColor(2, color.rgb(216, 40, 0))
        }
        color.setColor(4, color.rgb(252, 152, 56))
    }
})
game.onUpdate(function () {
    mSpr.setPosition(mySprite.x, mySprite.y)
    mSprBig.x = mySprite.x
    mSprBig.bottom = mySprite.bottom
    if (dead) {
        characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingUp))
        characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingUp))
    } else {
        if (mySprite.vy == 0) {
            if (mySprite.vx > 0) {
                if (controller.left.isPressed() && !(controller.right.isPressed())) {
                    characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown))
                    characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown))
                } else {
                    characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight))
                    characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight))
                }
            } else if (lastXVno0 > 0) {
                if (!(mySprite.vx < 0)) {
                    characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))
                    characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))
                }
            }
            if (mySprite.vx < 0) {
                if (controller.right.isPressed() && !(controller.left.isPressed())) {
                    characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown))
                    characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown))
                } else {
                    characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft))
                    characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft))
                }
            } else if (lastXVno0 < 0) {
                if (!(mySprite.vx > 0)) {
                    characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))
                    characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))
                }
            }
        } else {
            if (lastXVno0 > 0) {
                characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp))
                characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp))
            } else if (lastXVno0 < 0) {
                characterAnimations.setCharacterState(mSpr, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp))
                characterAnimations.setCharacterState(mSprBig, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp))
            }
        }
    }
})
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(myTiles.tile32)) {
        if (mySprite.top >= value.bottom) {
            tiles.setWallAt(value, true)
        } else {
            tiles.setWallAt(value, false)
        }
    }
    for (let value of tiles.getTilesByType(myTiles.tile33)) {
        if (mySprite.x + 150 > value.x) {
            enemySpawner = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(enemySpawner, value)
            tiles.setTileAt(value, myTiles.transparency16)
            sprites.setDataString(enemySpawner, "type", "G")
            sprites.setDataBoolean(enemySpawner, "dead", false)
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        if (value.y > sprites.readDataNumber(value, "yval")) {
            if (sprites.readDataString(value, "type") == "Q") {
                tiles.setTileAt(tiles.getTileLocation(value.tilemapLocation().column, sprites.readDataNumber(value, "yrow")), myTiles.tile4)
                sprites.destroy(value)
            } else if (sprites.readDataString(value, "type") == "B") {
                tiles.setTileAt(tiles.getTileLocation(value.tilemapLocation().column, sprites.readDataNumber(value, "yrow")), myTiles.tile2)
                sprites.destroy(value)
            }
        }
    }
})
game.onUpdate(function () {
    if (!(dead)) {
        if (!(cantMove)) {
            if (controller.right.isPressed()) {
                if (mySprite.vy < 0) {
                    mySprite.ax = 100
                } else {
                    mySprite.ax = 400
                }
            } else if (controller.left.isPressed()) {
                if (mySprite.vy < 0) {
                    mySprite.ax = -100
                } else {
                    mySprite.ax = -400
                }
            } else {
                mySprite.ax = 0
            }
            if (controller.B.isPressed()) {
                if (Math.abs(mySprite.vx) > 175) {
                    mySprite.vx = mySprite.vx / Math.abs(mySprite.vx) * 175
                }
            } else {
                if (Math.abs(mySprite.vx) > 125) {
                    mySprite.vx = mySprite.vx / Math.abs(mySprite.vx) * 125
                }
            }
        } else {
            if (Math.abs(mySprite.vx) > 100) {
                mySprite.vx = mySprite.vx / Math.abs(mySprite.vx) * 100
            }
        }
    } else {
        mySprite.ax = 0
        mySprite.vx = 0
    }
    if (!(dead)) {
        if (mySprite.bottom - 8 - scene.cameraProperty(CameraProperty.Y) < -25) {
            scene.centerCameraAt(scene.cameraProperty(CameraProperty.X), mySprite.bottom - 8 + 25)
        }
        if (mySprite.bottom - 8 - scene.cameraProperty(CameraProperty.Y) > 25) {
            scene.centerCameraAt(scene.cameraProperty(CameraProperty.X), mySprite.bottom - 8 + -25)
        }
    }
    scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + (mySprite.x + mySprite.vx / 1.6 - scene.cameraProperty(CameraProperty.X)) / 10, scene.cameraProperty(CameraProperty.Y))
    if (mySprite.x - scene.cameraProperty(CameraProperty.X) < -30) {
        scene.centerCameraAt(mySprite.x + 30, scene.cameraProperty(CameraProperty.Y))
    }
    if (mySprite.x - scene.cameraProperty(CameraProperty.X) > 30) {
        scene.centerCameraAt(mySprite.x - 30, scene.cameraProperty(CameraProperty.Y))
    }
    if (mySprite.vy == 0) {
        mySprite.fx = 400
    } else {
        mySprite.fx = 0
    }
    if (mySprite.overlapsWith(pip)) {
        cantMove = true
        mySprite.vx = 20
        mySprite.ay = 0
        mySprite.vy = 0
        if (!(mySprite.x == tiles.getTileLocation(251, 13).x)) {
            tiles.setWallAt(tiles.getTileLocation(251, 12), false)
            tiles.setWallAt(tiles.getTileLocation(251, 13), false)
            timer.throttle("psound", 5000, function () {
                for (let index = 0; index < 5; index++) {
                    music.play(music.createSoundEffect(WaveShape.Square, 910, 107, 255, 0, 175, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
                timer.after(200, function () {
                    for (let index = 0; index < 5; index++) {
                        music.play(music.createSoundEffect(WaveShape.Square, 910, 107, 255, 0, 175, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    }
                    timer.after(200, function () {
                        for (let index = 0; index < 5; index++) {
                            music.play(music.createSoundEffect(WaveShape.Square, 910, 107, 255, 0, 175, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        }
                        timer.after(500, function () {
                            game.setGameOverPlayable(true, music.melodyPlayable(music.baDing), false)
                            game.setGameOverScoringType(game.ScoringType.None)
                            info.setScore(coins)
                            game.gameOver(true)
                        })
                    })
                })
            })
        }
    } else if (!(flagTimer) && !(dead)) {
        mySprite.ay = 600
        cantMove = false
    }
    if (mySprite.vx != 0 && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        lastXVno0 = mySprite.vx
        if (controller.left.isPressed() && mySprite.vx > 0 || controller.right.isPressed() && mySprite.vx < 0) {
            if (!(controller.left.isPressed() && controller.right.isPressed())) {
                lastXVno0 = 0 - lastXVno0
            }
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Hud)) {
        value.setFlag(SpriteFlag.GhostThroughWalls, true)
        value.setPosition(scene.cameraProperty(CameraProperty.Left) + 8, scene.cameraProperty(CameraProperty.Top) + 8)
        value.x += sprites.readDataNumber(value, "index") * 8
        if (sprites.readDataNumber(value, "index") == 3) {
            if (convertToText(coins).length == 1) {
                value.setImage(numberImage(coins))
            } else {
                value.setImage(numberImage(parseFloat(convertToText(coins).charAt(1))))
            }
        } else if (sprites.readDataNumber(value, "index") == 2) {
            if (convertToText(coins).length == 1) {
                value.setImage(numberImage(0))
            } else {
                value.setImage(numberImage(parseFloat(convertToText(coins).charAt(0))))
            }
        }
        value.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    if (mySprite.y > tiles.getTileLocation(0, 15).bottom && !(dead)) {
        timer.background(function () {
            die()
        })
    }
    if (!(flagTimer)) {
        for (let value of tiles.getTilesByType(myTiles.tile11)) {
            if (mySprite.x >= value.left && mySprite.y >= value.y) {
                flagTimer = game.runtime()
                mySprite.vx = 0
                mySprite.ax = 0
                mySprite.x = value.left
            }
        }
    } else {
        if (game.runtime() - flagTimer < 500) {
            music.stopAllSounds()
            mySprite.ay = 0
            mySprite.vy = 0
            mySprite.ax = 0
            cantMove = true
        } else if (game.runtime() - flagTimer < 1500) {
            timer.throttle("flagsound", 5000, function () {
                music.play(music.createSoundEffect(WaveShape.Square, 330, 687, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Square, 330, 687, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Square, 330, 687, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                mySprite.vy = 125
            })
        } else if (game.runtime() - flagTimer > 2000 && game.runtime() - flagTimer < 2500) {
            timer.throttle("flagmusic", 5000, function () {
                mySprite.ax = 400
                mySprite.ay = 600
                music.stopAllSounds()
                music.play(music.createSong(hex`0078000408030101001c000f05001202c102c20100040500280000006400280003140006020004ae0000000200010802000400010d04000600011106000800011408000a0001190a000c00011d0c001000012010001400012014001800011d18001a0001081a001c00010d1c001e0001111e002000011420002200011922002400011d24002800012028002c0001202c003000011d30003200010a32003400010f34003600011236003800011638003a00011b3a003c00011e3c0040000122400044000122440046000122460048000122480050000125`), music.PlaybackMode.InBackground)
                timer.after(5500, function () {
                    game.setGameOverPlayable(true, music.melodyPlayable(music.baDing), false)
                    game.setGameOverScoringType(game.ScoringType.None)
                    info.setScore(coins)
                    game.gameOver(true)
                })
            })
        } else if (mySprite.vx == 0 && mySprite.tileKindAt(TileDirection.Center, myTiles.tile13)) {
            mSpr.setFlag(SpriteFlag.Invisible, true)
            mSprBig.setFlag(SpriteFlag.Invisible, true)
        }
    }
})
game.onUpdateInterval(100, function () {
    qcolortick += 1
    if (qcolortick == 8) {
        qcolortick = 0
    }
    if (qcolortick == 1 || qcolortick == 3) {
        color.setColor(7, color.rgb(227, 140, 57))
    } else if (qcolortick == 2) {
        color.setColor(7, color.rgb(237, 79, 18))
    } else {
        color.setColor(7, color.rgb(252, 193, 0))
    }
})
