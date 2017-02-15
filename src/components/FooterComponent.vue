<template>
	<footer class="footer">

        <div class="nav-bottom-row" @click="showLinks">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xm-12 nav-bottom-column">
                        <a role="button" v-cloak>
                        	<span>{{ $t("footer.col1.title") }}</span>
                        	<i :class="{'fa': true, 'fa-caret-down': isActive, 'fa-caret-right': !isActive}">&nbsp;</i>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xm-12 nav-bottom-column">
                        <a role="button" v-cloak>
                        	<span>{{ $t("footer.col2.title") }}</span>
                        	<i :class="{'fa': true, 'fa-caret-down': isActive, 'fa-caret-right': !isActive}">&nbsp;</i>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xm-12 nav-bottom-column">
                        <a role="button" v-cloak>
                        	<span>{{ $t("footer.col3.title") }}</span>
                        	<i :class="{'fa': true, 'fa-caret-down': isActive, 'fa-caret-right': !isActive}">&nbsp;</i>
                        </a>
                    </div>
                </div>
            </div><!-- container first-row -->   
        </div><!--nav-bottom-row-->

        <div :class="{'footer-content': true, 'hide': !isActive}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xm-12">
                        <ul class="footer-nav">
                            <li><a :href=" $t('footer.col1.faq.url') " v-cloak target="_blank">{{ $t('footer.col1.faq.label') }}</a></li>
                            <li><a :href=" $t('footer.col1.reservationCenter.url') " v-cloak target="_blank">{{ $t('footer.col1.reservationCenter.label') }}</a></li>
                            <li><a :href=" $t('footer.col1.refundRequest.url') " v-cloak target="_blank">{{ $t('footer.col1.refundRequest.label') }}</a></li>
                            <li><a :href=" $t('footer.col1.baggageClaim.url') " v-cloak target="_blank">{{ $t('footer.col1.baggageClaim.label') }}</a></li>
                            <li><a :href=" $t('footer.col1.forgottenItems.url') " v-cloak target="_blank">{{ $t('footer.col1.forgottenItems.label') }}</a></li>
                            <li><a :href=" $t('footer.col1.flightNotifications.url') " v-cloak target="_blank">{{ $t('footer.col1.flightNotifications.label') }}</a></li>
                            <li><a :href=" $t('footer.col1.optionsForCheckin.url') " v-cloak target="_blank">{{ $t('footer.col1.optionsForCheckin.label') }}</a></li>
                            <li><a :href=" $t('footer.col1.commentsAndComplaints.url') " v-cloak target="_blank">{{$t('footer.col1.commentsAndComplaints.label')}}</a></li>
                            <li><a :href=" $t('footer.col1.contactUs.url') " v-cloak target="_blank">{{$t('footer.col1.contactUs.label')}}</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xm-12">
                        <ul class="footer-nav">
                            <li><a :href=" $t('footer.col2.ourHistory.url') " v-cloak target="_blank">{{ $t('footer.col2.ourHistory.label') }}</a></li>
                            <li><a :href=" $t('footer.col2.awards.url')" v-cloak target="_blank">{{ $t('footer.col2.awards.label') }}</a></li>
                            <li><a :href=" $t('footer.col2.corporateSocialResponsability.url')" v-cloak target="_blank">{{$t('footer.col2.corporateSocialResponsability.label')}}</a></li>
                            <li><a :href=" $t('footer.col2.alliances.url')" v-cloak target="_blank">{{$t('footer.col2.alliances.label')}}</a></li>
                            <li><a :href=" $t('footer.col2.aeroRepublica.url')" v-cloak target="_blank">{{$t('footer.col2.aeroRepublica.label')}}</a></li>
                            <li><a :href=" $t('footer.col2.investorRelations.url')" v-cloak target="_blank">{{ $t('footer.col2.investorRelations.label') }}</a></li>
                            <li><a :href=" $t('footer.col2.hubOfTheAmericas.url')" v-cloak target="_blank">{{ $t('footer.col2.hubOfTheAmericas.label') }}</a></li>
                            <li><a :href=" $t('footer.col2.fleet.url')" v-cloak target="_blank">{{ $t('footer.col2.fleet.label') }}</a></li>
                            <li><a :href=" $t('footer.col2.workWithUs.url')" v-cloak target="_blank">{{ $t('footer.col2.workWithUs.label') }}</a></li>
                            <li><a :href=" $t('footer.col2.securePurchases.url')" v-cloak target="_blank">{{ $t('footer.col2.securePurchases.label') }}</a></li>
                            <li><a :href=" $t('footer.col2.news.url')" v-cloak target="_blank">{{$t('footer.col2.news.label')}}</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xm-12">
                        <ul class="footer-nav">
                            <li><a :href=" $t('footer.col3.customerCommitment.url')" v-cloak target="_blank">{{$t('footer.col3.customerCommitment.label')}}</a></li>
                            <li><a :href=" $t('footer.col3.affidavitTravelToCuba.url')" v-cloak target="_blank">{{$t('footer.col3.affidavitTravelToCuba.label')}}</a></li>
                            <li><a :href=" $t('footer.col3.lengthyTarmacsDelays.url')" v-cloak target="_blank">{{$t('footer.col3.lengthyTarmacsDelays.label')}}</a></li>
                            <li><a :href=" $t('footer.col3.eDBVBrazil.url')" v-cloak target="_blank">{{$t('footer.col3.eDBVBrazil.label')}}</a></li>
                            <li><a :href=" $t('footer.col3.digitalTaxReceiptMexico.url')" v-cloak target="_blank">{{$t('footer.col3.digitalTaxReceiptMexico.label')}}</a></li>
                        </ul>
                    </div>
                </div><!--row-->
            </div><!--container-->
        </div><!--footer-content-->
           
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xm-12 terms">
                        <p v-cloak>{{$t('footer.copy.title')}}</p>
                        <a 
                            :href="$t('footer.copy.siteMap.url')" 
                            class="col-lg-2 col-md-2 col-sm-2 col-xs-12 terms-link" 
                            v-cloak 
                            target="_blank">
                            {{$t('footer.copy.siteMap.label')}}
                        </a>
                        <a 
                        :href="$t('footer.copy.contractOfCarriage.url')" 
                        class="col-lg-2 col-md-2 col-sm-2 col-xs-12 terms-link" 
                        v-cloak 
                        target="_blank">
                            {{$t('footer.copy.contractOfCarriage.label')}}</a>
                        <a 
                        :href="$t('footer.copy.privacyPolicy.url')" 
                        class="col-lg-2 col-md-2 col-sm-2 col-xs-12 terms-link" 
                        v-cloak 
                        target="_blank">
                            {{$t('footer.copy.privacyPolicy.label')}}</a>
                        <a 
                        :href="$t('footer.copy.termsAndConditions.url')" 
                        class="col-lg-2 col-md-2 col-sm-2 col-xs-12 terms-link" 
                        v-cloak 
                        target="_blank">
                            {{$t('footer.copy.termsAndConditions.label')}}</a>
                        <a 
                        :href="$t('footer.copy.contactUs.url')" 
                        class="col-lg-2 col-md-2 col-sm-2 col-xs-12 terms-link" 
                        v-cloak 
                        target="_blank">
                            {{$t('footer.copy.contactUs.label')}}</a><br>
                        <div class="col-lg-12 col-md-12 col-sm-12 browsers">
                            <a href="https://www.google.com/chrome/" target="_blank">
                                <img src="src/assets/img/chrome-logo.png">
                            </a>
                            <a href="https://www.mozilla.org/firefox/new/" target="_blank">
                                <img src="src/assets/img/mozilla-logo.png">
                            </a>
                            <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank">
                                <img src="src/assets/img/explorer-logo.png">
                            </a>
                            <a href="http://www.apple.com/safari/" target="_blank">
                                <img src="src/assets/img/safari-logo.png">
                            </a>
                        </div>
                    </div><!--terms-->

                    <div class="col-lg-4 col-md-4 col-sm-4 col-xm-12 social">
                        <a :href="$t('footer.copy.webDeals.url')" target="_blank">
                            <img class="smallicon" src="src/assets/img/promo-web.png" alt="$t('footer.copy.webDeals.alt')">
                        </a>
                        <a href="https://www.facebook.com/copaairlines" target="_blank">
                            <img class="smallicon" src="src/assets/img/facebook-logo.png" alt="Facebook logo">
                        </a>
                        <a href="http://www.instagram.com/copaairlines" target="_blank">
                            <img class="smallicon" src="src/assets/img/instagram-logo.png" alt="Instagram logo">
                        </a>
                        <a href="https://www.twitter.com/copaairlines" target="_blank">
                            <img class="smallicon" src="src/assets/img/twitter-logo.png" alt="Twitter logo">
                        </a> 
                        <a href="https://plus.google.com/115021246614198861730" target="_blank" rel="publisher">
                            <img class="smallicon" src="src/assets/img/google-plus-logo.png" alt="Google Plus logo">
                        </a><br>
                        <a :href="$t('footer.copy.starAlliance.url')" target="_blank">
                            <img class="smallicon" src="src/assets/img/star-alliance-logo.png" alt="Star Alliance logo">
                        </a>  
                    </div><!--social-->

                </div><!--row-->
            </div><!--container-->
        </div><!--footer-bottom-->
    </footer>
</template>
<script>
	export default {
		name: 'footer-component',

		data(){
			return {
				isActive: false
			};
		},

		methods: {
			showLinks(){
				this.isActive = (this.isActive) ? false : !this.isActive;
			},

            getWindowWidth(event) {
                console.log('width: ' + document.documentElement.clientWidth)
                return document.documentElement.clientWidth;
            },
            
            getWindowHeight(event) {
                return document.documentElement.clientHeight;
            }
		},

        mounted() {
            this.$nextTick(function() {
                window.addEventListener('resize', this.getWindowWidth());
                window.addEventListener('resize', this.getWindowHeight());
            })

            console.log(this.windowWidth)
        },
    
        computed: {
            windowHeight() {
                    return this.getWindowHeight();
            },
            windowWidth() {
                    return this.getWindowWidth();
            }
        }

       
    }
</script>