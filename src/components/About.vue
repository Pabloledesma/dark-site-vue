<template>
        <section id="blog-post" class="tab">
            <tabs>
            	<tab label="about.history.title" :selected="true">
	                <h2>{{$t('about.history.title')}}</h2>
	                <p>{{$t('about.history.text')}}</p>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/1980.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>1980</h2>
	                      <p>{{ $t('about.history.n1980.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/1992.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>1992</h2>
	                      <p>{{ $t('about.history.n1992.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/1998.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>1998</h2>
	                       <p>{{ $t('about.history.n1998.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2000.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2000</h2>
	                       <p>{{ $t('about.history.n2000.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="/src/assets/img/2005.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2005</h2>
						<p>{{ $t('about.history.n2005.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2006.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2006</h2>
							<p>{{ $t('about.history.n2006.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2008.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2008</h2>
	                      <p>{{ $t('about.history.n2008.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2009.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2009</h2>
	                      <p>{{ $t('about.history.n2009.text') }}</p>
	                    </div>
	                  </div>
	                </article>

	                <article>
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2010.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2010</h2>
	                      <p>{{ $t('about.history.n2010.text') }}</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.nyears --><article >
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2011.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2011</h2>
	                      <p>{{ $t('about.history.n2011.text') }}</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.nyears --><article >
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2012.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2012</h2>
	                      <p>{{ $t('about.history.n2012.text') }}</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.nyears --><article >
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2013.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2013</h2>
	                      <p>{{ $t('about.history.n2013.text') }}</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.nyears --><article >
	                  <div class="Media">
	                    <div class="Media__figure">
	                      <img class="history-img pull-left" src="src/assets/img/2014.jpg">
	                    </div>
	                    <div class="Media__body">
	                      <h2>2014</h2>
	                      <p>{{ $t('about.history.n2014.text') }}</p>
	                    </div>
	                  </div>
	                </article><!-- end ngRepeat: year in contentCtr.history.nyears -->
            	</tab>
            	<tab label="about.fleet.title">
	                <article>
	                    <div class="Media">
	                        <div class="Media__figure">
	                            <h3 class="text-center"><strong>{{ $t('about.singleFleet.title') }}</strong></h3>
	                            <img class="fleet-img" src="src/assets/img/boeing700.jpg">
	                        </div>
	                        <div class="Media__body">
	                            <p v-html="$t('about.singleFleet.numberOfAircrafts')"></p>
	                            <p><img src="src/assets/img/icon-asiento-business-class.png" class="fleet-icon">{{ $t('about.singleFleet.business') }}</p>
	                            <p><img src="src/assets/img/icon-asiento-cabina-principal.png" class="fleet-icon">{{ $t('about.singleFleet.general') }}</p>
	                            <a :href="$t('about.singleFleet.details.url')">
	                            	<img src="src/assets/img/icon-detalles-tecnicos.png" class="fleet-icon"> 
	                           		{{ $t('about.singleFleet.details.label') }}
	                            </a>
	                            <br>
	                            <a :href="$t('about.singleFleet.music.url')">
	                                <img src="src/assets/img/icon-entretenimient-a-bordo.png" class="fleet-icon"> 
	                                {{ $t('about.singleFleet.music.label') }}
	                            </a>
	                        </div>
	                    </div>
	                </article>

	                <article>
	                    <div class="Media">
	                        <div class="Media__figure">
	                            <h3 class="text-center"><strong>{{ $t('about.fleet.fleets[0].title') }}</strong></h3>
	                            <img class="fleet2model" src="src/assets/img/boeing800.jpg">
	                        </div>
	                        <div class="Media__body">
	                            <div>
	                                <h3>{{ $t('about.fleet.fleets[0].model[0].title') }}</h3>
	                                <br>
	                                <p v-html="$t('about.fleet.fleets[0].model[0].numberOfAircrafts')"></p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-business-class.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[0].model[0].business') }}
	                                </p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[0].model[0].general') }}
	                                </p>
	                                <a :href="$t('about.fleet.fleets[0].model[0].details.url')">
	                                  <img src="src/assets/img/icon-detalles-tecnicos.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[0].model[0].details.label') }}
	                                </a><br>
	                                <a :href="$t('about.fleet.fleets[0].model[0].music.url')">
	                                  <img src="src/assets/img/icon-entretenimient-a-bordo.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[0].model[0].music.label') }}
	                                </a>
	                           </div>
	                           <div>
	                                <h3>{{ $t('about.fleet.fleets[0].model[1].title') }}</h3>
	                                <br>
	                                 <p v-html="$t('about.fleet.fleets[0].model[1].numberOfAircrafts')"></p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-business-class.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[0].model[1].business') }}
	                                </p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[0].model[1].general') }}
	                                </p>
	                                <a :href="$t('about.fleet.fleets[0].model[1].details.url')">
	                                  <img src="src/assets/img/icon-detalles-tecnicos.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[0].model[1].details.label') }}
	                                </a><br>
	                                <a :href="$t('about.fleet.fleets[0].model[1].music.url')">
	                                  <img src="src/assets/img/icon-entretenimient-a-bordo.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[0].model[1].music.label') }}
	                                </a>
	                           </div>
	                        </div>
	                    </div>  
	                </article>

	               <article>
	                    <div class="Media">
	                        <div class="Media__figure">
	                            <h3 class="text-center"><strong>{{ $t('about.fleet.fleets[1].title') }}</strong></h3>
	                            <img class="fleet2model" src="src/assets/img/boeing800.jpg">
	                        </div>
	                        <div class="Media__body">
	                            <div>
	                                <h3>{{ $t('about.fleet.fleets[1].model[0].title') }}</h3>
	                                <br>
	                                 <p v-html="$t('about.fleet.fleets[1].model[0].numberOfAircrafts')"></p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-business-class.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[1].model[0].business') }}
	                                </p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[1].model[0].general') }}
	                                </p>
	                                <a :href="$t('about.fleet.fleets[1].model[0].details.url')">
	                                  <img src="src/assets/img/icon-detalles-tecnicos.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[1].model[0].details.label') }}
	                                </a><br>
	                                <a :href="$t('about.fleet.fleets[1].model[0].music.url')">
	                                  <img src="src/assets/img/icon-entretenimient-a-bordo.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[1].model[0].music.label') }}
	                                </a>
	                           </div>
	                           <div>
	                                <h3>{{ $t('about.fleet.fleets[1].model[1].title') }}</h3>
	                                <br>
	                                 <p v-html="$t('about.fleet.fleets[1].model[1].numberOfAircrafts')"></p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-business-class.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[1].model[1].business') }}
	                                </p>
	                                <p>
	                                  <img src="src/assets/img/icon-asiento-cabina-principal.png" class="fleet-icon"> 
	                                  {{ $t('about.fleet.fleets[1].model[1].general') }}
	                                </p>
	                                <a :href="$t('about.fleet.fleets[1].model[1].details.url')">
	                                  <img src="src/assets/img/icon-detalles-tecnicos.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[1].model[1].details.label') }}
	                                </a><br>
	                                <a :href="$t('about.fleet.fleets[1].model[1].music.url')">
	                                  <img src="src/assets/img/icon-entretenimient-a-bordo.png" class="fleet-icon">
	                                  {{ $t('about.fleet.fleets[1].model[1].music.label') }}
	                                </a>
	                           </div>
	                        </div>
	                    </div>  
	                </article>
            	</tab>
            	<tab label="about.hub.title">
	                <article>
	                	<div class="images">
							<img src="src/assets/img/logo_hub.jpg" class="logo_hub">
							<img src="src/assets/img/HubdelasAmericas-v1.jpg" class="img_hub">
						</div>

						<div v-html="$t('about.hub.text')"></div>

						<img src="src/assets/img/hub-americas-mapa-L.jpg" class="img_hub">

					</article>
            	</tab>
            </tabs>



        </section>
</template>
<script>
import Tabs from './Tabs.vue'
import Tab from './Tab.vue'

export default {
	name: 'About',
	components: {
		Tabs,
		Tab
	}
}
</script>