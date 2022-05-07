<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	import Icon from './Icon.svelte'

	export let label
	export let msg
	export let value

	function donateMidpoint() {
		navigator.clipboard.writeText(value)
		dispatch('alert', msg);
	}
</script>


<button class="button ripple" on:click={donateMidpoint}>
	<Icon mini icon="content-copy"/>
	<span class="label">{label}</span>
</button>

<style lang="stylus">
.button
	align-items center
	background var(--primary)
	border-radius 20px
	color var(--on-primary)
	display flex
	fill currentcolor
	height 40px
	justify-content center
	padding 0 16px

.label
	margin-left 8px
	font 500 14px/20px 'Roboto', sans-serif
</style>