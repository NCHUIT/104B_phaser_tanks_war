title: 網頁遊戲簡單做 | 使用遊戲框架 Phaser
author: 中興資訊社

%%%%%%%%%%%%%%%%%%%
% Use '%' to comment or directive (ex:css below)

%%%%%%%%%%%%%%%%%%%
%% You can add some custom style rules here...

%css

.center_list ol, .center_list ul {
     display: table;
     margin: 0 auto;
}

%end

%%%%%%%%%%%%%%%%%%%
%% occupation of scale=1:
%% x = 1200
%% y = 700
%% occupation of scale=2: [occupation of scale=1] * 2
%% x = 2400
%% y = 1400
%% occupation of scale=3: [occupation of scale=1] * 3
%% x = 3600
%% y = 2100
%% occupation of scale=4: [occupation of scale=1] * 4
%% ...
%% the location of one step (slide) is originated from the center!

%%%%%%%%%%%%%%%%%%%
%% Here we go...

%%%%%%%%%%%%%%%
!SLIDE x=0 y=0

## 坦克大戰 網頁遊戲簡單做

#### 使用遊戲框架 Phaser

#### 中興大學資訊社社團課程

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=0

## 這個課程的上課方式

#### 概念說明，實地操作

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=0

## 先來解釋一下

#### 為何要用 Web

#### 為何要用 Phaser

%%%%%%%%%%%%%%%
!SLIDE x=3600 y=0

## [今天預計會做到這樣](demo/demo.html)

#### 對了我們**一定**會需要寫 Code

%%%%%%%%%%%%%%%
!SLIDE x=4800 y=0 center_list

### 流程大綱

 1. 建立基本環境
 2. Phaser 架構、流程介紹
 3. 讀取遊戲資源（圖片、地圖）
 4. 初始化遊戲，放上物件
 5. 啟動簡單控制

%%%%%%%%%%%%%%%
!SLIDE x=0 y=700

## 1. 建立基本環境

#### 到我們的 [共筆文件](https://nchuit.hackpad.com/2016310-Phaser-I-Vw3Y1o4i4oB) 下載 `起始點模板` 然後解壓縮到隨便一個地方，這是各位的起始點

#### 用 Sublime text 打開 `index.html`

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=700

### 啟動開發用伺服器

 1. 在專案資料夾上按著 shift 鍵按右鍵 => `在此處開啟命令視窗`
 2. 輸入 `npm install -g http-server` 按下 Enter
 3. 輸入 `http-server` 按下 Enter，在瀏覽器輸入 `localhost:8080`

如果是你自己的電腦，安裝的動作（第二步）只需要做一次

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=700 picture

### 如果你看到黑黑一片應該就是成功了

![blank](http://i.imgur.com/1P8ZmmW.png)

%%%%%%%%%%%%%%%
!SLIDE x=0 y=1400

## 2. Phaser 架構、流程介紹

#### 遊戲是怎麼運作的？

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=1400

## 我們只需要改這三個地方

#### `var game = { ... }` 的三個 `function`

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=1400 picture

### `Preload` function

```
    preload: function(){
      var phaser = this.phaser;
      // 1. load assets here
    },
```

#### 在這裡告訴 Phaser 要讀取哪些資料進來

![loading...](http://i.imgur.com/fVE4AJW.png)

%%%%%%%%%%%%%%%
!SLIDE x=3600 y=1400

### `Create` function

```
    create: function(){
      var phaser = this.phaser;
      // 2. create and put objects into the game
    },
```

#### 建立遊戲內容以及各種初始設定

#### 將是今天的最重要的部分

%%%%%%%%%%%%%%%
!SLIDE x=4800 y=1400

### `Update` function

```
    update: function(){
      // 3. executed 30 times per second, pushing the game forward
    }
```

#### 每秒跑三十次的 `function`，也就是 FPS 的速度喔

#### 計算遊戲的下一回合狀態，把遊戲往後推進

%%%%%%%%%%%%%%%
!SLIDE x=6000 y=1400

## 沒錯，這三個組合起來就可以讓遊戲動起來了

%%%%%%%%%%%%%%%
!SLIDE x=0 y=2100

## 3. 讀取遊戲資源（圖片、地圖）

#### `preload` function

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=2100

### 這樣讀取資料

```js
// 讀取圖片:
phaser.load.image('名字', '路徑');
// 讀取地圖 tilemap:
phaser.load.tilemap('名字', '路徑', null, Phaser.Tilemap.TILED_JSON);
// 讀取 texture:
phaser.load.atlas('名字', '路徑', '敘述 Json');
```

>> 讓我們 Focus 在圖片上就好，其他的東西比較複雜

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=2100 picture

### 讀取別的網站的圖片

```js
phaser.load.crossOrigin = true;
```

去 [Imgur](http://imgur.com/) 上找一張尬意的圖片吧，如果不知道要用啥的話就用我們的 Logo 吧XDD

![nchuit](http://i.imgur.com/SSSWhXx.png)

%%%%%%%%%%%%%%%
!SLIDE x=3600 y=2100 picture

### 存擋之後不會有任何變化

![blank](http://i.imgur.com/1P8ZmmW.png)

#### 你在期待什麼？

%%%%%%%%%%%%%%%
!SLIDE x=4800 y=2100 picture

### 怎麼知道是不是讀取成功了呢？

#### 使用 `F12` / `CMD + Opt + i` 打開瀏覽器的開發介面

![hello dev panel](http://i.imgur.com/ug7hda2.png)

%%%%%%%%%%%%%%%
!SLIDE x=6000 y=2100

## 別怕，遊戲資源都已經在你的專案資料夾內了

#### `demo.html` 是今日的完成版

#### 為了避免浪費時間，各位可以去直接把 `preload` 的東西複製過來了

%%%%%%%%%%%%%%%
!SLIDE x=0 y=2800

## 4. 初始化遊戲，放上物件 `create` function

#### 重頭戲終於到了

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=2800

### 首先先讓大家來練習最簡單的東西

#### 把剛剛大家自己找的圖片放上來

```js
var logo = phaser.add.sprite(0, 0, 'logo');
//                           x  y   你剛剛取的名字
```

#### Javascript 的 `var logo = ...`

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=2800 picture

### 應該有出現東西吧！？

![hey hey](https://media.giphy.com/media/HreknDhcZmGoE/giphy.gif)

%%%%%%%%%%%%%%%
!SLIDE x=3600 y=2800 center_list

### 接下來要正式開始了

#### 就今天要做到部分，我們需要在遊戲啟動時放上哪些東西以及哪些設定？

 1. 物理引擎
 2. 地面
 3. 我們的主角 - 坦克以及它的炮台
 4. 地圖，障礙物
 5. 放在正中間的各位的圖
 6. 鍵盤控制

%%%%%%%%%%%%%%%
!SLIDE x=4800 y=2800

### 1. 物理引擎

```js
phaser.physics.startSystem(Phaser.Physics.ARCADE);
```

#### Phaser 提供的物理引擎有： `arcade`, `box2d`, `p2`, `ninja` 等

%%%%%%%%%%%%%%%
!SLIDE x=6000 y=2800

### 2. 地面

```js
var land = phaser.add.tileSprite(0, 0, phaser.scale.width, phaser.scale.height, 'earth');
land.fixedToCamera = true;
```

#### [tileSprite](http://phaser.io/docs/2.4.4/Phaser.TileSprite.html)

### 重整之後就不會是黑黑一片囉

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 center_list

### 3. 我們的主角 - 坦克以及它的炮台

#### 這個是今天最複雜的部分，因為他分成三個部分

 1. 坦克的身體
 2. 坦克的炮台，還要朝著滑鼠
 3. 陰影

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=3000 rotate-x=180

### 我們的坦克

```js
var tank = this.add.sprite(50, 50, 'tank', 'tank');
```

#### 還記得當初讀取進來的時候他是 `atlas` 嗎？

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=4000 rotate-x=180

## 設定旋轉的基準點

```js
tank.anchor.setTo(0.5, 0.5);
```

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=5000 rotate-x=180

## 設定物理運作，基本上就是碰撞啦

```js
phaser.physics.enable(tank);
tank.body.collideWorldBounds = true;
```

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=6000 rotate-x=180

## 這是我們的主角，當然要讓視角對準她

```js
phaser.camera.follow(tank);
```

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=7000 rotate-x=180

## 上砲台！

```js
var turret = phaser.add.sprite(0, 0, 'tank', 'turret')
turret.anchor.setTo(0.3, 0.5);
```

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=8000 rotate-x=180

## 不是很重要的陰影

```js
var shadow = this.add.sprite(0, 0, 'tank', 'shadow');
shadow.anchor.setTo(0.5, 0.5);
```

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=9000 rotate-x=180

### 我們需要一個群組，可以一次控制這三樣東西的位置

```js
var tank_group = phaser.add.group();
tank_group.add(tank);
tank_group.add(turret)
tank_group.add(shadow)
```

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=2800 z=10000 rotate-x=180

## 處理圖層前後問題

```js
tank.bringToTop();
turret.bringToTop();
```

%%%%%%%%%%%%%%%
!SLIDE x=8400 y=2800

## 這樣坦克就算是初始化完成了

#### 重整你可能可以看到東西，不過你只會看到支離破碎的坦克而已

#### 注意一下，我們是不是沒有設定他們的座標？

%%%%%%%%%%%%%%%
!SLIDE x=9600 y=2800

## 地圖，以及障礙物

#### 也是一個比較複雜的部分

%%%%%%%%%%%%%%%
!SLIDE x=9600 y=2800 z=3000 rotate-x=180

### 放上地圖

```js
var map = phaser.add.tilemap('map');
map.addTilesetImage('kenney');
```

### 讓我來解釋一下 `kenney` 這個東西...

%%%%%%%%%%%%%%%
!SLIDE x=9600 y=2800 z=4000 rotate-x=180

### 設定碰撞

```js
map.setCollision(PhaserHelper.getCollisionIndexes(phaser, 'map'));
```

#### 那個 `PhaserHelper.getCollisionIndexes` 是我幫你們包起來的

%%%%%%%%%%%%%%%
!SLIDE x=9600 y=2800 z=5000 rotate-x=180

## 其實一張地圖可以有很多層

```js
var layer = map.createLayer('layer1');
```

%%%%%%%%%%%%%%%
!SLIDE x=9600 y=2800 z=6000 rotate-x=180

## 把世界設定成跟這張地圖一樣大

```js
layer.resizeWorld();
```

%%%%%%%%%%%%%%%
!SLIDE x=10800 y=2800

## 這樣地圖應該也沒問題囉

#### 這個重整應該真的可以看到東西出現

%%%%%%%%%%%%%%%
!SLIDE x=12000 y=2800

### 調整一下當初那個 `logo`

```js
logo.x = phaser.scale.width / 2;
logo.y = phaser.scale.height / 2;
logo.anchor.setTo(0.5, 0.5);
logo.alpha = 0.75;
logo.fixedToCamera = true;
logo.bringToTop();
```

#### 位置、旋轉基本點、透明度然後讓他跟著相機

%%%%%%%%%%%%%%%
!SLIDE x=13200 y=2800

## 這樣一來基本上東西就都準備好囉

#### 至少東西都放上去了

%%%%%%%%%%%%%%%
!SLIDE x=0 y=3500

## 5. 啟動簡單控制

#### 好像可以開始進入 `update` 了吧？

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=3500 center_list

### 在遊戲執行時，需要控制哪些東西？

 1. 接收鍵盤上下左右，控制坦克的前進、左右轉
 2. 坦克的慣性
 3. 坦克不能穿牆
 4. 坦克分成三個元件，要讓他們團結起來
 5. 坦克砲台要指著滑鼠
 6. 地面要跟著視角做反向移動
 7. 你的 Logo 可以跟著坦克轉，看你啦

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=3500

### 還記得我們在 `create` 建立的變數嗎？

```js
var logo = phaser.add.sprite(0, 0, 'logo');
```

#### 這個 `logo` 只在 `create` function 裡頭存在

#### 要設定到 `this.logo` 才能跟 `update` 共用

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=3500 z=3000 rotate-x=180

### 回到 `create`， 要幫 `update` 準備好一些東西

```js
this.land = land;
this.tank_group = tank_group;
this.tank = tank;
this.turret = turret;
this.layer = layer;
this.logo = logo;
```

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=3500 z=4000 rotate-x=180

## 同時，我們還要把鍵盤的上下左右取出來

```js
this.cursors = phaser.input.keyboard.createCursorKeys();
```

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=3500 z=5000 rotate-x=180

## 坦克的慣性，我們得先初始化一個初始速度

```js
this.tank.currentSpeed = 0;
```

%%%%%%%%%%%%%%%
!SLIDE x=3600 y=3500

## 正式進入 `update` 囉！

#### 終於...

%%%%%%%%%%%%%%%
!SLIDE x=4800 y=3500

### 把剛剛那些變數也在 `update` 中建立

```
var phaser = this.phaser;
var cursors = this.cursors;
var tank = this.tank;
var tank_group = this.tank_group;
var turret = this.turret;
var land = this.land;
```

%%%%%%%%%%%%%%%
!SLIDE x=0 y=4200 slogen

## 開始控制吧！

#### 畫龍點睛的時刻到了

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=4200

### 1. 接收鍵盤上下左右，控制坦克的前進、左右轉

#### 接下來我們要告訴電腦：

```
『如果鍵盤左鍵是被按下的，坦克往左轉』
『如果鍵盤右鍵是被按下的，坦克往右轉』
『如果鍵盤上鍵是被按下的，坦克要前進（設定速度），
如果沒有，坦克要緩下來（降低速度）』
```

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=4200 z=3000 rotate-x=180

## 『如果鍵盤左鍵是被按下的，坦克往左轉』

```js
if (cursors.left.isDown)
  tank.angle -= 4;
```

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=4200 z=4000 rotate-x=180

## 『如果鍵盤右鍵是被按下的，坦克往右轉』

```js
if (cursors.right.isDown)
  tank.angle += 4;
```

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=4200 z=5000 rotate-x=180

## 基本的條件判斷會了，來

#### 『如果鍵盤上鍵是被按下的，坦克要前進（設定速度）

#### ，如果沒有，坦克要緩下來（降低速度）』

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=4200 z=6000 rotate-x=180

### 2. 坦克的慣性，這樣會有啥問題？

```js
if (cursors.up.isDown)
  tank.currentSpeed = 300;
else
  tank.currentSpeed -= 5;
```

#### 速度會變成負的啊啊啊

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=4200 z=7000 rotate-x=180

### 把速度限制在 >= 0

```js
if (cursors.up.isDown)
  tank.currentSpeed = 300;
else
  if (tank.currentSpeed > 0)
    tank.currentSpeed -= 4;
```

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=4200

## OK, BUT 坦克依然不會動啊

#### `currentSpeed` 是我們自己設定的變數， Phaser 並不會用他

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=4200 z=3000 rotate-x=180

## 設定速度進去

```
game.physics.arcade.velocityFromRotation(tank.rotation, tank.currentSpeed, tank.body.velocity);
```

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=4200 z=4000 rotate-x=180

### 痾，他不是自己已經有 `tank.body.velocity`

```
console.log(tank.body.velocity);
```

#### 印出來看看吧！

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=4200 z=5000 rotate-x=180

## 我們利用他的工具來幫我們設定 `x` 方向以及 `y` 方向的速度啊啊

#### 目前沒有打算要做甩尾進去

%%%%%%%%%%%%%%%
!SLIDE x=3600 y=4200

## 沒錯，你的坦克終於會移動了

#### 但是還是支離破碎的狀態

#### 因為我們只控制了三個之中其中一個元件

%%%%%%%%%%%%%%%
!SLIDE x=4800 y=4200

## 3. 坦克不能穿牆

#### 講了這麼久的碰撞，要來畫龍點睛了


%%%%%%%%%%%%%%%
!SLIDE x=6000 y=4200

## 最強大的就在這啦！

```js
phaser.physics.arcade.collide(tank, this.layer);
```

%%%%%%%%%%%%%%%
!SLIDE x=7200 y=4200

## 4. 坦克分成三個元件，要讓他們團結起來

#### 原本我們用的 `group` 要在這裡讓我少寫很多行囉

%%%%%%%%%%%%%%%
!SLIDE x=8400 y=4200

### 使用 `setAll('key', value)`

#### 就是所有 `group` 裡的東西都做 `.key = value`

```js
tank_group.setAll('x',tank.x)
tank_group.setAll('y',tank.y)
tank_group.setAll('angle',tank.angle)
```

%%%%%%%%%%%%%%%
!SLIDE x=9600 y=4200

### 5. 坦克砲台要指著滑鼠

#### Phaser 有個內建的工具幫你

```js
turret.rotation = phaser.physics.arcade.angleToPointer(turret);
```

%%%%%%%%%%%%%%%
!SLIDE x=10800 y=4200

### 6. 地面要跟著視角做反向移動

```js
land.tilePosition.x = -phaser.camera.x;
land.tilePosition.y = -phaser.camera.y;
```

#### 我解釋一下...

%%%%%%%%%%%%%%%
!SLIDE x=12000 y=4200

## 7. 你的 Logo 可以跟著坦克轉，看你啦

```js
this.logo.angle = tank.angle;
```

%%%%%%%%%%%%%%%
!SLIDE x=0 y=4900 picture

### 呼！終於有個基本樣子了

#### 今天先到這吧，希望沒有嚇到大家

#### 如果有問題都可以問喔！

![hey hey](https://media.giphy.com/media/HreknDhcZmGoE/giphy.gif)

%% The End
%%%%%%%%%%%%%%%
