let isMobile = false;
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  isMobile = true;
  document.addEventListener('mousemove', e => {
    const colorPalette = ["#AE9145", "#BF9B30", "#DCC09F", "#C6A34F", "#FFDC73", "#DDBD68", "#DAB658"];
    const sand = document.createElement('sand');
    const x = e.pageX;
    const y = e.pageY;
    const size = Math.random() * 3;
    sand.style.left = x + "px";
    sand.style.top = y + "px";
    sand.style.backgroundColor = colorPalette[Math.floor(Math.random()*colorPalette.length)];
    sand.style.width =  1 + size + "px";
    sand.style.height = 1 + size + "px";
    
    document.body.appendChild(sand);

    setTimeout(function() {
      sand.remove();
    }, 500);
  });

  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('nav ul li');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if(window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }

    });

    navLi.forEach(li => {
      li.classList.remove('active');
      console.log("removed")
      if(li.classList.contains(current)) {
        li.classList.add('active');
        test = current;
      }
    });
  });
}

function updateTimer() {
  future  = Date.parse("October 30, 2022 15:18:00.000Z");
  now     = new Date();
  diff    = future - now;

  if(diff > 0) {

    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );

    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;

    document.querySelector("#presale .timer")
      .innerHTML = 
        '<div><span>' + d + `</span><br/>${d == 1 ? `day` : `days`}</div>` +
        '<div><span>' + h + '</span><br/>hours</div>' +
        '<div><span>' + m + '</span><br/>minutes</div>' +
        '<div><span>' + s + '</span><br/>seconds</div>' ;
  } else {
    document.querySelector("#presale .live").style.display = "block";
    document.querySelector("#presale .info .start").style.display = "none";
    document.querySelector("#presale .info ul").style.columns = "1";
  }
}
setInterval('updateTimer()', 1000 );

let topBtn = document.getElementById('top-btn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.height = `${isMobile ? `40px` : `4rem`}`;
    topBtn.style.opacity = '1';
  } else {
    topBtn.style.height = '0';
    topBtn.style.opacity = '0';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function copyAddress() {
  let ca = document.getElementById('contract-address').textContent;

  navigator.clipboard.writeText(ca);

  document.querySelector('.copied').style.width = '110%';

  setTimeout(() => {
    document.querySelector('.copied').style.width = '0';
  }, 2000)
}