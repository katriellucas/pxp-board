<script>
	import { fade } from 'svelte/transition';

	import Icon from '../Icon.svelte'
	import SignupButton from '../SignupButton.svelte'
	import Spinner from '../Spinner.svelte'
	import TooltipBeta from '../TooltipBeta.svelte'

	const market = (async () => {
		const response = await fetch('https://b2t-api-cmc-solidbit.flexprotect.org/marketdata/cmc/v1/ticker')
    return await response.json()
	})()

	function myFunc(node, value) {
		console.log(value)
		node.textContent = `$${parseFloat(value).toFixed(5)}`;
	}

	function exVolume(node, value) {
		node.textContent = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(parseFloat(value));
	}

</script>

<div class="card" transition:fade>
	<div class="card__head">
		<div class="exchange">
			<img class="image" src="images/beta/solidbit.png" alt="Solidbit" />
			<span class="name">Solidbit</span>
		</div>
		<a href="https://solidbit.io/" class="icon-button ripple" target="_blank" rel="sponsored">
			<Icon icon="chart"/>
		</a>
	</div>
	<div class="card__body">
		{#await market}
			<div class="label">
				PXP Price:
				<Spinner/>
			</div>
			<div class="label">
				24H Volume:
				<Spinner/>
			</div>
		{:then data}
			<div class="label">
				PXP Price:
				<span use:myFunc={data.PXP_USDT.last_price}></span>
			</div>
			<div class="label">
				24H Volume:
				<span use:exVolume={data.PXP_USDT.quote_volume}></span>
			</div>
		{:catch error}
			<div class="error">API isn't working or is in maintenance, go check the exchange for updates.</div>
		{/await}
		<slot/>
	</div>
	<div class="card__footer">
		<SignupButton 
			url="https://my.solidbit.io/register?referral=8162bf0b099178918c9988319225721d"
			label="Buy PXP"/>
		<TooltipBeta label="RECOMMENDED" description="PointPay partner with low fees and fast transaction times."/>
	</div>
</div>


<style lang="stylus">
.name
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
	margin-left 8px

.card
	border 1px solid var(--surface-3)
	border-radius 20px
	background var(--surface-2)
	display flex
	flex-direction column
	padding 16px
	
	&__head
		color var(--on-surface)
		display flex
		justify-content space-between

	&__body
		border-top 1px solid var(--surface-3)
		color var(--on-surface)
		font 400 14px/20px 'Roboto', sans-serif
		margin-top 16px
		padding-top 16px
	
	&__footer
		border-top 1px solid var(--surface-3)
		color var(--on-surface)
		display flex
		flex-direction row-reverse
		justify-content space-between
		margin-top 16px
		padding-top 24px

.label
	display flex
	justify-content space-between

.icon-button
	align-items center
	color var(--on-surface)
	border-radius 50%
	display inline-flex
	fill var(--on-surface)
	height 40px
	justify-content center
	margin-right 4px
	width 40px

.image
	border-radius 25%
	height 40px
	margin-right 8px
	overflow hidden
	width 40px

.exchange
	align-items center
	display flex

.error
	color var(--negative)
	padding 8px 0
</style>