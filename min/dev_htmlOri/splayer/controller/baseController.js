SPL.controller={},SPL.controller.base=function(){var e=this,o=this;e.activeElement="",e.isAutoPlay=!1,e.allowedPreviewCheck=!0,e.previewThreshhold=15;var n=["init","ready","_adstate","error","ended","start","state","ended"];e.convertEvent={ready:"onReady",start:"onPlayStart",state:"onStateChange",_adstate:"onAdEvent",fs:"onFullScreen",onDimClick:"onDimClick",onEndScreenAutoPlay:"onEndScreenAutoPlay",onEndScreenReplay:"onEndScreenReplay",onEndScreenPlay:"onEndScreenPlay"},e.receivedEvents={manifest:!1,complete:!1,ended:!1},e.setActiveElement=function(o){e.activeElement=o,console.log("activeElement Now is ",o)},e.getActiveElement=function(){return e.activeElement},e.initUI=function(e){this.loadUI(e)},e.init=function(n){o.playerIndex=SPL.allPlayerList.length,SPL.allPlayerList.push(o),this.load(n,o),void 0===e.playerObjConfig.playerVars.sp&&""!=e.playerObjConfig.playerVars.sp||(SPL.isMobile?e.playerObjConfig.playerVars.sp="mweb":e.playerObjConfig.playerVars.sp="web")},e.loadUI=function(o){var n=o.containerID;o.eventManagerObj=new SPL.eventmanager.EventManager(o),o.eventManagerObj.on("controller",o.onPlayerEvent),o.videoElem="",o.videoID=n+"_videoTag",o.playerContainerID=n;var l=o.currentCounter,a=o.playerObjConfig.playerVars.isWatermark;e.isReplay=o.playerObjConfig.playerVars.isReplay,console.log("is Replay was :: "+e.isReplay);var t="",r="";a&&(t=o.playerObjConfig.playerVars.watermarkIcon,r=o.playerObjConfig.playerVars.watermarkUrl),1==SPL.CID[e.containerIDClient].sameContainer?o.videoElem=e.playerObjConfig.videoElem:(UTIL.createVideoView(n,l,a,t,r),o.videoElem=UTIL.createVideoTag(n,o.videoID,l),e.playerObjConfig.videoElem=o.videoElem),_elemAddClass(o.videoElem,"spl_Fc")},e.load=function(e,o){o.Player={},o.Player=new SPL.SPlayer(o,e,o.videoElem),o.Player.init()},e.onPlayerEvent=function(o,l,a,t){if("_adstate"==o)switch(l.state){case"load":case"ready":case"request":case"loaded":console.log("================  ADEVENT occur========= with state ",l.state);break;case"start":console.log("================  ADEVENT occur========= with state ",l.state),e.setActiveElement(e.adManagerObj);break;case"Q1":case"Q2":case"Q3":case"complete":case"skip":console.log("================  ADEVENT occur========= with state ",l.state);break;case"ended":case"error":console.log("================  ADEVENT occur========= with state ",l.state),e.setActiveElement(e.curPlayer);break;default:console.log("================  ADEVENT occur========= with state ",l.state)}else switch(o){case"init":e.getFeed();break;case"complete":console.log("complete Event received"),e.deletePreview();break;case"ended":1!=e.playerObjConfig.playerVars.controls.showEndseekbar?console.log("remove key events after video ends"):console.log("Do not remove key events after video ends :: "+e.playerObjConfig.playerVars.controls.showEndseekbar),document.removeEventListener("keyup",e.keyupListener)}-1!=n.indexOf(o)&&e.sendToClient(o,l,a);var r=Array.prototype.slice.call(arguments);switch(r.push(e.playerIndex),"undefined"!=playerIndex&&void 0!=playerIndex||(playerIndex=""),"_adstate"==o?console.log("BSPLEVENT_A"+playerIndex+" :: "+o+" :: "+l.state):"position"!=o&&("volume"==o?console.log("BSPLEVENT_P"+playerIndex+" :: "+o+" :: "+l.volume+l.mute+" "+getCurTime()):console.log("BSPLEVENT_P"+playerIndex+" :: "+o+" :: ",l+" USER::"+t+" "+getCurTime())),function(o){setTimeout(function(o){try{e.playerObjConfig.onplayerEvent&&e.playerObjConfig.onplayerEvent.apply("",o)}catch(o){console.log("CATCH onplayerEvent"+o.message,e.playerObjConfig)}},0,o)}(r),o){case"init":console.log("init");break;case"ready":console.log("ready"),e.createKeyboardEvents();break;case"initload":console.log("dev08 initload"),e.playerInitCallback();break;case"_adstate":break;case"manifest":console.log("manifest");break;case"volume":SPL.setLocalSettings({volume:l.volume}),console.log("volume :: "+l.volume);break;case"position":if(null!=e.EndScreenPreview_Obj&&void 0!=e.EndScreenPreview_Obj&&1==e.isPreViewVisible){var i=l.position,s=l.duration,c=e.previewThreshhold;e.EndScreenPreview_Obj.setWidth(i,s,c)}e.allowedPreviewCheck&&!SPL.isMobile&&(e.allowedPreviewCheck=!1,e.checkPreview(l),setTimeout(function(){e.allowedPreviewCheck=!0},1e3));break;case"state":break;case"start":console.log("PL :: start event received");var d=e.playerObjConfig.playerVars.playlist;if("true"==d||1==d){var v=e.getNextVideoId(e.videoId);console.log("PL nextvideoid :: ",v,e.videoId),""!=v&&void 0!=v&&"undefined"!=v&&null!=v?(console.log("Set next "),e.setNextVideo(v)):(console.log("Do not set next "),e.playerObjConfig.playerVars.nextVideoID=""),console.log("PL getPrevVideoId will call");var g=e.getPrevVideoId(e.videoId);console.log("PL prevVideoID :: ",g+" for CurVideo :: "+e.videoId),""!=g&&void 0!=g&&"undefined"!=g&&null!=g?(console.log("Set prev "),e.setPrevVideo(g)):(console.log("Do not set prev "),e.playerObjConfig.playerVars.prevVideoID="")}else""!=(v=e.playerObjConfig.playerVars.nextVideoID)&&void 0!=v&&"undefined"!=v&&null!=v?(console.log("Set next "),e.setNextVideo(v)):(e.playerObjConfig.playerVars.controls.autoplayDefault=!1,e.controlsBaseObj.isAutoPlayNext=!1,console.log("Do not set next "));break;case"switch":break;case"error":console.log("error occur");break;default:console.log("default :: eventName :: "+o)}},e.sendToClient=function(n,l,a){console.log("Allowed to send to client becasue eventName :: "+n);var t=n,r=e.curPlayer.getData(),i=[];i[0]=l,i[1]=r,console.log("before eventName2 :: "+n);var s=e.convertEvent[n];switch(void 0!=s&&(n=s),console.log("after eventName2:: "+n),n){case"onReady":console.log("onReady Params:: ",t,i),o.playerObjConfig.events.onReady(t,i);break;case"onPlayStart":o.playerObjConfig.events.onPlayStart(t,i,e);break;case"start":o.playerObjConfig.events.onPlayStart(t,i,e),e.overlayContainer();var c=o.playerObjConfig.playerVars.isOverlayAds;if(console.log("overlay 0.5 ::"+c),1==c||"true"==c){console.log("overlay 1");var d=e.overlayContainer,v=e.showOverlayAds,g=e.hideOverlayAds;console.log("overlay 1.5 showCB :: ",v),o.playerObjConfig.events.onOverlayAds(v,g,d)}break;case"ended":console.log("currentPlayerObj.playerObjConfig.events.onEnd"),o.playerObjConfig.events.onEnd(t,i,e);break;case"complete":console.log("complete Event Received");break;case"onStateChange":console.log("client :: onStateChange ",t,i);e.curPlayer;o.playerObjConfig.events.onStateChange(t,i);break;case"onAdEvent":console.log("client onAdEvent "),e.deletePreview(),o.playerObjConfig.events.onAdEvent(t,i);break;case"onFullScreen":console.log("client onFullScreen "),o.playerObjConfig.events.onFullScreen(t,i);break;case"onDimClick":console.log("client onDimClick "),o.playerObjConfig.events.onDimClick(t,i);break;case"onEndScreenAutoPlay":console.log("client onEndScreenAutoPlay "),o.playerObjConfig.events.onEndScreenAutoPlay(t,i);break;case"onEndScreenReplay":console.log("client onEndScreenReplay "),o.playerObjConfig.events.onEndScreenReplay(t,i);break;case"onEndScreenPlay":console.log("client onEndScreenPlay "),o.playerObjConfig.events.onEndScreenPlay(t,i);break;case"onEndScreenNextClick":console.log("client onEndScreenNextClick "),o.playerObjConfig.events.onEndScreenNextClick(t,i);break;case"onEndScreenAutoPlay":console.log("client onEndScreenAutoPlay "),o.playerObjConfig.events.onEndScreenAutoPlay(t,i)}},e.playerInitCallback=function(){S.player=e,console.log("dev08 Sending playerInitCallback to client "),e.onLoad&&"function"==typeof e.onLoad?(console.log("dev08 Sending playerInitCallback to client onload"),e.onLoad(e)):console.log("dev08 Sending playerInitCallback to client fail")},e.destroy=function(n){function l(){o.eventManagerObj=null,document.removeEventListener("keyup",e.keyupListener),n&&n()}o.Player.destroy(function(){o.Player=null,o.eventManagerObj.destroy(l)}),o.eventManagerObj.unsubscribe("controller")},e.keyupListener=function(o){if(e.controlsBaseObj&&e.controlsBaseObj.cbar){var n=e.controlsBaseObj.cbar;console.log("cbar is ",n),n.show()}e.controlsBaseObj&&e.controlsBaseObj.hideQualityMenu&&e.controlsBaseObj.hideQualityMenu();var l=o.keyCode;switch(console.log("keyCode ::"+l+" playerIndex :: "+e.playerIndex),l){case key.space:console.log("space"),e.togglePlay();break;case key.left:console.log("left"),e.seek(-5);break;case key.right:console.log("right"),e.seek(5);break;case key.up:case key.volumeUp:console.log("up"),e.volume(2);break;case key.down:case key.volumeDown:console.log("down"),e.volume(-2);break;default:e.test(l),console.log("test")}},e.createKeyboardEvents=function(){console.log("createKeyboardEvents called");_el(e.playerObjConfig.containerID);document.addEventListener("keyup",e.keyupListener),document.addEventListener("keydown",function(e){console.log("Event Listner called",e)})},e.togglePlay=function(){void 0!=e.getActiveElement&&(console.log("togglePlay ",e.getActiveElement()),e.getActiveElement().isPaused?e.getActiveElement().play():e.getActiveElement().pause())},e.seek=function(o){console.log("seek"),e.Player.seek(o)},e.play=function(){console.log("play called from Base"),e.Player.play()},e.pause=function(){console.log("pause called from Base"),e.Player.pause()},e.setVolume=function(o){o>100&&(o=100),o<1&&(o=0),e.controlsBaseObj.volume.show(),console.log("setVolume :: "+o),e.Player.setVolume(o)},e.volume=function(o){console.log("volume "+o);var n=e.getVolume();e.setVolume(n+o)},e.getVolume=function(){var o=e.Player.getVolume();return console.log("getVolume :: "+o),o},e.hibernate=function(o){console.log("baseController hibernate"),"function"==typeof e.Player.hibernate&&e.Player.hibernate(function(e){if("function"==typeof o){var e=e||"SUCCESS";console.log("callback to callee with status :: "+e),o(e)}})},e.test=function(o){switch(o){case 82:console.log("======= R KEY ========="),e.Player.test()}},e.isPreViewVisible=!1,e.EndScreenPreview_Obj=null,e.createNextHover=function(){if(!SPL.isMobile&&0!=e.playerObjConfig.playerVars.nextButton){var o=e.playerObjConfig.playerVars.nextVideoID;e.EndScreenPreview_Left=new EndScreenPreview(o,e,e.NextVideoData);var n=e.EndScreenPreview_Left.init("left");e.controlsBaseObj&&(e.controlsBaseObj.nextScreenleft=n)}},e.createPrevHover=function(){if(!SPL.isMobile){var o=e.prevVideoID;e.EndScreenPreview_Left=new EndScreenPreview(o,e,e.PrevVideoData);var n=e.EndScreenPreview_Left.init("leftPrev");e.controlsBaseObj&&(e.controlsBaseObj.prevScreenleft=n)}},e.deletePreview=function(){null!=e.EndScreenPreview_Obj&&void 0!=e.EndScreenPreview_Obj&&(e.isPreViewVisible=!1,e.EndScreenPreview_Obj.delete("right"),e.EndScreenPreview_Obj=null,e.controlsBaseObj&&(e.controlsBaseObj.endScreenVisible=!1))},e.checkPreview=function(o){if(e.controlsBaseObj.isAutoPlayNext){var n=o.position,l=o.duration-n,a=e.previewThreshhold;l<a?0==e.isPreViewVisible&&(e.isPreViewVisible=!0,e.EndScreenPreview_Obj=new EndScreenPreview("hls",e,e.NextVideoData),e.EndScreenPreview_Obj.init("right"),e.controlsBaseObj&&(e.controlsBaseObj.endScreenVisible=!0)):l>a&&e.isPreViewVisible&&null!=e.EndScreenPreview_Obj&&void 0!=e.EndScreenPreview_Obj&&(e.isPreViewVisible=!1,e.EndScreenPreview_Obj.delete("right"),e.EndScreenPreview_Obj=null,e.controlsBaseObj&&(e.controlsBaseObj.endScreenVisible=!1))}},e.setNextVideo=function(o){console.log("setNextVideo :: "+o),e.playerObjConfig.playerVars.nextVideoID=o,e.getNextData(o,function(o){console.log("setNextVideo7 got next video Data",o),e.NextVideoData=o,e.createNextHover(),e.controlsBaseObj&&e.controlsBaseObj.showNextButton&&e.controlsBaseObj.showNextButton()},function(e){console.log(" setNextVideo9 Unable to get next Video Data")})},e.setPrevVideo=function(o){console.log("setPrevVideo :: "+o),e.playerObjConfig.playerVars.prevVideoID=o,e.getPrevData(o,function(o){console.log("setPrevVideo7 got prev video Data",o),e.PrevVideoData=o,e.createPrevHover(),e.controlsBaseObj&&e.controlsBaseObj.showPrevButton&&e.controlsBaseObj.showPrevButton()},function(e){console.log(" setPrevVideo9 Unable to get prev Video Data")})},e.getPrevData=function(e,o,n){console.log("setPrevVideo6 "),SPL.Api.feed(e,function(e){if(void 0===e){console.log("setPrevVideo9 VideoData was undefined");l="FAILURE0";n&&n(l)}else if(void 0!==e.error)if("404"==e.error){console.log("setPrevVideo10");l="FAILURE1";n&&n(l)}else{console.log("setPrevVideo11 VideoData was error");l="FAILURE2";n&&n(l)}else if("FAILURE"==e){console.log("setPrevVideo12 Error :: "+e);var l="FAILURE3";n&&n(l)}else o&&o(e)})},e.getFeed=function(){if(console.log("feed3"),e.feedData=e.playerObjConfig.feedData,void 0==e.feedData||null==e.feedData||""==e.feedData){console.log("playerContainerID",e.playerObjConfig);var o=e.playerObjConfig.playerVars.playlist;console.log("feed 4 :: "+o);var n=e.playerObjConfig.playerVars.nextVideoUrl;console.log("feed 5 :: "+n),""!=n&&void 0!=n&&loadJs(n,function(){console.log("feed Recieved")})}},window.cached=function(o){console.log("feedData :: "+o),S.feedData=o,S.playerObjConfig.feedData=o,S.isFeedAvailaible=!0,e.feedData=o,e.playerObjConfig.feedData=o,e.isFeedAvailaible=!0;var n=e.getNextVideoId(e.videoId);console.log("PL nextvideoid :: ",n,e.videoId),""!=n&&void 0!=n&&"undefined"!=n&&null!=n?(console.log("Set next "),e.setNextVideo(n)):(console.log("Do not set next "),e.playerObjConfig.playerVars.nextVideoID="")},e.getNextData=function(e,o,n){console.log("setNextVideo6 "),SPL.Api.feed(e,function(e){if(void 0===e){console.log("setNextVideo9 VideoData was undefined");l="FAILURE0";n&&n(l)}else if(void 0!==e.error)if("404"==e.error){console.log("setNextVideo10");l="FAILURE1";n&&n(l)}else{console.log("setNextVideo11 VideoData was error");l="FAILURE2";n&&n(l)}else if("FAILURE"==e){console.log("setNextVideo12 Error :: "+e);var l="FAILURE3";n&&n(l)}else o&&o(e)})},e.getNextVideoId=function(o){if(console.log("PL curVideoId :: ",o),void 0==e.feedData||""==e.feedData||null==e.feedData)return"";var n=e.feedData,l=n.length,a=0,t="";console.log("PL :: ",e.feedData),a=n.length-1;for(var r=0;r<a;r++)n[r]._id==o&&(t=n[(r+1)%l].kalturaid);return console.log("PL :: curVideoId :: ",o),console.log("PL :: nextVideoID :: "+t),t},e.getPrevVideoId=function(o){if(void 0==e.feedData||""==e.feedData||null==e.feedData)return"";var n=e.feedData,l=(n.length,0),a="";console.log("PL :: ",e.feedData),l=n.length,console.log("PL :: length :: "+l);for(var t=0;t<l;t++)if(n[t]._id==o){var r=t-1;if(r<0)break;console.log("Prev was  :: "+r),a=n[r]._id}return console.log("PLprev :: curVideoId :: ",o),console.log("PLprev :: prevVideoID :: "+a),a},e.showOverlayAds=function(){console.log("overlay 4"),_elemRemoveClass(e.overlayContainer,"spl_H")},e.hideOverlayAds=function(){console.log("hideOverlayAds called"),_elemAddClass(e.overlayContainer,"spl_H")},e.overlayContainer=function(){var o=e.controlsBaseObj.actiondiv;console.log("overlay 0 ::",o);var n=UTIL.createDiv("overlayContainer1","spl_banner spl_A spl_Fb spl_aBR",o);e.overlayContainer=n}};