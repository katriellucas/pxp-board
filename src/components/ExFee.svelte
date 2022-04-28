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
						const fee = `${parseFloat(coin.chainDetail[0].withdrawFee).toFixed(2)} PXP`
						return fee
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
						const fee = `${parseFloat(coin.withdrawFee).toFixed(2)} PXP`
						return fee
					}
				}
			})
			break;
		}
		case "Bittrex": {
			test = wtx('https://fees.pxp.workers.dev/?api=https://api.bittrex.com/v3/currencies/pxp').then(api => {
				const fee = `${parseFloat(api.txFee).toFixed(2)} PXP`
				return fee
			})
			break;
		}
		case "WhiteBIT": {
			test = wtx('https://fees.pxp.workers.dev/?api=https://whitebit.com/api/v4/public/fee').then(api => {
				const fee = `${parseFloat(api.PXP.withdraw.fixed).toFixed(2)} PXP`
				return fee
			})
			break;
		}
		case "Uniswap (v3)": {
			test = wtx('https://api.gasprice.io/v1/estimates?countervalue=usd').then(api => {
				let ethereum = parseFloat(api.result.ethPrice)
				let min_fee = ((parseFloat(api.result.eco.feeCap) * 129830) * 0.000000001 * ethereum).toFixed(2)
				let max_fee = ((parseFloat(api.result.instant.feeCap) * 129830) * 0.000000001 * ethereum).toFixed(2)
				const fee = `$${min_fee} ~ $${max_fee}`
				return fee
			})
			break;
		}
		default: {
			break;
		}
	}

</script>

{#await test}
	<Spinner/>
{:then fee}
	{fee}
{:catch error}
	<p style="color: var(--red)">{error}</p>
{/await}