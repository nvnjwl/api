SPL.getData=function(videoid,currentPlayerObj,callback){var handleError=currentPlayerObj.handleErrorObj
if(typeof videoid=="undefined"||videoid==undefined||videoid===null){console.log("error from getdata");handleError.handleErrorIfAny(MESSAGE.NO_VIDEO,true,false);return;}var videoidsmall=videoid.toLowerCase();console.log("SPL.SPLconfig =",SPL.SPLconfig);if(SPL.SPLconfig&&SPL.SPLconfig.media&&SPL.SPLconfig.media!=undefined&&SPL.SPLconfig.media[videoidsmall]!=undefined){console.log('dev21 video was live send live API because url:: ',SPL.SPLconfig.media[videoidsmall]);currentPlayerObj.playerObjConfig.playerVars.controls.isNextButton=false;currentPlayerObj.playerObjConfig.playerVars.controls.isAutoplayenable=false;SPL.Api.live(SPL.SPLconfig.media[videoidsmall].url,function(videoData){var STATUS="SUCCESS";console.log("dev21 live :: "+JSON.stringify(videoData));callback(currentPlayerObj,STATUS,videoData);})}else{SPL.Api.feed(videoid,function(videoData){console.log("JSON received ",videoData);console.log(" hello SUSHIIII json received:",_JSF(videoData));if(videoData===undefined){handleError.handleErrorIfAny(MESSAGE.NO_API_RESPONSE,true,true,retrygetData);return;}else if(videoData.error!==undefined){if(videoData.error=="404"){var STATUS="FAILURE";handleError.handleErrorIfAny(MESSAGE.NO_VIDEO,true,true);}else{handleError.handleErrorIfAny(MESSAGE.NO_API_RESPONSE,true,true,retrygetData);}return;}else if(videoData=="FAILURE"){console.log("Error :: "+videoData);var STATUS="FAILURE";handleError.handleErrorIfAny(MESSAGE.NETWORK_ERROR,true,true,retrygetData);return;}var STATUS="SUCCESS";currentPlayerObj.videoData=videoData;callback(currentPlayerObj,STATUS,videoData);});}function retrygetData(){console.log("retrygetData now");var videoid=currentPlayerObj.playerObjConfig.playerVars.id;console.log("video id is :: "+videoid);SPL.getData(videoid,currentPlayerObj,SPL.onReceiveData);}};SPL.createDeepCopy=function(objConfig){var copyObj=JSON.parse(JSON.stringify(objConfig));return copyObj;}