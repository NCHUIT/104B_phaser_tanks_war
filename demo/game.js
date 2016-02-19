
var game = {
  preload: function(){
    var main = game.main;
    main.load.image('logos','img/logos.png',100,100);

    main.load.tilemap('map', 'tilemap/map.json', null, Phaser.Tilemap.TILED_JSON);
    main.load.image('kenney', 'tilemap/kenney.png');
  },
  create: function(){
    var main = game.main;
    main.physics.startSystem(Phaser.Physics.P2JS);

    var cat = main.add.sprite(100, 100, 'logos');
    main.physics.p2.enable(cat);
    game.cat = cat;

    var map = main.add.tilemap('map');
    map.addTilesetImage('kenney');
    var layer = map.createLayer('layer1');
    layer.resizeWorld();

    var slopeMap = _.object(_.map(_.pairs(game.cache.getTilemapData('map').data.tilesets[0].tileproperties),function(ele){
      return [(parseInt(ele[0]) + 1).toString(),parseInt(ele[1].slope)];
    }));

    main.tiles = main.physics.p2.convertTilemap(map, layer, slopeMap);
    game.cursors = game.input.keyboard.createCursorKeys();
  },
  update: function(){
    var cursors = game.cursors;
    if(cursors.right.isDown)
      game.cat.body.rotateRight(100);
    else if(cursors.left.isDown)
      game.cat.body.rotateLeft(100);
    else if(cursors.up.isDown)
      game.cat.body.moveForward(100);
    else if(cursors.down.isDown)
      game.cat.body.moveBackward(100);
  }
};

jQuery(document).ready(function($) {
  game.main = new Phaser.Game(800, 600, Phaser.AUTO, 'game', game);
});
