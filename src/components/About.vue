<template>
	<div ng-show="tabCtr.isSet(1)" class="">
        <section id="blog-post" class="tab">
            <!-- <ul class="nav nav-tabs">
                <li ng-class="{ active: tab2Ctr.isSet(1) }" class="active">
                  <a href="" ng-click="tab2Ctr.setTab(1)" class="ng-binding">Nuestra Historia</a>
                </li>

                <li ng-class="{ active: tab2Ctr.isSet(2) }">
                  <a href="" ng-click="tab2Ctr.setTab(2)" class="ng-binding">Historial de Seguridad</a>
                </li>

                <li ng-class="{ active: tab2Ctr.isSet(3) }">
                  <a href="" ng-click="tab2Ctr.setTab(3)" class="ng-binding">Flota</a>
                </li>

                <li ng-class="{ active: tab2Ctr.isSet(4) }">
                  <a href="" ng-click="tab2Ctr.setTab(4)" class="ng-binding">Hub de las Americas</a>
                </li>
            </ul>
 -->
            <tabs>
            	<tab label="Nuestra Historia">
	                <h2 class="ng-binding">Nuestra Historia</h2>
	                <p class="ng-binding">Copa Airlines fue fundada en 1947 como la Compañía Panameña de aviación. Inició vuelos a tres ciudades de Panamá utilizando aviones Douglas DC-3/C47. En 1966 ya tenía tres frecuencias semanales a San José, Costa Rica que fue el primer destino internacional. En 1969 incorporó un avión AVRO 748 para volar a la ciudad de Kingston en Jamaica, Managua en Nicaragua y Barranquilla en Colombia. En la década de 1970 incorpora las ciudades de Medellín, Cartagena, San Salvador y Guatemala a su creciente red de rutas. </p>

	                <!-- ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/1980.jpg" class="history-img pull-left" src="../assets/img/1980.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">1980</h2>
	                      <p class="ng-binding">Se retira del mercado doméstico para enfocarse en su alcance internacional. Ese año incorpora un avión Boeing 737-100. Durante esa década  la aerolínea amplía sus destinos a las ciudades de Puerto Príncipe en Haití, Santo Domingo en República Dominicana, San Juan en Puerto Rico y Miami en Estados Unidos.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/1992.jpg" class="history-img pull-left" src="../assets/img/1992.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">1992</h2>
	                      <p class="ng-binding">Inicia operaciones el primer centro de conexiones de vuelos dentro de Latinoamérica con sede en Panamá creando el “Hub de las Américas” en el Aeropuerto Internacional de Tocumen. Se añaden los destinos de Caracas en Venezuela, Ciudad de México, Santiago de Chile, Cali y Bogotá en Colombia, Quito y Guayaquil en Ecuador, Lima en Perú, Buenos Aires en Argentina y La Habana en Cuba.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/1998.jpg" class="history-img pull-left" src="../assets/img/1998.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">1998</h2>
	                      <p class="ng-binding">Se crea una alianza estratégica con Continental Airlines y en 1999 lanza su nueva imagen como Copa Airlines y adopta el programa de viajero frecuente OnePass®. Al mismo tiempo inicia la renovación de su flota con aviones Boeing 737 Next Generation.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2000.jpg" class="history-img pull-left" src="../assets/img/2000.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2000</h2>
	                      <p class="ng-binding">La estrategia se enfoca en expandirse en la región. Para el 2005 ha incorporado los destinos de Cancún en México, Sao Paulo en Brasil, San Andrés en Colombia, Tegucigalpa en Honduras y Orlando, Los Ángeles y Nueva York en Estados Unidos.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2005.jpg" class="history-img pull-left" src="../assets/img/2005.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2005</h2>
	                      <p class="ng-binding">A través de Copa Holdings, S. A. la aerolínea entra a cotizarse en la Bolsa de Valores de Nueva York convirtiéndose en la tercera línea aérea latinoamericana en cotizar en este importante mercado.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2006.jpg" class="history-img pull-left" src="../assets/img/2006.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2006</h2>
	                      <p class="ng-binding">Añade los destinos de Córdoba en Argentina, Guadalajara en México y Washington D.C. en Estados Unidos y Punta Cana en República Dominicana y aumenta frecuencias de vuelo a siete de sus destinos. </p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2008.jpg" class="history-img pull-left" src="../assets/img/2008.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2008</h2>
	                      <p class="ng-binding">Inicia operaciones a Puerto España y Belo Horizonte y anuncia destinos nuevos como Santa Cruz en Bolivia, Valencia en Venezuela y Aruba. Copa Airlines sigue añadiendo destinos y continúa renovando su moderna flota con aviones Boeing 737-700 y 737-800 y Embraer 190.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2009.jpg" class="history-img pull-left" src="../assets/img/2009.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2009</h2>
	                      <p class="ng-binding">Anuncia pedido para 15 aeronaves con entrega entre 2010 y 2015 y ocho opciones para entrega entre el 2015 y 2017. Las nuevas aeronaves estarán equipadas con el diseño distintivo de Boeing Sky Interior.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2010.jpg" class="history-img pull-left" src="../assets/img/2010.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2010</h2>
	                      <p class="ng-binding">Inicia operaciones a la isla de St. Maarten y anuncia que Aero República operará bajo la marca Copa Airlines Colombia. Se comunica el proceso de integración a Star Alliance. Copa Airlines y Boeing anuncian la adquisición de 32 aeronaves Next Generation 737-800, incluyendo 10 opciones de compra, un valor aproximado de US$2,600 millones de dólares, el mayor pedido de nuevas aeronaves en la historia de Copa Airlines.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2011.jpg" class="history-img pull-left" src="../assets/img/2011.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2011</h2>
	                      <p class="ng-binding">Expande su Hub de las Américas en Panamá de 4 a 6 bancos de vuelo y crece su red de rutas con 7 nuevos destinos, solidificando así el liderazgo del Hub de las Américas en la región. Copa Holdings, S.A. (CPA listado en NYSE) celebra cinco años de estar cotizando.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2012.jpg" class="history-img pull-left" src="../assets/img/2012.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2012</h2>
	                      <p class="ng-binding">Anuncia el nuevo programa de viajero frecuente MileagePlus en conjunto con United y en junio la entrada formal a la red global de aerolíneas Star Alliance. Inicia operaciones a Las Vegas, Recife, Curazao, Guanacaste e Iquitos.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2013.jpg" class="history-img pull-left" src="../assets/img/2013.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2013</h2>
	                      <p class="ng-binding">Inicia operaciones a Boston y Tampa; recibe los premios Mejor Aerolínea de Centroamérica y El Caribe y La Aerolínea con el Mejor Personal de Cabina y de Aeropuertos de Centroamérica y el Caribe otorgados por SkyTrax; y culmina el año con una flota de 90 aviones.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years --><article ng-repeat="year in contentCtr.history.years" class="ng-scope">
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img src="../assets/img/2014.jpg" class="history-img pull-left" src="../assets/img/2014.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2 class="ng-binding">2014</h2>
	                      <p class="ng-binding">Inicia operaciones a 5 nuevas ciudades: Georgetown, Guyana; Fort Lauderdale, Estados Unidos; Montreal, Canadá; Santa Clara, Cuba y Campinas; Brasil y finaliza el año con 98 aeronaves. También es galardonada como “Aerolínea Líder de México y Centroamérica” por el World Travel Awards.</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.years -->
            	</tab>
            	<tab label="Historial de seguridad">
	                <h2>Historial de Seguridad</h2>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            	</tab>
            </tabs>



            <!-- Fleet -->
            <div ng-show="tab2Ctr.isSet(3)" class="ng-hide">
                <article>
                    <div class="Media">
                        <div class="Media__figure">
                            <h3 class="text-center"><strong class="ng-binding">Boeing 737-700</strong></h3>
                            <img ng-src="img/boeing700.jpg" class="fleet-img" src="img/boeing700.jpg">
                        </div>
                        <div class="Media__body">
                            <p class="ng-binding">Copa Airlines Colombia cuenta con 4 aeronaves.</p>
                            <p class="ng-binding"><img src="img/icon-asiento-business-class.png" class="fleet-icon"> 12 asientos en Clase Ejecutiva</p>
                            <p class="ng-binding"><img src="img/icon-asiento-cabina-principal.png" class="fleet-icon"> 112 asientos en Cabina Principal</p>
                            <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-boeing-737-700.aspx" class="ng-binding">
                            <img src="img/icon-detalles-tecnicos.png" class="fleet-icon"> 
                            Detalles técnicos
                            </a><br>
                            <a href="http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx" class="ng-binding">
                                <img src="img/icon-entretenimient-a-bordo.png" class="fleet-icon"> 
                                Entretenimiento a bordo
                            </a>
                        </div>
                    </div>
                </article>

                <!-- ngRepeat: fleet in contentCtr.fleet.fleets -->
                <article ng-repeat="fleet in contentCtr.fleet.fleets" class="ng-scope">
                    <div class="Media">
                        <div class="Media__figure">
                            <h3 class="text-center"><strong class="ng-binding">Boeing 737-800</strong></h3>
                            <img ng-src="img/boeing800.jpg" class="fleet2model" src="img/boeing800.jpg">
                        </div>
                        <div class="Media__body">
                            <!-- ngRepeat: model in fleet.model --><div ng-repeat="model in fleet.model" class="ng-scope">
                                <h3 class="ng-binding">Modelo 737-800A</h3>
                                <p class="ng-binding"></p>
                                <p ng-show="model.business" class="ng-binding">
                                  <img src="img/icon-asiento-business-class.png" class="fleet-icon"> 
                                  16 asientos en Clase Ejecutiva
                                </p>
                                <p class="ng-binding">
                                  <img src="img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
                                  144 asientos en Cabina Principal
                                </p>
                                <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-boeing-737-800a.aspx" class="ng-binding">
                                  <img src="img/icon-detalles-tecnicos.png" class="fleet-icon">
                                  Detalles técnicos
                                </a><br>
                                <a href="http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx" class="ng-binding">
                                  <img src="img/icon-entretenimient-a-bordo.png" class="fleet-icon">
                                  Entretenimiento a bordo
                                </a>
                            </div><!-- end ngRepeat: model in fleet.model --><div ng-repeat="model in fleet.model" class="ng-scope">
                                <h3 class="ng-binding">Modelo 737-800B *</h3>
                                <p class="ng-binding"></p>
                                <p ng-show="model.business" class="ng-binding">
                                  <img src="img/icon-asiento-business-class.png" class="fleet-icon"> 
                                  16 asientos en Clase Ejecutiva
                                </p>
                                <p class="ng-binding">
                                  <img src="img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
                                  138 asientos en Cabina Principal
                                </p>
                                <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-boeing-737-800b.aspx" class="ng-binding">
                                  <img src="img/icon-detalles-tecnicos.png" class="fleet-icon">
                                  Detalles técnicos
                                </a><br>
                                <a href="http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx" class="ng-binding">
                                  <img src="img/icon-entretenimient-a-bordo.png" class="fleet-icon">
                                  Entretenimiento a bordo
                                </a>
                            </div><!-- end ngRepeat: model in fleet.model -->
                        </div>
                    </div>  
                </article>

                <!-- end ngRepeat: fleet in contentCtr.fleet.fleets -->
                <article ng-repeat="fleet in contentCtr.fleet.fleets" class="ng-scope">
                    <div class="Media">
                        <div class="Media__figure">
                            <h3 class="text-center"><strong class="ng-binding">Embraer 190AR</strong></h3>
                            <img ng-src="img/embraerAR.jpg" class="fleet2model" src="img/embraerAR.jpg">
                        </div>
                        <div class="Media__body">
                            <!-- ngRepeat: model in fleet.model --><div ng-repeat="model in fleet.model" class="ng-scope">
                                <h3 class="ng-binding">Modelo Embraer 190AR A</h3>
                                <p class="ng-binding">Copa Airlines Colombia cuenta con 3 aeronaves.</p>
                                <p ng-show="model.business" class="ng-binding">
                                  <img src="img/icon-asiento-business-class.png" class="fleet-icon"> 
                                  10 asientos en Clase Ejecutiva
                                </p>
                                <p class="ng-binding">
                                  <img src="img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
                                  84 asientos en Cabina Principal
                                </p>
                                <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-embraer-190ar.aspx" class="ng-binding">
                                  <img src="img/icon-detalles-tecnicos.png" class="fleet-icon">
                                  Detalles técnicos
                                </a><br>
                                <a href="http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx" class="ng-binding">
                                  <img src="img/icon-entretenimient-a-bordo.png" class="fleet-icon">
                                  Entretenimiento a bordo
                                </a>
                            </div><!-- end ngRepeat: model in fleet.model --><div ng-repeat="model in fleet.model" class="ng-scope">
                                <h3 class="ng-binding">Modelo Embraer 190AR B</h3>
                                <p class="ng-binding"></p>
                                <p ng-show="model.business" class="ng-binding ng-hide">
                                  <img src="img/icon-asiento-business-class.png" class="fleet-icon"> 
                                  
                                </p>
                                <p class="ng-binding">
                                  <img src="img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
                                  106 asientos en Cabina Principal
                                </p>
                                <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-embraer-190ar-b.aspx" class="ng-binding">
                                  <img src="img/icon-detalles-tecnicos.png" class="fleet-icon">
                                  Detalles técnicos
                                </a><br>
                                <a href="http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx" class="ng-binding">
                                  <img src="img/icon-entretenimient-a-bordo.png" class="fleet-icon">
                                  Entretenimiento a bordo
                                </a>
                            </div><!-- end ngRepeat: model in fleet.model -->
                        </div>
                    </div>  
                </article><!-- end ngRepeat: fleet in contentCtr.fleet.fleets -->
            </div>

            <!-- Hub -->
            <div ng-show="tab2Ctr.isSet(4)" class="ng-hide">
                <!-- ngInclude: 'content/' + contentCtr.currentLang.value + '/hub.html' -->
                <article id="hub" ng-include="'content/' + contentCtr.currentLang.value + '/hub.html'" class="ng-scope">
                	<div class="images ng-scope">
						<img src="img/logo_hub.jpg" class="logo_hub">
						<img src="img/HubdelasAmericas-v1.jpg" class="img_hub">
					</div>

					<p class="ng-scope">Hub de las Américas brinda horarios de vuelo convenientes diseñados para conexiones rápidas y un servicio sin interrupciones de un extremo a otro. Los equipajes son registrados directamente hasta el destino final del pasajero y no es necesario pasar por aduana o por inmigración durante las conexiones. El aeropuerto también cuenta con un gran número de tiendas libres de impuestos.</p>
					<br class="ng-scope">
					<p class="ng-scope">Además, Hub de las Américas ha renovado y extendido recientemente el <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/copa-club.aspx">Copa Club</a>, operado conjuntamente por Copa Airlines y United Airlines. Los pasajeros de <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/clase-ejecutiva.aspx">Clase Ejecutiva</a> y los miembros de Copa Club pueden disfrutar de las instalaciones.</p>

					<h2 class="ng-scope">La forma más directa para conectarse con el continente americano</h2>

					<p class="ng-scope">¿Por qué Hub de las Américas brinda la forma más directa para conectarse con el continente americano?</p>

					<ul class="hub_list ng-scope">
						<li>
							<p>La ubicación geográfica y las condiciones climáticas favorables de Panamá hacen posible que el aeropuerto funcione las 24 horas del día, los 365 días del año</p>
						</li>
						<li>
							<p>Conexiones rápidas sin necesidad de pasar por inmigraciones o aduana</p>
						</li>
						<li>
							<p>Dos pistas modernas garantizan que el tráfico arribe y despegue sin problemas</p>
						</li>
						<li>
							<p>La operación a nivel del mar permite que nuestras aeronaves extiendan su alcance</p>
						</li>
						
					</ul>

					<h2 class="ng-scope">Conectándose con Copa Airlines</h2>

					<p class="ng-scope">¿Por qué motivo volar con Copa Airlines es una experiencia sin igual?</p>

					<ul class="hub_list ng-scope">
						<li>
							<p>Los vuelos de Copa Airlines están programados para reducir los tiempos de conexión, que en promedio llevan 90 minutos.</p>
						</li>
						<li>
							<p>El equipaje es registrado directamente hasta el destino final del pasajero.</p>
						</li>
						<li>
							<p>Más vuelos directos a las ciudades principales del continente americano.</p>
						</li>
						<li>
							<p>Copa Airlines brinda servicio a una gran variedad de destinos en Norte, Centro y Suramérica y el Caribe. Visite nuestra <a href="http://destinationsguide.copaair.com/es/">Guía de destinos.</a></p>
						</li>
						<li>
							<p>Una de las flotas más nuevas de la región con un promedio de 4.3 años. Vea <a href="http://www.copaair.com/sites/cc/es/nuestros-productos/pages/nuestra-flota.aspx">nuestra flota.</a></p>
						</li>
						<li>
							<p>Servicio completo a bordo, que incluye alimentos, bebidas, películas y música.</p>
						</li>
						<li>
							<p>Desempeño superior al 90% en puntualidad, entre los mejores del mundo.</p>
						</li>
					</ul>

					<img src="img/hub-americas-mapa-L.jpg" class="img_hub ng-scope">

				</article>
            </div>
        </section>
    </div>               
</template>
<script>
import Tabs from './Tabs'
import Tab from './Tab'

export default {
	name: 'About', 
	components: {
		Tabs,
		Tab
	}
}
</script>