<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from '../components/Icon.svelte'

	let y;

	const dispatch = createEventDispatcher();

	function openDialog() {
		dispatch('message', true);
	}

</script>

<svelte:window bind:scrollY={y}/>


<div class="sticky">
	<button class="fab ripple" on:click="{openDialog}">
		<Icon icon="heart"/> 
		<span class="label">Donate</span>
	</button>
</div>



<style lang="stylus">
.sticky
	bottom 96px
	display flex
	justify-content right
	margin-bottom -28px
	position sticky

	@media(min-width 840px)
		bottom 16px

.fab
	align-items center
	background var(--primary)
	border-radius 56px
	color var(--on-primary)
	cursor pointer
	display flex
	filter drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))
	fill currentcolor
	height 56px
	justify-content center
	margin-right 16px
	min-width 80px
	padding 0 16px 

.label
	font 500 14px/20px 'Roboto', sans-serif
	margin-left 12px
	margin-right 8px
</style>