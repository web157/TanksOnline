<?php

require_once 'PHP_Framework/Router.php';
require_once 'PHP_Framework/Main_Site.php';
require_once 'PHP_Framework/BaseClass/Models.php';
require_once 'PHP_Framework/BaseClass/View.php';
require_once 'PHP_Framework/BaseClass/Controller.php';
require_once 'Project/Config/Configuration.php';

Router::run(ConfigArray());