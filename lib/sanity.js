import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'mfsocojr',
	dataSet: 'production',
	apiVersion: '2021-03-25',
	token:
		'skRZMxo6nJeqrb7H0R9CKk6oOf6YOCulOjpB0pYV6ojTwjc4chNJS626pLvlaPtjvAdoFA9V9B35nK4BfMlAYXo681xP2c8xtpsNKXsQbIiSoSUKAdZzRAZFJ3W6etRwZ2TSa4xLMwg0Ptk5VYLG7nyy43Sx7CPrPzSG3Em95t0t9b4xlPcc',
	useCdn: false,
});
