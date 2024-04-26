export class Keys {
  constructor() {
    addEventListener("keydown", this.handleKeydown);
    addEventListener("keyup", this.handleKeyup);

    this.leftKey = new CustomEvent("leftPressed", {
      details: {
        leftPressed: true
      }
    });

    // rightPressedEvent = new CustomEvent("rightPressed");
  }

  handleKeydown(event) {
    if(event.key == 'ArrowLeft') {

      document.dispatchEvent(new CustomEvent("left", {
        detail: {
          leftPressed: true
        }
      }));

    } else if(event.key == 'ArrowRight') {
      document.dispatchEvent(new CustomEvent("right", {
        detail: {
          rightPressed: true
        }
      }));
    }
  }

  handleKeyup(event) {
    if(event.key == 'ArrowLeft') {

      document.dispatchEvent(new CustomEvent("left", {
        detail: {
          leftPressed: false
        }
      }));

    } else if(event.key == 'ArrowRight') {
      document.dispatchEvent(new CustomEvent("right", {
        detail: {
          rightPressed: false
        }
      }));
    }
  }
}
