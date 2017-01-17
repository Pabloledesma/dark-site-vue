<template>
	<nav>
        <div id="toggle-menu">
            <button class="navbar-toggler hidden-sm-up collapsed" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header" aria-expanded="false">
                ☰
            </button>
        </div>
        <ul class="top-menu">
            <li>
                <router-link :to="$t('topMenu.latestNews.url')">
                  {{ $t("topMenu.latestNews.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.pressReleases.url')">
                  {{ $t("topMenu.pressReleases.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.assistance.url')">
                  {{ $t("topMenu.assistance.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.about.url')">
                  {{ $t('topMenu.about.text') }}
                </router-link>
            </li>
            <li>
                <a :href="$t('topMenu.copaCom.url')" target="_blank">
                  {{ $t("topMenu.copaCom.text") }}
                </a>
            </li>
        </ul>
	</nav>
</template>

<script>
export default {
  
    name: 'TopMenu',

}
</script>

<style>

/*** Navigation ***/

.top-menu {  background: grey; }

.navbar-toggle { border:none; }





@media screen and (min-width: 768px ){
  #toggle-menu {display: none}

  .top-menu {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: flex;
  }

  .top-menu li {
    -webkit-flex: 1;  /* Safari 6.1+ */
    -moz-flex:1;
    -ms-flex: 1;  /* IE 10 */     
    flex:1;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.2);

  }

  .top-menu li:last-child { border-right: none; }

  .top-menu li a { padding-left: 0px; }

}

.top-menu li { 
  border-bottom: 1px solid rgba(0,0,0,.2);
  cursor: pointer;
}

.top-menu li:last-child { border-bottom: none; }

.top-menu li a {
  color: #FFF;
  font-size: 17px;
  text-decoration: none;
  text-align: center;
  line-height: 1em;
  display: block;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
}

.top-menu li:hover {
  background: rgb(195,195,195);
}

#toggle-menu {
  background: rgb(238,238,238);
  border-radius: 15px 15px 0 0;
  line-height: 2;
  color:grey;
  padding: 1em;
  font-size: .9em;
  cursor:pointer;
}

.tab { margin-top:40px; }

li > a.router-link-active { 
  background: #CCC !important; color:#000 !important; 
}

.nav-tabs { margin-bottom: 20px; }

.nav-tabs>li>a {
  background-color: #fff;
  color:black;
  border: 1px solid #214981;
}
.nav-tabs>li>a:hover {
  color: #004982;
}

@media(max-width: 856px){
  .nav-tabs>li>a{
    padding: 10px 5px;
  }
}

@media(max-width: 520px){
  .nav-tabs>li{
    float:none;
    margin-bottom: 2px;
  }
}
</style>
 
