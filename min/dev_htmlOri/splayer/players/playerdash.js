SPL.players.dash=function(e){SPL.playerDash=!0,SPL.players.base.apply(this,arguments);var t=this;t.type=["dash","html5","adaptive"],t._.V=_el(e),t.videoElem=e,(t.setControlsName=function(){t.controlsName="web"})(),t.getControlsName=function(){return t.controlsName},this.seek=function(e){t._.V.currentTime=e},this.play=function(){this.isPaused=!1,t._.V.play()},this.pause=function(){this.isPaused=!0,t._.V.pause()},this.volume=function(e){var n=void 0!=e?e:t._.volume;return t._.volume=_vr(n,0,100),t._.V.volume=t._.volume/100,console.log("volume volume here",t._.volume),SPL.setLocalSettings({volume:t._.volume}),t._.volume},this.unmute=function(){t._.V.muted=!1,t.isMute=t._.V.muted,SPL.setLocalSettings({mute:!1})},this.mute=function(){console.log("volume mute here"),t._.V.muted=!0,t.isMute=t._.V.muted,SPL.setLocalSettings({mute:!0})},this.setLevel=function(e){-1!=e?t._.player.selectTrack(n[e]):t._.player.configure({abr:{enabled:!0}})},this.showNativeControls=function(){t.hasNativeControls=!0,t._.V.controls=!0},t.destroy=function(e){t._.V.src="#",setTimeout(function(){e()},1e3)},this.Levels=function(){var e={auto:t._.player.getConfiguration().abr.enabled};for(n=t._.player.getTracks(),i=0;i<n.length;i++){var a=n[i];if(a.active&&"video"===a.type||"variant"===a.type)return e.current=a.active?i:e.current,e.next=e.current,e.load=e.current,e.cap=-1,t._.data.level=e.current,e}};var n=[];this.bitrates=function(){try{if(console.log("levels 1:: ",t._),t._.bitrates.length>0)return console.log("levels 2:: "+t._.bitrates),t._.bitrates;console.log("levels 3:: "+t._.bitrates),n=t._.player.getTracks(),console.log("levels 3.1:: ",n);for(var e=n,a=0;a<e.length;a++)t._.bitrates[a]={br:e[a].bandwidth,h:e[a].height,w:e[a].width,i:a};return console.log("levels 4:: "+t._.bitrates),t._.bitrates}catch(e){console.log("levels 5 player base",e),console.log("levels player Catch "+e.message)}},this.getLevels=function(){var e=[];return 0===e.length&&(e=t._.player.getTracks()),console.log("level tracks :: "+e),e},this.init=function(){loadJs(SPL.conf.shakajs,t._.On.load),t._.dispatch("init")},this.load=function(e,n){void 0==n&&(n=0),console.log("inshaka t.source.url="+e+" pos = "+n),t._.dispatch("initload"),t._.player.load(e,n).then(t._.On.manifest).catch(t._.On.error)},t._.On={manifest:function(){t._.dispatch("manifest","")},load:function(){console.log("test1 On load"),t._.On.ready(),shaka.polyfill.installAll(),t._.dispatch("load",!0)},ready:function(){console.log("shaka Ready"),t._.player=new shaka.Player(t._.V),t._.player.addEventListener("error",t._.On.errorEvent),t._.player.addEventListener("adaptation",t._.On.switch),t._.player.addEventListener("trackschanged",t._.On.switch),t._.player.addEventListener("buffering",t._.On.buffering),t._.player.addEventListener("loading",t._.On.loaded),_elemListenersAttach(t._.V,"seeking seeked pause play canplaythrough playing loadeddata",t._.On.videoEvent,"ended",t._.On.complete,"error",t._.On.error,"timeupdate durationchange",t._.On.position,"volumechange",t._.On.volume),t._.dispatch("ready","dash")},loading:function(){},error:function(e,n){console.log("dev16 shaka Error Came with data ::",n),t._.dispatch("error",n)},buffering:function(){},errorEvent:function(e){console.log("dev16 shaka errorEvent Came",e)},position:function(e){t.duration=t._.V.duration,t.position=t._.V.currentTime,t.buffer=t._.getBufferLength(t._.V),t._.dispatch("position",{position:t.position,duration:t.duration,buffer:t.buffer})},complete:t._.onComplete,state:t._.onStateChange,volume:function(){t._.volume=100*t._.V.volume,t.isMute=t._.V.muted,t._.dispatch("volume",{volume:100*t._.V.volume,mute:t._.V.muted})},videoEvent:function(e){switch(e.type){case"seeking":t._.On.state("SEEKING");break;case"seeked":t._.On.state("SEEKED");break;case"play":t._.On.state("PLAYING");break;case"playing":break;case"pause":t._.On.state("PAUSED");break;case"waiting":-1!==t.state.indexOf("PLAYING")?t._.On.state("PLAYING_BUFFERING"):-1!==t.state.indexOf("PAUSED")?t._.On.state("PAUSED_BUFFERING"):t._.On.state("BUFFERING")}}},t._.On.switch=function(e){t._.dispatch("switch",0)}};