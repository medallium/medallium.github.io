function filterSoultimate(soultimateFilter) {
	if (soultimateFilter=='default'){
  $('div[id^="soultimate]').show();
	}
	else{
  $('div[id^="soultimate]').hide();
  $('div[id*="'+soultimateFilter+'"]').show();
	}
}
function filterSkill(skillFilter) {
	if (skillFilter=='default'){
  $('div[id^="skill"]').show();
	}
	else{
  $('div[id^="skill"]').hide();
  $('div[id*="'+skillFilter+'"]').show();
	}
}