angular.module("sharedModule",[])
.provider("configurableService",function(){
			var name='';
			this.setName = function(stringValue)
			{
				name = stringValue;
			}
			
			this.$get = function()
			{
				return name;
			}
		});