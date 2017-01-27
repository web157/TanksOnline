<?php

class ServerMapaNumber{
    public $Number_Mapa;
    public $MapaPosition = array();
    public $MaxUsers = 2;
    public $NumUsers;
    public $TimeoutMapa;
    
    function __construct()
	{
		$this->MapaPosition[1] = array();
                $this->MapaPosition[1][0] = array();
                $this->MapaPosition[1][0]["PosX"] = 20;
                $this->MapaPosition[1][0]["PosY"] = 0.5;
                $this->MapaPosition[1][0]["PosZ"] = 90;
                                
                $this->MapaPosition[1][1] = array();
                $this->MapaPosition[1][1]["PosX"] = -20;
                $this->MapaPosition[1][1]["PosY"] = 0.5;
                $this->MapaPosition[1][1]["PosZ"] = 90;
                
                $this->MapaPosition[1][2] = array();
                $this->MapaPosition[1][2]["PosX"] = 20;
                $this->MapaPosition[1][2]["PosY"] = 0.5;
                $this->MapaPosition[1][2]["PosZ"] = -90;
                
                $this->MapaPosition[2] = array();
                $this->MapaPosition[2][0] = array();
                $this->MapaPosition[2][0]["PosX"] = 10;
                $this->MapaPosition[2][0]["PosY"] = 0.5;
                $this->MapaPosition[2][0]["PosZ"] = 5;
                                
                $this->MapaPosition[2][1] = array();
                $this->MapaPosition[2][1]["PosX"] = -10;
                $this->MapaPosition[2][1]["PosY"] = 0.5;
                $this->MapaPosition[2][1]["PosZ"] = 5;
                
                $this->MapaPosition[2][2] = array();
                $this->MapaPosition[2][2]["PosX"] = 10;
                $this->MapaPosition[2][2]["PosY"] = 0.5;
                $this->MapaPosition[2][2]["PosZ"] = -5;
	}
}
