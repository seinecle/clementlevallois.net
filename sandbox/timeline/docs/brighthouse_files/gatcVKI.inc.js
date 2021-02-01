/*
	Version: 1.24
	
	This javascript automatically makes page view calls to the GA server.
	As well, it tags file downloads and external links in Google Analytics.
	You need to be using the Google Analytics New Tracking Code (ga.js) 
	for this script to work.
	To use this file, place the script reference to this file on all pages just below the
	Google Analytics code that includes GA.js.  See the accompanying example file prweb_basic_tracking.html
	
	AUTOMATIC FILE DOWNLOAD/EXTERNAL LINK TRACKING
	For automatic file download and external link tracking, a call to gaVKItagConfig must be made in the on-page code
	The code is executed by a call to startListening as in the following example code:
	startListening(window, ÔloadÕ, function () {gaVKItagConfig(ÔpdfÕ, false, false, false);});
	This will attach event listeners to the correct links AFTER the page has loaded, thus ensuring all
	links are tagged
	All outbound links and links to non-html files should now be automatically tracked.
	Please see the accompanying file prweb_pdf_tracking.html for an example.

	VIDEO TRACKING
	This will track interactions with YouTube videos by sending events.
	The events sent are "Started", "25% viewed", "50% viewed", "75% viewed", "100% viewed"
	The events can be triggered repeatedly.  For example, if they rewind, fast forward, replay etc
	events will be sent again once they reach the event trigger.

	To enable YouTube tracking, you must set the following variables:
	document.ytPlayerID		a unique ID for the video player
	document.ytVideoID		the YouTube video ID that should be loaded and played
	document.strVideoName		the name of the video. The event labels will be set to this value.

	Following is example code for embedding and tracking a YouTube video.
	
	<script src="http://swfobject.googlecode.com/svn/tags/rc3/swfobject/src/swfobject.js" type="text/javascript"></script>
	<!-- embed the player -->
	<div id="ytapiplayer">
	You need Flash player 8+ and JavaScript enabled to view this video.
	</div>
	<script type="text/javascript">
	// <![CDATA[
	document.strVideoName = 'PRWeb in Plain English';
	document.ytPlayerID = "myytplayer";
	document.ytVideoID = "1YB74txAaTc";

	// allowScriptAccess must be set to allow the Javascript from one 
	// domain to access the swf on the youtube domain
	var params = { allowScriptAccess: "always", bgcolor: "#cccccc" };
	// this sets the id of the object or embed tag to 'myytplayer'.
	// You then use this id to access the swf and make calls to the player's API
	var atts = { id: document.ytPlayerID };
	swfobject.embedSWF("http://www.youtube.com/v/" + document.ytVideoID + "&amp;border=0&amp;enablejsapi=1&amp;playerapiid=ytplayer",
					"ytapiplayer", "425", "350", "8", null, null, params, atts);
	//]]>

	</script>
	
	SETTING USER-DEFINED VARIABLE (UDV)
	To set the UDV, you must set the following variable before including this file.
	document.strVisitorUDV		The value of the UDV
	
	CUSTOM VARIABLES
	
	Slot 1 - Internal campaign tracking
*/

//set to false so log messages are not recorded


var debug = false;

if (document.location.href.indexOf('.vkistudios.net') != -1)
	debug = true;

function logMessage(msg) {
	if (debug) {
		if (typeof console != 'undefined')
			console.log(msg);
		else
			alert(msg);
	}
}

// add body onload function to automatically track pdf downloads
startListening(window, 'load', function () {gaVKItagConfig('pdf', false, false, false);});

try {
	var websiteOriginsCookie = readCookie('websiteOrigin');
	var originalTitle = document.title;
	var cookieDomain = "";
	var gaWebPropertyID = "";
	var disableHash = true;
	var _splitHost = document.location.host.split('.');
	var _baseDomain = '';
	
	for (var i = 1; i <= 2; i++) {
		
		_baseDomain = '.' + _splitHost[_splitHost.length - i] + _baseDomain;
	}
	
	_baseDomain = _baseDomain.substr(1);
	cookieDomain = "." + _baseDomain;
	
	if (document.location.href.indexOf('.vkistudios.net') != -1)
		gaWebPropertyID = "UA-5002093-8";
	else
		gaWebPropertyID = "UA-2647064-1";
	
	// if from the UK website, append the UK site to the title for GA filtering.
	// as well, set a session cookie so any activity will be tracked back to the UK site for this session.
	if (document.location.hostname.search(/^(uk|ukservice|appuk)\.prweb/i) != -1 || websiteOriginsCookie == 'UK') {
		document.title = appendOrigin(document.title, 'UK');
		createCookie('websiteOrigin', 'UK', 0);
	}
	
// BEGIN FR EDIT
	// if from the FR website, append the FR site to the title for GA filtering.
	// as well, set a session cookie so any activity will be tracked back to the FR site for this session.
	if (document.location.hostname.search(/^(fr|frservice|appfr)\.prweb/i) != -1 || websiteOriginsCookie == 'FR') {
		document.title = appendOrigin(document.title, 'FR');
		createCookie('websiteOrigin', 'FR', 0);
	}
// END FR EDIT
	
	var PRWebTracker = _gat._getTracker(gaWebPropertyID);
	
	PRWebTracker._setDomainName(cookieDomain);
	
	PRWebTracker._setAllowLinker(true);
	
	if (disableHash)
		PRWebTracker._setAllowHash(false);
	
	if (!document.strTrackPageView && document.location.pathname == '/learning/results') {
		var gaKeyword = $('#search-learning').val();
		var cat = '';
		
		if (gaKeyword != '') {
		
			if (document.getElementById('article_videos').checked)
				cat += 'videos,';
				
			if (document.getElementById('article_articles').checked)
				cat += 'articles,';
				
			if (document.getElementById('article_whitepapers').checked)
				cat += 'whitepapers,';
			
			if (cat != '')
				cat = cat.substr(0, cat.length - 1);
			else
				cat = 'learning+center';
				
			document.strTrackPageView = '/learning/results?cat=' + cat + '&q=' + gaKeyword.replace(/\s/g, '+');
		}
	}
	else if (!document.strTrackPageView && document.location.pathname == '/apprendre/results') {
		var gaKeyword = $('#search-apprendre').val();
		var cat = '';
		
		if (gaKeyword != '') {
		
			cat = 'learning+center';
				
			document.strTrackPageView = '/apprendre/results?cat=' + cat + '&q=' + gaKeyword.replace(/\s/g, '+');
		}
	}
	
	var vkipathname = document.strTrackPageView || (document.location.pathname + document.location.search);
	
	if (vkipathname.search(/\/(pricing|prix)\//i) > -1) {
		var vkifunnel = readCookie('vkifunnel');
		
		if (vkifunnel == null)
			createCookie('vkifunnel', 'purchase=service-site');
		else {
			if (vkifunnel.search(/purchase/i) > -1) {
				vkifunnel = vkifunnel.replace(/purchase=[^|]*/i, 'purchase=service-site');
			}
			else
				vkifunnel = vkifunnel + '|purchase=service-site';
				
			createCookie('vkifunnel', vkifunnel);
		}
	}
	else if (vkipathname.search(/\/distributioneditprwebpackageselection/i) > -1) {
		var vkifunnel = readCookie('vkifunnel');
		
		if (vkifunnel == null)
			createCookie('vkifunnel', 'purchase=app-site');
		else {
			if (vkifunnel.search(/purchase/i) > -1) {
				vkifunnel = vkifunnel.replace(/purchase=[^|]*/i, 'purchase=app-site');
			}
			else
				vkifunnel = vkifunnel + '|purchase=app-site';
				
			createCookie('vkifunnel', vkifunnel);
		}
	}
	else if (vkipathname.search(/\/distributioneditprweb$/i) > -1) {
		var vkifunnel = readCookie('vkifunnel');
		
		if (vkifunnel == null)
			createCookie('vkifunnel', 'release=wysiwyg');
		else {
			if (vkifunnel.search(/release/i) > -1) {
				vkifunnel = vkifunnel.replace(/release=[^|]*/i, 'release=wysiwyg');
			}
			else
				vkifunnel = vkifunnel + '|release=wysiwyg';
				
			createCookie('vkifunnel', vkifunnel);
		}
	}
	else if (vkipathname.search(/\/distributioneditprwebeasysubmit$/i) > -1) {
		var vkifunnel = readCookie('vkifunnel');
		
		if (vkifunnel == null)
			createCookie('vkifunnel', 'release=easy');
		else {
			if (vkifunnel.search(/release/i) > -1) {
				vkifunnel = vkifunnel.replace(/release=[^|]*/i, 'release=easy');
			}
			else
				vkifunnel = vkifunnel + '|release=easy';
				
			createCookie('vkifunnel', vkifunnel);
		}
	}
	
	if (document.strTrackPageView) {
		
		var vkifunnel = readCookie('vkifunnel');
		
		if (document.strTrackPageView.search(/\/distributioneditprwebpaymentsummary$/i) > -1) {
			// set default funnel to be app site
			document.strTrackPageView = '/distributioneditprwebpaymentsummary-app-site';
			
			if (vkifunnel != null) {
				if (vkifunnel.search(/purchase=service-site/) > -1)
					document.strTrackPageView = '/distributioneditprwebpaymentsummary-service-site';
			}
		}
		else if (document.strTrackPageView.search(/\/distributioneditfinish$/i) > -1) {
			// set default funnel to be wysiwyg
			document.strTrackPageView = '/distributioneditfinish-wysiwyg';
			
			if (vkifunnel != null) {
				if (vkifunnel.search(/release=easy/) > -1)
					document.strTrackPageView = '/distributioneditfinish-easy';
			}
		}
		
		PRWebTracker._trackPageview(document.strTrackPageView);
	} else {
		PRWebTracker._trackPageview();
	}
	
	document.title = originalTitle;
	
} catch (e) {}

/*
	BEGIN: Video Tracking
*/

if (document.strVideoName) {
	var ytplayer = false;
	
	YouTubeStates = {
		unstarted : -1,
		ended : 0,
		playing : 1,
		paused : 2,
		buffering : 3,
		cued : 5
	}
		
	function Video (videoName) {
		this.videoName = videoName;
		this.duration = 0;
		this.markerTimes = {};
		this.markerEventSent = {};
		this.previousMarkerTime = 0;
		
		this.getVideoName = function () {
			return this.videoName;
		}
		
		this.getDuration = function () {
			return this.duration;
		}
		
		this.getMarkerTime = function (marker) {
			return this.markerTimes[marker];
		}
		
		this.setDuration = function (duration) {
			// YouTube includes the "Replay" overlay animation as part of video duration, but sends the ended state exactly at the end of the video	
			// thus, we will get the "ended" state change notification before the current time equals the duration of the video. 
			// to fix this issue, we'll round the duration down
			
			this.duration = Math.floor(duration);
			this.markerTimes = {};
			this.markerTimes['25'] = this.duration * 0.25;
			this.markerTimes['50'] = this.duration * 0.5;
			this.markerTimes['75'] = this.duration * 0.75;
			
			this.markerEventSent['started'] = false;
			this.markerEventSent['25'] = false;
			this.markerEventSent['50'] = false;
			this.markerEventSent['75'] = false;
			this.markerEventSent['finished'] = false;
		}
		
		this.setCurrentTime = function (currentTime) {
			
			/*
			  * if the current video time is within 1 second of the marker, send the event and mark all previous markers as sent.
			  * this prevents any other markers from being sent if the person skips backwards/forwards in the video and only records
			  * the events that truly occurred.
			  */
			
			if (getPlayerState() == YouTubeStates.ended) {
				if (Math.abs(currentTime - this.duration) <= 1 && !this.markerEventSent['finished']) {
					this.trackVideoEvent('100% viewed');
					this.markerEventSent['finished'] = true;
					this.markerEventSent['started'] = false;
					this.markerEventSent['25'] = false;
					this.markerEventSent['50'] = false;
					this.markerEventSent['75'] = false;
				}
			}
			else {
				if (Math.abs(currentTime - this.markerTimes['75']) <= 1 && !this.markerEventSent['75']) {
					this.trackVideoEvent('75% viewed');
					this.markerEventSent['25'] = true;
					this.markerEventSent['50'] = true;
					this.markerEventSent['75'] = true;
				}
				else if (Math.abs(currentTime - this.markerTimes['50']) <= 1 && !this.markerEventSent['50']) {
					this.trackVideoEvent('50% viewed');
					this.markerEventSent['25'] = true;
					this.markerEventSent['50'] = true;
				}
				else if (Math.abs(currentTime - this.markerTimes['25']) <= 1 && !this.markerEventSent['25']) {
					this.trackVideoEvent('25% viewed');
					this.markerEventSent['25'] = true;
				}
				else if (Math.abs(currentTime) <= 1 && !this.markerEventSent['started']) {
					this.trackVideoEvent('Started');
					this.markerEventSent['started'] = true;
					this.markerEventSent['25'] = false;
					this.markerEventSent['50'] = false;
					this.markerEventSent['75'] = false;
					this.markerEventSent['finished'] = false;
				}
			}
			
			// check if visitor rewound video.  If they did, allow future time events to be resent
			if (currentTime < this.previousMarkerTime) {
				if (currentTime < this.markerTimes['25'])
					this.markerEventSent['25'] = false;
					
				if (currentTime < this.markerTimes['50'])
					this.markerEventSent['50'] = false;
					
				if (currentTime < this.markerTimes['75'])
					this.markerEventSent['75'] = false;
				
				this.markerEventSent['finished'] = false;
			}
			
			this.previousMarkerTime = currentTime;
		}
		
		this.trackVideoEvent = function (action) {
		
			var videoName;


// BEGIN: FR EDIT
			
			switch(websiteOriginsCookie) {
				case 'UK':
					videoName = 'UK - ' + this.videoName;
					break;
				case 'FR':
					videoName = 'FR - ' + this.videoName;
					break;
				default:
					videoName = this.videoName;				
			}

// END FR EDIT
				
			trackEvent('Videos', action, videoName);
			logMessage(action + ' ' + videoName);
		}
	}
	
	function onYouTubePlayerReady(playerId) {
		try {
		  ytplayer = document.getElementById(document.ytPlayerID);
		  
		  ytplayer.addEventListener("onStateChange", onytplayerStateChange, false);
		  ytplayer.addEventListener("onError", onPlayerError, false);
		  
		  //setInterval(updateytplayerInfo, 250);
		 } catch(e) {logMessage(e);}
	}
	
	function onPlayerError() {
	}
	
	function onytplayerStateChange(newState) {
		
		switch (newState) {
			case YouTubeStates.unstarted:
				break;
			
			case YouTubeStates.ended:
				break;
				
			case YouTubeStates.playing:
				break;
				
			case YouTubeStates.paused:
				break;
				
			case YouTubeStates.buffering:
				break;
			
			case YouTubeStates.cued:
				break;
			
			default:
				break;
		}
	}

	function updateytplayerInfo() {
		if (typeof video != 'undefined') {
			if (video.getDuration() <= 0) {
				if (getDuration() > 0)
					video.setDuration(getDuration());
			}
			else {
				video.setCurrentTime(getCurrentTime());
			}
		}
	}

	function getPlayerState() {
		if (ytplayer) {
			return ytplayer.getPlayerState();
		}
	}

	function getCurrentTime() {
		if (ytplayer) {
			return ytplayer.getCurrentTime();
		}
	}

	function getDuration() {
		if (ytplayer) {
			return ytplayer.getDuration();
		}
	}

	var video = new Video(document.strVideoName);
}

/* END: video tracking */

/* BEGIN: GA Cookies */
function gaVKIcookies(intGoogDomainHash, strCookies) {
	this.params = {};
	this.cookiesString = strCookies;
	
	if (this.cookiesString == null) this.cookiesString = document.cookie;
	if (this.cookiesString.length == 0) return;

		// extract only those cookies for this domain
			// pattern to find only the __utm cookies with the appropriate domain hash
	var rePattern = new RegExp('(__utm[a-z]{1,2}=' + intGoogDomainHash + '[^;]*)', "g"); 
			// recreate cookiestring by creating an array of selected cookies and joining with ; delimiter
	var aryMatches = this.cookiesString.match(rePattern,"$1");
	if (aryMatches) 
		this.cookiesString = aryMatches.join(';'); 
	else {
		this.cookiesString = '';
		return;
	}
	
		// change components of  __utmz to independant name=value pairs
	this.cookiesString = this.cookiesString.replace(/(\.|\|)utm/g,';utm'); 

		// parse out name/value pairs separated via ;
	var args = this.cookiesString.split(';'); 				
	
		// split out each name=value pair
	for (var i = 0; i < args.length; i++) {
	
		var pair = args[i].match(/([^=]*)=(.*)/) ;  // Don't use: pair = args[i].split('=') since value could contain a 2nd =
													// Thanks Danny Ng of www.firstrate.com.au
		var name = decodeURIComponent(pair[1]);
		name = name.replace(/^\s+|\s+$/g, '')
		var value = (pair.length>=2)
			? decodeURIComponent(pair[2])
			: '';
		
			// in case page has access to > 1 domain that has __utm* cookies, we need to ensure we look only at the
			// cookies for the tracked (sub-)domain. 
			// Since JS has no access to read a cookie's domain, we need to matching on the required Google Domain Hash.  
			// All __utm* cookies begin with the domain hash = position 0
			this.params[name] = value;
			var subValues = value.split('.');
		
			switch (name) {
				case '__utma': //domainhash.anonymizedVisitorID.ftime.ltime.stime.sessioncount
					this.params['domainhash'] = subValues[0];
					this.params['visitorId'] = subValues[1];
					this.params['ftime'] = subValues[2];
					this.params['ltime'] = subValues[3];
					this.params['stime'] = subValues[4];
					this.params['sessioncount'] = subValues[5];
					break;
				case '__utmb':	// eg .45.10.1218592192
					this.params['gif_hits'] = subValues[1];
					break;
				case '__utmv':
					this.params['custom'] = subValues[1];
					break;
				case '__utmz':	//nsession.nresponses
					this.params['nsession'] = subValues[2];
					this.params['nresponses'] = subValues[3];
					break;
				case 'utmcsr':
					this.params['trafficsource'] = subValues[0];
					break;
				case 'utmccn':	
					this.params['campaignname'] = subValues[0];
					break;
				case 'utmcmd':	
					this.params['campaignmedium'] = subValues[0];
					break;
				case 'utmctr':	
					this.params['campaignterm'] = subValues[0];
					break;
				case 'utmcct':	
					this.params['campaigncontent'] = subValues[0];
					break;
				case 'utmcid':	
					this.params['campaignid'] = subValues[0];
		}
	}
}

gaVKIcookies.prototype.get = function(key, default_) {
	var value = this.params[key];
	return (value != null) ? value : default_;
}


gaVKIcookies.prototype.contains = function(key) {
	var value = this.params[key];
	return (value != null);
}

gaVKIcookies.prototype.formatDateTime = function(strSession) {
	var value = this.params[strSession]
	var d = new Date(value*1000);

	strDate = d.toLocaleDateString();
	strDate = strDate.replace(/[a-z]{3}.*[, ]+([a-z]{3})[^, ]*/i,'$1');
	strDate += ' ' + d.toLocaleTimeString();
	
	return strDate;
}

/* END: GA Cookies */

/* BEGIN: user-defined variables */
if (document.strVisitorUDV) {
	setUDV(document.strVisitorUDV, true)
}

/**
  *  Determines if UDV should be set/overridden and sets the UDV.
  *  
  *  @param	value			UDV Value
  *  @param	checkPrevValue	If true, runs check to see if the current UDV value should be overridden.  If false, sets the UDV to the new value.
  *  @return	void
  */
function setUDV(value, checkPrevValue) {
	
	var callSetVar = false;
	
	if (checkPrevValue) {
		var currentVisitorUDV = getUDV();
		
		// only set UDV if either the UDV is not set, or if the current value isn't equal to the new value and the current UDV isn't 'Purchasers'.
		if (currentVisitorUDV == '' || (currentVisitorUDV != value && currentVisitorUDV != 'Purchasers')) {
			callSetVar = true;
		}
	}
	else
		callSetVar = true;
	
	if (callSetVar) {
		if (typeof(PRWebTracker) == "object") {
			PRWebTracker._setVar(value);
		}
	}
}

/**
  *  Gets the current UDV value
  */
function getUDV() {
	
	var GADomainHash = disableHash ? 1 : _gat.t(cookieDomain);
	var GACookies = new gaVKIcookies(GADomainHash);
	
	return GACookies.get('custom', '');

}

/* END: user-defined variables */

/**
  *  sets a custom variable
  *  @param		index	specifies which custom variable to use - index can be between 1 and 5
  *  @param		name	name of the custom variable
  *  @param		value	value of the custom variable
  *  @param		scope	scope of the custom variable - 1 = visitor, 2 = session, 3 = page
  *  @return	void
  */
function setCustomVar(index, name, value, scope)
{	
	try {
		PRWebTracker._setCustomVar(index, name, value, scope);
	} catch(e) {}
}

/*	Configuration options required:
	1.	Select which external links to listen for
	2.	If document downloads, specify which ones or accept the default list.
*/
	var isDocs = true;
	var isMailto = true;
	var	isExternal = true;
	var isVirtual = true;
	var patternDocslist = 
/\.(?:doc|eps|jpg|png|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)($|\&|\?)/;


	// Syntax: gaVKItagConfig([true|false|string of bar-delimited extensions [, true|false [, true|false [,  true|false]]]]) ; If all false, don't bother loading script
function gaVKItagConfig(docslist, mailto, external, virtual) {
	
	isDocs = (typeof docslist == 'boolean') ? docslist : docslist > '';	// Determine isDocs 
	if (typeof docslist == 'string' && docslist > '') patternDocslist = new RegExp('\\.(?:' + docslist + ')($|\\&|\\?)'); // updated by erikvold VKI added \? in second group:
	isMailto = (mailto !== undefined) ? mailto : true;
	isExternal = (external !== undefined) ? external : true;
    isVirtual = (virtual !== undefined) ? virtual : true;

	
	gaVKItag();
}

function gaVKItag() {

	if ((isDocs || isMailto || isExternal || isVirtual) && document.getElementsByTagName) {

		// Initialize external link handlers
	        var hrefs = document.getElementsByTagName("a");
	        for (var h = 0; h < hrefs.length; h++) {

					// try {} catch{} block added by erikvold VKI
				try{
		                //protocol, host, hostname, port, pathname, search, hash
		                if (isMailto && hrefs[h].protocol == "mailto:") {
		                        startListening(hrefs[h],"click",trackMailto);
		                } else if (isDocs && hrefs[h].hostname == location.host) { //BK VKI 080820
		                        var path = hrefs[h].pathname + hrefs[h].search;
								
								var isDoc = path.match(patternDocslist);							
								
		                        if (isDoc) {
		                            startListening(hrefs[h],"click",trackExternalLinks);
									hrefs[h].onclick = function () {return false;};
		                        }
		                } else if (isExternal && hrefs[h].hostname  && hrefs[h].hostname !== location.host) {
								startListening(hrefs[h],"click",trackExternalLinks);
		                }
				}  catch(e){
					continue;
				}
	        }
	}
}

function startListening (obj,evnt,func) {
        if (obj.addEventListener) {
                obj.addEventListener(evnt,func,false);
        } else if (obj.attachEvent) {
                obj.attachEvent("on" + evnt,func);
        }
}

function trackMailto (evnt) {
        var href = evnt.srcElement ? evnt.srcElement.href : this.href;
        var mailto = "/mailto/" + href.substring(7);
		if (typeof(PRWebTracker) == "object") PRWebTracker._trackPageview(mailto); 
}

function trackExternalLinks (evnt) {
        var e = (evnt.srcElement) ? evnt.srcElement : this;
        while (e.tagName !== "A") {
                e = e.parentNode;
        }
		var lnk = (e.pathname.charAt(0) == "/") ? e.pathname : "/" + e.pathname; 
        if (e.search && e.pathname.indexOf(e.search) == -1) lnk += e.search;
		if (e.hostname !== location.host) lnk = "/external/" + e.hostname + lnk; 
		
		if (typeof(PRWebTracker) == "object") {
			// if the originating website is set, prepend to the title so it can be filtered out
			var websiteOriginsCookie = readCookie('websiteOrigin');
			var originalTitle = document.title;
			
			if (websiteOriginsCookie != null)
				document.title = appendOrigin(document.title, websiteOriginsCookie);
			
			PRWebTracker._trackPageview(lnk);
			document.title = originalTitle;
			
			fwdTo = e.href;
			
			setTimeout("window.location.href = fwdTo;", 500);
		}
}

function addTrans(orderID, affiliate, total, tax, shipping, city, state, country) {

	var websiteOriginsCookie = readCookie('websiteOrigin');
	
	// if the originating website is set, append to the orderID so it can be filtered out
	if (websiteOriginsCookie != null)
		orderID += "_" + websiteOriginsCookie;
		
	PRWebTracker._addTrans(
		orderID,
		affiliate,
		total,
		tax,
		shipping,
		city,
		state,
		country);
}

function addItem(orderID, SKU, productName, category, price, qty) {

	var websiteOriginsCookie = readCookie('websiteOrigin');
	
	// if the originating website is set, append to the orderID so it can be filtered out
	if (websiteOriginsCookie != null)
		orderID += "_" + websiteOriginsCookie;
		
	PRWebTracker._addItem(
		orderID,
		SKU,
		productName,
		category,
		price,
		qty);
}

function trackTrans() {
	PRWebTracker._trackTrans();
	setUDV('Purchasers', false);
}

function trackEvent(category, action, label, value) {
	try {
		PRWebTracker._trackEvent(category, action, label, value);
	} catch (e) {}
}

function createCookie(name,value,days) {
	
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; domain=" + cookieDomain + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function appendOrigin(str, orig) {
	// append the originating site to the string
	return '[-' + orig + '-] ' + str;
}