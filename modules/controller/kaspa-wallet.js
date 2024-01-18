import {KarlsenWallet as BaseKarlsenWallet} from '/node_modules/@karlsen/ux/karlsen-ux.js';

class KarlsenWallet extends BaseKarlsenWallet{
	makeFaucetRequest(subject, args){
		let origin = 'https://faucet.karlsencoin.com';
		//origin = 'http://localhost:3000';
		const {address, amount} = args;
		let path = {
			'faucet-available': `available/${address}`,
			'faucet-request': `get/${address}/${amount}`
		}[subject];

		if(!path)
			return Promise.reject("Invalid request subject:"+subject)

		return fetch(`${origin}/api/${path}`, {
			method: 'GET'
		}).then(res => res.json())
	}
}

KarlsenWallet.define("karlsen-wallet")
