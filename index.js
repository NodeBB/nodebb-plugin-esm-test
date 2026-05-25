
// esm import
import process from 'node:process';

// nbbRequire import to require core modules
const user = nbbRequire('./src/user');

// test1 is an ESM module
const test1 = nbbRequire('./src/test1');

export function init(params) {
	params.router.get('/esm-test', async function (req, res) {
		const userData = await user.getUserData(req.uid);
		test1.foo();
		res.json({
			process: process.version,
			userData,
			bar: test1.bar
		});
	});
}

