function GameMain(gl)
{
      this.gl_ = new WebGL(gl); 
      
      this.Texture_ = Array();
      
      this.Obj_;
      
      this.Obj_Data = Array();
            
}

GameMain.prototype.Initalize = function()
{
    this.Texture_["111"] = "Texture/111.png";
    
    this.Obj_ = {
         name: "mapa",
         way: "Object/111.obj",
         text: "111",
         x: 0,
         y: 0,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         hide: false
     };
     
     this.Obj_Data["mapa"] = this.Obj_; 
     
     this.Texture_["333"] = "Texture/333z.png";
    
    this.Obj_ = {
         name: "car",
         way: "Object/car.obj",
         text: "333",
         x: 0,
         y: 0,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         hide: false
     };
     
     this.Obj_Data["car"] = this.Obj_; 
    
  this.gl_.InitGl(this.Texture_, this.Obj_Data);
};

GameMain.prototype.RunScene = function(PosMouseX, PosMouseY, PosMouseZ)
{
   this.gl_.DrawGl("car", PosMouseX, PosMouseY, PosMouseZ);
};

GameMain.prototype.PositionsObject = function(key, PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{
   this.gl_.ObjPos(key, PosX, PosY, PosZ, PosTx, PosTy, PosTz);
};