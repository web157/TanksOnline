function GameMain(gl)
{
      this.gl_ = new WebGL(gl); 
      
      this.Texture_ = Array();
      
      this.ObjectScene = new GameObjectScene();
      
      this.TextureScene = new GameTextureScene();            
}

GameMain.prototype.Initalize = function()
{
    this.ObjectScene.Initalize();
    
    this.TextureScene.Initalize();
    
    this.InitalizeNumberScene(0);       
};

GameMain.prototype.InitalizeNumberScene = function(NumberScene)
{   
  this.gl_.InitGl(this.TextureScene.InitalizeTextureScene(NumberScene), this.ObjectScene.InitalizeObjectScene(NumberScene));
};

GameMain.prototype.RunScene = function(PosMouseX, PosMouseY, PosMouseZ)
{
   this.gl_.DrawGl("car", PosMouseX, PosMouseY, PosMouseZ);
};

GameMain.prototype.PositionsObject = function(key, PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{
   this.gl_.ObjPos(key, PosX, PosY, PosZ, PosTx, PosTy, PosTz);
};

GameMain.prototype.NewUser = function(NameUser)
{
    var NewObjectData = {
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
         
     this.gl_.NewObject(NewObjectData, NameUser);
};

GameMain.prototype.DelUser = function(NameUser)
{
    this.gl_.DelObject(NameUser);
};