/*!
 * jQuery UI Repeater 1.0.0
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/repeater
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget( "ui.repeater", {
    version: "1.0.0",
    options: {
    },

	_create: function() {
		this.element
            .addClass( "ui-repeater" )
			.bind( "click", function( event ) {
				event.preventDefault();
			})
			.bind( "dblclick", function( event ) {
				event.preventDefault();
				event.stopImmediatePropagation();
			});

        var i = 0;
        $("div", this.element).each(function () {
            if (i == 0) {
                $( this ).addClass( "ui-repeater-header" );
            } else {
                if (i % 2 == 0) {
                    $( this ).addClass( "ui-repeater-alter" );

        			$( this ).bind( "mouseenter", function() {
                        $( this ).removeClass( "ui-repeater-alter" )
                                 .addClass( "ui-repeater-active" );
                    });
		        	$( this ).bind( "mouseleave", function() {
                        $( this ).removeClass( "ui-repeater-active" )
                                 .addClass( "ui-repeater-alter" );
    			    });
                } else {
                    // add normal row
                    $( this ).addClass( "ui-repeater-normal" );

        			$( this ).bind( "mouseenter", function() {
                        $( this ).removeClass( "ui-repeater-normal" )
                                 .addClass( "ui-repeater-active" );
                    });
		        	$( this ).bind( "mouseleave", function() {
                        $( this ).removeClass( "ui-repeater-active" )
                                 .addClass( "ui-repeater-normal" );
    			    });
                }
            }
            i++;
        });
	}
    // end if widget
});

}( jQuery ) );

