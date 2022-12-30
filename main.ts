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
let MySprite2 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
    7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
    7 7 f f f 1 1 7 7 f f f 1 1 7 7 
    7 7 f f f 1 1 7 7 f f f 1 1 7 7 
    7 7 f f f 1 1 7 7 f f f 1 1 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
MySprite2.follow(mySprite, 15)
MySprite2.setPosition(100, 0)
let MySprite3 = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a a f f f 1 1 a a f f f 1 1 a a 
    a a f f f 1 1 a a f f f 1 1 a a 
    a a f f f 1 1 a a f f f 1 1 a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a 4 4 4 a a a a a a a a 
    a a a a a 4 4 4 a a a a a a a a 
    a a a a a 4 4 4 a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
MySprite3.setPosition(4, 6)
MySprite3.follow(MySprite2, 10)
