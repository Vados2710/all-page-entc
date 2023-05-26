/**
 * Плагин для растягивания картинок на весь родительский блок. Если не хватает ширины картинки - тянем по ширине, если высоты - тянем по высоте.
 * У родительского блока должна быть определена высота, ширина и стоять owerflow: hidden
 */
(function ($) {
	
	$.fn.overflowed = function() {

	    return this.each(function() {
			
	    	var _img = $('img', this),
	    		_parent = $(this);
	    		
	    	_img
	    		.removeAttr('width')
	    		.removeAttr('height')
	    		.one('load', function () {
	
					var _w = $(this).width(),
						_h = $(this).height(),
						_p = _parent,
						_pW = _p.width(),
						_pH = _p.height()
						_newH = _pH * _w / _pW,
						_newW = _pW * _h / _pH;
						
						
					if (
						(_w < _newW)
						|| (_h > _newH)
					) {
						$(this).width(_pW);
						$(this).css('margin-top', -($(this).height() - _pH)/2);
					}
					else {
						$(this).height(_pH);
						$(this).css('margin-left', -($(this).width() - _pW)/2);
					}
					
				})
				.each(function () {
					
					var _this = this;
					
					if (this.complete) setTimeout(function () {
						$(_this).load();
					}, 50);
							
				});
	    	
	    });
	};

})(jQuery);

