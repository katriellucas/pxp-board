<script>
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
</script>

<section class="staking" in:fade="{{delay: 100, duration: 250 }}" out:fade="{{ duration: 100 }}">
	<div class="card">
		<div class="title">Staking</div>
		<table>
			<tr>
				<th>Amount of tokens</th>
				<th>3 months</th>
				<th>6 months</th>
				<th>1 year</th>		
			</tr>
			<slot/>
		</table>
	</div>
</section>

<style lang="stylus">

.staking
	display flex
	justify-content center
	overflow auto

.card
	align-items center
	background var(--surface-2)
	border 1px solid var(--surface-3)
	border-radius 28px
	max-width 560px
	overflow auto
	width 100%

.title
	color var(--on-surface)
	font 500 24px/28px 'Roboto', sans-serif
	margin 24px 24px 12px

table
	box-sizing border-box
	border-collapse collapse
	min-width 480px
	width 100%

tr
	height 56px
	border-bottom 1px solid var(--surface-3)

th
	color var(--on-surface-alt)
	font 400 14px/20px 'Roboto', sans-serif
	min-width 64px
	padding 0 24px
	text-align right
	white-space nowrap

	&:first-of-type
		text-align left
		width 100%
</style>
