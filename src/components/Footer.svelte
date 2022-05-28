<script>
	import IconLink from './IconLink.svelte'
	import DevSocial from './DevSocial.svelte'
	import Donor from './Donor.svelte'

	let year = new Date().getFullYear()
</script>

<footer>
	<section class="grid">
		<div class="disclaimer">
			<div class="title">Disclaimer</div>
			PXP Board is created by an investor for investors and does not imply endorsement by Point Pay LLC. All trademarks, logos and brand names belong to their respective owners.
			<br><br>
			If you find this Web App useful, consider using the affiliate links or making a donation. Any amount would be greatly appreciated. 💙
		</div>
		<div class="about-me">
			<div class="title">About me</div>
			My name is Katriel Lucas, and I am a remote front-end developer with more than five years of experience. My main focus is on Svelte and REST API development.
		</div>
		<div class="reach-out">
			<div class="title">Check me out</div>
			<div class="row">
				<DevSocial icon="portfolio" url="https://katriellucas.github.io" label="Portfolio"/>
				<DevSocial icon="github" url="https://github.com/katriellucas" label="Github"/>
				<DevSocial icon="email" url="mailto:katriel.developer@gmail.com" label="Email"/>
			</div>
		</div>
		<div class="social">
			<div class="title">PointPay Social</div>
			<div class="icon-group">
				<IconLink url="https://pointpay.io" icon="website"/>
				<IconLink url="https://t.me/pointpay_eng" icon="telegram"/>
				<IconLink url="https://github.com" icon="linkedin"/>
				<IconLink url="https://twitter.com/PointPay1" icon="twitter"/>
				<IconLink url="https://facebook.com/PointPayLtd" icon="facebook"/>
				<IconLink url="https://pointpay.medium.com/" icon="medium"/>
				<IconLink url="https://reddit.com/user/PointPay_official" icon="reddit"/>
				<IconLink url="https://youtube.com/c/PointPay_official" icon="youtube"/>
				<IconLink url="https://instagram.com/pointpayofficial" icon="instagram"/>
				<IconLink url="https://discord.com/invite/pointpay" icon="discord"/>
				<IconLink url="https://coinmarketcap.com/currencies/pointpay/" icon="coinmarketcap"/>
				<IconLink url="https://coingecko.com/en/coins/pointpay" icon="coingecko"/>
			</div>
		</div>
		<div class="donors">
			<div class="title">Donors</div>
			<Donor label="The Don"/>
			<Donor label="Artemis"/>
		<div>
	</section>
	<div class="copyright">
		©{year} Katriel Lucas. All Rights Reserved. Data from <a class="blue" href="https://www.coingecko.com/en/coins/pointpay">CoinGecko</a> and <a class="blue" href="https://coinstats.app/coins/pointpay/">CoinStats</a>
	</div>
</footer>

<style lang="stylus">
footer
	background var(--surface-1)
	border-top solid 1px var(--surface-3)
	padding 32px 16px
	width 100%

	@media (min-width 360px)
		padding 32px 16px

	@media (min-width 600px)
		padding 32px 32px
	
	@media (min-width 840px)
		padding 32px 64px

.grid
	display grid
	grid-template-columns 1fr 1fr 1fr 1fr
	grid-template-rows 1fr
	grid-gap 24px 48px
	grid-template-areas:
		"a a a a" \
		"b b b b" \
		"c c c c" \
		"d d d d" \
		"e e e e" 
		
	@media (min-width 600px)
		grid-template-areas:
			"a a a a" \
			"b b c c" \
			"d d d d" \
			"e e e e" 

	@media (min-width 1080px)
		grid-template-areas:
			"a a b c" \
			"d d e e"

.title
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
	margin-bottom 8px

.disclaimer
	color var(--on-surface)
	font 400 14px/20px 'Roboto', sans-serif
	grid-area a

.about-me
	color var(--on-surface)
	font 400 14px/20px 'Roboto', sans-serif
	grid-area b

.reach-out
	color var(--on-surface)
	font 400 14px/20px 'Roboto', sans-serif
	grid-area c

.social
	grid-area d

.donors
	grid-area e

.icon-group
	display flex
	flex-wrap wrap

.copyright
	color var(--on-surface-alt)
	font 400 14px/20px 'Roboto', sans-serif
	margin-top 32px
	text-align center

.blue
	color var(--primary)

.row
	display flex
	flex-wrap wrap
</style>
