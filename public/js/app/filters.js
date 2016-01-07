angular.module('filters', [])
	.filter('startFrom',
		function ()
		{
			return function (input, start)
			{
				start = +start; // Parse to int
				return input.slice(start);
			}
		});
