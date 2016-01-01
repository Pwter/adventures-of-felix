function Hero()
{
	var _herowidth = 48;
	var _heroheight = 64;
	var _herospeed = 5;
	
	this.getHeroSpeed=function()
	{
		return _herospeed;
		
	}
	
	this.getHeroSize=function()
	{
		return [_herowidth,_heroheight];
		
	}
	
}