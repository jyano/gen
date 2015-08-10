$PT()

$H= $h= function(){var g=G(arguments),
    h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
    o= g.O? g.f:
        g.N_? ( N( g[3] )? // 'c-C-l' pattern
        { x:g.f, y:g.s, C: g.t, l:g[3]} : { x:g.f, y:g.s, c: g.t, C:g[3], l:g[4]} ) :
            // 'c-C-l' pattern
            N(g.s)? { C:g.f, l:g.s } :
            { c:g.f, C:g.s, l:g.t }
    h.XY( N(o.x,0), N(o.y,0) )
    h.c( o.c || 'z', o.C || 'w', o.l ||  8 )
    if(o.C){h.C(o.C)}
    if(N(o.l)){h.l(o.l)}
    if(g.p){h.dg()}
    return  h
}
$Cir=   function () {var g = G(arguments),
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y).dc(o.r)
}
St=function(){z()
    s = cjs.stg(1200,600).A()
    h = $h(0,0).a2(s)
    SL(h)
}


cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}
cjs.M = function (a) {
    var m = new cjs.Matrix2D()
    if (N(a)) {
        m.rotate(a)
    }
    return m
}
cjs.Gx = cjs.gx = function (a) {
    return new cjs.Graphics(a)
}
cjs.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
cjs.iH = function (h) {
    return O(h) && h.graphics
}
cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
}
cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {
        return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))
    }
    return new cjs.Matrix2D(
        N(a, 1),
        N(b, 0),
        N(c, 0),
        N(d, 1),
        N(e, 0),
        N(f, 0)
    )
}
cjs.dia = function self(width, height, fc, sc) {
    fc = fc || 'green'
    sc = sc || 'white'
    width = width || 100
    height = height || width
    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth, 0).lt(0, halfheight)
        .lt(halfwidth, 0).lt(0, -halfheight)
    return h
}

BlurFilter = blF=function(bx,by,q){
    return new createjs.BlurFilter(bx,by,q)
}
AlphaMaskFilter = aMF=function(mask){
    return new createjs.AlphaMaskFilter(mask)
}
forMaskFilter = trx = function(n){
    var g=G(arguments),
        a=[]

    //for making mask filter
    if(g.n){
        return 'rgba(0,0,0,' +  g[0]||0  + ')'   }

    _.each(g,function(n){
        a.push(trx(n,'-'))})

    return a
}
cjs.blurFilter = function(x,y,c){return new cjs.BlurFilter(x,y,c)}
//T$ = cjs.Ticker  //dep
ColorFilter = clF=function(a,b,c,d,e,f,g){return new createjs.ColorFilter(a,b,c,d,e,f,g)}
ColorMatrixFilter = clMF=function(m){return new createjs.ColorMatrixFilter(m)}
ColorMatrix = CM=function(){
    var c=new createjs.ColorMatrix()
    c.b=c.adjustBrightness
    c.c=c.adjustColor
    c.C=c.adjustContrast
    c.h=c.adjustHue
    c.s=c.adjustSaturation
    c.cl=c.clone
    c.cc=c.concat
    c.m=c.copyMatrix
    c.r=c.reset
    c.A=c.toArray
    c.S=c.toString
    return c}


function filterTests(){


    BMC=function(){W()._(function() {
        h = w.i.h(0,0,'+')
            .cir({r: 150, bf: 'me'})
            .cir({x: 500, y: 200, r: 100, bf: 'me'})
    })}

    BLUR = blr=function(){

        wMb(function(b){

            var ag=0,rg=100,sp=0.04

            z()

            s=St(500).drg().a().c('x').a(b.xy(100).cc())

            tt(function(e){v=sin(ag+=sp)*rg
                b.cc('+').fl([blF(v,v,2)])
                s.u(e)})
        })
    }
    MASK = msk=function(){

        sss=function(){var args=G(arguments)

            z()


            stage = SuperStage(600).a()


            if(args.f){

                stage.a(args.f)

                _.each(args.r,
                    function(arg){

                        if( F(arg) ){ arg(args.f) }

                    })
            }

            return stage}



        wMb(function(b){

            sss(b, TR)


            b.fl([

                aMF(
                    Gx().lf(
                        trx(1,0),[0,1],0,0,200,200
                    ).dr0(400).H().cc(400).cc('*')
                )

            ]).cc(400)})

    }
    COLOR = clr=function(r){var ag=0,rg=100,sp=0.04

        wMb(function(b){z();

            s=St(500).drg().a().c('X').a(b.xy(100))
            b.cc().fl([r=='g'? clF(.3,1,.3,1,0,0,0,0)
                :r=='b'? clF(.3,.3,1,1,0,0,0,0)
                :r=='r'? clF(1,.1,1,1,0,0,0,0)
                :r=='rg'? clF(1,1,.1,1,1,1,20,0)
                :clF(1,.1,1,1,0,0,0,0)]).cc('+')
        })
    }
    COLORMATRIX = cmx=function(){

        var g=G(arguments);
        g[0]=g[0]||'a'

        wMb(function(b){b.xy(100).cc();
                _e(g,function(mf){b.clMF(mf,'+')})},

            St(500).drg().a().c('X') )
    }
    BLURFILT=function(){z()

        stage = createjs.stage('black', 800).tick().A()
        shape = new createjs.Shape().XY(100)

        stage.A(shape)

        shape.graphics.f("red").dc(0,0,50)

        var blurFilter = new createjs.BlurFilter(50, 50, 10)

        shape.filters = [blurFilter]

        var bounds = blurFilter.getBounds()

        shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height)

        shape.startMoving()
        shape.vx = 1
        shape.vy = 1
    }
    BLURFILT2=function(){z()

        stage = createjs.stage('black', 800).tick().A()



        stage.bm('me',

            function(bm){

                var blurFilter = new createjs.BlurFilter(5, 10)

                bm.filters = [blurFilter]

                var bounds = blurFilter.getBounds()

                bm.cache(-50+bounds.x, -50+bounds.y, 400+bounds.width, 400+bounds.height)


            }
        )




    }
    BLURFILT3=function(){z()

        $l('welcome to BLUFILTER3')
        $l('here we will attempt an animated blur filter')

        stage = createjs.stage('black', 800).tick().A()

        stage.bm('me',

            function(bm){ bm.XY(100,300).drag()

                var blurFilter = $blurFilter(5, 10)

                bm.filters =  [ blurFilter ]

                var bounds = blurFilter.getBounds()

                bm.cache(-50+bounds.x, -50+bounds.y, 400+bounds.width, 400+bounds.height)

                var blurAmount=0,

                    blurMultiple=40,

                    speed=0.06

                createjs.Ticker.on('tick', function(){
                    $l('tick')

                    var blur = Math.sin(blurAmount += speed) * blurMultiple;
                    bm.filters = [$blurFilter(blur, blur, 2)]
                    bm.updateCache()

                })


            })


















    }

}
function balls(){

    CHICKBALLS=function(){
        W(1200,1200)._(function(){
            _.t(14, function(){
                w.D(R(1100,50),R(1100,50))
                    .cir({bf:'chicks',r: 120})
            })})
    }

    HAIRBALLS = function () {
        W(400, 400)._(function () {

            //cjs.rulers()

            _.t(8, function () {
                var b = w.D(R(100, 50), R(100, 50), 'b', 10)
                b.$h('x', 'x', 1189).c('x', 'x', 200)
                    .bf('sun', [0, .6, 10, 10, -40, 200])
                    .cir(10)
                // <- b.C({c:'x', al:.4} )
            })

            $.d('b', 100, 100, 100, 100).drag()

        })
    }
    COOLBALLS = function () {
        W(400, 400).C('w')._(function () {
            //cjs.rulers()
            _.t(8, function () {
                var b = w.D(R(100, 50), R(100, 50), 'b', 50)
                b.$h('x', 'X', 1)
                    .c('x', 'X', 1)
                    .bf('sun', [0, .9, 1, 1, -40, 2])
                    .cir(50)
            })
        })
    }
    CANVASBMFILLBALLS = function () {
        W(400, 400).C('w')._(function () {
            //cjs.rulers()
            w.p(0, 0, 10).stat()
            _.t(8, function () {
                w.D(R(100, 50), R(100, 50), 'b', 30)
            })
            w.$$(function () {
                _.t(8, function () {
                    var b = w.D(R(100, 50), R(100, 50), 'b', 30)
                    b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
                })
            })
            w.i.T(200, 100, '$$ me')
        })
    }
    CANTFBALLS2 = function () {
        W([400, 400], {w: 'U'}).C('w')._(function () {
            //cjs.rulers()
            w.p(0, 0, 10).stat()
            _.t(8, function () {
                w.D(R(100, 50), R(100, 50), 'b', 30)
            })

            $.ev(3, function () {

                var b = w.D(200, 200, 'b', 80)
                b.$h('x', 'X', 1).c('x', 'X', 1).bf(
                    w.s.cv0,
                    cjs.m2d(
                        .6, .1, .1, .6, -40, 180
                    )
                ).cir(80)

            })
        })
    }
    TEXTBALLS = function () {
        W([400, 400], {}).C('w')._(function () {
            b = w.D(200, 200, 'b', 80)
            b.gx = b.gx || w.g.ct()
            b.gx.qB('chicks').rC().sXY(.1).Y(30)
            nice = w.i.T(0, 140, 'nice', 100, 'o')
            b.bS(nice)
        })
    }

    RADIANTBALLS=function(){s=cjs.S('a')
        b1=s.cannonBall(100,200)
        b2=s.basketBall(100,100)
        b3=s.beachBall(50,50)
        b3=s.snowBall(50,300)
    }
    DIRTYBALLS=function(){W({  grav:0 })

        w.dirtyBall=function(x,y,stop1,stop2){
            return  this.gradBall(x, y, 60,'z','w',  stop1, stop2 )

        }

        w.gradBall(200,100,60,'z','w'  )
        w.dirtyBall(350,100,  0,  .9 )
        w.gradBall(500,100,60,'z','w',  0,  .6 )
        w.gradBall(650,100,60,'z','w',  0,  .3 )
        w.gradBall(800,100,60,'z','w',  0,  .1 )
        w.gradBall(350,300,60,'z','w',  .3,   1 )
        w.dirtyBall(500,300,  .6,   1 )
        w.dirtyBall(650,300,    .9,   1 )
        w.dirtyBall(800,300 ,  1,   1 )

    }
    STATUSBALL=function(){W({  grav:0 })
        b = w.D(500,300,'r',60).bS( w.s.shape(500,300)  )
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r','y'],[0, num],
            0,0,0,0,0,60)
            .dc(0, 0, 60)
        $.ev(.1,function(){
            num += dif
            if(num>=1){ num=.9; dif= -.1 }
            if(num<=0){ dif = .1 }
            shape.rf(['r','y'],[0, num],
                0,0,0,0,0,60)
                .dc(0, 0, 60)
        })
    }
    SWITCHBALL=function(){W({g:0})

        b=w.D(500,300,'r',60)

        b.bS(
            w.s.h(500,300)
        )


        b.draw=function(frame){var b=this
            b.sp().rf(
                ['r','y'], [frame[0],frame[1]],
                0,0,0,0,0,60
            ).dc(60)
        }

        frames=[
            [0,.1],
            [0,.3 ],
            [0,.6],
            [0,.9],
            [0,1],
            [.3,1],
            [.6,1],
            [.9,1],
            [1,1]    ]


        curr=0

        $.ev(1,function(){
            b.draw( frames [curr] )
            curr++
            if(curr == 9){curr=0} })

    }
    HEALTHBALL =function(){
        W({g:0})
        w.badGuy(500,300)
    }
    SWITCHBALLWORKSBUTTOOCOMPLICATED=function(){w=b2d.W({  grav:0 })

        advanceN=function(n, dif){
            n += dif
            if(n>=1){n=.9; dif*= -1}
            if(n<=0){n=0; dif*= -1}
            return {n:n, dif:dif}}


        switchBall1=function(x,y){var  dif=.1,n1=0,n2= 0,
            b=w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )

            I(function(){n2 = advanceN(n2); drawGrad()}, 100)
            function drawGrad(){
                b.sprite.rG(['r','y'],[n1, n2],  60 ).dc(0, 0, 60)}

            function advanceN(n2){

                n2 += dif
                if(n2>=1){n2=.9; dif*= -1}
                if(n2<=0){n2=0; dif*= -1}; return n2}

        }


        switchBall2=function(x, y){
            var   ball= w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )



            ball.drawGrad = function(n1,n2 ){return this.sprite.rG(['r','y'],
                [n1, n2],  60 ).dc(0, 0, 60)}

            ball.animGrad1=function(){

                var that=this,
                    dif=.1,  n2=1,  n1=0

                I(function(){
                        var res = advanceN(n1, dif)

                        dif = res.dif

                        n1 = res.n

                        that.drawGrad(n1,n2)},

                    300)}


            ball.animGrad2=function(){

                var that=this,  dif=.1

                I(function(){
                        var res = advanceN(n1, dif)
                        dif = res.dif
                        n1 = res.n
                        that.drawGrad(n1)},
                    300)

            }


            ball.animGrad1()




        }




        switchBall1(100,100)


        switchBall2(300,100)



        w.s.back.linGrad('u','p')
        w.s.HUD.bm('me', function(bm){  me= bm.sXY(.3).XY(1150, 550).drag()  })




    }
    TRIPLESTAGE= function(){w=b2d.W({  grav:0 })
        b = w.ball(500,300,60)
        b.bindSprite2( w.s.shape(500,300)  )
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r','y'],[0, num], 60)
            .dc(0, 0, 60)
        w.s.HUD.bm('me', function(b){   b.XY(300).drag()   })
        w.s.back.bm('guy', function(b){   b.XY(200).drag()  })
        w.s.back.linGrad('b','z')
    }
    RADIANT=function(){W().P()

        p.lD(1).warp()

        $.space(
            function(){
                p.polyBul()}
        )

        badGuy=w.badGuy(
            400, 200).warp().den(.1)

        $.ev(.2, function(){
            w.s.pen('badGuy health: ' + badGuy.health)
        } )
    }

}





old=function(){

// s.B = function(x,y){return this.ct(x,y).drag() }
    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */


    cjs.RECTx= function(c, W, H, x, y, a){var  g=G(arguments),    ct = cjs.ct(), h, o; if(O(c)){o=c} else if(S(c)){o={ c:c, w:W, h:H, x:x, y:y, a:a } }
        o = b2d.oDef(o)
        h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot( o.a )
        if(o.bm){h.bm('me', function(){h.dr2(o.x, o.y, o.w, o.h)}); return h}
        if(o.rg){h.rg(o.c,o.C)}
        if(o.lg){h.lg(o.c,o.C)}
        h.dr2(o.x, o.y, o.w, o.h)
        cjs.recx=cjs.rectx= function self(wd, ht, c, C){var h,hW,hH
            wd=_.tN(wd,100)
            ht=_.tN(ht,wd)
            hW=wd/2
            hH=ht/2
            h=$h().c(c||'g',C||'w').mt(-hW,-hH)
                .lt(-hW,hH).lt(hW,hH).lt(hW,-hH).lt(-hW,-hH)
            return h
        }
        ct.artx = function(x,y,c,C){var g=G(arguments),ct=this,h

            y= N(g[1])?g[1]:x
            c= S(g[2])?oO('c',g[2]):null
            C= S(g[2])?oO('c',g[3]):c

            h = $h(x,y,c,C).a2(ct)

            if(g.p){h.drag()}
            return h}
        return h}

//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
    /*
     w.i.bm('me', function(bm){
     bm.XY(300).sXY(.2)
     w.i.dot(300,300)
     })*/
//third wheel, wagon hitch



}