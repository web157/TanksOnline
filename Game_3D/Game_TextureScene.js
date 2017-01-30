 function GameTextureScene()
{
      this.TextureSceneNumber_1 = Array();
      this.TextureSceneNumber_2 = Array();
      this.ArrayTextureScene = Array();
}

GameTextureScene.prototype.Initalize = function()
{
    this.GameTextureSceneNumber_1();
    
    this.ArrayTextureScene[0] = this.TextureSceneNumber_1;
    
    this.GameTextureSceneNumber_2();
    
    this.ArrayTextureScene[1] = this.TextureSceneNumber_2;
};

GameTextureScene.prototype.InitalizeTextureScene = function(NumberScene)
{
    return this.ArrayTextureScene[NumberScene];
};

GameTextureScene.prototype.GameTextureSceneNumber_1 = function()
{
    this.TextureSceneNumber_1["111"] = "Texture/111.png";
    this.TextureSceneNumber_1["333"] = "Texture/333z.png";
    this.TextureSceneNumber_1["Bang"] = "Texture/Bang.png";
};

GameTextureScene.prototype.GameTextureSceneNumber_2 = function()
{
    this.TextureSceneNumber_2["111"] = "Texture/111.png";
    this.TextureSceneNumber_2["333"] = "Texture/333z.png";
    this.TextureSceneNumber_1["Bang"] = "Texture/Bang.png";
};
