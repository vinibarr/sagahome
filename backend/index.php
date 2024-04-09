<?php
	
	// Infrastructure
	require_once 'infrastructure/Headers.php';
	require_once 'infrastructure/Rest.php';
	require_once 'infrastructure/Mailer.php';

	// Helpers
	require_once 'helpers/StringHelper.php';


	// Entities
	require_once 'entities/Contact.php';


	Rest::Open($_REQUEST);

?>