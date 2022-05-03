<script>
	export let name;
	export let ticker;
	export let color;
	export let value;
</script>

<li class="item" style="--color: {color}">
	<div class="crypto">
		<img class="logo" src="crypto_logos/{name}.svg" alt="{name} logo"/>
		<div>
			<div class="label">{name}</div>
			<div class="ticker">{ticker}</div>
		</div>
	</div>
	<div class="value">{value}</div>
</li>

<style lang="stylus">
.item
	align-items center
	display flex
	justify-content space-between
	margin-bottom 32px
	
	&:last-of-type
		margin-bottom 0

.crypto
	align-items center
	display flex

.logo
	height auto
	margin-right 16px
	width 48px

.label
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
	margin-bottom 4px

.ticker
	color var(--on-surface-alt)
	font 400 14px/20px 'Roboto', sans-serif

.value
	color var(--positive)
	font 500 16px/20px 'Roboto', sans-serif
</style>