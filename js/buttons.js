console.log('in buttons.js')

window.onkeypress = function(event){

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
document.getElementById('gh-btn').click();
}

