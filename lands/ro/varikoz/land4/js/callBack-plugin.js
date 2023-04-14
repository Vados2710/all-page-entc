"use strict";function ColorLuminance(t,e){(t=String(t).replace(/[^0-9a-f]/gi,"")).length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),e=e||0;var o="#",a=void 0,i=void 0;for(i=0;i<3;i++)a=parseInt(t.substr(2*i,2),16),o+=("00"+(a=Math.round(Math.min(Math.max(0,a+a*e),255)).toString(16))).substr(a.length);return o}function isMobile(){return window.innerWidth<minDeviceWidth}function isStorage(){return null!=window.localStorage}var DOMbody=document.body,minDeviceWidth=320,params={lang:"ro",accentColor:"#00c4b9",btnBackground:"#c52087",btnTextColor:"#fff",isCheckBox:!1},darkerBackColor=ColorLuminance(params.btnBackground,-.2),btnBackgroundLight=ColorLuminance(params.btnBackground,.2),customCSS={callBackDiam:150,callBackFontSize:14,callBackColor:"rgba(53, 227, 192, 1)",callBackShadowColor:"rgba(53, 227, 192, 0.47)",callBackWaveColor:"rgba(53, 227, 192, 1)"},styles=document.createElement("style");styles.innerHTML="/*callback*/.callBack {\tposition: fixed;\tbottom: 2%;\tright: 2%;\twidth: 120px;\theight: 120px;\tz-index: 1000;\t-webkit-perspective: 500px;\t-moz-perspective: 500px;\tperspective: 500px;\tfont-size: 14px;\tfont-weight: bold;}.callBack__center {\tfont-family: Arial, Helvetica, sans-serif;\tdisplay: table;\tposition: absolute;\twidth: 80%;\theight: 80%;\tleft: 10%;\tright: 10%;\ttop: 10%;\tbottom: 10%;\t-webkit-border-radius: 50%;\t-moz-border-radius: 50%;\tborder-radius: 50%;\ttext-align: center;\tvertical-align: middle;\tbackground-color: "+customCSS.callBackColor+';\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDYzRkI2NzJDODExRTdCRDUwQzUyQURDQzFBODY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJERDYzRkI3NzJDODExRTdCRDUwQzUyQURDQzFBODY2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkRENjNGQjQ3MkM4MTFFN0JENTBDNTJBRENDMUE4NjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkRENjNGQjU3MkM4MTFFN0JENTBDNTJBRENDMUE4NjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz76YWpfAAADqElEQVR42uydwXIjMQgFDZX//2X2tJeUXYljJB7Qum7VjgZ6GmYsRRYRD8bjVRBs+o1/kfu3wDAAAIhRQABAHhAtYXBymApDYABGKytggOVWAIA7CZIFAQDmwQYAlAUAeGfYZhB4C3gOQVwGwSYAEIJPWaYV4jAEJXHypMnHB3B0gsIu2KAVAJEMSicQbAIEfvCpn2yD0zCEMgDRjfKmJeKKMb0wcVNXopwAQQKAExOZvBypBQQukKjpEJhynFwkQdMXJmaBELcBuP1F7LEABKk4uVhCgOBynFwwEVsgMIU4uWgCtmxWKIfAhQMfF69T+Zm6FAL19QBRcL0KIMp+LfUG2q3uR27BYBUx8iY1V6UvOQ3DdQg6LQlT609iAgTd1gSG4HxCDIK3AYjFEIQwmHZjLqwK1rbBcQi8cbC3zO1oOcAA/ZrEVBC9eZC3zPFYKdhugNMrfBUgAAABGCohCADQgIHt4Z264ycwqECQagEMcB+EwAD9QaiGIM0CvjgJKmWhNAYYoC4JEotunae/NQS2zQDGvPKbQCP5pfO7bYHoaIDpkEalAUh+//n+2QJObZWZd2CAIY1VtyaQ5M+4B5sCwKQn/6MO/fCI7wAYyd9nHefJX20BfgugCUTBm+0WSgbgBMucWNgnBsACfAfAApvKgPM6tnsonhgSAPhxHOyFTa0DAIycB8A+NYAV1uSpFvge0/J7VDbAZAjavAVQi3kN5LVwOwAGBBgACCgBjO0AYAEMQFO4HQADAgyACZYDYECAAYCAEkA52A6AAQEGAAJKAOVgOwAGBH1H1oIQe+id6aP8pmKTDIAJXl8//vBv9ADNIXgnueUgZANgyyGIRqAeM8BWCKIRqMdLgCoEIQ5YTAFAFYITQVb//1Y3gV2f2JgCgIlDEMJJiikGsIE2COG5SZaADhCEWPKvXO9mD9Bhm9lPIFRulh3RBHbZa/gMhBZHwXZ4C+i04TQeQt/tT8yj6jWQXcciEFR+BwACAQiqPwQBQTEECl8CgaAQApVPwUBQBAF/LXw5BGo/BgHB5cGJIcstwJlByyHg1DBKgPQwQNgNADYAACAAACAAAPoCAMAGB2LiA24YEJYaABskxMC3B2D7vfvAQGCDxQBstIEBwF4bGAbYC0LKPW3aHTwJhLT72Lg9vDsIqXPffGSMMWfODOpkgyPz5NCoHiAcmxuHR78OdExPPgD8LvAxMfEAoG2Fa+UIALRguN6HAEBesqJT4v+PfwIMAFQ/3gdIE8f2AAAAAElFTkSuQmCC");\tbackground-repeat: no-repeat;\tbackground-position: center;\t-webkit-background-size: 50%;\tbackground-size: 50%;\t-webkit-box-shadow: 0px 0px 2px 5px '+customCSS.callBackShadowColor+";\t-moz-box-shadow: 0px 0px 2px 5px "+customCSS.callBackShadowColor+";\tbox-shadow: 0px 0px 2px 5px "+customCSS.callBackShadowColor+';\ttext-transform: uppercase;\tcolor: #fff;\t-webkit-transform-origin: 50%;\t-moz-transform-origin: 50%;\t-ms-transform-origin: 50%;\ttransform-origin: 50%;\t-webkit-animation: touchMe 5s linear infinite;\t-moz-animation: touchMe 5s linear infinite;\tanimation: touchMe 5s linear infinite;}.callBack__center:hover {\tcursor: pointer;}.spinner {\t-webkit-animation: spin 1s linear;\t-moz-animation: spin 1s linear;\tanimation: spin 1s linear;}.text-hide-own {\topacity: 1 !important;}.bg-img-none {\tbackground-image: none;}.callBack__center::before,.callBack__center::after {\tcontent: "";\tposition: absolute;\tleft: 0;\ttop: 0;\tdisplay: block;\twidth: 100%;\theight: 100%;\t-webkit-border-radius: 50%;\t-moz-border-radius: 50%;\tborder-radius: 50%;\t-webkit-box-shadow: inset 0px 0px 60px 0px '+customCSS.callBackWaveColor+";\t-moz-box-shadow: inset 0px 0px 60px 0px "+customCSS.callBackWaveColor+";\tbox-shadow: inset 0px 0px 60px 0px "+customCSS.callBackWaveColor+';}.callBack__center::before {\t-webkit-animation: pulse 3s linear infinite;\t-moz-animation: pulse 3s linear infinite;\tanimation: pulse 3s linear infinite;}.callBack__center::after {\t-webkit-animation: pulse-small 3s linear infinite;\t-moz-animation: pulse-small 3s linear infinite;\tanimation: pulse-small 3s linear infinite;}.callBack__center span {\tdisplay: table-cell;\tvertical-align: middle;\topacity: 0;\ttransition: opacity .5s;\t-webkit-user-select: none;\t-moz-user-select: none;\t-ms-user-select: none;\t-o-user-select: none;\tuser-select: none;}/*END: callback*//*popup*/#m1-form .popup-m1-form button,#m1-form .popup-m1-title {\ttext-transform: uppercase;\tfont-weight: 700;\tletter-spacing: .7px}#m1-form,#m1-form .popup-m1-form button,#m1-form .popup-m1-form input[type=text],#m1-form>div,.close-m1,.popup-m1-cont,.popup-m1-form,.popup-m1-text1,.popup-m1-text2,.popup-m1-title {\tmargin: 0;\tpadding: 0;\tborder: 0;\toutline: 0;\tposition: relative;}#m1-form {\tposition: fixed;\tdisplay: none;\toutline: 0;\twidth: 450px;\tmargin-left: -225px;\ttop: 70px;\tleft: 50%;\tbackground: #fff;\tz-index: 9999;\t-webkit-border-radius: 8px;\t-moz-border-radius: 8px;\tborder-radius: 8px;\tfont-family: Arial, Helvetica, sans-serif;}#m1-form span.close-m1 {\tposition: absolute;\tdisplay: block;\twidth: 28px;\theight: 28px;\tline-height: 26px;\ttop: 3px;\tright: 3px;\tfont-size: 24px;\tcolor: #fff;\ttext-align: center;\tcursor: pointer;\tz-index: 999;}#m1-form span.close-m1:before {\tcontent: "\\00D7"}#m1-form>div {\tposition: relative;\twidth: 100%;\toverflow: hidden;\t-webkit-border-radius: 8px;\t-moz-border-radius: 8px;\tborder-radius: 8px}#m1-form .popup-m1-title {\tposition: relative;\tpadding: 20px 0 16px;\ttext-align: center;\tfont-size: 25px;\tline-height: 1.3em;\tcolor: #fff;\tbackground: '+params.accentColor+'}#m1-form .popup-m1-title:after,#m1-form .popup-m1-title:before {\tcontent: "";\tposition: absolute;\twidth: 50%;\theight: 20px;\tbottom: -10px;\tbackground: '+params.accentColor+'}#m1-form .popup-m1-title:before {\tleft: 0;\t-webkit-transform: skew(0deg, 4deg);\t-moz-transform: skew(0deg, 4deg);\t-ms-transform: skew(0deg, 4deg);\ttransform: skew(0deg, 4deg)}#m1-form .popup-m1-title:after {\tright: 0;\t-webkit-transform: skew(0deg, -4deg);\t-moz-transform: skew(0deg, -4deg);\t-ms-transform: skew(0deg, -4deg);\ttransform: skew(0deg, -4deg)}#m1-form .popup-m1-cont {\tposition: relative;\tpadding: 25px 20px 30px;\tcolor: #333;\tfont-size: 17px;\tline-height: 1.5em}#m1-form .popup-m1-cont div.popup-m1-text1 {\ttext-align: center}#m1-form .popup-m1-form {\tposition: relative;\tdisplay: block;\tpadding: 20px 0;\twidth: 100%;}#m1-form .popup-m1-form:after {\tcontent: "";\tdisplay: block;\tclear: both;\theight: 0}#m1-form .popup-m1-form button,#m1-form .popup-m1-form input[type=text] {\tpadding: 0;\tbackground: #fff;\tposition: relative;\tdisplay: block;\tmargin: 0 auto;\ttext-align: left;\t-webkit-border-radius: 4px;\t-moz-border-radius: 4px;\tborder-radius: 4px;}#m1-form .popup-m1-form input[type=text]::-webkit-input-placeholder {\tcolor: #a9a9a9;\topacity: 1}#m1-form .popup-m1-form input[type=text]:-moz-placeholder {\tcolor: #a9a9a9;\topacity: 1}#m1-form .popup-m1-form input[type=text]::-moz-placeholder {\tcolor: #a9a9a9;\topacity: 1}#m1-form .popup-m1-form input[type=text]:-ms-input-placeholder {\tcolor: #a9a9a9;\topacity: 1}#m1-form .popup-m1-form input[type=text],#m1-form .popup-m1-form select {\tdisplay: block;\twidth: 100%;\theight: 64px;\tmargin: 0 auto 16px;\tline-height: 64px;\tfont-size: 17px;\tcolor: #222;\tbackground: #fff;\ttext-indent: 20px;\tborder: 1px solid #ccc}#m1-form .popup-m1-form input[type=text]:focus {\tborder-color: #aaa}#m1-form .popup-m1-form button {\twidth: 100%;\theight: 68px;\tline-height: 68px;\tcolor: '+params.btnTextColor+";\ttext-align: center;\ttext-decoration: none;\tfont-size: 22px;\tborder-bottom: 3px solid "+darkerBackColor+";\tbackground: "+params.btnBackground+";\tcursor: pointer;\t-webkit-box-shadow: 0 0;\t-moz-box-shadow: 0 0;\tbox-shadow: 0 0;\ttext-shadow: 0 0 0}#m1-form .popup-m1-form button:hover {\tbackground: "+btnBackgroundLight+'}#m1-form .popup-m1-form button:active {\ttop: -1px}#m1-form .popup-m1-cont p.popup-m1-text2 {\ttext-align: center}#m1-form .popup-m1-cont p.popup-m1-text2:before {\tcontent: "";\tposition: relative;\tdisplay: inline-block;\twidth: 16px;\theight: 15px;\tmargin: 0 10px 0 0;\ttop: 2px;\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAA6klEQVR42mJMORXAgAZEgLgIiH2AWA0qdgOINwHxJCB+g6yYCU1zMBDfAeI/QBwNxPxQHA+VvwtVAwcsaJpXA7ErEO9FM/giFB8E4t1AHArEa5FdIArE83BoRgZ7oWpAasWQDcgF4gkENCMb0g/EBcgG+AHxOgbiwVpoIMPDQB+IpwHxPyC2JaD5MBAzArEuzICHUAkrIm23QWI/BHlBjoF8IMfEQCGgigGP0MScSdD/CGSAPJRzBJrmQVHUBA1ldihGBiB1R6FseVg0MmLJTMeBmBtJEyx6bQmFASi3VQHxeSQxRlx+AAgwAF+pKdMzI/goAAAAAElFTkSuQmCC");\tbackground-repeat: no-repeat;}#m1-form .input-wrapper{\tposition: relative;\tmargin: 0 auto 15px}#m1-form .form__checkbox {   display: none}#m1-form label {   display: none}#m1-form .form__checkbox:checked+label::after {   opacity: 1}#m1-form .form__check {   display: block;   padding-left: 35px;   font-size: 12px;   color: #777}#m1-form .form__check::before {\tcontent: "";   display: block;   position: absolute;   width: 24px;   height: 24px;   border: 1px solid #b7b7b7;   background-color: #fff;   top: 0;   left: 0;   cursor: pointer;   -webkit-border-radius: 5px;   border-radius: 5px}#m1-form .form__check::after {\tcontent: "";   display: block;   position: absolute;   width: 16px;   height: 9px;   top: 5px;   left: 4px;   border-bottom: 3px solid #696969;   border-left: 3px solid #696969;   -webkit-transform: rotate(-45deg);   -ms-transform: rotate(-45deg);   transform: rotate(-45deg);   opacity: 0;   cursor: pointer}#m1-form  .form__check .link {   text-decoration: none;   color: inherit;   font-weight: bold}#m1-form .form__check .link:hover {   text-decoration: underline}#m1-form .form__submit:disabled {   opacity: .7;   cursor: not-allowed}#m1-form .form__submit:disabled:hover {\tbackground:  '+params.btnBackground+'\tcursor: not-allowed}#overlay-popup-m1 {\tdisplay: none;\tposition: fixed;\twidth: 100%;\theight: 100%;\ttop: 0;\tleft: 0;\tbackground: rgba(0, 0, 0, .6);\t-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";\tfilter: alpha(opacity=0);\t-moz-opacity: 0;\t-khtml-opacity: 0;\topacity: 0;\tz-index: 999}.js-show {\tdisplay: block !important;\t-webkit-animation: animShow .3s linear;\t-moz-animation: animShow .3s linear;\tanimation: animShow .3s linear;\topacity: 1 !important}/*END: popup*//*animations*/@-webkit-keyframes spin {\t0% {\t\t-webkit-transform: rotateY(0deg);\t}\t100% {\t\t-webkit-transform: rotateY(360deg);\t}}@-moz-keyframes spin {\t0% {\t\t-moz-transform: rotateY(0deg);\t}\t100% {\t\t-moz-transform: rotateY(360deg);\t}}@keyframes spin {\t0% {\t\ttransform: rotateY(0deg);\t}\t100% {\t\ttransform: rotateY(360deg);\t}}@-webkit-keyframes touchMe {\t0%,\t90% {\t\t-webkit-transform: rotate(0deg);\t}\t92% {\t\t-webkit-transform: rotate(10deg);\t}\t94% {\t\t-webkit-transform: rotate(-10deg);\t}\t96% {\t\t-webkit-transform: rotate(5deg);\t}\t98% {\t\t-webkit-transform: rotate(-5deg);\t}\t100% {\t\t-webkit-transform: rotate(0deg);\t}}@-moz-keyframes touchMe {\t0%,\t90% {\t\t-moz-transform: rotate(0deg);\t}\t92% {\t\t-moz-transform: rotate(10deg);\t}\t94% {\t\t-moz-transform: rotate(-10deg);\t}\t96% {\t\t-moz-transform: rotate(5deg);\t}\t98% {\t\t-moz-transform: rotate(-5deg);\t}\t100% {\t\t-moz-transform: rotate(0deg);\t}}@keyframes touchMe {\t0%,\t90% {\t\ttransform: rotate(0deg);\t}\t92% {\t\ttransform: rotate(10deg);\t}\t94% {\t\ttransform: rotate(-10deg);\t}\t96% {\t\ttransform: rotate(5deg);\t}\t98% {\t\ttransform: rotate(-5deg);\t}\t100% {\t\ttransform: rotate(0deg);\t}}@-webkit-keyframes pulse {\t0% {\t\t-webkit-transform: scale(1.1);\t\topacity: 0\t}\t40% {\t\t-webkit-transform: scale(1.2);\t\topacity: .05\t}\t50% {\t\t-webkit-transform: scale(1.3);\t\topacity: .1\t}\t60% {\t\t-webkit-transform: scale(1.5);\t\topacity: .3\t}\t80% {\t\t-webkit-transform: scale(1.7);\t\topacity: .1\t}\t100% {\t\t-webkit-transform: scale(2);\t\topacity: 0\t}}@-moz-keyframes pulse {\t0% {\t\t-moz-transform: scale(1.1);\t\topacity: 0\t}\t40% {\t\t-moz-transform: scale(1.2);\t\topacity: .05\t}\t50% {\t\t-moz-transform: scale(1.3);\t\topacity: .1\t}\t60% {\t\t-moz-transform: scale(1.5);\t\topacity: .3\t}\t80% {\t\t-moz-transform: scale(1.7);\t\topacity: .1\t}\t100% {\t\t-moz-transform: scale(2);\t\topacity: 0\t}}@keyframes pulse {\t0% {\t\ttransform: scale(1.1);\t\topacity: 0\t}\t40% {\t\ttransform: scale(1.2);\t\topacity: .05\t}\t50% {\t\ttransform: scale(1.3);\t\topacity: .1\t}\t60% {\t\ttransform: scale(1.5);\t\topacity: .3\t}\t80% {\t\ttransform: scale(1.7);\t\topacity: .1\t}\t100% {\t\ttransform: scale(2);\t\topacity: 0\t}}@-webkit-keyframes pulse-small {\t0%,\t40% {\t\t-webkit-transform: scale(1);\t\topacity: .3\t}\t50% {\t\t-webkit-transform: scale(1.1);\t\topacity: .5\t}\t60% {\t\t-webkit-transform: scale(1.20);\t\topacity: .7\t}\t80% {\t\t-webkit-transform: scale(1.3);\t\topacity: .4\t}\t100% {\t\t-webkit-transform: scale(1.5);\t\topacity: 0\t}}@-moz-keyframes pulse-small {\t0%,\t40% {\t\t-moz-transform: scale(1);\t\topacity: .3\t}\t50% {\t\t-moz-transform: scale(1.1);\t\topacity: .5\t}\t60% {\t\t-moz-transform: scale(1.20);\t\topacity: .7\t}\t80% {\t\t-moz-transform: scale(1.3);\t\topacity: .4\t}\t100% {\t\t-moz-transform: scale(1.5);\t\topacity: 0\t}}@keyframes pulse-small {\t0%,\t40% {\t\ttransform: scale(1);\t\topacity: .3\t}\t50% {\t\ttransform: scale(1.1);\t\topacity: .5\t}\t60% {\t\ttransform: scale(1.20);\t\topacity: .7\t}\t80% {\t\ttransform: scale(1.3);\t\topacity: .4\t}\t100% {\t\ttransform: scale(1.5);\t\topacity: 0\t}}@-webkit-keyframes animShow {\t0% {\t\topacity: .3\t}\t50% {\t\topacity: .5;\t\t-webkit-transform: scale(1.1);\t}\t100% {\t\t-webkit-transform: scale(1);\t\topacity: 1\t}}@-moz-keyframes animShow {\t0% {\t\topacity: .3\t}\t50% {\t\topacity: .5;\t\t-moz-transform: scale(1.1);\t}\t100% {\t\t-moz-transform: scale(1);\t\topacity: 1\t}}@keyframes animShow {\t0% {\t\topacity: .3\t}\t50% {\t\topacity: .5;\t\ttransform: scale(1.1);\t}\t100% {\t\ttransform: scale(1);\t\topacity: 1\t}}@media screen and (max-width: 480px){\t#m1-form{\t\tmax-width: 300px;\t\tmargin-left: -150px;\t\ttop: 30px;\t}\t#m1-form .popup-m1-form input[type=text], #m1-form .popup-m1-form button{\t\theight: 40px;\t\tline-height: 40px;\t}\t#m1-form .popup-m1-title{\t\tfont-size: 20px;\t\tline-height: 1.3rem;\t}\t.popup-m1-text1{\t\tline-height: 1.2rem;\t}\t#m1-form .popup-m1-cont p.popup-m1-text2{\t\tfont-size: 13px;\t}}',DOMbody.appendChild(styles);var callBackPluginText={ro:"Сomanda",ru:"Заказать",it:"Ordinare",es:"Orden",lt:"Užsakyti",my:"Memesan",hi:"ऑर्डर करें",pl:"Zamówić",el:"Παραγγελία",sk:"Objednať",si:"Naroči",fr:"Commander",hr:"Naručite",de:"Bestellen",pt:"Encomendar",hu:"Megrendelni",bg:"Поръчай",rs:"Naručiti",cz:"Objednat",vn:"Đặt hàng",th:"สั่งซื้อ"},popupText={ru:{title:"Нравится ли вам это предложение?",desc:"Мы будем предоставлять информацию о продукции и лучшие условия, и мы представим специальные предложения!",name:"Ваше имя",phone:"Телефон",order:"Заказать",desc2:"Оператор позвонит Вам в течение 5-10 минут.",policy:["Соглашаюсь с","Политикой конфиденциальности"]},ro:{title:"ÎȚI PLACE ACEASTĂ OFERTĂ?",desc:"Îți vom furniza informații despre produs și cele mai bune condiții și îți vom prezenta oferte speciale!",name:"Nume",phone:"Telefon",order:"CONTACTEAZĂ-MĂ TELEFONIC",desc2:"Operatorul te va contacta telefonic în 5-10 minute.",policy:["Sunt de acord cu","Politica de confidențialitate"]},it:{title:"Vi piace questa frase?",desc:"Forniremo informazioni sui prodotti e le migliori condizioni e offriremo offerte speciali!",name:"Il vostro nome",phone:"Telefono",order:"Ordinare",desc2:"L'operatore vi chiamerà entro 5 - 10 minuti.",policy:["Sono d'accordo con la","politica sulla privacy"]},es:{title:"¿TE GUSTA ESTA PROPOSICIÓN?",desc:"Le daremos la mayor información sobre los productos y las mejores condiciones, y le presentaremos las ofertas especiales!",name:"Su nombre",phone:"Su numero de telefono",order:"Orden",desc2:"El operador le llamará en 5-10 minutos.",policy:["Estoy de acuerdo con la","Política de privacidad"]},lt:{title:"Ar jums patinka šis pasiūlymas?",desc:"Mes suteiksime informaciją apie produktus ir geriausias sąlygas, ir mes pateiksime specialius pasiūlymus!",name:"Jūsų vardas",phone:"Telefonas",order:"Užsakyti",desc2:"Operatorius paskambins jums per 5-10 minučių",policy:["Sutinku su","konfidencialumo politika"]},my:{title:"Adakah anda suka tawaran ini?",desc:"Kami akan memberikan maklumat mengenai produk dan syarat terbaik, dan kami akan memberitahu anda tentang tawaran istimewa!",name:"Nama anda",phone:"Telefon",order:"Perintah",desc2:"Operator akan memanggil anda dalam masa 5-10 minit.",policy:["Saya bersetuju dengan","Dasar Privasi"]},hi:{title:"क्या आप इस प्रस्तावना को पसंद करते हैं?",desc:"हम उत्पादों और सर्वोत्तम शर्तों के बारे में जानकारी प्रदान करेंगे, और हम विशेष प्रस्तावों को प्रस्तुत करेंगे!",name:"आपका नाम",phone:"फोन नंबर",order:"ऑर्डर करें",desc2:"ऑपरेटर आपको 5-10 मिनट के दौरान में कॉल करेगा।",policy:["गोपनीयता नीति","से मेरी सहमति है"]},pl:{title:"Czy podoba ci się ta oferta?",desc:"Nadamy informacje o produktach i najlepszych warunkach, i my nadamy oferty specjalne!",name:"Twoje imię",phone:"Telefon",order:"Zamówić",desc2:"Operator zadzwoni do ciebie w ciągu 5-10 minut.",policy:["Zgadzam się z ","Polityką prywatności"]},el:{title:"Σας αρέσει αυτή η προσφορά;",desc:"Θα παρέχουμε πληροφορίες για τα προϊόντα και τις καλύτερες συνθήκες και θα σας παρουσιάσουμε τις  ειδικές προσφορές!",name:"Το όνομά σας",phone:"Τηλέφωνο",order:"Παραγγελία",desc2:"Ο χειριστής θα σας καλέσει μέσα σε 5-10 λεπτά.",policy:["Συμφωνώ με την ","Πολιτική Απορρήτου"]},sk:{title:"Pači sa Vám tato ponuka?",desc:"Poskytneme Vám informácie o produktoch a najlepších podmienkach a predložíme Vám  špeciálne ponuky!",name:"Vaše meno",phone:"Telefón",order:"Objednať",desc2:"Operátor vám zavolá do 5-10 minút.",policy:["Súhlasím s ","Pravidlami ochrany osobných údajov"]},si:{title:"Vam je všeč ta ponudba?",desc:"Zagotovili bomo informacije o izdelku in najboljše pogoje in predložili vam bomo posebne ponudbe!",name:"Vaše ime",phone:"Telefonska številka",order:"Naroči zdaj",desc2:"Operater vas bo poklical v roku 5-10 minut.",policy:["Strinjam se z ","Zakonom o zasebnosti"]},fr:{title:"Aimez-vous cette offre?",desc:"Nous fournirons des informations sur les produits et les meilleures conditions, et nous présenterons des offres spéciales!",name:"Votre nom",phone:"Téléphone",order:"Commander",desc2:"L'opérateur vous contactera dans 5-10 minutes.",policy:["Je suis d'accord avec ","la politique de confidentialité"]},hr:{title:"Jeli vam se dopada ovaj predlog",desc:"Mi ćemo pružati informaciju o proizvodima i najbolje uvjete, takođet mi ćemo pružiti specialne uvjete!",name:"Vaše ime",phone:"Broj telefona",order:"Naručite",desc2:"Naš operater će vas nazvati tjekom 5-10 minuta.",policy:["Slažem se s ","politikom privatnosti"]},de:{title:"Gefällt Ihnen dieses Angebot?",desc:"Wir informieren über Produkte und beste Bedingungen, und bieten spezielle Angebote!",name:"Ihr Name",phone:"Telefon",order:"Bestellen",desc2:"Ein Operator wird Sie innerhalb von 5-10 Minuten anrufen.",policy:["Ich stimme der","Datenschutzrichtlinie zu"]},pt:{title:"Gostaria desta oferta?",desc:"Vamos fornecer informações sobre os produtos e as melhores condições e também vamos fornecer-lhe ofertas especiais!",name:"O seu nome",phone:"Telefone",order:"Encomendar",desc2:"O operador vai ligar para você dentro de 5-10 minutos.",policy:["Concordo com a ","Política de Privacidade"]},hu:{title:"Tetszik-e Önnek ez az ajánlat?",desc:"Információkat és a legjobb feltételeket fogunk nyújtani a termékekről, és különleges ajánlatokat fogunk benyújtani!",name:"Az Ön neve",phone:"Telefonszám",order:"Megrendelni",desc2:"Az operátorunk 5-10 percen belül felhív.",policy:["Egyetértek az ","adatvédelmi irányelvekkel"]},bg:{title:"Харесва ли ви това предложение?",desc:"Ние ще предоставим информация за продукта и най-добрите условия, и ние ще представим специални предложения!",name:"Вашето име",phone:"Телефон",order:"Поръчай",desc2:"Оператор ще се свърже с Вас след 10-15 минути.",policy:["Съгласен съм с ","политиката за поверителност"]},rs:{title:"Da li vam se sviđa ova ponuda?",desc:"Mi ćemo pružiti informacije o proizvodima i najboljim uslovima i  predložićemo specijalne ponude!",name:"Vaše ime",phone:"Telefon",order:"Naručiti",desc2:"Operator će vas nazvati u roku od 5-10 minuta.",policy:["Slažem se s ","politikom privatnosti"]},cz:{title:"Líbí se vám tato nabídka?",desc:"Budeme poskytovat informace o produktech a nejlepších podmínkách, a poskytneme speciální nabídky!",name:"Vaše jméno",phone:"Telefon",order:"Objednat",desc2:"Operátor vám zavolá během 5-10 minut.",policy:["Souhlasím se","zásadami ochrany osobních údajů"]},vn:{title:"Bạn có thích chào hàng này không?",desc:"Chúng tôi sẽ cung cấp thông tin về các sản phẩm và tạo điều kiện tốt nhất, đồng thời chúng tôi sẽ cung cấp hàng khuyến mãi!",name:"Tên của bạn",phone:"Số điện thoại",order:"Đặt hàng",desc2:"Nhân viên tư vấn sẽ gọi cho bạn trong 5-10 phút.",policy:["Tôi đồng ý với","chính sách bảo mật"]},th:{title:"คุณชอบข้อเสนอนี้ไหม",desc:"ทางเราจะให้ข้อมูลสินค้าและเงื่อนไขที่ดีที่สุดแล้วเราก็จะยื่นข้อเสนอพิเศษ",name:"ชื่อของคุณ",phone:"เบอร์โทร",order:"สั่งซื้อ",desc2:"ทางโอปเรเตอร์จะโทรหาภายใน 5-10นาที ครับ/ค่ะ",policy:["ฉันเห็นด้วยกับ","นโยบายความเป็นส่วนตัว"]}};isMobile()||function(){var t=function(){$("body").css({overflow:"hidden"}),a.classList.add("js-show"),i.classList.add("js-show")},e=function(){$("body").css({overflow:"visible"}),a.classList.remove("js-show"),i.classList.remove("js-show")},o=function(t){t?l=setInterval((function(){n.classList.toggle("spinner"),p.classList.toggle("bg-img-none"),s.classList.toggle("text-hide-own")}),5e3):clearInterval(l)},a=document.createElement("div"),i=document.createElement("div");(function(){var t=document.createElement("div");t.className="callBack",t.innerHTML='<div class="callBack__center"><span>'+callBackPluginText[params.lang]+'</span></div>\n<div class="callBack__shadow"></div>',DOMbody.appendChild(t)})(),a.setAttribute("id","overlay-popup-m1"),DOMbody.appendChild(a),i.className="m1modal",i.setAttribute("id","m1-form"),params.isCheckBox?"hi"==params.lang?i.innerHTML='<span class="close-m1"></span><div><h2 class="popup-m1-title">'+popupText[params.lang].title+'</h2><div class="popup-m1-cont"><p class="popup-m1-text1">'+popupText[params.lang].desc+'</p><form method="POST" action="/land/order" class="popup-m1-form al-form"><select class="al-country" style="display: none;"></select><div class="input-wrapper"><input type="text" id="popup-name" name="name" placeholder="'+popupText[params.lang].name+'" required=""><label for="popup-name"></label></div><div class="input-wrapper"><input type="text" name="phone" id="popup-phone" placeholder="'+popupText[params.lang].phone+'" required=""><label for="popup-phone"></label></div> <div class="input-wrapper"><input type="checkbox" checked name="policy" class="form__checkbox" id="policy-callback"><label for="policy-callback" class="form__check"><a class="link" href="privacy.html">'+popupText[params.lang].policy[0]+"</a> "+popupText[params.lang].policy[1]+'  </label></div><button type="submit" class="form__submit js-submit">'+popupText[params.lang].order+'</button></form><p class="popup-m1-text2">'+popupText[params.lang].desc2+"</p></div>\n</div>":i.innerHTML='<span class="close-m1"></span>\n<div><h2 class="popup-m1-title">'+popupText[params.lang].title+'</h2><div class="popup-m1-cont"><p class="popup-m1-text1">'+popupText[params.lang].desc+'</p><form method="POST" action="/land/order" class="popup-m1-form al-form"><select class="al-country" style="display: none;"></select><div class="input-wrapper"><input type="text" id="popup-name" name="name" placeholder="'+popupText[params.lang].name+'" required=""><label for="popup-name"></label></div><div class="input-wrapper"><input type="text" name="phone" id="popup-phone" placeholder="'+popupText[params.lang].phone+'" required=""><label for="popup-phone"></label></div> <div class="input-wrapper"><input type="checkbox" checked name="policy" class="form__checkbox" id="policy-callback"><label for="policy-callback" class="form__check">'+popupText[params.lang].policy[0]+' <a class="link" href="privacy.html">'+popupText[params.lang].policy[1]+'</a> </label></div><button type="submit" class="form__submit js-submit">'+popupText[params.lang].order+'</button></form><p class="popup-m1-text2">'+popupText[params.lang].desc2+"</p></div>\n</div>":i.innerHTML='<span class="close-m1"></span>\n<div><h2 class="popup-m1-title">'+popupText[params.lang].title+'</h2><div class="popup-m1-cont"><p class="popup-m1-text1">'+popupText[params.lang].desc+'</p><form method="POST" action="/land/order" class="popup-m1-form al-form"><select class="al-country" style="display: none;"></select><div class="input-wrapper"><input type="text" id="popup-name" name="name" placeholder="'+popupText[params.lang].name+'" required=""><label for="popup-name"></label></div><div class="input-wrapper"><input type="text" name="phone" id="popup-phone" placeholder="'+popupText[params.lang].phone+'" required=""><label for="popup-phone"></label></div><button type="submit" class="form__submit js-submit">'+popupText[params.lang].order+'</button></form><p class="popup-m1-text2">'+popupText[params.lang].desc2+"</p></div>\n</div>",DOMbody.appendChild(i);var r=document.querySelector(".close-m1"),n=document.getElementsByClassName("callBack")[0],p=document.getElementsByClassName("phone")[0],s=document.querySelector(".callBack__center span"),l=void 0;o(!0),n.addEventListener("mouseover",(function(){o(!1)})),n.addEventListener("mouseleave",(function(){o(!0)})),p.addEventListener("click",t),r.addEventListener("click",e),a.addEventListener("click",e);var m=!0;window.addEventListener("mouseout",(function(e){if(e.pageY-window.scrollY<1&&m)return m=!1,setTimeout((function(){m=!0}),1e4),t(),!1})),window.addEventListener("resize",(function(){isMobile()?document.getElementsByClassName("callBack")[0].style.display="none":document.getElementsByClassName("callBack")[0].style.display="block"})),n.style.width=customCSS.callBackDiam/Math.sqrt(2)+"px",n.style.height=customCSS.callBackDiam/Math.sqrt(2)+"px",n.style.fontSize=customCSS.callBackFontSize+"px"}();