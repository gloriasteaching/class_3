let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
    2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
    2 2 f f f 1 1 2 2 f f f 1 1 2 2 
    2 2 f f f 1 1 2 2 f f f 1 1 2 2 
    2 2 f f f 1 1 2 2 f f f 1 1 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite.setPosition(80, 60)
mySprite.setVelocity(0, 15)
controller.moveSprite(mySprite, 100, 100)
