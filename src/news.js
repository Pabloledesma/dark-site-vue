let news = {
	es: [
		{
			title: 'Este es el titulo de la noticia',
			body:`
				<div class="body-news">
					<p>Este es el cuerpo de la noticia.</p>
				</div>
			`,
			date: new Date(2017, 0, 25, 15, 35)
		},
		{
			title: 'Otro titulo',
			body:`
				<div class="body-news">
					<p>Noticia pasada.</p>
				</div>
			`,
			date: new Date(2016, 11, 12)
		},
		{
			title: 'Medio',
			body:`
				<div class="body-news">
					<p>Noticia pasada.</p>
				</div>
			`,
			date: new Date(2016, 11, 24)
		}
	],
	en: [
		{
			title: 'Title of the notice',
			body:`
				<div class="body-news">
					<p>Body of the new.</p>
				</div>
			`,
			date: new Date(2017, 0, 25, 15, 35)
		},
		{
			title: 'other title',
			body:`
				<div class="body-news">
					<p>old notice.</p>
				</div>
			`,
			date: new Date(2016, 11, 12)
		},
		{
			title: 'Middle',
			body:`
				<div class="body-news">
					<p>middle notice.</p>
				</div>
			`,
			date: new Date(2016, 11, 24)
		}
	]
	
};
export default news;