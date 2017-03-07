let moment = require('moment')
let news = {
	es: [
		  {
            title: 'Copa Airlines Colombia abre ruta directa Pereira-San Andrés, consolidándose así como El mayor operador que sirve a la isla',
            body: `
                    <ul>
                    <li>El próximo 16 de junio Copa Airlines empezará a operar esta nueva ruta directa y sin escalas tres veces por semana con horarios ideales para los viajeros.</li>
                    <li>Con la nueva ruta directa se espera movilizar alrededor de 25.000 pasajeros al año entre los dos destinos.</li>
                    </ul>
                    
                    <p>Bogotá, 8 de abril 2013 - A partir del próximo 15 de junio, Copa Airlines Colombia iniciará la operación de la ruta Pereira-San Andrés-Pereira. El nuevo vuelo que contará con tres frecuencias semanales, los días lunes, jueves y sábados, será operado en la flota renovada de aviones Embraer 190, con capacidad para 106 pasajeros, en horarios ideales para los viajeros.</p>

                    <p>Con esta nueva ruta, Copa Airlines Colombia se convierte en el único operador en ofrecer un vuelo directo entre estos dos destinos a través de vuelos regulares y se consolida como el mayor operador de Colombia que sirve a la Isla de San Andrés, con más de 49 vuelos directos semanales desde Bogotá, Cali, Medellín, Barranquilla, Cartagena y ahora Pereira. Adicionalmente, la aerolínea conecta la isla con Ciudad de Panamá, ofreciendo así el único vuelo internacional directo que tiene San Andrés.</p>

                    <p>“En el mercado doméstico, la oferta de servicios de Copa Airlines Colombia se ha especializado hacia la Isla de San Andrés, uniéndola mediante vuelos directos con las principales capitales del territorio nacional. Hoy estamos seguros que esta nueva ruta será un paso determinante para potencializar el flujo de viajeros entre dos de las regiones turísticas más importantes del país”, aseguró Eduardo Lombana, presidente de Copa Airlines Colombia.</p>

                    <p>Con esta decisión la aerolínea ratifica su compromiso con San Andrés y con el Eje Cafetero, y le apuesta a la dinamización de la economía y un mayor intercambio social y cultural entre las dos regiones.</p>

                    <p>Los nuevos vuelos de Copa Airlines Colombia, Pereira-San Andrés-Pereira, serán operados tres veces a la semana, los días lunes, jueves y sábados, con el siguiente itinerario:</p>
            
                    <table class="table">
                    <tr>
                        <th>Vuelo</th>
                        <th>ruta</th>
                        <th>Sale</th>
                        <th>Llega</th>
                    </tr>
                    <tr>
                        <td>7562    </td>
                        <td>Pereira-San Andrés  </td>
                        <td>3:30 p.m.   </td>
                        <td>5:30 p.m.</td>
                    </tr>
                    <tr>
                        <td>7563    </td>
                        <td>San Andrés-Pereira  </td>
                        <td>1:00 p.m.   </td>
                        <td>2:55 p.m.</td>
                    </tr>
                </table>
            `,
            city: 'Bogotá',
            date: moment(new Date(2017, 0, 11, 11, 45)).locale('es').format('LLLL') 
        }
	],
	en: [

        {
            title: 'Copa Airlines Colombia abre ruta directa Pereira-San Andrés, consolidándose así como El mayor operador que sirve a la isla',
            body: `
            <h2>This notice is only in spanish</h2>
            `,
            city: 'Bogota',
            date: moment(new Date(2017, 0, 11, 11, 45)).locale('en-ca').format('LLLL') 
        }
	
	],
	pt: [
		
		{
			title: 'Copa Airlines Colombia abre ruta directa Pereira-San Andrés, consolidándose así como El mayor operador que sirve a la isla',
			body: `
			<h2>Esta noticia está disponível unicamente em espanhol</h2>
			`,
			city: 'Bogotá',
			date: moment(new Date(2017, 0, 11, 11, 45)).locale('pt-br').format('LLLL') 
		}
	]
};

export default news;