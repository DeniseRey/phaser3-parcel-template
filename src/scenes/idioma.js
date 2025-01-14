import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";
export class Idioma extends Phaser.Scene {
    
    wasChangedLanguage = "NADA"
    actualizartexto;

    constructor() {
        super("idioma");
    }

    preload()
    {
        const fonts = new WebFontFile(this.load, 'Lilita One')
        this.load.addFile(fonts)
    }
    create() 
    {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);

        const boton2 = this.add.sprite(500, 250, 'banderabr').setInteractive({cursor: "pointer"})
        boton2.on('pointerover', function(){boton2.setTexture('banderabr1')})
        boton2.on('pointerout', function(){boton2.setTexture('banderabr')})
        boton2.on('pointerdown', () => {this.getTranslations(PT_BR)})

        const boton3 = this.add.sprite(this.cameras.main.centerX, 250, 'banderaarg').setInteractive({cursor: "pointer"})
        boton3.on('pointerover', function(){boton3.setTexture('banderaarg1')})
        boton3.on('pointerout', function(){boton3.setTexture('banderaarg')})
        boton3.on('pointerdown', () => {this.getTranslations(ES_AR)})

        const boton4 = this.add.sprite(150, 250, 'banderaus').setInteractive({cursor: "pointer"})
        boton4.on('pointerover', function(){boton4.setTexture('banderaus1')})
        boton4.on('pointerout', function(){boton4.setTexture('banderaus')})
        boton4.on('pointerdown', () => {this.getTranslations(EN_US)})

        const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'botonnuevo').setInteractive({cursor: "pointer"})
        boton1.on('pointerover', function(){boton1.setTexture('botonnuevo2')})
        boton1.on('pointerout', function(){boton1.setTexture('botonnuevo')})
        boton1.on('pointerdown', () => {this.scene.start("MainMenu")})

        this.actualizartexto = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, getPhrase('ATRÁS'), {
            fontFamily: 'Lilita One',
            fontSize: '28px',
            color: '#FFE648',
            stroke: '#9C3B17',
            strokeThickness: 7,
            shadow: { offsetX: 0, offsetY: 0, fill: false, blur: 6, stroke: false },
            resolution: 2
        }).setOrigin(0.5)
    }

    update()
    {
        if(this.wasChangedLanguage === "FETCHED"){
            this.wasChangedLanguage = "READY";
            this.actualizartexto.setText(getPhrase('ATRÁS'));   
        }
    }

    async getTranslations(language){
        this.wasChangedLanguage = "FETCHING"
        await getTranslations(language)
        this.wasChangedLanguage = "FETCHED"
    }
}