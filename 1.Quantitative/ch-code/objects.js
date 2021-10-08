var cooperhewitt = cooperhewitt || {};

cooperhewitt.objects = (function(window,document) {
	var self = {
		bindKeyboardShortcuts: function() {
			var rootUrl = cooperhewitt_abs_root_url();

			//random object cruise control
			$(window).on('keypress', function(e) {
				//check we're not in an input field
				if(e.target.nodeName != 'INPUT' && e.which == 82 && e.shiftKey) document.location.href = rootUrl + 'objects/random';
			});
		}
	}

	return self;
})(this,this.document);

$(document).ready(function() {
	cooperhewitt.objects.bindKeyboardShortcuts();
});