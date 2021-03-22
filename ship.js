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

    addGuns(gunType, position){
        this.gunLeft = PIXI.Sprite.from(gunType)
        this.gunRight = PIXI.Sprite.from(gunType)
        this.gunRight.scale.x = -1
        this.gunLeft.position.set(position[0].x, position[0].y)
        this.gunRight.position.set(position[1].x, position[1].y)

        this.gunLeft.anchor.set(0.5)
        this.gunRight.anchor.set(0.5)

        this.gunPortLeft = new PIXI.Container()
        this.gunPortLeft.position.set(this.gunLeft.position.x,
            this.gunLeft.position.y - this.gunLeft.height/2)

        this.gunPortRight = new PIXI.Container()
        this.gunPortRight.position.set(this.gunRight.position.x,
            this.gunRight.position.y - this.gunRight.height/2)

        this.container.addChild(this.gunLeft)
        this.container.addChild(this.gunRight)
        this.container.addChild(this.gunPortLeft)
        this.container.addChild(this.gunPortRight)

        this.container.setChildIndex(this.shipBody, this.container.children.length-1)
        this.allGuns.push(this.gunPortLeft)
        this.allGuns.push(this.gunPortRight)
    }

    addSingleGun(gunType, position){
        this.gun = PIXI.Sprite.from(gunType)

        this.gun.position.set(position.x, position.y)

        this.gun.anchor.set(0.5)

        this.gunPort = new PIXI.Container()
        this.gunPort.position.set(this.gun.position.x,
            this.gun.position.y - this.gun.height/2)

        this.container.addChild(this.gun)
        this.container.addChild(this.gunPort)

        this.container.setChildIndex(this.shipBody, this.container.children.length-1)
        this.allGuns.push(this.gunPort)
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

    shootGuns(){
        let timeline = new TimelineMax({paused: true})


        for(let i = 0; i < this.allGuns.length; i++){
            let projectile = PIXI.Sprite.from(this.ammoType)
            projectile.anchor.set(0.5)
            let x = this.container.position.x + this.allGuns[i].position.x
            let y = this.container.position.y + this.allGuns[i].position.y
            projectile.position.set(x, y)
            this.stage.addChild(projectile)
            timeline.to(projectile.position, {y: -this.stage.height, duration: 10}, 0)
            // timeline.add(()=>{
            //     projectile
            // })
        }

        timeline.play()
    }


}
