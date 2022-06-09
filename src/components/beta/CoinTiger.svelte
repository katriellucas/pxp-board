<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import ExFee from '.../ExFee.svelte'
	import Icon from '.../Icon.svelte'

	let total_vol = 0;

	const fetchImage = (async () => {
		const response = await fetch('https://b2t-api-cmc-solidbit.flexprotect.org/marketdata/cmc/v1/ticker')
    return await response.json()
	})()

	const refer = {
		CoinTiger: "https://www.cointiger.top/#/register?refCode=u9WJwL"
	}

	const graph = {
		CoinTiger: "https://www.cointiger.com/en-us/#/trade_pro?coin=pxp_usdt",
	}

	function myFunc(node, value) {
		node.textContent = `$${value.toFixed(5)}`;
	}

	function exVolume(node, value) {
		total_vol = total_vol + value;
		node.textContent = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(value);
	}

</script>

{#await fetchImage}
	<div class="loader"></div>
{:then data}
	<div class="card-grid">
		{#each data.tickers as _, i}
			<div class="card" transition:fade>
				<div class="card__head">
					<div class="exchange">
						<img class="image" src="{data.tickers[i].market.logo}" alt="{data.tickers[i].market.name}" />
						<span class="name">{data.tickers[i].market.name}</span>
					</div>
					<a href="{graph[data.tickers[i].market.name]}" class="icon-button ripple" target="_blank" rel="sponsored">
						<Icon icon="chart"/>
					</a>
				</div>
				<div class="card__body">
					<div class="price">
						PXP Price:
						<span use:myFunc={data.tickers[i].converted_last.usd}></span>
					</div>
					<div class="volume">
						24H Volume:
						<span use:exVolume={data.tickers[i].converted_volume.usd}></span>
					</div>
					<ExFee exchange="{data.tickers[i].market.name}"/>
				</div>
				<div class="card__footer">
					<a href="{refer[data.tickers[i].market.name]}" target="_blank" class="button ripple">
						<span class="label">Buy PXP</span>
					</a>
				</div>
			</div>
		{/each}
	</div>
{:catch error}
	<div>{error}</div>
{/await}


<style lang="stylus">
.title
	color var(--on-surface)
	font 500 20px/24px 'Roboto', sans-serif
	padding 32px 0 16px

.name
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
	margin-left 8px

.loader
	background url(../loading.svg)
	background-position center
	background-repeat no-repeat
	background-size 64px auto
	display flex
	justify-content center
	width 100%
	height 128px

.card-grid
	display grid
	gap 8px
	grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
	margin-bottom 32px

	@media (min-width 600px)
		gap 16px

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

.price, .volume
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

.button
	align-items center
	background var(--primary)
	color var(--on-primary)
	border-radius 20px
	display inline-flex
	fill currentcolor
	height 40px
	justify-content center
	padding 0 16px

.label
	font 500 14px/20px 'Roboto', sans-serif

.image
	width 40px
	height 40px
	margin-right 8px

.exchange
	align-items center
	display flex
</style>