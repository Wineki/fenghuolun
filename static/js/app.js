(function(window) {
    
    function initTouchStyleApp() {
        var touchStyleApp = new TouchStyle('#touchBoxCt', {
            disableAnimation: (function() {
                return window.location.search.indexOf('disable_aniamtion=1') !== -1;
            }()),
            elementWrapSelector: '.touch-box-element-wrap',
            pagePosition: 'auto',
            buttonColor: 'rgba(255, 255, 255, 0.9)',
            originWidth: 320,
            originHeight: 504,
            boxOptions: {
                loop: false,
                animation: 'flow',
                duration: 500,
                itemSelector: '.touch-box-item'
            },
            
            elements: {
                'pg28554421_160': [
                    {
                        id: 'pe28554458_11',
                        css: 'touch-box-element',
                        relativePosition: 'elementWrap',
                        zIndex: 11,
                        body: '<span class="touch-box-element-text" style="font-size:24px;line-height:24px;color:#000000;text-align:left;">单行文字内容</span>',
                        style: 'position:absolute;left:0%;top:0%;width:100%;height:10%;',
                        
                    }
                ],
                'pg28674537_202': [
                    {
                        id: 'pe28674574_03',
                        css: 'touch-box-element',
                        relativePosition: 'elementWrap',
                        zIndex: 11,
                        body: '<span class="touch-box-element-text" style="font-size:24px;line-height:24px;color:#000000;text-align:left;">单行文字内容</span>',
                        style: 'position:absolute;left:0%;top:0%;width:100%;height:10%;',
                        
                    }
                ],
                'pg28682273_484': [
                    {
                        id: 'pe28682308_475',
                        css: 'touch-box-element',
                        relativePosition: 'elementWrap',
                        zIndex: 11,
                        body: '<span class="touch-box-element-text" style="font-size:24px;line-height:24px;color:#000000;text-align:left;">单行文字内容</span>',
                        style: 'position:absolute;left:0%;top:0%;width:100%;height:10%;',
                        
                    }
                ]
                
            }
        });
        window.touchStyleApp = touchStyleApp;
        if (window.touchStyleAppReady) {
            window.touchStyleAppReady(touchStyleApp);
        }
    }
    
    var touchStyleLoadingEl = document.getElementById('touchStyleLoading');
    TouchStyleUtil.ImageLoader.loadImages([
        'http://p0.qhimg.com/t0188a43f24810e972d.png'
        
    
        , 'http://p0.qhimg.com/t0145b43572e050d06a.png'
        
    
        , 'http://p0.qhimg.com/t0144fe8dd649ac7112.png'
        
    ], function(percent) {
        touchStyleLoadingEl.children[0].innerHTML = percent;
        if (percent >= 100) {
            touchStyleLoadingEl.style.opacity = '0';
            setTimeout(function() {
                touchStyleLoadingEl.parentNode.removeChild(touchStyleLoadingEl);
            }, 5e2);
            setTimeout(initTouchStyleApp, 250);
        }
    });
    
}(window));


window.wxData = {
    'appId': '', // 服务号可以填写appId，没有则留空
    'imgUrl': 'http://p0.qhimg.com/t0110bed7db8f90d7d6.png', // 分享显示的图标
    'link': '123', // 分享链接
    'title': '234', // 分享标题
    'desc': '456' // 分享内容
};

(function() {
    var jsonpHandler=function(url,data,method,callback){url=url||"";data=data||{};method=method||"";callback=callback||function(){};var getKeys=function(obj){var keys=[];for(var key in obj){if(obj.hasOwnProperty(key)){keys.push(key)}}return keys};if(typeof data=="object"){var queryString="";var keys=getKeys(data);for(var i=0;i < keys.length;i++){queryString+=encodeURIComponent(keys[i])+"="+encodeURIComponent(data[keys[i]]);if(i!=keys.length-1){queryString+="&"}}url+="?"+queryString}else if(typeof data=="function"){method=data;callback=method}if(typeof method=="function"){callback=method;method="callback"}if(!Date.now){Date.now=function(){return(new Date).getTime()}}var timestamp=Date.now();var generatedFunction="jsonp"+Math.round(timestamp+Math.random()*1000001);window[generatedFunction]=function(json){callback(json);delete window[generatedFunction]};if(url.indexOf("?")===-1){url=url+"?"}else{url=url+"&"}var jsonpScript=document.createElement("script");jsonpScript.setAttribute("src",url+method+"="+generatedFunction);document.getElementsByTagName("head")[0].appendChild(jsonpScript)};
    function weixinSignature() {
        jsonpHandler('http://misc.hao.360.cn/weixin/api', {
            'appKey': 'f_4784b06615864256be9bd1c135480393',
            'url': window.location.href.split('#')[0],
            'format': 'json'
        }, '_callback', function(result) {
            TouchStyleUtil.initWeixinApi(result.data);
            setTimeout(weixinSignature, 7200 * 1000); // 微信JS SDK前面7200秒过期，需要重新签名
        });
    }
    weixinSignature();
}());

WeixinAPI.on('ok', function() { if (monitor) { monitor.log({ cId: 'weixinshare', c: '微信分享'}, 'click'); } });
