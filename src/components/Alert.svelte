<script>
	import { fade, fly } from 'svelte/transition';
	export let msg;

	import Icon from './Icon.svelte'
</script>

<div class="alert">
	<div class="content" in:fly="{{y: -64, duration: 100}}" out:fade="{{ duration: 100 }}">
		<Icon icon="info"/>
		<span class="message">{msg}</span>
	</div>
</div>

<style lang="stylus">
.alert
	padding 0 16px
	position fixed
	left 50%
	max-width 640px
	top 16px
	transform translateX(-50%)
	width 100%

.content
	align-items center
	background var(--surface-3)
	border-left solid 8px var(--primary)
	border-radius 4px
	box-shadow none
	color var(--on-surface)
	display flex
	fill currentcolor
	padding 16px

.message
	font 400 14px/18px 'Roboto', sans-serif
	margin-left 12px
</style>