(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"作業08_atlas_1", frames: [[0,672,1047,298],[0,0,672,670]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_45 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgufBBxMAAAiDhMBc/AAAMAAACDhg");
	mask.setTransform(297.625,420.925);

	// 圖層_3
	this.instance = new lib.CachedBmp_45();
	this.instance.setTransform(33.45,693.1,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(33.5,693.1,523.5,148.79999999999995), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnXAnQMAAAhOgMBOvAAAMAAABOgg");
	mask.setTransform(252,251.25);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.75,0.75);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,504,502.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgufBBxMAAAiDhMBc/AAAMAAACDhg");
	mask.setTransform(298.125,420.925);

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231916").p("EAugBBsMhc/AAAMAAAiDXMBc/AAAg");
	this.shape.setTransform(298.125,421.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.5,0,595.3,841.9), null);


(lib.頁面 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_30
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXB8QgSgVgogUQgUgLiGg5QiUg+iOhJQgCgKAKgIQAGAEBBAcQBXAlBMAbQA9AYBuAnQBTAiARAcIAVgPQAfgTAxgUQAUgICLg1QCCgyBnguIAtgLQhsA9h+A4QiBA4g4AaQhfAugYAiQgDgFgIgLg");
	this.shape.setTransform(-286.2351,-394.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24).to({_off:false},0).wait(1));

	// 圖層_29
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYCHQgUgbgrgZQgsgbh3gzQiwhIiCg3QAEgSAPgPQAAAFBKAZICoA5QD3BYAjA7QAAgMBvg1QCchKD6hUIA1AAQADAEhKAfIitBJQkKB0g6BMQgDgHgKgOg");
	this.shape_1.setTransform(-247.9209,-375.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(23).to({_off:false},0).to({_off:true},1).wait(1));

	// 圖層_28
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheBSQiShglWhqQAKgYAUgYQAAAGD4BIQD+BXAnBPQABgEAXgTQAkgaA4gdQCohYD4hBIA+ALQABAChLAcQhrAnhHAdQkPBxhGBmQgNgnhHgwg");
	this.shape_2.setTransform(-209.6485,-356.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(22).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_27
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjBOQichulbhSQARgfAYggIBNATQBhAYBMAYQEBBTAsBiQABgEAagWQAmggA5gfQCuhhD5gwIBEAYQh2AgiJA2QkTBrhRB8QgNgshOg4g");
	this.shape_3.setTransform(-171.375,-338.075);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(21).to({_off:false},0).to({_off:true},1).wait(3));

	// 圖層_26
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhoBIQilh4lag3QAUgmAegoIBNANQBcARBRAYQEDBNAwBzQAkgvBagzQCzhpD2gcIBKAkQh2AViKAyQkUBihcCPQgPgyhSg8g");
	this.shape_4.setTransform(-133.15,-320.275);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(20).to({_off:false},0).to({_off:true},1).wait(4));

	// 圖層_25
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbCTQghgtg4gmQi2h/lugZQAcgtAkgvQABgDBPAJQBfAMBYAVQERBEA6CBQApg0Bhg1QDBhsEBgHQAyAcAhAUQh6AKiSArQklBWhtCeQgGgMgQgWg");
	this.shape_5.setTransform(-94.875,-302.9471);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(19).to({_off:false},0).to({_off:true},1).wait(5));

	// 圖層_24
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCMQgmgwg9gnQjLh/l8ALQAlg2Aqg1QAAgGBTAEQBgAFBfASQEdA2BECLQALgNAZgUQAzgoBBghQDQhsEJARQA8AmAeAVQgMgDhCAFQhjAHhiAWQkzBEiECqQgGgMgTgXg");
	this.shape_6.setTransform(-56.8,-286.005);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(18).to({_off:false},0).to({_off:true},1).wait(6));

	// 圖層_23
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcB9QgqgrhFgoQj4iGlpA/QAog1A4hEQgBgIBUgCQBggEBiANQEmAlBRCQQAMgMAcgTQA4gqBEgfQDehmEJArQA6ApAoAeQgOgEg/gCQhhgDhnAOQk7AsidCvQgHgPgVgWg");
	this.shape_7.setTransform(-18.7375,-269.6383);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(17).to({_off:false},0).to({_off:true},1).wait(7));

	// 圖層_22
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBuQgwgphLgkQkVh6ldBrQA9hIA2g8IBSgRQBlgRBcAGQB4AFBoAoQB0AtAyBHQAPgLAegTQA+goBHgbQDohaEDBHQA8AsA0ArQgdgJgxgJQhkgThjAFQiBAEiAArQiQAyhmBaQgIgOgYgVg");
	this.shape_8.setTransform(19.525,-254.1783);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(16).to({_off:false},0).to({_off:true},1).wait(8));

	// 圖層_21
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBaQg2gkhRgeQh/gpiAADQi3ADjDBcQBChIBGhHQABABBNgcQBggbBcgCQBzgHBvAhQB3AkA5BBQAAACAygcQBEgkBIgVQDxhHD1BjQBCAyA3AwQgcgNgugQQhegghhgGQh+gMiHAfQiXAkh3BRQgKgNgbgSg");
	this.shape_9.setTransform(57.525,-239.5535);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(15).to({_off:false},0).to({_off:true},1).wait(9));

	// 圖層_20
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqKgdQACABBGgkQBYgnBZgLQBtgSByAVQB5AVBBA3IA3gVQBJgcBKgNQD2gsDgB/QBCA0A/A5QgYgRgqgYQhVgvhdgTQh4gdiNAOQicAQiKBBQAFgDgvgWQg9gchYgTQiLgah8ASQi6AaiyB7QBRhRBNhHg");
	this.shape_10.setTransform(95.45,-222.3958);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(14).to({_off:false},0).to({_off:true},1).wait(10));

	// 圖層_19
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AKkA3QASAOASAQQAjAfAUAWQgwgugrglgAqUAGQAYgSAmgZQBOgyBTgWQBjgfB2AEQB4ADBMAlIA8gNQBOgQBKgCQD6gGDACYIAuAkQg5gqhCgaQhwgyiQgJQihgLieArQgOgHgjgIQhFgQhdgHQiYgDh3AkQiLAqh7BiQA1guA1grg");
	this.shape_11.setTransform(137.125,-204.4178);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(13).to({_off:false},0).to({_off:true},1).wait(11));

	// 圖層_18
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AKkA3QASAOASAQQAjAfAUAWQgwgugrglgAqUAGQAYgSAmgZQBOgyBTgWQBjgfB2AEQB4ADBMAlIA8gNQBOgQBKgCQD6gGDACYIAuAkQg5gqhCgaQhwgyiQgJQihgLieArQgOgHgjgIQhFgQhdgHQiYgDh3AkQiLAqh7BiQA1guA1grg");
	this.shape_12.setTransform(137.125,-204.4178);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(12).to({_off:false},0).to({_off:true},1).wait(12));

	// 圖層_17
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AqTgWQACABBEgoQBVgtBZgQQBrgYB5AOQB+AOBJAxIA9gSQBPgYBNgJQEBgcDXCNQBGA1BHBAQgXgUgogbQhRg3hegbQh5gniUAEQilAFibA5QAEgDg1gRQhDgYhfgPQiYgRh/AbQi/AoivCMQBYhSBehPg");
	this.shape_13.setTransform(116.15,-186.8045);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(11).to({_off:false},0).to({_off:true},1).wait(13));

	// 圖層_16
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Aq2gjQABABBKgkQBegnBegKQB1gRB6AYQCCAZBIA7IA9gXQBPgfBQgPQEJgyDtCAQBJA2BHA+QgagSgtgXQhagvhjgSQiCgdiXARQiqATiYBHQADgDgzgXQhDgfhggVQiXgeiHARQjHAYjAB+QBXhTBehQg");
	this.shape_14.setTransform(99.025,-170.5524);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(10).to({_off:false},0).to({_off:true},1).wait(14));

	// 圖層_15
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkBcQhCgmhhgeQiXgoiOAIQjOAJjSBuQBOhKBmhbQABABBRgfQBmggBjgFQB8gJB9AhQCGAjBHBEQABADA8geQBQglBRgVQERhGEBBxQBAAtBUBEQgegPgwgTQhjgnhpgKQiKgQiaAcQiuAhiWBVQADgEgygcg");
	this.shape_15.setTransform(81.875,-153.6351);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(9).to({_off:false},0).to({_off:true},1).wait(15));

	// 圖層_14
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglBwQhCgshhgkQiWgziVgCQjVgEjhBbQBohiBJhDQABABBXgaQBsgZBoACQCFgBB/AoQCKAtBGBNQAAADA9gjQBQgqBUgbQEXhZEVBhQBKA0BLA6QgfgNg1gPQhqgdhvgCQiTgFicAnQiyAuiTBhQADgEgxghg");
	this.shape_16.setTransform(64.75,-133.8573);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(8).to({_off:false},0).to({_off:true},1).wait(16));

	// 圖層_13
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmCEQhCgxhhgqQliiPmaB9QBRhNBehXQABABBdgUQBzgSBsAHQCNAHB/AwQCOA2BFBVIA9gkQBQgwBWggQEehrEmBQQBRA2BIA1QgigKg4gLQhygUh1AGQiaAGieAyQi1A7iQBrQgMgRgigZg");
	this.shape_17.setTransform(47.625,-114.1353);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(7).to({_off:false},0).to({_off:true},1).wait(17));

	// 圖層_12
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjCZQhCg2higwQleiim2BfICuikQAAABBigOQB5gLBxAOQCTAPCBA3QCRA+BEBcIA9goQBQg0BYglQEkh8E3A9QBLAxBJAwQgTgFhGgFQh0gHh/AOQmEAskCDaQgMgSghgbg");
	this.shape_18.setTransform(30.1375,-94.492);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(6).to({_off:false},0).to({_off:true},1).wait(18));

	// 圖層_11
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglCvQhBg7hig1QlaiynQA9ICrihIBngHQB/gDB0AUQCaAXCBA9QCUBFBDBjQAWgRAngbQBRg3BagqQEoiLFGApQBZA1A/AoQgRgEhPABQh6ABiDAXQmSBHj9DmQgLgTghgdg");
	this.shape_19.setTransform(13.075,-74.92);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(5).to({_off:false},0).to({_off:true},1).wait(19));

	// 圖層_10
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmDIQhDhEhhg3Qk8i0oAAQICoieQgBgHBsAGQB+AHB+AaQGABPB7DFQAVgSAngdQBQg6BcgvQEtiYFUAVQA7AgBfA3QgQgDhWAHQiAALiGAfQmeBgj4DxQgLgRggghg");
	this.shape_20.setTransform(-4.025,-55.6583);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(4).to({_off:false},0).to({_off:true},1).wait(20));

	// 圖層_9
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpDeQhChFhhg8Qk8jBoPgUICkiYQAAgGBvAMQCDAOCAAgQGJBiB5DKQAVgTAngfQBQg9BegyQExilFfAAICdBRQilAIjVA+QmpB6jzD4QgLgSgggjg");
	this.shape_21.setTransform(-21.025,-36.3142);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(3).to({_off:false},0).to({_off:true},1).wait(21));

	// 圖層_8
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpDzQhBhGhhhAQk9jMocg3ICgiSQAAgFBzASQCIAWCAAlQGSB0B3DMQBShSCZhWQEziwFqgWICdBKQiqAVjaBKQmyCTjuD9QgLgVgfgjg");
	this.shape_22.setTransform(-38.2,-16.9032);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(2).to({_off:false},0).to({_off:true},1).wait(22));

	// 圖層_7
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjLB9Qk7jVoohbICdiMIB0AVQCOAdCAArQGZCFB1DNQBQhTCbhbQE2i5FygtICdBBQivAjjdBWQm6CrjpD/QguhZidhqg");
	this.shape_23.setTransform(-55.375,2.6);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1).to({_off:false},0).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338.8,-408.4,552.7,443);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgufBBxMAAAiDhMBc/AAAMAAACDhg");
	mask.setTransform(298.125,420.925);

	// 圖層_3
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(298.1,421.2,1,1,0,0,0,297.6,421.2);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(298.1,590.55,1,1,0,0,0,252,251.2);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.setTransform(298.1,421.2,1,1,0,0,0,298.1,421.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("EgufBBsMAAAiDXMBc/AAAMAAACDXg");
	this.shape.setTransform(298.125,421.425);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.5,0,595.3,841.9), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgufBBxMAAAiDhMBc/AAAMAAACDhg");
	mask.setTransform(298.125,420.925);

	// 圖層_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(298.1,421.2,1,1,0,0,0,298.1,421.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.5,0,595.3,841.9), null);


// stage content:
(lib.作業08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 頁面
	this.instance = new lib.頁面();
	this.instance.setTransform(362,720.9);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(297.6,420.35,1,1,0,0,0,298.1,421.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(297,419.7,298.79999999999995,421.8);
// library properties:
lib.properties = {
	id: 'D85ED1A30527244C837F1EAD32665C09',
	width: 595,
	height: 841,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/作業08_atlas_1.png?1766759293425", id:"作業08_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D85ED1A30527244C837F1EAD32665C09'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;