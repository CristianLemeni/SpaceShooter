import "./background.js";
import {Background} from "./background.js";

$(document).ready(function () {
    const canvas = document.getElementById("gameCanvas");

    const renderer = new PIXI.Renderer({
        view: canvas,
        width: window.innerWidth,
        height: window.innerHeight,
        resolution: window.devicePixelRatio,
        autoDensity: true
    });
    const stage = new PIXI.Container();
    const ticker = new PIXI.Ticker();


    ticker.add(animate);
    ticker.start();

    function animate() {
        renderer.render(stage);
    }

    //assets loading
    const loader = new PIXI.Loader();
    loader.add("asteroid", "./assets/asteroid.png")
    loader.add("bigLaser", "assets/bigLaser.png")
    loader.add("bigShip1", "assets/bigShip1.png")
    loader.add("bigShip2", "assets/bigShip2.png")
    loader.add("bigShip3", "assets/bigShip3.png")
    loader.add("blackSmoke", "assets/blackSmoke.png")
    loader.add("blackSmoke2", "assets/blackSmoke2.png")
    loader.add("blueCloud", "assets/blueCloud.png")
    loader.add("brownCloud", "assets/brownCloud.png")
    loader.add("brownSmoke", "assets/brownSmoke.png")
    loader.add("distantStar", "assets/distantStar.png")
    loader.add("distantStar2", "assets/distantStar2.png")
    loader.add("gasGiant", "assets/gasGiant.png")
    loader.add("greenLaser", "assets/greenLaser.png")
    loader.add("gun1Left", "assets/gun1Left.png")
    loader.add("gun1Right", "assets/gun1Right.png")
    loader.add("gun2Left", "assets/gun2Left.png")
    loader.add("gun2Right", "assets/gun2Left.png")
    loader.add("gun3Left", "assets/gun3Left.png")
    loader.add("gun3Right", "assets/gun3Right.png")
    loader.add("gun4Left", "assets/gun4Left.png")
    loader.add("gun4Right", "assets/gun4Right.png")
    loader.add("gun5", "assets/gun5.png")
    loader.add("gun6Right", "assets/gun6Right.png")
    loader.add("gun6Left", "assets/gun6Left.png")
    loader.add("gun7Left", "assets/gun7Left.png")
    loader.add("gun7Right", "assets/gun7Right.png")
    loader.add("gun8", "assets/gun8.png")
    loader.add("gun9", "assets/gun9.png")
    loader.add("gun10", "assets/gun10.png")
    loader.add("gun11", "assets/gun11.png")
    loader.add("laser1", "assets/laser1.png")
    loader.add("laser2", "assets/laser2.png")
    loader.add("mediumShip", "assets/mediumShip.png")
    loader.add("mediumShip2", "assets/mediumShip2.png")
    loader.add("moltenPlanet", "assets/moltenPlanet.png")
    loader.add("moon", "assets/moon.png")
    loader.add("multipleLasers", "assets/multipleLasers.png")
    loader.add("purpleCloud", "assets/purpleCloud.png")
    loader.add("purpleSmoke", "assets/purpleSmoke.png")
    loader.add("rockyPlanet", "assets/rockyPlanet.png")
    loader.add("smallAsteroid1", "assets/smallAsteroid.png")
    loader.add("smallAsteroid2", "assets/smallAsteroid2.png")
    loader.add("smallAsteroid3", "assets/smallAsteroid3.png")
    loader.add("smallAsteroid4", "assets/smallAsteroid4.png")
    loader.add("smallAsteroid5", "assets/smallAsteroid5.png")
    loader.add("smallAsteroid6", "assets/smallAsteroid6.png")
    loader.add("smallAsteroid7", "assets/smallAsteroid7.png")
    loader.add("smallAsteroid8", "assets/smallAsteroid8.png")
    loader.add("smallAsteroid9", "assets/smallAsteroid9.png")
    loader.add("smallAsteroid10", "assets/smallAsteroid10.png")
    loader.add("smallAsteroid11", "assets/smallAsteroid11.png")
    loader.add("smallAsteroid12", "assets/smallAsteroid12.png")
    loader.add("smallAsteroid13", "assets/smallAsteroid13.png")
    loader.add("smallAsteroid14", "assets/smallAsteroid14.png")
    loader.add("smallAsteroid15", "assets/smallAsteroid15.png")
    loader.add("smallAsteroid16", "assets/smallAsteroid16.png")
    loader.add("smallAsteroid17", "assets/smallAsteroid17.png")
    loader.add("smallAsteroid18", "assets/smallAsteroid18.png")
    loader.add("smallAsteroid19", "assets/smallAsteroid19.png")
    loader.add("smallAsteroid20", "assets/smallAsteroid20.png")
    loader.add("smallAsteroid21", "assets/smallAsteroid21.png")
    loader.add("smallShip", "assets/smallShip.png")
    loader.add("smallShip2", "assets/smallShip.png")
    loader.add("stars", "assets/stars.png")
    loader.add("stars2", "assets/stars2.png")
    loader.add("stars3", "assets/stars3.png")
    loader.add("trail", "assets/trail.png")
    loader.add("waterPlanet", "assets/waterPlanet.png")
    loader.add("waterPlanet2", "assets/waterPlanet2.png")
    loader.add("yellowLaser", "assets/yellowLaser.png")
    loader.add("yellowLaser2", "assets/yellowLaser.png")
    loader.add("yellowStar", "assets/yellowStar.png")


    loader.load(()=>{
        let bk = new Background()
        bk.init(stage)
    })

    function resize() {
        renderer.resize(window.innerWidth, window.innerHeight)
    }
    window.onresize = resize;


});
