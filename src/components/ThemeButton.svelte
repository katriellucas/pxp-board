<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte'

	export let mode;
	console.log(mode, "on ThemeButton")

	const dispatch = createEventDispatcher();

	function modeDark(mode) {
		console.log(mode, "sdfsdf")
		dispatch('message', mode);
	}


</script>

{#if mode == "dark"}
	<button class="icon-button ripple" on:click={() => modeDark("light")}>
		<Icon icon="light"/>
	</button>
{:else}
	<button class="icon-button ripple" on:click={() => modeDark("dark")}>
		<Icon icon="dark"/>
	</button>
{/if}

<style lang="stylus">
.icon-button
	align-items center
	background var(--surface-2)
	color var(--on-surface-alt)
	border-radius 50%
	display inline-flex
	fill var(--on-surface-alt)
	height 40px
	justify-content center
	margin-left 8px
	width 40px
</style>