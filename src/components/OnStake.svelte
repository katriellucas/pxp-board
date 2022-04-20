<script>
	export let quantity;
	export let on_stake03;
	export let on_stake06;
	export let on_stake12;
</script>

<tr>
	<td>{quantity}</td>
	<td>{on_stake03}</td>
	<td>{on_stake06}</td>
	<td>{on_stake12}</td>
</tr>

<style lang="stylus">
tr
	border-bottom 1px solid var(--surface-3)

	&:last-of-type
		border-bottom none

td
	color var(--green)
	font 400 14px/20px 'Roboto', sans-serif
	height 56px
	min-width 64px
	padding 0 24px
	text-align right
	white-space nowrap

	&:first-of-type
		color var(--on-surface)
		text-align left
		width 100%

</style>