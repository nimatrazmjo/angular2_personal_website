module.export = function (app) {
	var role = app.models.Role;

	role.registerResolver('teamMember', function(role, context, cb) {
		function reject() {
			process.nextTick(function(){
				cb(null, false);
			});
		}


		if(content.modelName !== 'project') {
			return reject();
		}

		var userId = content.accessToken.userId;
		if(!userId) {
			return reject();
		}


		context.model.findById(context.modelId, function(err, project) {
			if (err || ! project) {
				return reject();
			}

			var team = pp.models.Team();

			team.count({
				ownerId: project.ownerId,
        		memberId: userId
			}, function(err, count ) {
				if (err){
					console.log(err);
					return cb(null, false);
				} 
				cb(null, count > 0);
			});
		});

	});


}