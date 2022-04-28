<script>
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import IconButton from '../components/IconButton.svelte'
	import OnSave from '../components/OnSave.svelte'
</script>

<section class="savings" in:fade="{{delay: 100, duration: 250 }}" out:fade="{{ duration: 100 }}">
	<ul class="card">
		<li class="item">
			<div class="title">Crypto</div>
			<div class="interest">
				<IconButton icon="info"/>
				<table class="rates">
					<tr>
						<th>Amount of tokens</th>
						<th>Yield on PXP</th>
					</tr>
						<OnSave red quantity="0 ~ 100 PXP" on_savings="0.0%" />
						<OnSave quantity="101 ~ 15,000 PXP" on_savings="2.0%" />
						<OnSave quantity="15,001 ~ 35,000 PXP" on_savings="3.0%" />
						<OnSave quantity="35,001 ~ 70,000 PXP" on_savings="4.0%" />
						<OnSave quantity="70,001 ~ 100,000 PXP" on_savings="5.0%" />
						<OnSave quantity="100,001 ~ 300,000 PXP" on_savings="6.0%" />
						<OnSave quantity="300,001 ~ 1,000,000 PXP" on_savings="8.0%" />
						<OnSave quantity="1,000,001+ PXP" on_savings="10.0%" />
				</table>
			</div>
		</li>
		<slot/>
	</ul>
</section>

<style lang="stylus">
.savings
	display flex
	flex 1
	justify-content center

.interest
	position relative
	
	&:hover
		.rates
			opacity 1
			visibility visible

.rates
	background var(--surface-3)
	border-collapse collapse
	border-radius 16px
	position absolute
	opacity 0
	right 0
	transition opacity .3s, visibility .3s
	visibility hidden
	z-index 1

.card
	align-items center
	background var(--surface-2)
	border 1px solid var(--surface-3)
	border-radius 28px
	max-width 560px
	padding 24px
	width 100%

.item
	align-items center
	color var(--on-surface)
	display flex
	font 500 16px/20px 'Roboto', sans-serif
	justify-content space-between
	margin-bottom 32px

.title
	color var(--on-surface)
	font 500 24px/28px 'Roboto', sans-serif

.interest
	color var(--on-surface-alt)
	font 500 16px/20px 'Roboto', sans-serif
	
tr
	height 40px
	border-bottom 1px solid var(--surface-3)

th
	color var(--on-surface-alt)
	font 400 14px/20px 'Roboto', sans-serif
	padding 16px 16px 8px
	text-align right
	white-space nowrap

	&:first-of-type
		text-align left
		width 100%
</style>
