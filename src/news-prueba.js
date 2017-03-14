//Temporalmente
let moment = require('moment')

let news = {
	es: [
		{
			title: 'Noticia genérica',
			body:`
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>

				<p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>

				<p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>

				<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>

				<p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>

				<p>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</p>

				<p>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.</p>
				

			`,
			city: 'Madrid',
			date: moment(new Date(2017, 0, 17, 15, 37)).locale('es').format('LLLL')
		},
		{
			title: 'Noticia corta',
			body:`
		      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
			`,
			city: 'Rio de Janeiro',
			date: moment(new Date(2017, 0, 15, 14, 56)).locale('es').format('LLLL')
		},
		{
			title: 'Noticia con todos los elementos',
			body:`
				<div class="content">
				  <h1>Primer nivel</h1>
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
				  <h2>Segundo nivel</h2>
				  <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
				  <ul>
				    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
				    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
				    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
				    <li>Ut non enim metus.</li>
				  </ul>
				  <h3>Tercer nivel</h3>
				  <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
				  <ol>
				    <li>Donec blandit a lorem id convallis.</li>
				    <li>Cras gravida arcu at diam gravida gravida.</li>
				    <li>Integer in volutpat libero.</li>
				    <li>Donec a diam tellus.</li>
				    <li>Aenean nec tortor orci.</li>
				    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
				    <li>Vivamus maximus ultricies pulvinar.</li>
				  </ol>
				  <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
				  <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
				  <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
				  <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
				  <h4>Cuarto nivel</h4>
				  <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
				  <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
				  <table class="table">
				    <thead>
				      <tr>
				        <th>One</th>
				        <th>Two</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>Three</td>
				        <td>Four</td>
				      </tr>
				      <tr>
				        <td>Five</td>
				        <td>Six</td>
				      </tr>
				      <tr>
				        <td>Seven</td>
				        <td>Eight</td>
				      </tr>
				      <tr>
				        <td>Nine</td>
				        <td>Ten</td>
				      </tr>
				      <tr>
				        <td>Eleven</td>
				        <td>Twelve</td>
				      </tr>
				    </tbody>
				  </table>
				  <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
				  <h5>Quinto nivel</h5>
				  <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
				  <h6>Sexto nivel</h6>
				  <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
				  </ul>
				</div>
				<br>
				<small>10:25 - 15 Enero 2017</small>
			`,
			city: 'Ciudad de Panamá',
			date: moment(new Date(2017, 0, 15, 10, 25)).locale('es').format('LLLL')
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
			city: 'Bogota',
			date: moment(new Date(2017, 0, 25, 15, 35)).locale('en-ca').format('LLLL')
		},
		{
			title: 'other title',
			body:`
				<div class="body-news">
					<p>old notice.</p>
				</div>
			`,
			city: 'Panama',
			date: moment(new Date(2016, 11, 12, 13, 24)).locale('en-ca').format('LLLL')
		},
		{
			title: 'Middle',
			body:`
				<div class="body-news">
					<p>middle notice.</p>
				</div>
			`,
			city: 'Cartagena',
			date: moment(new Date(2016, 11, 24, 4, 48)).locale('en-ca').format('LLLL')
		}
	]
	
};
export default news;