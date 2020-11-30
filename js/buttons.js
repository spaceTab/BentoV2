console.log('in buttons.js')

window.onkeypress = function(event){
  // if (event.keyCode == 49) {
    // console.log('button has been pressed');
    // document.getElementById('gh-btn').click();
  // } else if (event.keyCode == 50){
    // document.getElementById('yt-btn').click();
  // } else if (event.keyCode == 51) {
    // document.getElementById('gm-btn').click()
  // }

  switch (event.which) {
    case 49:
      document.getElementById('gh-btn').click();
      break;
      case 50:
        document.getElementById('yt-btn').click();
        break;
    case 51:
      document.getElementById('gm-btn').click();
      break;
  }
}
