const API_PORT = process.env.API_PORT || 80;

const Express = require( "express" );
const bodyParser = require( "body-parser" );

const app = Express();
app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( bodyParser.json() );
app.listen( API_PORT, function()
{
	console.log( "Express Server : " + API_PORT + " is running~" );
})

exports.app = app;
exports.router = function( $route )
{
	const router = Express.Router();

	app.use( $route, router );

	return router;
}