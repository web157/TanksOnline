function GameObjectScene()
{
     this.ObjectData = new Object();
     this.ObjectSceneNumber_1 = Array();
     this.ObjectSceneNumber_2 = Array();
     this.ArrayObjectScene = Array();
}

GameObjectScene.prototype.Initalize = function()
{
     this.GameObjectSceneNumber_1();
    
     this.ArrayObjectScene[0] = this.ObjectSceneNumber_1;
     
     this.GameObjectSceneNumber_2();
    
     this.ArrayObjectScene[1] = this.ObjectSceneNumber_2;
};

GameObjectScene.prototype.InitalizeObjectScene = function(NumberScene)
{
     return this.ArrayObjectScene[NumberScene];
};

GameObjectScene.prototype.GameObjectSceneNumber_1 = function()
{
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_1["mapa"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_1["car"] = this.ObjectData;
};

GameObjectScene.prototype.GameObjectSceneNumber_2 = function()
{
     this.ObjectData = {
         name: "sfera",
         way: "Object/sfera.obj",
         text: "111",
         x: 0,
         y: 0,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_2["sfera"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_2["car"] = this.ObjectData;
};