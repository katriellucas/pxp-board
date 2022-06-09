<script>
	import Spinner from './Spinner.svelte'

	export let exchange;

	let test;

	function wtx(url) {
		const api = fetch(url).then(res => res.json());
		return api
	}

	switch (exchange) {
		case "Bitrue": {
			test = wtx('https://openapi.bitrue.com/api/v1/exchangeInfo').then(api => {
				let coins = api.coins
				for (let coin of coins) {
					if (coin.coin === 'pxp') {
						const info = { 
							min_withdrawal: `${parseFloat(coin.chainDetail[0].minWithdraw).toFixed(2)} PXP`,
							fee_withdrawal: `${parseFloat(coin.chainDetail[0].withdrawFee).toFixed(2)} PXP`
						}
						return info
					}
				}
			})
			break;
		}
		case "BitGlobal": {
			test = wtx('https://global-openapi.bithumb.pro/openapi/v1/spot/config').then(api => {
				const coins = api.data.coinConfig
				for (let coin of coins) {
					if (coin.name === 'PXP') {
						const info = { 
							min_withdrawal: `${coin.minWithdraw} PXP`,
							fee_withdrawal: `${parseFloat(coin.withdrawFee).toFixed(2)} PXP`,
						}
						return info
					}
				}
			})
			break;
		}
		case "Bittrex": {
			test = wtx('https://fees.pxp.workers.dev/?api=https://api.bittrex.com/v3/currencies/pxp').then(api => {
				const info = { 
					min_withdrawal: `N/A`,
					fee_withdrawal: `${parseFloat(api.txFee).toFixed(2)} PXP`
				}
				return info
			})
			break;
		}
		case "WhiteBIT": {
			test = wtx('https://fees.pxp.workers.dev/?api=https://whitebit.com/api/v4/public/fee').then(api => {
				const info = { 
					min_withdrawal: `${parseFloat(api.PXP.withdraw.min_amount).toFixed(2)} PXP`,
					fee_withdrawal: `${parseFloat(api.PXP.withdraw.fixed).toFixed(2)} PXP`
				}
				return info
			})
			break;
		}
		case "Uniswap (v3)": {
			test = wtx('https://api.gasprice.io/v1/estimates?countervalue=usd').then(api => {
				let ethereum = parseFloat(api.result.ethPrice)
				let min_fee = ((parseFloat(api.result.eco.feeCap) * 129830) * 0.000000001 * ethereum).toFixed(2)
				let max_fee = ((parseFloat(api.result.instant.feeCap) * 129830) * 0.000000001 * ethereum).toFixed(2)

				const info = { 
					min_withdrawal: `N/A`,
					fee_withdrawal: `$${min_fee} ~ $${max_fee}`
				}
				return info
			})
			break;
		}
		default: {
			break;
		}
	}

</script>

{#await test}
	<div class="label">
		Min. Withdrawal:
		<span><Spinner/></span>
	</div>
	<div class="label">
		Withdrawal Fee:
		<span><Spinner/></span>
	</div>
{:then coin}
	<div class="label">
		Min. Withdrawal:
		<span>{coin.min_withdrawal}</span>
	</div>
	<div class="label">
		Withdrawal Fee:
		<span>{coin.fee_withdrawal}</span>
	</div>
{:catch error}
	<div class="error">API isn't working or is in maintenance, go check the exchange for updates.</div>
{/await}

<style lang="stylus">
.label
	display flex
	justify-content space-between

.error
	color var(--negative)
	padding 8px 0
</style>
