<template>
    <div class="container">
        <!-- <h1>首页</h1> -->
        <!-- banner begin -->
        <div class="banner">
            <el-carousel trigger="click" height="650px" indicator-position="none" >
                <el-carousel-item v-for="(item,index) in bannerImg" :key="index">
                    <img :src="item" alt="" width="100%" height="100%">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- banner end -->

        <!-- 中象集团 begin-->
        <div class="company-des">
            <div class="max1200 clearFix">
                <div class="company-left fl">
                    <div class="company-symbol" id="js-scene" >
                        <div data-depth="0.35">
                            <img src="/static/img/index6.png" alt="" width="100%">
                        </div>
                    </div>
                </div>
                <div class="company-right fr">
                    <div class="company-title">
                        <img src="/static/img/index4.png" alt="" width="170px">
                    </div>
                    <div class="company-descTxt">
                        <h3 class="descTitle">大象起舞  行稳致远</h3>
                        <p class="descContent">中象集团是一家专注于公路货物运输综合服务的智慧物流科技集团公司。下属中象集运科技、中象福达供应链管理、中象福达技术研发、中象学院等公司业务主体。公司自主研发、运营整车物流交易平台，旗下拥有“中象福达”物流品牌和全国11个省级运营中心。
                        </p>
                        <p class="descContent">公司秉承共创、共享、共赢的经营理念，以合作加盟的商业模式联合广大物流企业和物流园区共同打造以整车运营为核心业务、以信息科技为智能纽带、以资源效率为配置目标的智慧物流信息平台，实现社会资源集约高效，助力公路货运降本增效。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 中象集团 end -->

        <!-- 创新介绍 begin -->
        <div class="company-innovation">
            <div class="max1200 clearFix">
                <div class="innovation-left fl">
                    <h3 class="inn-desc-title">中象集团</h3>
                    <h3 class="inn-desc-title">不一样的创新。</h3>
                    <!-- <h3 class="inn-desc-title">ZhongXiang FuDa</h3>
                    <h3 class="inn-desc-title">With a Difference.</h3>
                    <h3 class="inn-desc-title">Innovation.</h3> -->
                    <p class="inn-desc-content">秉承共创、共享、共赢的经营理念，中象福达联合广大物流企业和物流园区，共同打造以整车运营为核心业务、以信息科技为智能纽带、以资源效率为配置目标的智慧物流信息平台，从物流运作、物流管理以及物流组织等方面提升物流业的发展水平，推动整车物流智能化、自动化、规范化发展。
                    </p>
                    <h3 class="inn-desc-fooder">货运  发整车</h3>
                    <P class="inn-desc-slogan"> 找中象福达</P>
                </div>
                <div class="innovation-right fr">
                    <ul class="clearFix">
                        <li class="fl">
                            <div class="item-cover">
                                <router-link :to="{name: 'newsDetails', query:{id: '271'}}" active-class="">
                                    <img src="/static/img/cover1.jpg" alt="">
                                </router-link>
                            </div>
                            <h3 class="item-title">年度创新引领奖</h3>
                            <p class="item-content">中象福达作为“互联网+”企业代表受邀参加本次峰会，并荣膺“2019年度创新引领奖”。
                            </p>
                            <div class="item-more"><router-link :to="{name: 'newsDetails', query:{id: '271'}}" active-class="">详情</router-link></div>
                        </li>
                        <li class="fr">
                            <div class="item-cover">
                                <router-link :to="{name: 'newsDetails', query:{id: '243'}}" active-class="">
                                    <img src="/static/img/cover2.jpg" alt="">
                                </router-link>
                            </div>
                            <h3 class="item-title">物流业重新定义</h3>
                            <p class="item-content">通过互联网大数据、云计算、物联网等信息技术与手段，让科技为物流赋能，促进互联网和整车物流的深度融合。
                            </p>
                            <div class="item-more"><router-link :to="{name: 'newsDetails', query:{id: '243'}}" active-class="">详情</router-link></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 创新介绍 end-->

        <!-- 中象福达 begin -->
        <div class="zxfd-des">
            <div class="max1200 clearFix">
                <div class="zxfd-left fl">
                    <div class="zxfd-title">
                        <img src="/static/img/index3.png" alt="" width="170px">
                    </div>
                    <div class="zxfd-descTxt">
                        <h3 class="descTitle">智慧整车物流交易平台引领者</h3>
                        <p class="descContent">中象福达品牌定位为：“智慧整车物流交易平台引领者”；业务定位为：公路货物运输综合服务。
                        </p>
                        <p class="descContent">公司坚持技术与业务双轮驱动、线上与线下协同联动、积极整合货运产业链上下游资源，本着以客户至上、效率优先、服务为王的经营宗旨和勇创“一流团队、一流服务、一流品牌”的企业精神，以开放、创新、合作、务实的崭新姿态积极为客户创造价值、助力公路货运行业降本增效！
                        </p>
                    </div>
                    <div class="zxfd-more"><router-link :to="{name: 'about'}" active-class="">关于中象</router-link></div>
                </div>
                <div class="zxfd-right fr">
                    <div class="zxfd-symbol">
                        <img src="/static/img/index2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 中象福达 end -->

        <!-- 公司总部 begin -->
        <div class="com-position">
            <div class="max1200 clearFix">
                <div class="position-left fl">
                    <img class="positiom-symbol" src="/static/img/index1.jpg" width="80%"/>
                </div>
                <div class="position-right fr">
                    <h3><span><img src="/static/img/indexbj.png" width="18" height="18"/></span>总部</h3>
					<p>以广东为核心辐射全国</p>
					<h3><span><img src="/static/img/indexbj.png" width="18" height="18"/></span>运营中心</h3>
					<p>在武汉、郑州、南宁等中心城市设立11个运营中心，争取到2021年，在全国各个省会城市设立完成运营中心布点。</p>
					<h3><span><img src="/static/img/indexbj.png" width="18" height="18"/></span>运营商</h3>
					<p>以运营中心为支点，以招商加盟模式，在全国各个城市招募运营商，到2021年，公司将招募完成1000家以上运营商，一起抱团合作，共赢发展。</p>
                </div>
            </div>
        </div>
        <!-- 公司总部 end -->

    </div>
</template>

<script>
import Parallax from 'parallax-js'
export default {
    data() {
        return {
            bannerImg: ['/static/img/indexbanner.jpg','/static/img/indexbanner.jpg','/static/img/indexbanner.jpg']
        };
    },
    components: {},
    mounted(){
        var scene = document.getElementById('js-scene');
        var parallaxInstance = new Parallax(scene);
    }
};
</script>

<!-- 修改全局elementUI 样式 -->
<style lang="scss">
.container{
    .banner{
        width: 100%;
        margin-top: -1px;
        .el-carousel__arrow{
            width: 36px;
            height: 80px;
            font-size: 34px;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, .25);
        }
        .el-carousel__arrow:hover{
            background-color: rgba(255, 255, 255, .5);
        }
        .el-carousel__arrow--left{
            left: 13%;
        }
        .el-carousel__arrow--right{
            right: 13%;
        }
    }
}

@media screen and (max-width: 1200px){
    .container{
        .banner{
            .el-carousel__container{
                height: 530px !important;
            }
        }
    }
}
@media screen and (max-width: 760px){
    .container{
        .banner{
            .el-carousel__container{
                height: 485px !important;
            }
        }
    }
}
</style>

<!-- 修改局部样式 -->
<style scoped lang="scss">
.container{
    width: 100%;
    // height: 5000px;
    background-color: #fff;
    .company-des{
        width: 100%;
        margin-top: 60px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .company-left{
                width: 600px;
            }
            .company-right{
                width: 550px;
                padding-left: 50px;
                .company-title{
                    text-align: center;
                }
                .company-descTxt{
                    margin-top: 30px;
                    .descTitle{
                        color: #333;
                        font-size: 22px;
                        font-weight: normal;
                        text-indent: 32px;
                        margin-bottom: 22px;
                    }
                    .descContent{
                        font-size: 18px;
                        line-height: 32px;
                        text-indent: 32px;
                        color: #333;
                        margin-bottom: 12px;
                    }
                }
            }
        }
    }
    .company-innovation{
        widows: 100%;
        margin-top: 20px;
        padding: 40px 0;
        background-color: #F4F5F9;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .innovation-left{
                width: 550px;
                padding-right: 50px;
                .inn-desc-title{
                    color: #141a88;
                    font-size: 22px;
                    line-height: 32px;
                }
                .inn-desc-content{
                    margin-top: 10px;
                    font-size: 18px;
                    line-height: 32px;
                    color: #333;
                }
                .inn-desc-fooder{
                    font-size: 18px;
                    color: #141a88;
                    margin-top: 20px;
                }
                .inn-desc-slogan{
                    font-size: 16px;
                    color: #333;
                }
            }
            .innovation-right{
                width: 600px;
                ul{
                    li{
                        width: 275px;
                        // margin-right: 25px;
                        .item-cover{
                            width: 275px;
                            height: 155px;
                            border-radius: 6px;
                            overflow: hidden;
                            a{
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 6px;
                                transition: all .5s;
                            }
                        }
                        .item-cover:hover{
                            img{
                                width: 108%;
                                height: 108%;
                                transition: all .5s;
                            }
                        }
                        .item-title{
                            margin-top: 5px;
                            font-size: 16px;
                            color: #141a88;
                            line-height: 34px;
                        }
                        .item-content{
                            font-size: 16px;
                            color: #333;
                            line-height: 24px;
                        }
                        .item-more{
                            width: 60px;
                            height: 22px;
                            margin-top: 8px;
                            text-align: center;
                            line-height: 23px;
                            color: #fff;
                            background-color: #0875FF;
                            border-radius: 12px;
                            cursor: pointer;
                            font-size: 10px;
                            transition: .2s all;
                            a{
                                display: block;
                                width: 100%;
                                height: 100%;
                                color: inherit;
                            }
                        }
                        .item-more:hover{
                            border-radius: 5px;
                        }
                    }
                }
            }
        }
    }
    .zxfd-des{
        width: 100%;
        margin-top: 60px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .zxfd-left{
                width: 550px;
                padding-right: 50px;
                .zxfd-title{
                    width: 100%;
                    text-align: center;
                }
                .zxfd-descTxt{
                    margin-top: 30px;
                    .descTitle{
                        color: #333;
                        font-size: 22px;
                        font-weight: normal;
                        text-indent: 32px;
                        margin-bottom: 22px;
                    }
                    .descContent{
                        font-size: 18px;
                        line-height: 32px;
                        text-indent: 32px;
                        color: #333;
                        margin-bottom: 12px;
                    }
                }
                .zxfd-more{
                    width: 100px;
                    height: 26px;
                    margin-top: 40px;
                    text-align: center;
                    line-height: 26px;
                    color: #fff;
                    background-color: #0875FF;
                    border-radius: 22px;
                    // margin-left: 32px;
                    cursor: pointer;
                    font-size: 10px;
                    transition: .2s all;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: inherit;
                    }
                }
                .zxfd-more:hover{
                    border-radius: 5px;
                }
            }
            .zxfd-right{
                width: 600px;
                .zxfd-symbol{
                    width: 600px;
                    height: 438px;
                    overflow: hidden;
                    border-radius: 5px;
                    transition: .2s all;
                    box-shadow: 1px 1px 8px #BBB;
                    img{
                        width: 100%;
                        border-radius: 5px;
                        transition: all .5s;
                    }
                }
                .zxfd-symbol:hover{
                    transition: all .2s;
                    // box-shadow: 5px 5px 13px #BBB;
                    box-shadow: 8px 10px 13px #BBB;
                    img{
                        width: 105%;
                        transition: all .5s;
                    }
                }
            }
        }
    }
    .com-position{
        widows: 100%;
        margin-top: 60px;
        padding: 80px 0;
        background-color: #06084f;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .position-left{
                width: 600px;
            }
            .position-right{
                width: 600px;
                h3{
                    color: #fff;
                    font-size: 20px;
                    padding: 20px 0 10px 0;
                    font-weight: normal;
                    span{
                        padding-right: 15px;
                    }
                }
                p{
                    font-size: 16px;
                    color: #ddd;
                    line-height: 26px;
                    padding-bottom: 10px;
                }
            }
        }
    }
}

// 移动端适配
@media screen and (max-width: 760px){
    .container{
        .company-des{
            .max1200{
                width: 1100px;
                padding: 0 50px;
                .company-left{
                    width: 550px;
                }
                .company-right{
                    width: 500px;
                }
            }
        }
        .company-innovation{
            .max1200{
                width: 1100px;
                padding: 0 50px;
                .innovation-left{
                    width: 500px;
                }
                .innovation-right{
                    width: 550px;
                    ul{
                        li{
                            width: 260px;
                            .item-cover{
                                img{
                                    width: 260px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .zxfd-des{
            .max1200{
                width: 1100px;
                padding: 0 50px;
                .zxfd-left{
                    width: 500px;
                }
                .zxfd-right{
                    width: 550px;
                    .zxfd-symbol{
                        width: 550px;
                        height: 400px;
                    }
                }
            }
        }
        .com-position{
            .max1200{
                width: 1100px;
                padding: 0 50px;
                .position-left{
                    width: 550px;
                }
                .position-right{
                    width: 550px;
                }
            }
        }
    }
}




</style>