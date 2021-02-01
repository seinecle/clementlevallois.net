




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>TimelineJS/build/js/storyjs-embed.js at master · NUKnightLab/TimelineJS</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="NUKnightLab/TimelineJS" name="twitter:title" /><meta content="TimelineJS: A Storytelling Timeline built in JavaScript. " name="twitter:description" /><meta content="https://2.gravatar.com/avatar/1e509017d514a643d6955a9cc6379f38?d=https%3A%2F%2Fidenticons.github.com%2F3289e079103a6b9953817a1fb78eb766.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/1e509017d514a643d6955a9cc6379f38?d=https%3A%2F%2Fidenticons.github.com%2F3289e079103a6b9953817a1fb78eb766.png&amp;r=x&amp;s=400" property="og:image" /><meta content="NUKnightLab/TimelineJS" property="og:title" /><meta content="https://github.com/NUKnightLab/TimelineJS" property="og:url" /><meta content="TimelineJS: A Storytelling Timeline built in JavaScript. " property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="804F9648:4030:24824E6:53261738" name="octolytics-dimension-request_id" /><meta content="1244100" name="octolytics-actor-id" /><meta content="seinecle" name="octolytics-actor-login" /><meta content="4746b962bf377d867a3dc5188749701505ca9fee11b02fab5d7de7ae3ae94751" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Gb4N+oDfcxvyDoOIxqg2ssizKLN0ZiP2SoJ2TwFhVMs=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-38269a8d7da2a54f27974215f4f2925eaad4d0d5.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-38408e89653ef671f9e6bc74ffaf307a3ac02571.css" media="all" rel="stylesheet" type="text/css" />
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-55976bc637c425207bc6e52d7ac4c125773713de.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-59c1229021d04ba714d869cf0ab18c2ff7a289ab.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="2d15cb01dc8a23a9081f97d25bdee0dd">

        <link data-pjax-transient rel='permalink' href='/NUKnightLab/TimelineJS/blob/704d630316f3786f891d668a6f6958fe8cde09c4/build/js/storyjs-embed.js'>

  <meta name="description" content="TimelineJS: A Storytelling Timeline built in JavaScript. " />

  <meta content="1273909" name="octolytics-dimension-user_id" /><meta content="NUKnightLab" name="octolytics-dimension-user_login" /><meta content="3633690" name="octolytics-dimension-repository_id" /><meta content="NUKnightLab/TimelineJS" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3633690" name="octolytics-dimension-repository_network_root_id" /><meta content="NUKnightLab/TimelineJS" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/NUKnightLab/TimelineJS/commits/master.atom" rel="alternate" title="Recent Commits to TimelineJS:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="seinecle"
      data-repo="NUKnightLab/TimelineJS"
      data-branch="master"
      data-sha="2e368bdf390a45cc186f713b75e9c9a2d55e34ed"
  >

    <input type="hidden" name="nwo" value="NUKnightLab/TimelineJS" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/seinecle" class="name">
        <img alt="Clement Levallois" class=" js-avatar" data-user="1244100" height="20" src="https://avatars3.githubusercontent.com/u/1244100?s=140" width="20" /> seinecle
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="NUKnightLab/TimelineJS">This repository</span>
    </li>
      <li>
        <a href="/NUKnightLab/TimelineJS/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Gb4N+oDfcxvyDoOIxqg2ssizKLN0ZiP2SoJ2TwFhVMs=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3633690" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/NUKnightLab/TimelineJS/watchers">
        418
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/NUKnightLab/TimelineJS/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar NUKnightLab/TimelineJS" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/NUKnightLab/TimelineJS/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star NUKnightLab/TimelineJS" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/NUKnightLab/TimelineJS/stargazers">
        6,062
      </a>
  </div>

  </li>


        <li>
          <a href="/NUKnightLab/TimelineJS/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of NUKnightLab/TimelineJS to your account" aria-label="Fork your own copy of NUKnightLab/TimelineJS to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/NUKnightLab/TimelineJS/network" class="social-count">1,162</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/NUKnightLab" class="url fn" itemprop="url" rel="author"><span itemprop="title">NUKnightLab</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/NUKnightLab/TimelineJS" class="js-current-repository js-repo-home-link">TimelineJS</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/NUKnightLab/TimelineJS" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /NUKnightLab/TimelineJS">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/NUKnightLab/TimelineJS/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /NUKnightLab/TimelineJS/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>148</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/NUKnightLab/TimelineJS/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /NUKnightLab/TimelineJS/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>20</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/NUKnightLab/TimelineJS/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /NUKnightLab/TimelineJS/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/NUKnightLab/TimelineJS/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /NUKnightLab/TimelineJS/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/NUKnightLab/TimelineJS/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /NUKnightLab/TimelineJS/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/NUKnightLab/TimelineJS.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/NUKnightLab/TimelineJS.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:NUKnightLab/TimelineJS.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:NUKnightLab/TimelineJS.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/NUKnightLab/TimelineJS" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/NUKnightLab/TimelineJS" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/NUKnightLab/TimelineJS" class="minibutton sidebar-button" title="Save NUKnightLab/TimelineJS to your computer and use it in GitHub Desktop." aria-label="Save NUKnightLab/TimelineJS to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/NUKnightLab/TimelineJS/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download NUKnightLab/TimelineJS as a zip file"
                   title="Download NUKnightLab/TimelineJS as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:74e0b5fdc625f3ed15e06b2ec5d512be -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/NUKnightLab/TimelineJS/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/blob/Canary/build/js/storyjs-embed.js"
                 data-name="Canary"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="Canary">Canary</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/blob/Reverse/build/js/storyjs-embed.js"
                 data-name="Reverse"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="Reverse">Reverse</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/blob/TALFancyBox/build/js/storyjs-embed.js"
                 data-name="TALFancyBox"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="TALFancyBox">TALFancyBox</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/blob/master/build/js/storyjs-embed.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.25/build/js/storyjs-embed.js"
                 data-name="v2.25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.25">v2.25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.24/build/js/storyjs-embed.js"
                 data-name="v2.24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.24">v2.24</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.23/build/js/storyjs-embed.js"
                 data-name="v2.23"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.23">v2.23</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.22/build/js/storyjs-embed.js"
                 data-name="v2.22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.22">v2.22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.20/build/js/storyjs-embed.js"
                 data-name="v2.20"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.20">v2.20</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.18/build/js/storyjs-embed.js"
                 data-name="v2.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.18">v2.18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.17/build/js/storyjs-embed.js"
                 data-name="v2.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.17">v2.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.15/build/js/storyjs-embed.js"
                 data-name="v2.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.15">v2.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.14/build/js/storyjs-embed.js"
                 data-name="v2.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.14">v2.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.12/build/js/storyjs-embed.js"
                 data-name="v2.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.12">v2.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.11.1/build/js/storyjs-embed.js"
                 data-name="v2.11.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.11.1">v2.11.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.11/build/js/storyjs-embed.js"
                 data-name="v2.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.11">v2.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/v2.10/build/js/storyjs-embed.js"
                 data-name="v2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.10">v2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.30.0/build/js/storyjs-embed.js"
                 data-name="2.30.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.30.0">2.30.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.29.1/build/js/storyjs-embed.js"
                 data-name="2.29.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.29.1">2.29.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.29.0/build/js/storyjs-embed.js"
                 data-name="2.29.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.29.0">2.29.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.28.1/build/js/storyjs-embed.js"
                 data-name="2.28.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.28.1">2.28.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.28.0/build/js/storyjs-embed.js"
                 data-name="2.28.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.28.0">2.28.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.27.1/build/js/storyjs-embed.js"
                 data-name="2.27.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.27.1">2.27.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.27.0/build/js/storyjs-embed.js"
                 data-name="2.27.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.27.0">2.27.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.26.5/build/js/storyjs-embed.js"
                 data-name="2.26.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.26.5">2.26.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.26.4/build/js/storyjs-embed.js"
                 data-name="2.26.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.26.4">2.26.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.26.3/build/js/storyjs-embed.js"
                 data-name="2.26.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.26.3">2.26.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.26.2/build/js/storyjs-embed.js"
                 data-name="2.26.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.26.2">2.26.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.26.1/build/js/storyjs-embed.js"
                 data-name="2.26.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.26.1">2.26.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NUKnightLab/TimelineJS/tree/2.26.0/build/js/storyjs-embed.js"
                 data-name="2.26.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="2.26.0">2.26.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/NUKnightLab/TimelineJS" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">TimelineJS</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/NUKnightLab/TimelineJS/tree/master/build" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">build</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/NUKnightLab/TimelineJS/tree/master/build/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">storyjs-embed.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="build/js/storyjs-embed.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Joe Germuska" class="main-avatar js-avatar" data-user="46313" height="24" src="https://2.gravatar.com/avatar/e7daec2f9052c7c1690422d0d74c3b7d?d=https%3A%2F%2Fidenticons.github.com%2F490e2819b183440ff0baf248f186d608.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/JoeGermuska" rel="author">JoeGermuska</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-20T15:21:27-06:00" title="2014-02-20 16:21:27">February 20, 2014</time>
    <div class="commit-title">
        <a href="/NUKnightLab/TimelineJS/commit/4031cf6dd6da58f99f0d5c37be85c8cdc5a4fdbc" class="message" data-pjax="true" title="Release 2.30.0">Release 2.30.0</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="JoeGermuska" href="/NUKnightLab/TimelineJS/commits/master/build/js/storyjs-embed.js?author=JoeGermuska"><img alt="Joe Germuska" class=" js-avatar" data-user="46313" height="20" src="https://2.gravatar.com/avatar/e7daec2f9052c7c1690422d0d74c3b7d?d=https%3A%2F%2Fidenticons.github.com%2F490e2819b183440ff0baf248f186d608.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="allenz456" href="/NUKnightLab/TimelineJS/commits/master/build/js/storyjs-embed.js?author=allenz456"><img alt="Allen Zeng" class=" js-avatar" data-user="1289471" height="20" src="https://2.gravatar.com/avatar/4ad40e150722bad28dd6737bd480a401?d=https%3A%2F%2Fidenticons.github.com%2F8368ad0b6b74dff5a9fc1f3ac153060d.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Joe Germuska" class=" js-avatar" data-user="46313" height="24" src="https://2.gravatar.com/avatar/e7daec2f9052c7c1690422d0d74c3b7d?d=https%3A%2F%2Fidenticons.github.com%2F490e2819b183440ff0baf248f186d608.png&amp;r=x&amp;s=140" width="24" />
            <a href="/JoeGermuska">JoeGermuska</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Allen Zeng" class=" js-avatar" data-user="1289471" height="24" src="https://2.gravatar.com/avatar/4ad40e150722bad28dd6737bd480a401?d=https%3A%2F%2Fidenticons.github.com%2F8368ad0b6b74dff5a9fc1f3ac153060d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/allenz456">allenz456</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>46 lines (39 sloc)</span>
          <span class="meta-divider"></span>
        <span>9.848 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/NUKnightLab/TimelineJS?branch=master&amp;filepath=build%2Fjs%2Fstoryjs-embed.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/NUKnightLab/TimelineJS/edit/master/build/js/storyjs-embed.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/NUKnightLab/TimelineJS/raw/master/build/js/storyjs-embed.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/NUKnightLab/TimelineJS/blame/master/build/js/storyjs-embed.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/NUKnightLab/TimelineJS/commits/master/build/js/storyjs-embed.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/NUKnightLab/TimelineJS/delete/master/build/js/storyjs-embed.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">    TimelineJS - ver. 2.30.0 - 2014-02-20</span></div><div class='line' id='LC3'><span class="cm">    Copyright (c) 2012-2013 Northwestern University</span></div><div class='line' id='LC4'><span class="cm">    a project of the Northwestern University Knight Lab, originally created by Zach Wise</span></div><div class='line' id='LC5'><span class="cm">    https://github.com/NUKnightLab/TimelineJS</span></div><div class='line' id='LC6'><span class="cm">    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.</span></div><div class='line' id='LC7'><span class="cm">    If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.</span></div><div class='line' id='LC8'><span class="cm">*/</span></div><div class='line' id='LC9'><span class="cm">/* **********************************************</span></div><div class='line' id='LC10'><span class="cm">     Begin LazyLoad.js</span></div><div class='line' id='LC11'><span class="cm">********************************************** *//*jslint browser: true, eqeqeq: true, bitwise: true, newcap: true, immed: true, regexp: false *//*</span></div><div class='line' id='LC12'><span class="cm">LazyLoad makes it easy and painless to lazily load one or more external</span></div><div class='line' id='LC13'><span class="cm">JavaScript or CSS files on demand either during or after the rendering of a web</span></div><div class='line' id='LC14'><span class="cm">page.</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="cm">Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile</span></div><div class='line' id='LC17'><span class="cm">Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and</span></div><div class='line' id='LC18'><span class="cm">are not officially supported.</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="cm">Visit https://github.com/rgrove/lazyload/ for more info.</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><span class="cm">Copyright (c) 2011 Ryan Grove &lt;ryan@wonko.com&gt;</span></div><div class='line' id='LC23'><span class="cm">All rights reserved.</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="cm">Permission is hereby granted, free of charge, to any person obtaining a copy of</span></div><div class='line' id='LC26'><span class="cm">this software and associated documentation files (the &#39;Software&#39;), to deal in</span></div><div class='line' id='LC27'><span class="cm">the Software without restriction, including without limitation the rights to</span></div><div class='line' id='LC28'><span class="cm">use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of</span></div><div class='line' id='LC29'><span class="cm">the Software, and to permit persons to whom the Software is furnished to do so,</span></div><div class='line' id='LC30'><span class="cm">subject to the following conditions:</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><span class="cm">The above copyright notice and this permission notice shall be included in all</span></div><div class='line' id='LC33'><span class="cm">copies or substantial portions of the Software.</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'><span class="cm">THE SOFTWARE IS PROVIDED &#39;AS IS&#39;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></div><div class='line' id='LC36'><span class="cm">IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS</span></div><div class='line' id='LC37'><span class="cm">FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR</span></div><div class='line' id='LC38'><span class="cm">COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER</span></div><div class='line' id='LC39'><span class="cm">IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN</span></div><div class='line' id='LC40'><span class="cm">CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'><span class="cm">@module lazyload</span></div><div class='line' id='LC43'><span class="cm">@class LazyLoad</span></div><div class='line' id='LC44'><span class="cm">@static</span></div><div class='line' id='LC45'><span class="cm">@version 2.0.3 (git)</span></div><div class='line' id='LC46'><span class="cm">*/</span><span class="kd">function</span> <span class="nx">getEmbedScriptPath</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">),</span><span class="nx">n</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span><span class="nx">t</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">src</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">n</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">src</span><span class="p">);</span><span class="nx">n</span><span class="o">!=</span><span class="s2">&quot;&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">r</span><span class="o">=</span><span class="s2">&quot;/&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">n</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)</span><span class="o">+</span><span class="nx">r</span><span class="p">}</span><span class="kd">function</span> <span class="nx">createStoryJS</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(){</span><span class="nx">LoadLib</span><span class="p">.</span><span class="nx">js</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="p">,</span><span class="nx">y</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">y</span><span class="p">(){</span><span class="nx">l</span><span class="p">.</span><span class="nx">js</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">lang</span><span class="o">!=</span><span class="s2">&quot;en&quot;</span><span class="o">?</span><span class="nx">LazyLoad</span><span class="p">.</span><span class="nx">js</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">locale</span><span class="p">,</span><span class="nx">b</span><span class="p">)</span><span class="o">:</span><span class="nx">l</span><span class="p">.</span><span class="nx">language</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">x</span><span class="p">()}</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(){</span><span class="nx">l</span><span class="p">.</span><span class="nx">language</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">x</span><span class="p">()}</span><span class="kd">function</span> <span class="nx">w</span><span class="p">(){</span><span class="nx">l</span><span class="p">.</span><span class="nx">css</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">x</span><span class="p">()}</span><span class="kd">function</span> <span class="nx">E</span><span class="p">(){</span><span class="nx">l</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">css</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">x</span><span class="p">()}</span><span class="kd">function</span> <span class="nx">S</span><span class="p">(){</span><span class="nx">l</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">js</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">x</span><span class="p">()}</span><span class="kd">function</span> <span class="nx">x</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">checks</span><span class="o">&gt;</span><span class="mi">40</span><span class="p">)</span><span class="k">return</span><span class="p">;</span><span class="nx">l</span><span class="p">.</span><span class="nx">checks</span><span class="o">++</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">js</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">.</span><span class="nx">css</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">css</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">js</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">.</span><span class="nx">language</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">l</span><span class="p">.</span><span class="nx">finished</span><span class="p">){</span><span class="nx">l</span><span class="p">.</span><span class="nx">finished</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">N</span><span class="p">()}}</span><span class="k">else</span> <span class="nx">l</span><span class="p">.</span><span class="nx">timeout</span><span class="o">=</span><span class="nx">setTimeout</span><span class="p">(</span><span class="s2">&quot;onloaded_check_again();&quot;</span><span class="p">,</span><span class="mi">250</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">T</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="s2">&quot;storyjs-embed&quot;</span><span class="p">;</span><span class="nx">r</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">h</span><span class="p">.</span><span class="nx">embed_id</span><span class="o">!=</span><span class="s2">&quot;&quot;</span><span class="o">?</span><span class="nx">i</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">embed_id</span><span class="p">)</span><span class="o">:</span><span class="nx">i</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;timeline-embed&quot;</span><span class="p">);</span><span class="nx">i</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span><span class="nx">r</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">,</span><span class="nx">h</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;%&quot;</span><span class="p">))</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;%&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;%&quot;</span><span class="p">;</span><span class="k">else</span><span class="p">{</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="o">-</span><span class="mi">2</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;%&quot;</span><span class="p">)){</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span><span class="nx">e</span><span class="o">+=</span><span class="s2">&quot; full-embed&quot;</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;%&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;%&quot;</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;%&quot;</span><span class="p">)){</span><span class="nx">e</span><span class="o">+=</span><span class="s2">&quot; full-embed&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">-</span><span class="mi">16</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">e</span><span class="o">+=</span><span class="s2">&quot; sized-embed&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">-</span><span class="mi">16</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">}</span><span class="nx">i</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="nx">i</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;className&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="nx">r</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span><span class="o">=</span><span class="s2">&quot;relative&quot;</span><span class="p">}</span><span class="kd">function</span> <span class="nx">N</span><span class="p">(){</span><span class="nx">VMM</span><span class="p">.</span><span class="nx">debug</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">debug</span><span class="p">;</span><span class="nx">n</span><span class="o">=</span><span class="k">new</span> <span class="nx">VMM</span><span class="p">.</span><span class="nx">Timeline</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span><span class="nx">n</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">h</span><span class="p">);</span><span class="nx">o</span><span class="o">&amp;&amp;</span><span class="nx">VMM</span><span class="p">.</span><span class="nx">bindEvent</span><span class="p">(</span><span class="nx">global</span><span class="p">,</span><span class="nx">onHeadline</span><span class="p">,</span><span class="s2">&quot;HEADLINE&quot;</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">o</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">u</span><span class="o">=</span><span class="s2">&quot;2.24&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="s2">&quot;1.7.1&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="p">{</span><span class="nx">timeout</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">checks</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">finished</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">js</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">css</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">jquery</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">has_jquery</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">language</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">font</span><span class="o">:</span><span class="p">{</span><span class="nx">css</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">js</span><span class="o">:!</span><span class="mi">1</span><span class="p">}},</span><span class="nx">c</span><span class="o">=</span><span class="p">{</span><span class="nx">base</span><span class="o">:</span><span class="nx">embed_path</span><span class="p">,</span><span class="nx">css</span><span class="o">:</span><span class="nx">embed_path</span><span class="o">+</span><span class="s2">&quot;css/&quot;</span><span class="p">,</span><span class="nx">js</span><span class="o">:</span><span class="nx">embed_path</span><span class="o">+</span><span class="s2">&quot;js/&quot;</span><span class="p">,</span><span class="nx">locale</span><span class="o">:</span><span class="nx">embed_path</span><span class="o">+</span><span class="s2">&quot;js/locale/&quot;</span><span class="p">,</span><span class="nx">jquery</span><span class="o">:</span><span class="s2">&quot;//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js&quot;</span><span class="p">,</span><span class="nx">font</span><span class="o">:</span><span class="p">{</span><span class="nx">google</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">css</span><span class="o">:</span><span class="nx">embed_path</span><span class="o">+</span><span class="s2">&quot;css/themes/font/&quot;</span><span class="p">,</span><span class="nx">js</span><span class="o">:</span><span class="s2">&quot;//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js&quot;</span><span class="p">}},</span><span class="nx">h</span><span class="o">=</span><span class="p">{</span><span class="nx">version</span><span class="o">:</span><span class="nx">u</span><span class="p">,</span><span class="nx">debug</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">type</span><span class="o">:</span><span class="s2">&quot;timeline&quot;</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="s2">&quot;storyjs&quot;</span><span class="p">,</span><span class="nx">embed_id</span><span class="o">:</span><span class="s2">&quot;timeline-embed&quot;</span><span class="p">,</span><span class="nx">embed</span><span class="o">:!</span><span class="mi">0</span><span class="p">,</span><span class="nx">width</span><span class="o">:</span><span class="s2">&quot;100%&quot;</span><span class="p">,</span><span class="nx">height</span><span class="o">:</span><span class="s2">&quot;100%&quot;</span><span class="p">,</span><span class="nx">source</span><span class="o">:</span><span class="s2">&quot;https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&amp;output=html&quot;</span><span class="p">,</span><span class="nx">lang</span><span class="o">:</span><span class="s2">&quot;en&quot;</span><span class="p">,</span><span class="nx">font</span><span class="o">:</span><span class="s2">&quot;default&quot;</span><span class="p">,</span><span class="nx">css</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">css</span><span class="o">+</span><span class="s2">&quot;timeline.css?&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">,</span><span class="nx">js</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">api_keys</span><span class="o">:</span><span class="p">{</span><span class="nx">google</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">flickr</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">twitter</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">},</span><span class="nx">gmap_key</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">},</span><span class="nx">p</span><span class="o">=</span><span class="p">[{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;Merriweather-NewsCycle&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;News+Cycle:400,700:latin&quot;</span><span class="p">,</span><span class="s2">&quot;Merriweather:400,700,900:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;NewsCycle-Merriweather&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;News+Cycle:400,700:latin&quot;</span><span class="p">,</span><span class="s2">&quot;Merriweather:300,400,700:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;PoiretOne-Molengo&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Poiret+One::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Molengo::latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;Arvo-PTSans&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Arvo:400,700,400italic:latin&quot;</span><span class="p">,</span><span class="s2">&quot;PT+Sans:400,700,400italic:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;PTSerif-PTSans&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;PT+Sans:400,700,400italic:latin&quot;</span><span class="p">,</span><span class="s2">&quot;PT+Serif:400,700,400italic:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;PT&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;PT+Sans+Narrow:400,700:latin&quot;</span><span class="p">,</span><span class="s2">&quot;PT+Sans:400,700,400italic:latin&quot;</span><span class="p">,</span><span class="s2">&quot;PT+Serif:400,700,400italic:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;DroidSerif-DroidSans&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Droid+Sans:400,700:latin&quot;</span><span class="p">,</span><span class="s2">&quot;Droid+Serif:400,700,400italic:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;Lekton-Molengo&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Lekton:400,700,400italic:latin&quot;</span><span class="p">,</span><span class="s2">&quot;Molengo::latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;NixieOne-Ledger&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Nixie+One::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Ledger::latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;AbrilFatface-Average&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Average::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Abril+Fatface::latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;PlayfairDisplay-Muli&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Playfair+Display:400,400italic:latin&quot;</span><span class="p">,</span><span class="s2">&quot;Muli:300,400,300italic,400italic:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;Rancho-Gudea&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Rancho::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Gudea:400,700,400italic:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;Bevan-PotanoSans&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Bevan::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Pontano+Sans::latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;BreeSerif-OpenSans&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Bree+Serif::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;SansitaOne-Kameron&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Sansita+One::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Kameron:400,700:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;Lora-Istok&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Lora:400,700,400italic,700italic:latin&quot;</span><span class="p">,</span><span class="s2">&quot;Istok+Web:400,700,400italic,700italic:latin&quot;</span><span class="p">]},{</span><span class="nx">name</span><span class="o">:</span><span class="s2">&quot;Pacifico-Arimo&quot;</span><span class="p">,</span><span class="nx">google</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;Pacifico::latin&quot;</span><span class="p">,</span><span class="s2">&quot;Arimo:400,700,400italic,700italic:latin&quot;</span><span class="p">]}];</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">e</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">s</span> <span class="k">in</span> <span class="nx">e</span><span class="p">)</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">s</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">h</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span><span class="o">=</span><span class="nx">e</span><span class="p">[</span><span class="nx">s</span><span class="p">]);</span><span class="k">typeof</span> <span class="nx">t</span><span class="o">!=</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">source</span><span class="o">=</span><span class="nx">t</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">url_config</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="p">){</span><span class="nx">o</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;docs.google.com&quot;</span><span class="p">)</span><span class="o">||</span><span class="nx">h</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;json&quot;</span><span class="p">)</span><span class="o">||</span><span class="nx">h</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;storify&quot;</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">source</span><span class="o">=</span><span class="s2">&quot;https://docs.google.com/spreadsheet/pub?key=&quot;</span><span class="o">+</span><span class="nx">h</span><span class="p">.</span><span class="nx">source</span><span class="o">+</span><span class="s2">&quot;&amp;output=html&quot;</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;locale&quot;</span><span class="p">)){</span><span class="nx">h</span><span class="p">.</span><span class="nx">lang</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;locale/&quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="s2">&quot;.js&quot;</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">js</span><span class="o">+</span><span class="s2">&quot;timeline-min.js?&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)){</span><span class="nx">h</span><span class="p">.</span><span class="nx">css</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">css</span><span class="o">+</span><span class="nx">h</span><span class="p">.</span><span class="nx">type</span><span class="o">+</span><span class="s2">&quot;.css?&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">js</span><span class="o">+</span><span class="nx">h</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">debug</span><span class="o">?</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="o">+=</span><span class="s2">&quot;.js?&quot;</span><span class="o">+</span><span class="nx">u</span><span class="o">:</span><span class="nx">h</span><span class="p">.</span><span class="nx">js</span><span class="o">+=</span><span class="s2">&quot;-min.js?&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="s2">&quot;storyjs-&quot;</span><span class="o">+</span><span class="nx">h</span><span class="p">.</span><span class="nx">type</span><span class="p">}</span><span class="nx">h</span><span class="p">.</span><span class="nx">lang</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">locale</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">lang</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">locale</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">locale</span><span class="o">+</span><span class="nx">h</span><span class="p">.</span><span class="nx">lang</span><span class="o">+</span><span class="s2">&quot;.js?&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">;</span><span class="nx">T</span><span class="p">();</span><span class="nx">LoadLib</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">css</span><span class="p">,</span><span class="nx">w</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">font</span><span class="o">==</span><span class="s2">&quot;default&quot;</span><span class="p">){</span><span class="nx">l</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">js</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">l</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">css</span><span class="o">=!</span><span class="mi">0</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">d</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)){</span><span class="nx">d</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.css&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">];</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">css</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">font</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">font</span><span class="p">;</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">css</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">css</span><span class="o">+</span><span class="nx">h</span><span class="p">.</span><span class="nx">font</span><span class="o">+</span><span class="s2">&quot;.css?&quot;</span><span class="o">+</span><span class="nx">u</span><span class="p">}</span><span class="nx">LoadLib</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">css</span><span class="p">,</span><span class="nx">E</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">v</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">v</span><span class="o">&lt;</span><span class="nx">p</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">v</span><span class="o">++</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">name</span><span class="o">==</span><span class="nx">p</span><span class="p">[</span><span class="nx">v</span><span class="p">].</span><span class="nx">name</span><span class="p">){</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">google</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">WebFontConfig</span><span class="o">=</span><span class="p">{</span><span class="nx">google</span><span class="o">:</span><span class="p">{</span><span class="nx">families</span><span class="o">:</span><span class="nx">p</span><span class="p">[</span><span class="nx">v</span><span class="p">].</span><span class="nx">google</span><span class="p">}}}</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">google</span><span class="o">?</span><span class="nx">LoadLib</span><span class="p">.</span><span class="nx">js</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">js</span><span class="p">,</span><span class="nx">S</span><span class="p">)</span><span class="o">:</span><span class="nx">l</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">js</span><span class="o">=!</span><span class="mi">0</span><span class="p">}</span><span class="k">try</span><span class="p">{</span><span class="nx">l</span><span class="p">.</span><span class="nx">has_jquery</span><span class="o">=</span><span class="nx">jQuery</span><span class="p">;</span><span class="nx">l</span><span class="p">.</span><span class="nx">has_jquery</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">has_jquery</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">jquery</span><span class="p">);</span><span class="nx">f</span><span class="o">&lt;</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">?</span><span class="nx">l</span><span class="p">.</span><span class="nx">jquery</span><span class="o">=!</span><span class="mi">1</span><span class="o">:</span><span class="nx">l</span><span class="p">.</span><span class="nx">jquery</span><span class="o">=!</span><span class="mi">0</span><span class="p">}}</span><span class="k">catch</span><span class="p">(</span><span class="nx">m</span><span class="p">){</span><span class="nx">l</span><span class="p">.</span><span class="nx">jquery</span><span class="o">=!</span><span class="mi">1</span><span class="p">}</span><span class="nx">l</span><span class="p">.</span><span class="nx">jquery</span><span class="o">?</span><span class="nx">g</span><span class="p">()</span><span class="o">:</span><span class="nx">LoadLib</span><span class="p">.</span><span class="nx">js</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">jquery</span><span class="p">,</span><span class="nx">g</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">onloaded_check_again</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">x</span><span class="p">()}}</span><span class="nx">LazyLoad</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">function</span> <span class="nx">u</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">t</span><span class="p">),</span><span class="nx">i</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">n</span><span class="p">)</span><span class="nx">n</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">r</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">n</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span><span class="k">return</span> <span class="nx">r</span><span class="p">}</span><span class="kd">function</span> <span class="nx">a</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="nx">r</span><span class="p">[</span><span class="nx">e</span><span class="p">],</span><span class="nx">n</span><span class="p">,</span><span class="nx">o</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="nx">n</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">callback</span><span class="p">;</span><span class="nx">o</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">urls</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span><span class="nx">n</span><span class="o">&amp;&amp;</span><span class="nx">n</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">context</span><span class="p">,</span><span class="nx">t</span><span class="p">.</span><span class="nx">obj</span><span class="p">);</span><span class="nx">r</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">s</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">(</span><span class="nx">e</span><span class="p">)}}}</span><span class="kd">function</span> <span class="nx">f</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">;</span><span class="nx">t</span><span class="o">=</span><span class="p">{</span><span class="nx">async</span><span class="o">:</span><span class="nx">e</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">).</span><span class="nx">async</span><span class="o">===!</span><span class="mi">0</span><span class="p">};(</span><span class="nx">t</span><span class="p">.</span><span class="nx">webkit</span><span class="o">=</span><span class="sr">/AppleWebKit\//</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">n</span><span class="p">))</span><span class="o">||</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">ie</span><span class="o">=</span><span class="sr">/MSIE/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">n</span><span class="p">))</span><span class="o">||</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">opera</span><span class="o">=</span><span class="sr">/Opera/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">n</span><span class="p">))</span><span class="o">||</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">gecko</span><span class="o">=</span><span class="sr">/Gecko\//</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">n</span><span class="p">))</span><span class="o">||</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">unknown</span><span class="o">=!</span><span class="mi">0</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">l</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">o</span><span class="p">,</span><span class="nx">l</span><span class="p">,</span><span class="nx">p</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">v</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">a</span><span class="p">(</span><span class="nx">i</span><span class="p">)},</span><span class="nx">m</span><span class="o">=</span><span class="nx">i</span><span class="o">===</span><span class="s2">&quot;css&quot;</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="p">[],</span><span class="nx">y</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">w</span><span class="p">,</span><span class="nx">E</span><span class="p">,</span><span class="nx">S</span><span class="p">,</span><span class="nx">x</span><span class="p">;</span><span class="nx">t</span><span class="o">||</span><span class="nx">f</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">){</span><span class="nx">o</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">o</span><span class="o">==</span><span class="s2">&quot;string&quot;</span><span class="o">?</span><span class="p">[</span><span class="nx">o</span><span class="p">]</span><span class="o">:</span><span class="nx">o</span><span class="p">.</span><span class="nx">concat</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">m</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">async</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">gecko</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">opera</span><span class="p">)</span><span class="nx">s</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">push</span><span class="p">({</span><span class="nx">urls</span><span class="o">:</span><span class="nx">o</span><span class="p">,</span><span class="nx">callback</span><span class="o">:</span><span class="nx">l</span><span class="p">,</span><span class="nx">obj</span><span class="o">:</span><span class="nx">p</span><span class="p">,</span><span class="nx">context</span><span class="o">:</span><span class="nx">d</span><span class="p">});</span><span class="k">else</span> <span class="k">for</span><span class="p">(</span><span class="nx">y</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">y</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">;</span><span class="o">++</span><span class="nx">y</span><span class="p">)</span><span class="nx">s</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">push</span><span class="p">({</span><span class="nx">urls</span><span class="o">:</span><span class="p">[</span><span class="nx">o</span><span class="p">[</span><span class="nx">y</span><span class="p">]],</span><span class="nx">callback</span><span class="o">:</span><span class="nx">y</span><span class="o">===</span><span class="nx">b</span><span class="o">-</span><span class="mi">1</span><span class="o">?</span><span class="nx">l</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">obj</span><span class="o">:</span><span class="nx">p</span><span class="p">,</span><span class="nx">context</span><span class="o">:</span><span class="nx">d</span><span class="p">})}</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">||!</span><span class="p">(</span><span class="nx">E</span><span class="o">=</span><span class="nx">r</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">=</span><span class="nx">s</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">shift</span><span class="p">()))</span><span class="k">return</span><span class="p">;</span><span class="nx">n</span><span class="o">||</span><span class="p">(</span><span class="nx">n</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">head</span><span class="o">||</span><span class="nx">e</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]);</span><span class="nx">S</span><span class="o">=</span><span class="nx">E</span><span class="p">.</span><span class="nx">urls</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">y</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nx">S</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">y</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">;</span><span class="o">++</span><span class="nx">y</span><span class="p">){</span><span class="nx">x</span><span class="o">=</span><span class="nx">S</span><span class="p">[</span><span class="nx">y</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">m</span><span class="p">)</span><span class="nx">w</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">gecko</span><span class="o">?</span><span class="nx">u</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">)</span><span class="o">:</span><span class="nx">u</span><span class="p">(</span><span class="s2">&quot;link&quot;</span><span class="p">,{</span><span class="nx">href</span><span class="o">:</span><span class="nx">x</span><span class="p">,</span><span class="nx">rel</span><span class="o">:</span><span class="s2">&quot;stylesheet&quot;</span><span class="p">});</span><span class="k">else</span><span class="p">{</span><span class="nx">w</span><span class="o">=</span><span class="nx">u</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">,{</span><span class="nx">src</span><span class="o">:</span><span class="nx">x</span><span class="p">});</span><span class="nx">w</span><span class="p">.</span><span class="nx">async</span><span class="o">=!</span><span class="mi">1</span><span class="p">}</span><span class="nx">w</span><span class="p">.</span><span class="nx">className</span><span class="o">=</span><span class="s2">&quot;lazyload&quot;</span><span class="p">;</span><span class="nx">w</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;charset&quot;</span><span class="p">,</span><span class="s2">&quot;utf-8&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;!</span><span class="nx">m</span><span class="p">)</span><span class="nx">w</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="sr">/loaded|complete/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">w</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)){</span><span class="nx">w</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">v</span><span class="p">()}};</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">m</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">gecko</span><span class="o">||</span><span class="nx">t</span><span class="p">.</span><span class="nx">webkit</span><span class="p">))</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">webkit</span><span class="p">){</span><span class="nx">E</span><span class="p">.</span><span class="nx">urls</span><span class="p">[</span><span class="nx">y</span><span class="p">]</span><span class="o">=</span><span class="nx">w</span><span class="p">.</span><span class="nx">href</span><span class="p">;</span><span class="nx">h</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="nx">w</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s1">&#39;@import &quot;&#39;</span><span class="o">+</span><span class="nx">x</span><span class="o">+</span><span class="s1">&#39;&quot;;&#39;</span><span class="p">;</span><span class="nx">c</span><span class="p">(</span><span class="nx">w</span><span class="p">)}</span><span class="k">else</span> <span class="nx">w</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="nx">w</span><span class="p">.</span><span class="nx">onerror</span><span class="o">=</span><span class="nx">v</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">w</span><span class="p">)}</span><span class="k">for</span><span class="p">(</span><span class="nx">y</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">y</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">;</span><span class="o">++</span><span class="nx">y</span><span class="p">)</span><span class="nx">n</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">g</span><span class="p">[</span><span class="nx">y</span><span class="p">])}</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">t</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="nx">t</span><span class="o">=!!</span><span class="nx">e</span><span class="p">.</span><span class="nx">sheet</span><span class="p">.</span><span class="nx">cssRules</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">n</span><span class="p">){</span><span class="nx">i</span><span class="o">+=</span><span class="mi">1</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="mi">200</span><span class="o">?</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">c</span><span class="p">(</span><span class="nx">e</span><span class="p">)},</span><span class="mi">50</span><span class="p">)</span><span class="o">:</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;css&quot;</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;css&quot;</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">css</span><span class="p">,</span><span class="nx">t</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="nx">t</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">while</span><span class="p">(</span><span class="o">--</span><span class="nx">t</span><span class="o">&gt;=</span><span class="mi">0</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">t</span><span class="p">].</span><span class="nx">href</span><span class="o">===</span><span class="nx">e</span><span class="p">.</span><span class="nx">urls</span><span class="p">[</span><span class="mi">0</span><span class="p">]){</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;css&quot;</span><span class="p">);</span><span class="k">break</span><span class="p">}</span><span class="nx">i</span><span class="o">+=</span><span class="mi">1</span><span class="p">;</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">i</span><span class="o">&lt;</span><span class="mi">200</span><span class="o">?</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="mi">50</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">(</span><span class="s2">&quot;css&quot;</span><span class="p">))}}</span><span class="kd">var</span> <span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="p">{},</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="p">{</span><span class="nx">css</span><span class="o">:</span><span class="p">[],</span><span class="nx">js</span><span class="o">:</span><span class="p">[]},</span><span class="nx">o</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">styleSheets</span><span class="p">;</span><span class="k">return</span><span class="p">{</span><span class="nx">css</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">){</span><span class="nx">l</span><span class="p">(</span><span class="s2">&quot;css&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">)},</span><span class="nx">js</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">){</span><span class="nx">l</span><span class="p">(</span><span class="s2">&quot;js&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">)}}}(</span><span class="k">this</span><span class="p">.</span><span class="nb">document</span><span class="p">);</span><span class="nx">LoadLib</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">function</span> <span class="nx">n</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">r</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">n</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">n</span><span class="o">&lt;</span><span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">n</span><span class="o">++</span><span class="p">)</span><span class="nx">t</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span><span class="o">==</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">r</span><span class="o">=!</span><span class="mi">0</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="k">return</span><span class="o">!</span><span class="mi">0</span><span class="p">;</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">}</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="p">[];</span><span class="k">return</span><span class="p">{</span><span class="nx">css</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">){</span><span class="nx">n</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">||</span><span class="nx">LazyLoad</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">)},</span><span class="nx">js</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">){</span><span class="nx">n</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">||</span><span class="nx">LazyLoad</span><span class="p">.</span><span class="nx">js</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">)}}}(</span><span class="k">this</span><span class="p">.</span><span class="nb">document</span><span class="p">);</span><span class="kd">var</span> <span class="nx">WebFontConfig</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">embed_path</span><span class="o">==</span><span class="s2">&quot;undefined&quot;</span><span class="o">||</span><span class="k">typeof</span> <span class="nx">embed_path</span><span class="o">==</span><span class="s2">&quot;undefined&quot;</span><span class="p">)</span><span class="kd">var</span> <span class="nx">embed_path</span><span class="o">=</span><span class="nx">getEmbedScriptPath</span><span class="p">(</span><span class="s2">&quot;storyjs-embed.js&quot;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;js/&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];(</span><span class="kd">function</span><span class="p">(){</span><span class="k">typeof</span> <span class="nx">url_config</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="o">?</span><span class="nx">createStoryJS</span><span class="p">(</span><span class="nx">url_config</span><span class="p">)</span><span class="o">:</span><span class="k">typeof</span> <span class="nx">timeline_config</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="o">?</span><span class="nx">createStoryJS</span><span class="p">(</span><span class="nx">timeline_config</span><span class="p">)</span><span class="o">:</span><span class="k">typeof</span> <span class="nx">storyjs_config</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="o">?</span><span class="nx">createStoryJS</span><span class="p">(</span><span class="nx">storyjs_config</span><span class="p">)</span><span class="o">:</span><span class="k">typeof</span> <span class="nx">config</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="o">&amp;&amp;</span><span class="nx">createStoryJS</span><span class="p">(</span><span class="nx">config</span><span class="p">)})();</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05160s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

