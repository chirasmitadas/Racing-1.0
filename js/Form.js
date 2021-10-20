class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  positionElements(){
    this.input.position(width/2-120,height/2-50);
    this.playButton.position(width/2-100, height/2);
    this.titleImg.position(100,50);
  }

  styleElements(){
    this.input.class('customInput');
    this.playButton.class('customButton');
    this.titleImg.class('gameTitle');
  }

  display(){
    this.positionElements();
    this.styleElements();
    this.handleMousePressed();
  }

  handleMousePressed(){
      this.playButton.mousePressed(()=>{
        console.log(this.input.value());
      });
  }

}
