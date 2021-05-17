
export class Background {

    init(stage) {
        this.stage = stage
        this.background = new PIXI.Container()

        this.stage.addChild(this.background)
        this.addBackground()

        this.asteroids()
    }

    addBackground(){
        let stars = PIXI.Sprite.from('stars')
        let stars2= PIXI.Sprite.from('stars2')
        let stars3 = PIXI.Sprite.from('stars3')

        let starsContainer = new PIXI.Container()
        starsContainer.addChild(stars, stars2, stars3)

        let yellowStar = PIXI.Sprite.from('yellowStar')
        let waveFilter =  new PIXI.filters.ReflectionFilter();
        waveFilter.boundary = 0;
        waveFilter.mirror = false;
        waveFilter.amplitude[0] = 1;
        waveFilter.amplitude[1] = 1;
        waveFilter.waveLength[0] = 58;
        waveFilter.waveLength[1] = 86;
        waveFilter.alpha[0] = 1;
        waveFilter.alpha[1] = 1;
        yellowStar.filters = [waveFilter, new PIXI.filters.GlowFilter({outerStrength: 0.5})];
        let timeline = new TimelineLite();
        timeline.fromTo(waveFilter, {time: 1}, {duration: 8, time: 20, repeat: -1, ease: "power0.easeNone"});
        starsContainer.addChild(yellowStar)

        let gasGiant = PIXI.Sprite.from('gasGiant')
        gasGiant.scale.set(0.25)
        gasGiant.filters = [new PIXI.filters.GlowFilter({outerStrength: 0.5})];
        gasGiant.position.set(window.innerWidth - window.innerWidth/4, 250)
        starsContainer.addChild(gasGiant)

        let waterPlanet2 = PIXI.Sprite.from('waterPlanet2')
        waterPlanet2.scale.set(0.1)
        waterPlanet2.position.set(window.innerWidth - window.innerWidth/3, 500)
        starsContainer.addChild(waterPlanet2)

        this.background.addChild(starsContainer)

    }

    asteroids(){
        const asteroidContainer = new PIXI.Container()
        asteroidContainer.width = this.stage.width
        asteroidContainer.height = this.stage.height
        for(let i = 0; i < 50; i++){
            let randInt = this.getRandomInt(1, 21)
            let texture = "smallAsteroid" + randInt.toString()
            let asteroidSprite = new PIXI.Sprite.from(texture)
            asteroidContainer.addChild(asteroidSprite)
            let x = window.innerWidth + asteroidSprite.width * 2
            let y = window.innerHeight/2 + this.getRandomInt(-window.innerHeight, window.innerHeight)
            let destinationY = (window.innerHeight/2 + this.getRandomInt(-window.innerHeight, window.innerHeight))
            asteroidSprite.anchor.set(0.5)
            asteroidSprite.rotation = this.getRandomInt(0, 6)
            if(i % 4 === 0){
                asteroidSprite.rotation = 0
                let rotationTimeline = new TimelineMax({repeat: -1, paused: true})
                rotationTimeline.to(asteroidSprite, {rotation: 6.28319, duration: 100})
                rotationTimeline.play()
            }
            let timeline = new TimelineMax({repeat: -1, paused: true})
            timeline.fromTo(asteroidSprite.position, {x: x, y: y}, {x: -window.innerWidth,
                y: destinationY,
                duration: this.getRandomInt(500, 5000)}, i * 20)
            timeline.play()
        }
        this.stage.addChild(asteroidContainer)
    }


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

