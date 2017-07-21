jQuery(document).ready( function($) {
    
    
    // right here we need to determine if we are dealing mobile or non mobile
    (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
     
    if (jQuery.browser.mobile){
	var media_type = "phone";
    } else {
	var media_type = "non-phone";
    }
    

    // get fancybox ready
    // Initialization values for fancy box	
    $(".fancybox").fancybox({
	width : 1024,
	height : 586,
	closeClick : false,
	openEffect : 'fade',
	closeEffect : 'fade',
	scrolling : 'no',
	autoSize: false,
	autoCenter: false,
	fitToView: true,
	beforeShow: function () {
	    if (this.title) {
	        this.title += '<div id="doit"></div>';
	    }       
	},
	afterShow: function(e) {
	    
	    // Render tweet button and facebook buttons
	    document.getElementById("doit").innerHTML = '<p /><div id="moveit"><iframe src="//www.facebook.com/plugins/like.php?href=' + pageURL + '&amp;send=false&amp;layout=button_count&amp;width=90&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=143293702457868" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;"></iframe>  <a href="javascript:void(0)" onclick="window.open(\'http://www.facebook.com/sharer/sharer.php?u=' +  pageURL + '\',\'share_window\',\'width=700,height=400\')"><img alt="share button" src="/wp-content/plugins/baeblemusic/includes/images/share.png" /></a></div>';
	},
    });
	
    //// Initialization block - start
    
    // Hide the buttons - trending
    $("#driver").hide("fast");
    $("#driver2").hide("fast");
    
    // Hide the buttons - newest
    $("#driver_newest").hide("fast");
    $("#driver2_newest").hide("fast");
    
    // Hid the buttons - concerts
    $("#driver_concerts").hide("fast");
    $("#driver2_concerts").hide("fast");
    
    // Hide the buttons - sessions
    $("#driver_sessions").hide("fast");
    $("#driver2_sessions").hide("fast");
    
    // Hide the buttons - interviews
    $("#driver_interviews").hide("fast");
    $("#driver2_interviews").hide("fast");
    
    // Hide the buttons - Music Videos
    $("#driver_music").hide("fast");
    $("#driver2_music").hide("fast");
    
    // alert(tiles.length);
    // right here we need to determine how wide the blue box should be
    
    if (tiles.length == 1) {
	$('.body_content_box').css({"width":281});
    } else if (tiles.length == 2) {
	$('.body_content_box').css({"width":454});
    } else if (tiles.length == 3) {
	$('.body_content_box').css({"width":627});
    } else if (tiles.length == 4) {
	$('.body_content_box').css({"width":800});
    } else if (tiles.length == 5) {
	$('.body_content_box').css({"width":973});
    }

    // let's get the first results for trending	    
    var data = {
        action: 'test_response',
        post_var: 'trending',
	page_state: testvariable.name,
	media_type: media_type
    };
	
    // the_ajax_script.ajaxurl is a variable that will contain the url to the ajax processing file
    $.post(the_ajax_script.ajaxurl, data, function(response) {
	
        // change the DIV here to the response value
        $('#display_trending').html(response);
        $(".roll").css("opacity","0");
	
	// lets make sure the buttons are in the right place
	
	if (tiles.length == 5) {
	    $('#driver').css({"left":896});
	    $('#driver2').css({"left":846});
	} else if (tiles.length == 4) {
	    $('#driver').css({"left":723});
	    $('#driver2').css({"left":673});
	} else if (tiles.length == 3) {
	    $('#driver').css({"left":550});
	    $('#driver2').css({"left":500});
	} else if (tiles.length == 2) {
	    $('#driver').css({"left":377});
	    $('#driver2').css({"left":327});
	} else if (tiles.length == 1) {
	    $('#driver').css({"left":204});
	    $('#driver2').css({"left":154});
	}
	
        // hover functions
        $(".roll").hover(function () {
            // SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        }, function () {
	    // SET OPACITY BACK TO 50%
	    $(this).stop().animate({
		opacity: 0
	    }, "slow");
	});
		
	// Trending - current set of results
	var current_page = $('#current_page').attr('value');
	if (current_page == 0) {
	    $("#driver2").hide("fast");  
        }
	 // show the first button - trending
	$("#driver").show("fast");
	
    });
    
    
     // let's get the first results for newest
    var data = {
        action: 'test_response',
        post_var: 'newest',
	page_state: testvariable.name,
	media_type: media_type
    };
    
    $.post(the_ajax_script.ajaxurl, data, function(response) {
	// change the DIV here to the response value
        $('#display_newest').html(response);
        $(".roll").css("opacity","0");
	
	if (tiles.length == 5) {
	    $('#driver_newest').css({"left":896});
	    $('#driver2_newest').css({"left":846});
	} else if (tiles.length == 4) {
	    $('#driver_newest').css({"left":723});
	    $('#driver2_newest').css({"left":673});
	} else if (tiles.length == 3) {
	    $('#driver_newest').css({"left":550});
	    $('#driver2_newest').css({"left":500});
	} else if (tiles.length == 2) {
	    $('#driver_newest').css({"left":377});
	    $('#driver2_newest').css({"left":327});
	} else if (tiles.length == 1) {
	    $('#driver_newest').css({"left":204});
	    $('#driver2_newest').css({"left":154});
	}

	
	// hover functions
        $(".roll").hover(function () {
            // SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        }, function () {
	    // SET OPACITY BACK TO 50%
	    $(this).stop().animate({
		opacity: 0
	    }, "slow");
	});
	// Newest - current set of results
	var current_page_newest = $('#current_page_newest').attr('value');
	if (current_page_newest == 0) {
	    $("#driver2_newest").hide("fast");  
        }
        // show the first button - newest
        $("#driver_newest").show("fast");
    
    });
    
    // let's get the first results for concerts
    var data = {
        action: 'test_response',
        post_var: 'concerts',
	page_state: testvariable.name,
	media_type: media_type
    };
    
    
    $.post(the_ajax_script.ajaxurl, data, function(response) {
	// change the DIV here to the response value
        $('#display_concerts').html(response);
        $(".roll").css("opacity","0");
	
	if (tiles.length == 5) {
	    $('#driver_concerts').css({"left":896});
	    $('#driver2_concerts').css({"left":846});
	} else if (tiles.length == 4) {
	    $('#driver_concerts').css({"left":723});
	    $('#driver2_concerts').css({"left":673});
	} else if (tiles.length == 3) {
	    $('#driver_concerts').css({"left":550});
	    $('#driver2_concerts').css({"left":500});
	} else if (tiles.length == 2) {
	    $('#driver_concerts').css({"left":377});
	    $('#driver2_concerts').css({"left":327});
	} else if (tiles.length == 1) {
	    $('#driver_concerts').css({"left":204});
	    $('#driver2_concerts').css({"left":154});
	}

	// hover functions
        $(".roll").hover(function () {
            // SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        }, function () {
	    // SET OPACITY BACK TO 50%
	    $(this).stop().animate({
		opacity: 0
	    }, "slow");
	});
	// Concerts - current set of results
	var current_page_concerts = $('#current_page_concerts').attr('value');
	if (current_page_concerts == 0) {
	    $("#driver2_concerts").hide("fast");  
        }
        // show the first button - concerts
        $("#driver_concerts").show("fast");

    });
    
    // let's get the first results for sessions
     var data = {
        action: 'test_response',
        post_var: 'sessions',
	page_state: testvariable.name,
	media_type: media_type
    };
    
    $.post(the_ajax_script.ajaxurl, data, function(response) {
	// change the DIV here to the response value
	 $('#display_sessions').html(response);
	 $(".roll").css("opacity","0");
	 
	if (tiles.length == 5) {
	    $('#driver_sessions').css({"left":896});
	    $('#driver2_sessions').css({"left":846});
	} else if (tiles.length == 4) {
	    $('#driver_sessions').css({"left":723});
	    $('#driver2_sessions').css({"left":673});
	} else if (tiles.length == 3) {
	    $('#driver_sessions').css({"left":550});
	    $('#driver2_sessions').css({"left":500});
	} else if (tiles.length == 2) {
	    $('#driver_sessions').css({"left":377});
	    $('#driver2_sessions').css({"left":327});
	} else if (tiles.length == 1) {
	    $('#driver_sessions').css({"left":204});
	    $('#driver2_sessions').css({"left":154});
	}
	 
	 // hover functions
	 $(".roll").hover(function () {
            // SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        }, function () {
	    // SET OPACITY BACK TO 50%
	    $(this).stop().animate({
		opacity: 0
	    }, "slow");
	});
	 
	// Sessions - current set of results
	var current_page_sessions = $('#current_page_sessions').attr('value');
	if (current_page_sessions == 0) {
	    $("#driver2_sessions").hide("fast");  
        }
        // show the first button - sessions
        $("#driver_sessions").show("fast");

    });
    
    // let's get the first results for interviews
    var data = {
        action: 'test_response',
        post_var: 'interviews',
	page_state: testvariable.name,
	media_type: media_type
    };
    
    $.post(the_ajax_script.ajaxurl, data, function(response) {
	// change the DIV here to the response value
	$('#display_interviews').html(response);
	$(".roll").css("opacity","0");
	
	if (tiles.length == 5) {
	    $('#driver_interviews').css({"left":896});
	    $('#driver2_interviews').css({"left":846});
	} else if (tiles.length == 4) {
	    $('#driver_interviews').css({"left":723});
	    $('#driver2_interviews').css({"left":673});
	} else if (tiles.length == 3) {
	    $('#driver_interviews').css({"left":550});
	    $('#driver2_interviews').css({"left":500});
	} else if (tiles.length == 2) {
	    $('#driver_interviews').css({"left":377});
	    $('#driver2_interviews').css({"left":327});
	} else if (tiles.length == 1) {
	    $('#driver_interviews').css({"left":204});
	    $('#driver2_interviews').css({"left":154});
	}

	// hover functions
	$(".roll").hover(function () {
	    // SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
        }, function () {
	    // SET OPACITY BACK TO 50%
	    $(this).stop().animate({
		opacity: 0
	    }, "slow");
	});
	// interviews - current set of results
	var current_page_interviews = $('#current_page_interviews').attr('value');
	if (current_page_interviews == 0) {
	    $("#driver2_interviews").hide("fast");  
        }
	// show the first button - interviews
        $("#driver_interviews").show("fast");

	
    });
    
    // let's get the first results for music videos
    var data = {
	action: 'test_response',
	post_var: 'music',
	page_state: testvariable.name,
	media_type: media_type
    };
    
    $.post(the_ajax_script.ajaxurl, data, function(response) {
	// change the DIV here to the response value
	$('#display_music').html(response);
	$(".roll").css("opacity","0");
	if (tiles.length == 5) {
	    $('#driver_music').css({"left":896});
	    $('#driver2_music').css({"left":846});
	} else if (tiles.length == 4) {
	    $('#driver_music').css({"left":723});
	    $('#driver2_music').css({"left":673});
	} else if (tiles.length == 3) {
	    $('#driver_music').css({"left":550});
	    $('#driver2_music').css({"left":500});
	} else if (tiles.length == 2) {
	    $('#driver_music').css({"left":377});
	    $('#driver2_music').css({"left":327});
	} else if (tiles.length == 1) {
	    $('#driver_music').css({"left":204});
	    $('#driver2_music').css({"left":154});
	}
	
	// hover functions
	$(".roll").hover(function () {
	    // SET OPACITY TO 70%
            $(this).stop().animate({
                opacity: .7
            }, "slow");
	}, function () {
	    // SET OPACITY BACK TO 50%
	    $(this).stop().animate({
		opacity: 0
	    }, "slow");
	});
	// music - current set of results
	var current_page_music = $('#current_page_music').attr('value');
	if (current_page_music == 0) {
	    $("#driver2_music").hide("fast");  
        }
	// show the first button - music videos
	$("#driver_music").show("fast");

    });
    // Initialization block - stop
    
	
    // Create on click events
    
    // Trending - Next
    $("#driver").click(function(event){
        var current_page = $('#current_page').attr('value');
        current_page++;
        $('#current_page').val(current_page);
        var data = {
	    action: 'test_response',
	    post_var: 'trending',
	    current_page: current_page,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	
	    // change the DIV here to the response value
	    $('#display_trending').html(response);
	    if (current_page == 0) {
		$("#driver2").hide("fast");  
	    } else {
	        $("#driver2").show("fast");     
	    }
	
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
            
		// SET OPACITY TO 70%
		$(this).stop().animate({
		    opacity: .7
		}, "slow");
	    },
            
	    // ON MOUSE OUT
	    function () {
	    
	        // SET OPACITY BACK TO 50%
	        $(this).stop().animate({
			opacity: 0
	        }, "slow");
	    });
	});
    });
	
    // Trending - Previous
    $("#driver2").click(function(event){
	var current_page = $('#current_page').attr('value');
	current_page--;
	$('#current_page').val(current_page);
	var data = {
	    action: 'test_response',
            post_var: 'trending',
	    current_page: current_page,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    $('#display_trending').html(response);    
	    if (current_page == 0) {
	        $("#driver2").hide("fast");  
	    } else {
	        $("#driver2").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
	    // SET OPACITY TO 70%
	        $(this).stop().animate({
		    opacity: .7
                }, "slow");
            },
                
	    // ON MOUSE OUT
            function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
		    opacity: 0
		}, "slow");
            });
	});    
    });
    
    // Newest - Next
    $("#driver_newest").click(function(event){
        var current_page_newest = $('#current_page_newest').attr('value');
        current_page_newest++;
        $('#current_page_newest').val(current_page_newest);
        var data = {
	    action: 'test_response',
	    post_var: 'newest',
	    current_page_newest: current_page_newest,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	
	    // change the DIV here to the response value
	    $('#display_newest').html(response);
	    if (current_page_newest == 0) {
		$("#driver2_newest").hide("fast");  
	    } else {
	        $("#driver2_newest").show("fast");     
	    }
	
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
            
		// SET OPACITY TO 70%
		$(this).stop().animate({
		    opacity: .7
		}, "slow");
	    },
            
	    // ON MOUSE OUT
	    function () {
	    
	        // SET OPACITY BACK TO 50%
	        $(this).stop().animate({
			opacity: 0
	        }, "slow");
	    });
	});
    });
    
    // Newest - Previous
    $("#driver2_newest").click(function(event){
	var current_page_newest = $('#current_page_newest').attr('value');
	current_page_newest--;
	$('#current_page_newest').val(current_page_newest);
	var data = {
	    action: 'test_response',
            post_var: 'newest',
	    current_page_newest: current_page_newest,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    $('#display_newest').html(response);    
	    if (current_page_newest == 0) {
	        $("#driver2_newest").hide("fast");  
	    } else {
	        $("#driver2_newest").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
	    // SET OPACITY TO 70%
	        $(this).stop().animate({
		    opacity: .7
                }, "slow");
            },
                
	    // ON MOUSE OUT
            function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
		    opacity: 0
		}, "slow");
            });
	});    
    });
    // Concerts - Next
    $("#driver_concerts").click(function(event){
	var current_page_concerts = $('#current_page_concerts').attr('value');
        current_page_concerts++;
        $('#current_page_concerts').val(current_page_concerts);
	var data = {
	    action: 'test_response',
	    post_var: 'concerts',
	    current_page_concerts: current_page_concerts,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    // change the DIV here to the response value
	    $('#display_concerts').html(response);
	    if (current_page_concerts == 0) {
		$("#driver2_concerts").hide("fast");  
	    } else {
	        $("#driver2_concerts").show("fast");     
	    }
	    
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
            
		// SET OPACITY TO 70%
		$(this).stop().animate({
		    opacity: .7
		}, "slow");
	    },
	    
	    // ON MOUSE OUT
	    function () {
	    
	        // SET OPACITY BACK TO 50%
	        $(this).stop().animate({
			opacity: 0
	        }, "slow");
	    });
	});
    });
    
    // Concerts - Previous
    $("#driver2_concerts").click(function(event){
	var current_page_concerts = $('#current_page_concerts').attr('value');
	current_page_concerts--;
	$('#current_page_concerts').val(current_page_concerts);
	var data = {
	    action: 'test_response',
            post_var: 'concerts',
	    current_page_concerts: current_page_concerts,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    $('#display_concerts').html(response);    
	    if (current_page_concerts == 0) {
	        $("#driver2_concerts").hide("fast");  
	    } else {
	        $("#driver2_concerts").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
	    // SET OPACITY TO 70%
	        $(this).stop().animate({
		    opacity: .7
                }, "slow");
            },
	    
	    // ON MOUSE OUT
            function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
		    opacity: 0
		}, "slow");
            });
	});    
    });
	
    // Sessions - Next
    $("#driver_sessions").click(function(event){
	var current_page_sessions = $('#current_page_sessions').attr('value');
	current_page_sessions++;
        $('#current_page_sessions').val(current_page_sessions);
	var data = {
	    action: 'test_response',
	    post_var: 'sessions',
	    current_page_sessions: current_page_sessions,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	     // change the DIV here to the response value
	    $('#display_sessions').html(response);
	    if (current_page_sessions == 0) {
		$("#driver2_sessions").hide("fast");  
	    } else {
	        $("#driver2_sessions").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
            
		// SET OPACITY TO 70%
		$(this).stop().animate({
		    opacity: .7
		}, "slow");
	    },
	    
	    // ON MOUSE OUT
	    function () {
	    
	        // SET OPACITY BACK TO 50%
	        $(this).stop().animate({
			opacity: 0
	        }, "slow");
	    });
	});
    });
    
    // Sessions - Previous
    $("#driver2_sessions").click(function(event){
	var current_page_sessions = $('#current_page_sessions').attr('value');
	current_page_sessions--;
	$('#current_page_sessions').val(current_page_sessions);
	var data = {
	    action: 'test_response',
            post_var: 'sessions',
	    current_page_sessions: current_page_sessions,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    $('#display_sessions').html(response);
	    if (current_page_sessions == 0) {
	        $("#driver2_sessions").hide("fast");  
	    } else {
	        $("#driver2_sessions").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
	    // SET OPACITY TO 70%
	        $(this).stop().animate({
		    opacity: .7
                }, "slow");
            },
	    // ON MOUSE OUT
            function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
		    opacity: 0
		}, "slow");
            });
	});    
    });
    
    // Interviews - Next
    $("#driver_interviews").click(function(event){
	var current_page_interviews = $('#current_page_interviews').attr('value');
	current_page_interviews++;
	 $('#current_page_interviews').val(current_page_interviews);
	 var data = {
	    action: 'test_response',
	    post_var: 'interviews',
	    current_page_interviews: current_page_interviews,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    // change the DIV here to the response value
	    $('#display_interviews').html(response);
	    if (current_page_interviews == 0) {
		$("#driver2_interviews").hide("fast");  
	    } else {
		$("#driver2_interviews").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
            
		// SET OPACITY TO 70%
		$(this).stop().animate({
		    opacity: .7
		}, "slow");
	    },
	    
	    // ON MOUSE OUT
	    function () {
	    
	        // SET OPACITY BACK TO 50%
	        $(this).stop().animate({
			opacity: 0
	        }, "slow");
	    });
	});
    });
   
    // Interviews - Previous
    $("#driver2_interviews").click(function(event){
	var current_page_interviews = $('#current_page_interviews').attr('value');
	current_page_interviews--;
	$('#current_page_interviews').val(current_page_interviews);
	var data = {
	    action: 'test_response',
	    post_var: 'interviews',
	    current_page_interviews: current_page_interviews,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    $('#display_interviews').html(response);
	    if (current_page_interviews == 0) {
	        $("#driver2_interviews").hide("fast");  
	    } else {
	        $("#driver2_interviews").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
	    // SET OPACITY TO 70%
	        $(this).stop().animate({
		    opacity: .7
                }, "slow");
            },
	    // ON MOUSE OUT
            function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
		    opacity: 0
		}, "slow");
            });
	});    
    });
    
    // Music Videos - Next
    $("#driver_music").click(function(event){
	var current_page_music = $('#current_page_music').attr('value');
	current_page_music++;
	$('#current_page_music').val(current_page_music);
	var data = {
	    action: 'test_response',
	    post_var: 'music',
	    current_page_music: current_page_music,
	    page_state: testvariable.name,
	    media_type: media_type
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    // change the DIV here to the response value
	    $('#display_music').html(response);
	    if (current_page_music == 0) {
		$("#driver2_music").hide("fast");  
	    } else {
		$("#driver2_music").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
            
		// SET OPACITY TO 70%
		$(this).stop().animate({
		    opacity: .7
		}, "slow");
	    },
	    // ON MOUSE OUT
	    function () {
	    
	        // SET OPACITY BACK TO 50%
	        $(this).stop().animate({
			opacity: 0
	        }, "slow");
	    });
	});
    });
    
    // Music Videos - Previous
    $("#driver2_music").click(function(event){
	var current_page_music = $('#current_page_music').attr('value');
	current_page_music--;
	$('#current_page_music').val(current_page_music);
	var data = {
	    action: 'test_response',
	    post_var: 'music',
	    current_page_music: current_page_music,
	    page_state: testvariable.name
	};
	// send the data
	$.post(the_ajax_script.ajaxurl, data, function(response) {
	    $('#display_music').html(response);
	    if (current_page_music == 0) {
	        $("#driver2_music").hide("fast");  
	    } else {
	        $("#driver2_music").show("fast");     
	    }
	    $(".roll").css("opacity","0");
	    $(".roll").hover(function () {
	    // SET OPACITY TO 70%
	        $(this).stop().animate({
		    opacity: .7
                }, "slow");
            },
	    // ON MOUSE OUT
            function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
		    opacity: 0
		}, "slow");
            });
	});    
    });
    
    
    
});

function setURL(url) {
    pageURL = url;
}

function increment (video_type,id) {
    $.post("/wp-content/plugins/baeblemusic/includes/php/video_mobile.php", {video_type:video_type , id:id}, function(data) {
     // alert(data);    
    });
}
