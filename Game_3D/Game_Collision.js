
function Collision()
{
    this.Vert = Array();
    this.PreviousNumTriangle = 0;
}

Collision.prototype.AssemblyTriangle = function(Vert1)
{   
    //this.Vert = Vert;      
    
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
    
    //document.write(JSON.stringify(this.Vert));
};

function s2(x1,y1,x2,y2,x3,y3)
	{
		return ((x1 - x2)*(y3 - y2) - (y1 - y2)*(x3 - x2));
	}

Collision.prototype.ObjPosition = function(PosX, PosY, PosZ, PosTx, PosTy, PosTz)
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