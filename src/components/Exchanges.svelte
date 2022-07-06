<script>
	import { fade } from 'svelte/transition';

	import Solidbit from './beta/Solidbit.svelte'
	import CoinTiger from './beta/CoinTiger.svelte'

	import ExFee from './ExFee.svelte'
	import Icon from './Icon.svelte'
	import TooltipBeta from './TooltipBeta.svelte'

	const fetchImage = (async () => {
		const response = await fetch('https://api.coingecko.com/api/v3/coins/pointpay/tickers?include_exchange_logo=true&depth=false')
    return await response.json()
	})()

	const extra = {
		Bitrue: {
			refer: "https://www.bitrue.com/act/partner/landing?cn=900000&inviteCode=ETQZEGL",
			graph: "https://bitrue.com/trade/pxp_usdt",
			tooltip: {
				label: "FAST",
				description: "Best volume, chances are that your order will be executed faster."
			}
		},
		WhiteBIT: {
			refer: "https://whitebit.com/referral/1bd865b8-13cb-4395-a9fa-70332777b455",
			graph: "https://whitebit.com/trade-pro/PXP-USDT?type=spot",
			tooltip: {
				label: "GREAT",
				description: "Reasonable volume with low fees."
			}
		},
		BitGlobal: {
			refer: "https://www.bitglobal.com/register;i=cwh4at",
			graph: "https://bitglobal.com/en-us/exchange/professional?q=PXP-USDT"
		},
		Bittrex: {
			refer: "https://bittrex.com/discover/join?referralCode=MWC-FKX-2AP",
			graph: "https://global.bittrex.com/Market/Index?MarketName=USDT-PXP"
		},
		"Uniswap (v3)": {
			refer: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x95aa5d2dbd3c16ee3fdea82d5c6ec3e38ce3314f&chain=mainnet}",
			graph: "https://info.uniswap.org/#/tokens/0x95aa5d2dbd3c16ee3fdea82d5c6ec3e38ce3314f"

		}
	}

	function myFunc(node, value) {
		node.textContent = `$${value.toFixed(5)}`;
	}

	function exVolume(node, value) {
		node.textContent = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(value);
	}

</script>

<h2 class="title">Exchanges</h2>

{#await fetchImage}
	<div class="loader"></div>
{:then data}
	<div class="card-grid">
		<Solidbit>
			<ExFee exchange="Solidbit"/>
		</Solidbit>
		{#each data.tickers as _, i}
			<div class="card" transition:fade>
				<div class="card__head">
					<div class="exchange">
						<img class="image" src="{data.tickers[i].market.logo}" alt="{data.tickers[i].market.name}" />
						<span class="name">{data.tickers[i].market.name}</span>
					</div>
					<a href="{extra[data.tickers[i].market.name].graph}" class="icon-button ripple" target="_blank" rel="sponsored">
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
					<a href="{extra[data.tickers[i].market.name].refer}" target="_blank" class="button ripple">
						<span class="label">Buy PXP</span>
					</a>
					{#if extra[data.tickers[i].market.name].tooltip}
						<TooltipBeta
							label={extra[data.tickers[i].market.name].tooltip.label}
							description={extra[data.tickers[i].market.name].tooltip.description}
						/>
					{/if}
				</div>
			</div>
		{/each}
		<CoinTiger>
			<ExFee exchange="CoinTiger"/>
		</CoinTiger>
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