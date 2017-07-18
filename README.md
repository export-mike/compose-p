# Compose with Promises for async await node 8

```js
/*
*   Requires Node 8+
*   Also Works in chrome, simply copy and paste into console.
*/


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
}

main();
```

# Alternatives
Use ramda R.composeP

## Contributions Welcome

Thanks to @cameronbourke and @gwyneplaine for the discussion. :D
