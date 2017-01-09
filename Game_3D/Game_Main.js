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
         name: "car",
         way: "Object/car.obj",
         text: "111",
         x: 0,
         y: 0,
         z: 0,
         t: 0,
         hide: false
     };
     
     this.Obj_Data["car"] = this.Obj_; 
    
  this.gl_.InitGl(this.Texture_, this.Obj_Data);
};

GameMain.prototype.RunScene = function()
{
   this.gl_.DrawGl();
};