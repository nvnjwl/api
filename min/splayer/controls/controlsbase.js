SPL.controls.base=function(e){var r=this;this.createLoader=function(e){var n=UTIL.createDiv("","spl_loader spl_A spl_H spl_Fc",e);r.LoaderIcon=n,r.LoaderIcon.setAttribute("style","z-index:3")},this.createLoaderObj=function(){r.player.loader=new SPL.controls.Loader(r.LoaderIcon,r.playIcon),r.currentPlayerObj.loader=r.player.loader,r.currentPlayerObj.Player.loader=r.player.loader},this.init=function(e,n,a,t,l,c){r.player=t,r.currentPlayerObj=c,r.containerIDClient=c.containerIDClient;var o=n.playerVars.controls.type,i=t.controlsName;switch("embed"!=i&&void 0!==o&&null!==o&&(i=o),"Safari"!=SPL.UA.getBrowser().name&&"iOS"!=SPL.UA.getOS().name||(i="native"),i){case"web":case"Web":case"custom":case"Custom":SPL.controls.web.call(this,e,n,a,t);break;case"Native":case"native":SPL.controls.Native.call(this,e,n,a,t);break;case"embed":case"Embed":SPL.controls.embed.call(this,e,n,a,t)}},this.destroy=function(e){e()},r.showEndScreen=function(){var e=r.currentPlayerObj.playerObjConfig.playerVars.nextVideoID;if("function"!=typeof EndScreen)r.showEndScreenReplay(r.currentPlayerObj.containerID);else if(""!==e&&void 0!==e&&null!==e)(n=new EndScreen(e,r.currentPlayerObj)).init();else{var n=new EndScreen("",r.currentPlayerObj);n.init()}},r.showEndScreenReplay=function(e){function n(e,n){r.handleReplayClick(e,n)}var a=r.currentPlayerObj.videoData.name,t=UTIL.createDiv("","spl_endS spl_A spl_tr spl_z1",e);r.endscreenContainer=t;var l=UTIL.createDiv("","spl_endC spl_l spl_A spl_Fc",t),c=(UTIL.createOtherNode("h2","","",l,a),UTIL.createOtherNode("a","","spl_replay spl_c spl_ico spl_mT10",l));c.setAttribute("href","#");i=r.currentPlayerObj.playerObjConfig.playerVars.id;c.addEventListener("click",function(e){n(i,"REPLAY"),e.preventDefault()});var o=UTIL.createOtherNode("a","","spl_mT10 spl_db",l,"Replay");o.setAttribute("href","#");var i=r.currentPlayerObj.playerObjConfig.playerVars.id;o.addEventListener("click",function(e){n(i,"REPLAY"),e.preventDefault()})},r.handleReplayClick=function(e,n){if(r.endscreenContainer&&r.endscreenContainer.parentNode.removeChild(r.endscreenContainer),r.endScreenContainer=null,r.currentPlayerObj.playerObjConfig.playerVars.autoStart=!0,r.currentPlayerObj.playerObjConfig.playerVars.id=e,void 0==n)var n="REPLAY";var a=r.currentPlayerObj.playerObjConfig.events;a.onEndScreenReplay&&a.onEndScreenReplay(),r.currentPlayerObj.Player.stop&&r.currentPlayerObj.Player.stop(),r.currentPlayerObj.playerObjConfig.playerVars.nextVideoID="",SPL.createPlayer(r.currentPlayerObj.playerObjConfig,function(e){window.clientPlayer=e},!0)}};