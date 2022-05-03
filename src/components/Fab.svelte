<script>
	import { scale } from 'svelte/transition';
	import Icon from '../components/Icon.svelte'

	let y;

	function goUp() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
</script>

<svelte:window bind:scrollY={y}/>


<div class="sticky">
	{#if y > 64}
		<button class="fab ripple" on:click="{goUp}" transition:scale="{{duration: 300}}">
			<Icon icon="arrow-up"/> 
		</button>
	{/if}
</div>


<style lang="stylus">
.sticky
	bottom 96px
	display flex
	justify-content right
	margin-bottom -28px
	min-height 56px
	position sticky

	@media(min-width 840px)
		bottom 16px

.fab
	align-items center
	background var(--surface-3)
	border-radius 56px
	color var(--on-surface)
	cursor pointer
	display flex
	filter drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))
	fill currentcolor
	height 56px
	justify-content center
	margin-right 16px
	min-width 56px
</style>