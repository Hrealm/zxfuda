(function(){var c={css:function(d,f){for(var e in f){d.style[e]=f[e]}},addEvent:(function(f,e){var d=function(g){var h=g.type;if(h=="DOMMouseScroll"||h=="mousewheel"){g.delta=(g.wheelDelta)?g.wheelDelta/120:-(g.detail||0)/3}if(g.srcElement&&!g.target){g.target=g.srcElement}if(!g.preventDefault&&g.returnValue!==e){g.preventDefault=function(){g.returnValue=false}}return g};if(f.addEventListener){return function(h,j,i,g){if(j==="mousewheel"&&document.mozFullScreen!==e){j="DOMMouseScroll"}h.addEventListener(j,function(k){i.call(this,d(k))},g||false)}}else{if(f.attachEvent){return function(h,j,i,g){h.attachEvent("on"+j,function(k){k=k||f.event;i.call(h,d(k))})}}}return function(){}})(window)};function a(f){var d=this;if(!f.imgWrap||f.imgWrap==""){alert("请填写图片容器id");return}this.Opt={imgWrap:"",beforeCreat:function(){},afterCreat:function(){}};for(var e in this.Opt){if(f[e]){this.Opt[e]=f[e]}}this.elemPreviewContain=document.getElementsByTagName("body")[0];this.elemContain=document.getElementById(this.Opt.imgWrap);this.elemPreviewImg=null;this.elemPreviewClose=null;this.elemPreviewCloseBj=null;this.imgBg=null;this.moveObj=null;this.init();this.LEFT=this.elemPreviewContain.offsetWidth/2;this.TOP=this.elemPreviewContain.offsetHeight/2;this.onOff=true;this.startX=0;this.startY=0;this.moveX=0;this.moveY=0;this._WIDTH=0;this._HEIGHT=0;this.WIDTH=0;this.HEIGHT=0}a.VERSION="1.0.0";var b=new Date().getTime();a.initParams={bgClass:"img_bgmask"};a.prototype={constructor:a,init:function(){var d=this;this.imgBg=document.createElement("div");this.imgBg.className="img_bgmask";c.css(this.imgBg,{position:"fixed",left:0,top:0,width:"100%",height:"100%",fontSize:0,background:"rgba(0,0,0,.6)",display:"none"});this.imgBg.innerHTML='<div class="popurNode" style="position: absolute;left:0;top:0;width:100%;height:100%;z-index:1"></div><span style="position: absolute;top: 50px;right:50px;z-index: 10;height: 48px;width: 48px;background:red;cursor:pointer;border-radius:50%;" class="close_bgmask"></span><div style="position:absolute;left:50%;top:50%;" class="view_img_wrap"><img style="width:100%;height:100%;position: relative;z-index: -1;" src="" alt=""></div>';this.elemPreviewContain.appendChild(this.imgBg);this.elemPreviewImg=this.imgBg.getElementsByTagName("img")[0];this.moveObj=this.elemPreviewImg.parentNode;this.elemPreviewClose=this.imgBg.getElementsByTagName("span")[0];this.elemPreviewCloseBj=this.imgBg.querySelector(".popurNode");this.elemContain.addEventListener("click",f,false);function f(g){g=g||window.event;g.stopPropagation();var i=g.target;var h=i.tagName.toLowerCase();if(h!=="img"){return}d.elemPreviewImg.src=i.src;c.css(d.imgBg,{display:"block"});d._WIDTH=d.WIDTH=d.elemPreviewImg.offsetWidth;d._HEIGHT=d.HEIGHT=d.elemPreviewImg.offsetHeight;c.css(d.moveObj,{width:d.WIDTH+"px",marginLeft:-d.WIDTH/2+"px",marginTop:-d.HEIGHT/2+"px",left:"50%",top:"50%"})}this.moveObj.addEventListener("mousedown",e,false);function e(g){g=g||window.event;g.stopPropagation();d.onOff=true;d.startX=g.pageX;d.startY=g.pageY;document.addEventListener("mousemove",h,false);function h(j){d.onOff=false;d.moveX=j.pageX-d.startX+d.LEFT;d.moveY=j.pageY-d.startY+d.TOP;c.css(d.moveObj,{left:d.moveX+"px",top:d.moveY+"px"});j.preventDefault()}document.addEventListener("mouseup",i,false);function i(j){document.removeEventListener("mousemove",h,false);document.removeEventListener("mouseup",i,false);if(d.onOff){return false}d.LEFT=d.moveX;d.TOP=d.moveY}g.preventDefault()}this.elemPreviewClose.onclick=function(){d.previewClose()};this.elemPreviewCloseBj.onclick=function(){d.previewClose()};c.addEvent(this.imgBg,"mousewheel",function(g){this.WIDTH=d.elemPreviewImg.offsetWidth;if(g.delta>0){c.css(d.moveObj,{width:(this.WIDTH+20)+"px"})}else{c.css(d.moveObj,{width:(this.WIDTH-20)+"px"})}this.HEIGHT=d.elemPreviewImg.offsetHeight;c.css(d.moveObj,{marginLeft:-this.WIDTH/2+"px",marginTop:-this.HEIGHT/2+"px"})})},previewClose:function(){this.LEFT=this.elemPreviewContain.offsetWidth/2;this.TOP=this.elemPreviewContain.offsetHeight/2;c.css(this.moveObj,{width:this._WIDTH+"px"});c.css(this.imgBg,{display:"none"})}};window.Preview=a})();