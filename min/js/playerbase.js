SPL.players.base=function(elv,json,currentPlayerObj){console.log("currentPlayerObj in PlayerBase::",currentPlayerObj);var defaultVolume=50;try{var defaultVolume=SPL.localSettings.volume;console.log("defaultVolume base :: ",defaultVolume);if(defaultVolume!=undefined&&isNaN(defaultVolume)){defaultVolume=50;}console.log("defaultVolume :: ",defaultVolume);}catch(err){defaultVolume=50;console.log("err :: "+err.message);}this._={onevt:{},bitrates:[],data:{},player:null,volume:defaultVolume,V:null,On:{},video:null,url:null,loaded:false};var b=this;b.isUserTrigger=true;b.height=_toInt(elv.offsetHeight);b.width=_toInt(elv.offsetWidth);b.playerName="DEFAULT";b.isAutoplayClicked=false;b.isUserTriggerPlay=false;b.isUserTriggerPause=false;b.isUserTriggerLevel=false;b.isUserTriggerSeek=false;b.isUserTriggerBR=false;b.replayCounter=currentPlayerObj.playerObjConfig.playerVars.replayCounter;this.hasNativeControls=false;this.state='';this.isMute=false;console.log("sequence playerbase volume "+b.isMute)
this.isPaused=true;this.position=0;this._.json=json;this.isdragProgress=false;this.isDVR=false;this.getData=function(){try{b._.data['paused']=b.isPaused;b._.data['muted']=b.isMute;b._.data['state']=b.state;b._.data['position']=b.position;b._.data['duration']=b.duration;b._.data['buffer']=b.buffer;b._.data['volume']=b._.volume;b._.data['type']=b.type;b._.data['bitrate']=b._.bitrates[b._.data['level']].br;b._.data['live']=!!b.isLive();}catch(er){}return b._.data;};this.isLive=function(){return b._.json.isLive;};this.paused=function(){return b.isPaused;};this.stop=function(){elv.src="#";};this.isPaused=function(){return b.isPaused;};this.bitrates=function(){if(b._.bitrates.length===0){var l=b.getLevels();for(var bi=0;bi<l.length;bi++){b._.bitrates[bi]={br:l[bi].bitrate,h:l[bi].height,w:l[bi].width,i:bi};}}return b._.bitrates;};this.onshare=function(){b._.dispatch('share','');};this.ondim=function(s){b._.dispatch('dim',s);};this.onfs=function(s){b._.dispatch('fs',s);};this.onap=function(s){b._.dispatch('ap',s);};this.onAdevent=function(s){var type=typeof s;if(type=="string"){try{s=JSON.parse(s);console.log("==== onAdevent :: ",s);b._.dispatch('_adstate',s);}catch(err){console.log("==== onAdevent :: -- ERROR "+err.message);}}else{console.log("==== onAdevent :: ",s);b._.dispatch('_adstate',s);}};b.onEnd=function(){b._.dispatch('ended',true);};this.on=function(eid,ecb){console.log('DEBUG23'+eid);this._.onevt[eid]=ecb;};this.off=function(eid){delete this._.onevt[eid];};this.seekToLive=function(){console.log("seekToLive b.position = "+b.position+" b.duration = "+b.duration);if(UA.getOS().name==='iOS'){b.seek(Date.now()*1000);}else if(b.isLive()){b.seek(_mr(b.duration)-5>_mr(b.position)?_mr(b.duration)-5:_mr(b.position));}else{b.seek(_mr(b.duration)-5>_mr(b.position)?_mr(b.duration)-5:_mr(b.position));}};this.fschange=function(){if(_isfs()){console.log(" fschange fullscreen true");b.onfs(true);}else{console.log(" fschange fullscreen false");b.onfs(false);}};this._.dispatch=function(name,data,isUserTriggerPlay){if(name=='init'){!!window.fsevt.length&&_elemListenersAttach(currentPlayerObj.containerIDClient,window.fsevt[4],b.fschange);}if(name==='position'&&b.position>0&&b.state===''){b._.onStateChange('PLAYING');}if(currentPlayerObj.Player==null){return;}if(!currentPlayerObj.Player.isDispatchedAgain(name)){console.log('dev16 This Event Was come for Dispatched :: '+name+", Do not Dispatch again");dispatchToPlayer(name,type,data,isUserTriggerPlay);}else{if(name=='manifest'){}var type="VERBOSE";if(currentPlayerObj!=null&&currentPlayerObj.eventManagerObj!=null){if(currentPlayerObj.Player.isOneTimeEvent(name)){currentPlayerObj.Player.eventDispatchedList.push(name);}if(name!="position"||b.isdragProgress==false){currentPlayerObj.eventManagerObj.dispatchEvent(name,type,data,isUserTriggerPlay);}}else{console.log('why here currentPlayerObj.eventManagerObj is null and eventname is ::'+name);}}function dispatchToPlayer(name,type,data){currentPlayerObj.SPlayer.onPlayerEvent(name,data,type,isUserTriggerPlay)}};this._.onComplete=function(videoType){console.log("currentplayerobj here = ",currentPlayerObj)
if(b.isLive()||(SPL.OSname=="iOS"&&videoType=="adManager")){return;}b.pause();b._.dispatch('complete',true);};this._.onStateChange=function(stat){b._.dispatch('onStateChange',stat);console.log("onStateChange "+stat)
if(b.state===stat){return;}if(!b.isPaused&&stat==='PAUSED'&&b.position<b.duration&&!b.hasNativeControls){stat='BUFFERING';}if(stat==='SEEKED'){}if((stat==="PLAYING"||stat==='SEEKED')&&b.state===''&&b.position>0.2){console.log("dev05 videoevent onstatechange  stat = "+stat+" b.state = "+b.state+" b.position = "+b.position);b.state=stat;var startParam=elv.paused;!b.isLive()&&b._.dispatch('start','true',elv.paused);setTimeout(function(){b._.dispatch('state','PLAYING',b.isUserTriggerPlay);b.isUserTriggerPlay=false;b.isUserTriggerPause=false;},10);}else if(b.state===''){b._.dispatch('state','LOADING');}else{b.state=stat;if(stat=="PAUSED"){b._.dispatch('state',stat,b.isUserTriggerPause);b.isUserTriggerPlay=false;b.isUserTriggerPause=false;}else if(stat=="PLAYING"){b._.dispatch('state',stat,b.isUserTriggerPlay);b.isUserTriggerPlay=false;b.isUserTriggerPause=false;}else if(stat=="SEEKING"){b._.dispatch('state',stat,b.isUserTriggerSeek);}else if(stat=="SEEKED"){b._.dispatch('state',stat,b.isUserTriggerSeek);b.isUserTriggerSeek=false;}else{b._.dispatch('state',stat);}}};this._.getBufferLength=function(video){if(video.buffered.length===0){return 0;}for(var i=0;i<video.buffered.length;i++){if(video.buffered.end(i)>video.currentTime){return video.buffered.end(i)-video.currentTime;}}};};