/*
*   Requires Node 8+
*   Works in chrome, simply copy and paste into console.
*/

const R = require('ramda');
const compose = require('./');

const get = (v) => {
	return Promise.resolve(`${v}s`);
}

const getAllError = compose(
  get,
  () => Promise.reject('Error! :('),
  get,
  get
);
const getAll = compose(
  get,
  get,
  get,
  get
);
const getAllR = R.composeP(
	get,
	get,
	get,
	get
)
async function main() {
	try {
		const v = await getAllError('ted');
		console.log('result', v);
	} catch (e) {
		console.error(e);
	}

    try {
		const v = await getAll('ted');
		console.log('result', v);
	} catch (e) {
		console.error(e);
	}

	console.log(await get(await get(await get('ted'))));
	console.log(await getAllR('ramda'))
}

main();
