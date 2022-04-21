<script>
	import {Route} from 'tinro';
	import { fade } from 'svelte/transition';
	import Savings from './routes/Savings.svelte'
	import Staking from './routes/Staking.svelte'

	import Chart from './components/Chart.svelte'
	import Crypto from './components/Crypto.svelte'
	import DonorDialog from './components/DonorDialog.svelte'
	import Exchanges from './components/Exchanges.svelte'
	import Fab from './components/Fab.svelte'
	import Footer from './components/Footer.svelte'
	import OnStake from './components/OnStake.svelte'
	import NavigationBar from './components/NavigationBar.svelte'
	import NavigationRail from './components/NavigationRail.svelte'
	import Banner from './components/Banner.svelte'
	import TopAppBar from './components/TopAppBar.svelte'

	let quest = Math.floor((Math.random() * 7));
	let dialog = false

	function handleMessage(event) {
		dialog = event.detail
	}
</script>

<TopAppBar/>
<NavigationRail/>

<main>
	<div class="live-area">
		<Route path="/">
			<section in:fade="{{delay: 100, duration: 250 }}" out:fade="{{ duration: 100 }}">>
				<div style="display: grid; grid-template-columns: 1fr">
					<Chart/>
				</div>
				<Exchanges/>
				<Banner quest="{quest}"/>
			</section>
		</Route>
		<Route path="/savings">
			<Savings>
				<Crypto name="PointPay" ticker="PXP" color="#F7931A" value="up to 10.0%"/>
				<Crypto name="Bitcoin" ticker="BTC" color="#F7931A" value="4.2%"/>
				<Crypto name="Ethereum" ticker="ETH" color="#627EEA" value="2.6%"/>
				<Crypto name="Tether" ticker="USDT" color="#26A17B" value="6.0%"/>
				<Crypto name="USD Coin" ticker="USDC" color="#3E73C4" value="6.0%"/>
				<Crypto name="Bitcoin Cash" ticker="BCH" color="#3E73C4" value="4.1%"/>
				<Crypto name="ChainLink" ticker="LINK" color="#3E73C4" value="3.1%"/>
				<Crypto name="XRP" ticker="XRP" color="#3E73C4" value="3.0%"/>
				<Crypto name="Litecoin" ticker="LTC" color="#3E73C4" value="4.8%"/>
				<Crypto name="Tron" ticker="TRX" color="#3E73C4" value="3.0%"/>
				<Crypto name="Tether Gold" ticker="XAUT" color="#26A17B" value="3.0%"/>
				<Crypto name="Dai" ticker="DAI" color="#D59B05" value="6.0%"/>
				<Crypto name="Binance Coin" ticker="BNB" color="#D59B05" value="5.0%"/>
			</Savings>
		</Route>
		<Route path="/staking">
			<Staking>
				<OnStake quantity="0 ~ 100 PXP" on_stake03="2.0%" on_stake06="4.5%" on_stake12="7.5%"/>
				<OnStake quantity="101 ~ 15,000 PXP" on_stake03="3.0%" on_stake06="5.5%" on_stake12="8.5%"/>
				<OnStake quantity="15,001 ~ 35,000 PXP" on_stake03="5.5%" on_stake06="7.0%" on_stake12="10.0%"/>
				<OnStake quantity="35,001 ~ 70,000 PXP" on_stake03="6.0%" on_stake06="8.0%" on_stake12="11.5%"/>
				<OnStake quantity="70,001 ~ 100,000 PXP" on_stake03="7.0%" on_stake06="9.0%" on_stake12="12.5%"/>
				<OnStake quantity="100,001 ~ 300,000 PXP" on_stake03="8.0%" on_stake06="10.0%" on_stake12="15.0%"/>
				<OnStake quantity="300,001 ~ 1,000,000 PXP" on_stake03="9.0%" on_stake06="12.5%" on_stake12="17.5%"/>
				<OnStake quantity="1,000,001+ PXP" on_stake03="10.0%" on_stake06="15.0%" on_stake12="20.0%"/>
			</Staking>
		</Route> 
	</div>
</main>

<!-- <Fab on:message={handleMessage}/> -->
<Footer/>
<NavigationBar/>
{#if dialog }
	<DonorDialog on:message={handleMessage}/>
{/if}


<style lang="stylus">
main
	min-height 100%

.live-area
	display grid
	grid-template-rows 1fr
	grid-template-columns 1fr
	padding 0 8px

	& > :global(*)
		grid-row 1
		grid-column 1
	
	@media (min-width 360px)
		padding 0 16px

	@media (min-width 600px)
		padding 0 32px

	@media (min-width 840px)
		padding 0 64px

	@media (min-width 1080px)
		padding 0 96px
</style>