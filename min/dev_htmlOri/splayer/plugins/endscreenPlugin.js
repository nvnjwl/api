function EndScreen(e,t){var n=t.playerDiv;console.log("Endscreen Class");var a=this;t.feedData=S.feedData,a.feedData=t.feedData,console.log("feedData :: ",a.feedData),a.timerValue=5e3,a.init=function(){console.log("nextVideoID :: "+e),a.setConfig()},a.setConfig=function(){var e=UTIL.createDiv("","",n);a.endscreenContainer=e,t.endscreenContainer=e;var r=e,l=t.controlsBaseObj.isAutoPlayNext,i=t.playerObjConfig.playerVars.nextVideoID,o=t.playerObjConfig.playerVars.displayFeed;1==o||"true"==o?a.showEndScreenFeed(r):void 0!=i&&""!=i?a.showEndScreenVideo(r,l):a.showEndScreenIcon(r)},a.resetTimer=function(){a.breakLoop=!0},a.showEndScreenVideo=function(e,n){function r(){if(1==a.breakLoop||void 0==v||null==v||1==t.curPlayer.breakLoop)return console.log("breaking the loop"),void(a.loopTimer&&clearTimeout(a.loopTimer));var e=((new Date).getTime()-g)/h*100;if(e>99.9){return a.breakLoop=!0,void l(f,"AUTOPLAY")}v.style.width=e+"%",a.loopTimer=setTimeout(function(){r()},10)}function l(e,t){clearTimeout(a.EndscreenTimer),console.log("replay clicked with :: "+e),a.handleReplayClick(e,t)}if(console.log("showEndScreenVideo container "+t.curPlayer.name),"yt"!=t.curPlayer.name&&"dm"!=t.curPlayer.name||!SPL.isMobile){a.breakLoop=!1;a.timerValue;var n=t.controlsBaseObj.isAutoPlayNext;t.controlsBaseObj.endscreenUIIcon=e,t.controlsBaseObj.endScreenFullVisible=!0,console.log("isAutoPlayNext :: "+n),console.log("showEndScreenVideo");var i="//imgslike.akamaized.net/";if(null!=t.NextVideoData&&void 0!=t.NextVideoData&&void 0!=t.NextVideoData.name&&null!=t.NextVideoData){var o=t.NextVideoData.name;if(-1==t.NextVideoData.thumb.indexOf(i))s=i+t.NextVideoData.thumb;else var s=t.NextVideoData.thumb}else a.showEndScreenIcon(e);var c=UTIL.createDiv("","spl_endS spl_A spl_tr spl_z1",e),d=UTIL.createDiv("","spl_endC spl_Fc spl_c",c),p=(UTIL.createOtherNode("small","","",d,"COMING UP NEXT"),UTIL.createOtherNode("h2","","spl_el spl_c",d,o),UTIL.createDiv("","spl_endP spl_R",d));p.style.backgroundImage="url("+s+")",p.style.backgroundSize="100% 100%",p.style.backgroundPosition="top left",p.style.backgroundRepeat="no-repeat";var y=UTIL.createOtherNode("a","","spl_ico spl_BP spl_O1 spl_Fc",p);y.setAttribute("href","#");var f=t.playerObjConfig.playerVars.nextVideoID;t.playerObjConfig.playerVars.id;if(y.addEventListener("click",function(e){a.breakLoop=!0,l(f),e.preventDefault()}),n){a.breakLoop=!1;var u=UTIL.createDiv("progressOuter","progress",p),v=UTIL.createDiv("progressInner","indeterminate",u),g=(new Date).getTime(),h=5e3;r()}var b=UTIL.createOtherNode("button","","spl_cancel",d,"Cancel");b.setAttribute("value","Cancel"),b.addEventListener("click",function(t){a.breakLoop=!0,clearTimeout(a.EndscreenTimer),a.showEndScreenFeed(e),t.preventDefault()})}else console.log("Do not Show End screen in YT")},a.showEndScreenFeed=function(e){function n(e,t){console.log("replay clicked with :: "+e),a.handleReplayClick(e,t)}if("yt"!=t.curPlayer.name&&"dm"!=t.curPlayer.name||!SPL.isMobile){console.log("showEndScreenFeed"),_el(e).innerHTML="";var r=t.videoData.name,l=UTIL.createDiv("","spl_endS spl_A spl_tr spl_z3",e),i=_toInt(_elr(e).width);console.log("container width :: "+i,e),i<640?_elemAddClass(l,"spl_sEnd "):_elemAddClass(l,"spl_bEnd ");var o=UTIL.createDiv("","spl_endO spl_A spl_z1",l),s=UTIL.createDiv("","spl_endC",o),c=(UTIL.createOtherNode("h2","","spl_el spl_c",s,r),t.playerObjConfig.playerVars.id),d=UTIL.createOtherNode("a","","spl_db spl_c spl_replay spl_ico",s,"Replay");d.setAttribute("href","#"),d.addEventListener("click",function(e){n(c,"REPLAY"),e.preventDefault()});var p=t.playerObjConfig.playerVars.displayFeed;SPL.UA.isMobile()||"true"!=p&&1!=p?i>640&&(_elemAddClass(o,"spl_Fc spl_w"),_elemRemoveClass(o,"spl_endO")):function(){function e(e){console.log("replay clicked with :: "+e),t.playerObjConfig.playerVars.nextVideoID="",t.playerObjConfig.playerVars.prevVideoID="",a.handleReplayClick(e)}var n=UTIL.createOtherNode("ul","","spl_sdkLst",l),r=a.feedData;console.log("t.feedData :: ",a.feedData),void 0!=r&&""!=r&&null!=r&&r.length>0?(console.log("feedobj was not null",r),function(t){console.log("displayFeed called");for(var a=[],r=0;r<t.length;r++){var l={};l.img=t[r].imagepath||"",l.text=t[r].title.vdtitle||"",l.time=t[r].duration||"",l.views="",l.id=t[r].kalturaid,console.log("newObj :: ",l),a.push(l)}var i=a.length;for(n.innerHTML="",r=0;r<i;r++){var o=UTIL.createOtherNode("li","","",n),s=UTIL.createOtherNode("span","","spl_lhs spl_R spl_l",o),c=UTIL.createOtherNode("img","","",s);c.setAttribute("src",a[r].img),UTIL.createOtherNode("i","","spl_duration spl_A spl_br",s).innerHTML=a[r].time;var d=UTIL.createOtherNode("span","","spl_rhs spl_l spl_line",o),p=UTIL.createOtherNode("b","","spl_title spl_line",d);p.innerHTML=a[r].text,UTIL.createOtherNode("small","","spl_db spl_mT10",d).innerHTML=a[r].views,function(t){c.setAttribute("data",t),c.addEventListener("click",function(){e(this.getAttribute("data"))}),o.setAttribute("data",t),o.addEventListener("click",function(){e(this.getAttribute("data"))}),p.setAttribute("data",t),p.addEventListener("click",function(){e(this.getAttribute("data"))})}(a[r].id)}}(r)):(console.log("no feedobj enable"),console.trace("deleteUL"),n.innerHTML="",n.parentNode.removeChild(n),o.style.width="100%")}()}else console.log("Do not Shoew End screen in YT")},a.showEndScreenIcon=function(e){function n(e,t){console.log("replay clicked with :: "+e),a.handleReplayClick(e,t)}if("yt"!=t.curPlayer.name&&"dm"!=t.curPlayer.name||!SPL.isMobile){console.log("showEndScreenFeed"),_el(e).innerHTML="";var r=t.videoData.name,l=UTIL.createDiv("","spl_endS spl_A spl_tr spl_z3",e),i=_toInt(_elr(e).width);console.log("container width :: "+i,e);var o=UTIL.createDiv("","spl_endO spl_A spl_z1",l),s=UTIL.createDiv("","spl_endC",o),c=(UTIL.createOtherNode("h2","","spl_el spl_c",s,r),t.playerObjConfig.playerVars.id),d=UTIL.createOtherNode("a","","spl_db spl_c spl_replay spl_ico",s,"Replay");i<640?_elemAddClass(l,"spl_sEnd"):(_elemAddClass(l,"spl_bEnd"),_elemAddClass(o,"spl_Fc spl_w"),_elemRemoveClass(o,"spl_endO")),d.setAttribute("href","#"),d.addEventListener("click",function(e){n(c,"REPLAY"),e.preventDefault()})}else console.log("Do not Shoew End screen in YT")},a.showEndScreenReplay=function(e){function n(e,t){console.log("replay clicked with :: "+e),a.handleReplayClick(e,t)}console.log("showEndScreenReplay");var r="Kanye West - All of the Lights ft. Rihanna, Kid Cudi screen2",r=t.videoData.name,l=UTIL.createDiv("","spl_endS spl_A spl_tr spl_z1",e),i=UTIL.createDiv("","spl_endC spl_l spl_A spl_Fc",l),o=(UTIL.createOtherNode("h2","","",i,r),UTIL.createOtherNode("a","","spl_replay spl_c spl_ico spl_mT10",i));o.setAttribute("href","#");c=t.playerObjConfig.playerVars.id;o.addEventListener("click",function(e){n(c,"REPLAY"),e.preventDefault()});var s=UTIL.createOtherNode("a","","spl_mT10 spl_db",i,"Replay");s.setAttribute("href","#");var c=t.playerObjConfig.playerVars.id;s.addEventListener("click",function(e){n(c,"REPLAY"),e.preventDefault()})},a.handleReplayClick=function(e,n){if(a.endscreenContainer&&a.endscreenContainer.parentNode.removeChild(a.endscreenContainer),t.playerObjConfig.playerVars.autoStart=!0,t.playerObjConfig.playerVars.id=e,void 0==n)var n="REPLAY";a.sendEventOut(n),t.Player.stop(),t.playerObjConfig.playerVars.nextVideoID="",a.hideEndScreen(),SPL.createPlayer(t.playerObjConfig,function(e){console.log("next log Callback Called and player is Instantiated with ",e),window.clientPlayer=e},!0)},a.hideEndScreen=function(){a.delete("right")},a.sendEventOut=function(e){var n=t.playerObjConfig.events;switch(console.log("outEvents :: ",n),e){case"REPLAY":console.log("send Replay outside"),n.onEndScreenReplay();break;case"AUTOPLAY":console.log("send AUTOPLAY outside"),n.onEndScreenAutoPlay();break;case"PLAYBACK":console.log("send PLAYBACK outside"),n.onEndScreenPlay()}},a.showEndScreenLeft=function(e){function t(e){console.log("replay clicked with :: "+e),a.handleReplayClick(e)}console.log("showEndScreenLeft");var n=UTIL.createDiv("","spl_sLs spl_aBL spl_A spl_bl spl_z1",e),r=UTIL.createSpan("","spl_lhs spl_R spl_l",n);UTIL.createOtherNode("img","","",r).setAttribute("src","https://i.ytimg.com/vi/_LUe4r6eeQA/maxresdefault.jpg");var l=UTIL.createSpan("","spl_rhs spl_l spl_line",n);UTIL.createOtherNode("small","","spl_db spl_m6",l).innerHTML="Next",UTIL.createDiv("","",l).innerHTML="4 Simran Simran Simran Simran Simran Simran Simran Simran";var i=currentPlayerOb.playerObjConfig.playerVars.nextVideoID;n.addEventListener("click",function(e){console.log("showEndScreenLeft nextVideoID is :: "+i),t(i),e.preventDefault()})},a.showEndScreenRight=function(e){function t(e){console.log("replay clicked with :: "+e),a.handleReplayClick(e)}if(console.log("showEndScreenRight"),null!=a.NextVideoData&&void 0!=a.NextVideoData&&void 0!=a.NextVideoData.name&&null!=a.NextVideoData){n=a.NextVideoData.name;if(-1==a.NextVideoData.thumb.indexOf(baseURL))r=baseURL+a.NextVideoData.thumb;else r=a.NextVideoData.thumb}else var n="5 Simran Simran Simran Simran Simran Simran Simran Simran",r="https://i.ytimg.com/vi/_LUe4r6eeQA/maxresdefault.jpg";var l=UTIL.createDiv("","spl_sLs spl_A spl_bl spl_z1",e),i=UTIL.createSpan("","spl_lhs spl_R spl_l",l);UTIL.createOtherNode("img","","",i).setAttribute("src",r);var o=UTIL.createSpan("","spl_rhs spl_l spl_line",l);UTIL.createOtherNode("small","","spl_db spl_m6",o).innerHTML="Next",UTIL.createDiv("","",o).innerHTML=n;var s=currentPlayerOb.playerObjConfig.playerVars.nextVideoID;l.addEventListener("click",function(e){console.log("showEndScreenRight nextVideoID is :: "+s),t(s),e.preventDefault()})},a.delete=function(e){switch(console.log("Right Endscreen delete called"),void 0!==e&&""!==e||(e="right"),e){case"left":break;case"right":a.endScreenContainer&&a.endScreenContainer.parentNode.removeChild(a.endScreenContainer),a.endScreenContainer=null,t.endScreenVisible=!1,console.log("Right Endscreen deleted")}},a.loadNext=function(e){var n=function(e){return{kalturaid:e,title:{vdtitle:"next video"}}}(e),r=function(e){var t=0;if(null===(e=e||null))return t;for(var n in e)e.hasOwnProperty(n)&&(t+=1);return t}(a.nextVideoList);console.log("next :: ",n),console.log("len :: ",r);l={title:{vdtitle:t.playerObjConfig.playerVars.title},kalturaid:t.playerObjConfig.playerVars.id,embedId:t.playerObjConfig.playerVars.id,id:t.playerObjConfig.playerVars.id,msid:t.playerObjConfig.playerVars.msid};if(console.log("t.nextVideoList",a.nextVideoList),console.log("t.nextVideoIndex",a.nextVideoIndex),a.nextVideoList&&parseInt(r)>0&&a.nextVideoIndex<r)try{if(!0===a.related&&a.nextVideoIndex>0)var l=a.nextVideoList[a.nextVideoIndex-1];console.log("prepareNextScreen if"),a.prepareNextScreen(l,n)}catch(e){}else console.log("prepareNextScreen else"),a.prepareNextScreen(l)},a.setNextItem=function(e){a.nextVideoList=e,a.nextVideoIndex=0},a.prepareNextScreen=function(e,n){if(console.log("prepareNextScreen next :: ",n+" prev = ",e),e&&n&&void 0!==e&&void 0!==n){var r,l=50;r=void 0!==t.playerObjConfig.playerVars.autoStart&&!0===t.playerObjConfig.playerVars.autoStart,console.log("autostart = "+r);t.playerObjConfig.playerVars.title;console.log("prepareNextScreen 2 next= ",n+" prev = ",e,t),a.createNextScreenUI(a,t.containerID,e,n,r,l)}else e.title.vdtitle&&void 0!==e.title.vdtitle?a.createNextScreenUI(a,t.containerID,e,n,r,l):(a.setPosterImage(),a.showEndScreen(a));a.hadleReplayEvent(e,n)},a.playNext=function(e,n){if(console.log("playNext"),a.related=!0,t.playerObjConfig.playerVars.id=void 0===e.embedId?e.kalturaid:e.embedId,t.playerObjConfig.playerVars.title=e.title.vdtitle||null,t.playerObjConfig.playerVars.shareurl=e.msid||null,t.playerObjConfig.playerVars.seoLocation=e.seopath||null,t.playerObjConfig.playerVars.playerid=e.playerid||0,t.playerObjConfig.playerVars.refVideoId=n.id,t.playerObjConfig.playerVars.image=e.imagepath,void 0!==t.playerObjConfig.playerVars.json&&delete t.playerObjConfig.playerVars.json,e.msid&&void 0!==e.msid){var r=(e.msid+"").split("/");t.playerObjConfig.playerVars.msid=r[r.length-1].indexOf(".cms")>0?r[r.length-1].slice(0,-4):r[r.length-1]}e.sliketitle=e.title,void 0!==e.click&&e.click?t.playerObjConfig.events.onEndScreenNextClick&&t.playerObjConfig.events.onEndScreenNextClick(e):t.playerObjConfig.events.onEndScreenAutoPlay&&t.playerObjConfig.events.onEndScreenAutoPlay(e),a.nextVideoIndex++,t.playerObjConfig.playerVars.autoStart=!0,clearTimeout(a.tmr),clearTimeout(a.tmr1),hide(a.plyO),t.Player.stop(),a.hideEndScreen(),SPL.createPlayer(t.playerObjConfig,function(e){console.log("next log Callback Called and player is Instantiated with ",e),window.clientPlayer=e})},a.onReplayClick=function(e){if(console.log("onReplayClick"),clearTimeout(a.tmr),clearTimeout(a.tmr1),t.playerObjConfig.playerVars.autoStart=!0,t.playerObjConfig.playerVars.refVideoId=e.id,t.playerObjConfig.playerVars.rpc=1,a.nextVideoIndex>0)n=a.nextVideoList[S.nextVideoIndex-1];else var n=e;t.playerObjConfig.events.onEndScreenReplay&&t.playerObjConfig.events.onEndScreenReplay(n),t.Player.stop(),t.playerObjConfig.playerVars.nextVideoID="",a.hideEndScreen(),SPL.createPlayer(t.playerObjConfig,function(e){console.log("next log Callback Called and player is Instantiated with ",e),window.clientPlayer=e})},a.hadleReplayEvent=function(e,t){console.log("hadleReplayEvent next",t,e,a);try{var n=a.row0;console.log("replayrow = ",n),n.addEventListener("click",function(){a.onReplayClick(e)});var r=a.row1;void 0!==r&&void 0!==t&&(t.click=!0,r.addEventListener("click",function(){a.playNext(t,e)}))}catch(e){console.log("error",e)}try{a.replay.addEventListener("click",function(){a.onReplayClick(e)})}catch(e){console.log("error",e)}},a.createNextScreenUI=function(e,t,n,r,l,i){function o(t){t>0?(console.log("createNextScreenUI cnt > 0",a),_el(u)&&null!==_el(u).innerHTML&&(console.log("counterval cnt ="+t,u,_el(u)),_el(u).innerHTML=--t,a.tmr=setTimeout(function(){o(t)},1e3))):(console.log("createNextScreenUI cnt > 0 else",e),r.click=!1,e.playNext(r,n))}hide(a.actiondiv),console.log("createNextScreenUI ",e);var s=UTIL.createDiv("","plyO",t);s.setAttribute("style","width:100%; height:100%;"),e.plyO=s;var c=UTIL.createDiv("","rowO",s);c.setAttribute("style","cursor:pointer"),e.row0=c;UTIL.createOtherNode("aside","","vdT fl",c,"LAST WATCHED <p> "+n.title.vdtitle+" </p>");var d=UTIL.createOtherNode("aside","","orB fr",c),p=UTIL.createOtherNode("a","","rplay",d,"REPLAY");if(p.setAttribute("href","javascript:void(0)"),e.replay=p,void 0!==r&&""!==r){var y=UTIL.createDiv("","rowO",s);y.setAttribute("style","cursor:pointer"),e.row1=y;UTIL.createOtherNode("aside","","vdT fl",y,"NEXT VIDEO <p>"+r.title.vdtitle+"</p>");var f=UTIL.createOtherNode("aside","","orB fr",y);if(!0===l){var u=UTIL.createOtherNode("span","","",f);console.log("counterval innerHTML = "+_el(u).innerHTML),UTIL.createOtherNode("span","","",f).innerHTML="Showing in ",(u=UTIL.createOtherNode("span","","",f)).innerHTML="5",UTIL.createOtherNode("span","","",f).innerHTML+=" sec"}else{var v=UTIL.createOtherNode("a","","splay",f,"PLAY");v.setAttribute("href","javascript:void(0)");var g=UTIL.createOtherNode("img","","",v);g.setAttribute("src","//videoplayer.indiatimes.com/img/spacer.gif"),g.setAttribute("alt","Play")}!0===l&&(console.log("createNextScreenUI callingcounter"),a.tmr1=setTimeout(function(){o(i)},1e3))}},a.showEndScreen=function(){console.log("showEndScreen")}}function EndScreenPreview(e,t,n){console.log("EndScreenPreview called "),void 0!==e&&""!==e||(e=t.playerObjConfig.playerVars);var a=this;a.NextVideoData=n,a.PrevVideoData=n;var r=t.containerIDPlayer;console.log("currentPlayerObj :: ",t),a.init=function(e){void 0!==e&&""!==e||(e="right");var t,n={},l={};switch(e){case"left":if(void 0==(l=a.NextVideoData)){console.log("hoverDataN was undefined");break}console.log("t.NextVideoData :: ",a.NextVideoData),t=a.showEndScreenLeft(r,l,"Next");break;case"right":a.showEndScreenRight(r);break;case"leftPrev":if(void 0==(n=a.PrevVideoData)){console.log("hoverDataP was undefined");break}console.log("t.PrevVideoData :: ",a.PrevVideoData),t=a.showEndScreenLeft(r,n,"Prev")}return t},a.setWidth=function(e,t,n){if(void 0!=a.idRight){var r;e<t-n?r=0:((r=100-(t-e)/n*100)>98&&(r=100),a.idRight.setAttribute("style","width:"+r+"%"))}},a.showEndScreenLeft=function(e,n,r){function l(e){console.log("replay clicked with :: "+e),t.playerObjConfig.playerVars.autoStart=!0,t.playerObjConfig.playerVars.id=e,t.playerObjConfig.playerVars.nextVideoID="",t.playerObjConfig.playerVars.prevVideoID="",t.Player.stop(),t.playerObjConfig.playerVars.nextVideoID="",a.hideEndScreen(),SPL.createPlayer(t.playerObjConfig,function(e){console.log("next log Callback Called and player is Instantiated with ",e),window.clientPlayer=e},!0)}var i=UTIL.createDiv("","",e);i.style.position="absolute",i.setAttribute("style","z-index:100; position:absolute"),console.log("showEndScreenLeft called for buttonName :: "+r+" with Data :: ",n);var o="https://imgslike.akamaized.net/",o="//imgslike.akamaized.net/";if(null!=n&&void 0!=n&&void 0!=n.name&&null!=n){s=n.name;if(-1==n.thumb.indexOf(o))c=o+n.thumb;else c=n.thumb}else var s="1 Simran Simran Simran Simran Simran Simran Simran Simran",c="https://i.ytimg.com/vi/_LUe4r6eeQA/maxresdefault.jpg";var d=UTIL.createDiv("","spl_sLs spl_aBR spl_A spl_bl spl_aBL spl_z3",i),p=UTIL.createSpan("","spl_lhs spl_R spl_l",d);UTIL.createOtherNode("img","endscreen3","",p).setAttribute("src",c);var y=UTIL.createSpan("","spl_rhs spl_l spl_line",d);UTIL.createOtherNode("small","","spl_db spl_m6",y).innerHTML=r,UTIL.createDiv("","",y).innerHTML=s;var f=n._id;return d.addEventListener("click",function(e){l(f),e.preventDefault()}),i.style.display="none",i},a.showEndScreenRight=function(e){function n(e){console.log("replay clicked with :: "+e),t.playerObjConfig.playerVars.autoStart=!0,t.playerObjConfig.playerVars.id=e,t.playerObjConfig.playerVars.nextVideoID="",t.playerObjConfig.playerVars.prevVideoID="",t.Player.stop(),t.playerObjConfig.playerVars.nextVideoID="",a.hideEndScreen(),SPL.createPlayer(t.playerObjConfig,function(e){console.log("next log Callback Called and player is Instantiated with ",e),window.clientPlayer=e},!0)}t.endScreenVisible=!0,t.controlsBaseObj&&t.controlsBaseObj.cbar&&t.controlsBaseObj.cbar.show(),console.log("showEndScreenRight");var r="//imgslike.akamaized.net/";if(null!=a.NextVideoData&&void 0!=a.NextVideoData&&void 0!=a.NextVideoData.name&&null!=a.NextVideoData){l=a.NextVideoData.name;if(-1==a.NextVideoData.thumb.indexOf(r))i=r+a.NextVideoData.thumb;else i=a.NextVideoData.thumb}else{return;var l,i}var o=UTIL.createDiv("","spl_aBR spl_A spl_br spl_z3",e);a.endScreenContainer=o;var s=UTIL.createDiv("","progress",o);a.progressRight=s;var c=UTIL.createDiv("","indeterminate",s);a.idRight=c;var d=UTIL.createDiv("","spl_sEn",o),p=UTIL.createSpan("","spl_lhs spl_R spl_l",d),y=UTIL.createOtherNode("img","","",p);y.setAttribute("src",i),y.setAttribute("width",65),y.setAttribute("height",36);UTIL.createSpan("","spl_rhs spl_l spl_line",d,l);var f=t.playerObjConfig.playerVars.id,f=t.playerObjConfig.playerVars.nextVideoID;o.addEventListener("click",function(e){n(f),e.preventDefault()})}}