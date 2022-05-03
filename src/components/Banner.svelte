<script>
	import Icon from './Icon.svelte'
	export let quest;

	let quest_book = [
		{ 
			name: "At CoinMarketCap, click ⭐, vote 'Good' and search 'Pointpay' on the search bar.",
			url: "https://coinmarketcap.com/currencies/pointpay"
		},
		{ 
			name: "At CoinGecko, click ⭐, vote 'Good' and search 'Pointpay' on the search bar.",
			url: "https://coingecko.com/coins/pointpay"
		},
		{ 
			name: "Follow PointPay on Twitter - Like and Comment on the latest tweets using $PXP.",
			url: "https://twitter.com/PointPay1"
		},
		{ 
			name: "Follow PointPay on Instagram - Like, Save and Comment on the latest posts using #PointPay",
			url: "https://instagram.com/pointpayofficial"
		},
		{ 
			name: "Subscribe to PointPay on YouTube, Like and Comment the latest videos",
			url: "https://youtube.com/c/PointPay_official"
		},
		{ 
			name: "Increase PointPay rank on Google by searching",
			url: "https://www.google.com/search?q=pointpay"
		},
		{ 
			name: "Like and follow PointPay on Facebook - Like and Comment on the latest posts",
			url: "https://www.facebook.com/PointPayLtd"
		},
		{ 
			name: "Follow PointPay on Reddit - Upvote the latest posts",
			url: "https://www.reddit.com/user/PointPay_official"
		},
	];
</script>

<div class="banner">
	<div class="head">
		<Icon big icon="quest"/>
		<div class="title">PointPay Quest</div>
		<div style="flex: 1"></div>
		<a href="{quest_book[quest].url}" target="_blank" class="button">Let's go!</a>
	</div>
	<div class="body">
		{quest_book[quest].name}
	</div>
</div>

<style lang="stylus">
.banner
	background var(--primary)
	border-radius 20px
	color var(--on-primary)
	fill currentcolor
	margin-top 16px
	padding 16px

.head
	align-items center
	display flex
	margin-bottom 8px
	flex 1

.title
	font 500 18px/22px 'Roboto', sans-serif
	margin-left 8px

.body
	align-items center
	border-top solid 1px rgba(#fff, .3)
	display flex
	font 400 16px/20px 'Roboto', sans-serif
	justify-content space-between
	padding-top 16px

.button
	align-items center
	background var(--on-primary)
	color var(--primary)
	border-radius 20px
	display inline-flex
	fill currentcolor
	height 40px
	justify-content center
	padding 0 16px
	font 500 14px/20px 'Roboto', sans-serif

</style>