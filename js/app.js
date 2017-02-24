const { app, router } = require( "./core/express" );

const root = router( "" );
root.get( "/", function( $req, $res )
{
	$res.status( 200 ).json( { message : "Complete Express Template server!!" } );
} );

// try http://localhost:8000/user/wooyaggo
const user = router( "/user" );
user.get( "/:user_id", function( $req, $res )
{
	if( $req.params.user_id == null )
	{
		$res.status( 200 ).json( { result : "Not found.", message : "Can't find user." } );

		return;
	}

	$res.status( 200 ).json( { result : "OK", user : { user_id : $req.params.user_id } } );
})