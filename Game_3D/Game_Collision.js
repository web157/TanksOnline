
function Collision()
{
    this.Vert = Array();
    this.PreviousNumTriangle = 0;
    
    this.Vert1 = Array();
    this.PreviousNumTriangle1 = 0;
    
    this.PreviousNumTriangleMapa = 0;
    
    this.PreviousDataPosition = Array();
}

Collision.prototype.AssemblyTriangleMapa = function(Vert1)
{       
    this.Vert = [];
    
    this.PreviousNumTriangle = 0;
   
   this.PreviousNumTriangleMapa = 0;
   
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
                                //document.write(x1, z1, y1, x2, z2, y2, x3, z3, y3);
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
    ////////////////////////////////////////////////////////////////////
    
    for (var i = 0; i < this.Vert1.length / 3; i++){

			x1 = this.Vert1[i]["y"];
			y1 = this.Vert1[i]["z"];

			x2 = this.Vert1[i]["y1"];
			y2 = this.Vert1[i]["z1"];

			x3 = this.Vert1[i]["y2"];
			y3 = this.Vert1[i]["z2"];

			x = PosY;
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

				Radius1 = 0.5;


				XDiff = Math.abs(XCenter2 - XCenter1);
				YDiff = Math.abs(YCenter2 - YCenter1);
				ZDiff = Math.abs(ZCenter2 - ZCenter1);
				Distance = Math.sqrt(XDiff*XDiff + YDiff*YDiff + ZDiff*ZDiff);

				// если сферы пересекаются… 
				if (Distance <= Radius1){					
					//*PosX = *TempPosX;
                                        
					return true;
				
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

			x = PosY;
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

				Radius1 = 0.5;


				XDiff = Math.abs(XCenter2 - XCenter1);
				YDiff = Math.abs(YCenter2 - YCenter1);
				ZDiff = Math.abs(ZCenter2 - ZCenter1);
				Distance = Math.sqrt(XDiff*XDiff + YDiff*YDiff + ZDiff*ZDiff);

				// если сферы пересекаются… 
				if (Distance <= Radius1){
					//*PosZ = *TempPosZ;
					return true
					
				}
				


			}

		}
    
    
    ///////////////////////////////////////////////////////////////////
    
    
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
   
   var TempResX = false;
   var TempResZ = false;
    
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


                        x = PosY + 0.5;
			y = PosZ + 1.5;

			var f4 = s2(x, y, x1, y1, x2, y2);
			var f5 = s2(x, y, x2, y2, x3, y3);
			var f6 = s2(x, y, x3, y3, x1, y1);
                        
                        x = PosY + 0.5;
			y = PosZ - 1.5;

			var f7 = s2(x, y, x1, y1, x2, y2);
			var f8 = s2(x, y, x2, y2, x3, y3);
			var f9 = s2(x, y, x3, y3, x1, y1);

			if ((f1*f2) > 0 && (f2*f3) > 0 || (f4*f5) > 0 && (f5*f6) > 0 || (f7*f8) > 0 && (f8*f9) > 0){

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
                                        
					//return DataCollision;
                                        TempResX = true;
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


                        x = PosY + 0.5;
			y = PosX + 1.5;

			 f4 = s2(x, y, x1, y1, x2, y2);
			 f5 = s2(x, y, x2, y2, x3, y3);
			 f6 = s2(x, y, x3, y3, x1, y1);
                        
                        x = PosY + 0.5;
			y = PosX - 1.5;

			 f7 = s2(x, y, x1, y1, x2, y2);
			 f8 = s2(x, y, x2, y2, x3, y3);
                         f9 = s2(x, y, x3, y3, x1, y1);



			if ((f1*f2) > 0 && (f2*f3) > 0 || (f4*f5) > 0 && (f5*f6) > 0 || (f7*f8) > 0 && (f8*f9) > 0){				

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
                                        
					//return DataCollision;
					TempResZ = true;
				}
				


			}

		}

		///*TempPosX = *PosX;
		//*TempPosZ = *PosZ;
                
                if(TempResX == true && TempResZ == false){
                    this.PreviousDataPosition["PosZ"] = PosZ;
                    return DataCollision;
                }
                
                if(TempResZ == true && TempResX == false){
                    this.PreviousDataPosition["PosX"] = PosX;
                    return DataCollision;
                }
                
                if(TempResZ == true && TempResX == true){                   
                    return DataCollision;
                }
		/*
                 if(TempResX == true && TempResZ == false){
                    this.PrthiseviousDataPosition["PosZ"] = PosZ;
                    return DataCollision;
                }
                
                if(TempResX == false && TempResZ == true){
                    this.PrthiseviousDataPosition["PosX"] = PosX;
                    return DataCollision;
                }
	*/
        this.PreviousDataPosition["PosX"] = PosX;       
        this.PreviousDataPosition["PosZ"] = PosZ;
      
        return DataCollision;
};

Collision.prototype.CollisionCamera = function(PosX, PosY, PosZ){
    
    var x1, y1, x2, y2, x3, y3, z1, z2, z3;
	var X2, Z2;
	var x, y;
	var f1, f2, f3;

	x1 = this.Vert[this.PreviousNumTriangleMapa]["x"];
	y1 = this.Vert[this.PreviousNumTriangleMapa]["z"];

	x2 = this.Vert[this.PreviousNumTriangleMapa]["x1"];
	y2 = this.Vert[this.PreviousNumTriangleMapa]["z1"];

	x3 = this.Vert[this.PreviousNumTriangleMapa]["x2"];
	y3 = this.Vert[this.PreviousNumTriangleMapa]["z2"];

	x = PosX;
	y = PosZ;

	f1 = s2(x, y, x1, y1, x2, y2);
	f2 = s2(x, y, x2, y2, x3, y3);
	f3 = s2(x, y, x3, y3, x1, y1);




	if ((f1*f2) > 0 && (f2*f3) > 0){

		x1 = this.Vert[this.PreviousNumTriangleMapa]["x"];
		z1 = this.Vert[this.PreviousNumTriangleMapa]["z"];
		y1 = this.Vert[this.PreviousNumTriangleMapa]["y"];

		x2 = this.Vert[this.PreviousNumTriangleMapa]["x1"];
		z2 = this.Vert[this.PreviousNumTriangleMapa]["z1"];
		y2 = this.Vert[this.PreviousNumTriangleMapa]["y1"];

		x3 = this.Vert[this.PreviousNumTriangleMapa]["x2"];
		z3 = this.Vert[this.PreviousNumTriangleMapa]["z2"];
		y3 = this.Vert[this.PreviousNumTriangleMapa]["y2"];

		X2 = PosX;
		Z2 = PosZ;

		var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
		var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
		var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
		var d = -a*x1 - b*y1 - c*z1;

		return ((-(a*X2 + c*Z2 + d) / b) + 0.5);

	}
	else{

		var i = this.PreviousNumTriangleMapa;
		var j = this.PreviousNumTriangleMapa;

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


				this.PreviousNumTriangleMapa = i;

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

				return ((-(a*X2 + c*Z2 + d) / b) + 0.5);
                                //document.write(x1, z1, y1, x2, z2, y2, x3, z3, y3);
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


				this.PreviousNumTriangleMapa = j;

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

				return ((-(a*X2 + c*Z2 + d) / b) + 0.5);

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
        
        return PosY;
    
};

    function sqr(x){
	return x*x;
    }

Collision.prototype.CollisionObjectsCamera = function(PosX, PosY, PosZ, PosLx, PosLz, PosX1, PosY1, PosZ1)
{   
   // var DataCollision = Array();
    
    //DataCollision["PosX"] = PosX;
   // DataCollision["PosZ"] = PosZ;
   /*
    var x1, y1, x2, y2, x3, y3, z1, z2, z3, x, y;
    var X1, Y1, X2, Y2, X3, Y3, Z1, Z2, Z3;
		//var X2, Z2;
		var Xa, Ya, Za;
                var Vx,Vy,Vz;
		var f1, f2, f3;

		for (var i = 0; i < this.Vert1.length / 3; i++){

                
                    
			X1 = this.Vert1[i]["x"];
			Y1 = this.Vert1[i]["y"];
                        Z1 = this.Vert1[i]["z"];
                        
			X2 = this.Vert1[i]["x1"];
			Y2 = this.Vert1[i]["y1"];
                        Z2 = this.Vert1[i]["z1"];

			X3 = this.Vert1[i]["x2"];
			Y3 = this.Vert1[i]["y2"];
                        Z3 = this.Vert1[i]["z2"];

			Xa = PosX1 + PosX;
			Ya = PosY1 + PosY;
                        Za = PosZ1 + PosZ;
                        
                        Vx = PosLx;
			Vy = 0;
                        Vz = PosLz;
                        
                        var A=(Y2-Y1)*(Z3-Z1)-(Z2-Z1)*(Y3-Y1); //Вычисляем вектор нормали к треугольному полигону (векторное произведение) 
                        var B=(Z2-Z1)*(X3-X1)-(X2-X1)*(Z3-Z1); 
                        var C=(X2-X1)*(Y3-Y1)-(Y2-Y1)*(X3-X1); 
                        var D=-A*X1-B*Y1-C*Z1; 
                      // var A = -(Z3*Y2 - Z1*Y2 - Z3*Y1 + Y1*Z2 + Y3*Z1 - Z2*Y3);
                     //  var B = (Z1*X3 + Z2*X1 + Z3*X2 - Z2*X3 - Z1*X2 - Z3*X1);
                     //  var C = (Y2*X3 + Y1*X2 + Y3*X1 - Y1*X3 - Y2*X1 - X2*Y3);
                     //  var D = -A*X1 - B*Y1 - C*Z1;
                       
                        var k=-(A*Xa+B*Ya+C*Za+D)/(A*Vx+B*Vy+C*Vz); 
                        
                        var Xc=k*Vx+Xa; //Вычисляем точку пересечения луча с полигоном 
                        var Yc=k*Vy+Ya; 
                        var Zc=k*Vz+Za;
                        
                        //alert(Xc);
                        //debugger;
                        var ac1=Math.acos(((X1-Xc)*(X2-Xc)+(Y1-Yc)*(Y2-Yc)+(Z1-Zc)*(Z2-Zc))/(Math.sqrt(sqr(X1-Xc)+sqr(Y1-Yc)+sqr(Z1-Zc))*Math.sqrt(sqr(X2-Xc)+sqr(Y2-Yc)+sqr(Z2-Zc)))); 
                        var ac2=Math.acos(((X2-Xc)*(X3-Xc)+(Y2-Yc)*(Y3-Yc)+(Z2-Zc)*(Z3-Zc))/(Math.sqrt(sqr(X2-Xc)+sqr(Y2-Yc)+sqr(Z2-Zc))*Math.sqrt(sqr(X3-Xc)+sqr(Y3-Yc)+sqr(Z3-Zc)))); 
                        var ac3=Math.acos(((X3-Xc)*(X1-Xc)+(Y3-Yc)*(Y1-Yc)+(Z3-Zc)*(Z1-Zc))/(Math.sqrt(sqr(X3-Xc)+sqr(Y3-Yc)+sqr(Z3-Zc))*Math.sqrt(sqr(X1-Xc)+sqr(Y1-Yc)+sqr(Z1-Zc))));
                       
        
                        if(ac1+ac2+ac3 == 360){
                            
                            //DataCollision["PosX"] = Xc;
                            //DataCollision["PosZ"] = Zc;
                            alert("1111");
                        }                        

                        

///////////////////////////////////////////////////////////////////
/////////////////////////////////
                      
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////      

		}


		//alert("1111");

                //return DataCollision;
                */
   var DataCollision = Array();
   
   DataCollision["PosX"] = PosX;
   DataCollision["PosZ"] = PosZ;
   /*
   var TempResX = false;
   var TempResZ = false;
    
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

			x = PosY1 + PosY;
			y = PosZ1 + PosZ;

			f1 = s2(x, y, x1, y1, x2, y2);
			f2 = s2(x, y, x2, y2, x3, y3);
			f3 = s2(x, y, x3, y3, x1, y1);
                     

			if ((f1*f2) > 0 && (f2*f3) > 0){
				
				x1 = this.Vert1[i]["x"];
                                z1 = this.Vert1[i]["z"];
                                y1 = this.Vert1[i]["y"];

                                x2 = this.Vert1[i]["x1"];
                                z2 = this.Vert1[i]["z1"];
                                y2 = this.Vert1[i]["y1"];

                                x3 = this.Vert1[i]["x2"];
                                z3 = this.Vert1[i]["z2"];
                                y3 = this.Vert1[i]["y2"];

				X2 = x;
				Z2 = y;

				var a = -(z3*y2 - z1*y2 - z3*y1 + y1*z2 + y3*z1 - z2*y3);
				var b = (z1*x3 + z2*x1 + z3*x2 - z2*x3 - z1*x2 - z3*x1);
				var c = (y2*x3 + y1*x2 + y3*x1 - y1*x3 - y2*x1 - x2*y3);
				var d = -a*x1 - b*y1 - c*z1;

				var ResX = (-(a*X2 + c*Z2 + d) / b);		
                                   
                                if(PosX1 > ResX > (PosX1 + PosX) || PosX1 < ResX < (PosX1 + PosX)){
                                  
                                  DataCollision["PosX"] = x - ResX; //+ PosLx * 0.2;
                
                                }

			}

		}
                */
                return DataCollision;
		
};