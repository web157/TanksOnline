function GameMain(gl)
{
      this.gl_ = new WebGL(gl); 
      
      this.Texture_ = Array();
      
      this.ObjectScene = new GameObjectScene();
      
      this.TextureScene = new GameTextureScene(); 
      
      this.m_pCollision = new Collision();
      
      this.NameObjectUser = Array();
      
      this.BlocMove = false;
      
      this.ListMapaObject = Array();
}

GameMain.prototype.Initalize = function()
{
    this.ListMapaObject[1] = Array();
    
    this.ListMapaObject[1]["mapa"] = "mapa";
    
    this.ListMapaObject[1]["Obj"] = "Objects_";
    
    this.ListMapaObject[2] = Array();
    
    this.ListMapaObject[2]["mapa"] = "mapa1";
    
    this.ListMapaObject[2]["Obj"] = "Objects_";
    
    this.ObjectScene.Initalize();
    
    this.TextureScene.Initalize();
    
    this.InitalizeNumberScene(0);  
    
    this.InitalizeMapaCollision("mapa");
    
    this.InitalizeObjectCollision("Objects_");
};

GameMain.prototype.InitalizeNumberScene = function(NumberScene)
{   
  this.gl_.InitGl(this.TextureScene.InitalizeTextureScene(NumberScene), this.ObjectScene.InitalizeObjectScene(NumberScene));
};

GameMain.prototype.RunScene = function(PosMouseX, PosMouseY, PosMouseZ)
{
   this.gl_.DrawGl("tank", PosMouseX, PosMouseY, PosMouseZ);
};

GameMain.prototype.PositionsObject = function(key, PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{
   this.gl_.ObjPos(key, PosX, PosY, PosZ, PosTx, PosTy, PosTz);
};

GameMain.prototype.NewUser = function(NameUser, IdKey)
{
    this.NameObjectUser[NameUser] = IdKey;
    
    var NewObjectData = {
         name: "tank",
         way: "Object/tank.obj",
         text: "333",
         x: 0,
         y: 0,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         addx: 0,
         addy: 0.5,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
            
     this.gl_.NewObject(NewObjectData, NameUser);
     
     NewObjectData = {
         name: "tower",
         way: "Object/tower.obj",
         text: "333",
         x: 0,
         y: 0.5,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         addx: 0,
         addy: 0.5,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.gl_.NewObject(NewObjectData, NameUser + "tower");
     
     NewObjectData = {
         name: "trunk",
         way: "Object/trunk.obj",
         text: "333",
         x: 0,
         y: 0.9,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         addx: 0,
         addy: 0.9,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.gl_.NewObject(NewObjectData, NameUser + "trunk");
};

GameMain.prototype.DelUser = function(NameUser)
{
    this.gl_.DelObject(NameUser);
};

GameMain.prototype.InitalizeMapaCollision = function(NameMapa)
{
    this.m_pCollision.AssemblyTriangleMapa(this.gl_.GetVert(NameMapa));
};

GameMain.prototype.InitalizeObjectCollision = function(NameObject)
{
    this.m_pCollision.AssemblyTriangleObject(this.gl_.GetVert(NameObject));
};

GameMain.prototype.CollisionMapaPosition = function(PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{
    return this.m_pCollision.MapaPosition(PosX, PosY, PosZ, PosTx, PosTy, PosTz);
};

GameMain.prototype.CollisionObjectsPosition = function(PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{   
    return this.m_pCollision.ObjectsPosition(PosX, PosY, PosZ, PosTx, PosTy, PosTz);
};

GameMain.prototype.CollisionShot = function(PosX, PosY, PosZ)
{
    return this.m_pCollision.ShotCollision(PosX, PosY, PosZ);
};

GameMain.prototype.CollisionPosCamera = function(PosX, PosY, PosZ)
{
    return this.m_pCollision.CollisionCamera(PosX, PosY, PosZ);
};

GameMain.prototype.CollisionPosObjectCamera = function(PosX, PosY, PosZ, PosX1, PosY1, PosZ1)
{
    return this.m_pCollision.CollisionObjectsCamera(PosX, PosY, PosZ, PosX1, PosY1, PosZ1);
};