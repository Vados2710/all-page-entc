$(document).ready(function(){let tooltipColor="#e74c3c";let tooltipPosition="right";let tooltipName="मनोज तिवारी";let tooltipPhone="+91 XXXX XXX XXX";let phoneCode="+";let MaxLengthPhoneNumber=25;let tooltipStyle='<style>.input-group{position:relative;}.input-group input{width:100%;box-sizing:border-box;}.input-group:before{z-index:99;content:attr(data-content)"";position:absolute;top:-15px;'+tooltipPosition+":0;background:"+tooltipColor+";color:#fff;border-radius:5px;padding:3px 5px;font-family: Arial;font-size: 14px}.tooltip-hide.input-group:before{display: none;}</style>";$(document).ready(function(){$(document.body).append(tooltipStyle);$(".input-group").click(function(){let $input=$(this).find("input[name]");let currentInput=$input.attr("name");switch(currentInput){case"name":$(this).attr("data-content",tooltipName);break;case"phone":$(this).attr("data-content",tooltipPhone);$input.addClass("only-phone");$(this).on("keydown",function(a){46==a.keyCode||8==a.keyCode||9==a.keyCode||27==a.keyCode||187==a.keyCode||(65==a.keyCode&&!0===a.ctrlKey)||(35<=a.keyCode&&a.keyCode<=39)||((a.keyCode<48||57<a.keyCode)&&(a.keyCode<96||105<a.keyCode)&&a.preventDefault())});break}$(this).removeClass("tooltip-hide")})});let mask={phoneInputs:$('input[name="phone"]'),init:function(){$(this.phoneInputs).attr("maxlength",25+1);if(this.phoneInputs){$(this.phoneInputs).attr("pattern","(\\+)[0-9]{5,25}");$(this.phoneInputs).on("focusin",function(){let code=phoneCode;this.value=!(this.value.length>code.length)?code:this.value});$(this.phoneInputs).on("input",function(){let code=phoneCode;this.value.indexOf(code)&&(this.value=code)})}}};mask.init()});