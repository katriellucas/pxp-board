<svelte:head>
	<script async src="js/chart.js"></script>
</svelte:head>

<div class="wrapper">
	<coin-stats-chart-widget
		type="medium"
		coin-id="pointpay"
		chart-height="170"
		currency="USD"
		locale="en"
		bg-color="var(--surface-2)"
		text-color="var(--on-surface)"
		status-up-color="var(--green)"
		status-down-color="var(--red)"
		buttons-color="transparent"
		chart-color="#0C7EF9"
		chart-gradient-from="#0c7ef94d"
		chart-gradient-to="#00000000"
		chart-label-background="#000000"
		candle-grids-color="var(--surface-3)"
		border-color="var(--surface-3)"
		font="Roboto, Arial, Helvetica"
		class="chart">
	</coin-stats-chart-widget>
</div>



<style lang="stylus">
.wrapper
	display grid
	grid-template-columns 1fr

.chart
	background url(../loading.svg)
	background-position center
	background-repeat no-repeat
	background-size 64px auto
	grid-column 1 / 4
	grid-row 1
	height 320px
</style>

