$args = array(
		'client_id' => 'APPLICATION API KEY',
		'scope' => 'read',
		'response_type' => 'code',
	);

	$query = http_build_query($args);

	$url = "https://collection.cooperhewitt.org/api/oauth2/authenticate/?" . $query;

	header("location: $url");
	exit();