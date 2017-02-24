const ENV = {
	NODE_ENV : "development",
	API_PORT : 8000
}

module.exports = {
	apps : [
		{
			name : "ExpressProject",
			script : "js/app.js",
			watch : [ "js" ],
			exec_mode : "fork",
			instances : 1,
			detached : true,
			max_restart : 1,
			env : ENV,

			error_file : "logs/pm2_error.log",
			out_file : "logs/pm2.log",
			log_date_format : "YYYY.MM.DD HH:mm:ss:ms"
		}
	]
}