(function($) {
	$.fn.dropdownSelect = function() {
		this.each(function() {
			var $this = $(this);
			
			//init data
			var optionNames = $this.data('select-option-names').split(',');
			var optionValues = $this.data('select-option-values').split(',');
			var optionParam = $this.data('select-param');
			var optionBaseUrl = $this.data('select-baseurl');

			//init hidden elements
			var $dropdown = $('<ul></ul>')
				.addClass('hidden')
				.css('list-style', 'none')
				.css('margin', 0)
				.css('padding', '7px 8px 5px')
				.css('border', '1px solid #000')
				.css('background-color', '#FFF')
				.css('position', 'absolute')
				.css('z-index', '99999');

			var $instructions = $('<li>Change This!</li>')
				.css('font-weight', 'normal')
				.css('font-size', '50%')
				.css('border-bottom', '1px solid #DDD')
				.css('text-transform', 'uppercase')
				.css('padding-bottom', '4px')
				.css('margin', '2px 0 7px')
				.css('line-height', '90%');

			$dropdown.append($instructions);

			for(var i=0; i<optionNames.length; i++){
				var href = optionBaseUrl + '&' + optionParam + '=' + optionValues[i];
				var $option = $('<li><a href="' + href + '">' + optionNames[i] + '</a></li>');
				
				$option
					.css('list-style', 'none')
					.css('font-size', '80%')
					.css('font-weight', 'normal');

				$dropdown.append($option);
			}

			$this.append($dropdown);

			//init styles
			$this.css('display', 'inline-block');

			//handle events
			$this.on('mouseover', function(e) {
				$dropdown.removeClass('hidden');
			}).on('mouseout', function(e) {
				$dropdown.addClass('hidden');
			});
		});
	};
}(jQuery));
