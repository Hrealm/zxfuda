<template>
    <div id="app">
		<!-- headerNav begain-->
		<header>
			<div class="clearFix wrap">
				<!-- <h1>中象集团</h1> -->
				<h1 class="logo">
					<a href="/"></a>
					<!-- <router-link :to="{name: 'index'}"></router-link> -->
				</h1>
				<div class="nav fr">
					<ul class="clearFix">
						<li>
							<router-link :to="{name: 'index'}">
								<span>首页</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name: 'about'}">
								<span>关于中象</span>
							</router-link>
						</li>
						<li>
							<!-- <router-link :to="{name: 'zxfuda'}"> -->
							<a href="javascript:;"><span>中象福达</span></a>
							<!-- </router-link> -->
						</li>
						<li>
							<router-link :to="{name: 'product'}">
								<span>产品中心</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name: 'news'}">
								<span>新闻中心</span>
							</router-link>
						</li>

						<li>
							<router-link :to="{name: 'join'}">
								<span>加入中象</span>
							</router-link>

						</li>

					</ul>
				</div>
			</div>
		</header>
		<div class="header_hidden"></div>
		<!-- headerNav end-->

        <router-view />

		<!-- footer begin -->
		<footer>
			<div class="clearFix wrap">
				<div class="footer-left fl">
					<div class="com-logoInfo clearFix">
						<h1 class="logo fl"></h1>
						<h1 class="QRcode"></h1>
						<div class="bigQRcode"></div>
					</div>
					<p class="com-info">全国24小时服务调度</p>
					<p class="com-info">一站式安全无忧运输</p>
					<p class="com-info">大数据决策分析赋能</p>
					<p class="com-hotline">招商热线：<span>400-666-7056</span> 转 2</p>
				</div>
				<div class="footer-right clearFix fr">
					<div class="footer-zxfd fl">
						<h3>中象福达</h3>
						<p><router-link @click.native="Merchants('top')" :to="{name: 'product'}" active-class="">产品介绍</router-link></p>
						<p><a href="javascript:;">在线咨询</a></p>
						<p><router-link @click.native="Merchants('bottom')" :to="{name: 'product'}" active-class="">招商加盟</router-link></p>
					</div>
					<div class="footer-about fl">
						<h3>关于我们</h3>
						<p><router-link :to="{name: 'about'}" active-class="">关于我们</router-link></p>
						<p><router-link :to="{name: 'join'}" active-class="">加入我们</router-link></p>
					</div>
					<div class="footer-contact fr">
						<h3>联系我们</h3>
						<p>公司电话：020-39922019</p>
						<p>公司邮箱：service@gdzxjy.com.cn</p>
						<p>总部地址：广州市番禺区东环街番禺大道北537号番山创业中心</p>
					</div>
				</div>
			</div>
			<div class="down-div">
				<p>Copyright©2019-2022广东中象集运科技有限公司All rights reserved. <a target="_blank" href="http://www.beian.miit.gov.cn">粤ICP备19052867号-3</a></p>
			</div>
		</footer>
		<!-- footer end -->
    </div>
</template>

<script>
export default {
	name: "App",
	methods: {
		Merchants(location){
			if(location === 'bottom'){
				document.body.scrollTop = 5000;
				document.documentElement.scrollTop = 5000;
			}else{
				document.body.scrollTop = 0;
            	document.documentElement.scrollTop = 0;
			}
		}
	}
};
</script>

<style scoped lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
header{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	width: 100%;
	// height: 100px;
	height: 80px;
	background: #141a88;
	border: none;
	z-index: 999;
	.wrap{
		position: relative;
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		// line-height: 100px;
		line-height: 80px;
		.logo{
			display: inline-block;
			position: absolute;
			width: 200px;
			height: 50px;
			margin-left: 25px;
			top: 50%;
			margin-top: -22.5px;
			background: url('./assets/logo.png') no-repeat;
			// background-size: 100%;
			a{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			ul{
				li{
					float: left;
					padding: 0 25px;
					// height: 100px;
					height: 80px;
					text-align: center;
					// line-height: 100px;
					line-height: 80px;
					font-size: 18px;
					color: #fff;
					a{
						position: relative;
						display: inline-block;
						color: inherit;
						height: 100%;
						span{
							font-size: 18px;
						}
					}
					a:hover{
						color: #fac01b;
					}
					a:hover::before{
						content: '';
						display: block;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						margin: 0 auto;
						width: 36px;
						height: 4px;
						background: #fac01b;
						border-radius: 50px;
					}
				}
			}
		}
	}
}
.header_hidden{
	// height: 100px;
	height: 80px;
}
footer{
	width: 100%;
	background-color: #020429;
	.wrap{
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		padding: 60px 0;
		.footer-left{
			color: #fff;
			.com-logoInfo{
				position: relative;
				height: 50px;
				margin-bottom: 15px;
				.logo{
					width: 180px;
					height: 50px;
					background: url('./assets/logo.png') no-repeat;
					background-size: 100%;
				}
				.QRcode{
					position: absolute;
					top: 5px;
					left: 193px;
					opacity: 1;
					width: 40px;
					height: 40px;
					// margin: 5px 13px;
					background: url('./assets/icon_qrcode.png') no-repeat;
					background-size: 100%;
					border-radius: 2px;
					transition: all .4s;
				}
				.bigQRcode{
					opacity: 0;
					position: absolute;
					top: 5px;
					left: 193px;
					width: 40px;
					height: 40px;
					background: url('./assets/erweima.png') no-repeat;
					background-size: 100%;
					border-radius: 8px;
					transition: all .4s;

				}
			}
			.com-logoInfo:hover .QRcode{
				width: 100px;
				height: 100px;
				opacity: 0;
				transition: all .4s;
			}
			.com-logoInfo:hover .bigQRcode{
				width: 100px;
				height: 100px;
				opacity: 1;
				transition: all .4s;
				transition-timing-function: cubic-bezier(0, 0.2, 0.8, 1);

			}
			.com-info{
				color: #fff;
				font-size: 14px;
				line-height: 22px;
			}
			.com-hotline{
				margin-top: 10px;
				span{
					color: #fac01b;
					font-weight: 300;
				}
			}
		}
		.footer-right{
			width: 70%;
			// margin-left: 110px;
			color: #fff;
			h3{
				font-weight: normal;
				margin-bottom: 10px;
			}
			p{
				font-size: 14px;
				line-height: 26px;
				color: #f3f3f3;
				a{
					color: #f3f3f3;
				}
				a:hover{
					color: #fac01b;
				}
			}
			// .footer-zxfd{
			// 	// h3
			// }
			.footer-about{
				margin-left: 150px;
			}
			.footer-contact{
				margin-left: 100px;
			}
		}
	}
	.down-div{
		position: relative;
		bottom: 30px;
		width: 100%;
		text-align: center;
		color: #9a9a9a;
		font-size: 14px;
		a{
			color: #9a9a9a;
		}
		a:hover{
			color: #fac01b;
		}
	}
}
</style>
