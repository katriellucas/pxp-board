<script>
	export let quantity;
	export let on_savings;
	export let red = false;
</script>

<tr>
	<td>{quantity}</td>
	<td class:red>{on_savings}</td>
</tr>

<style lang="stylus">
.red
	color var(--red)

tr
	height 40px
	border-bottom 1px solid var(--surface-3)

	&:last-of-type
		border-bottom none

td
	color var(--green)
	font 400 14px/20px 'Roboto', sans-serif
	padding 0 16px
	padding-bottom 16px
	text-align right
	white-space nowrap

	&:first-of-type
		color var(--on-surface)
		text-align left
		width 100%

</style>
