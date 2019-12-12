document.addEventListener('DOMContentLoaded', (event) => {
	addWorldSvg();
	d3Init();
	displayCountryList();
});

const addWorldSvg = () => {
	const container = document.querySelector('.world-svg-container');
	container.innerHTML = worldSvg;
};

const displayCountryList = () => {
	const container = document.querySelector('.country-list-container');
	let countryListHtml = '<ol>';
	countries.forEach( country => {
		console.log(country);
		countryListHtml += `<li>${ country.name }, ID: ${ country.id }</li>`
	});
	countryListHtml += '</ol>';
	container.innerHTML = countryListHtml;
};

const d3Init = () => {
	// This is only for demo and boilerplate for you to start with D3

	const body = d3.select('.d3-container');

	d3.tsv('../data/titanic.tsv', function (error, data) {
		if (error) throw error;

		// Names

		body.selectAll('div')
			.data(data)
			.enter().append('div')
			.attr('class', 'name-row')
			.text(function (d, i) {
				var t = i + ". " + d.name;
				if (d.survived == '0')
					t = t + " ⨯";
				return t;
			});
	});
};