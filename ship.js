export class Ship {

    init(type, stage){
        this.shipBody = PIXI.Sprite.from(type)
        this.container = new PIXI.Container()
        this.container.addChild(this.shipBody)

        this.stage = stage

        this.stage.addChild(this.container)

        this.container.position.set(window.innerWidth/2, window.innerHeight/1.5)

        this.initPointX = 0
        this.initPointY = 0

        this.allGuns = []
    }

    move(clientX, clientY){
        let deltaX = clientX - this.initPointX
        let deltaY = clientY - this.initPointY
        let timeline = new TimelineLite()
        timeline.to(this.container.position, {x: deltaX, ease: "power4.easeInOut"}, 0)
        timeline.to(this.container.position, {y: deltaY, ease: "power4.easeInOut"}, 0)
    }

    moveEnemy(clientX, clientY, duration = 0.01){
        let deltaX = clientX - this.initPointX
        let deltaY = clientY - this.initPointY
        let timeline = new TimelineLite()
        timeline.to(this.container.position, {x: deltaX, ease: "power4.easeInOut", duration: duration}, 0)
        timeline.to(this.container.position, {y: deltaY, ease: "power4.easeInOut", duration: duration}, 0)
    }

    addGuns(gunType, position){
        let gunLeft = PIXI.Sprite.from(gunType)
        let gunRight = PIXI.Sprite.from(gunType)
        gunRight.scale.x = -1
        gunLeft.position.set(position[0].x, position[0].y)
        gunRight.position.set(position[1].x, position[1].y)

        gunLeft.anchor.set(0.5)
        gunRight.anchor.set(0.5)

        let gunPortLeft = new PIXI.Container()
        gunPortLeft.position.set(gunLeft.position.x,
            gunLeft.position.y - gunLeft.height/2)

        let gunPortRight = new PIXI.Container()
        gunPortRight.position.set(gunRight.position.x,
           gunRight.position.y - gunRight.height/2)

        this.container.addChild(gunLeft)
        this.container.addChild(gunRight)
        this.container.addChild(gunPortLeft)
        this.container.addChild(gunPortRight)

        this.container.setChildIndex(this.shipBody, this.container.children.length-1)
        this.allGuns.push(gunPortLeft)
        this.allGuns.push(gunPortRight)
    }

    addSingleGun(gunType, position){
        let gun = PIXI.Sprite.from(gunType)

        gun.position.set(position.x, position.y)

        gun.anchor.set(0.5)

        let gunPort = new PIXI.Container()
        gunPort.position.set(gun.position.x,
            gun.position.y - gun.height/2)

        this.container.addChild(gun)
        this.container.addChild(gunPort)

        this.container.setChildIndex(this.shipBody, this.container.children.length-1)
        this.allGuns.push(gunPort)
    }

    addEngine(engineType, posX, posY){
        this.engines = new PIXI.Container()
        let engine = PIXI.Sprite.from(engineType)
        engine.anchor.set(0.5)
        engine.position.set(posX, posY)


        engine.filters = [new PIXI.filters.BloomFilter({blur: 20})];

        this.engines.addChild(engine)

        let timeline = new TimelineLite({repeat: -1})
        timeline.to(this.engines.children[0].position, {y: this.engines.children[0].position.y + 1, duration: 0.1}, 0)
        timeline.to(this.engines.children[0].position, {y: this.engines.children[0].position.y - 1, duration: 0.1}, 0)



        this.container.addChild(this.engines)
        this.container.setChildIndex(this.engines, this.container.children.length-2)


    }

    addAmmoType(ammoType){
        this.ammoType = ammoType
    }

    shootGuns(orientation, projectileName, duration){
        let timeline = new TimelineMax({paused: true})


        for(let i = 0; i < this.allGuns.length; i++){
            let projectile = PIXI.Sprite.from(this.ammoType)
            projectile.anchor.set(0.5)
            projectile.scale.y = orientation
            let x = this.container.position.x + this.allGuns[i].position.x
            let y = this.container.position.y + this.allGuns[i].position.y
            projectile.position.set(x, y)
            projectile.name = 'projectile' + projectileName
            this.stage.children[0].addChild(projectile)
            timeline.to(projectile.position, {y: -this.stage.height * orientation, duration: duration}, 0)
            timeline.add(()=>{
                this.stage.children[0].removeChild(projectile)
            })
        }

        timeline.play()
    }

}
