
function Collision()
{
    this.Vert = Array();
    this.PreviousNumTriangle = 0;
    
    this.Vert1 = Array();
    this.PreviousNumTriangle1 = 0;
    
    this.PreviousDataPosition = Array();
}

Collision.prototype.AssemblyTriangleMapa = function(Vert1)
{       
    this.Vert = [];
    
    this.PreviousNumTriangle = 0;
   
    var j = 0;
    
    for(var i = 0; i < Vert1.length / 3; i++){
     
     this.Vert[i] = Array();
     
     this.Vert[i]["x"] = Vert1[j];
     j++;
     this.Vert[i]["y"] = Vert1[j];
     j++;
     this.Vert[i]["z"] = Vert1[j];
     j++;
     this.Vert[i]["x1"] = Vert1[j];
     j++;
     this.Vert[i]["y1"] = Vert1[j];
     j++;
     this.Vert[i]["z1"] = Vert1[j];
     j++;
     this.Vert[i]["x2"] = Vert1[j];
     j++;
     this.Vert[i]["y2"] = Vert1[j];
     j++;
     this.Vert[i]["z2"] = Vert1[j];
     j++;
     
     
    }
   
};

Collision.prototype.AssemblyTriangleObject = function(Vert2)
{      
    this.PreviousDataPosition["PosX"];       
    this.PreviousDataPosition["PosZ"];
    
    this.Vert1 = [];
    
    this.PreviousNumTriangle1 = 0;
   
    var j = 0;
    
    for(var i = 0; i < Vert2.length / 3; i++){
     
     this.Vert1[i] = Array();
     
     this.Vert1[i]["x"] = Vert2[j];
     j++;
     this.Vert1[i]["y"] = Vert2[j];
     j++;
     this.Vert1[i]["z"] = Vert2[j];
     j++;
     this.Vert1[i]["x1"] = Vert2[j];
     j++;
     this.Vert1[i]["y1"] = Vert2[j];
     j++;
     this.Vert1[i]["z1"] = Vert2[j];
     j++;
     this.Vert1[i]["x2"] = Vert2[j];
     j++;
     this.Vert1[i]["y2"] = Vert2[j];
     j++;
     this.Vert1[i]["z2"] = Vert2[j];
     j++;
     
     
    }
   
};

function s2(x1,y1,x2,y2,x3,y3)
	{
		return ((x1 - x2)*(y3 - y2) - (y1 - y2)*(x3 - x2));
	}

Collision.prototype.MapaPosition = function(PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{
    /*
   var x1, y1, x2, y2, x3, y3, z1, z2, z3;
    
    for(var i = 0; i < this.Vert.length / 3; i++){
        
                        x1 = this.Vert[i]["x"];
                        
			y1 = this.Vert[i]["z"];
                        
                        x2 = this.Vert[i]["x1"];
                        
			y2 = this.Vert[i]["z1"];

			x3 = this.Vert[i]["x2"];
                       
			y3 = this.Vert[i]["z2"];

			var x = PosX;
			var y = PosZ;

			var f1 = s2(x, y, x1, y1, x2, y2);
			var f2 = s2(x, y, x2, y2, x3, y3);
			var f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){
                         
                                x1 = this.Vert[i]["x"];
				y1 = this.Vert[i]["y"];
				z1 = this.Vert[i]["z"];

				x2 = this.Vert[i]["x1"];
				y2 = this.Vert[i]["y1"];
				z2 = this.Vert[i]["z1"];

				x3 = this.Vert[i]["x2"];
				y3 = this.Vert[i]["y2"];
				z3 = this.Vert[i]["z2"];

				var X2 = PosX;
				var Z2 = PosZ;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;



				
				var Y1 = ((-(a*X2 + c*Z2 + d) / b));
                                
                                return Y1 + 0.5;
                        }

				
    }
    return PosY;
    */
   
   var DataCollision = Array();
   
   DataCollision["PosX"] = PosX;
   DataCollision["PosY"] = PosY;
   DataCollision["PosZ"] = PosZ;
   DataCollision["PosTX"] = PosTx;
   DataCollision["PosTY"] = PosTy;
   DataCollision["PosTZ"] = PosTz;
   
   var x1, y1, x2, y2, x3, y3, z1, z2, z3;
	var X2, Z2;
	var x, y;
	var f1, f2, f3;

	x1 = this.Vert[this.PreviousNumTriangle]["x"];
	y1 = this.Vert[this.PreviousNumTriangle]["z"];

	x2 = this.Vert[this.PreviousNumTriangle]["x1"];
	y2 = this.Vert[this.PreviousNumTriangle]["z1"];

	x3 = this.Vert[this.PreviousNumTriangle]["x2"];
	y3 = this.Vert[this.PreviousNumTriangle]["z2"];

	x = PosX;
	y = PosZ;

	f1 = s2(x, y, x1, y1, x2, y2);
	f2 = s2(x, y, x2, y2, x3, y3);
	f3 = s2(x, y, x3, y3, x1, y1);




	if ((f1*f2) > 0 && (f2*f3) > 0){

		x1 = this.Vert[this.PreviousNumTriangle]["x"];
		z1 = this.Vert[this.PreviousNumTriangle]["z"];
		y1 = this.Vert[this.PreviousNumTriangle]["y"];

		x2 = this.Vert[this.PreviousNumTriangle]["x1"];
		z2 = this.Vert[this.PreviousNumTriangle]["z1"];
		y2 = this.Vert[this.PreviousNumTriangle]["y1"];

		x3 = this.Vert[this.PreviousNumTriangle]["x2"];
		z3 = this.Vert[this.PreviousNumTriangle]["z2"];
		y3 = this.Vert[this.PreviousNumTriangle]["y2"];

		X2 = PosX;
		Z2 = PosZ;

		var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
		var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
		var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
		var d = -a*x1 - b*y1 - c*z1;

		DataCollision["PosY"] = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

	}
	else{

		var i = this.PreviousNumTriangle;
		var j = this.PreviousNumTriangle;

		while (true)
		{
			x1 = this.Vert[i]["x"];
                        y1 = this.Vert[i]["z"];

                        x2 = this.Vert[i]["x1"];
                        y2 = this.Vert[i]["z1"];

                        x3 = this.Vert[i]["x2"];
                        y3 = this.Vert[i]["z2"];

			x = PosX;
			y = PosZ;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				this.PreviousNumTriangle = i;

				x1 = this.Vert[i]["x"];
                                z1 = this.Vert[i]["z"];
                                y1 = this.Vert[i]["y"];

                                x2 = this.Vert[i]["x1"];
                                z2 = this.Vert[i]["z1"];
                                y2 = this.Vert[i]["y1"];

                                x3 = this.Vert[i]["x2"];
                                z3 = this.Vert[i]["z2"];
                                y3 = this.Vert[i]["y2"];

				X2 = PosX;
				Z2 = PosZ;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				DataCollision["PosY"] = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				break;

			}

			x1 = this.Vert[j]["x"];
                        y1 = this.Vert[j]["z"];

                        x2 = this.Vert[j]["x1"];
                        y2 = this.Vert[j]["z1"];

                        x3 = this.Vert[j]["x2"];
                        y3 = this.Vert[j]["z2"];


			x = PosX;
			y = PosZ;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				this.PreviousNumTriangle = j;

				x1 = this.Vert[j]["x"];
                                z1 = this.Vert[j]["z"];
                                y1 = this.Vert[j]["y"];

                                x2 = this.Vert[j]["x1"];
                                z2 = this.Vert[j]["z1"];
                                y2 = this.Vert[j]["y1"];

                                x3 = this.Vert[j]["x2"];
                                z3 = this.Vert[j]["z2"];
                                y3 = this.Vert[j]["y2"];

				X2 = PosX;
				Z2 = PosZ;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				DataCollision["PosY"] = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				break;

			}

			if (i == this.Vert.length / 3 && j == 0){
				break;
			}

			if (i < this.Vert.length / 3){
				i++;
			}
			if (j > 0){
				j--;
			}
		}

	}
        
        //return DataCollision["PosY"];


	var TempPosX1 = PosX + (0.5 * Math.sin(PosTy + 1.5));
	var TempPosX2 = PosX - (0.5 * Math.sin(PosTy + 1.5));

	var TempPosY1 = 0;
	var TempPosY2 = 0;

	var TempPosZ1 = PosZ + (0.5 * Math.cos(PosTy + 1.5));
	var TempPosZ2 = PosZ - (0.5 * Math.cos(PosTy + 1.5));

	x1 = this.Vert[this.PreviousNumTriangle]["x"];
	y1 = this.Vert[this.PreviousNumTriangle]["z"];

	x2 = this.Vert[this.PreviousNumTriangle]["x1"];
	y2 = this.Vert[this.PreviousNumTriangle]["z1"];

	x3 = this.Vert[this.PreviousNumTriangle]["x2"];
	y3 = this.Vert[this.PreviousNumTriangle]["z2"];

	x = TempPosX1;
	y = TempPosZ1;

	f1 = s2(x, y, x1, y1, x2, y2);
	f2 = s2(x, y, x2, y2, x3, y3);
	f3 = s2(x, y, x3, y3, x1, y1);




	if ((f1*f2) > 0 && (f2*f3) > 0){

		x1 = this.Vert[this.PreviousNumTriangle]["x"];
		z1 = this.Vert[this.PreviousNumTriangle]["z"];
		y1 = this.Vert[this.PreviousNumTriangle]["y"];

		x2 = this.Vert[this.PreviousNumTriangle]["x1"];
		z2 = this.Vert[this.PreviousNumTriangle]["z1"];
		y2 = this.Vert[this.PreviousNumTriangle]["y1"];

		x3 = this.Vert[this.PreviousNumTriangle]["x2"];
		z3 = this.Vert[this.PreviousNumTriangle]["z2"];
		y3 = this.Vert[this.PreviousNumTriangle]["y2"];


		X2 = TempPosX1;
		Z2 = TempPosZ1;

		var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
		var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
		var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
		var d = -a*x1 - b*y1 - c*z1;

		TempPosY1 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

	}
	else{

		var i = this.PreviousNumTriangle;
		var j = this.PreviousNumTriangle;

		while (true)
		{
			x1 = this.Vert[i]["x"];
                        y1 = this.Vert[i]["z"];

                        x2 = this.Vert[i]["x1"];
                        y2 = this.Vert[i]["z1"];

                        x3 = this.Vert[i]["x2"];
                        y3 = this.Vert[i]["z2"];

			x = TempPosX1;
			y = TempPosZ1;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = i;

				x1 = this.Vert[i]["x"];
                                z1 = this.Vert[i]["z"];
                                y1 = this.Vert[i]["y"];

                                x2 = this.Vert[i]["x1"];
                                z2 = this.Vert[i]["z1"];
                                y2 = this.Vert[i]["y1"];

                                x3 = this.Vert[i]["x2"];
                                z3 = this.Vert[i]["z2"];
                                y3 = this.Vert[i]["y2"];

				X2 = TempPosX1;
				Z2 = TempPosZ1;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY1 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				break;

			}

			x1 = this.Vert[j]["x"];
                        y1 = this.Vert[j]["z"];

                        x2 = this.Vert[j]["x1"];
                        y2 = this.Vert[j]["z1"];

                        x3 = this.Vert[j]["x2"];
                        y3 = this.Vert[j]["z2"];

			x = TempPosX1;
			y = TempPosZ1;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = j;

				x1 = this.Vert[j]["x"];
                                z1 = this.Vert[j]["z"];
                                y1 = this.Vert[j]["y"];

                                x2 = this.Vert[j]["x1"];
                                z2 = this.Vert[j]["z1"];
                                y2 = this.Vert[j]["y1"];

                                x3 = this.Vert[j]["x2"];
                                z3 = this.Vert[j]["z2"];
                                y3 = this.Vert[j]["y2"];


				X2 = TempPosX1;
				Z2 = TempPosZ1;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY1 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				break;

			}

			if (i == this.Vert.length / 3 && j == 0){
				break;
			}

			if (i < this.Vert.length / 3){
				i++;
			}
			if (j > 0){
				j--;
			}
		}

	}
	//////////////////////////////////////////////////////////////
	/////////////////////////////
	/////////////////////////////////////////////////////////////////
	x1 = this.Vert[this.PreviousNumTriangle]["x"];
	y1 = this.Vert[this.PreviousNumTriangle]["z"];

	x2 = this.Vert[this.PreviousNumTriangle]["x1"];
	y2 = this.Vert[this.PreviousNumTriangle]["z1"];

	x3 = this.Vert[this.PreviousNumTriangle]["x2"];
	y3 = this.Vert[this.PreviousNumTriangle]["z2"];

	x = TempPosX2;
	y = TempPosZ2;

	f1 = s2(x, y, x1, y1, x2, y2);
	f2 = s2(x, y, x2, y2, x3, y3);
	f3 = s2(x, y, x3, y3, x1, y1);




	if ((f1*f2) > 0 && (f2*f3) > 0){

		x1 = this.Vert[this.PreviousNumTriangle]["x"];
		z1 = this.Vert[this.PreviousNumTriangle]["z"];
		y1 = this.Vert[this.PreviousNumTriangle]["y"];

		x2 = this.Vert[this.PreviousNumTriangle]["x1"];
		z2 = this.Vert[this.PreviousNumTriangle]["z1"];
		y2 = this.Vert[this.PreviousNumTriangle]["y1"];

		x3 = this.Vert[this.PreviousNumTriangle]["x2"];
		z3 = this.Vert[this.PreviousNumTriangle]["z2"];
		y3 = this.Vert[this.PreviousNumTriangle]["y2"];

		X2 = TempPosX2;
		Z2 = TempPosZ2;

		var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
		var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
		var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
		var d = -a*x1 - b*y1 - c*z1;

		TempPosY2 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

		DataCollision["PosTZ"] = Math.atan((TempPosY1 - TempPosY2));

	}
	else{

		var i = this.PreviousNumTriangle;
		var j = this.PreviousNumTriangle;

		while (true)
		{
			x1 = this.Vert[i]["x"];
                        y1 = this.Vert[i]["z"];

                        x2 = this.Vert[i]["x1"];
                        y2 = this.Vert[i]["z1"];

                        x3 = this.Vert[i]["x2"];
                        y3 = this.Vert[i]["z2"];

			x = TempPosX2;
			y = TempPosZ2;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = i;

				x1 = this.Vert[i]["x"];
                                z1 = this.Vert[i]["z"];
                                y1 = this.Vert[i]["y"];

                                x2 = this.Vert[i]["x1"];
                                z2 = this.Vert[i]["z1"];
                                y2 = this.Vert[i]["y1"];

                                x3 = this.Vert[i]["x2"];
                                z3 = this.Vert[i]["z2"];
                                y3 = this.Vert[i]["y2"];

				X2 = TempPosX2;
				Z2 = TempPosZ2;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY2 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				DataCollision["PosTZ"] = Math.atan((TempPosY1 - TempPosY2));

				break;

			}

			x1 = this.Vert[j]["x"];
                        y1 = this.Vert[j]["z"];

                        x2 = this.Vert[j]["x1"];
                        y2 = this.Vert[j]["z1"];

                        x3 = this.Vert[j]["x2"];
                        y3 = this.Vert[j]["z2"];

			x = TempPosX2;
			y = TempPosZ2;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = j;

				x1 = this.Vert[j]["x"];
                                z1 = this.Vert[j]["z"];
                                y1 = this.Vert[j]["y"];

                                x2 = this.Vert[j]["x1"];
                                z2 = this.Vert[j]["z1"];
                                y2 = this.Vert[j]["y1"];

                                x3 = this.Vert[j]["x2"];
                                z3 = this.Vert[j]["z2"];
                                y3 = this.Vert[j]["y2"];

				X2 = TempPosX2;
				Z2 = TempPosZ2;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY2 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				DataCollision["PosTZ"] = Math.atan((TempPosY1 - TempPosY2));

				break;

			}

			if (i == this.Vert.length / 3 && j == 0){
				break;
			}

			if (i < this.Vert.length / 3){
				i++;
			}
			if (j > 0){
				j--;
			}
		}

	}

        //return DataCollision;

	///////////////////////////////////////////////////////////////////////////
	////////////////////////////
	///////////////////////////////
	/////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	TempPosX1 = PosX - (0.5 * Math.sin(PosTy));
	TempPosX2 = PosX + (0.5 * Math.sin(PosTy));

	TempPosY1 = 0;
	TempPosY2 = 0;

	TempPosZ1 = PosZ - (0.5 * Math.cos(PosTy));
	TempPosZ2 = PosZ + (0.5 * Math.cos(PosTy));

	x1 = this.Vert[this.PreviousNumTriangle]["x"];
	y1 = this.Vert[this.PreviousNumTriangle]["z"];

	x2 = this.Vert[this.PreviousNumTriangle]["x1"];
	y2 = this.Vert[this.PreviousNumTriangle]["z1"];

	x3 = this.Vert[this.PreviousNumTriangle]["x2"];
	y3 = this.Vert[this.PreviousNumTriangle]["z2"];

	x = TempPosX1;
	y = TempPosZ1;

	f1 = s2(x, y, x1, y1, x2, y2);
	f2 = s2(x, y, x2, y2, x3, y3);
	f3 = s2(x, y, x3, y3, x1, y1);




	if ((f1*f2) > 0 && (f2*f3) > 0){

		x1 = this.Vert[this.PreviousNumTriangle]["x"];
		z1 = this.Vert[this.PreviousNumTriangle]["z"];
		y1 = this.Vert[this.PreviousNumTriangle]["y"];

		x2 = this.Vert[this.PreviousNumTriangle]["x1"];
		z2 = this.Vert[this.PreviousNumTriangle]["z1"];
		y2 = this.Vert[this.PreviousNumTriangle]["y1"];

		x3 = this.Vert[this.PreviousNumTriangle]["x2"];
		z3 = this.Vert[this.PreviousNumTriangle]["z2"];
		y3 = this.Vert[this.PreviousNumTriangle]["y2"];

		X2 = TempPosX1;
		Z2 = TempPosZ1;

		var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
		var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
		var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
		var d = -a*x1 - b*y1 - c*z1;

		TempPosY1 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

	}
	else{

		var i = this.PreviousNumTriangle;
		var j = this.PreviousNumTriangle;

		while (true)
		{
			x1 = this.Vert[i]["x"];
                        y1 = this.Vert[i]["z"];

                        x2 = this.Vert[i]["x1"];
                        y2 = this.Vert[i]["z1"];

                        x3 = this.Vert[i]["x2"];
                        y3 = this.Vert[i]["z2"];

			x = TempPosX1;
			y = TempPosZ1;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = i;

				x1 = this.Vert[i]["x"];
                                z1 = this.Vert[i]["z"];
                                y1 = this.Vert[i]["y"];

                                x2 = this.Vert[i]["x1"];
                                z2 = this.Vert[i]["z1"];
                                y2 = this.Vert[i]["y1"];

                                x3 = this.Vert[i]["x2"];
                                z3 = this.Vert[i]["z2"];
                                y3 = this.Vert[i]["y2"];

				X2 = TempPosX1;
				Z2 = TempPosZ1;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY1 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				break;

			}

			x1 = this.Vert[j]["x"];
                        y1 = this.Vert[j]["z"];

                        x2 = this.Vert[j]["x1"];
                        y2 = this.Vert[j]["z1"];

                        x3 = this.Vert[j]["x2"];
                        y3 = this.Vert[j]["z2"];

			x = TempPosX1;
			y = TempPosZ1;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = j;

				x1 = this.Vert[j]["x"];
                                z1 = this.Vert[j]["z"];
                                y1 = this.Vert[j]["y"];

                                x2 = this.Vert[j]["x1"];
                                z2 = this.Vert[j]["z1"];
                                y2 = this.Vert[j]["y1"];

                                x3 = this.Vert[j]["x2"];
                                z3 = this.Vert[j]["z2"];
                                y3 = this.Vert[j]["y2"];
                                
				X2 = TempPosX1;
				Z2 = TempPosZ1;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY1 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				break;

			}

			if (i == this.Vert.length / 3 && j == 0){
				break;
			}

			if (i < this.Vert.length / 3){
				i++;
			}
			if (j > 0){
				j--;
			}
		}

	}
	//////////////////////////////////////////////////////////////
	/////////////////////////////
	/////////////////////////////////////////////////////////////////
	x1 = this.Vert[this.PreviousNumTriangle]["x"];
	y1 = this.Vert[this.PreviousNumTriangle]["z"];

	x2 = this.Vert[this.PreviousNumTriangle]["x1"];
	y2 = this.Vert[this.PreviousNumTriangle]["z1"];

	x3 = this.Vert[this.PreviousNumTriangle]["x2"];
	y3 = this.Vert[this.PreviousNumTriangle]["z2"];

	x = TempPosX2;
	y = TempPosZ2;

	f1 = s2(x, y, x1, y1, x2, y2);
	f2 = s2(x, y, x2, y2, x3, y3);
	f3 = s2(x, y, x3, y3, x1, y1);




	if ((f1*f2) > 0 && (f2*f3) > 0){

		x1 = this.Vert[this.PreviousNumTriangle]["x"];
		z1 = this.Vert[this.PreviousNumTriangle]["z"];
		y1 = this.Vert[this.PreviousNumTriangle]["y"];

		x2 = this.Vert[this.PreviousNumTriangle]["x1"];
		z2 = this.Vert[this.PreviousNumTriangle]["z1"];
		y2 = this.Vert[this.PreviousNumTriangle]["y1"];

		x3 = this.Vert[this.PreviousNumTriangle]["x2"];
		z3 = this.Vert[this.PreviousNumTriangle]["z2"];
		y3 = this.Vert[this.PreviousNumTriangle]["y2"];

		X2 = TempPosX2;
		Z2 = TempPosZ2;

		var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
		var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
		var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
		var d = -a*x1 - b*y1 - c*z1;

		TempPosY2 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

		DataCollision["PosTX"] = Math.atan((TempPosY1 - TempPosY2));

	}
	else{

		var i = this.PreviousNumTriangle;
		var j = this.PreviousNumTriangle;

		while (true)
		{
			x1 = this.Vert[i]["x"];
                        y1 = this.Vert[i]["z"];

                        x2 = this.Vert[i]["x1"];
                        y2 = this.Vert[i]["z1"];

                        x3 = this.Vert[i]["x2"];
                        y3 = this.Vert[i]["z2"];

			x = TempPosX2;
			y = TempPosZ2;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = i;

				x1 = this.Vert[i]["x"];
                                z1 = this.Vert[i]["z"];
                                y1 = this.Vert[i]["y"];

                                x2 = this.Vert[i]["x1"];
                                z2 = this.Vert[i]["z1"];
                                y2 = this.Vert[i]["y1"];

                                x3 = this.Vert[i]["x2"];
                                z3 = this.Vert[i]["z2"];
                                y3 = this.Vert[i]["y2"];

				X2 = TempPosX2;
				Z2 = TempPosZ2;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY2 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				DataCollision["PosTX"] = Math.atan((TempPosY1 - TempPosY2));

				break;

			}

			x1 = this.Vert[j]["x"];
                        y1 = this.Vert[j]["z"];

                        x2 = this.Vert[j]["x1"];
                        y2 = this.Vert[j]["z1"];

                        x3 = this.Vert[j]["x2"];
                        y3 = this.Vert[j]["z2"];

			x = TempPosX2;
			y = TempPosZ2;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){


				//*NumTriangle = j;

				x1 = this.Vert[j]["x"];
                                z1 = this.Vert[j]["z"];
                                y1 = this.Vert[j]["y"];

                                x2 = this.Vert[j]["x1"];
                                z2 = this.Vert[j]["z1"];
                                y2 = this.Vert[j]["y1"];

                                x3 = this.Vert[j]["x2"];
                                z3 = this.Vert[j]["z2"];
                                y3 = this.Vert[j]["y2"];


				X2 = TempPosX2;
				Z2 = TempPosZ2;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				TempPosY2 = ((-(a*X2 + c*Z2 + d) / b) + 0.5);

				DataCollision["PosTX"] = Math.atan((TempPosY1 - TempPosY2));

				break;

			}

			if (i == this.Vert.length / 3 && j == 0){
				break;
			}

			if (i < this.Vert.length / 3){
				i++;
			}
			if (j > 0){
				j--;
			}
		}

	}
        
        return DataCollision;
        
};

Collision.prototype.ShotCollision = function(PosX, PosY, PosZ)
{
    
   var x1, y1, x2, y2, x3, y3, z1, z2, z3;
    
    for(var i = 0; i < this.Vert.length / 3; i++){
        
                        x1 = this.Vert[i]["x"];
                        
			y1 = this.Vert[i]["z"];
                        
                        x2 = this.Vert[i]["x1"];
                        
			y2 = this.Vert[i]["z1"];

			x3 = this.Vert[i]["x2"];
                       
			y3 = this.Vert[i]["z2"];

			var x = PosX;
			var y = PosZ;

			var f1 = s2(x, y, x1, y1, x2, y2);
			var f2 = s2(x, y, x2, y2, x3, y3);
			var f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){
                         
                                x1 = this.Vert[i]["x"];
				y1 = this.Vert[i]["y"];
				z1 = this.Vert[i]["z"];

				x2 = this.Vert[i]["x1"];
				y2 = this.Vert[i]["y1"];
				z2 = this.Vert[i]["z1"];

				x3 = this.Vert[i]["x2"];
				y3 = this.Vert[i]["y2"];
				z3 = this.Vert[i]["z2"];

				var X2 = PosX;
				var Z2 = PosZ;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;



				
				var Y1 = ((-(a*X2 + c*Z2 + d) / b));
                                
                                
                                if(PosY < Y1){
                                                                       
                                    return true;
                                }
                                //return Y1 + 0.5;
                        }

				
    }
    
    return false;
    //return PosY;
    
};

Collision.prototype.ObjectsPosition = function(PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{
    var DataCollision = Array();
   
   DataCollision["PosX"] = PosX;
   DataCollision["PosY"] = PosY;
   DataCollision["PosZ"] = PosZ;
   DataCollision["PosTX"] = PosTx;
   DataCollision["PosTY"] = PosTy;
   DataCollision["PosTZ"] = PosTz;
    
    var x1, y1, x2, y2, x3, y3, z1, z2, z3;
		var X2, Z2;
		var x, y;
		var f1, f2, f3;

		for (var i = 0; i < this.Vert1.length / 3; i++){

			x1 = this.Vert1[i]["y"];
			y1 = this.Vert1[i]["z"];

			x2 = this.Vert1[i]["y1"];
			y2 = this.Vert1[i]["z1"];

			x3 = this.Vert1[i]["y2"];
			y3 = this.Vert1[i]["z2"];

			x = PosY + 0.5;
			y = PosZ;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){

				var XDiff;
				var YDiff;
				var ZDiff;

				var Distance;

				var XCenter1;
				var YCenter1;
				var ZCenter1;

				var XCenter2;
				var YCenter2;
				var ZCenter2;

				var Radius1;




				XCenter1 = PosX;
				YCenter1 = this.Vert1[i]["y"];
				ZCenter1 = this.Vert1[i]["z"];

				XCenter2 = this.Vert1[i]["x"];
				YCenter2 = this.Vert1[i]["y"];
				ZCenter2 = this.Vert1[i]["z"];

				Radius1 = 2;


				XDiff = Math.abs(XCenter2 - XCenter1);
				YDiff = Math.abs(YCenter2 - YCenter1);
				ZDiff = Math.abs(ZCenter2 - ZCenter1);
				Distance = Math.sqrt(XDiff*XDiff + YDiff*YDiff + ZDiff*ZDiff);

				// если сферы пересекаются… 
				if (Distance <= Radius1){					
					//*PosX = *TempPosX;
					DataCollision["PosX"] = this.PreviousDataPosition["PosX"];
                                        
					return DataCollision;
				
				}
						


			}

		}


		for (var i = 0; i < this.Vert1.length / 3; i++){

			x1 = this.Vert1[i]["y"];
			y1 = this.Vert1[i]["x"];

			x2 = this.Vert1[i]["y1"];
			y2 = this.Vert1[i]["x1"];

			x3 = this.Vert1[i]["y2"];
			y3 = this.Vert1[i]["x2"];

			x = PosY + 0.5;
			y = PosX;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);




			if ((f1*f2) > 0 && (f2*f3) > 0){

				var XDiff;
				var YDiff;
				var ZDiff;

				var Distance;

				var XCenter1;
				var YCenter1;
				var ZCenter1;

				var XCenter2;
				var YCenter2;
				var ZCenter2;

				var Radius1;




				XCenter1 = this.Vert1[i]["x"];
				YCenter1 = this.Vert1[i]["y"];
				ZCenter1 = PosZ;

				XCenter2 = this.Vert1[i]["x"];
				YCenter2 = this.Vert1[i]["y"];
				ZCenter2 = this.Vert1[i]["z"];

				Radius1 = 2;


				XDiff = Math.abs(XCenter2 - XCenter1);
				YDiff = Math.abs(YCenter2 - YCenter1);
				ZDiff = Math.abs(ZCenter2 - ZCenter1);
				Distance = Math.sqrt(XDiff*XDiff + YDiff*YDiff + ZDiff*ZDiff);

				// если сферы пересекаются… 
				if (Distance <= Radius1){
					//*PosZ = *TempPosZ;
					DataCollision["PosZ"] = this.PreviousDataPosition["PosZ"];
                                        
					return DataCollision;
					
				}
				


			}

		}

		///*TempPosX = *PosX;
		//*TempPosZ = *PosZ;

		
	
        this.PreviousDataPosition["PosX"] = PosX;       
        this.PreviousDataPosition["PosZ"] = PosZ;
      
        return DataCollision;
};