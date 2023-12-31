function objectFlat(srcObj, propName) {
	if (Array.isArray(srcObj)) {
		return propName
			? srcObj.reduce(
					(tgtObj, item, index) => ({
						...tgtObj,
						[`${propName}[${index}]`]: objectFlat(item),
					}),
					{}
			  )
			: srcObj.map(item => objectFlat(item));
	}
	if (isObject(srcObj)) {
		return Object.entries(srcObj).reduce((tgtObj, [key, val]) => {
			const tgtProp = propName ? `${propName}.${key}` : key;
			return { ...tgtObj, ...objectFlat(val, tgtProp) };
		}, {});
	}
	return propName ? { [propName]: srcObj } : srcObj;
}

function isObject(obj) {
	return obj === Object(obj) && !Array.isArray(obj);
}

const primitiveValues = [null, true, 42, 'epsilon'];

const arrayTests = [
	[],
	[null, true, 42, 'epsilon'],
	[
		[null, true, 42, 'epsilon'],
		[null, true, 42, 'epsilon'],
		[null, true, 42, 'epsilon'],
	],
];

const objectTests = [
	{},
	{
		alpha: null,
		beta: true,
		gamma: 42,
		delta: 'epsilon',
	},
	{
		zeta: {
			alpha: null,
			beta: true,
		},
		eta: {
			gamma: 42,
			delta: 'epsilon',
		},
	},
	{
		theta: {
			zeta: {
				alpha: null,
				beta: true,
			},
			eta: {
				gamma: 42,
				delta: 'epsilon',
			},
		},
	},
];

const compositeTests = [
	{
		alpha: null,
		beta: true,
		gamma: 42,
		delta: 'epsilon',
		zeta: [null, true, 42, 'epsilon'],
	},
	[
		{
			alpha: null,
			beta: true,
			gamma: 42,
			delta: 'epsilon',
		},
		{
			alpha: null,
			beta: true,
			gamma: 42,
			delta: 'epsilon',
		},
	],
];

console.clear();
console.log('objectFlat\n==========\n');
runTests(primitiveValues, 'primitiveValues');
runTests(arrayTests, 'arrayTests');
runTests(objectTests, 'objectTests');
runTests(compositeTests, 'compositeTests');

function runTests(testData, testCases) {
	console.log(`\nTestcases: ${testCases}`);
	console.table(testData.map(test => JSON.stringify(objectFlat(test))));
}
