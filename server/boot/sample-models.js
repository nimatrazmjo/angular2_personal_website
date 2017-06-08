module.exports = function(app)  {
	var User = app.models.user;
	var Role = app.models.Role;
	var RoleMapping = app.models.RoleMapping;
	var team = app.models.Team;

	User.create([
		{username: 'John', email: 'john@doe.com', password: 'opensesame'},
	    {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
	    {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
		], function (err, users) {
			if (err) throw err;

			console.log('User created +' + users);

			users[0].projects.create({
				'name': 'Projects1',
				'balance': 100
			}, function (err, project) {
				if (err) throw err;

				console.log('Created project : ' + project);

				team.create([
					{ownerId: project.ownerId, memberId: users[0].id},
        			{ownerId: project.ownerId, memberId: users[1].id}
				], function( err, team ) {
					if (err) throw err;

					console.log('Created taem : ' + team);
				});
			});

			//create project2 snf make jane as owner
			users[1].projects.create({
				'name': 'Projects',
				'balanace': 1000	
			}, function(err, project) {
				if(err) throw err;

				team.create({
			        ownerId: project.ownerId,
			        memberId: users[1].id
			      }, function(err, team) {
			        if (err) throw err;

			        console.log('Created team:', team);
			    });
			});

			Role.create({
				'name': 'admin'
			}, function(err, role) {
				if (err) throw (err);

				console.log('Created Roles : ' + role);
				role.principals.create({
                	principalType: RoleMapping.USER,
		            principalId: users[2].id
		        }, function(err, principal) {
		            if (err) throw err;

		            console.log('Created principal:', principal);
		        });
			});
			
		});

};
