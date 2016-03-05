title: 網頁遊戲簡單做 | 使用遊戲框架 Phaser
author: 中興資訊社

%%%%%%%%%%%%%%%%%%%
% Use '%' to comment or directive (ex:css below)

%%%%%%%%%%%%%%%%%%%
%% You can add some custom style rules here...

%css



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

## 網頁遊戲簡單做

#### 使用遊戲框架 Phaser

#### 中興大學資訊社社團課程

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=0

## 先來解釋一下

#### 為何要用 Web

#### 為何要用 Phaser

%%%%%%%%%%%%%%%
!SLIDE x=1200 y=0 z=2000

## 沒錯！

#### 我們會需要寫 Code

%%%%%%%%%%%%%%%
!SLIDE x=2400 y=0

## 要怎麼開始呢

#### 打開 Sublime text

%%%%%%%%%%%%%%%
!SLIDE slide x=3600 y=0

### 建立你的網頁，來放遊戲

網頁內容目前不是我們重視的點，所以建立一個 `index.html` ，然後把這邊的東西貼進去

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Phaser demo</title>
</head>
<body>
  <div id="game"></div>
</body>
</html>
```

有同學想要我解釋一下這邊嗎？

%%%%%%%%%%%%%%%
!SLIDE x=0 y=2000 rotate=180 scale=4

### 我們一定會需要的，就是 Phaser 啦

但是不只有這樣，

%%%%%%%%%%%%%%%
!SLIDE x=8400 y=2000 rotate=270 scale=10

## visualize your **big** thoughts

%%%%%%%%%%%%%%%
!SLIDE x=3000 y=2000 z=-3000 rotate=300 scale=1

## and **tiny** ideas

%%%%%%%%%%%%%%%
!SLIDE x=14400 y=2000 rotate=270 scale=6

## by **positioning**, **rotating** and **scaling** them on an infinite canvas

%%%%%%%%%%%%%%%
!SLIDE x=6700 y=-2000 scale=6

## the only **limit** is your **imagination**

%%%%%%%%%%%%%%%
!SLIDE x=6300 y=-4000 rotate=20 scale=4

## want to know more?

#### [use the source](http://github.com/bartaz/impress.js), Luke!

%%%%%%%%%%%%%%%
!SLIDE x=7000 y=-5000 rotate=40 scale=2

## one more thing...

%%%%%%%%%%%%%%%
!SLIDE x=7500 y=-6000 z=-100 rotate=60 rotate-x=90 rotate-y=90 rotate-z=90 scale=2

## have you noticed it's in 3D<sup>*</sup>?  

####<sup>*</sup>beat that, prezi ;)

%%%%%%%%%%%%%%%
!SLIDE slide x=10000 y=10000 scale=1

## h2 for the big

#### h4 for sub text of the big

#### h4 for sub text of the big

%%%%%%%%%%%%%%%
!SLIDE slide x=11200 y=10000 scale=1

### h3 for the detailed

Don't use `h1` header  
Because it will become a new slide  
Use `!SLIDE` directive for this template  
More info? see [here](http://slideshow-s9.github.io/more.html)

%%%%%%%%%%%%%%%
!SLIDE slide x=12400 y=10000 scale=1

### Codes

```
var greeting = "Hello world";
console.log(greeting);
this_line_is_too_short_to_fit_in_one_line(the_first_real_long_arg,the_second_real_long_arg);
```

This is inline code: `"Hello world"`

%%%%%%%%%%%%%%%
!SLIDE slide x=12400 y=10700 scale=1

### Lists

 * item 1
 * item 2
    - sub item 1
    - sub item 2

%%%%%%%%%%%%%%%
!SLIDE slide x=12400 y=11400 scale=1

### Indented Text

> Here is some indented text

>> even more indented

>>> even more more indented

%%%%%%%%%%%%%%%
!SLIDE slide x=14200 y=10350 scale=2

### Overflowed picture

If you have `slide` class, the picture will be `max-width:100%` and the slide is scrollable

![Big picture](http://i.imgur.com/S2iMIh8.jpg)

%%%%%%%%%%%%%%%
!SLIDE picture x=14200 y=10350 z=10000 scale=2

### Or `picture` class to use one centered picture

![img in picture slide](http://i.imgur.com/S2iMIh8.jpg)

%%%%%%%%%%%%%%%
!SLIDE center slide x=16600 y=10350 scale=2

### `center` class to center small picture

![Small picture](http://i.imgur.com/nP2GIt3.png)

Use `center` class to center a picture that is not big enough to fill the slide

%%%%%%%%%%%%%%%
!SLIDE slide x=19000 y=10350 scale=2 rotate=180

### And Links of course

[My Github](https://github.com/chgu82837)  

[This repo](https://github.com/chgu82837/slideshow-impress.js)  

%%%%%%%%%%%%%%%
!SLIDE unclickable showOnlyWhenPresent x=15000 y=12050 scale=5

## That's it!

#### Have fun!

#### this one is `unclickable` and `showOnlyWhenPresent`

#### Useful for overview

%% The End
%%%%%%%%%%%%%%%
