<template>
	<footer>
            <div class="footer-normal">
                <div class="grid">
                    <div class="nav-bottom-desktop">
                        <div class="grid__row footer-title nav-bottom" @click="showLinks">
                            <div class="grid__column">
                                <a role="button" v-cloak>
                                	<span>{{ $t("footer.col1.title") }}</span>
                                	<i :class="{'fa': true, 'fa-caret-down': isActive, 'fa-caret-right': !isActive}">&nbsp;</i>
                                </a>
                            </div>
                            <div class="grid__column">
                                <a role="button" v-cloak>
                                	<span>{{ $t("footer.col2.title") }}</span>
                                	<i :class="{'fa': true, 'fa-caret-down': isActive, 'fa-caret-right': !isActive}">&nbsp;</i>
                                </a>
                              
                            </div>
                            <div class="grid__column">
                                <a role="button" v-cloak>
                                	<span>{{ $t("footer.col3.title") }}</span>
                                	<i :class="{'fa': true, 'fa-caret-down': isActive, 'fa-caret-right': !isActive}">&nbsp;</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div :class="{'grid__row': true, 'footer-content': true, 'hide': !isActive}">
                        <div class="grid__column">
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
                        <div class="grid__column">
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
                        <div class="grid__column">
                            <ul class="footer-nav">
                                <li><a :href=" $t('footer.col3.customerCommitment.url')" v-cloak target="_blank">{{$t('footer.col3.customerCommitment.label')}}</a></li>
                                <li><a :href=" $t('footer.col3.affidavitTravelToCuba.url')" v-cloak target="_blank">{{$t('footer.col3.affidavitTravelToCuba.label')}}</a></li>
                                <li><a :href=" $t('footer.col3.lengthyTarmacsDelays.url')" v-cloak target="_blank">{{$t('footer.col3.lengthyTarmacsDelays.label')}}</a></li>
                                <li><a :href=" $t('footer.col3.eDBVBrazil.url')" v-cloak target="_blank">{{$t('footer.col3.eDBVBrazil.label')}}</a></li>
                                <li><a :href=" $t('footer.col3.digitalTaxReceiptMexico.url')" v-cloak target="_blank">{{$t('footer.col3.digitalTaxReceiptMexico.label')}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div><!-- grid -->
            </div><!-- footer-normal -->
            <div class="grid">
                 <div class="grid__row footer">
                    <div class="grid__column termns">
                        <p v-cloak>{{$t('footer.copy.title')}}</p>
                        <a :href="$t('footer.copy.siteMap.url')" class="customerService" v-cloak target="_blank">{{$t('footer.copy.siteMap.label')}}</a> |
                        <a :href="$t('footer.copy.contractOfCarriage.url')" class="customerService" v-cloak target="_blank">{{$t('footer.copy.contractOfCarriage.label')}}</a> |
                        <a :href="$t('footer.copy.privacyPolicy.url')" class="customerService" v-cloak target="_blank">{{$t('footer.copy.privacyPolicy.label')}}</a> | 
                        <a :href="$t('footer.copy.termsAndConditions.url')" class="customerService" v-cloak target="_blank">{{$t('footer.copy.termsAndConditions.label')}}</a> | 
                        <a :href="$t('footer.copy.contactUs.url')" class="customerService" v-cloak target="_blank">{{$t('footer.copy.contactUs.label')}}</a><br>
                        <a href="">
                        	<img src="src/assets/img/chrome-logo.png">
                        </a>
						<a href="">
							<img src="src/assets/img/mozilla-logo.png">
						</a>
						<a href="">
							<img src="src/assets/img/explorer-logo.png">
						</a>
						<a href="">
							<img src="src/assets/img/safari-logo.png">
						</a>
                    </div>
                    <div class="grid__column social">
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
                    </div>
                </div><!-- grid__row footer -->
            </div><!-- grid -->
          
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
			}
		}
	}
</script>