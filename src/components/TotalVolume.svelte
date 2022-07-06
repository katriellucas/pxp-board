<script>
	import { daily_volume } from '../assets/js/store.js';
	import Spinner from './Spinner.svelte'

	export let mobile;

	$: total_vol = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format($daily_volume);
	

</script>

<div class="card" class:mobile>
	<div class="title">24H Volume:</div>
	{#if $daily_volume}
		<div class="volume">{total_vol}</div>
	{:else}
		<Spinner/>
	{/if}
</div>

<style lang="stylus">
.card
	align-items center
	border 1px solid var(--surface-3)
	border-radius 20px
	background var(--surface-2)
	display none
	height 40px
	padding 0 16px

	@media(min-width 600px)
		display flex
	
.title
	color var(--on-surface)
	font 500 14px/18px 'Roboto', sans-serif
	margin-right 12px

.volume
	color var(--on-surface)
	font 400 14px/18px 'Roboto', sans-serif

// Mods ---

.mobile
	display flex
	height auto
	justify-content space-between
	margin-bottom 8px
	padding 16px

	@media(min-width 600px)
		display none

	@media(min-width 840px)
		margin-bottom 16px
</style>