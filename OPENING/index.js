function giftbox() {
    const cover = document.querySelector('.cover');
    const lowerMain = document.getElementById('lower_mainContainer');
  
    // Toggle the open class on the cover to animate the flip
    cover.classList.toggle('open');
  
    // If cover is open, make the message scrollable and visible
    if (cover.classList.contains('open')) {
      lowerMain.scrollTop = 0;
      lowerMain.style.pointerEvents = 'auto';
    } else {
      lowerMain.scrollTop = 0;
      lowerMain.style.pointerEvents = 'none';
    }
  }
  


  function leftSmall() {
    const leftContainer = document.getElementById("leftContainer");
    const leftButtonSwitch = document.getElementById("leftButtonSwitch");
  
    // Toggle visibility or class
    leftContainer.classList.toggle("leftContainer");
  
    // Toggle button text
    if (leftButtonSwitch.textContent === ">") {
      leftButtonSwitch.textContent = "<";
    } else {
      leftButtonSwitch.textContent = ">";
    }
  }

  function rightSmall() {
    const rightContainer = document.getElementById("rightContainer");
    const rightButtonSwitch = document.getElementById("rightButtonSwitch");
  
    // Toggle visibility or class
    rightContainer.classList.toggle("rightContainer");
  
    // Toggle button text
    if (rightButtonSwitch.textContent === "<") {
        rightButtonSwitch.textContent = ">";
    } else {
        rightButtonSwitch.textContent = "<";
    }
  }