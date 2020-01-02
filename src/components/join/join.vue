<template>
    <div class="container">
        <!-- <h1>加入中象</h1> -->
        <!-- banner begin -->
        <div class="banner">
            <img src="/static/img/adjust.jpg" width="100%" height="100%">
        </div>
        <!-- banner end -->

        <!-- join us menu begin -->
        <div class="join-menu">
            <div class="max1200 clearFix">
                <div class="campus-recruitment fl">
                    <div class="campus-logo" :class="joinMenu === 'campus' ? 'active-menu' : ''" @click="getClass('campus')">
                        <img src="/static/img/campus-recruitment.png" alt="" width="100%">
                    </div>
                </div>
                <div class="social-recruitment fl">
                    <div class="social-logo" :class="joinMenu === 'social' ? 'active-menu' : ''" @click="getClass('social')">
                        <img src="/static/img/social-recruitment.png" alt="" width="80%">
                    </div>
                </div>
            </div>
        </div>
        <!-- join us menu end -->

        <!-- 2020校园招聘 -->
        <!-- campus-recruitment begin -->
        <div class="campus-content" :style="joinMenu === 'campus' ? 'display:block;' : 'display:none;'">
            <!-- 招聘流程 -->
            <div class="campus-process">
                <h3 class="process-title">招聘流程</h3>
                <ul class="clearFix">
                    <li class="fl" v-for="(item,index) in campusProcess" :key="index">
                        <div><img :src="item.img" alt="" width="90px"></div>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>

            <!-- 招聘行程 -->
            <div class="campus-stroke">
                <h3 class="stroke-title">招聘行程</h3>
                <div class="stroke-box clearFix">
                    <div class="stroke-area fl" v-for="(item,index) in campusStroke" :key="index">
                        <h3 class="area-title">{{item.area}}</h3>
                        <p class="city" v-for="(item,index) in item.city" :key="index">
                            <span class="time">{{item.time}}</span>
                            <span class="school"><em>{{item.place}}</em> {{item.school}}</span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- 招聘岗位 -->
            <div class="campus-post">
                <h3 class="post-title">招聘岗位</h3>
                <div class="post-box clearFix">
                    <div class="post-type fl" v-for="(item,index) in campusPost" :key="index">
                        <h3 class="type-name">{{item.typeName}}</h3>
                        <p class="type-item" v-for="(item,index) in item.postName" :key="index" v-text="item"></p>
                    </div>
                </div>
            </div>

        </div>
        <!-- campus-recruitment end -->

        <!-- 社会招聘 -->
        <!-- social-recruitment begin -->
        <div class="social-content" :style="joinMenu === 'social' ? 'display:block;' : 'display:none;'">
            <div class="social-jobs" v-for="(item,index) in socialContent" :key="index">
                <div class="jobs-type">
                    <p><span class="type-name">{{item.typeName}}</span><strong>{{item.postName}}</strong></p>
                </div>
                <h3 class="jobs-desc clearFix">{{item.jobDesc}}<span class="fr" @click="isActive(item)">详情<i :class="item.details ? 'details-active' : ''"></i></span></h3>
                <!-- 详情 -->
                <div class="jobs-detailed" :style="item.details ? 'display:block;' : 'display:none;'">
                    <h3>岗位职责</h3>
                    <p v-for="(item,index) in item.jobDetails.jobRes" :key="index">{{item}}</p>
                    <h3>职位要求</h3>
                    <p v-for="item in item.jobDetails.jobReq" :key="item">{{item}}</p>
                </div>
            </div>
        </div>
        <!-- social-recruitment end -->

        <!-- 投递简历 -->
        <!-- submit resume begin-->
        <div class="submit-resume clearFix">
            <div class="contactInfo fl">
                <p>联系人：<span>姚女士 18620873798</span></p>
                <p>简历命名格式：<span>姓名+应聘职位+学校+专业+学历</span></p>
                <p>简历投递邮箱：<span>hr@gxzxjy.com.cn</span></p>
                <div class="submit"><a href="mailto:hr@gxzxjy.com.cn">投递简历</a></div>
            </div>
            <div class="companyLogo fr">
                <img src="/static/img/about6.png" alt="">
            </div>
        </div>
        <!-- submit resume end -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            joinMenu: 'campus',
            campusProcess: [
                {
                    img: '/static/img/tdjl.png',
                    name: '投递简历'
                },
                {
                    img: '/static/img/jlcs.png',
                    name: '简历初筛'
                },
                {
                    img: '/static/img/ms.png',
                    name: '线下宣讲'
                },
                {
                    img: '/static/img/xxxj.png',
                    name: '面试'
                },
                {
                    img: '/static/img/qy.png',
                    name: '签约'
                },
            ],
            campusStroke: [
                {
                    area: '湖南',
                    city: [
                        {
                            time: '2019年10月16',
                            place: '长沙',
                            school: '长沙理工大学'
                        },
                        {
                            time: '2019年10月17',
                            place: '湘潭',
                            school: '湘潭大学'
                        },
                        {
                            time: '2019年10月17',
                            place: '湘潭',
                            school: '湖南科技大学'
                        }
                    ]

                },
                {
                    area: '广东',
                    city: [
                        {
                            time: '2019年10月16',
                            place: '佛山',
                            school: '广东东软学院'
                        },
                        {
                            time: '2019年10月22',
                            place: '广州',
                            school: '华南农业大学'
                        }
                    ]
                },
                {
                    area: '湖北',
                    city: [
                        {
                            time: '2019年10月16',
                            place: '武汉',
                            school: '湖北商贸学院'
                        },
                        {
                            time: '2019年10月18',
                            place: '武汉',
                            school: '武汉科技大学'
                        }
                    ]
                }
            ],
            campusPost: [
                {
                    typeName: '研发类',
                    postName: ['Java工程师', 'IOS工程师', '前端工程师', '需求分析师', '测试工程师', '运维工程师']
                },
                {
                    typeName: '市场类',
                    postName: ['市场专员', '大客户专员', '客户维护专员', '品牌运营专员']
                },
                {
                    typeName: '运营类',
                    postName: ['客服专员', '运营专员', '车辆调度专员']
                },
                {
                    typeName: '职能类',
                    postName: ['财务专员','人力行政专员']
                }
            ],
            socialContent: [
                {
                    typeName: '职能类',
                    postName: '总监助理',
                    jobDesc: '要求：大专 1年以上文秘、总助、市场助理经验',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、协助总监进行部门管理，协调部门内外的工作，完成日常工作的追踪及汇总；',
                            '2、协助总监运营类相关计划、工作安排、日程提醒；',
                            '3、项目跟进，内外部对接，相关业务数据的整理与分析，部门阶段总结报告；',
                            '4、处理部门日常行政事务，如部门会议、活动等；',
                            '5、服从领导安排；'
                        ],
                        jobReq: [
                            '1、学历：大专及以上；',
                            '2、年龄：22-30岁；',
                            '3、专业：市场营销、企业管理、文秘等相关专业；',
                            '4、工作经验：一年以上文秘、总助、市场、销售助理经验，有物流行业工作经验者优先考虑；',
                            '5、工作技能：计算机操作熟练，文笔能力强，社交能力强，责任心强；'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '运营类',
                    postName: '运营经理/主管',
                    jobDesc: '要求：本科 3年以上工作经验，有物流行业工作经验者优先',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、协助运营中心负责人开展运营工作；',
                            '2、负责公司物流平台运营，发展客户资源和运力资源；',
                            '3、负责平台运营商管理体系建立与优化，组织起草相关制度文件，并督导执行；',
                            '4、负责公司全国各省运营中心搭建，推动物流服务网络规划和落地；',
                            '5、完成上级领导指派其他工作。'
                        ],
                        jobReq: [
                            '1、统招本科及以上学历，有物流公司工作经验者优先；',
                            '2、擅长使用各项数据工具，有一定数据分析能力者优先；',
                            '3、抗压能力强，学习能力强，适应能力强，沟通表达能力较强，有较强的逻辑思维能力，能从全局的角度看问题并协调各方达成一致。'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '运营类',
                    postName: '物流调度员',
                    jobDesc: '要求：本科 1年以上工作经验，运输行业工作经验者优先',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、负责日常车辆调度工作，对调度部主管负责；',
                            '2、根据时间和发货量合理规划配送车辆和路线；',
                            '3、处理运输过程中出现的问题，以及指导司机及时的应对；',
                            '4、对配送司机进行有效管理，以使所运送货物安全及时的到达客户手中，并不断提升配送司机的服务水平；',
                            '5、管理客户的日常投诉问题，及时协调人员和车辆，调整司机路线；',
                            '6、负责协调生产、配送、客户之间的沟通协调工作，提高客户满意度；',
                            '7、配合公司对物流司机的筛选和考核，并对存在问题提出有效解决方法。'
                        ],
                        jobReq: [
                            '1、全面负责物流部日常执行工作，确保物流工作的顺畅进行；',
                            '2、一定的成本管控能力，不断优化线路分配的合理性，控制物流运营成本；',
                            '3、工作认真负责，积极收集内部及客户对物流配送的评价，及时调整物流配送过程中不合理的线路安排。',
                            '4、具有较强的分析能力和协调能力，具有团队精神，能够积极和其它部门协调，提高工作效率。'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '运营类',
                    postName: '客服专员',
                    jobDesc: '要求：大专 一年以上的客服经验',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、接受用户咨询，记录用户咨询、审核、投诉等内容，按照相应流程给予用户积极反馈;',
                            '2、能及时发现用户的需求及意见，并记录整理及分析；',
                            '3、为用户提供完整准确的方案及信息，解决用户问题，提供高质量服务;',
                            '4、良好的工作执行力，严格按规范及流程进行工作或相关操作;',
                            '5、与同事共享信息，进行知识积累，提供流程改善依据;',
                            '6、积极主动完成领导安排的其它事项;'
                        ],
                        jobReq: [
                            '1、大专以上学历，一年以上的客服经验；',
                            '2、具有较强的沟通、分析、解决问题能力；具有较强的责任心和良好的服务意识；具有良好的团队协作意识；',
                            '3、熟练使用 office 等办公软件；'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '市场类',
                    postName: '市场专员',
                    jobDesc: '要求：大专 1年以上工作经验或有销售行业工作经验优先',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、负责开发客户，保证达成签约、平台入驻等业务指标；',
                            '2、以地推方式为主，对新客户进行信息收集、拜访、提出解决方案；',
                            '3、时刻关注并满足客户需求，结合公司的发展，扩大与客户的区域合作范围；',
                            '4、维护与客户良好的合作关系，确保保持长期稳定的业务关系；'
                        ],
                        jobReq: [
                            '1、大专以上学历，专业不限，懂粤语，热爱销售行业优先；',
                            '2、1年以上工作经验，或有销售行业工作经验优先；',
                            '3、性格外向，表达能力强，具有优秀的沟通交流能力；',
                            '4、有责任心，能够承受一定的工作压力，勇于挑战高薪；'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '市场类',
                    postName: '大客户拓展',
                    jobDesc: '要求：大专 3年以上工作经验，运输行业工作经验者优先',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、开发企业或物流公司大客户，定期维护并跟进解决客户问题；',
                            '2、重点拜访关键客户，听取客户意见、需求，向客户提供定制化服务；',
                            '3、审核客户资料，提供报价、合同洽谈、合同签订等平台入驻商务工作；'
                        ],
                        jobReq: [
                            '1、全日制大专及以上学历，专业不限；',
                            '2、具有优秀的沟通交流能力，抗压能力强；'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '研发类',
                    postName: '前端开发工程师',
                    jobDesc: '要求：本科 有1-3年前端开发经验',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、负责公司现有网站的前后台程序开发与维护；',
                            '2、配合网站需求进行公司网站程序开发，能根据公司需求开发各模块功能；',
                            '3、为有利于搜索引擎搜录及对网站的推广，能对程序进行优化，对SEO了解；',
                            '4、能胜任前端工程师工作，和后端JAVA工程师合作开发公司的核心业务系统；',
                            '5、懂小程序、公众号二次开发，对所开发的软件模块代码进行维护，解决开发过程中的技术问题；'
                        ],
                        jobReq: [
                            '1、熟练使用各种Web前端技术，包括HTML(5)/CSS(3)/Javascript等，并有相关的项目开发经验或成果；',
                            '2、熟悉主流框架(vue、react、Angular)，熟悉前端工程化，熟悉git，gulp或webpack等工具；',
                            '3、有基于Ajax应用的开发经验，有NodeJS/Java开发经验，或者有移动端开发经验；',
                            '4、深刻理解Web标准，对可用性、可访问性等相关知识有实际的了解；',
                            '5、对算法、数据结构、建模有一定了解；',
                            '6、关注新事物、新技术，有较强的学习能力，喜欢挑战，并且个性乐观开朗，逻辑性强，善于和各种背景的人合作。'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '研发类',
                    postName: '运维工程师',
                    jobDesc: '要求：本科 3年以上工作经验，有维护大型服务器经验者优先',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、负责公司网络系统（交换机、防火墙、负载均衡设备、IPS等）的安装调试、管理维护；',
                            '2、负责公司产品系统的安装、升级、监控，保证系统的稳定；',
                            '3、负责部署相关应用平台，并编写平台的维护技术手册；',
                            '4、负责配合开发测试搭建测试平台，协助开发设计、推行、实施和持续改进；',
                            '5、负责相关故障、疑难问题排查处理，编制汇总故障、问题，定期提交汇总报告；',
                            '6、负责解决运营平台日常运行中出现的各种故障，包括操作系统、数据库、网络及硬件设备的故障；',
                            '7、负责平台设备的资源调配和系统安全、数据备份，完善运营系统的日志备份机制；',
                            '8、负责运营业务及平台设备的各项数据监控，如流量、负载，完善并建立应用系统和服务的日常监控系统，协助开发团队完善网管软件；'
                        ],
                        jobReq: [
                            '1、本科以上学历，计算机或者相关专业，4年以上工作经验，有维护大型服务器经验者优先考虑；',
                            '2、熟悉Linux系统，了解网络基本技术，熟悉TCP/IP协议路由、VPN、NAT、防火墙等基本原理；',
                            '3、熟悉WEB相关技术，包括apache,nginx,tomcat,jboss等应用的管理、配置和优化；',
                            '4、熟悉shell,perl,python，java,php脚本或开发语言一种以上，对sql语句有一定的了解；',
                            '5、熟悉网络设备管理与维护，网络设备的配置与优化，如常用的思科交换机/路由器配置,有CCNA、CCNP证书优先；',
                            '6、责任心强，积极主动，热爱学习，有良好的沟通能力和团队合作能力,能够承受工作压力；'
                        ],
                        jobLocation: '广州'
                    }
                },

                {
                    typeName: '研发类',
                    postName: 'Android开发工程师',
                    jobDesc: '要求：本科 一年以上Android项目开发经验',
                    details: false,
                    jobDetails: {
                        jobRes: [
                            '1、根据公司要求基于Android系统平台进行应用程序开发设计、调试工作；',
                            '2、根据项目任务计划按时完成软件高质量编码工作；',
                            '3、规范文档的编写、维护，以及其他与项目相关工作；',
                            '4、按照开发流程编写相应模块的设计文档；',
                            '5、按时按需完成客户端软件的维护及更新；'
                        ],
                        jobReq: [
                            '1、本科以上学历，计算机、通讯相关专业，有扎实的Java语言基础；',
                            '2、一年以上Android项目开发经验，扎实的Java语言基础，熟悉OOP思想和设计模式；',
                            '3、熟悉Android框架及各种特性，熟悉网络编程、安卓UI框架及相关开发工具；',
                            '4、熟悉Android开源社区流行项目和技术走向；5.具备良好的分析解决问题能力，能独立承担任务和有系统进度把控能力；',
                            '【加分项】1、有大型终端软件架构能力，有上线产品者优先；2、有技术博客网站,或定期参与业内交流；3、长期混开源社区，参与知名项目；4、其它任何你觉得独特的技能或经验。'
                        ],
                        jobLocation: '广州'
                    }
                }
            ]
        };
    },
    components: {},
    methods: {
        getClass(active){
            this.joinMenu = active;
        },
        isActive(item){
            item.details = !item.details;
        }

    }
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    min-height: 100vh;
    // height: 3000px;
    background-color: #fff;
    .banner{
        width: 100%;
        // height: 570px;
        margin-top: -1px;
    }
    // 导航
    .join-menu{
        width: 100%;
        margin-top: 80px;
        .max1200{
            width: 1200px;
            margin: 0 auto;
            .campus-recruitment{
                width: 50%;
                .campus-logo{
                    width: 280px;
                    height: 50px;
                    margin: 0 auto;
                    cursor: pointer;
                    opacity: .5;
                    transition: all .2s;
                }
                // .campus-logo:hover{
                //     opacity: 0.7;
                // }
                .active-menu{
                    opacity: 1;
                    transition: all .2s;
                }
            }
            .social-recruitment{
                width: 50%;
                .social-logo{
                    width: 250px;
                    height: 50px;
                    margin: 0 auto;
                    cursor: pointer;
                    opacity: .5;
                    transition: .2s all;
                }
                // .social-logo:hover{
                //     opacity: 0.7;
                // }
                .active-menu{
                    opacity: 1;
                    transition: .2s all;
                }
            }
        }
    }
    // 校招
    .campus-content{
        width: 100%;
        margin-top: 60px;
        .campus-process{
            width: 1200px;
            margin: 0 auto;
            border: 1px dashed #bfbfbf;
            border-left: none;
            border-right: none;
            padding: 30px 0;
            .process-title{
                font-size: 34px;
                color: #333;
                text-align: center;
                padding-bottom: 40px;
                font-weight: normal;
            }
            ul{
                li{
                    width: 20%;
                    text-align: center;
                    position: relative;
                    p{
                        font-size: 22px;
                        color: #333;
                        padding-top: 10px;
                        line-height: 180%;
                    }
                }
                li:not(:last-child)::before{
                    content: '';
                    position: absolute;
                    top: 30px;
                    right: -17px;
                    display: block;
                    width: 35px;
                    height: 33px;
                    background: url('/static/img/about5.png') no-repeat;
                    background-size: 100%;
                }
                
            }
        }
        .campus-stroke{
            width: 1200px;
            margin: 0 auto;
            margin-top: 60px;
            .stroke-title{
                font-size: 34px;
                color: #333;
                text-align: center;
                padding-bottom: 40px;
                font-weight: normal;
            }
            .stroke-box{
                width: 100%;
                .stroke-area{
                    width: 30.6%;
                    height: 190px;
                    margin: 0 2%;
                    padding-top: 30px;
                    padding-bottom: 60px;
                    background: url('/static/img/gd.png') no-repeat right top;
                    background-size: auto;
                    .area-title{
                        padding-left: 50px;
                        padding-bottom: 15px;
                        font-size: 28px;
                        color: #141a88;
                        font-weight: bold;
                    }
                    .city{
                        padding-left: 50px;
                        line-height: 22px;
                        font-size: 16px;
                        color: #000;
                        padding-bottom: 15px;
                        .time{
                            display: block;
                        }
                        .school{
                            em{
                                font-style: normal;
                                font-weight: normal;
                                padding-right: 10px;
                            }
                        }
                    }
                }
                .stroke-area:first-child{
                    margin-left: 0;
                    background: url('/static/img/hn.png') no-repeat right top;
                }
                .stroke-area:last-child{
                    margin-right: 0;
                    background: url('/static/img/hb.png') no-repeat right top;
                }
            }
        }
        .campus-post{
            width: 1200px;
            margin: 0 auto;
            margin-top: 60px;
            .post-title{
                font-size: 34px;
                color: #333;
                text-align: center;
                padding-bottom: 40px;
                font-weight: normal;
            }
            .post-box{
                width: 100%;
                .post-type{
                    padding: 40px 0;
                    width: 22%;
                    margin: 0 2%;
                    height: 210px;
                    background: url('/static/img/scl.png') no-repeat left top;
                    background-size: cover;
                    .type-name{
                        font-size: 28px;
                        padding-bottom: 10px;
                        color: #141a88;
                        text-align: center;
                        font-weight: bold;
                    }
                    .type-item{
                        height: 26px;
                        line-height: 26px;
                        color: #000;
                        font-size: 14px;
                        text-align: center;
                        cursor: pointer;
                        transition: .2s all;
                    }
                    .type-item:hover{
                        background-color: rgba(20, 26, 136, .1);
                        color: #141a88;
                        font-size: 16px;
                        transition: .2s all;
                    }
                }
                .post-type:first-child{
                    margin-left: 0;
                    background: url('/static/img/jsl.png') no-repeat left top;
                    background-size: cover;
                }
                .post-type:last-child{
                    margin-right: 0;
                    background: url('/static/img/znl.png') no-repeat left top;
                    background-size: cover;
                }
                .post-type:nth-child(3){
                    background: url('/static/img/yyl.png') no-repeat left top;
                    background-size: cover;
                }
            }

        }
    }
    // 社招
    .social-content{
        width: 100%;
        margin-top: 60px;
        .social-jobs{
            width: 1200px;
            margin: 0 auto;
            margin-bottom: 30px;
            .jobs-type{
                p{
                    height: 30px;
                    line-height: 30px;
                    .type-name{
                        display: inline-block;
                        padding: 1px 18px;
                        font-size: 14px;
                        color: #fff;
                        background: #141a88;
                        border-radius: 6px;
                    }
                    strong{
                        padding-left: 15px;
                        color: #000;
                        font-size: 20px;
                        font-weight: normal;
                        font-style: normal;
                        vertical-align: middle;
                    }
                }
            }
            .jobs-desc{
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                color: #000;
                margin-top: 18px;
                font-weight: normal;
                span{
                    display: inline-block;
                    padding-right: 30px;
                    color: #1e4efe;
                    font-size: 16px;
                    cursor: pointer;
                    user-select: none;
                    i{
                        display: inline-block;
                        height: 10px;
                        width: 18px;
                        margin-left: 10px;
                        background: url('/static/img/down.png') no-repeat right center;
                        transition: all 0.3s;
                    }
                    .details-active{
                        -ms-transform: rotate(180deg) !important;
                        transform: rotate(180deg) !important;
                        transition: all 0.3s;
                    }
                }
            }
            .jobs-detailed{
                margin-top: 20px;
                padding: 0 30px 40px 30px;
                background: #f3fcff;
                border-radius: 5px;
                h3{
                    font-size: 24px;
                    padding: 30px 0 20px;
                    color: #000;
                    font-weight: normal;
                }
                p{
                    font-size: 14px;
                    height: 30px;
                    line-height: 30px;
                    color: #222;
                }
            }
        }
    }
    // 招聘方式
    .submit-resume{
        width: 1200px;
        margin: 80px auto;
        .contactInfo{
            margin-left: 5%;
            margin-top: 45px;
            p{
                font-size: 18px;
                color: #333;
                height: 50px;
                line-height: 32px;
                span{
                    color: #000;
                    font-size: 18px;
                    cursor: pointer;
                    transition: all .2s;
                }
                span:hover{
                    // color: #141a88;
                    color: #0875ff;
                    font-size: 19px;
                    transition: all .2s;
                }
            }
            .submit{
                margin-top: 25px;
                width: 200px;
                height: 45px;
                margin-left: 80px;
                line-height: 45px;
                color: #fff;
                background-color: #0875ff;
                border-radius: 22px;
                font-size: 18px;
                cursor: pointer;
                text-align: center;
                transition: all .2s;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                }
            }
            .submit:hover{
                border-radius: 5px;
            }
        }
        .companyLogo{
            width: 550px;
            height: 272px;
            border-radius: 5px;
            box-shadow: 1px 1px 8px #BBB;
            transition: all .5s;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                border-radius: 5px;
                transition: all .5s;
            }
        }
        .companyLogo:hover{
            box-shadow: 8px 10px 13px #BBB;
            transition: all .5s;
            img{
                width: 105%;
                height: 105%;
                transition: all .5s;
            }
        }
    }
}


// 移动端适配
@media screen and (max-width: 760px){
    .container{
        // .banner{
            // margin-top: -2px;
        // }
        .campus-content{
            .campus-process{
                width: 1100px;
            }
            .campus-stroke{
                width: 1100px;
            }
            .campus-post{
                width: 1100px;
            }
        }
        .social-content{
            .social-jobs{
                width: 1100px;
            }
        }
        .submit-resume{
            width: 1100px;
        }
    }
}
</style>
