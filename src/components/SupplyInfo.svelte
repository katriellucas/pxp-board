<script>
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte'

	let max_supply;
	let total_supply;
	let circulating_supply;
	let burned_tokens;

	function formatInfo(node, value) {
		let tokens = new Intl.NumberFormat('en-US', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value);
		node.textContent = `${tokens} PXP`
	}

	const gecko_api = (async () => {
		const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pointpay&order=market_cap_desc&per_page=1&page=1&sparkline=false")
    const data = await response.json()
    return data[0]
	})()

	const artemis_api = (async () => {
		const response = await fetch("https://pxptokensupply.artemispointpay.workers.dev")
    const data = await response.json()
    return data
	})()

	Promise.all([gecko_api, artemis_api])
		.then((values) => {
  		let supply = {
				"gecko": values[0],
				"artemis": values[1]
			}
			return supply
		})
		.then((supply) => {
			if (supply.artemis.total_supply >= supply.gecko.total_supply) {
				max_supply = supply.gecko.max_supply
				total_supply = supply.gecko.total_supply
				circulating_supply = supply.gecko.circulating_supply
				burned_tokens = (supply.gecko.max_supply - supply.gecko.total_supply)
			} else {
				max_supply = supply.artemis.max_supply
				total_supply = supply.artemis.total_supply
				circulating_supply = supply.artemis.circulating_supply
				burned_tokens = (supply.artemis.max_supply - supply.artemis.total_supply)
			}
		})

</script>

<h2 class="title">Supply info</h2>

<div class="card-grid">
	<div class="card">
		<div class="card__head">
			<div class="image">
				<Icon icon="flag"/>
			</div>
			<h3 class="name">Initial</h3>
		</div>
		<div class="card__body">
			{#if max_supply }
				<span use:formatInfo={max_supply}></span>
			{:else}
				<div class="loader"></div>
			{/if}
		</div>
	</div>
	<div class="card">
		<div class="card__head">
			<div class="image">
				<Icon icon="bank"/>
			</div>
			<h3 class="name">Total</h3>
		</div>
		<div class="card__body">
			{#if total_supply }
				<span use:formatInfo={total_supply}></span>
			{:else}
				<div class="loader"></div>
			{/if}
		</div>
	</div>
	<div class="card">
		<div class="card__head">
			<div class="image">
				<Icon icon="circulation"/>
			</div>
			<h3 class="name">Circulating</h3>
		</div>
		<div class="card__body">
			{#if circulating_supply }
				<span use:formatInfo={circulating_supply}></span>
			{:else}
				<div class="loader"></div>
			{/if}
		</div>
	</div>
	<div class="card">
		<div class="card__head">
			<div class="image">
				<Icon icon="fire"/>
			</div>
			<h3 class="name">Burned</h3>
		</div>
		<div class="card__body">
			{#if burned_tokens }
				<span use:formatInfo={burned_tokens}></span>
			{:else}
				<div class="loader"></div>
			{/if}
		</div>
	</div>
</div>


<style lang="stylus">

.loader
	background url(../loading.svg)
	background-position center
	background-repeat no-repeat
	background-size 32px auto
	display flex
	justify-content center
	width 100%
	height 32px

.title
	color var(--on-surface)
	font 500 20px/24px 'Roboto', sans-serif
	padding 32px 0 16px

.card-grid
	display grid
	gap 8px
	grid-template-columns 1fr

	@media (min-width: 400px)
		grid-template-columns 1fr 1fr

	@media (min-width: 840px)
		gap 16px

	@media (min-width: 960px)
		grid-template-columns 1fr 1fr 1fr 1fr

.card
	border 1px solid var(--surface-3)
	border-radius 20px
	background var(--surface-2)
	display flex
	flex-direction column
	padding 16px
	
	&__head
		align-items center
		color var(--on-surface)
		display flex

	&__body
		align-items flex-end
		border-top 1px solid var(--surface-3)
		color var(--on-surface)
		display flex
		font 500 16px/20px 'Roboto', sans-serif
		margin-top 16px
		height 40px
		justify-content center

.image
	align-items center
	background var(--surface-3)
	border-radius 50%
	display flex
	fill var(--on-surface)
	height 40px
	justify-content center
	margin-right 16px
	width 40px

.name
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
</style>