/* global mat4 */

function WebGL(gl)
{
      this.gl = gl; 
      this.shaderProgram = new Object();
       
      this.vertexBuffer = Array();
      this.indexBuffer = Array();
      this.textureCoordsBuffer = Array();
        
      this.texture = Array();
       
      this.mvMatrix = mat4.create(); 
      this.pMatrix = mat4.create();
          
       this.m_pVertices = Array(); 
       
       this.m_pNormals = Array();
          
      this.Obj_ = new Object();              
}

WebGL.prototype.initShaders = function()
{
    var fragmentShader = this.getShader(this.gl.FRAGMENT_SHADER, 'shader-fs');
    var vertexShader = this.getShader(this.gl.VERTEX_SHADER, 'shader-vs');
 
    this.shaderProgram = this.gl.createProgram();
 
    this.gl.attachShader(this.shaderProgram, vertexShader);
    this.gl.attachShader(this.shaderProgram, fragmentShader);
 
    this.gl.linkProgram(this.shaderProgram);
      
    if (!this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS)) {
        alert("Не удалось установить шейдеры");
    }
      
    this.gl.useProgram(this.shaderProgram);
 
    this.shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
    this.gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute); 
    this.shaderProgram.vertexTextureAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexTextureCoords");
    this.gl.enableVertexAttribArray(this.shaderProgram.vertexTextureAttribute);
     
    this.shaderProgram.MVMatrix = this.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
    this.shaderProgram.ProjMatrix = this.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
};

WebGL.prototype.setMatrixUniforms = function()
{
    this.gl.uniformMatrix4fv(this.shaderProgram.ProjMatrix,false, this.pMatrix);
    this.gl.uniformMatrix4fv(this.shaderProgram.MVMatrix, false, this.mvMatrix);  
};

WebGL.prototype.getShader = function(type,id)
{
     var source = document.getElementById(id).innerHTML;
 
    var shader = this.gl.createShader(type);
     
    this.gl.shaderSource(shader, source);
 
    this.gl.compileShader(shader);
   
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        alert("Ошибка компиляции шейдера: " + this.gl.getShaderInfoLog(shader));
        this.gl.deleteShader(shader);   
        return null;
    }
    return shader;  
};

WebGL.prototype.setupWebGL = function(key, ObjCamera, PosMouseX, PosMouseY, PosMouseZ)
{
    this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
    
    mat4.perspective(this.pMatrix, 1.04, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 1000.0);
    
    mat4.identity(this.mvMatrix);
    mat4.lookAt(this.mvMatrix, [this.Obj_[ObjCamera]["x"]+ PosMouseX, this.Obj_[ObjCamera]["y"] + PosMouseY, this.Obj_[ObjCamera]["z"] + PosMouseZ], [this.Obj_[ObjCamera]["x"], this.Obj_[ObjCamera]["y"], this.Obj_[ObjCamera]["z"]], [0,1,0]);
       
    mat4.translate(this.mvMatrix,this.mvMatrix,[this.Obj_[key]["x"], this.Obj_[key]["y"], this.Obj_[key]["z"]]);
    mat4.rotate(this.mvMatrix,this.mvMatrix, this.Obj_[key]["ty"], [0, 1, 0]); 
    mat4.rotate(this.mvMatrix,this.mvMatrix, this.Obj_[key]["tx"], [1, 0, 0]); 
    mat4.rotate(this.mvMatrix,this.mvMatrix, this.Obj_[key]["tz"], [0, 0, 1]); 
};

WebGL.prototype.initBuffers = function(key, way)
{
    
 var vertices = Array();
 
 var indices = Array();
 
 var normals = Array();
 
 var textureCoords = Array();
            
            $.ajax({
                   async: false,
                   type: "POST",
                   url: "LoadGeometry.php",
                   data: {fname:"Vert", ffile:way},
                   success: function(data) {
                   vertices = $.parseJSON(data);                  
                   }
               });
               
               
 
            $.ajax({
                   async: false,
                   type: "POST",
                   url: "LoadGeometry.php",
                   data: {fname:"Ind", ffile:way},
                   success: function(data) {
                   indices = $.parseJSON(data);             
                   }
               });
               
               $.ajax({
                   async: false,
                   type: "POST",
                   url: "LoadGeometry.php",
                   data: {fname:"Text", ffile:way},
                   success: function(data) {
                   textureCoords = $.parseJSON(data); 
                   }
               });
               
               $.ajax({
                   async: false,
                   type: "POST",
                   url: "LoadGeometry.php",
                   data: {fname:"Norm", ffile:way},
                   success: function(data) {
                   normals = $.parseJSON(data);  
                   }
               });
     
  this.m_pNormals[key] = Array();
  this.m_pNormals[key] = normals;
     
  this.m_pVertices[key] = Array();
  this.m_pVertices[key] = vertices;
    
  this.vertexBuffer[key] = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer[key]);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
  this.vertexBuffer[key].itemSize = 3;
  
 
    this.indexBuffer[key] = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer[key]);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
    this.indexBuffer[key].numberOfItems = indices.length; 
   
 
  this.textureCoordsBuffer[key] = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureCoordsBuffer[key]);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(textureCoords), this.gl.STATIC_DRAW);
  this.textureCoordsBuffer[key].itemSize=2;
};

WebGL.prototype.draw = function(key)
{
    if(this.Obj_[key]["hide"] === true) { return; }
    
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer[this.Obj_[key]["name"]]);
    this.gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute, 
                         this.vertexBuffer[this.Obj_[key]["name"]].itemSize, this.gl.FLOAT, false, 0, 0);
 
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureCoordsBuffer[this.Obj_[key]["name"]]);
  this.gl.vertexAttribPointer(this.shaderProgram.vertexTextureAttribute,
                         this.textureCoordsBuffer[this.Obj_[key]["name"]].itemSize, this.gl.FLOAT, false, 0, 0);
  this.gl.activeTexture(this.gl.TEXTURE0);
  this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture[this.Obj_[key]["text"]]);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.drawArrays(this.gl.TRIANGLES,this.indexBuffer[this.Obj_[key]["name"]], this.indexBuffer[this.Obj_[key]["name"]].numberOfItems);
};
      
WebGL.prototype.RenderBegin = function()
{
     this.gl.clearColor(0.0, 0.7, 1.0, 1.0);  
    this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
};

WebGL.prototype.setTextures = function(key, way)
{
    this.texture[key] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture[key]);
    var image = new Image();
      
     var Text = this.texture[key];
      
     var handleTextureLoaded1 = this.handleTextureLoaded;
      
    image.onload = function() {
     
        handleTextureLoaded1(image, Text);
  };
  
   image.src = way;
  
    this.shaderProgram.samplerUniform = this.gl.getUniformLocation(this.shaderProgram, "uSampler");
    this.gl.uniform1i(this.shaderProgram.samplerUniform, 0);
};

WebGL.prototype.handleTextureLoaded = function(image, texture)
{
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
};

WebGL.prototype.InitGl = function(Texture_, Obj_)
{
      delete this.shaderProgram;
      delete this.Obj_;
    
      this.shaderProgram = new Object();
      this.Obj_ = new Object();
      this.vertexBuffer = [];
      this.indexBuffer = [];
      this.textureCoordsBuffer = [];       
      //this.texture = [];                     
      this.m_pVertices = [];                               
    
       this.initShaders();
       
       if(Obj_){
       
         for(var key in Obj_){
             this.initBuffers(Obj_[key]["name"],Obj_[key]["way"]);      
         }


         for(var key in Texture_){
             this.setTextures(key, Texture_[key]);
         }
             this.Obj_ = Obj_; 
        
    }
};

WebGL.prototype.DrawGl = function(ObjCamera, PosMouseX, PosMouseY, PosMouseZ)
{      
    this.RenderBegin();
    
        for(var key in this.Obj_){
            this.setupWebGL(key, ObjCamera, PosMouseX, PosMouseY, PosMouseZ);
            this.setMatrixUniforms();
            this.draw(key);            
        }
    
};

WebGL.prototype.ObjPos = function(key, PosX, PosY, PosZ, PosTx, PosTy, PosTz)
{
    this.Obj_[key]["x"] = PosX;
    this.Obj_[key]["y"] = PosY;
    this.Obj_[key]["z"] = PosZ;
    this.Obj_[key]["tx"] = PosTx;
    this.Obj_[key]["ty"] = PosTy;
    this.Obj_[key]["tz"] = PosTz;
             
};

WebGL.prototype.NewObject = function(AddObject, key)
{  
    this.Obj_[key] = AddObject;            
};

WebGL.prototype.DelObject = function(key)
{
    delete this.Obj_[key];           
};

WebGL.prototype.GetVert = function(NameBuffer)
{  
    return this.m_pVertices[NameBuffer];
};

WebGL.prototype.GetNorm = function(NameBuffer)
{
    return this.m_pNormals[NameBuffer];
};