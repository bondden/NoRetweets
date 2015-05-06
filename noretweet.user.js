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
    s.innerHTML=
			'.noretweetHideRetweetsBtn{font-size:10px;color:#666;display:block;box-sizing:border-box;padding:.5em 1em;background:rgba(255,255,255,.25);position:fixed;left:1em;bottom:1em;z-index:99999999;cursor:pointer;border-radius:5px;border:solid 1px #999;}'+
			'.noretweetHideRetweetsBtn{text-decoration: none;}'+
			'.noretweetHideRetweetsBtn:before{display:block;content:"Hide retweets";}'+
			'.noretweetHideRetweetsBtn:hover{text-decoration:none;color:#333;border-color:#666;box-shadow:1px 1px 2px rgba(0,0,0,.5);}';
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

