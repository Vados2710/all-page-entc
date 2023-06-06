/*
A jQuery plugin of countdown timers with/without control button, based on the https://github.com/caike/jQuery-Simple-Timer and its original LICENSE https://raw.githubusercontent.com/caike/jQuery-Simple-Timer/master/LICENSE.md
*/

/*
MIT License

Copyright (c) 2019 lighthanabi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function (factory) {
  // Using as a CommonJS module
  if(typeof module === "object" && typeof module.exports === "object") {
    // jQuery must be provided as argument when used
    // as a CommonJS module.
    //
    // For example:
    //   let $ = require("jquery");
    //   require("jquery-simple-timers")($);
    module.exports = function(jq) {
      factory(jq, window, document);
    }
  } else {
    // Using as script tag
    //
    // For example:
    //   <script src="jquery.simple.timers.js"></script>
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {
  // Polyfill new JS features for older browser
  Number.isFinite = Number.isFinite || function(value) {
    return typeof value === 'number' && isFinite(value);
  }

  var timers;

  var Timer = function(targetElement){
    this._options = {};
    this.targetElement = targetElement;
    return this;
  };

  Timer.start = function(userOptions, targetElement){
    timers = new Timer(targetElement);
    mergeOptions(timers, userOptions);
    return timers.start(userOptions);
  };

  function mergeOptions(timers, opts) {
    opts = opts || {};

    // Element that will be created for hours, minutes, and seconds.
    timers._options.elementContainer = opts.elementContainer || 'div';

    var classNames = opts.classNames || {};

    timers._options.classNameSeconds       = classNames.seconds  || 'jst-seconds'
      , timers._options.classNameMinutes   = classNames.minutes  || 'jst-minutes'
      , timers._options.classNameHours     = classNames.hours    || 'jst-hours'
      , timers._options.classNameClearDiv  = classNames.clearDiv || 'jst-clearDiv'
      , timers._options.classNameTimeout   = classNames.timeout || 'jst-timeout';
  }

  Timer.prototype.start = function(options) {

    var that = this;

    var createSubElements = function(timersBoxElement){
      var seconds = document.createElement(that._options.elementContainer);
      seconds.className = that._options.classNameSeconds;

      var minutes = document.createElement(that._options.elementContainer);
      minutes.className = that._options.classNameMinutes;

      var hours = document.createElement(that._options.elementContainer);
      hours.className = that._options.classNameHours;

      var clearElement = document.createElement(that._options.elementContainer);
      clearElement.className = that._options.classNameClearDiv;

      return timersBoxElement.
        append(hours).
        append(minutes).
        append(seconds).
        append(clearElement);
    };

    this.targetElement.each(function(_index, timersBox) {
      var that = this;
      var timersBoxElement = $(timersBox);
      var cssClassSnapshot = timersBoxElement.attr('class');

      timersBoxElement.on('complete', function() {
        clearInterval(timersBoxElement.intervalId);
      });

      timersBoxElement.on('complete', function() {
        timersBoxElement.onComplete(timersBoxElement);
      });

      timersBoxElement.on('complete', function(){
        timersBoxElement.addClass(that._options.classNameTimeout);
      });

      timersBoxElement.on('complete', function(){
        if(options && options.loop === true) {
          timers.resetTimer(timersBoxElement, options, cssClassSnapshot);
        }
      });

      timersBoxElement.on('resetime', function() {
		  
		clearInterval(timersBoxElement.intervalId);
		console.log(timersBoxElement);
		timersBoxElement.removeClass(that._options.classNameTimeout);
		timersBoxElement.data('timeLeft', 0);
		timersBoxElement.paused = false;
		options.secondsLeft=0;
		var secondsLeft = options.secondsLeft || that.fetchSecondsLeft(timersBoxElement);
		var endTime = secondsLeft + that.currentTime();
		var timeLeft = endTime - that.currentTime();
		that.setFinalValue(that.formatTimeLeft(timeLeft), timersBoxElement);
      });
	  
      timersBoxElement.on('start', function() {
		var secondsLeft = options.secondsLeft || that.fetchSecondsLeft(timersBoxElement);
		var refreshRate = options.refreshRate || 1000;
		var endTime = secondsLeft + that.currentTime();
		var timeLeft = endTime - that.currentTime();
		that.setFinalValue(that.formatTimeLeft(timeLeft), timersBoxElement);
	
		intervalId = setInterval((function() {
			timeLeft = endTime - that.currentTime();
			// When timers has been idle and only resumed past timeout,
			// then we immediatelly complete the timers.
			if(timeLeft < 0 ){
				timeLeft = 0;
			}
			timersBoxElement.data('timeLeft', timeLeft);
			that.setFinalValue(that.formatTimeLeft(timeLeft), timersBoxElement);
		}.bind(this)), refreshRate);
	
		timersBoxElement.intervalId = intervalId;
      });
	  
	 timersBoxElement.on('pauseResume', function() {
	    if(timersBoxElement.paused){
			console.log('resume');
          timersBoxElement.trigger('resume');
        }else{
			console.log('pause');
          timersBoxElement.trigger('pause');
        }
	  });
	  
      timersBoxElement.on('pause', function() {
        clearInterval(timersBoxElement.intervalId);
        timersBoxElement.paused = true;
      });

      timersBoxElement.on('resume', function() {
        timersBoxElement.paused = false;
		options.secondsLeft=timersBoxElement.data('timeLeft');
		timersBoxElement.trigger('start');
      });

      createSubElements(timersBoxElement);
      return this.startCountdown(timersBoxElement, options);
    }.bind(this));
  };

  Timer.prototype.fetchSecondsLeft = function(element){
    var secondsLeft = element.data('seconds-left');
    var minutesLeft = element.data('minutes-left');
	  
    if(Number.isFinite(secondsLeft)){
      return parseInt(secondsLeft, 10);
    } else if(Number.isFinite(minutesLeft)) {
      return parseFloat(minutesLeft) * 60;
    }else {
      throw 'Missing time data';
    }
  };

  Timer.prototype.startCountdown = function(element, options) {
    options = options || {};


    var intervalId = null;
    var defaultComplete = function(){
      clearInterval(intervalId);
      return this.clearTimer(element);
    }.bind(this);

    element.onReset = options.onReset || false;
	if(element.onReset != false){
		options.onReset.hide();
		element.onReset.on('click', function() {
			console.log('reset');
			element.trigger('resetime');
			if(element.onStart)
				element.onStart.show();
			if(element.onPause)
				element.onPause.hide();
			if(element.onReset)
				element.onReset.hide();
		});
	}
    element.onComplete = options.onComplete || defaultComplete;
    element.onPause = options.onPause || false;
    if(element.onPause != false){
		options.onPause.hide();
      element.onPause.on('click', function() {
        if(element.paused){
			console.log('resume');
          element.trigger('resume');
        }else{
			console.log('pause');
          element.trigger('pause');
        }
      });
    }
	
	element.onStart=options.onStart ||false;
	if(element.onStart != false){
	element.onStart.on('click', function(){
		console.log('start btn');
		element.trigger('start');
		if(element.onStart)
			element.onStart.hide();
		if(element.onPause)
			element.onPause.show();
		if(element.onReset)
			element.onReset.show();
	});
	};
	
	
  };


  /**
   * Resets timers and add css class 'loop' to indicate the timers is in a loop.
   * $timersBox {jQuery object} - The timers element
   * options {object} - The options for the timers
   * css - The original css of the element
   */
  Timer.prototype.resetTimer = function($timersBox, options, css) {
    var interval = 0;
    if(options.loopInterval) {
		interval = parseInt(options.loopInterval, 10) * 1000;
    }
    setTimeout(function() {
		$timersBox.trigger('reset');
		$timersBox.attr('class', css + ' loop');
		$timersBox.trigger('start');
		//timers.startCountdown($timersBox, options);
    }, interval);
  }

  Timer.prototype.clearTimer = function(element){
    element.find('.jst-seconds').text('00');
    element.find('.jst-minutes').text('00:');
    element.find('.jst-hours').text('00:');
  };

  Timer.prototype.currentTime = function() {
    return Math.round((new Date()).getTime() / 1000);
  };

  Timer.prototype.formatTimeLeft = function(timeLeft) {

    var lpad = function(n, width) {
      width = width || 2;
      n = n + '';

      var padded = null;

      if (n.length >= width) {
        padded = n;
      } else {
        padded = Array(width - n.length + 1).join(0) + n;
      }

      return padded;
    };

    var hours = Math.floor(timeLeft / 3600);
    timeLeft -= hours * 3600;

    var minutes = Math.floor(timeLeft / 60);
    timeLeft -= minutes * 60;

    var seconds = parseInt(timeLeft % 60, 10);

    if (+hours === 0 && +minutes === 0 && +seconds === 0) {
      return [];
    } else {
      return [lpad(hours), lpad(minutes), lpad(seconds)];
    }
  };

  Timer.prototype.setFinalValue = function(finalValues, element) {

    if(finalValues.length === 0){
      this.clearTimer(element);
      element.trigger('complete');
      return false;
    }

    element.find('.' + this._options.classNameSeconds).text(finalValues.pop());
    element.find('.' + this._options.classNameMinutes).text(finalValues.pop() + ':');
    element.find('.' + this._options.classNameHours).text(finalValues.pop() + ':');
  };


  $.fn.startTimer = function(options) {
    this.TimerObject = Timer;
    Timer.start(options, this);
    return this;
  };
  
  

}));
