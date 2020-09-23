// temporary

if (![].includes) {
    Array.prototype.includes = function(searchElement/*, fromIndex*/) {
        'use strict';
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        while (k < len) {
            var currentElement = O[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)
            ) {
                return true;
            }
            k++;
        }
        return false;
    };
}

Array.prototype.includesOneOf = function(arr){
    var O = Object(this),
        k = 0;

    while(k < O.length){
        if(arr.includes(O[k])) return k.toString();
        k++;
    }

    return false;
};

/*! device.js 0.2.7 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);

/*! imagesLoaded PACKAGED v4.1.0 */
!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

(function($){

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

    $.fn.parseCss = function(prop) {
        return parseFloat(getComputedStyle(this[0])[prop]);
    };

})(jQuery);

var MMO = {

    settings: {
        Azbuka: false,
        tasksRestartable: true,
        clickEvent: 'click',
        baseFolder: '/contents/',
        contentFolder: 'source/image/'
    },
    options: {
        isMobile: null,
        isIE: (navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)),
        epubId: null,
        epubName: null,
        basePath: null
    },
    grade: {
        sendTestStats: function(){

            if(MMO.options.epubId){

                var testIds = [];

                $('*[data-test]').each(function(){
                    var id = $(this).attr('data-test');
                    if(id.length)testIds.push(id);
                });

                var statsLink = '/local/school/api.php?action=setTestId&secret=JKHTDYYTC786JGH&epubid=' + MMO.options.epubId +'&quizes=' + testIds;

                $.post(statsLink);
            }

        },
        timer: {
            progress: 0,
            process: false,
            set: function(time){
                var timer = this;

                timer.process = setInterval(function(){
                    timer.progress++;

                    if(timer.progress >= time){
                        timer.reset();
                        MMO.task.result.show(true, 100, true);
                    }

                }, 1000);
            },
            reset: function(){
                if(this.process) {
                    clearInterval(this.process);
                    this.process = 0;
                    this.progress = 0;
                }
            }
        }
    },
    task: {
        beforeInit: function(config){
            return config;
        },
        afterInit: function(){
            $(window).trigger('taskInited');
            if(config.additionalTitle) $area.prepend(config.additionalTitle);
            if(config.additionalText) $area.append(config.additionalText);
        },
        beforeLeave: function(){
            if(!MMO.task.isDone){
                MMO.task.result.save(false);
                MMO.task.result.setGrade(0);
            }
        },
        resizeHolder: function(){},

        result: {
            show: function(res, grade, noPopup){
                MMO.task.isDone = true;

                if(res){

                    if(!noPopup)$correct.toggleClass('showme');
                    MMO.task.result.setGrade();

                } else {

                    if(!noPopup)$wrong.toggleClass('showme');
                    if(grade) MMO.task.result.setGrade(grade);

                }

                MMO.task.result.save(res);

            },
            save: function(res){
                var taskId = (config && config.hasOwnProperty('taskId')) ? config.taskId : false,
                    taskResult = false;

                if(taskId){

                    if(res) taskResult = 'good';
                    else if(JSON.parse(MMO.save.get('saves'))[taskId] != 'good') taskResult = 'bad';

                    if(taskResult)MMO.save.set('saves', taskId, taskResult);

                }
            },
            setGrade: function(percent){

                testTestID = config.taskId;
                testResultID = percent || 5;

                if(typeof acceptTestStorageResult != 'undefined' && config) {

                    acceptTestStorageResult();
                }

                else if (config && config.epubId){

                    var gradeLink = (percent) ? '/local/school/api.php?secret=JKHTDYYTC786JGH&percent=' + testResultID + '&testid=' + testTestID : '/local/school/api.php?secret=JKHTDYYTC786JGH&grade=' + testResultID + '&testid=' + testTestID;

                    $.post(gradeLink);
                }
            }
        },
        isDone: false
    },
    save: {
        get: function(id){return (!MMO.options.isIE) ? localStorage.getItem(id) : MMO.helpers.cookie.get(id)},
        set: function(name, id, val){

            var saves = MMO.save.get(name);

            if(!saves)saves = {};
            else saves = JSON.parse(saves);

            (typeof id != 'object') ? saves[id] = val : saves = id;

            saves = JSON.stringify(saves);

            (!MMO.options.isIE) ? localStorage.setItem(name, saves) : MMO.helpers.cookie.set(name, saves);
        }
    },
    load: {
        libs: function(libs, el, callback){
            MMO.load.libsReady = false;

            var varsArr = [];

            libs.forEach(function(lib){

                if(eval('typeof ' + lib[0]) == 'undefined'){

                    var head = (el) ? document.getElementsByTagName('head')[0] : document.getElementById('stageHead');

                    var libScript = document.createElement('script');
                    libScript.src = lib[1];
                    libScript.type = 'text/javascript';
                    head.appendChild(libScript);

                    varsArr.push(lib[0]);
                }
            });

            var libsLoadingInterval = setInterval(function(){

                var libsLoadingCounter = 0;

                varsArr.forEach(function(item){
                    if(eval('typeof ' + item) != 'undefined')libsLoadingCounter++;
                });

                if(libsLoadingCounter == varsArr.length){
                    MMO.load.libsReady = true;
                    clearInterval(libsLoadingInterval);

                    if(callback)callback.call();
                }

            }, 50);

            if(varsArr.length)console.log('Preloaded additional libs: ', varsArr);
            else console.log('All additional libs were preloaded earlier');
        },
        libsReady: true,
        xml: function(callback){

            var waitForXml = setInterval(function(){
                if(typeof xml != 'undefined' && MMO.load.libsReady){
                    clearInterval(waitForXml);
                    callback();
                    MMO.task.afterInit();
                }
            }, 50);

        }
    },
    helpers: {
        cookie: {
            get: function(name) {
                var matches = document.cookie.match(new RegExp(
                    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            },
            set: function(name, value, options) {
                options = options || {};
                options.path = '/';

                var expires = options.expires;

                if (typeof expires == "number" && expires) {
                    var d = new Date();
                    d.setTime(d.getTime() + expires * 1000);
                    expires = options.expires = d;
                }
                if (expires && expires.toUTCString) {
                    options.expires = expires.toUTCString();
                }

                value = encodeURIComponent(value);

                var updatedCookie = name + "=" + value;

                for (var propName in options) {
                    updatedCookie += "; " + propName;
                    var propValue = options[propName];
                    if (propValue !== true) {
                        updatedCookie += "=" + propValue;
                    }
                }

                document.cookie = updatedCookie;
            }
        },
        throttle: function(func, ms) {

            var isThrottled = false,
                savedArgs,
                savedThis;

            function wrapper() {

                if (isThrottled) { // (2)
                    savedArgs = arguments;
                    savedThis = this;
                    return;
                }

                func.apply(this, arguments); // (1)

                isThrottled = true;

                setTimeout(function() {
                    isThrottled = false; // (3)
                    if (savedArgs) {
                        wrapper.apply(savedThis, savedArgs);
                        savedArgs = savedThis = null;
                    }
                }, ms);
            }

            return wrapper;
        },
        shuffle: function(array) {
            var copy = [], n = array.length, i;

            while (n) {

                i = Math.floor(Math.random() * array.length);

                if (i in array) {
                    copy.push(array[i]);
                    delete array[i];
                    n--;
                }
            }

            return copy;
        },
        randomId: function(){
            return 'id-' + Math.round(Math.random()*1000000);
        },
        checkForMarkup: function(els){

            els.forEach(function(item){

                if(!$(item.check).length){

                    if(item.hasOwnProperty('remove'))$(item.remove).remove();
                    item.appendTo ? $(item.appendTo).append(item.append) : $('body').append(item.append);

                }

            });

        }
    },
    plugins: {
        showFullscreenImage: function(src, txt){

            var winRatio = window.innerWidth / window.innerHeight;

            $popupImage.attr('src', src);

            if(txt)$popupText.html('').append(txt).show();
            else $popupText.hide();

            $popupImage.off().load(function(){

                $overlay.fadeIn();

                var imgRatio = $popupImage.width() / $popupImage.height(),
                    resWidth,
                    resHeight;


                if(imgRatio > winRatio){

                    resWidth = window.innerWidth;
                    resHeight =  'auto'

                } else {

                    resWidth = 'auto';
                    resHeight =  window.innerHeight;

                }

                $popupImage.css({
                    width: resWidth,
                    height: resHeight
                });


                if(txt){

                    var textHeight = $popupText.outerHeight(),
                        textTop = $popupImage.height();

                    if((window.innerHeight - textTop)/2 < textHeight){
                        textTop = textTop - textHeight;
                    }

                    $popupText.css({
                        top: textTop
                    });
                }
            });
        }
    },
    debug: {
        enabled: false,
        log: function(message) {
            console.log(message);
            $('#error-log').prepend(message + '<br>');
        },
        clear: function(){
            MMO.save.set('saves', {});
            MMO.save.set('config', {});
            location.href = 'GEO_main.html';
        },
        init: function(){

            $(function(){

                $('body').append(
                    '<div id="error-log"><input type="text" id="error-log-input"><div id="debug-cache" title="Очистка кэша внутри интерактива убъет конфиг и кнопку ВЕРНУТЬСЯ">Очистить кэш</div></div>' +
                    '<style>#error-log { position: fixed; background: rgba(255,255,255,1); left: 0; right: 0; ' +
                    'top: -140px; height: 160px; border: 1px solid #000; font: 20px Arial; color: black; padding: 5px 5px 21px; ' +
                    'box-sizing: border-box; z-index: 999999; overflow: auto; transition: top ease .5s; }#error-log:hover, #error-log:focus {top: 0;}  ' +
                    '#error-log-input { display: block; position: absolute; left: 0; right: 0; bottom: 0; width: 100%; box-sizing: border-box; ' +
                    'font-size: 20px; }  #debug-cache { position: absolute; right: 0; top: 0; padding: 5px; background: red; cursor: pointer; } </style>');

                $('#error-log-input').on('keyup', function(e){
                    if(e.keyCode == 13){
                        var code = $(this).val();
                        eval(code);
                        $(this).val('');
                    }
                });

                $('#debug-cache').click(function(){
                    MMO.debug.clear();
                });

                window.onerror = function(error, url, line) {
                    $('#error-log').prepend(error + ' - ' + url + ' - ' + line + '<br>');
                };



            });
        }
    },

    init: function(){

        if(location.href.indexOf('?') != -1){
            var epubOptions = location.href.split('#')[1].split('&');
            epubOptions.forEach(function(item){
                if(item.indexOf('epubid=')  != -1) this.options.epubId = item.split('epubid=')[1];
                //else if(item.indexOf('q' != -1) && item != 'q0') this.options.epubName = item;
            });
        }

        this.options.basePath = location.href.substring(0, location.href.indexOf(this.settings.baseFolder) + this.settings.baseFolder.length);

        if(this.debug.enabled){
            this.debug.init();
        }
    }
};

// grade

if(typeof testBookID == 'undefined'){
    var testBookID = '',
        testPageID = '',
        testItemID = '',
        testTestID,
        testResultID;
}

// common vars

if(typeof isTask == 'undefined') window.isTask = false;

var $check, $restart, $retry;

var $sandbox = $('<div/>'),
    $header = $('<div/>').addClass('task__header'),
    $text = $('<div/>').addClass('task__text'),
    $area = $('<div>').addClass('task__area');

var $loadingOverlay;
var $correct, $wrong;

var $overlay, $popup, $popupImage, $popupText;

var config;

// common init

window.bindEventListeners = function(){

    MMO.init();

    window.tasksInited = true;

    if(MMO.settings.Azbuka)$('html').addClass('Azbuka');

    var folder = MMO.settings.contentFolder;

    // LS/COOKIES

    if(!MMO.save.get('saves'))MMO.save.set('saves', {});

    // INIT

    MMO.options.isMobile = !device.desktop();

    if(MMO.options.isMobile) {
        $('html').addClass('mobile-mode');
        //MMO.settings.clickEvent = 'touchstart';
    }

    if(isTask){

        if(config && config.module) $('html').addClass('task-template');

        $sandbox = $('<div/>');
        $('#stageContainer').append($header, $text, $area);

        // check markup

        MMO.helpers.checkForMarkup(
            [
                {
                    check: '.correct',
                    append: '<div class="correct"><div class="result"><p>Молодец!</p><br/><div class="res_img"> </div></div></div>' +
                    '<div class="wrong"><div class="result"><p>Неправильно!</p><br/><div class="res_img"> </div></div></div>'
                },
                {
                    check: '.loading-overlay',
                    append: '<div class="overlay-loading"></div>'
                },
                {
                    check: '.cp-button-container',
                    append: '<div class="cp-button-container"> <a id="close-media-object" class="cp-button" data-href="#">Вернуться</a></div>'
                }
            ]
        );

        // URIS

        config = MMO.save.get('config');
        if(typeof config != 'undefined')config = JSON.parse(config);


        if(config){

            if($('#stageHead').length  && config.module){
                var linkJs = document.createElement('script'),
                    linkCss = document.createElement('link'),
                    contentJs = document.createElement('script');

                linkJs.src = folder + config.module + '/js/main.js';
                linkJs.type = 'text/javascript';

                linkCss.href = folder + config.module + '/css/' + config.theme;
                linkCss.rel = "stylesheet";
                linkCss.type = "text/css";

                contentJs.src = folder + config.content;
                contentJs.type = 'text/javascript';

                if(['audioPlayer', 'videoPlayer'].indexOf(config.module) == -1)document.getElementById('stageHead').appendChild(contentJs);
                document.getElementById('stageHead').appendChild(linkCss);
                document.getElementById('stageHead').appendChild(linkJs);
            }
            else if(!$('.interaktiv').length) {
                console.log('doptext');
                setTimeout(function(){
                    MMO.task.result.show(true, 100, true);
                }, 5000);
            }

        } else {
            xml = '';
        }

        // vars

        $correct = $('.correct');
        $wrong = $('.wrong');
        $wrong.click(function(){$wrong.hide().removeClass('showme');});
        $correct.click(function(){$correct.hide().removeClass('showme');});

        $loadingOverlay = $('.overlay-loading');
        $check = $('.task-check').show();
        $retry = $('.task-retry').show();
        $restart  = $('.task-restart').hide();

        $check.click(function(){
            if(!$(this).hasClass('check_blocked') && !$(this).hasClass('test-mode')){
                $check.css('display', 'none');
                $restart.css('display', 'inline-block');
                $retry.css('display', 'none');
            }
        });

        $restart.click(function(){

            if(!$(this).hasClass('test-mode')){
                $check.css('display', 'inline-block');
                $retry.css('display', 'inline-block');
                $restart.css('display', 'none');
            }
        });

        function resizeStageContainer(){$('#stageContainer').height(window.innerHeight - $('.cp-button-container').height());}

        resizeStageContainer();

        var $closeMediaObject = $('#close-media-object');

        if(MMO.settings.Azbuka){
            $closeMediaObject.hide();
        } else {

            $closeMediaObject.click(function(){
                MMO.save.set('config', {});
                MMO.task.beforeLeave();

                if(config && config.hasOwnProperty('backlink'))location.replace(config.backlink);
                else history.back();
            });

        }

        $(window).on('resize', function(){
            MMO.task.resizeHolder();
            resizeStageContainer();
        });

        $(window).on('allpreloaded', resizeStageContainer);

        $(window).on('taskInited', function(){
            if(typeof $sandbox.find('component').attr('noQuestionLimit') != 'undefined') $text.addClass('task__text_noLimit');
        });

        $(window).trigger('taskInited');


    }
    else{
        MMO.save.set('config', {});

        if($('.media-object-overlay').length){
            $('.media-object-overlay, .cp-button-container').remove();
        }

        if(MMO.settings.Azbuka){
            $('.GEO__common-goback').remove();
        } else {
            $('.GEO__common-goback').on(MMO.settings.clickEvent, function(){
                history.back();
            });
        }
    }

    $('.js-task')
        .each(function(){

            var $el = $(this);

            var taskId = $el.attr('data-test'),
                isDone;

            if(taskId) isDone = JSON.parse(MMO.save.get('saves'))[taskId];
            if(isDone) {
                if(isDone == 'good') $el.addClass('js-task-good');
                else $el.addClass('js-task-bad');
            }

            if($(this).attr('href'))$(this).removeAttr('href');

            if(MMO.options.epubName) $el.attr('name', MMO.options.epubName);

        })
        .on(MMO.settings.clickEvent, function(e){
            e.preventDefault();

            if(!MMO.settings.tasksRestartable && $(this).hasClass('js-task-good'))return false;

            // set config

            var $jt = $(this),
                src = $jt.attr('data-src'),
                theme = $jt.attr('data-theme'),
                taskId = $jt.attr('data-test'),
                title,
                additionalTitle = $jt.attr('data-content-title'),
                additionalText = $jt.attr('data-content-text'),
                config = {};


            if(src){

                if(src.indexOf('#title=') != -1){
                    title = src.split('#title=')[1];
                    src = src.split('#title=')[0];
                    config.title = title;
                }

                if(src.indexOf('config') != -1){

                    if(src.indexOf('config=[') != -1){

                        var imgConfig = src.split('[')[1].split(']')[0].split('|');
                        imgConfig[0] = folder + imgConfig[0].replace('../', '');

                        MMO.plugins.showFullscreenImage(imgConfig[0], imgConfig[1]);
                        MMO.grade.timer.set(10);
                        window.config = config;


                    }
                    else {

                        var uriConfig = src.replace('?config=../', '#').split('#');

                        config = {
                            module: uriConfig[0],
                            content: uriConfig[1],
                            theme: theme || 'main.css'
                        };

                        if(config.module.indexOf('./source/image/') != -1) config.module = config.module.split('./source/image/')[1].split('/')[0];
                        if(config.module.indexOf('./') != -1) config.module = config.module.replace('./', '');
                        if(config.module.indexOf(folder) != -1) config.module = config.module.replace(folder, '');

                        if(config.content.indexOf('../') != -1) config.content = config.content.replace('../', '');

                        config.folder = uriConfig[0].split(config.module)[0];
                        if(config.folder.indexOf('./') != -1) config.folder = config.folder.replace('./', '');

                        config.contentFolder = (folder + config.content).split('/');
                        config.contentFolder.pop();
                        config.contentFolder = config.contentFolder.join('/') + '/';

                        config.moduleFolder = folder + config.module + '/';

                        config.link = MMO.options.basePath + 'task-template.html';

                    }

                }
                else {
                    //console.log(src);

                    if($jt.attr('data-ext-type') == 'image'){
                        MMO.plugins.showFullscreenImage(src, $jt.text());
                        MMO.grade.timer.set(10);
                        window.config = config;
                    } else {
                        config.link =  src;
                    }
                }

            }
            else {

                var module = $jt.attr('data-module');
                var content = $jt.attr('data-content');

                title = $(this).attr('data-title');

                config = {
                    module: module,
                    content: content,
                    folder: folder,
                    contentFolder: folder + content.split('/')[0] + '/',
                    moduleFolder: folder + module + '/',
                    theme: theme || 'main.css',
                    link: MMO.options.basePath + 'task-template.html'
                };

            }

            //config.testId = $(this).attr('data-test'); //TODO check this double usages

            if(title)config.title = title;
            if(taskId)config.taskId = taskId;

            if(additionalTitle) config.additionalTitle = additionalTitle;
            if(additionalText) config.additionalText = additionalText;

            if(MMO.options.epubId) config.epubId = MMO.options.epubId;

            // cPlayer
            if($(this).attr('data-cplayer')) {

                var cConfigString = $(this).attr('data-cplayer');

                config.cPlayer = {outOfScope: true};

                cConfigString.split(',').forEach(function(item){
                    var itemArr = item.split(':');
                    config.cPlayer[itemArr[0]] = itemArr[1];
                });

                var decodedSongName = decodeURI(crossPlayer.audio.src);
                decodedSongName = decodedSongName.substr(decodedSongName.lastIndexOf('/') + 1, decodedSongName.length);


                if(!crossPlayer.closed && decodedSongName.length && config.cPlayer.src && config.cPlayer.src.indexOf(decodedSongName) != -1) config.cPlayer = {scope: crossPlayer.scope};
            }


            config = MMO.task.beforeInit(config);

            MMO.save.set('config', config);

            if(config.link) location.href = config.link;
        });

    // EVENTS

    $(window).on('resize', function(){
        $overlay.hide();
    });


    /* COMMON PLUGINS */

    /* 1. Full screen */

    $('body').append('<style>.overlay,.popup-text{background:rgba(0, 0, 0, 0.7);left:0}.overlay,.zoom{cursor:pointer}.overlay{display:none;position:fixed;top:0;width:100%;height:100%;overflow:hidden;z-index:2001;text-align:center;white-space:nowrap}.overlay:before,.popup{display:inline-block;vertical-align:middle}.overlay:before{width:0;height:100%;content:""}.popup{position:relative}.popup-image{max-width:100%}.popup-image-wrap img{max-width:100%;display:block;margin:auto}.popup-text{box-sizing:border-box;padding:10px;font:24px Arial;text-align:left;color:#fff;position:absolute;right:0;display:block;white-space:normal}</style>');

    $overlay = $('.overlay');

    if(!$overlay.length){
        $overlay = $('<div class="overlay"><div class="popup"><img class="popup-image" src="#"><div class="popup-text" ></div> </div> </div>');
        $('body').append($overlay);
    }

    $overlay.click(function(){
        $(this).fadeOut();
        if(MMO.grade.timer.process) MMO.grade.timer.reset();
        if(!isTask && config) config = undefined;
    });
    $popup = $('.popup');
    $popupImage = $('.popup-image');
    $popupText = $('.popup-text');

    $('.zoom, .slider__window-item img').on(MMO.settings.clickEvent, function(){
        MMO.plugins.showFullscreenImage($(this).attr('src'), $(this).attr('data-txt'));
    });

    /* 2. Zak Slider */

    var $zakSlider = $('.zak-slider'),
        $zakContent = $('.zak-slider-content');

    if(!$zakSlider.length){

        $zakContent =  $('<div/>')
            .addClass('zak-slider-content')
            .css({
                width: '100%',
                height: '100%',
                overflow: 'auto',
                boxSizing: 'border-box',
                padding: '30px',
                background: '#000'
            });

        $zakSlider = $('<div/>')
            .addClass('zak-slider')
            .css({
                position: 'fixed',
                top: 0,
                right: '-100%',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                zIndex: 999999,
                background: '#fff',
                transition: 'right ease .5s'
            })
            .append(
                $zakContent,
                $('<div/>')
                    .addClass('zak-slider-hide')
                    .css({
                        width: '22px',
                        height: '22px',
                        position: 'absolute',
                        right: '5px',
                        top: '15px',
                        backgroundColor: '#fff',
                        border: '1px solid #000',
                        borderRadius: '3px',
                        backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAQAAAGG3gYNAAAACXBIWXMAAAsTAAALEwEAm" +
                        "pwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAFSSURBVHjaYmBgZoCCdgYGBgYWBgaG1QAAAAD//4KJMDAzMA" +
                        "gwMAAAAAD//2JgYGBYxsDAwMDABRHmY1jFwAAAAAD//2JgmA9VtZ6BgYFhDgMDw3+YPhTGMmSRzQAAAAD//1TIMQrAIBAAwSmt4v8NpBJBMG88G0X" +
                        "calgYXqfwbDYfQnIVinqPvPTrTAAAAP//XM8xCoAwFIPhb3AX76tYHTyDu+cQhE7ioXSy5TVjIH8Slhiw6enqDiR3O29yRSqjs0F5y9Gi2RHYSHK8" +
                        "zlobf3v3NOzh45MOVgiIoygOf2Vkp/CU8whmNcXOK0gkGwtkja2U2Np4lmshE9P8nd05/W63TofMQVhIqRAe+m+T2TfChXA1qMdbYV65oXDTSz3aC" +
                        "aVcuFcFJ5QLYfIfGglnsBamzVApnLS/kpUw+4XGwlGn4XwpPtto2bjUt1Nr46n7GgD7TkwAaPNvWAAAAABJRU5ErkJggg==')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        cursor: 'pointer'
                    })
                    .click(function(){
                        $zakSlider.css('right', '-100%');
                        $zakContent.html('');
                        zakSlider.onClose();
                        zakSlider.onClose = function(){};
                        zakSlider.resizeHolder = function(){};
                    })
            );

        $('body').append($zakSlider);
    }

    window.zakSlider = function($content){
        $zakContent.append($content);
        $zakSlider.css('right', 0);
    };

    window.zakSlider.add = function($cont){
        $zakContent.append($cont);
    };

    window.zakSlider.onClose = function(){};
    window.zakSlider.resizeHolder = function(){};

    $(window).on('resize', function(){
        window.zakSlider.resizeHolder();
    });

};

// crossPlayer

var crossPlayer = {

    audio: new Audio(),
    scope: null,
    saved: false,
    closed: true,

    playlists: {},
    playlist: null,
    indexInPlaylist: null,
    playlistEnabled: true,
    loop: false,
    forcePause: false,
    //autoplay: false,

    $playbuttons: null,

    $el: null,
    $player: null,
    $play: null,
    $pause: null,
    $mute: null,
    $next: null,
    $prev: null,
    $loop: null,
    $minimize: null,
    $close: null,
    $name: null,
    $bar: null,
    $barFill: null,

    name: '',
    image: null,
    minimized: false,
    barInterval: null,
    states: [0,-54, -82],

    init: function(){
        var self = this;

        if(MMO.options.isIE){
            if(window.name.length) self.saved = window.name;
            else self.saved = '{}';
        } else {
            self.saved = MMO.save.get('crossPlayer');
        }

        self.scope = $('body').attr('data-cplayer-scope') || 'temp';

        self.$playbuttons = $('*[data-cplayer-src]');

        self.setVars(self);
        self.setUiEvents(self);
        self.setAudioEvents(self);

        self.checkForPlaylists(self);
        self.checkForSavedAudio(self);

        self.$playbuttons.click(function(){

            $(this).focus();
            crossPlayer.playThis($(this));

        });

    },
    setVars: function(self){
        self.$player = $(
            '<div class="CP__player">' +
            '<div class="CP__player-wrap">' +
            '<div class="CP__progressbar"><div class="CP__progressbar-fill CP__progressbar-fill_animated"></div></div>' +
            '<div class="CP__play"></div>' +
            '<div title ="Предыдущий трек" class="CP__prev CP__disabled"></div>' +
            '<div title ="Пауза" class="CP__pause"></div>' +
            '<div title ="Следующий трек" class="CP__next CP__disabled"></div>' +
            '<div title ="Повтор" class="CP__loop CP__disabled"></div>' +
            '<div class="CP__name"></div>' +
            '<div title ="Вылючить звук" class="CP__mute"></div>' +
            '<div title ="Свернуть" class="CP__minimize"></div>' +
            '<div title ="Закрыть" class="CP__close"></div>' +
            '<div class="CP__image"></div>' +
            '</div>' +
            '</div>'
        ).appendTo($('body'));

        self.$play = $('.CP__play', self.$el).hide();
        self.$pause = $('.CP__pause', self.$el);
        self.$mute = $('.CP__mute', self.$el);
        self.$prev = $('.CP__prev', self.$el);
        self.$next = $('.CP__next', self.$el);
        self.$loop = $('.CP__loop', self.$el);
        self.$minimize = $('.CP__minimize', self.$el);
        self.$close = $('.CP__close', self.$el);
        self.$name = $('.CP__name', self.$el);
        self.$bar =  $('.CP__progressbar', self.$el);
        self.$barFill = $('.CP__progressbar-fill', self.$el);

        self.$image = $('.CP__image', self.$el);
    },
    setUiEvents: function(self){

        self.$play.on('click', function(){
            self.play();
        });
        self.$pause.on('click', function(){
            self.pause();
        });

        self.$prev.click(function(){

            if(!self.$prev.hasClass('CP__disabled')){
                self.toggleSong(-1);
            }

        });

        self.$next.click(function(){

            if(!self.$next.hasClass('CP__disabled')){
                self.toggleSong(1);
            }
        });

        self.$loop.click(function(){

            self.loop = !self.loop;

            $(this).toggleClass('CP__disabled');

            self.checkPositionInPlaylist();

            if(self.loop) self.$next.add(self.$prev).removeClass('CP__disabled');
        });

        self.$mute.click(function() {
            self.mute();
        });

        self.$minimize.on('click', function(){

            self.toggle( self.minimized ? self.states[0] : self.states[1] );
            self.$player.toggleClass('CP__player_minimized');

            self.minimized = !self.minimized;
        });

        self.$close.on('click', function(){
            self.close();
        });

        self.$bar.click(function(e){

            var newProgress = e.clientX - $(this).offset().left;

            self.audio.currentTime = self.audio.duration / (self.$bar.width() / newProgress);
            self.updateBar();
            self.updateSave({time: self.audio.currentTime});

        });

    },
    setAudioEvents: function(self){

        self.audio.addEventListener('loadedmetadata', function(){

            if(self.saved && self.saved.loadedFromMemory){
                delete self.saved.loadedFromMemory;

                self.audio.currentTime = self.saved[self.scope].time || 0;

                if(!self.saved[self.scope].paused) {
                    self.play();
                }
                else {
                    self.pause();
                    self.updateBar();
                }

                self.toggle(self.states[0]);

            } else if(self.outOfScope){
                delete  self.outOfScope;

                if(self.autoplay){
                    self.play();
                    delete  self.autoplay;
                }
                else self.pause();

                self.toggle(self.states[0]);
            }

            else if(!self.forcePause) self.play();

            if(self.playlist)self.checkPositionInPlaylist();
        });

        self.audio.addEventListener('ended', function(){
            if(self.playlist && self.loop){

                self.indexInPlaylist++;

                if(self.indexInPlaylist == self.playlists[self.playlist].length) {
                    self.indexInPlaylist = 0;
                    if(!self.loop)self.forcePause = true;

                }


                self.resetActiveElement();
                self.construct(self.playlists[self.playlist][self.indexInPlaylist]);

                self.checkPositionInPlaylist();

            }
            else {
                self.resetTrack();
                if(self.loop)self.play();
            }
        });

    },

    checkForPlaylists: function(self){

        var $playlists = $('*[data-cplayer-playlist]');

        if($playlists.length){

            $playlists.each(function(){
                var $el = $(this),
                    thisPlaylist = self.attr('playlist', $el);

                if(!crossPlayer.playlists.hasOwnProperty(thisPlaylist))crossPlayer.playlists[thisPlaylist] = [];

                self.playlists[thisPlaylist].push({
                    src: self.attr('src', $el),
                    time: self.attr('time', $el),
                    volume: self.attr('volume', $el) || 1,
                    name: self.attr('name', $el),
                    image: self.attr('image', $el),
                    playlist: self.attr('playlist', $el)
                });

            });

        }

    },

    checkForSavedAudio: function(self){

        if(self.saved && JSON.parse(self.saved)){

            self.saved = JSON.parse(self.saved);

            for(var scope in self.saved){
                if(scope != self.scope) self.saved[scope].paused = true;
            }

            if(self.scope != 'temp'){
                MMO.options.isIE ? window.name = JSON.stringify(self.saved) : MMO.save.set('crossPlayer', self.saved);
            }

            if(self.saved.hasOwnProperty(self.scope)){

                self.saved.loadedFromMemory = true;

                if(self.saved[self.scope].playlistTracks){
                    self.playlists[self.saved[self.scope].playlist] = self.saved[self.scope].playlistTracks;
                }

                self.construct({
                    src: self.saved[self.scope].src,
                    name: self.saved[self.scope].name,
                    image: self.saved[self.scope].image,
                    playlist: self.saved[self.scope].playlist,
                    volume: self.saved[self.scope].volume
                });

                if(!self.audio.volume)self.$mute.toggleClass('CP__mute_muted');

            }
        }

    },

    updateBar: function(){
        this.$barFill.css('width', 100 / (this.audio.duration / this.audio.currentTime) + '%');
    },

    toggleSong: function(dir){
        if(this.audio.paused) this.forcePause = true;

        this.indexInPlaylist += dir;

        if(this.indexInPlaylist < 0) this.indexInPlaylist = this.playlists[this.playlist].length - 1;
        else if(this.indexInPlaylist == this.playlists[this.playlist].length) this.indexInPlaylist = 0;

        this.resetActiveElement();
        this.construct(this.playlists[this.playlist][this.indexInPlaylist]);

        this.checkPositionInPlaylist();
    },

    checkPositionInPlaylist: function(){

        if(!this.loop){

            if(this.indexInPlaylist == 0) this.$prev.addClass('CP__disabled');
            else  this.$prev.removeClass('CP__disabled');

            if(this.indexInPlaylist == this.playlists[this.playlist].length - 1) this.$next.addClass('CP__disabled');
            else this.$next.removeClass('CP__disabled');

        }

    },

    updateSave: function(opts){

        var self = this;

        if(!self.saved) self.saved = {};
        if(!self.saved[self.scope])self.saved[self.scope] = {};

        if(!opts) delete self.saved[self.scope];
        else {

            if(typeof opts == 'object'){

                for(var opt in opts){
                    self.saved[self.scope][opt] = opts[opt];
                }
            } else {

                self.saved[self.scope] = {
                    src: self.audio.src,
                    time: self.audio.currentTime,
                    volume: self.audio.volume,
                    name: self.name,
                    paused: self.audio.paused,
                    image: self.image,
                    playlist: self.playlist,
                    playlists: self.playlists,
                    playlistTracks: self.playlists[self.playlist]
                };

            }
        }

        if(self.scope != 'temp'){
            MMO.options.isIE ? window.name = JSON.stringify(self.saved) : MMO.save.set('crossPlayer', self.saved);
        }
    },
    toggle: function(pos){

        this.$player.css('bottom', pos);

    },
    resetPlayer: function(){

        crossPlayer.audio.paused = true;
        crossPlayer.audio.volume = 1;

        crossPlayer.minimized = false;
        crossPlayer.image = null;

        crossPlayer.forcePause = false;

        crossPlayer.$player.removeClass('CP__player_minimized');
        crossPlayer.$mute.removeClass('CP__mute_muted');
    },
    resetActiveElement: function(){
        $('.CP__active').removeClass('CP__active');
    },
    resetTrack: function(){
        this.pause();
        crossPlayer.audio.currentTime = 0;
        this.updateBar();
    },

    construct: function(opts){

        // Set possible options before audio loaded

        var self = this;

        self.audio.src = opts.src;

        self.name = opts.name || decodeURI(self.audio.src.split('/')[self.audio.src.split('/').length - 1]);
        self.$name.html(self.name);

        self.audio.volume = opts.volume || 1;

        self.image = opts.image || null;
        self.setImage();

        self.playlist = opts.playlist || null;

        // Get current active element on page

        var currentSrc = decodeURI(self.audio.src);

        if(self.$el) self.$el.addClass('CP__active');
        else {
            self.$playbuttons.each(function(){

                if(currentSrc.indexOf($(this).attr('data-cplayer-src')) != -1) {
                    self.$el = $(this).addClass('CP__active');
                    return false
                }
            });
        }

        if(self.playlist){

            self.updateSave({
                playlists: self.playlists,
                playlistTracks: self.playlists[self.playlist]
            });

            // If playlist - find index of audio in current playlist

            self.playlists[self.playlist].forEach(function(item, i){
                var songName = item.src.split('/')[item.src.split('/').length - 1];
                if(currentSrc.indexOf(songName) != -1) self.indexInPlaylist = i;
            });

            self.$player.addClass('CP__playlist');
        }
        else self.$player.removeClass('CP__playlist');

        // TODO CHECK OTHER OPTIONS FOR TROUBLES

        self.updateSave({
            name: self.name,
            src: self.audio.src,
            volume: self.audio.volume,
            image: self.image,
            playlist: self.playlist
        });


        if(opts.outOfScope)self.outOfScope = true;

    },
    setImage: function(){

        if(this.image){
            crossPlayer.$player.addClass('CP__player_gotimage');
            crossPlayer.$image.addClass(crossPlayer.image);
        }
        else {
            crossPlayer.$player.removeClass('CP__player_gotimage');
        }

    },

    play: function(){
        var self = this;

        self.closed = false;

        self.audio.play();
        self.$play.hide();
        self.$pause.show();

        self.forcePause = false;

        self.barInterval = setInterval(function(){
            self.updateBar();
            self.updateSave({time:self.audio.currentTime, paused: false});
        }, 50);
    },
    pause: function(){
        var self = this;

        self.audio.pause();

        self.$play.show();
        self.$pause.hide();

        if(self.barInterval)clearInterval(self.barInterval);
        self.updateSave({time:self.audio.currentTime, paused: true});
    },
    mute: function(){

        this.audio.volume = !this.audio.volume;
        this.$mute.toggleClass('CP__mute_muted');

        this.updateSave({volume: this.audio.volume});
    },
    close: function(){
        this.pause();
        this.toggle(this.states[2]);

        this.closed = true;

        this.updateSave(false);

        //audio and name are not actually destroyed, play() and toggle(0) will revive it

    },
    playThis: function($el){
        var self = this;

        if($el.hasClass('CP__active')){
            self.audio.paused ? self.play() : self.pause();
        } else {

            self.$el = $el;

            self.resetPlayer();
            self.resetActiveElement();

            self.construct({
                src: self.attr('src'),
                time: self.attr('time'),
                volume: self.attr('volume') || 1,
                name: self.attr('name'),
                image: self.attr('image'),
                playlist: self.attr('playlist')
            });

            self.toggle(self.states[0]);

        }
    },
    attr: function(name, $el){
        var $element = $el || crossPlayer.$el;
        return $element.attr('data-cplayer-' + name);
    }
};

$(function() {

    // universal init

    if(typeof tasksInited == 'undefined') bindEventListeners();

    // cPlayer init

    if (config && config.cPlayer) {

        if (config.cPlayer.hasOwnProperty('scope'))$('body').attr('data-cplayer-scope', config.cPlayer.scope);

        if (config.cPlayer.hasOwnProperty('autoplay'))crossPlayer.autoplay = true;
    }

    crossPlayer.init();

    if (config && config.cPlayer && config.cPlayer.src) {
        crossPlayer.construct(config.cPlayer);
    }

    // IE body width bug barbarians fix

    if (MMO.options.isIE)$(window).resize(function () {
        $('.white_block').css('left', (window.innerWidth - $('.white_block').width()) / 2)
    }).trigger('resize');

    // moodle statistics init

    MMO.grade.sendTestStats();
});