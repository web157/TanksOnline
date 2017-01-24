function GameObjectScene()
{
     this.ObjectData = new Object();
     this.ObjectSceneNumber_1 = Array();
     this.ObjectSceneNumber_2 = Array();
     this.ObjectSceneNumber_3 = Array();
     this.ArrayObjectScene = Array();
}

GameObjectScene.prototype.Initalize = function()
{
     this.GameObjectSceneNumber_1();
    
     this.ArrayObjectScene[0] = this.ObjectSceneNumber_1;
     
     this.GameObjectSceneNumber_2();
    
     this.ArrayObjectScene[1] = this.ObjectSceneNumber_2;
     
     this.GameObjectSceneNumber_3();
    
     this.ArrayObjectScene[2] = this.ObjectSceneNumber_3;
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
         addx: 0,
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_1["mapa"] = this.ObjectData;
     
     this.ObjectData = {
         name: "Objects_",
         way: "Object/Object.obj",
         text: "111",
         x: 0,
         y: 0,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         addx: 0,
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_1["Objects_"] = this.ObjectData;
     
     this.ObjectData = {
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
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_1["tank"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_1["tower"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_1["trunk"] = this.ObjectData;
     
     this.ObjectData = {
         name: "shar",
         way: "Object/Shar1.obj",
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
     
     this.ObjectSceneNumber_1["shar"] = this.ObjectData;
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
         addx: 0,
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_2["sfera"] = this.ObjectData;
     
     this.ObjectData = {
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
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_2["tank"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_1["tower"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_1["trunk"] = this.ObjectData;
};

GameObjectScene.prototype.GameObjectSceneNumber_3 = function()
{
     this.ObjectData = {
         name: "mapa1",
         way: "Object/mapa.obj",
         text: "111",
         x: 0,
         y: 0,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         addx: 0,
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_3["mapa1"] = this.ObjectData;
     
     this.ObjectData = {
         name: "Objects_",
         way: "Object/Object.obj",
         text: "111",
         x: 0,
         y: 0,
         z: 0,
         tx: 0,
         ty: 0,
         tz: 0,
         addx: 0,
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_3["Objects_"] = this.ObjectData;
     
     this.ObjectData = {
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
         addy: 0,
         addz: 0,
         addtx: 0,
         addty: 0,
         addtz: 0,
         hide: false
     };
     
     this.ObjectSceneNumber_3["tank"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_3["tower"] = this.ObjectData;
     
     this.ObjectData = {
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
     
     this.ObjectSceneNumber_3["trunk"] = this.ObjectData;
};