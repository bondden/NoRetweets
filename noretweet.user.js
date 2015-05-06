// ==UserScript==
// @name        noretweet
// @namespace   http://twitter.com
// @include     https://twitter.com/
// @include     https://twitter.com/*
// @version     0.1.0
// @grant       none
// @downloadURL https://github.com/bondden/NoRetweets/raw/master/noretweet.user.js
// @updateURL   https://github.com/bondden/NoRetweets/raw/master/noretweet.user.js
// ==/UserScript==

(function(){
  
  var stripRetweets=function(){
    
    var tweets=document.getElementsByClassName('tweet');
      var retweets=[];

      for(var i=0,l=tweets.length;i<l;i++){

        var tweet=tweets.item(i);

        console.log(tweet);

        if(tweet.getElementsByClassName('Icon--retweeted').length){       
          retweets.push(tweet);
        }

      }

      retweets.forEach(function(v){
        v.parentNode.removeChild(v);
      });

  };
  
  var createButton=function(){
    
    var s=document.createElement('style');
    s.innerHTML='.noretweetHideRetweetsBtn{'+
      'display:block;width:20px;height:20px;'+
      'background:rgba(200,255,255,.5);'+
      'position:fixed;left:1em; bottom:1em;'+
      'z-index:99999999;'+
      'cursor:pointer;'+
    '}'+
      '.noretweetHideRetweetsBtn:hover{'
      'background:rgba(200,255,250,.9);'+
      '}'+
        '.noretweetHideRetweetsBtn:before{content:"remove RT";display:block;}';
    document.getElementsByTagName('head').item(0).appendChild(s);
    
    var a=document.createElement('a');
    a.setAttribute('class','noretweetHideRetweetsBtn');
    
    a.onclick=function(e){
      stripRetweets();
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    
    document.getElementsByTagName('body').item(0).appendChild(a);
  };
  
  document.onreadystatechange = function(){
    if(document.readyState == "complete"){
      stripRetweets();
      createButton();
    }
  };
    
})();

