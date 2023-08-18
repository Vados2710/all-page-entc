// import '@css/slick.css'
import '@css/_reset.sass'
import '@css/main.sass'
import '@css/media.sass'
import * as $ from "jquery";

let circlesWithValue,
  winWidth = window.innerWidth,
  winHeight = window.innerHeight;

circlesWithValue = {

  canvasElements: document.querySelectorAll('.description__value'),
  canvasWrapper: document.querySelectorAll('[data-text]'),
  lineWidth: 12,
  drawedTriggers: [],
  winH: winHeight,

  sizeInit: function (web) {
    for (let i = 0, iMax = this.canvasElements.length; i < iMax; i++) {
      let wapSize = this.canvasElements[i].getAttribute('data-size-wap'),
        websize = this.canvasElements[i].getAttribute('data-size-web');

      this.canvasElements[i].width = web ? websize : wapSize;
      this.canvasElements[i].height = web ? websize : wapSize;
      web ? this.lineWidth = 16 : false
    }
  },

  radFromPercent: function (percent) {
    return ((Math.PI * 2) / 100) * percent
  },

  drawCash: function (data) {

    let self = this,
      lineWidth = this.lineWidth,
      ctx = data.ctx,
      cx = data.cx,
      cy = data.cy,
      startPoint = data.startPoint,
      corner = data.corner,
      textContainer = data.container,
      text = 0;

    return function draw() {
      requestAnimationFrame(function () {

        if (startPoint <= +corner + 50) {

          ctx.arc(cx, cy, cx - (lineWidth / 2), self.radFromPercent(startPoint), self.radFromPercent(startPoint))
          ctx.stroke();
          startPoint += 1;

          requestAnimationFrame(function () {
            draw(ctx, cx, cy, startPoint, corner);
            textContainer.innerHTML = text + '%'
            text += 1;
          })

        } else {
          cancelAnimationFrame(draw);
        }

      })
    }

  },

  drawOnScroll: function () {

    let canvases = this.canvasElements,
      drawedTriggers = this.drawedTriggers;

    for (let i = 0, iMax = canvases.length; i < iMax; i++) {
      if (canvases[i].getBoundingClientRect().top < this.winH - (canvases[i].offsetHeight) && !drawedTriggers[i]) {

        let ctx = canvases[i].getContext('2d'),
          cx = canvases[i].offsetWidth / 2,
          cy = canvases[i].offsetHeight / 2,
          cornerValue = canvases[i].getAttribute('data-value');

        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#FF7A7C';

        this.drawCash({
          ctx: ctx,
          cx: cx,
          cy: cy,
          startPoint: 50,
          corner: cornerValue,
          container: this.canvasWrapper[i]
        })();
        drawedTriggers.push(true)

      }
    }

    // drawedTriggers.length === canvases.length ? document.removeEventListener('scroll', circlesWithValue.drawOnScroll) : false

  }

}

winWidth < 1024 ? circlesWithValue.sizeInit() : circlesWithValue.sizeInit('web');

window.onload = function() {

  document.addEventListener('scroll', function () {
    circlesWithValue.drawOnScroll()
  });
  circlesWithValue.drawOnScroll()

  mouseParallax();

  openSpoiler({
    containers: '.reviews__case',
    heightOfTargets: '[data-reviews-height]',
    buttons: '.reviews__button',
  });

  $('.scrollToForm').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('form').offset().top - 150}, 700)
  });

}

function openSpoiler(data) {

  let spoilersContainer = document.querySelectorAll(data.containers),
    spoilersHeight = document.querySelectorAll(data.heightOfTargets),
    spoilerButtons = document.querySelectorAll(data.buttons);

  for(let i = 0, iMax = spoilerButtons.length; i < iMax; i++) {
    spoilerButtons[i].addEventListener('click', function listener () {
      this.style.display = 'none';
      spoilersContainer[i].style.height = spoilersHeight[i].offsetHeight + 'px';
      spoilersContainer[i].setAttribute('data-opened', '')
      this.removeEventListener('click', listener);
    })
  }

}

function mouseParallax() {
  var containers = document.querySelectorAll('[data-parallax-container]');

  var returnVisibleContainer = function () {
    for (var p = 0, max = containers.length; p < max; p++) {

      var containerPosition = containers[p].getBoundingClientRect().top,
        containerHeight = containers[p].offsetHeight;

      if (containerPosition / 1.3 < containerHeight && containerPosition > (containerHeight * (-1))) {
        return containers[p];
      }

    }
  }

  var move = function (wrapper) {

    if (wrapper) {
      var parallaxItems = wrapper.querySelectorAll('[data-parallax-speed]');

      for (var i = 0, max = parallaxItems.length; i < max; i++) {
        var elementValue = parallaxItems[i].getAttribute('data-parallax-speed'),
          coordsX = Math.round(elementValue * ((event.screenX - winWidth / 2) / 10)),
          coordsY = Math.round(elementValue * ((event.screenY - winHeight / 2) / 10)),
          rotateValue = (coordsY + coordsX) / 5;

        parallaxItems[i].style.transform = 'translate(' + coordsX + 'px, ' + coordsY + 'px) rotate(' + rotateValue + 'deg)'
        parallaxItems[i].style.WebkitTransform = 'translate(' + coordsX + 'px, ' + coordsY + 'px) rotate(' + rotateValue + 'deg)'
        parallaxItems[i].style.MsTransform = 'translate(' + coordsX + 'px, ' + coordsY + 'px) rotate(' + rotateValue + 'deg)'

      }
    }

  }

  if (returnVisibleContainer()) {
    document.addEventListener('mousemove', function () {
      move(returnVisibleContainer())
    })
  } else {
    document.removeEventListener('mousemove', function () {
      move(returnVisibleContainer())
    })
  }

  document.addEventListener('scroll', function () {
    returnVisibleContainer();
    move(returnVisibleContainer())
  })


}

