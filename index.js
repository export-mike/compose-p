const compose =
	(...funcs) =>
	(...args) =>
	funcs.reduceRight(async (a, f) => {
		if (Array.isArray(a)) {
			return await f.apply(undefined, await a);
		}
		return await f(await a);
	}, args)

module.exports = compose;
