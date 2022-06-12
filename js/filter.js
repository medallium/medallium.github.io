function filterSoultimate(soultimateFilter) {
	if (soultimateFilter=='default'){
  $('*[id="soultimate]').show();
	}
	else{
  $('*[id="soultimate]').hide();
  $('*[id="]*'+soultimateFilter).show();
	}
}
function filterSkill(skillFilter) {
	if (skillFilter=='default'){
  $('*[id="skill]').show();
	}
	else{
  $('*[id="skill]').hide();
  $('*[id="]*'+skillFilter).show();
	}
}