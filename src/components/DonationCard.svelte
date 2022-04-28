<script>
	// WIP

	import Icon from './Icon.svelte'
</script>


<div class="card">
	<div class="card__head">
		<div class="exchange">
			<img class="image" src="{data.tickers[i].market.logo}" alt="{data.tickers[i].market.name}" />
		</div>
	</div>
			<div class="card__body">
				<div class="price">
					PXP price:
					<span use:myFunc={data.tickers[i].converted_last.usd}></span>
				</div>
				<div class="volume">
					24H Volume:
					<span use:exVolume={data.tickers[i].converted_volume.usd}></span>
				</div>
				<div class="fee">
					Withdrawal fee:
					<span class="fee"><ExFee exchange="{data.tickers[i].market.name}"/></span>
				</div>
			</div>
		</div>
	{/each}
</div>


<style lang="stylus">
.title
	color var(--on-surface)
	font 500 20px/24px 'Roboto', sans-serif
	padding 32px 0 16px

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

	@media (min-width: 600px)
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

.price, .fee, .volume
	display flex
	justify-content space-between

.button
	align-items center
	color var(--on-surface)
	border-radius 50%
	display inline-flex
	fill var(--on-surface)
	height 40px
	justify-content center
	width 40px

.image
	width 40px
	height 40px
	margin-right 16px

.name
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif

.exchange
	align-items center
	display flex
</style>