(function ($) {
	
	$.fn.defaultValue = function() {

	    return this.each(function() {
			
			if(this.type != 'text' && this.type != 'password' && this.type != 'textarea')
				return;
			
			$(this).data('initValue', this.value);
			
			$(this).focus(function() {
				if(this.value == $(this).data('initValue') || this.value=='')
					this.value = '';
			});
			
			$(this).blur(function() {
				if(this.value == $(this).data('initValue') || this.value=='')
					this.value = $(this).data('initValue');
			});
			
			var _this = this;
			$(this).parents('form').submit(function () {
				if ($(_this).val() == $(_this).data('initValue')) {
					$(_this).val('');
				}
			});
			
	    });
	};
	
})(jQuery);

$(function () { $('.defvalue').defaultValue(); });
