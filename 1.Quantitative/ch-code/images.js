var cooperhewitt = cooperhewitt || {};

cooperhewitt.images = (function(window, document) {
	var _$objectImage, _$pageHeader, _pageHeaderBottomY;
	var _$imageInfo, _$scaledImageInfo, _$unscaledImageInfo, _imageSrc;
	var _scrollStart;

	var _cacheValues = function() {
		_$imageInfo = $('.image-info');
		_$pageHeader = $('#page-header');
		
		if(_$pageHeader.length > 0) _pageHeaderBottomY = _$pageHeader.offset().top + _$pageHeader.outerHeight();
	}

	/*
	_initThumbnailImageRollovers creates the rollover interaction on pages that list image thumbnails. It's called from the window load handler at 
	the bottom of this file, so all of the thumbnail images have been loaded on the page by the time that this function is run.

	Styling for the thumbnails is with the .thumbnail selectors in css/global.css. Making changes to the main .thumbnail selector
	should be safe, but the rollover functionality is dependent on things staying as they are with the .thumbnail .object-image selectors.
	*/
	var _initThumbnailImageRollovers = function() {
		var $thumbnails = $('.thumbnail:has(img[data-allow-redraw]):not(.load-error)');

		if($thumbnails.length == 0) return;

		//are we rolling from sq to n, or from n to sq? this should be set as data-mouseout-image-size="<size>", defaults to sq
		var $thumbailsHolder = $('.thumbnails');
		
		var outSize, overSize, outClass, overClass;

		if($thumbailsHolder.data('mouseout-image-size') == 'n') {
			outSize = '_n';
			overSize = '_sq';
			outClass = 'noncropped';
			overClass = 'cropped';
		} else {
			outSize = '_sq';
			overSize = '_n';
			outClass = 'cropped';
			overClass = 'noncropped';
		}

		//add rollover images to DOM through JS
		$thumbnails.each(function() {
			var $thumbnail = $(this);
			var $thumbnailImg = $thumbnail.find('img');

			if($thumbnailImg.data('load-error')) {
				return;
			}

			var hoverImgSrc = $thumbnailImg.attr('src').replace(outSize,overSize);
			$thumbnailImg.addClass(outClass);

			var mouseoutSize = $thumbailsHolder.data('mouseout-image-size');

			//duplicate and change image source
			var $thumbnailHoverImg = $thumbnailImg
				.clone()
				.removeClass(outClass)
				.removeClass(mouseoutSize == 'n' ? 'landscape portrait' : '')
				.addClass(overClass + ' hidden')
				.attr('id', $thumbnailImg.attr('id') + '-hover')
				.attr('src', '')
				.insertAfter($thumbnailImg)
				.attr('src', hoverImgSrc);

			//vertical centering
			if(mouseoutSize == 'n') {
				_verticallyCenterThumbnail($thumbnailImg, false);
			} else {
				_verticallyCenterThumbnail($thumbnailHoverImg, true);
			}
		});

		//mouse interaction
		$thumbnails.on('mouseover', 'a', function() {
			$(this).find('.' + outClass).addClass('hidden');
			$(this).find('.' + overClass).removeClass('hidden');
		}).on('mouseout', 'a', function() {
			$(this).find('.' + outClass).removeClass('hidden');
			$(this).find('.' + overClass).addClass('hidden');
		}).on('touchstart', 'a', function(e) {
			//start checking how far we scroll
			_scrollStart = e.view.scrollY;
		}).on('touchend', 'a', function(e) {
			//are we scrolling?
			if (Math.abs(_scrollStart - e.view.scrollY) > 5) {
				return;
			}

			//if we're not scrolling, just follow the link on mobile safari
			href = $(this).attr('href');

			if(href) {
				window.location = href;
			}
		});
	};

	var _verticallyCenterThumbnail = function($thumbnail, hide) {
		var src = $thumbnail.attr('src');

		$thumbnail
			.attr('src', '')
			.on('load', function(e) {
				e.preventDefault();

				var $this = $(this);

				$this.removeClass('hidden');
				var naturalHeight = $this.naturalHeight();
				var naturalWidth = $this.naturalWidth();

				var height = $this.outerHeight();
				var width = $this.outerWidth();
				if(hide) $this.addClass('hidden');

				if(naturalWidth > naturalHeight) {
					var thumbnailHeight = $this.parent().outerHeight();

					//vertical centering
					$this.css('top', 100 * ((thumbnailHeight / 2 - height / 2) / thumbnailHeight) + '%');
					$this.css('transform', 'translateY(0%)');
				} else {
					//$this.addClass('portrait');
				}
			})
			.attr('src', src);
	}

	/*
	_initObjectImage creates the click-to-scale functionality on object pages. It's called from the document ready at the bottom of this file, meaning
	that the DOM has loaded but the image hasn't. It works by grabbing the default full-sized image and intercepting its load, instead putting
	the dithered object into the DOM while continuing to load the full-size image in a hidden img element (this ensures non-JS users see the full-size
	image, even if it takes a little longer to load).

	It also applies scaling code that toggles between a scaled and unscaled image on click.

	Styles for this are located in css/rebrand/rebrand.css with the .object-image selectors.
	*/
	var _initObjectImage = function() {
		_$objectImage = $('.picture-holder.image-redraw img');

		if(_$objectImage.length == 0) return;

		_imageSrc = _$objectImage.attr('src');

		//add dither img
		var $ditherImage = $('<img />');
		$ditherImage
			.addClass('img-responsive')
			.attr('src', _imageSrc.replace('_b.jpg', '_d.gif'))
			.insertAfter(_$objectImage);

		var $ditherImageNotes = $('<p>Loading full size image...</p>')
			.addClass('hey-look')
			.insertAfter($ditherImage);

		//remove full size img
		_$objectImage.remove();

		//add load listener to full size img
		_$objectImage.one('load', function() {
			//hide dither, show full size
			$ditherImage.addClass('hidden');
			$ditherImageNotes.addClass('hidden');
			_$objectImage.removeClass('hidden');

			//if the image being loaded is the error image, don't continue to implement scaling functionality
			if(_$objectImage.data('load-error')) return;

			//on load, scale image to window height
			_scaleObjectImage();

			//init scale status text
			var thisImg = '<a href="' + _imageSrc + '">this image</a>';

			_$scaledImageInfo = $('<small>You are viewing a version of ' + thisImg + ' that&apos;s scaled to fit your screen. To see the fullsize version, click the image above.</small>').prependTo(_$imageInfo);
			_$unscaledImageInfo = $('<small>You are viewing ' + thisImg + ' in all its big-ness. To see it scaled to your screen, click the image above.</small>').addClass('hidden').prependTo(_$imageInfo);

			//toggle between full/scaled on click
			_$objectImage.parent('a').on('click', function(e) {
				e.preventDefault();
				_$objectImage.toggleClass('img-responsive img-super-big');
				_$scaledImageInfo.toggleClass('hidden');
				_$unscaledImageInfo.toggleClass('hidden');
				_scaleObjectImage();
			});
		});

		//add full size back to kick off load
		//remove and readd src to force our onload handler to be executed if the image has already loaded from cache
		_$objectImage.addClass('hidden').attr('src', '').attr('src', _imageSrc).insertBefore($ditherImage);
	};

	var _scaleObjectImage = function() {
		if(_$objectImage) {
			if(_$objectImage.hasClass('img-responsive')) {
				_$objectImage.css('max-height', Math.max(320,window.innerHeight - 300) + 'px');
			} else {
				_$objectImage.css('max-height', 'inherit');
			}
		}
	}

	var _bindWindowResize = function() {
		$(window).resize(function() {
			_scaleObjectImage();
		});
	};

	var self = {
		initOnLoad: function() {
			//todo: only call this if we know there are thumbnails on the page
			_initThumbnailImageRollovers();
		},

		initOnReady: function() {
			_cacheValues();
			_bindWindowResize();

			//todo: only call this if we know there's a full-size image on the page
			_initObjectImage();
		}, 

		// calls to this function are placed inline on all images' onerror handler
		onLoadError: function(element) {
			//see issues 194 and 328
			if(navigator.userAgent.toLowerCase().indexOf('msie') > 0) return;
		
			var $element = $(element);

			$element
				.data('load-error', true)
				.attr('src', cooperhewitt_abs_root_url() + 'images/missing-sq.png')
				.css('border', 'none')
				.parent('a')
					.css('border', 'none')
				.parents('.thumbnail')
					.addClass('load-error') // if error fires before doc ready
					.off('mouseover', 'a') // if error fires after doc ready
				.find('img')
					.after('<div class="image-not-available-caption">An image for this object exists but there was an error loading it.</div>');
		}
	};

	return self;
})(this, this.document);

//ready is called once the markup has loaded
//load is called after the images have loaded
//most things should be in the ready handler. thumbnail image scaling is placed in onload to avoid putting load event listeners on 20+ img elements

$(document).ready(function() {
	cooperhewitt.images.initOnReady();
});

$(window).on('load', function() {
	cooperhewitt.images.initOnLoad();
});
