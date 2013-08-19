/* ===========================================================
 * sorry.live-status-link.ks
 * A small snippet which allows the easy creation of a live status
 * link which displays a message which directly corsponds to the
 * real status of the relevent page.
 * 
 * This intended for use with Sorryapp.com status page API and
 * is not permitted for use with any other status page provider.
 * ========================================================== */

// Ensure that the jQuery dependancy is ready to go.
$(document).ready(function() {
  // Lopp the collection link links we are to make live.
  $('a.live-status').each(function(index, object) {
  	// Get a refernce to the link for easy access.
  	var this_link = $(this);

  	// Make an AJAX request for the status of think page.
  	// NOTE: Is an AJAX call the best option here, since it's just a simple GET request?
  	$.ajax({
	  type: "GET",
      dataType: "json",
      crossDomain: true,	  
	  url: this_link.attr('href') + '?format=json', // Use the href of the status page link.
	  data: {
	  	format: 'json' // Not sure why this isn't done by default, maybe cross-domain bug?
	  },
	  success: function(data, textStatus, jqXHR) {
	  	// Fired when the AJAX request for status works just fine.
	  	// We display an approproriate message based on the status of the page.
	  	if (data.current_apology_count == 0) {
	  		// TODO: These classes and messages should be configurable.
	  		// Add a class to state that all is well.
	  		this_link.addClass('all-is-well');
	  		// The status is good, set the appropriate link.
	  		this_link.html('Status: <span>All Is Well.</span>');
	  	} else {
	  		// TODO: These classes and messages should be configurable.
	  		// Add a class for a bad result.
	  		this_link.addClass('sorry');
	  		// We have a problem, display the appropriate link message.
	  		this_link.html('Status: <span>Sorry, We Have A Problem.</span>');
	  	};
	  }
	  // TODO: We need to handle failures and exceptions - even if it is doing so quietly etc.
	});
  });
});