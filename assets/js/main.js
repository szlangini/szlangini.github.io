$(window).on('load', function() {

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
        
    });

});


jQuery(document).ready(function($) {
    
    var shortText = $('#aboutme').map(function() {
    return this.outerHTML
    }).get().join('');
    
    var longText = '<p>As a student of Information Systems Management I am particularly fascinated by data. From collecting, cleansing and integration to analysis. </p> <p>When I lacked the money to technically implement a mobile app for social networking, I taught myself to program. At that time I was still studying management at the University of St.Gallen.In the meantime the adventure became a passion. I am currently working as a freelance Mobile Developer.</p><p>Last year I found another passion in Data Science. I am stunned by theopportunities that this world is offering us. I am particularly     interested in machine learning.At the moment I am looking for further education or learning opportunities in exactly this area.</p><p>You can meet me at the Rotaract Club Berlin International, where I am serving as president this year.We organize weekly meetings with up to 40 people on different topics. We plan social projects, educate ourselves further and enjoy the time.</p><p>When I\'m not working on IT projects or Rotaract, you can find me playing the guitar or the MIDI keyboard.I am very interested in music (production), tennis and comedy.</p><button class="btn btn-primary mycolordark" id="aboutmelong">Less ...</button>'


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // will request the API via https
	    // default: false
	    // valid values: false, true
	    ssl: true,
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'
        
        }
    );
    
    
    /* Touching In-depth at About Me
    div has id #aboutme
    button has id #aboutmeshort
    */
    $(document).on('click','#aboutmeshort',function(){
        $('#aboutme').html(longText);
    });
	$(document).on('click','#aboutmelong',function(){
        $('#aboutme').html(shortText);
	}); 
    
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "IonicaBizau");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "mdo", selector: "#ghfeed" });


});