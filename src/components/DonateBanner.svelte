<script>
	import Icon from './Icon.svelte'
</script>

<div class="banner">
	<div class="head">
		<span class="indicator">
			<Icon icon="heart"/>
		</span>
		<div class="title">Donations are optional!</div>
	</div>
	<div class="body">
		I understand not everyone can afford it and that's fine. But if you do and want so, I will be more than happy to include your name on the donor section, just drop me a message on Telegram (@Katriel_Lucas) or send a note on the donation.
	</div>
</div>

<style lang="stylus">
.banner
	background var(--surface-2)
	border solid 1px var(--surface-3)
	border-radius 20px
	color var(--on-surface)
	fill currentcolor
	margin-top 32px
	padding 16px

.head
	align-items center
	display flex
	margin-bottom 8px
	flex 1

.indicator
	align-items center
	background var(--surface-3)
	border-radius 50%
	display flex
	height 40px
	justify-content center
	width 40px

.title
	font 500 18px/22px 'Roboto', sans-serif
	margin-left 16px

.body
	align-items center
	border-top solid 1px var(--surface-3)
	display flex
	font 400 16px/22px 'Roboto', sans-serif
	justify-content space-between
	padding-top 16px
</style>