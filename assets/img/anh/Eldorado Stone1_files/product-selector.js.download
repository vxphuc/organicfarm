
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

selectorResultsUrl = '/product-selector/results/';

;(function ($, window, document, undefined) {
    'use strict';

    $(document).ready( function() {

        /**
         * Parse Query Parameter as Object
         *
         * Based off the following @links below.
         *
         * Example:
         * url: http://localhost:3000/product-selector/?region=64,63,32&step=2
         * call: $.getQueryParams();
         * result: Object {region: "64,63,32", step: "2"}
         *
         * @link   https://css-tricks.com/snippets/jquery/get-query-params-object/
         *         https://github.com/youbastard/jquery.getQueryParameters/blob/master/qp.js
         * @param  string    optionally provide string, otherwise use document.location.search
         * @return object    Object with key/value pairs
         */
        $.extend({
            getQueryParams : function(str) {

                // Use argument or fall back to current url
                if ( str = str || document.location.search ) {
                    str = str
                        .replace(/(^\?)/, '')
                        .split('&')
                        .map( function(n) {
                            return n = n.split('='),
                                   this[n[0]] = decodeURIComponent(n[1]),
                                   this
                        }.bind({}))[0];
                    } else {
                        str = {};
                    }

                return str;
            }
        });

        var Utils = {

            /**
             * Swap Key With Value
             *
             * Switches an object's key with corresponding value.
             *
             * @param  object json
             * @return object
             */
            swap : function(json) {

                var r = {};

                for (var key in json) {
                    r[json[key]] = key;
                }

                return r;

            }
        }

        var Selector = {
            init : function() {
                this.cached();
                this.sticky();
                this.bind();
                this.parseUrl();
            },

            /**
             * Cached DOM Elements
             *
             * @return void
             */
            cached : function() {
                this.$mq            = $('.mq-state');
                this.$wrap          = $('.js-steps');
                this.$steps         = this.$wrap.find('.step');
                this.$back          = $('.js-back');
                this.$next          = $('.js-next');
                this.$skip          = $('.js-skip');
                this.$progress      = $('.js-progress');
                this.$progressLinks = $('.progress__link');
                this.$edit          = $('.js-edit');
                this.$panels        = $('.js-panels');
                this.$selections    = $('.js-selections');
                this.$finishedText  = $('.js-finished');
                this.$submit        = $('.js-submit');
            },

            finalStep : false,
            finishedSteps: false,
            stepBounds : {},

            /**
             * Sticky Selection Panel
             *
             * Make sidebar panel sticky.
             * @return void
             */
            sticky : function() {

                this.$selections.stick_in_parent({
                    offset_top: 80
                });

            },

            /**
             * Bind Events
             *
             * @return void
             */
            bind : function() {

                // back button
                this.$back.on('click', this.back.bind(this));

                // next button
                this.$next.on('click', this.next.bind(this));

                // skip button
                this.$skip.on('click', this.skip.bind(this));

                // edit icon
                this.$edit.on('click', '.selections__edit', this.edit.bind(this));

                // progress steps
                this.$progress.on('click', '.progress__link', this.progress.bind(this));

                // checkbox change
                this.$wrap.on('click', '.option__value', this.checkbox.bind(this));

            },

            /**
             * Step Boundaries
             *
             * Updates 'stepBounds{}' object with current state of steps.
             *
             * Determines step context:
             * - Previous step
             * - Active Step
             * - Next Step
             * - Total Steps
             *
             * @return void
             */
            stepBoundaries : function() {

                var activeStep = this.$wrap.find('.step.is-active').data('step'),
                    total      = this.$steps.length;

                // determine prev/next steps
                var prev = ( 1 == activeStep ) ? 1 : activeStep - 1,
                    next = ( total == activeStep ) ? 5 : activeStep + 1;

                // determine completed steps
                var $furthest = $('.js-edit').find('.is-complete').last(),
                    complete  = ( $furthest.length > 0 ) ? $furthest.length : $furthest.prevAll().length;

                // console.log( prev );
                // console.log( activeStep );
                // console.log( next );
                // console.log( total );

                // define step boundaries
                this.stepBounds.prev      = prev;
                this.stepBounds.active    = activeStep;
                this.stepBounds.next      = next;
                this.stepBounds.completed = complete;

            },

            back : function(e) {

                this.showStep(this.stepBounds.prev, 'back');

                e.preventDefault();
            },

            next : function(e) {

                this.showStep(this.stepBounds.next, 'next');

                e.preventDefault();
            },

            skip : function(e) {

                this.showStep(this.stepBounds.next, 'skip');

                e.preventDefault();
            },

            edit : function(e) {

                var step = $(e.currentTarget).data('step');

                this.showStep(step, 'edit');

            },

            progress : function(e) {

                // only run on completed steps
                if ( $(e.currentTarget).hasClass('is-complete') ) {

                    var step = $(e.currentTarget).data('step');

                    this.showStep(step, 'progress');

                }

                e.preventDefault();

            },

            checkbox : function(e) {

                var step = $(e.currentTarget).closest('.step').data('step');

                this.showStep(step, 'checkbox');
            },

            /**
             * Get Options
             *
             * Creates an object containing all checkd options from a specified step.
             *
             * @param  integer step Specified step.
             * @return object       Object containing term id and label (e.g. {44: "Traditional"}).
             */
            getOptions : function( step ) {

                // return an object (key:value => term_id:name) of checked values from specified step
                var options   = {},
                    $step    = $('.step[data-step="' + step + '"]'),
                    $options = $step.find('.option__value:checked');

                if ( $options.length > 0 ) {

                    $options.each( function() {

                        var $this = $(this),
                            label = $this.prev('.option__name').text();

                        options[$this.val()] = label;

                    });

                }

                return options;

            },

            /**
             * Set Options
             *
             * Set matching options as being checked.
             *
             * @param integer active   Specified step. Zero based.
             * @param void
             */
            setOptions : function( active, options ) {

                // get key value pair. might need to separate by step
                // set all matching options
                var $options = this.$steps.eq( active ).find('.option__value');

                // uncheck all options
                $options.attr('checked', false);

                // check provided options
                $options.each( function() {

                    var $this = $(this);

                    // check checkbox if it exists in provided options object
                    if ( $this.val() in options ) {
                        $this.attr('checked', true);
                    }
                });

            },

            /**
             * Saved Options
             *
             * Creates an object from existing selections for specified step.
             * Gathered from selections and not option inputs, since it's possible
             * user may have modified options. For example, when user revisits a
             * completed step and selects/de-selects options. If they then hit the
             * "Skip" button, we should restore step from saved selections.
             *
             * @param  integer step Step to get saved options from. Zero based.
             * @return object       Object containing term id and label (e.g. {44: "Traditional"}).
             */
            savedOptions : function( step ) {

                // step should be zero based index

                // Get saved options from selection list, not step checkbox options.
                // We want to retrieve the already set options for this step. User may
                // have changed checkbox options.
                var options     = {},
                    $selections = this.$edit.find('.selections__item').eq( step ),
                    $options    = $selections.find('.selections__choice');

                    if ( $options.length > 0 ) {

                        $options.each( function() {

                            var $this = $(this);

                            options[$this.data('term')] = $this.text();

                        });
                    }

                    return options;

            },

            /**
             * Render Selections
             *
             * Takes an object of options and outputs a list under desired step (active).
             *
             * @param  integer active  Step to render. Zero based.
             * @param  object  options List of checked step options.
             * @return void
             */
            renderSelections : function( active, options ) {

                var html     = '',
                    $choices = this.$edit.find('.selections__item').eq( active - 1 ).find('.selections__choices');

                // create step choices
                $.each( options, function( index, value ){

                    html += '<span class="selections__choice" data-term="' + index + '">' + value + '</span>';

                });

                // update DOM
                $choices.html( html );

            },

            /**
             * Update Selections
             *
             * Gathers checked options and updates adjacent selections panel. Selections
             * are only updated if the "Next" button has been clicked. Otherwise, previously
             * saved selections are used to populate option inputs.
             *
             * It's possible for a user to modify a previously completed step without clicking
             * next. An example of this is the "Skip" button. In these scenarios, we shouldn't
             * update any options, but rather restore.
             *
             * @param  integer step      Specified step (e.g. 1).
             * @param  string  eventType Event that triggered update.
             * @return void
             */
            updateSelections : function( step, eventType ) {

                if ( step ) {

                    // update all selections
                    if ( 'url' == eventType ) {

                        // add class to completed selections (all of them)
                        this.$edit.find('.selections__item').addClass('is-complete');

                    } else {

                        // get checked step options
                        var options = this.getOptions( step );

                        // update selection with list of checked options
                        if ( options ) {
                            this.renderSelections( step, options );
                        }

                        // // mark previously active step as complete since stepBounds
                        // // has already been updated at this point.
                        // var active  = ( this.finishedSteps ) ? this.stepBounds.active : this.stepBounds.prev,
                        //     options = {};

                        // // add class to completed selection
                        // this.$edit.find('.selections__item').eq( active - 1 ).addClass('is-complete');

                        // // don't update step if 'skip' button clicked
                        // if ( 'back' == eventType || 'skip' == eventType || 'progress' == eventType || 'edit' == eventType ) {

                        //     // Step has already been updated at this point. Zero based index is used to
                        //     // find saved selection choices. Set zero based by which button was chose, back or skip.
                        //     // The second ternary accounts for when skip is selected on final step. We want to target
                        //     // last step at that point.
                        //     var correctStep = ( 'back' == eventType ) ? step : ( this.finishedSteps ) ? step - 1 : step - 2 ;

                        //     // restore previously set options
                        //     options = this.savedOptions( correctStep );

                        //     if ( options ) {
                        //         this.setOptions( correctStep, options );
                        //     }

                        // } else {

                        //     // get checked step options
                        //     options = this.getOptions( active );

                        //     // update selection with list of checked options
                        //     if ( options ) {
                        //         this.renderSelections( active, options );
                        //     }
                        // }
                    }

                    // recalculate sticky sidebar
                    $(document.body).trigger('sticky_kit:recalc');
                }

            },

            /**
             * Update Controls
             *
             * Hides, shows, and highlights controls when moving throughout steps.
             *
             * @return void
             */
            updateControls : function() {

                var firstStep = ( this.stepBounds.active == 1 ) ? true : false;

                // apply 'is-last' when on final step
                this.$panels.toggleClass('is-last', this.finalStep);

                // apply 'is-finished' when completed final step
                this.$panels.toggleClass('is-finished', this.finishedSteps);

                // swap btn classes when completed final step
                this.$submit.toggleClass('btn--primary', this.finishedSteps);
                this.$submit.toggleClass('btn--inverse', ! this.finishedSteps);

                // hide back button on first step
                this.$back.toggleClass('is-hidden', firstStep);

            },

            /**
             * Update Progress
             *
             * Visually updates progress bar.
             *
             * @return void
             */
            updateProgress : function() {

                var $prevAll = $('.progress__link[data-step="' + this.stepBounds.active + '"]').parent().prevAll();
                // var nextAll = $('.progress__link[data-step="' + this.stepBounds.active + '"]').parent().nextAll();

                // remove classes
                this.$progressLinks.removeClass('is-complete is-active');

                // set classes
                $prevAll.find('.progress__link').addClass('is-complete');
                $('.progress__link[data-step="' + this.stepBounds.active + '"]').addClass('is-active');

            },

            /**
             * Update URL
             *
             * Creates a URL with query string from all currently
             * selected options. Gathers options from Selection panel.
             *
             * @return void
             */
            updateUrl : function() {

                // create link to pass over to product selector results page
                // needs to happen on every step
                // levarage getOptions()
                var parts   = {},
                    options = {},
                    query   = '',
                    tax;

                // loop through all steps selections
                for ( var i = 0; i < this.$steps.length; i++ ) {

                    // step taxonomy slug
                    tax = this.$steps.eq( i ).data('tax');

                    // step options object
                    options = this.savedOptions( i );

                    // only include taxonomy if there are options
                    if ( ! $.isEmptyObject( options ) ) {
                        parts[tax] = options;
                    }
                }

                // create query string
                if ( ! $.isEmptyObject( parts ) ) {

                    // iterate taxonomies
                    for ( var tax in parts ) {

                        query += tax + '=';

                        // iterate options
                        for ( var term in parts[tax] ) {
                            query += term + ',';
                        }

                        // remove trailing comma/whitespace - http://stackoverflow.com/a/17720342/3163972
                        query = query = query.replace(/,\s*$/, '');

                        // add '&' between each tax
                        query += '&';
                    }

                    // remove trailing '&'
                    query = query.slice(0, -1);

                    // apply base url to selector results page
                    query = selectorResultsUrl + '?' + query;
					// query = ELEV.selectorResultsUrl + '?' + query;
                    // update submit button
                    this.$submit.attr('href', query);
                }

            },

            /**
             * Parse URL
             *
             * Checks on initial page load if page url contains a query string.
             * Start at specified step and update all step options define in query.
             * Falls back to first step
             *
             * @return void
             */
            parseUrl : function() {

                // read url on initial page load and check matching options
                // leverage setOptions()

                var params = $.getQueryParams(),
                    step;

                // See if we've got an object with params
                if ( ! $.isEmptyObject(params) ) {

                    // Set Step
                    // - 'step' key in params obj
                    // - value is integer
                    // - between 1 and total steps
                    step = ( 'step' in params && parseInt(params.step) && ( params.step <= this.$steps.length && params.step >= 1 ) ) ? parseInt(params.step) : '';

                    // iterate over steps from query string
                    for ( var key in params ) {

                        // get step by taxonomy data attribute (e.g. region)
                        var $step = $('.step[data-tax="' + key + '"]');

                        // update step options
                        // check if key matches step's taxonomy (e.g. data-tax)
                        if ( params.hasOwnProperty(key) && $step.length > 0 ) {

                            var active  = $step.data('step'), // step number
                                values  = params[key], // query string for matching step
                                parts   = values.split(','), // convert comma separated query string into array
                                options = {}

                            // setOptions() takes an object as the 2nd argument. This is expected to be
                            // (key:value => term_id:name). The query string only contains the term_id, so
                            // we need to first set all matching checkbox inputs for each step.
                            this.setOptions( ( active - 1 ), Utils.swap(parts) );

                            // We then collect newly checked options on each step. That way we can get the properly
                            // formatted options object
                            options = this.getOptions( active );

                            // Now we can update the selections panel.
                            this.renderSelections( ( active ), options );

                        }
                    }

                    this.showStep(step, 'url');

                // run as first step
                } else {
                    this.showStep();
                }

            },

            /**
             * Show Step
             *
             * Renders appropriate step to be displayed.
             *
             * Defaults to first step when no step argument provided.
             *
             * @param  integer step      Spedified step (e.g. 1).
             * @param  string  eventType Event that triggered render.
             * @return void
             */
            showStep : function( step, eventType ) {

                // ensure eventType argument was passed
                eventType = ( typeof eventType === 'undefined' ) ? '' : eventType;

                // hide all steps
                // this.$steps.each( function() {
                //     $(this).removeClass('is-active').fadeOut();
                // });

                // fade in current step once all 'fadeOut' animations are finished
                // complete callback for fadeOut won't work
                // this.$steps.promise().done( function() {

                    // go to step
                    // if ( step ) {
                    //     $('.step[data-step="' + step + '"]').addClass('is-active').fadeIn();
                    // // fallback to first step
                    // } else {
                    //     Selector.$steps.first().addClass('is-active').fadeIn();
                    // }

                    // scroll to top of steps. Account for fixed header on desktop.
                    // var offset = ( parseInt( Selector.$mq.css('z-index') ) < 20 ) ? 0 : 80; // height of fixed heading
                    // $('html, body').animate({
                    //     scrollTop: Selector.$wrap.offset().top - offset
                    // }, 300 );

                    // check for final step (5. region) before updating boundaries
                    // also accounts for when already on final step and 'back' or 'progress' button is clicked
                    // Selector.finalStep = ( Selector.stepBounds.next == Selector.$steps.length && ( 'back' !== eventType && 'progress' !== eventType && 'edit' !== eventType ) ) ? true : false;

                    // check when all steps completed before updating boundaries
                    // also accounts for when already on final step and 'back' or 'progress' button is clicked
                    // Selector.finishedSteps = ( Selector.stepBounds.active == Selector.$steps.length && ( 'back' !== eventType & 'progress' !== eventType && 'edit' !== eventType ) ) ? true : false;

                    // update step boundaries
                    // Selector.stepBoundaries();

                    // update progress
                    // Selector.updateProgress();

                    // update selections
                    Selector.updateSelections( step, eventType );

                    // update controls
                    // Selector.updateControls();

                    // update url
                    Selector.updateUrl();

                    // manually trigger resize to set bin heights
                    // $(window).trigger('resize');

                    /**
                     * Scroll to step
                     *
                     * Only scroll to step if coming from query string in browser's address bar (e.g. came from results page)
                     *
                     * Wait for images within steps to load before scrolling to
                     * specified step
                     *
                     * Always - all images loaded whether successful or not
                     */
                    if ( step && 'url' === eventType ) {

                        // wait for images to load
                        this.$wrap.imagesLoaded()
                            .always( function( instance ) {
                                var offset = ( parseInt( Selector.$mq.css('z-index') ) < 20 ) ? 0 : 80, // height of fixed heading
                                    scrollPoint = $('#step-' + step).offset();

                                $('html, body').animate({
                                    scrollTop: scrollPoint.top - offset
                                }, 300 );
                            });
                    }

                // });

            }

        };

        Selector.init();

    });

})(jQuery, window, document);
