SPL.plugins.analytics=function(t,i,s,e){console.log("conf :: ",i),UA=SPL.UA;var a=SPL.conf;i=i.playerVars;var r=this;r.sr={},r.busy=!1,r.id="Analytics",r.ts=void 0===t.ts||""==t.ts?"":t.ts,r.ss=void 0===t.ss||""==t.ss?"":t.ss,r.vl=i.settings.volume||0,r.commitAfter=t.interval,r.src=t.src||3,r.bd=0,r.at=1,r.stt=2,r.ch="",r.pt=1,r.st=0,r.ips=r.ps=i.pst||1,r.ha=!i.skipAd,r.iab=ISADBLOCKER,r.ap=!!i.autoStart,r.cbr=r.tc=r.pd=0,r.tit=0,r.config=i,r.browser={},r.isResp=!1,r.nextCommitonFailed=0,r.video=t,r.apikey=r.tmrBuffer=null,r.player=null,r.player=s,r.pgs=r.player={},r.lptc=r.lstc=r.ltc=r.tima=r.tit=r.tis=r.tsm=r.tim=0,r.timeadload=r.timeinit=r.timeinitload=r.timestartload=r.timemanifestload=r.timeinitload=r.timeadready=r.timeadrequest=r.timeadloaded=r.timeadstart=0,r.isStart=!1,r.commitAbort=!1,r.commitPile=new Array,r.cnt=0,r.tmr=null,console.log("refVideoId 2 before :: "+e.playerObjConfig.playerVars.refVideoId),window.frameElement?r.config.sp="Embed":r.config.sp="web",this.refVideoId=e.playerObjConfig.playerVars.refVideoId,void 0==this.refVideoId&&(this.refVideoId=""),e.playerObjConfig.playerVars.refVideoId=e.playerObjConfig.playerVars.id,console.log("refVideoId 3 after :: "+e.playerObjConfig.playerVars.refVideoId),r.ha=function(s){var e=ISADBLOCKER,a="";return-1===t.ads.timecode.indexOf(s)&&(a+="1"),i.skipad&&(a+="2"),e&&(a+="3"),a=a.length>0?"-"+a:"1"}(r.tc),r.adUpdate=function(){var t=!1;1==SPL.isAdAllowed&&(t=!0);var i=ISADBLOCKER;1==!t&&0==i?r.ha=-1:0==!t&&1==i?r.ha=-2:1==!t&&1==i?r.ha=-3:1==t&&0==i&&(r.ha=1)};var o={init:function(){r.player=this,r.timeinit=new Date,void 0!==a.isReinitMode&&"true"==a.isReinitMode||(a.ss=a.ts="",r.init(r))},initload:function(){r.timeinitload=new Date,r.player=this},ready:function(t){r.tc=0,r.player=this,clearInterval(this.tmrBuffer)},start:function(t){if(!1===r.isStart){r.isStart=!0;r.timestartload=new Date;r.player=this,r.tc=0,r.at=2,r.onStart()}},manifest:function(){r.timemanifestload=new Date,r.tc=0,clearInterval(this.tmrBuffer)},position:function(t){r.tc=_mr(1e3*t.position),!1===r.isStart&&!0==!!r.video.isLive&&r.tc>=0?o.start.apply(this,[t]):r.onProgress(t)},volume:function(t){r.vl=t.volume},complete:function(t){},ended:function(t){r.at=4,r.onEnd(t)},fs:function(t){r.ps=!0===t?5:r.ips,r.at=11,r.onSwitch()},state:function(t){try{var i=r.player.getData(),s=_mr(1e3*i.position);r.tc=s||r.tc}catch(t){}switch(t){case"SEEKED":break;case"SEEKING":r.at=7,r.onSeeking();break;case"pause":case"PAUSED":r.at=6,r.isPaused=!0,r.onPaused();break;case"PLAYING":(1==r.isPaused||8!=r.at&&7!=r.at&&2!=r.at&&3!=r.at)&&(r.at=10,r.onPlay()),r.isPaused=!1;break;case"PLAYING_BUFFERING":case"BUFFERING":clearInterval(r.tmrBuffer),r.tmrBuffer=setInterval(function(){r.bd=r.bd+10},10)}},_adstate:function(t){var i=0==Object.keys(r.browser).length?r.detectBrowser():r.browser,s=r.prepareRefUrl();switch(t.state){case"error":a=0;(e="pre"==t.adtype?1:"mid"==t.adtype?2:3)>1&&(a=void 0===r.tc||isNaN(r.tc)?0:parseInt(r.tc)),(o={vp:a,vai:t.adId,ci:t.campaignId,adu:1e3*parseInt(t.duration),cp:1e3*parseInt(t.position),m:!!t.muted,evt:2,adt:e,err:t.errorcode,s:void 0===t.source?1:t.source,zc:r.getCookie("geolocation"),tb:r.video.tb||"",tpr:r.video.tpr||"",rtad:t.rtad||0}).chs=s.section,o.msid=s.id||"",o.ch=s.channel,o.te=i.te,o.ce=i.ce,o.ua=i.ua,o.uav=i.uav,o.os=i.os,o.osv=i.osv,o.oss=i.oss,o.vl=r.vl,o.sr=r.sr.sr||0,o.sd=r.sr.sd||0,o.l1=r.pgs.l1||"",o.l2=r.pgs.l2||"",o.l3=r.pgs.l3||"",o.sp=r.config.sp||"embed",o.v=void 0!==r.config.playerversion&&""!=r.config.playerversion?r.generateVersion(r.config.playerversion):0,r.commit("adstats",o);break;case"load":r.timeadload=new Date;break;case"ended":"pre"==t.adtype&&(r.timeinitload=r.timemanifestload=new Date);break;case"ready":r.timeadready=new Date;break;case"request":break;case"loaded":r.timeadloaded=new Date;break;case"start":case"Q1":case"Q2":case"Q3":case"complete":case"skip":case"click":"complete"==t.state&&(r.timeinitload=r.timemanifestload=new Date,t.position=t.duration);var e="pre"==t.adtype?1:"mid"==t.adtype?2:3,a=0;e>1&&(a=void 0===r.tc||isNaN(r.tc)?0:parseInt(r.tc));var o={vp:a,vai:t.adId,ci:t.campaignId,adu:1e3*parseInt(t.duration),cp:1e3*parseInt(t.position),m:!!t.muted,evt:t.event,adt:e,s:void 0===t.source?1:t.source,zc:r.getCookie("geolocation"),tb:r.video.tb||"",tpr:r.video.tpr||"",rtad:t.rtad||0};"start"==t.state&&(r.timeadstart=new Date,o.atr=r.timeadready-r.player.timeadrequest,o.atl=r.timeadloaded-(r.player.timeadrequest||0),o.atc=r.timeadstart-r.timeadloaded),o.chs=s.section,o.msid=s.id,o.ch=s.channel,o.te=i.te,o.ce=i.ce,o.ua=i.ua,o.uav=i.uav,o.os=i.os,o.osv=i.osv,o.oss=i.oss,o.vl=r.vl,o.sr=r.sr.sr||0,o.sd=r.sr.sd||0,o.l1=r.pgs.l1||"",o.l2=r.pgs.l2||"",o.l3=r.pgs.l3||"",o.sp=r.config.sp||"embed",o.v=void 0!==r.config.playerversion&&""!=r.config.playerversion?r.generateVersion(r.config.playerversion):0,r.busy=!0,r.commit("adstats",o)}}};o.switch=function(t){var i=r.player.getData();r.tc=_mr(1e3*i.position)||r.tc,r.at=8,r.player.isUserTrigger&&(r.onSwitch(),r.player.isUserTrigger=!1)},r.onPlayerEvent=function(t,i){o[t]&&o[t].apply(this,[i])},this.destroy=function(t){console.log("destroy called on analytics plugin"),e.eventManagerObj.unsubscribe("analytics"),t()}},SPL.plugins.analytics.prototype={init:function(t){SPL.conf;clearInterval(this.tmrBuffer);var i=this.player.getData(),s=this.getStreamType(i);this.pt=s.pt,this.stt=s.stt,this.browser=this.detectBrowser(),this.pgs=this.parsePageSection(this.config.pagesection),this.sr=this.prepareSr(),this.at=1;var e=this.prepareRefUrl(),a=this.player.height,r=this.player.width;this.replayCounter=this.player.replayCounter,console.log("analytics rpc :: "+this.replayCounter),console.log("analytics refVideoId :: "+this.refVideoId),this.commit("stats",{te:this.browser.te,ce:this.browser.ce,ua:this.browser.ua,uav:this.browser.uav,os:this.browser.os,osv:this.browser.osv,oss:this.browser.oss,ps:this.ps,sr:this.sr.sr||0,sd:this.sr.sd||0,pt:this.pt,stt:this.stt,src:this.src,du:!0==!!this.video.isLive?-1:1e3*this.video.duration,at:this.at,st:this.st,ap:this.ap,bd:this.bd,pd:0,iab:this.iab,msid:e.id,chs:e.section,ch:e.channel,il:this.video.isLive,ia:this.video.audioOnly,ha:this.ha,zc:this.getCookie("geolocation"),rid:this.refVideoId,t:"init",tb:this.video.tb||"",tpr:this.video.tpr||"",vl:this.vl||0,rpc:this.replayCounter||0,sp:this.config.sp||"embed",v:void 0!==this.config.playerversion&&""!=this.config.playerversion?this.generateVersion(this.config.playerversion):0,l1:this.pgs.l1||"",l2:this.pgs.l2,l3:this.pgs.l3,l4:this.pgs.l4,ph:a,pw:r})},onStart:function(){var t=SPL.conf;clearInterval(this.tmrBuffer),this.at=2,this.setLoadingTime();var i=this.prepareBitrate();this.commit("stats",{at:this.at,ps:this.ps,pd:0,bd:0,il:this.video.isLive,tis:this.tis,tsm:this.tsm,tim:this.tim,tit:this.tit,tima:this.tima,ha:this.ha,iab:this.iab,cbr:i.cbr,fid:i.fid,zc:this.getCookie("geolocation"),m:!!this.player.isMute,tb:this.video.tb||"",tpr:this.video.tpr||"",rtc:void 0!==t.rtc?t.rtc:0,vl:this.vl||0})},onEnd:function(){SPL.conf;clearInterval(this.tmrBuffer);var t=this.prepareBitrate();this.pd=this.getPlayedDuration(),this.et=this.tc,this.at=4,this.commit("stats",{pd:this.pd,et:this.et,at:this.at,il:this.video.isLive,ps:this.ps,cbr:t.cbr,fid:t.fid,bd:this.bd,tb:this.video.tb||"",tpr:this.video.tpr||"",m:!!this.player.isMute,vl:this.vl||0})},onPaused:function(){SPL.conf;if(clearInterval(this.tmrBuffer),!0!==this.busy){this.at=6;var t=this.prepareBitrate();this.pd=this.getPlayedDuration(),this.et=this.tc,parseInt(this.pd)>0&&(this.lptc=0,this.busy=!0,this.commit("stats",{pd:this.pd,et:this.et,at:this.at,il:this.video.isLive,cbr:t.cbr,fid:t.fid,ps:this.ps,bd:this.bd,tb:this.video.tb||"",tpr:this.video.tpr||"",m:!!this.player.isMute,vl:this.vl||0}))}},onPlay:function(){if(clearInterval(this.tmrBuffer),!0!==this.busy){var t=this.prepareBitrate();this.et=this.tc,this.pd=this.getPlayedDuration(),parseInt(this.et)>500&&(this.lptc=0,this.busy=!0,this.commit("stats",{pd:this.pd,et:this.et,at:this.at,il:this.video.isLive,cbr:t.cbr,fid:t.fid,ps:this.ps,bd:this.bd,tb:this.video.tb||"",tpr:this.video.tpr||"",m:!!this.player.isMute,vl:this.vl||0}))}},onSeeking:function(){SPL.conf;if(clearInterval(this.tmrBuffer),0!=this.lptc&&!0!==this.player.paused()&&!0!==this.busy){var t=this.prepareBitrate();this.pd=this.lptc-this.lstc,this.pd=this.setPlayedDuration(this.pd),this.et=this.tc,!isNaN(this.pd)&&!isNaN(this.et)&&parseInt(this.pd)>0&&(this.lptc=0,this.busy=!0,this.commit("stats",{pd:this.pd,et:this.lstc,at:this.at,il:this.video.isLive,cbr:t.cbr,fid:t.fid,ps:this.ps,bd:this.bd,tb:this.video.tb||"",tpr:this.video.tpr||"",m:!!this.player.isMute,vl:this.vl||0}))}},onSwitch:function(){SPL.conf;if(clearInterval(this.tmrBuffer),!0!==this.player.paused()&&!0!==this.busy){var t=this.prepareBitrate();void 0!==this.cbr&&this.cbr>0&&this.cbr==t.cbr&&8==this.at||(this.et=this.tc,this.pd=this.getPlayedDuration(),!isNaN(this.pd)&&!isNaN(this.et)&&parseInt(this.pd)>0&&(this.lptc=0,this.busy=!0,this.commit("stats",{pd:this.pd,et:this.et,at:this.at,il:this.video.isLive,cbr:t.cbr,fid:t.fid,ps:this.ps,tb:this.video.tb||"",tpr:this.video.tpr||"",bd:this.bd,m:!!this.player.isMute,vl:this.vl||0})))}},onProgress:function(t){SPL.conf;if(clearInterval(this.tmrBuffer),!this.player.paused()&&!0!==this.busy&&(0===this.lptc&&(this.lstc=this.tc),this.lptc=this.tc,this.lstc=this.lstc||0,parseInt(this.tc-this.lstc)>=this.commitAfter&&!this.busy)){this.busy=!0;var i=this.prepareBitrate();this.pd=this.setPlayedDuration(parseInt(this.tc-this.lstc)),this.lptc=this.tc,this.et=parseInt(this.tc),this.at=3,this.commit("stats",{pd:this.pd,et:this.et,il:this.video.isLive,cbr:i.cbr,fid:i.fid,at:this.at,ps:this.ps,tb:this.video.tb||"",tpr:this.video.tpr||"",bd:this.bd,m:!!this.player.isMute,vl:this.vl||0})}},setLoadingTime:function(){this.tima=this.timeadloaded<=0?0:this.timeadloaded-this.player.timeadrequest,this.tit=this.timeinit<=0?0:this.timeinit-this.config.playerLoadStart,this.tis=this.timestartload<=0?0:this.timestartload-this.timeinitload,this.tsm=0==this.timestartload?0:this.timestartload-this.timemanifestload,this.tim=this.timemanifestload<=0?0:this.timemanifestload-this.timeinitload},getPlayedDuration:function(){this.tc=this.tc||0,0===this.lptc&&(this.lstc=this.tc),this.lstc=this.lstc||0;var t=parseInt(this.tc-this.lstc);return this.setPlayedDuration(t)},setPlayedDuration:function(t){return void 0===t||isNaN(t)||this.pd<0?0:t>1.25*this.commitAfter?this.commitAfter:t},responseWatcher:function(){SPL.conf;var t=this;this.tmr=setTimeout(function(){0==t.commitAbort&&(t.commitAbort=!0)},5e3)},commitPileUp:function(t,i){SPL.conf;return this.commitPile.length>0?(this.busy=!0,clearTimeout(this.tmr),""!=i&&(this.commitPile[++this.cnt]="stats"===t?{stats:i}:{adstats:i}),i="&data="+encodeURIComponent(JSON.stringify(this.commitPile))+"&_t=commitpile",this.commitPile=new Array,this.cnt=0,this.busy=!1,i):""},commit:function(t,i){var s=SPL.conf;this.lstc=i.et,this.bd=0;var e="";this.cbr=i.cbr;for(var a in i)e+=(""==e?"":"&")+a+"="+i[a];if(this.busy=!1,"init"===i.t)this.responseWatcher();else if(4!=this.at&&!0===this.commitAbort||void 0===s.ss||""==s.ss||!1===window.navigator.onLine){if(this.commitPile[++this.cnt]="stats"===t?{stats:e}:{adstats:e},!(this.commitPile.length>5&&!0===window.navigator.onLine))return;e=""==(r=this.commitPileUp(t,e))?e:r,t=""==r?t:"stats"}else{var r=this.commitPileUp(t,e);e=""==r?e:r,t=""==r?t:"stats"}s.ss=void 0===s.ss?"":s.ss,s.ts=void 0===s.ts?"":s.ts,this.apikey=void 0===this.config.apikey?"":this.config.apikey,this.meta=void 0===SPL.SPLconfig.settings.meta?"":SPL.SPLconfig.settings.meta,this.uuid=this.getCookie("_suuid");var o=null!=this.uuid||""!=this.uuid?"&uuid="+this.uuid:"";e+="&ss="+s.ss+"&ts="+s.ts+"&k="+this.video._id+"&apikey="+this.apikey+o+this.meta,s.analyticsApi=SPL.SPLconfig.settings.analyticsUrl,""!=s.analyticsApi&&void 0!=s.analyticsApi&&"undefined"!=s.analyticsApi||(s.analyticsApi="http://devslike.indiatimes.com:8081/"),e=s.analyticsApi.replace(/\/$/,"")+"/"+t+"?"+e+"&rand="+Math.random();try{var n=this;n.commitAbort=!0,SPL.Network.jsonp(e,function(t,i){var e=t;try{null!=e.body&&""!=e.body.ss&&void 0!==e.body.ss&&(s.ss=n.ss=e.body.ss,s.ts=n.ts=e.body.ts,n.commitAfter=e.body.interval,console.log("SS Was :: "+s.ss))}catch(t){}n.commitAbort=!1,clearTimeout(n.tmr),_cleanupjsonp(i)})}catch(t){}},getStreamType:function(t){_le("gData",t);var i=0,s=0;return"dash"==t.type[0]?s=1:"hls"==t.type[0]?s=2:"mp4"==t.type[0]&&(s=3),"html5"==t.type[1]?"dash"==t.type[0]?i=3:"hls"==t.type[0]?i=2:"mp4"==t.type[0]&&(i=8):"flash"==t.type[1]&&(void 0!==this.video._playertype&&"fullflash"==this.video._playertype?"dash"==t.type[0]?i=11:"hls"==t.type[0]?i=10:"mp4"==t.type[0]&&(i=12):"dash"==t.type[0]?i=4:"hls"==t.type[0]?i=1:"mp4"==t.type[0]&&(i=9)),void 0!==this.video.embed&&""!=this.video.embed&&(-1!=this.video.embed.indexOf("dm::")?i=13:-1!=this.video.embed.indexOf("yt::")&&(i=7)),{pt:i,stt:s}},prepareBitrate:function(){try{var pData=this.player.getData(),flavorId="",flData=eval("this.video."+pData.type[0])[1];if(void 0!==flData&&null!=flData){var flArray=flData.split(",").reverse(),flindex=pData.level;void 0==flindex&&(flindex=0),flavorId=flArray[flindex]}var _cbr=void 0===pData.bitrate||isNaN(pData.bitrate)||""==pData.bitrate?0:pData.bitrate}catch(t){_cbr=0}return{cbr:_cbr,fid:void 0===flavorId?"":flavorId}},prepareSr:function(){var t=screen.availWidth,i=screen.availHeight,s="";if(s=t<=320&&i<=480?1:t<=480&&i<=800?2:t<=480&&i<=854?3:t<=540&&i<=960?4:t<=1024&&i<=600?5:t<=1024&&i<=768?6:t<=1152&&i<=864?7:t<=1280&&i<=720?8:t<=1280&&i<=768?9:t<=1280&&i<=800?10:t<=1280&&i<=960?11:t<=1280&&i<=1024?12:t<=1360&&i<=768?13:t<=1366&&i<=768?14:t<=1400&&i<=1050?15:t<=1440&&i<=900?16:t<=1600&&i<=900?17:t<=1680&&i<=1050?18:t<=1920&&i<=1080?19:t<=1920&&i<=1200?20:t<=2048&&i<=1536?21:t<=2560&&i<=1440?22:t<=2560&&i<=1600?23:24,null==this.sd||!_el("slikesd")){var e=document.createElement("div");e.id="slikesd",e.style.width="1cm",e.style.height="1cm",e.style.backgroundColor="#ff0000",e.style.visibility="hidden",e.style.position="fixed",e.style.bottom=0,document.body.appendChild(e);var a=Math.sqrt(Math.pow(window.screen.width/e.offsetWidth,2)+Math.pow(window.screen.height/e.offsetHeight,2));this.sd=a/2.54}return void 0!==this.sd&&null!=this.sd&&(this.sd=parseFloat(this.sd).toFixed(2)),{sr:s,sd:this.sd}},prepareRefUrl:function(){var t="toi";return void 0!==this.config.channel&&null!=this.config.channel&&""!=this.config.channel&&(t=this.config.channel),{section:this.config.section&&void 0!==this.config.section?this.config.section:"",id:this.config.msid&&void 0!==this.config.msid?this.config.msid:"",channel:t}},detectBrowser:function(){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s="undefined"!=t&&""!=t&&null!=t?t.type:"",e="undefined"!=navigator.maxTouchPoints&&""!=navigator.maxTouchPoints&&null!=navigator.maxTouchPoints?navigator.maxTouchPoints:0,a=navigator.cookieEnabled?1:0;void 0!==navigator.cookieEnabled||a||(document.cookie="testcookie",a=-1!=document.cookie.indexOf("testcookie")?1:0);var r=["Opera","IE","Yandex","WeChat","MIUI Browser","WebView","Android Browser","UCBrowser","Dolphin","Chrome","Facebook","Firefox","Safari","Mobile Safari","Netscape"],o=0,n=UA.getBrowser().name;for(i in r)if(-1!==n.indexOf(r[i])){o=parseInt(i)+1;break}var d=navigator.userAgent,h=0,c=0,l=[{svv:1,sv:1,s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{svv:1,sv:2,s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{svv:1,sv:3,s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{svv:1,sv:4,s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{svv:1,sv:5,s:"Windows Vista",r:/Windows NT 6.0/},{svv:1,sv:6,s:"Windows Server 2003",r:/Windows NT 5.2/},{svv:1,sv:7,s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{svv:1,sv:8,s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{svv:1,sv:9,s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{svv:1,sv:10,s:"Windows 98",r:/(Windows 98|Win98)/},{svv:1,sv:11,s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{svv:1,sv:12,s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{svv:1,sv:13,s:"Windows CE",r:/Windows CE/},{svv:1,sv:14,s:"Windows 3.11",r:/Win16/},{svv:1,sv:28,s:"Windows Phone",r:/Windows Phone/},{svv:2,sv:15,s:"Android",r:/Android/},{svv:3,sv:16,s:"Open BSD",r:/OpenBSD/},{svv:4,sv:17,s:"Sun OS",r:/SunOS/},{svv:5,sv:18,s:"Linux",r:/(Linux|X11)/},{svv:6,sv:19,s:"iOS",r:/(iPhone)/},{svv:6,sv:28,s:"iOS",r:/(iPad)/},{svv:6,sv:29,s:"iOS",r:/(iPod)/},{svv:6,sv:20,s:"Mac OS X",r:/Mac OS X/},{svv:6,sv:21,s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{svv:7,sv:22,s:"QNX",r:/QNX/},{svv:8,sv:23,s:"UNIX",r:/UNIX/},{svv:9,sv:24,s:"BeOS",r:/BeOS/},{svv:10,sv:25,s:"OS/2",r:/OS\/2/},{svv:11,sv:26,s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/},{svv:12,sv:27,s:"BB10",r:/BB10/}];for(var p in l){var v=l[p];if(v.r.test(d)){h=parseInt(v.sv),c=parseInt(v.svv);break}}var m=UA.getBrowser().version,m=UA.getBrowser().version;return{osv:this.generateVersion(UA.getOS().version),oss:c,os:h,ua:o,uav:this.generateVersion(m),ce:a,te:e,_ct:s}},generateVersion:function(t){var i=t.split("."),s=i.length;if(s<=1)return t;for(var e,a,r="",o=0;o<s;o++)e=i[o],r+=(a=parseInt(e))<=9&&o>0?"0"+a:e;return r},getCookie:function(t){for(var i=t+"=",s=document.cookie.split(";"),e=0;e<s.length;e++){for(var a=s[e];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(i))return a.substring(i.length,a.length)}return""},parsePageSection:function(t){var i="",s="",e="",a="",r="",o="";if(void 0!==t&&""!=t&&null!=t){var n=void 0!==(s=void 0!==(i=t.replace(/\./,"&").split("&"))[1]?i[1].replace(/\./,"&").split("&"):"")[1]?s[1].replace(/\./,"&").split("&"):"";e=i[0]||"",a=s[0]||"",r=n[0]||"",o=n[1]||""}return{l1:e,l2:a,l3:r,l4:o}}};