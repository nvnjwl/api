SPL.controls.base=function(e){var r=this;this.createLoader=function(e){console.log("SUSHII  containerID="+e),console.log("loader created");var n=UTIL.createDiv("","spl_loader spl_A spl_H spl_Fc",e);r.LoaderIcon=n,r.LoaderIcon.setAttribute("style","z-index:3")},this.createLoaderObj=function(){r.player.loader=new SPL.controls.Loader(r.LoaderIcon,r.playIcon),r.currentPlayerObj.loader=r.player.loader,r.currentPlayerObj.Player.loader=r.player.loader},this.init=function(e,n,a,l,o,t){r.player=l,r.currentPlayerObj=t,r.containerIDClient=t.containerIDClient;var c=n.playerVars.controls.type,s=l.controlsName;switch("embed"!=s&&void 0!==c&&null!==c&&(s=c),"Safari"!=SPL.UA.getBrowser().name&&"iOS"!=SPL.UA.getOS().name||(s="native"),console.log("playerName = "+o+" controlsName="+s),s){case"web":case"Web":case"custom":case"Custom":SPL.controls.web.call(this,e,n,a,l);break;case"Native":case"native":SPL.controls.Native.call(this,e,n,a,l);break;case"embed":case"Embed":SPL.controls.embed.call(this,e,n,a,l);break;default:console.log("something else :: "+s)}},this.destroy=function(e){console.log("destroy called on controls base"),e()},r.showEndScreen=function(){console.log("t.showEndScreen called");var e=r.currentPlayerObj.playerObjConfig.playerVars.nextVideoID;if(console.log("CES :: nextVideoID :: "+e),"function"!=typeof EndScreen)r.showEndScreenReplay(r.currentPlayerObj.containerID);else if(""!==e&&void 0!==e&&null!==e)(n=new EndScreen(e,r.currentPlayerObj)).init();else{var n=new EndScreen("",r.currentPlayerObj);n.init(),console.log("No EndScreen Availaible Show Default Endscreen ")}},r.showEndScreenReplay=function(e){function n(e,n){console.log("replay clicked with :: "+e),r.handleReplayClick(e,n)}console.log("showEndScreenReplay");var a=r.currentPlayerObj.videoData.name,l=UTIL.createDiv("","spl_endS spl_A spl_tr spl_z1",e);r.endscreenContainer=l;var o=UTIL.createDiv("","spl_endC spl_l spl_A spl_Fc",l),t=(UTIL.createOtherNode("h2","","",o,a),UTIL.createOtherNode("a","","spl_replay spl_c spl_ico spl_mT10",o));t.setAttribute("href","#");s=r.currentPlayerObj.playerObjConfig.playerVars.id;t.addEventListener("click",function(e){n(s,"REPLAY"),e.preventDefault()});var c=UTIL.createOtherNode("a","","spl_mT10 spl_db",o,"Replay");c.setAttribute("href","#");var s=r.currentPlayerObj.playerObjConfig.playerVars.id;c.addEventListener("click",function(e){n(s,"REPLAY"),e.preventDefault()})},r.handleReplayClick=function(e,n){if(r.endscreenContainer&&r.endscreenContainer.parentNode.removeChild(r.endscreenContainer),r.endScreenContainer=null,r.currentPlayerObj.playerObjConfig.playerVars.autoStart=!0,r.currentPlayerObj.playerObjConfig.playerVars.id=e,void 0==n)var n="REPLAY";var a=r.currentPlayerObj.playerObjConfig.events;console.log("send Replay outside"),a.onEndScreenReplay&&a.onEndScreenReplay(),r.currentPlayerObj.Player.stop&&r.currentPlayerObj.Player.stop(),r.currentPlayerObj.playerObjConfig.playerVars.nextVideoID="",SPL.createPlayer(r.currentPlayerObj.playerObjConfig,function(e){console.log("next log Callback Called and player is Instantiated with ",e),window.clientPlayer=e},!0)}};