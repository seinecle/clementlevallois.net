var iframeLogged = false;
var videoLogged = false;

$(document).ready(function()
{
    var iframe = $('div.iframe');
    if (iframe) 
    {
        var img = $('#iframe_cover');
        img.height(iframe.height()).width(iframe.width());
        img.css('display', 'block');
        
        img.mouseover(function()
        {
            mouseOverIframe();
        });
        $(window).scroll(function()
        {
            detectScroll();
        });
    }

    $('#videoHover').removeAttr('disabled');

    $('.socialNetworkingLink').click(function (e) {
        e.preventDefault();
        var target = $('#' + this.id);
        var url = target.attr('href');
        switch (target.attr('id')) {
            case "twitterLink":
                recordClick("&type=ctw", true);
                break;

            case "linkedInLink":
                recordClick("&type=cli", true);
                break;

            case "googlePlusLink":
                recordClick("&type=cgp", true);
                break;

        }
        window.open(url, 'csnWindow', 'width=800, height=600');

    });

});

function recordClick(queryString, runAsync)
{
    jQuery.ajax(
    {
        url: '/read/Interaction.htm?releaseID=' + releaseID + queryString,
        async: runAsync
    })
}

function linkClick(link) 
{    
    recordClick('&type=obct&outUrl=' + escape(link), false);
}

function socialMediaButtonClick(site) 
{
    var url = '';
    var publishedUrl = document.getElementById('publishedURL').value;
    var headline = document.getElementById('shareHeadline').value;

    switch (site) {
        case 'facebook':
            recordClick('&type=fb', true);
            url = 'http://www.facebook.com/sharer.php?u=' + publishedUrl;
            break;
        case 'twitter':            
            recordClick('&type=tw', true);
            url = 'http://twitter.com/intent/tweet?url=' + publishedUrl + '&text=' + headline;             
            break;
        case 'linkedIn':
            recordClick('&type=li', true);
            url = 'http://www.linkedin.com/cws/share?url=' + publishedUrl + '?' + Math.floor(1000*Math.random());
            break;
        case 'google':
            recordClick('&type=gp', true);
            url = 'http://plus.google.com/share?url=' + publishedUrl; 
            break;
    }
    window.open(url, 'smWindow', 'width=800, height=600');   
}

function videoClick()
{
    if (videoLogged) 
        return;
    
    videoLogged = true;
    
    $('#videoHover').remove();
    document.getElementById('video').innerHTML = videoHtml;
    
    recordClick('&type=fvct', true);
}

function mouseOverIframe()
{
    $('#iframe_cover').css('display', 'none').height('0px');
    recordClick('&type=ifmo', true);
}

function detectScroll()
{
    if (iframeLogged) 
        return;
    
    var iframeVal = $('div.iframe').offset().top + ($('div.iframe').height() / 2);
    var windowVal = $(window).scrollTop() + $(window).height();
    
    //log it if at least half of the iframe container is in view
    if (iframeVal <= windowVal) 
    {
        iframeLogged = true;
        recordClick('&type=ifv', true);
    }    
}
