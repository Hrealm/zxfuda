<template>
    <div class="container">
        <!-- <h1>产品中心</h1> -->
        <!-- banner begin -->
        <div class="banner">
            <img :src="bannerSrc" alt="" width="100%" height="100%">
        </div>
        <!-- banner end -->

        <!-- product-menu begin-->
        <div class="product-menu">
            <div class="max1200">
                <div class="menu-wrap">
                    <div class="menu-item" @click="getContent('consignor')">
                        <div class="image consignor" :class="active_product === 'consignor' ? 'active-consignor' : ''"></div>
                        <span :class="active_product === 'consignor' ? 'active-span' : ''">中象货主</span>
                    </div>
                    <div class="menu-item" @click="getContent('broker')">
                        <div class="image broker" :class="active_product === 'broker' ? 'active-broker' : ''"></div>
                        <span :class="active_product === 'broker' ? 'active-span' : ''">中象经纪人</span>
                    </div>
                    <div class="menu-item" @click="getContent('driver')">
                        <div class="image driver" :class="active_product === 'driver' ? 'active-driver' : ''"></div>
                        <span :class="active_product === 'driver' ? 'active-span' : ''">中象司机</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- product-menu end -->

        <!-- product-content begin -->
        <div class="product-content">
            <div class="max1200">
                <!-- consignor -->
                <div class="product-consignor" :style="active_product === 'consignor' ? 'display:block;' : 'display:none;'">
                    <div class="conIfo clearFix">
                        <div class="con-symbol fl">
                            <img src="/static/img/product1.png" alt="" width="43%">
                        </div>
                        <div class="con-desc fr">
                            <h3 class="descTitle">中象货主</h3>
                            <p class="descContent">是一款服务广大货主个人、企业的交易软件，有找车需求的货主可使用此软件快捷发布货源订单，快速找到满足运输需求的车辆和司机；一秒下单，一分钟响应，十分钟成交，您的整车物流专家。</p>
                            <p class="downloadAPP"><a target="_blank" href="http://dl.gdzxjy.net/web/dl_trader.html">下载货主APP >></a></p>
                        </div>
                    </div>
                    <div class="conApp">
                        <div class="max1200  clearFix">
                            <div class="conApp-left fl">
                                <el-carousel :interval="3000" type="card" height="456px" indicator-position="none">
                                    <el-carousel-item style="width:256px;" v-for="(item,index) in conAPP['consignor']" :key="index">
                                        <img :src="item" alt="" width="100%" height="100%">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                            <div class="conApp-right fr">
                                <div class="app-title">货主端下载</div>
                                <p class="desc-txt">有货即发，海量司机一秒响应</p>
                                <div class="dow-QRcode clearFix">
                                    <div class="QRcode fl">
                                        <img src="/static/img/product/huozhu.png" alt="" width="100%" height="100%">
                                    </div>
                                    <div class="app-version fl">
                                        <p class="android"><a href="http://dl.gdzxjy.net/download/trader/TraderClient_Setup.apk">Android版下载</a></p>
                                        <p class="iphone"><a href="javascript:;">iPhone版(敬请期待)</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- broker -->
                <div class="product-broker" :style="active_product === 'broker' ? 'display:block;' : 'display:none;'">
                    <div class="conIfo clearFix">
                        <div class="con-symbol fl">
                            <img src="/static/img/product2.png" alt="" width="43%">
                        </div>
                        <div class="con-desc fr">
                            <h3 class="descTitle">中象经纪人</h3>
                            <p class="descContent">是一款服务广大物流货运部、信息部、仓库管理员等中间商个体的交易软件，经纪人可以使用本软件可以快捷完成交易、有效管理自己的交易数据和资源；服务为本，效率为王，品牌经营，我们是物流新势力。</p>
                            <p class="downloadAPP"><a target="_blank" href="http://dl.gdzxjy.net/web/dl_broker.html">下载经纪人APP >></a></p>
                        </div>
                    </div>
                    <div class="conApp">
                        <div class="max1200  clearFix">
                            <div class="conApp-left fl">
                                <el-carousel :interval="3000" type="card" height="456px" indicator-position="none">
                                    <el-carousel-item style="width:256px;" v-for="(item,index) in conAPP['broker']" :key="index">
                                        <img :src="item" alt="" width="100%" height="100%">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                            <div class="conApp-right fr">
                                <div class="app-title">经纪人端下载</div>
                                <p class="desc-txt">智慧整车物流交易平台引领者</p>
                                <div class="dow-QRcode clearFix">
                                    <div class="QRcode fl">
                                        <img src="/static/img/product/jingjiren.png" alt="" width="100%" height="100%">
                                    </div>
                                    <div class="app-version fl">
                                        <p class="android"><a href="http://dl.gdzxjy.net/download/tbroker/TBrokerClient_Setup.apk">Android版下载</a></p>
                                        <p class="iphone"><a href="javascript:;">iPhone版(敬请期待)</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- driver -->
                <div class="product-driver" :style="active_product === 'driver' ? 'display:block;' : 'display:none;'">
                    <div class="conIfo clearFix">
                        <div class="con-symbol fl">
                            <img src="/static/img/product3.png" alt="" width="43%">
                        </div>
                        <div class="con-desc fr">
                            <h3 class="descTitle">中象司机</h3>
                            <p class="descContent">是一款服务广大货车司机朋友的交易软件，有找货需求的司机可使用此软件快捷接单，快速找到满足自己需求的货源订单；优质货源，轻松配货，让货运更简单。</p>
                            <p class="downloadAPP"><a target="_blank" href="http://dl.gdzxjy.net/web/dl_driver.html">下载司机APP >></a></p>
                        </div>
                    </div>
                    <div class="conApp">
                        <div class="max1200  clearFix">
                            <div class="conApp-left fl">
                                <el-carousel :interval="3000" type="card" height="456px" indicator-position="none">
                                    <el-carousel-item style="width:256px;" v-for="(item,index) in conAPP['driver']" :key="index">
                                        <img :src="item" alt="" width="100%" height="100%">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                            <div class="conApp-right fr">
                                <div class="app-title">司机端下载</div>
                                <p class="desc-txt">有车即运，海量货源实时更新</p>
                                <div class="dow-QRcode clearFix">
                                    <div class="QRcode fl">
                                        <img src="/static/img/product/huozhu.png" alt="" width="100%" height="100%">
                                    </div>
                                    <div class="app-version fl">
                                        <p class="android"><a href="http://dl.gdzxjy.net/download/driver/DriverClient_Setup.apk">Android版下载</a></p>
                                        <p class="iphone"><a href="javascript:;">iPhone版(敬请期待)</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- product-content end -->

        <!-- 招商 begin -->
        <div class="merchants"></div>
        <!-- 招商 end -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // bannerImg: ['/static/img/product/Consignor.jpg','/static/img/product/broker.png','/static/img/product/driver.png'],
            bannerImg: {
                'consignor': '/static/img/product/Consignor.jpg',
                'broker': '/static/img/product/broker.png',
                'driver': '/static/img/product/driver.png'
            },
            bannerSrc: '/static/img/product/Consignor.jpg',
            active_product: 'consignor',
            conAPP: {
                'consignor': ['/static/img/product/iphone1.png','/static/img/product/iphone2.png','/static/img/product/iphone3.png','/static/img/product/iphone4.png','/static/img/product/iphone5.png'],
                'broker': ['/static/img/product/iphone1.png','/static/img/product/iphone2.png','/static/img/product/iphone3.png','/static/img/product/iphone4.png','/static/img/product/iphone5.png'],
                'driver': ['/static/img/product/iphone1.png','/static/img/product/iphone2.png','/static/img/product/iphone3.png','/static/img/product/iphone4.png','/static/img/product/iphone5.png']
            }

        };
    },
    components: {},
    methods:{
        getContent(product){
            this.active_product = product;
            this.bannerSrc = this.bannerImg[product];
            
        }
    }
};
</script>


<style scoped lang="scss">
.container{
    width: 100%;
    min-height: 100vh;
    // height: 2000px;
    background-color: #fff;
    .banner{
        width: 100%;
        height: 569px;
    }
    .product-menu{
        width: 100%;
        margin-top: 50px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .menu-wrap{
                width: 600px;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .menu-item{
                    width: 120px;
                    text-align: center;
                    cursor: pointer;
                    .image{
                        width: 100px;
                        height: 80px;
                        margin: 0 auto;
                    }
                    .consignor{
                        background: url('../../assets/consignor.png') 50% no-repeat;
                        background-size: 46%;
                    }
                    .broker{
                        background: url('../../assets/broker.png') 50% no-repeat;
                        background-size: 48%;
                    }
                    .driver{
                        background: url('../../assets/driver.png') 50% no-repeat;
                        background-size: 52%;
                    }
                    span{
                        font-size: 18px;
                        color: #141a88;
                    }
                    .active-span{
                        color: #fac01b;
                    }
                    .active-consignor{
                        background: url('../../assets/active-consignor.png') 50% no-repeat;
                        background-size: 46%;
                    }
                    .active-broker{
                        background: url('../../assets/active-broker.png') 50% no-repeat;
                        background-size: 48%;
                    }
                    .active-driver{
                        background: url('../../assets/active-driver.png') 50% no-repeat;
                        background-size: 52%;
                    }
                }
                .menu-item:hover{
                    .consignor{
                        background: url('../../assets/active-consignor.png') 50% no-repeat;
                        background-size: 46%;
                    }
                    .broker{
                        background: url('../../assets/active-broker.png') 50% no-repeat;
                        background-size: 48%;
                    }
                    .driver{
                        background: url('../../assets/active-driver.png') 50% no-repeat;
                        background-size: 52%;
                    }
                    span{
                        color: #fac01b;
                    }
                }
            }
        }
    }
    .product-content{
        width: 100%;
        margin-top: 80px;
        // margin-bottom: 80px;
        .max1200{
            width: 100%;
            margin: 0 auto;
            .conIfo{
                width: 1200px;
                margin: 0 auto;
                .con-symbol{
                    width: 50%;
                    text-align: right;
                    text-align: center;
                }
                .con-desc{
                    width: 50%;
                    .descTitle{
                        color: #333;
                        font-size: 26px;
                        font-weight: normal;
                        margin-bottom: 22px;
                        // text-align: center;
                    }
                    .descContent{
                        font-size: 18px;
                        line-height: 45px;
                        color: #333;
                    }
                    .downloadAPP{
                        font-size: 14px;
                        margin-top: 30px;
                        a{
                            color: #141a88;
                        }
                        a:hover{
                            color: #fac01b;
                        }
                    }
                }
            }
            .conApp{
                margin-top: 80px;
                width: 100%;
                padding: 60px 0;
                background-color: #F4F5F9;
                .max1200{
                    width: 1200px;
                    margin: 0 auto;
                    .conApp-left{
                        width: 518px;
                        margin: 0px 41px;
                    }
                    .conApp-right{
                        width: 600px;
                        text-align: center;
                        margin-top: 20px;
                        .app-title{
                            font-size: 54px;
                            color: #141a88;
                            margin: 15px 0;
                        }
                        .desc-txt{
                            font-size: 32px;
                            color: #333;
                            line-height: 80px;
                        }
                        .dow-QRcode{
                            width: 100%;
                            margin-top: 30px;
                            .QRcode{
                                width: 285px;
                                margin: 0 auto;
                                margin-right: 15px;
                                img{
                                    float: right;
                                    width: 180px;
                                    height: 180px;
                                }
                            }
                            .app-version{
                                width: 285px;
                                margin-left: 15px;
                                p{
                                    font-size: 18px;
                                    color: #141a88;
                                    width: 180px;
                                    height: 46px;
                                    margin: 27px 0;
                                    line-height: 48px;
                                    border: 1px solid #141a88 ;
                                    cursor: pointer;
                                    background-color: transparent;
                                    transition: .5s all;
                                    a{
                                        color: #141a88;
                                    }
                                }
                                p:hover{
                                    color: #fff;
                                    background-color: #141a88;
                                    a{
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .merchants{
        height: 510px;
        background: url('../../assets/merchants.jpg') no-repeat top center #040530;
    }
}
</style>
