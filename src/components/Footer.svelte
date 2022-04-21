<script>
	import IconSocial from './IconSocial.svelte'
	import LinkButton from './LinkButton.svelte'

	let year = new Date().getFullYear()
</script>

<footer>
	<section class="grid">
		<div class="disclaimer">
			<div class="title">Disclaimer</div>
			PXP Board is made by an investor for investors and does not imply endorsement by Point Pay LLC. All trademarks, logos and brand names are the property of their respective owners. If you like this Web App, consider helping me out by using the affiliate links or making a donation, any value is appreciated. 💙
		</div>
		<div class="about-me">
			<div class="title">About me</div>
			Hello, my name is Katriel Lucas, and I am a remote front-end developer with more than five years of experience. My main focus is on Svelte and REST API development.
		</div>
		<div class="reach-out">
			<div class="title">Check me out</div>
			<div class="row">
				<LinkButton icon="portfolio" url="#" label="Portfolio"/>
				<LinkButton icon="github" url="https://github.com/Go-Merk" label="Github"/>
				<LinkButton icon="email" url="mailto:katriel.developer@gmail.com" label="Email"/>
			</div>
		</div>
	</section>
	<div class="social">
		<div class="title">PointPay Social</div>
		<div class="icon-group">
			<IconSocial url="https://pointpay.io" icon="website"/>
			<IconSocial url="https://t.me/pointpay_eng" icon="telegram"/>
			<IconSocial url="https://github.com" icon="linkedin"/>
			<IconSocial url="https://twitter.com/PointPay1" icon="twitter"/>
			<IconSocial url="https://facebook.com/PointPayLtd" icon="facebook"/>
			<IconSocial url="https://pointpay.medium.com/" icon="medium"/>
			<IconSocial url="https://reddit.com/user/PointPay_official" icon="reddit"/>
			<IconSocial url="https://youtube.com/c/PointPay_official" icon="youtube"/>
			<IconSocial url="https://instagram.com/pointpayofficial" icon="instagram"/>
			<IconSocial url="https://discord.com/invite/pointpay" icon="discord"/>
		</div>
	<div>
	<div class="copyright">©{year} Katriel Lucas. All Rights Reserved. Data from <a class="blue" href="https://www.coingecko.com/en/coins/pointpay">CoinGecko</a> and <a class="blue" href="https://coinstats.app/coins/pointpay/">CoinStats</a>.</div>
</footer>

<style lang="stylus">
footer
	background var(--surface-2)
	margin-top 64px
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
		"c c c c" 
		
	@media (min-width 600px)
		grid-template-areas:
			"a a a a" \
			"b b c c" 

	@media (min-width 1080px)
		grid-template-areas:
			"a a b c"

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
	margin-top 24px

.icon-group
	display flex
	flex-wrap wrap

.copyright
	color var(--on-surface-alt)
	font 400 14px/20px 'Roboto', sans-serif
	margin-top 24px
	text-align center

.blue
	color var(--primary)

.row
	display flex
	flex-wrap wrap
</style>
