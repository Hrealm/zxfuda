<template>
    <div class="container">
        <!-- <h1>关于中象</h1> -->
        <!-- banner begin -->
        <div class="banner">
            <img src="/static/img/about.jpg" width="100%" height="100%">
        </div>
        <!-- banner end -->

        <!-- 平台优势 -->
        <!-- platform begin -->
        <div class="platform">
            <div class="max1200 clearFix">
                <div class="platform-info fl">
                    <div class="platform-title">
                        <img src="/static/img/about-icont1.png" alt="" width="170px">
                    </div>
                    <div class="platform-content">
                        <div class="advantage">
                            <img src="/static/img/hfw20.png" alt="" width="75%">
                            <p>全国24小时服务调度</p>
                        </div>
                        <div class="advantage">
                            <img src="/static/img/anqhd.png" alt="" width="65%">
                            <p>一站式安全无忧运输</p>
                        </div>
                        <div class="advantage">
                            <img src="/static/img/zdpw.png" alt="" width="68%">
                            <p>大数据决策分析赋能</p>
                        </div>
                        <p class="content-info">平台致力于服务公路整车运输市场和构建集约高效的生态环境；我们以线上平台为依托，努力整合行业资源，将线上线下业务场景相结合，打造公开透明的交易环境，并紧跟时代步伐，利用好科技技术，保障资金、货物、运输安全。</p>
                    </div>
                </div>
                <div class="platform-symbol fl">
                    <img src="/static/img/about1.png" alt="" width="80%">
                </div>
            </div>
        </div>
        <!-- platform end -->

        <!-- 企业文化 -->
        <!-- company culture begin -->
        <div class="company-culture">
            <div class="max1200">
                <div class="culture-title">
                    <img src="/static/img/about-icont2.png" alt="" width="170">
                </div>
                <div class="culture-content">
                    <superslide :options="cultureOptions" class="slideBox">
                        <div class="culture-bd">
                            <ul>
                                <li>
                                    <div class="company-box">
                                        <img src="/static/img/about2.jpg" width="100%"/>
                                        <h3>企业宗旨</h3>
                                        <p>客户至上 服务为先 效率第一</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="company-box">
                                        <img src="/static/img/about3.png" width="100%"/>
                                        <h3>企业精神</h3>
                                        <p>一流团队 一流服务 一流品牌</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="company-box">
                                        <img src="/static/img/about4.png" width="100%"/>
                                        <h3>企业作风</h3>
                                        <p>勤勉务实 专注创新 信任担当</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </superslide>
                </div>
            </div>
        </div>
        <!-- company culture end -->

        <!-- 团队介绍 -->
        <!-- Team introduce begin-->
        <div class="team-introduce">
            <div class="max1200">
                <div class="team-title">
                    <img src="/static/img/about-icont3.png" alt="" width="170">
                </div>
                <div class="team-content">
                    <superslide :options="teamOptions" class="team-slideBox">
                        <div class="team-bd">
                            <a class="tPrev" href="javascript:void(0)"></a>
                                <ul>
                                    <li class="clearFix">
                                        <div class="pic fl">
                                            <img src="/static/img/team1.jpg" />
                                        </div>
                                        <div class="description fl">
                                            <div class="des-up">
                                                <h3>潘奇</h3>
                                                <p>中象福达创始人兼CEO</p>
                                            </div>
                                            <div class="des-mid">
                                                <p>北京大学光华管理学院MBA</p>
                                                <p>香港大学OHRM研究生</p>
                                                <p>武汉科技大学法学学士</p>
                                            </div>
                                            <div class="des-down">
                                                <p>潘奇先生是中国智慧整车物流和网络货运发展的践行者，2019年创立中象福达，同年8月中象福达交易平台正式上线，致力于解决行业发展痛点，促进互联网和整车物流的深度融合，用大数据为中国公路整车运输加上腾飞的科技翅膀，帮助和保障货运司机个体效益，助力物流行业平台化高效发展，实现社会资源集约高效。
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearFix">
                                        <div class="pic fl">
                                            <img src="/static/img/u145.jpg" />
                                        </div>
                                        <div class="description fl">
                                            <div class="des-up">
                                                <h3>小伙伴</h3>
                                            </div>
                                            <div class="des-mid">
                                                <p>三大核心部门：研发部、运营中心和市场部</p>
                                                <p>我们坚持自主创新的精神、坚持求真务实的态度、坚持合作共赢的理念；</p>
                                            </div>
                                            <div class="des-down">
                                                <p>我们深耕市场、服务市场、回归市场，让物流更简单，让生活更美好，”成为智慧整车物流交易平台引领者“是我们努力的方向和目标。</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            <a class="tNext" href="javascript:void(0)"></a>
                        </div>
                    </superslide>
                </div>
            </div>
        </div>
        <!-- Team introduce end-->

        <!-- 联系我们 -->
        <!-- contact us begin -->
        <div class="contact-us">
            <div class="max1200 clearFix">
                <div class="contact-info fr">
                    <div class="contact-title">
                        <img src="/static/img/about-icont4.png" alt="" width="170">
                    </div>
                    <div class="contact-content">
                        <p>电话：020-39922019</p>
                        <p>邮件：service@gdzxjy.com.cn</p>
                        <p>地址：广州市番禺区东环街番禺大道北537号番山创业中心</p>
                        <p>邮编：511400</p>
                    </div>
                </div>
                <div class="conpany-map">
                    <!-- <iframe src="map.html" width="600" height="300" frameborder="0" scrolling="no"></iframe> -->
                    <iframe src="../static/map.html" width="750" height="410" frameborder="no;" scrolling="no"></iframe>
                </div>
            </div>
        </div>
        <!-- contact us end -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            cultureOptions: { 
                "mainCell": ".culture-bd ul",
                "autoPlay": true,
                "effect": "leftMarquee",
                "vis": 3,
                "interTime": 25
            },
            teamOptions: {
                "mainCell": ".team-bd ul",
                "autoPlay": false,
                "prevCell": ".tPrev",
			    "nextCell": ".tNext",
                "effect": "leftLoop"
            }
        };
    },
    components: {}
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    .banner{
        width: 100%;
        margin-top: -1px;
    }
    // 平台优势
    .platform{
        width: 100%;
        margin: 80px 0 80px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .platform-info{
                width: 550px;
                padding-right: 50px;
                .platform-title{
                    text-align: center;
                }
                .platform-content{
                    margin-top: 15px;
                    .advantage{
                        display: inline-block;
                        width: 24.5%;
                        text-align: center;
                        font-size: 18px;
                        margin: 40px 4% 30px;
                        p{
                            font-size: 18px;
                            line-height: 32px;
                            color: #333;
                        }
                    }
                    .content-info{
                        font-size: 18px;
                        line-height: 32px;
                        text-indent: 26px;
                        color: #333;
                    }
                }
            }
            .platform-symbol{
                width: 50%;
                img{
                    margin: 25px 0 0 35px;
                }
            }
        }
    }
    // 企业文化
    .company-culture{
        width: 100%;
        background-color: #F4F5F9;
        padding: 30px 0 45px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .culture-title{
                text-align: center;
                padding: 30px 0;
                margin-bottom: 15px;
            }
            .culture-content{
                width: 100%;
                overflow: hidden;
                .slideBox{
                    ul{
                        li{
                            float: left;
                            width: 400px;
                            .company-box{
                                position: relative;
                                top: 0;
                                margin: 0 15px;
                                padding-bottom: 30px;
                                margin-bottom: 20px;
                                box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.05);
                                background: rgba(255,255,255,0.5);
                                cursor: pointer;
                                transition: all .3s;
                                h3{
                                    font-size: 20px;
                                    text-align: center;
                                    padding: 20px 0 10px;
                                    font-weight: normal;
                                }
                                p{
                                    font-size: 18px;
                                    text-align: center;
                                    line-height: 180%;
                                }
                            }
                            .company-box:hover{
                                top: -5px;
                                box-shadow: 0px 9px 11px 0px rgba(0,0,0,0.09);
                                transition: all .3s;
                            }
                        }
                    }
                }
            }
        }
    }
    // 团队介绍
    .team-introduce{
        width: 100%;
        background-color: #fff;
        padding: 30px 0px 50px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .team-title{
                text-align: center;
                padding: 40px 0;
                margin-bottom: 40px;
            }
            .team-content{
                position: relative;
                width: 100%;
                overflow: hidden;
                .team-slideBox{
                    width: 1040px;
                    margin: 0 auto;
                    a{
                        position: absolute;
                        top: 0;
                        display: block;
                        width: 50px;
                        height: 378px;
                        z-index: 1;
                    }
                    .tPrev{
                        left: 0;
                        background: url('/static/img/icoLeft.png') center center no-repeat;
                    }
                    .tNext{
                        right: 0;
                        background: url('/static/img/icoRight.png') center center no-repeat;
                    }
                    ul{
                        li{
                            .pic{
                                font-size: 0;
                                img{
                                    width: 375px;
                                    height: 375px;
                                }
                            }
                            .description{
                                width: 584px;
                                margin-left: 75px;
                                padding: 20px 0;
                                .des-up{
                                    h3{
                                        padding-bottom: 10px;
                                        color: #000;
                                        font-size: 20px;
                                        font-weight: 800;
                                    }
                                    p{
                                        font-size: 18px;
                                        color: #333;
                                    }
                                }
                                .des-mid{
                                    padding: 10px 0;
                                    p{
                                        font-size: 18px;
                                        color: #333;
                                        line-height: 32px;
                                    }
                                }
                                .des-down{
                                    p{
                                        font-size: 18px;
                                        color: #333;
                                        line-height: 32px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // 联系我们
    .contact-us{
        width: 100%;
        background-color: #F4F5F9;
        padding: 80px 0 80px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .contact-info{
                width: 25%;
                padding: 30px 30px;
                background: rgba(255,255,255,0.5);
                box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.05);
                border-radius: 5px;
                .contact-title{
                    text-align: center;
                    padding: 30px 0 25px;
                }
                .contact-content{
                    p{
                        font-size: 18px;
                        margin-top: 24px;
                        margin-bottom: 0;
                        line-height: 32px;
                        color: #000;
                    }
                }
            }
            .conpany-map{
                iframe{
                    border: none;
                }
            }
        }
    }
}
</style>
