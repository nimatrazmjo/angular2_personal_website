module.exports = function(app) {
	var route = app.loopback.Router();

	route.get('/', function(req, res){
		res.render('index', {
			loginFailed: false
		});
	});

	route.get('/projects', function (req, res) {
		res.render('project');
	});

	route.post('/project', function(req, res) {
		var email = req.body.email;
    	var password = req.body.password;

    	app.module.User.login({
    		email: email,
    		password: password
    	}, 'user', function(err, token) {
    		if (err) {
    			return res.render('index', {	
					email: email,
					password: password
				});
    		}

    		token = token.toJSON();

    		res.render('projects', {
		        username: token.user.username,
		        accessToken: token.id
		      });
    	});
	});

	route.get('/logout', function(req, res) {
		var accessToken = app.models.AccessToken;
		var token = new AccessToken({id: req.query['access_token']})
		token.destroy();
		res.redirect('/');
	});
}