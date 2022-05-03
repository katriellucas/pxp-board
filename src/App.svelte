<script>
	import { onMount } from 'svelte';
	import {fade} from 'svelte/transition';
	import {Route} from 'tinro';

	import Savings from './routes/Savings.svelte'
	import Staking from './routes/Staking.svelte'
	import Donate from './routes/Donate.svelte'

	import Banner from './components/Banner.svelte'
	import Chart from './components/Chart.svelte'
	import Crypto from './components/Crypto.svelte'
	import DonateWith from './components/DonateWith.svelte'
	import Exchanges from './components/Exchanges.svelte'
	import Fab from './components/Fab.svelte'
	import Footer from './components/Footer.svelte'
	import NavigationBar from './components/NavigationBar.svelte'
	import NavigationRail from './components/NavigationRail.svelte'
	import OnStake from './components/OnStake.svelte'
	import TokenSupply from './components/TokenSupply.svelte'
	import TopAppBar from './components/TopAppBar.svelte'

	let theme = localStorage.theme;
	let quest = Math.floor((Math.random() * 8));

	function changeTheme() {
		document.body.className = ''
		document.body.classList.add(`theme-${theme}`)
	}

	function changeIcon(event) {
		theme = event.detail
		changeTheme()
		localStorage.setItem('theme', theme);
	}

	window.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', event => {
    	theme = event.matches ? "dark" : "light";
			changeTheme()
		});

	onMount(() => {
		if (theme) {
			theme = localStorage.theme
			console.log(theme,"ssssssss")
		} else {
			theme = (() => {
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					return "dark"
				} else {
					return "light"
				}
			})()
		}
		changeTheme()
	});
</script>

<TopAppBar mode="{theme}" on:message={changeIcon}/>
<NavigationRail/>

<main>
	<div class="live-area">
		<Route path="/">
			<section in:fade="{{delay: 100, duration: 250 }}" out:fade="{{ duration: 100 }}">
				<Chart/>
				<TokenSupply/>
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
		<Route path="/donate">
			<Donate>
				<DonateWith name="Pix" image="pix.svg" color="#32BCAD"/>
				<DonateWith name="PointPay Me" color="#F3BA2F"/>
				<DonateWith name="Binance Pay" color="#F3BA2F"/>
				<DonateWith name="Binance Pay" color="#F3BA2F"/>
			</Donate>
		</Route> 
	</div>
</main>

<Fab/>
<Footer/>
<NavigationBar/>


<style lang="stylus">
main
	margin-bottom 32px
	padding 0 16px
	flex 1

	@media (min-width 600px)
		padding 0 32px

	@media (min-width 840px)
		padding 0 64px

	@media (min-width 1080px)
		padding 0 96px

.live-area
	display grid
	grid-template-rows 1fr
	grid-template-columns 1fr

	& > :global(*)
		grid-row 1
		grid-column 1
</style>