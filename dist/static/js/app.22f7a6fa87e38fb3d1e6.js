webpackJsonp([1],{"//FG":function(t,s){},"37Df":function(t,s){},"62Vh":function(t,s){},"6aoz":function(t,s){},HWbb:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e={name:"App",methods:{Merchants:function(t){"bottom"===t?(document.body.scrollTop=5e3,document.documentElement.scrollTop=5e3):(document.body.scrollTop=0,document.documentElement.scrollTop=0)}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("header",[i("div",{staticClass:"clearFix wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"nav fr"},[i("ul",{staticClass:"clearFix"},[i("li",[i("router-link",{attrs:{to:{name:"index"}}},[i("span",[t._v("首页")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:{name:"about"}}},[i("span",[t._v("关于中象")])])],1),t._v(" "),t._m(1),t._v(" "),i("li",[i("router-link",{attrs:{to:{name:"product"}}},[i("span",[t._v("产品中心")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:{name:"news"}}},[i("span",[t._v("新闻中心")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:{name:"join"}}},[i("span",[t._v("加入中象")])])],1)])])])]),t._v(" "),i("div",{staticClass:"header_hidden"}),t._v(" "),i("router-view"),t._v(" "),i("footer",[i("div",{staticClass:"clearFix wrap"},[t._m(2),t._v(" "),i("div",{staticClass:"footer-right clearFix fr"},[i("div",{staticClass:"footer-zxfd fl"},[i("h3",[t._v("中象福达")]),t._v(" "),i("p",[i("router-link",{attrs:{to:{name:"product"},"active-class":""},nativeOn:{click:function(s){return t.Merchants("top")}}},[t._v("产品介绍")])],1),t._v(" "),t._m(3),t._v(" "),i("p",[i("router-link",{attrs:{to:{name:"product"},"active-class":""},nativeOn:{click:function(s){return t.Merchants("bottom")}}},[t._v("招商加盟")])],1)]),t._v(" "),i("div",{staticClass:"footer-about fl"},[i("h3",[t._v("关于我们")]),t._v(" "),i("p",[i("router-link",{attrs:{to:{name:"about"},"active-class":""}},[t._v("关于我们")])],1),t._v(" "),i("p",[i("router-link",{attrs:{to:{name:"join"},"active-class":""}},[t._v("加入我们")])],1)]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"logo"},[s("a",{attrs:{href:"/"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"http://www.gdzxjy.net.cn/",target:"_blank"}},[s("span",[this._v("中象福达")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"footer-left fl"},[i("div",{staticClass:"com-logoInfo clearFix"},[i("h1",{staticClass:"logo fl"}),t._v(" "),i("h1",{staticClass:"QRcode"}),t._v(" "),i("div",{staticClass:"bigQRcode"})]),t._v(" "),i("p",{staticClass:"com-info"},[t._v("全国24小时服务调度")]),t._v(" "),i("p",{staticClass:"com-info"},[t._v("一站式安全无忧运输")]),t._v(" "),i("p",{staticClass:"com-info"},[t._v("大数据决策分析赋能")]),t._v(" "),i("p",{staticClass:"com-hotline"},[t._v("招商热线："),i("span",[t._v("400-666-7056")]),t._v(" 转 2")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"http://www.gdzxjy.net.cn/ms-book.html",target:"_blank"}},[this._v("在线咨询")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"footer-contact fr"},[s("h3",[this._v("联系我们")]),this._v(" "),s("p",[this._v("公司电话：020-39922019")]),this._v(" "),s("p",[this._v("公司邮箱：service@gdzxjy.com.cn")]),this._v(" "),s("p",[this._v("总部地址：广州市番禺区东环街番禺大道北537号番山创业中心")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"down-div"},[s("p",[this._v("Copyright©2019-2022广东中象集运科技有限公司All rights reserved. "),s("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.cn"}},[this._v("粤ICP备19052867号-3")])])])}]};var c=i("VU/8")(e,n,!1,function(t){i("62Vh")},"data-v-4d71dd38",null).exports,r=i("/ocq"),l=i("BbWT"),o=i.n(l),v={data:function(){return{bannerImg:["/static/img/indexbanner/indexbanner2.jpg","/static/img/indexbanner/indexbanner1.jpg","/static/img/indexbanner/indexbanner2.jpg","/static/img/indexbanner/indexbanner1.jpg"]}},components:{},mounted:function(){var t=document.getElementById("js-scene");new o.a(t)}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"banner"},[i("el-carousel",{attrs:{trigger:"click",height:"650px","indicator-position":"none"}},t._l(t.bannerImg,function(t,s){return i("el-carousel-item",{key:s},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{src:t,alt:"",width:"100%",height:"100%"}})])}),1),t._v(" "),t._m(0)],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"company-innovation"},[i("div",{staticClass:"max1200 clearFix"},[t._m(2),t._v(" "),i("div",{staticClass:"innovation-right fr"},[i("ul",{staticClass:"clearFix"},[i("li",{staticClass:"fl"},[i("div",{staticClass:"item-cover"},[i("router-link",{attrs:{to:{name:"newsDetails",query:{id:"271"}},"active-class":""}},[i("img",{attrs:{src:"/static/img/cover1.jpg",alt:""}})])],1),t._v(" "),i("h3",{staticClass:"item-title"},[t._v("年度创新引领奖")]),t._v(" "),i("p",{staticClass:"item-content"},[t._v("中象福达作为“互联网+”企业代表受邀参加本次峰会，并荣膺“2019年度创新引领奖”。\n                            ")]),t._v(" "),i("div",{staticClass:"item-more"},[i("router-link",{attrs:{to:{name:"newsDetails",query:{id:"271"}},"active-class":""}},[t._v("详情")])],1)]),t._v(" "),i("li",{staticClass:"fr"},[i("div",{staticClass:"item-cover"},[i("router-link",{attrs:{to:{name:"newsDetails",query:{id:"243"}},"active-class":""}},[i("img",{attrs:{src:"/static/img/cover2.jpg",alt:""}})])],1),t._v(" "),i("h3",{staticClass:"item-title"},[t._v("物流业重新定义")]),t._v(" "),i("p",{staticClass:"item-content"},[t._v("通过互联网大数据、云计算、物联网等信息技术与手段，让科技为物流赋能，促进互联网和整车物流的深度融合。\n                            ")]),t._v(" "),i("div",{staticClass:"item-more"},[i("router-link",{attrs:{to:{name:"newsDetails",query:{id:"243"}},"active-class":""}},[t._v("详情")])],1)])])])])]),t._v(" "),i("div",{staticClass:"zxfd-des"},[i("div",{staticClass:"max1200 clearFix"},[i("div",{staticClass:"zxfd-left fl"},[t._m(3),t._v(" "),t._m(4),t._v(" "),i("div",{staticClass:"zxfd-more"},[i("router-link",{attrs:{to:{name:"about"},"active-class":""}},[t._v("关于中象")])],1)]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wave"},[s("img",{attrs:{src:"/static/img/indexbanner/wave.png",alt:"",width:"100%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"company-des"},[s("div",{staticClass:"max1200 clearFix"},[s("div",{staticClass:"company-left fl"},[s("div",{staticClass:"company-symbol",attrs:{id:"js-scene"}},[s("div",{attrs:{"data-depth":"0.35"}},[s("img",{attrs:{src:"/static/img/index6.png",alt:"",width:"100%"}})])])]),this._v(" "),s("div",{staticClass:"company-right fr"},[s("div",{staticClass:"company-title"},[s("img",{attrs:{src:"/static/img/index4.png",alt:"",width:"170px"}})]),this._v(" "),s("div",{staticClass:"company-descTxt"},[s("h3",{staticClass:"descTitle"},[this._v("大象起舞  行稳致远")]),this._v(" "),s("p",{staticClass:"descContent"},[this._v("中象集团是一家专注于公路货物运输综合服务的智慧物流科技集团公司。下属中象集运科技、中象福达供应链管理、中象福达技术研发、中象学院等公司业务主体。公司自主研发、运营整车物流交易平台，旗下拥有“中象福达”物流品牌和全国11个省级运营中心。\n                        ")]),this._v(" "),s("p",{staticClass:"descContent"},[this._v("公司秉承共创、共享、共赢的经营理念，以合作加盟的商业模式联合广大物流企业和物流园区共同打造以整车运营为核心业务、以信息科技为智能纽带、以资源效率为配置目标的智慧物流信息平台，实现社会资源集约高效，助力公路货运降本增效。\n                        ")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"innovation-left fl"},[i("h3",{staticClass:"inn-desc-title"},[t._v("中象集团")]),t._v(" "),i("h3",{staticClass:"inn-desc-title"},[t._v("不一样的创新。")]),t._v(" "),i("p",{staticClass:"inn-desc-content"},[t._v("秉承共创、共享、共赢的经营理念，中象福达联合广大物流企业和物流园区，共同打造以整车运营为核心业务、以信息科技为智能纽带、以资源效率为配置目标的智慧物流信息平台，从物流运作、物流管理以及物流组织等方面提升物流业的发展水平，推动整车物流智能化、自动化、规范化发展。\n                    ")]),t._v(" "),i("h3",{staticClass:"inn-desc-fooder"},[t._v("货运  发整车")]),t._v(" "),i("h3",{staticClass:"inn-desc-fooder",staticStyle:{"margin-top":"3px"}},[t._v("找中象福达")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zxfd-title"},[s("img",{attrs:{src:"/static/img/index3.png",alt:"",width:"170px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zxfd-descTxt"},[s("h3",{staticClass:"descTitle"},[this._v("智慧整车物流交易平台引领者")]),this._v(" "),s("p",{staticClass:"descContent"},[this._v("中象福达品牌定位为：“智慧整车物流交易平台引领者”；业务定位为：公路货物运输综合服务。\n                        ")]),this._v(" "),s("p",{staticClass:"descContent"},[this._v("公司坚持技术与业务双轮驱动、线上与线下协同联动、积极整合货运产业链上下游资源，本着以客户至上、效率优先、服务为王的经营宗旨和勇创“一流团队、一流服务、一流品牌”的企业精神，以开放、创新、合作、务实的崭新姿态积极为客户创造价值、助力公路货运行业降本增效！\n                        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zxfd-right fr"},[s("div",{staticClass:"zxfd-symbol"},[s("img",{attrs:{src:"/static/img/index2.jpg",alt:""}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"com-position"},[i("div",{staticClass:"max1200 clearFix"},[i("div",{staticClass:"position-left fl"},[i("img",{staticClass:"positiom-symbol",attrs:{src:"/static/img/index1.jpg",width:"80%"}})]),t._v(" "),i("div",{staticClass:"position-right fr"},[i("h3",[i("span",[i("img",{attrs:{src:"/static/img/indexbj.png",width:"18",height:"18"}})]),t._v("总部")]),t._v(" "),i("p",[t._v("以广东为核心辐射全国")]),t._v(" "),i("h3",[i("span",[i("img",{attrs:{src:"/static/img/indexbj.png",width:"18",height:"18"}})]),t._v("运营中心")]),t._v(" "),i("p",[t._v("在武汉、郑州、南宁等中心城市设立11个运营中心，争取到2021年，在全国各个省会城市设立完成运营中心布点。")]),t._v(" "),i("h3",[i("span",[i("img",{attrs:{src:"/static/img/indexbj.png",width:"18",height:"18"}})]),t._v("运营商")]),t._v(" "),i("p",[t._v("以运营中心为支点，以招商加盟模式，在全国各个城市招募运营商，到2021年，公司将招募完成1000家以上运营商，一起抱团合作，共赢发展。")])])])])}]};var p=i("VU/8")(v,d,!1,function(t){i("NLA8"),i("xCGv")},"data-v-79263f92",null).exports,_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:t.bannerSrc,alt:"",width:"100%",height:"100%"}})]),t._v(" "),i("div",{staticClass:"product-menu"},[i("div",{staticClass:"max1200"},[i("div",{staticClass:"menu-wrap"},[i("div",{staticClass:"menu-item",on:{click:function(s){return t.getContent("consignor")}}},[i("div",{staticClass:"image consignor",class:"consignor"===t.active_product?"active-consignor":""}),t._v(" "),i("span",{class:"consignor"===t.active_product?"active-span":""},[t._v("中象货主")])]),t._v(" "),i("div",{staticClass:"menu-item",on:{click:function(s){return t.getContent("broker")}}},[i("div",{staticClass:"image broker",class:"broker"===t.active_product?"active-broker":""}),t._v(" "),i("span",{class:"broker"===t.active_product?"active-span":""},[t._v("中象经纪人")])]),t._v(" "),i("div",{staticClass:"menu-item",on:{click:function(s){return t.getContent("driver")}}},[i("div",{staticClass:"image driver",class:"driver"===t.active_product?"active-driver":""}),t._v(" "),i("span",{class:"driver"===t.active_product?"active-span":""},[t._v("中象司机")])])])])]),t._v(" "),i("div",{staticClass:"product-content"},[i("div",{staticClass:"max1200"},[i("div",{staticClass:"product-consignor",style:"consignor"===t.active_product?"display:block;":"display:none;"},[t._m(0),t._v(" "),i("div",{staticClass:"conApp"},[i("div",{staticClass:"max1200  clearFix"},[i("div",{staticClass:"conApp-left fl"},[i("el-carousel",{attrs:{interval:3e3,type:"card",height:"456px","indicator-position":"none"}},t._l(t.conAPP.consignor,function(t,s){return i("el-carousel-item",{key:s,staticStyle:{width:"256px"}},[i("img",{attrs:{src:t,alt:"",width:"100%",height:"100%"}})])}),1)],1),t._v(" "),t._m(1)])])]),t._v(" "),i("div",{staticClass:"product-broker",style:"broker"===t.active_product?"display:block;":"display:none;"},[t._m(2),t._v(" "),i("div",{staticClass:"conApp"},[i("div",{staticClass:"max1200  clearFix"},[i("div",{staticClass:"conApp-left fl"},[i("el-carousel",{attrs:{interval:3e3,type:"card",height:"456px","indicator-position":"none"}},t._l(t.conAPP.broker,function(t,s){return i("el-carousel-item",{key:s,staticStyle:{width:"256px"}},[i("img",{attrs:{src:t,alt:"",width:"100%",height:"100%"}})])}),1)],1),t._v(" "),t._m(3)])])]),t._v(" "),i("div",{staticClass:"product-driver",style:"driver"===t.active_product?"display:block;":"display:none;"},[t._m(4),t._v(" "),i("div",{staticClass:"conApp"},[i("div",{staticClass:"max1200  clearFix"},[i("div",{staticClass:"conApp-left fl"},[i("el-carousel",{attrs:{interval:3e3,type:"card",height:"456px","indicator-position":"none"}},t._l(t.conAPP.driver,function(t,s){return i("el-carousel-item",{key:s,staticStyle:{width:"256px"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{src:t,alt:"",width:"100%",height:"100%"}})])}),1)],1),t._v(" "),t._m(5)])])])])]),t._v(" "),i("div",{staticClass:"merchants"})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"conIfo clearFix"},[s("div",{staticClass:"con-symbol fl"},[s("img",{attrs:{src:"/static/img/product1.png",alt:"",width:"43%"}})]),this._v(" "),s("div",{staticClass:"con-desc fr"},[s("h3",{staticClass:"descTitle"},[this._v("中象货主")]),this._v(" "),s("p",{staticClass:"descContent"},[this._v("是一款服务广大货主个人、企业的交易软件，有找车需求的货主可使用此软件快捷发布货源订单，快速找到满足运输需求的车辆和司机；一秒下单，一分钟响应，十分钟成交，您的整车物流专家。")]),this._v(" "),s("p",{staticClass:"downloadAPP"},[s("a",{attrs:{target:"_blank",href:"http://dl.gdzxjy.net/web/dl_trader.html"}},[this._v("下载货主APP >>")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"conApp-right fr"},[i("div",{staticClass:"app-title"},[t._v("货主端下载")]),t._v(" "),i("p",{staticClass:"desc-txt"},[t._v("有货即发，海量司机一秒响应")]),t._v(" "),i("div",{staticClass:"dow-QRcode clearFix"},[i("div",{staticClass:"QRcode fl"},[i("img",{attrs:{src:"http://dl.gdzxjy.net/web/css/img/huozhu.png",alt:"",width:"100%",height:"100%"}})]),t._v(" "),i("div",{staticClass:"app-version fl"},[i("p",{staticClass:"android"},[i("a",{attrs:{href:"http://dl.gdzxjy.net/download/trader/TraderClient_Setup.apk"}},[t._v("Android版下载")])]),t._v(" "),i("p",{staticClass:"iphone"},[i("a",{attrs:{href:"javascript:;"}},[t._v("iPhone版(敬请期待)")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"conIfo clearFix"},[s("div",{staticClass:"con-symbol fl"},[s("img",{attrs:{src:"/static/img/product2.png",alt:"",width:"43%"}})]),this._v(" "),s("div",{staticClass:"con-desc fr"},[s("h3",{staticClass:"descTitle"},[this._v("中象经纪人")]),this._v(" "),s("p",{staticClass:"descContent"},[this._v("是一款服务广大物流货运部、信息部、仓库管理员等中间商个体的交易软件，经纪人可以使用本软件可以快捷完成交易、有效管理自己的交易数据和资源；服务为本，效率为王，品牌经营，我们是物流新势力。")]),this._v(" "),s("p",{staticClass:"downloadAPP"},[s("a",{attrs:{target:"_blank",href:"http://dl.gdzxjy.net/web/dl_broker.html"}},[this._v("下载经纪人APP >>")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"conApp-right fr"},[i("div",{staticClass:"app-title"},[t._v("经纪人端下载")]),t._v(" "),i("p",{staticClass:"desc-txt"},[t._v("智慧整车物流交易平台引领者")]),t._v(" "),i("div",{staticClass:"dow-QRcode clearFix"},[i("div",{staticClass:"QRcode fl"},[i("img",{attrs:{src:"http://dl.gdzxjy.net/web/css/img/jingjiren.png",alt:"",width:"100%",height:"100%"}})]),t._v(" "),i("div",{staticClass:"app-version fl"},[i("p",{staticClass:"android"},[i("a",{attrs:{href:"http://dl.gdzxjy.net/download/tbroker/TBrokerClient_Setup.apk"}},[t._v("Android版下载")])]),t._v(" "),i("p",{staticClass:"iphone"},[i("a",{attrs:{href:"javascript:;"}},[t._v("iPhone版(敬请期待)")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"conIfo clearFix"},[s("div",{staticClass:"con-symbol fl"},[s("img",{attrs:{src:"/static/img/product3.png",alt:"",width:"43%"}})]),this._v(" "),s("div",{staticClass:"con-desc fr"},[s("h3",{staticClass:"descTitle"},[this._v("中象司机")]),this._v(" "),s("p",{staticClass:"descContent"},[this._v("是一款服务广大货车司机朋友的交易软件，有找货需求的司机可使用此软件快捷接单，快速找到满足自己需求的货源订单；优质货源，轻松配货，让货运更简单。")]),this._v(" "),s("p",{staticClass:"downloadAPP"},[s("a",{attrs:{target:"_blank",href:"http://dl.gdzxjy.net/web/dl_driver.html"}},[this._v("下载司机APP >>")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"conApp-right fr"},[i("div",{staticClass:"app-title"},[t._v("司机端下载")]),t._v(" "),i("p",{staticClass:"desc-txt"},[t._v("有车即运，海量货源实时更新")]),t._v(" "),i("div",{staticClass:"dow-QRcode clearFix"},[i("div",{staticClass:"QRcode fl"},[i("img",{attrs:{src:"http://dl.gdzxjy.net/web/css/img/siji.png",alt:"",width:"100%",height:"100%"}})]),t._v(" "),i("div",{staticClass:"app-version fl"},[i("p",{staticClass:"android"},[i("a",{attrs:{href:"http://dl.gdzxjy.net/download/driver/DriverClient_Setup.apk"}},[t._v("Android版下载")])]),t._v(" "),i("p",{staticClass:"iphone"},[i("a",{attrs:{href:"javascript:;"}},[t._v("iPhone版(敬请期待)")])])])])])}]};var m=i("VU/8")({data:function(){return{bannerImg:{consignor:"/static/img/product/Consignor.jpg",broker:"/static/img/product/broker.jpg",driver:"/static/img/product/driver.jpg"},bannerSrc:"/static/img/product/Consignor.jpg",active_product:"consignor",conAPP:{consignor:["/static/img/product/iphone1.png","/static/img/product/iphone2.png","/static/img/product/iphone3.png","/static/img/product/iphone4.png","/static/img/product/iphone5.png"],broker:["/static/img/product/iphone1.png","/static/img/product/iphone2.png","/static/img/product/iphone3.png","/static/img/product/iphone4.png","/static/img/product/iphone5.png"],driver:["/static/img/product/iphone1.png","/static/img/product/iphone2.png","/static/img/product/iphone3.png","/static/img/product/iphone4.png","/static/img/product/iphone5.png"]}}},components:{},methods:{getContent:function(t){this.active_product=t,this.bannerSrc=this.bannerImg[t]}}},_,!1,function(t){i("X958")},"data-v-0712bab8",null).exports,u={data:function(){return{newsList:[],total:null,pageSize:6}},created:function(){var t=this,s="/zxwebsite//zxnews/content/manager/newsList?page=1&pagesize="+this.pageSize;this.axios.get(s).then(function(s){t.newsList=s.data.Rows,t.total=s.data.Total})},components:{},filters:{releaseTime:function(t){return t.substring(0,10)}},methods:{currentChange:function(t){this.pageSize=6*t,this.getNewsContent()},prevClick:function(){this.pageSize-=6,this.getNewsContent()},nextClick:function(){this.pageSize+=6,this.getNewsContent()},getNewsContent:function(){var t=this,s="/zxwebsite//zxnews/content/manager/newsList?page=1&pagesize="+this.pageSize;this.axios.get(s).then(function(s){var i=s.data.Rows;6!==t.pageSize&&i.splice(0,t.pageSize-6),t.newsList=i}),document.body.scrollTop=500,document.documentElement.scrollTop=500}}},h={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"latest-news"},[i("div",{staticClass:"max1200"},[i("ul",t._l(t.newsList,function(s,a){return i("li",{key:a,staticClass:"news-item"},[i("div",{staticClass:"news-box clearFix"},[i("div",{staticClass:"news-cover"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.fImage,expression:"item.fImage"}],attrs:{src:s.fImage,alt:"",width:"100%",height:"100%"}})]),t._v(" "),i("div",{staticClass:"news-content fl"},[i("b",{staticClass:"news-date"},[t._v(t._s(t._f("releaseTime")(s.fReleaseTime)))]),t._v(" "),i("router-link",{staticClass:"router-newsTitle",attrs:{to:{name:"newsDetails",query:{id:s.fId}},"active-class":""}},[i("h2",{staticClass:"news-title"},[t._v(t._s(s.fTitle))])]),t._v(" "),i("p",{staticClass:"news-tags"},[t._v(t._s(s.fTags))]),t._v(" "),i("router-link",{staticClass:"router-more",attrs:{to:{name:"newsDetails",query:{id:s.fId}},"active-class":""}},[i("span",{staticClass:"news-more"},[t._v("MORE")])])],1)])])}),0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"news-pagination"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.currentChange,"prev-click":t.prevClick,"next-click":t.nextClick}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"/static/img/new1.jpg",width:"100%",height:"100%"}}),this._v(" "),s("div",{staticClass:"banner-text"},[s("h2",[this._v("新闻中心")]),this._v(" "),s("h3",[this._v("news centre")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"news-dynamic"},[s("h2",[this._v("新闻动态")]),this._v(" "),s("h3",[this._v("logistics redefined")])])}]};var g=i("VU/8")(u,h,!1,function(t){i("//FG"),i("Szwg")},"data-v-a485ccfa",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container"},[s("h1",[this._v("中象福达")])])}]};var f=i("VU/8")({data:function(){return{}},components:{}},C,!1,function(t){i("HWbb")},"data-v-0a334b79",null).exports,b={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"company-culture"},[i("div",{staticClass:"max1200"},[t._m(2),t._v(" "),i("div",{staticClass:"culture-content"},[i("superslide",{staticClass:"slideBox",attrs:{options:t.cultureOptions}},[i("div",{staticClass:"culture-bd"},[i("ul",[i("li",[i("div",{staticClass:"company-box"},[i("img",{attrs:{src:"/static/img/about2.jpg",width:"100%"}}),t._v(" "),i("h3",[t._v("企业宗旨")]),t._v(" "),i("p",[t._v("客户至上 服务为先 效率第一")])])]),t._v(" "),i("li",[i("div",{staticClass:"company-box"},[i("img",{attrs:{src:"/static/img/about3.png",width:"100%"}}),t._v(" "),i("h3",[t._v("企业精神")]),t._v(" "),i("p",[t._v("一流团队 一流服务 一流品牌")])])]),t._v(" "),i("li",[i("div",{staticClass:"company-box"},[i("img",{attrs:{src:"/static/img/about4.png",width:"100%"}}),t._v(" "),i("h3",[t._v("企业作风")]),t._v(" "),i("p",[t._v("勤勉务实 专注创新 信任担当")])])])])])])],1)])]),t._v(" "),i("div",{staticClass:"team-introduce"},[i("div",{staticClass:"max1200"},[t._m(3),t._v(" "),i("div",{staticClass:"team-content"},[i("superslide",{staticClass:"team-slideBox",attrs:{options:t.teamOptions}},[i("div",{staticClass:"team-bd"},[i("a",{staticClass:"tPrev",attrs:{href:"javascript:void(0)"}}),t._v(" "),i("ul",[i("li",{staticClass:"clearFix"},[i("div",{staticClass:"pic fl"},[i("img",{attrs:{src:"/static/img/team1.jpg"}})]),t._v(" "),i("div",{staticClass:"description fl"},[i("div",{staticClass:"des-up"},[i("h3",[t._v("潘奇")]),t._v(" "),i("p",[t._v("中象福达创始人兼CEO")])]),t._v(" "),i("div",{staticClass:"des-mid"},[i("p",[t._v("北京大学光华管理学院MBA")]),t._v(" "),i("p",[t._v("香港大学OHRM研究生")]),t._v(" "),i("p",[t._v("武汉科技大学法学学士")])]),t._v(" "),i("div",{staticClass:"des-down"},[i("p",[t._v("潘奇先生是中国智慧整车物流和网络货运发展的践行者，2019年创立中象福达，同年8月中象福达交易平台正式上线，致力于解决行业发展痛点，促进互联网和整车物流的深度融合，用大数据为中国公路整车运输加上腾飞的科技翅膀，帮助和保障货运司机个体效益，助力物流行业平台化高效发展，实现社会资源集约高效。\n                                            ")])])])]),t._v(" "),i("li",{staticClass:"clearFix"},[i("div",{staticClass:"pic fl"},[i("img",{attrs:{src:"/static/img/u145.jpg"}})]),t._v(" "),i("div",{staticClass:"description fl"},[i("div",{staticClass:"des-up"},[i("h3",[t._v("小伙伴")])]),t._v(" "),i("div",{staticClass:"des-mid"},[i("p",[t._v("三大核心部门：研发部、运营中心和市场部")]),t._v(" "),i("p",[t._v("我们坚持自主创新的精神、坚持求真务实的态度、坚持合作共赢的理念；")])]),t._v(" "),i("div",{staticClass:"des-down"},[i("p",[t._v("我们深耕市场、服务市场、回归市场，让物流更简单，让生活更美好，”成为智慧整车物流交易平台引领者“是我们努力的方向和目标。")])])])])]),t._v(" "),i("a",{staticClass:"tNext",attrs:{href:"javascript:void(0)"}})])])],1)])]),t._v(" "),i("div",{staticClass:"company-culture"},[i("div",{staticClass:"max1200"},[t._m(4),t._v(" "),i("div",{staticClass:"culture-content"},[i("superslide",{staticClass:"slideBox",attrs:{options:t.cultureOptions}},[i("div",{staticClass:"culture-bd"},[i("ul",[i("li",[i("div",{staticClass:"company-box"},[i("img",{attrs:{src:"/static/img/honor1.png",width:"100%",height:"281px"}}),t._v(" "),i("h3",[t._v("计算机软件著作权")])])]),t._v(" "),i("li",[i("div",{staticClass:"company-box"},[i("img",{attrs:{src:"/static/img/honor2.png",width:"100%",height:"281px"}}),t._v(" "),i("h3",[t._v("广东省物流行业协会会员单位")])])]),t._v(" "),i("li",[i("div",{staticClass:"company-box"},[i("img",{attrs:{src:"/static/img/honor3.png",width:"100%",height:"281px"}}),t._v(" "),i("h3",[t._v("增值电信业务经营许可证")])])])])])])],1)])]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"/static/img/about.jpg",width:"100%",height:"100%"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"platform"},[i("div",{staticClass:"max1200 clearFix"},[i("div",{staticClass:"platform-info fl"},[i("div",{staticClass:"platform-title"},[i("img",{attrs:{src:"/static/img/about-icont1.png",alt:"",width:"170px"}})]),t._v(" "),i("div",{staticClass:"platform-content"},[i("div",{staticClass:"advantage"},[i("img",{attrs:{src:"/static/img/hfw20.png",alt:"",width:"75%"}}),t._v(" "),i("p",[t._v("全国24小时服务调度")])]),t._v(" "),i("div",{staticClass:"advantage"},[i("img",{attrs:{src:"/static/img/anqhd.png",alt:"",width:"65%"}}),t._v(" "),i("p",[t._v("一站式安全无忧运输")])]),t._v(" "),i("div",{staticClass:"advantage"},[i("img",{attrs:{src:"/static/img/zdpw.png",alt:"",width:"68%"}}),t._v(" "),i("p",[t._v("大数据决策分析赋能")])]),t._v(" "),i("p",{staticClass:"content-info"},[t._v("平台致力于服务公路整车运输市场和构建集约高效的生态环境；我们以线上平台为依托，努力整合行业资源，将线上线下业务场景相结合，打造公开透明的交易环境，并紧跟时代步伐，利用好科技技术，保障资金、货物、运输安全。")])])]),t._v(" "),i("div",{staticClass:"platform-symbol fl"},[i("img",{attrs:{src:"/static/img/about1.png",alt:"",width:"80%"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"culture-title"},[s("img",{attrs:{src:"/static/img/about-icont2.png",alt:"",width:"170"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"team-title"},[s("img",{attrs:{src:"/static/img/about-icont3.png",alt:"",width:"170"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"culture-title"},[s("img",{attrs:{src:"/static/img/about-icont3-1.png",alt:"",width:"170"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"contact-us"},[i("div",{staticClass:"max1200 clearFix"},[i("div",{staticClass:"contact-info fr"},[i("div",{staticClass:"contact-title"},[i("img",{attrs:{src:"/static/img/about-icont4.png",alt:"",width:"170"}})]),t._v(" "),i("div",{staticClass:"contact-content"},[i("p",[t._v("电话：020-39922019")]),t._v(" "),i("p",[t._v("邮件：service@gdzxjy.com.cn")]),t._v(" "),i("p",[t._v("地址：广州市番禺区东环街番禺大道北537号番山创业中心")]),t._v(" "),i("p",[t._v("邮编：511400")])])]),t._v(" "),i("div",{staticClass:"conpany-map"},[i("iframe",{attrs:{src:"../static/map.html",width:"750",height:"410",frameborder:"no;",scrolling:"no"}})])])])}]};var x=i("VU/8")({data:function(){return{cultureOptions:{mainCell:".culture-bd ul",autoPlay:!0,effect:"leftMarquee",vis:3,interTime:25},teamOptions:{mainCell:".team-bd ul",autoPlay:!1,prevCell:".tPrev",nextCell:".tNext",effect:"leftLoop"}}},components:{}},b,!1,function(t){i("SqIG")},"data-v-0502e507",null).exports,w={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"join-menu"},[i("div",{staticClass:"max1200 clearFix"},[i("div",{staticClass:"campus-recruitment fl"},[i("div",{staticClass:"campus-logo",class:"campus"===t.joinMenu?"active-menu":"",on:{click:function(s){return t.getClass("campus")}}},[i("img",{attrs:{src:"/static/img/campus-recruitment.png",alt:"",width:"100%"}})])]),t._v(" "),i("div",{staticClass:"social-recruitment fl"},[i("div",{staticClass:"social-logo",class:"social"===t.joinMenu?"active-menu":"",on:{click:function(s){return t.getClass("social")}}},[i("img",{attrs:{src:"/static/img/social-recruitment.png",alt:"",width:"80%"}})])])])]),t._v(" "),i("div",{staticClass:"campus-content",style:"campus"===t.joinMenu?"display:block;":"display:none;"},[i("div",{staticClass:"campus-process"},[i("h3",{staticClass:"process-title"},[t._v("招聘流程")]),t._v(" "),i("ul",{staticClass:"clearFix"},t._l(t.campusProcess,function(s,a){return i("li",{key:a,staticClass:"fl"},[i("div",[i("img",{attrs:{src:s.img,alt:"",width:"90px"}})]),t._v(" "),i("p",[t._v(t._s(s.name))])])}),0)]),t._v(" "),i("div",{staticClass:"campus-stroke"},[i("h3",{staticClass:"stroke-title"},[t._v("招聘行程")]),t._v(" "),i("div",{staticClass:"stroke-box clearFix"},t._l(t.campusStroke,function(s,a){return i("div",{key:a,staticClass:"stroke-area fl"},[i("h3",{staticClass:"area-title"},[t._v(t._s(s.area))]),t._v(" "),t._l(s.city,function(s,a){return i("p",{key:a,staticClass:"city"},[i("span",{staticClass:"time"},[t._v(t._s(s.time))]),t._v(" "),i("span",{staticClass:"school"},[i("em",[t._v(t._s(s.place))]),t._v(" "+t._s(s.school))])])})],2)}),0)]),t._v(" "),i("div",{staticClass:"campus-post"},[i("h3",{staticClass:"post-title"},[t._v("招聘岗位")]),t._v(" "),i("div",{staticClass:"post-box clearFix"},t._l(t.campusPost,function(s,a){return i("div",{key:a,staticClass:"post-type fl"},[i("h3",{staticClass:"type-name"},[t._v(t._s(s.typeName))]),t._v(" "),t._l(s.postName,function(s,a){return i("p",{key:a,staticClass:"type-item",domProps:{textContent:t._s(s)}})})],2)}),0)])]),t._v(" "),i("div",{staticClass:"social-content",style:"social"===t.joinMenu?"display:block;":"display:none;"},t._l(t.socialContent,function(s,a){return i("div",{key:a,staticClass:"social-jobs"},[i("div",{staticClass:"jobs-type"},[i("p",[i("span",{staticClass:"type-name"},[t._v(t._s(s.typeName))]),i("strong",[t._v(t._s(s.postName))])])]),t._v(" "),i("h3",{staticClass:"jobs-desc clearFix"},[t._v(t._s(s.jobDesc)),i("span",{staticClass:"fr",on:{click:function(i){return t.isActive(s)}}},[t._v("详情"),i("i",{class:s.details?"details-active":""})])]),t._v(" "),i("div",{staticClass:"jobs-detailed",style:s.details?"display:block;":"display:none;"},[i("h3",[t._v("岗位职责")]),t._v(" "),t._l(s.jobDetails.jobRes,function(s,a){return i("p",{key:a},[t._v(t._s(s))])}),t._v(" "),i("h3",[t._v("职位要求")]),t._v(" "),t._l(s.jobDetails.jobReq,function(s){return i("p",{key:s},[t._v(t._s(s))])})],2)])}),0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"/static/img/adjust.jpg",width:"100%",height:"100%"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"submit-resume clearFix"},[i("div",{staticClass:"contactInfo fl"},[i("p",[t._v("联系人："),i("span",[t._v("姚女士 18620873798")])]),t._v(" "),i("p",[t._v("简历命名格式："),i("span",[t._v("姓名+应聘职位+学校+专业+学历")])]),t._v(" "),i("p",[t._v("简历投递邮箱："),i("span",[t._v("hr@gxzxjy.com.cn")])]),t._v(" "),i("div",{staticClass:"submit"},[i("a",{attrs:{href:"mailto:hr@gxzxjy.com.cn"}},[t._v("投递简历")])])]),t._v(" "),i("div",{staticClass:"companyLogo fr"},[i("img",{attrs:{src:"/static/img/about6.png",alt:""}})])])}]};var y=i("VU/8")({data:function(){return{joinMenu:"campus",campusProcess:[{img:"/static/img/tdjl.png",name:"投递简历"},{img:"/static/img/jlcs.png",name:"简历初筛"},{img:"/static/img/ms.png",name:"线下宣讲"},{img:"/static/img/xxxj.png",name:"面试"},{img:"/static/img/qy.png",name:"签约"}],campusStroke:[{area:"湖南",city:[{time:"2019年10月16",place:"长沙",school:"长沙理工大学"},{time:"2019年10月17",place:"湘潭",school:"湘潭大学"},{time:"2019年10月17",place:"湘潭",school:"湖南科技大学"}]},{area:"广东",city:[{time:"2019年10月16",place:"佛山",school:"广东东软学院"},{time:"2019年10月22",place:"广州",school:"华南农业大学"}]},{area:"湖北",city:[{time:"2019年10月16",place:"武汉",school:"湖北商贸学院"},{time:"2019年10月18",place:"武汉",school:"武汉科技大学"}]}],campusPost:[{typeName:"研发类",postName:["Java工程师","IOS工程师","前端工程师","需求分析师","测试工程师","运维工程师"]},{typeName:"市场类",postName:["市场专员","大客户专员","客户维护专员","品牌运营专员"]},{typeName:"运营类",postName:["客服专员","运营专员","车辆调度专员"]},{typeName:"职能类",postName:["财务专员","人力行政专员"]}],socialContent:[{typeName:"职能类",postName:"总监助理",jobDesc:"要求：大专 1年以上文秘、总助、市场助理经验",details:!1,jobDetails:{jobRes:["1、协助总监进行部门管理，协调部门内外的工作，完成日常工作的追踪及汇总；","2、协助总监运营类相关计划、工作安排、日程提醒；","3、项目跟进，内外部对接，相关业务数据的整理与分析，部门阶段总结报告；","4、处理部门日常行政事务，如部门会议、活动等；","5、服从领导安排；"],jobReq:["1、学历：大专及以上；","2、年龄：22-30岁；","3、专业：市场营销、企业管理、文秘等相关专业；","4、工作经验：一年以上文秘、总助、市场、销售助理经验，有物流行业工作经验者优先考虑；","5、工作技能：计算机操作熟练，文笔能力强，社交能力强，责任心强；"],jobLocation:"广州"}},{typeName:"运营类",postName:"运营经理/主管",jobDesc:"要求：本科 3年以上工作经验，有物流行业工作经验者优先",details:!1,jobDetails:{jobRes:["1、协助运营中心负责人开展运营工作；","2、负责公司物流平台运营，发展客户资源和运力资源；","3、负责平台运营商管理体系建立与优化，组织起草相关制度文件，并督导执行；","4、负责公司全国各省运营中心搭建，推动物流服务网络规划和落地；","5、完成上级领导指派其他工作。"],jobReq:["1、统招本科及以上学历，有物流公司工作经验者优先；","2、擅长使用各项数据工具，有一定数据分析能力者优先；","3、抗压能力强，学习能力强，适应能力强，沟通表达能力较强，有较强的逻辑思维能力，能从全局的角度看问题并协调各方达成一致。"],jobLocation:"广州"}},{typeName:"运营类",postName:"物流调度员",jobDesc:"要求：本科 1年以上工作经验，运输行业工作经验者优先",details:!1,jobDetails:{jobRes:["1、负责日常车辆调度工作，对调度部主管负责；","2、根据时间和发货量合理规划配送车辆和路线；","3、处理运输过程中出现的问题，以及指导司机及时的应对；","4、对配送司机进行有效管理，以使所运送货物安全及时的到达客户手中，并不断提升配送司机的服务水平；","5、管理客户的日常投诉问题，及时协调人员和车辆，调整司机路线；","6、负责协调生产、配送、客户之间的沟通协调工作，提高客户满意度；","7、配合公司对物流司机的筛选和考核，并对存在问题提出有效解决方法。"],jobReq:["1、全面负责物流部日常执行工作，确保物流工作的顺畅进行；","2、一定的成本管控能力，不断优化线路分配的合理性，控制物流运营成本；","3、工作认真负责，积极收集内部及客户对物流配送的评价，及时调整物流配送过程中不合理的线路安排。","4、具有较强的分析能力和协调能力，具有团队精神，能够积极和其它部门协调，提高工作效率。"],jobLocation:"广州"}},{typeName:"运营类",postName:"客服专员",jobDesc:"要求：大专 一年以上的客服经验",details:!1,jobDetails:{jobRes:["1、接受用户咨询，记录用户咨询、审核、投诉等内容，按照相应流程给予用户积极反馈;","2、能及时发现用户的需求及意见，并记录整理及分析；","3、为用户提供完整准确的方案及信息，解决用户问题，提供高质量服务;","4、良好的工作执行力，严格按规范及流程进行工作或相关操作;","5、与同事共享信息，进行知识积累，提供流程改善依据;","6、积极主动完成领导安排的其它事项;"],jobReq:["1、大专以上学历，一年以上的客服经验；","2、具有较强的沟通、分析、解决问题能力；具有较强的责任心和良好的服务意识；具有良好的团队协作意识；","3、熟练使用 office 等办公软件；"],jobLocation:"广州"}},{typeName:"市场类",postName:"市场专员",jobDesc:"要求：大专 1年以上工作经验或有销售行业工作经验优先",details:!1,jobDetails:{jobRes:["1、负责开发客户，保证达成签约、平台入驻等业务指标；","2、以地推方式为主，对新客户进行信息收集、拜访、提出解决方案；","3、时刻关注并满足客户需求，结合公司的发展，扩大与客户的区域合作范围；","4、维护与客户良好的合作关系，确保保持长期稳定的业务关系；"],jobReq:["1、大专以上学历，专业不限，懂粤语，热爱销售行业优先；","2、1年以上工作经验，或有销售行业工作经验优先；","3、性格外向，表达能力强，具有优秀的沟通交流能力；","4、有责任心，能够承受一定的工作压力，勇于挑战高薪；"],jobLocation:"广州"}},{typeName:"市场类",postName:"大客户拓展",jobDesc:"要求：大专 3年以上工作经验，运输行业工作经验者优先",details:!1,jobDetails:{jobRes:["1、开发企业或物流公司大客户，定期维护并跟进解决客户问题；","2、重点拜访关键客户，听取客户意见、需求，向客户提供定制化服务；","3、审核客户资料，提供报价、合同洽谈、合同签订等平台入驻商务工作；"],jobReq:["1、全日制大专及以上学历，专业不限；","2、具有优秀的沟通交流能力，抗压能力强；"],jobLocation:"广州"}},{typeName:"研发类",postName:"前端开发工程师",jobDesc:"要求：本科 有1-3年前端开发经验",details:!1,jobDetails:{jobRes:["1、负责公司现有网站的前后台程序开发与维护；","2、配合网站需求进行公司网站程序开发，能根据公司需求开发各模块功能；","3、为有利于搜索引擎搜录及对网站的推广，能对程序进行优化，对SEO了解；","4、能胜任前端工程师工作，和后端JAVA工程师合作开发公司的核心业务系统；","5、懂小程序、公众号二次开发，对所开发的软件模块代码进行维护，解决开发过程中的技术问题；"],jobReq:["1、熟练使用各种Web前端技术，包括HTML(5)/CSS(3)/Javascript等，并有相关的项目开发经验或成果；","2、熟悉主流框架(vue、react、Angular)，熟悉前端工程化，熟悉git，gulp或webpack等工具；","3、有基于Ajax应用的开发经验，有NodeJS/Java开发经验，或者有移动端开发经验；","4、深刻理解Web标准，对可用性、可访问性等相关知识有实际的了解；","5、对算法、数据结构、建模有一定了解；","6、关注新事物、新技术，有较强的学习能力，喜欢挑战，并且个性乐观开朗，逻辑性强，善于和各种背景的人合作。"],jobLocation:"广州"}},{typeName:"研发类",postName:"运维工程师",jobDesc:"要求：本科 3年以上工作经验，有维护大型服务器经验者优先",details:!1,jobDetails:{jobRes:["1、负责公司网络系统（交换机、防火墙、负载均衡设备、IPS等）的安装调试、管理维护；","2、负责公司产品系统的安装、升级、监控，保证系统的稳定；","3、负责部署相关应用平台，并编写平台的维护技术手册；","4、负责配合开发测试搭建测试平台，协助开发设计、推行、实施和持续改进；","5、负责相关故障、疑难问题排查处理，编制汇总故障、问题，定期提交汇总报告；","6、负责解决运营平台日常运行中出现的各种故障，包括操作系统、数据库、网络及硬件设备的故障；","7、负责平台设备的资源调配和系统安全、数据备份，完善运营系统的日志备份机制；","8、负责运营业务及平台设备的各项数据监控，如流量、负载，完善并建立应用系统和服务的日常监控系统，协助开发团队完善网管软件；"],jobReq:["1、本科以上学历，计算机或者相关专业，4年以上工作经验，有维护大型服务器经验者优先考虑；","2、熟悉Linux系统，了解网络基本技术，熟悉TCP/IP协议路由、VPN、NAT、防火墙等基本原理；","3、熟悉WEB相关技术，包括apache,nginx,tomcat,jboss等应用的管理、配置和优化；","4、熟悉shell,perl,python，java,php脚本或开发语言一种以上，对sql语句有一定的了解；","5、熟悉网络设备管理与维护，网络设备的配置与优化，如常用的思科交换机/路由器配置,有CCNA、CCNP证书优先；","6、责任心强，积极主动，热爱学习，有良好的沟通能力和团队合作能力,能够承受工作压力；"],jobLocation:"广州"}},{typeName:"研发类",postName:"Android开发工程师",jobDesc:"要求：本科 一年以上Android项目开发经验",details:!1,jobDetails:{jobRes:["1、根据公司要求基于Android系统平台进行应用程序开发设计、调试工作；","2、根据项目任务计划按时完成软件高质量编码工作；","3、规范文档的编写、维护，以及其他与项目相关工作；","4、按照开发流程编写相应模块的设计文档；","5、按时按需完成客户端软件的维护及更新；"],jobReq:["1、本科以上学历，计算机、通讯相关专业，有扎实的Java语言基础；","2、一年以上Android项目开发经验，扎实的Java语言基础，熟悉OOP思想和设计模式；","3、熟悉Android框架及各种特性，熟悉网络编程、安卓UI框架及相关开发工具；","4、熟悉Android开源社区流行项目和技术走向；5.具备良好的分析解决问题能力，能独立承担任务和有系统进度把控能力；","【加分项】1、有大型终端软件架构能力，有上线产品者优先；2、有技术博客网站,或定期参与业内交流；3、长期混开源社区，参与知名项目；4、其它任何你觉得独特的技能或经验。"],jobLocation:"广州"}}]}},components:{},methods:{getClass:function(t){this.joinMenu=t},isActive:function(t){t.details=!t.details}}},w,!1,function(t){i("37Df")},"data-v-01a3bb59",null).exports,j={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"news"},[i("div",{staticClass:"max1200"},[i("div",{staticClass:"news-back"},[i("p",[i("span",{staticClass:"news-centre",on:{click:function(s){return t.goBack()}}},[t._v("新闻中心")]),t._v(" >\n                    "),i("span",{staticClass:"news-title"},[t._v(t._s(t.newsDetails.fTitle))])])]),t._v(" "),i("div",{staticClass:"news-content"},[i("h2",[t._v(t._s(t.newsDetails.fTitle))]),t._v(" "),i("p",{staticClass:"news-desc"},[i("span",{staticClass:"news-date"},[t._v(t._s(t._f("releaseTime")(t.time)))]),t._v(" "),i("span",[t._v("- - 中象福达")])]),t._v(" "),i("div",{staticClass:"news-article",domProps:{innerHTML:t._s(t.newsDetails.fContent)}})])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"/static/img/newsbanner.jpg",alt:"",width:"100%"}})])}]};var k=i("VU/8")({data:function(){return{newsDetails:{},time:""}},created:function(){var t=this,s="/zxwebsite//zxnews/content/manager/news?fId="+this.$route.query.id;this.axios.get(s).then(function(s){t.newsDetails=s.data.news,t.time=t.newsDetails.fReleaseTime})},components:{},methods:{goBack:function(){this.$router.go(-1)}},filters:{releaseTime:function(t){return t.substring(0,10)}}},j,!1,function(t){i("OE2q")},"data-v-12cdd459",null).exports,z=i("zL8q"),E=i.n(z),N=(i("tvR6"),i("jylb")),A=i.n(N),R=i("mtWM"),P=i.n(R),$=i("AXdl");a.default.use(E.a),a.default.use(A.a),P.a.defaults.baseURL="http://mgr.gdzxjy.cn/",a.default.prototype.axios=P.a,a.default.use($.a),a.default.use(r.a);var F=new r.a({linkActiveClass:"active",routes:[{path:"/",redirect:{name:"index"}},{path:"/ ",name:"index",component:p},{path:"/product",name:"product",component:m},{path:"/news",name:"news",component:g},{path:"/newsDetails",name:"newsDetails",component:k},{path:"/zxfuda",name:"zxfuda",component:f},{path:"/about",name:"about",component:x},{path:"/join",name:"join",component:y}]});i("6aoz");F.afterEach(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),a.default.config.productionTip=!1,new a.default({el:"#app",router:F,components:{App:c},template:"<App/>"})},NLA8:function(t,s){},OE2q:function(t,s){},SqIG:function(t,s){},Szwg:function(t,s){},X958:function(t,s){},tvR6:function(t,s){},xCGv:function(t,s){}},["NHnr"]);