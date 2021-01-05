var detectCookies = (items) => {
	for(var i in items){
		if(items[i].toLowerCase().indexOf('cookie')>=0){
			return items[i];
		}
	}
	return false;
}