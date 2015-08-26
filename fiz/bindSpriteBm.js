b2d.p()

$DF=function(){



}

_src=function(a){
    a = $.extension(a); return s$(a).startsWith('/')? a : '/'+ a
}
$.fn.src  = function(a){
    if( U(a) ){return this.attr('src')}
    this.attr('src', _.src(a) )
    return this
}

_.src =  function f(e){



//if(Q(e)){$l('q');e=$(e)[0]}
    if( e.image ){ e=e.image}
    if( C(e) ){ e = C(e) }
    if( e.src ){ e = e.src}
    if( e.toDataURL ){
        alert('_.src cjs.src tDU')
        e= _.tDU(e)
    }
    return s$(e).contains('data:')?  e
        :  S(e) ?  _src(e)
        : 0
}
w._ = function(fn){Q(function(){fn(w)})}


_xyr=function(o){
    o.x=N(o.x,0)
    o.y=N(o.y,0)
    o.r=N(o.r,0)
    return o}
b._gx=function(){
    this.gx = this.gx || w.g.ct();
    return this
}
_im=function(o){
    o.i= o.i||'me'
    o.al = N(o.al,1)
}
_sc=function(o){
    o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
    if (!A(o.sc)) {o.sc = [o.sc, o.sc]};
    return o
}
_bm=function(a){return new cjs.Bitmap(a)}
$.i = function(){var g=G(arguments),
    o= g.O? g.f: {sr: g.f, fn: g.s},
    i=$(new Image())
    if(o.fn){i.load(function(ev){
        o.fn($(ev.target), ev)
    })}
    if(o.sr){
        i.src(_.src(o.sr))
    }

    return i
} //img.load(function(img){var img = $(img.target)}) // gets rid of auto-scaling quirk // img.W( img.W() ) // img.H( img.H() )
$Ct= function(a){return new cjs.Container(a)}
$Bm=   function(bm){var g=G(arguments)
    bm= _bm(bm)
    if(g.p){ bm.drag() }
    return bm
}

ct.ct= function(x,y){var ct = this,
    g = G(arguments), ct1=$Ct()
    o= g.F_? {fn:g.f} : {x: g.f, y: g.s}
    ct.A( ct1 )
    if (o.fn) {o.fn(ct1, ct)}
    else if (N(o.x)) {ct1.XY(o.x, o.y)}
    if (g.p){cjs.bindSlide(ct1)}
    return ct1
}
w.p= function(x,y,sc,cn){var w=this,g=G(arguments),
    p
    sc = N(sc, 1)
    cn= cn || 'jump'
    p = w.D(x,y).fR()
    p.cn(cn)
    p.SetBullet(true)
    p.rec({c:'r', l:5, C:'r', w:22*sc, h:40*sc}).d(5)
    p.rec({

        s: 1,
        w: 8*sc, h:8*sc,
        x: 0,
        y: 20*sc,

    }).K('feet').C('X')
    p.Bm( 'me', 0, 0,  0.25*sc    )

    // p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )

    if(g.p){p.tr()}
    p.r(.4)
    p.lD(.5)
    return p
}



b.Sp=function(){var g=G(arguments),
    sp, o
    o= _xyr({sp: g.f, x: g.s, y: g.t, sX:g[3], sY:g[4], r:g[5]})

    o.sX=N(o.sX,1)
    o.sY=N(o.sY, o.sX)
    o.sp = o.sp || Mummy

    this._gx().gx.A(sp = $Sp(o.sp||Mummy) )

    sp.rC().XY(o.x, o.y).sXY(o.sX, o.sY).rt(o.r)
    return sp
}
b.bS=function(){var b = this, w = b.W(), g = G(arguments), o, i, a, sc
    //pass it a display object (which i guess implies its already loaded)

    o = cjs.iDO(g.f) ? {i:g.f, bm:g.f} : g.O?g.f:
    {i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}



    //if not loaded, async loads and passes it back as a data object
    //next time, then, when loaded it can bypass async
    if (S(o.i)){
        w.g.bm(o.i, function(bm){b.bS( _.x(o, {i:bm, bm:bm }) )})
        return this
    }

    _xyr(o)
    _sc(o)
    _im(o)



    //they can pass in a formed shapeer
    if ( !g.n && !cjs.iH(o.bm) && !cjs.iCt(o.bm) ) {o.bm.rC() }//regCent

    //can not center things that dont have dimensions!
    // scale, position and place the bm in the ct (which is on the stage)

    o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al).a2(this._gx().gx)
    return this
}
i.sXY = function(x,y){

    var i=this,
        g=G(arguments),v

    if(U(g[0])){
        return i
        return {x:i.sX(),y:i.sY()}
    }

    v=V(g[0],g[1])
    x=_.tN(v.x)
    y=_.tN(v.y,v.x)
    i.sX(x)
    i.sY(y)
    return i
}
_.crs=function(a){
    //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
    return a.split('/').pop().split('.png')[0] }
_.iDU=function(d){
    if(U(d)){return false}
    return s$(d).contains('data:')
}
b.sp = function() {var b = this, g = G(arguments), ch
    if (b.gx && b.gx.children) {
        ch = g.p ? b.gx.children :
            g.n ? b.gx.children[0] :
                _.l(b.gx.children)
        if (g.u) {return  ch}
        if(g.F_){ _.e(ch, g.f); return this }
    }
}
f.bI=function(){
    var f = this, b= f.B(), w = b.W(),
        g = G(arguments), o

    this.gx = this.gx || w.g.ct()
    o = cjs.iDO(g.f) ? {i:g.f } : g.O ? g.f :
    {i: g.f || 'me', sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}

    if (S(o.i)){o.i = Q.b(o.i)}
    o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
    if (!A(o.sc)) {o.sc = [o.sc, o.sc]}



    _xyr(o)
    o.al= N(o.al,1)


    if ( !g.n && !cjs.iH(o.i) && !cjs.iCt(o.i) ) {o.i.rC() }

    this.gx.A(o.i.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al))

    return this
}


_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']

Q=function(){var g=G(arguments),  o=g.F?{c:g.f}: {m:g.f,c:g.s}
    o.m = o.m || _MF
    Q = (new cjs.LoadQueue).c(o.c).m(o.m)
}


WQ = function(){
    var g = G(arguments), o = _.x({ob:g.f||{}},
        F(g.t)?{fn0: g.s, fn: g.t}: {fn: g.s})
    o.fn = o.fn || function(){}

    w = W(o.ob)
    if (o.fn0) {o.fn0(w)}
    Q(o.ob.I||_MF ,
        function(){o.fn(w)
        })

}


q.f= q.l= function(fn){var q=this
    q.on("fileload", fn)
    return q}

q.c= function (fn) {var q=this
    if(F(fn)){ q.on("complete", fn) }
    return q
}


q.b=  q.bm =function(i, ct, x, y){
    var bm = $Bm( this.r(i) );
    if(ct){bm.a2(ct,x,y)}; return bm
}


b.Bm=function(iS, x,y,sX,sY,rt){var b=this, w= b.W(),g=G(arguments);b.gx = b.gx || w.g.ct()
    if(S(iS)){this.gx.bm(iS, fn)}
    if(O(iS)){fn(iS);return iS}
    return b
    function fn(bm) {bm.rC().XY(N(x,0),N(y,0)).sXY(N(sX,1), N(sY,sX||1)).rt(N(rt,0))}
}



ct.bm=  ct.b= function self(){var ct=this,g=G(arguments), bm,

    o=  g.F_? {fn:g.s, sc: g.s} :
        g.N_ ? {sc: g.f, fn: g.s} :
            _.x({i:g.f}, N(g.s)? {  sc: g.s, fn: g.t}:
            {  fn: g.s, sc: g.t})
    o.sc= o.sc ||1

    _im(o)


    //
    if (O(o.i)){alert('ct.bm O(o.i)');return ct.A( $Bm(o.i) )}
    //


    $.i(o.i, function(i){

        bm = $Bm(i[0]).a2(ct).sXY(o.sc)

        if(!g.n){ bm.rC() }

        if(g.p){ bm.drag() }

        if(o.fn){ o.fn(bm) }

    })

    return ct

}






q.i=  q.r= function(i){i  = this.getResult(i); i.w= i.width;i.h = i.height; return i}

q.$=function(i){
    return $(this.i(i))
}

q.m = function(){var q=this, g=G(arguments), _mf, mf
    // q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]

    if(g.u){return q}
    _mf = g.A ? g.f : g
    mf = _.m(_mf,  function(item){
        return S(item)? {src: _.src(item),id:item} : item
    })
    q.loadManifest( mf )
    return q
}


ct.qB=  ct.bQ=function(name, x, y, sX,sY, rt){var b,g=G(arguments)
    b= Q.b(name)
        .XY(N(x,0), N(y,0))
        .sXY(N(sX,1), N(sY,sX||1))
        .rt(N(rt,0))
    if(!g.n){b.rC()  }; if( g.p ){ b.drag() };
    this.A(b );
    return b
}





TXWQ = function () {WQ({}, function () {w.C('p').i.A(Q.b('me'), Q.b('guy'))})} // <- WQ({C:'r'})


WINDING=function(){
    W()._(function(){
    //$.header().A($.h1('grahics winding')).A()
        h = w.i.h().graphics.f("pink").dr(20, 20, 450, 360)
            .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
            .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
        bm = w.i.qB('chicks').X(470).drag()
        bm.mask = h.same().X(470)
    })
}



MF = function () {
    W().C('r')
    Q(
        ['me', 'guy', 'chicks', 'sun'],
        function () {
            w.C('g')
            w.i.A(
                Q.b('me'),
                Q.b('guy')
            )
        }
    )

}

QTX = function () {     WQ(function () {i = w.i.qB('me', 0, 0, 3)})}





QUEUEMUG=function(){W()._(function(w){
    me = w.i.qB("me").drag()})} // its how i can preload someone's mug as 'mug' !//  mug= s.bData( qu.gR("mug") ).drag()







W=b2d.W=function(){var g=G(arguments),o

    polymorph()

    crWorld()

    if(o.xx!==0){z()}

    props();
    handle()
    grpx();
    debg()

    w.walls(_w)

    keys();
    mouse();
    track()

    w.o=o //w.stats()

    return w


    function crWorld() {
        _w = o.w
        o.g = N(o.g) ? V(0, o.g) :
            O(o.g) ? V(o.g) :
                V(0, 10)
        o.sl = U(o.sl) ? true : o.sl
        w = new b2d.World(o.g, o.sl)
    }
    function polymorph(){

        o = g.A_? _.x(g.s||{}, {W:g.f[0], H:g.f[1], wW:g.f[2], wH:g.f[3]}) :

            N(g.f) && U(g.s)? { g: g.f }:

                g.$N? {W:g.f,H:g.s, wW:g.t, wH:g[3]}:

                    g.S? {w:g.f }:

                    g.f || {}


        //W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U')

    }


    function props(){
        w.W = N(o.W,1200)
        w.H = N(o.H,600);

        w.w = N(o.wW, w.W);
        w.h = N(o.wH, w.H);

        w.Ww = w.W/w.w; w.wW = w.w/w.W; w.Hh = w.H/ w.h; w.hH = w.h/ w.H;
        w.mZ = w.hH > w.wW? w.hH : w.wW; w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
        w.hW = w.W/2; w.hH = w.H/2; w.z=1; w.SCALE=1


    }
    function handle(){
        //handling
        w.bH=   []; w.pH=   []; w.PH=   []; w.eH=   []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
        b2d.L= b2d.listener = b2d.contactListener = function () {return new b2d.Dynamics.b2ContactListener}
        w.SetContactListener(_.x(w.ln=new b2d.Dynamics.b2ContactListener,{

            BeginContact : function(cx){_.e(w.bH, function(fn){
                $.do(function(){fn(cx)})  })},

            EndContact : function(cx){_.e(w.eH, function(fn){
                $.do(function(){ fn( cx ) })   })},

            PreSolve : function(cx, i){_.e(w.pH, function(fn){
                fn(cx,i)})},

            PostSolve : function(cx, pam2){_.e(w.PH, function(fn){
                $.do(function(){fn(cx,pam2)})})}

        }))

    }

    function grpx(){

        w.I = $St('z', w.W, w.H ,0, 0)
        w.s= $St('X', w.W, w.H, 0, 0)//.aC(0)
        w.canvas = w.s.canvas
        w.can= $(w.canvas)
        w.ctx = w.can.ctx('2d')
        w.bg= w.s.ct();
        w.g=  w.s.ct();
        w.fg= w.s.ct()
        w.i =  $St('X', w.W, w.H, 0, 0)

        if(o.i){ w.s.bm(o.i) }
        w.lG($r())
        if(o.aC==1){
            //w.i.aC(0)
            // if(g.O){; return w}
            // return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
        }
    }


    //h = w.i.h()//gx= h.graphics//w.hud.SHAPE  = w.hud.h($r())//w.hud.SHAPE.rec( 0, 0, 5000, 5000).al(.3)
    function debg() {
        /*

         debugArea = $St('z', w.W, w.H, 0, w.H)

         debugDraw = new b2d.Dynamics.b2DebugDraw
         debugDraw.SetSprite(debugArea.c.ctx())
         debugDraw.m_drawScale=30 * (w.W/ w.w) * .8
         debugDraw.m_alpha = 1
         debugDraw.m_fillAlpha=1
         debugDraw.m_lineThickness=10
         debugDraw.m_drawFlags =  b2DebugDraw.e_jointBit|
         b2DebugDraw.e_shapeBit| b2DebugDraw.e_obbBit|
         b2DebugDraw.e_controllerBit|
         b2DebugDraw.e_aabbBit|
         b2DebugDraw.e_pairBit|
         b2DebugDraw.e_centerOfMassBit
         debugDraw.alpha(.6).line(3000)
         */
        //  w.SetDebugDraw(debugDraw)


    }
    function keys(){
        $.kD('l',function(){
            if ($.test) {$l('left pressed')}
            K.l = cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
            K.l = 1;
            K.L = 0
        })
        $.kU('l',function(){if ($.test) { $l('left lifted') }
            K.l = cjs.Keys.l = cjs.Keys.left = false
            K.l = 0;
            K.L = 1
        })

        $.kD('r',function(){if ($.test) {$l('right pressed')}
            K.r = cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
            K.r = 1;
            K.R = 0
        })
        $.kU('r',function(){if ($.test) {
            $l('right lifted')
        }
            cjs.Keys.r = cjs.Keys.right = false
            K.r = 0;
            K.R = 1
        })
        $.kD('u',function(){if ($.test) {
            $l('up pressed')
        }
            cjs.Keys.u = cjs.Keys.up = true
            K.u = 1;
            K.U = 0
        })
        $.kU('u',function(){if ($.test) {
            $l('up lifted')
        }
            cjs.Keys.u = cjs.Keys.up = false
            K.u = 0;
            K.U = 1
        })

        $.kD('d',function(){if ($.test) {
            $l('down pressed')
        }
            cjs.Keys.d = cjs.Keys.down = true
            K.d = 1;
            K.D = 0
        })

        $.kU('d',function(){if ($.test) {
            $l('down lifted')
        }
            cjs.Keys.d = cjs.Keys.down = false
            K.d = 0;
            K.D = 1
        })

        K._loaded = 1

    }
    function mouse(){



        w.mm(logMXY)


        w.md(function(o){

            logMXY(o)

            w.q(o.x, o.y, function(f){

                //if(!f.iD()){return true}



                if(f.of(w.o.m)){


                    w.mj = w.mJ( f.B(), o.x, o.y)
                }


            })})

        //this is great//it demonstrates md, q, m, and ofClass //but it has a real purpose too!//anytime mousedown.. because that implies there was a mouse up //so there should be no current mouse joint.. smart!

        w.mu(function(){if(w.mj){w.j(w.mj);w.mj=0}})


        function logMXY(e){

            var p = w.sToW(e.X,e.Y);

            w.mx=p.x

            w.my=p.y

        }
    }
    function track(){

        T.t(function(){


            if(w.mj){w.mj.tg(w.mx, w.my)}
            w.step(1/60)
            if(F(o.cb)){o.cb()}
            if(!T.iP()){ w.I.u(); w.s.u(); w.i.u()}

            //  w.DrawDebugData()

            w.e(function(b){
                b.wX = b.X(); b.wY= b.Y()
                b.sX = w.wTS(b.wX, b.wY).x
                b.sY= w.wTS(b.wX, b.wY).y
                if(O(b.gx)){
                    b.gx.XY(b.X(), b.Y()).rt(b.rt())
                }
            })

        })

        if(o.t!==0){

            w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee

            w.i.A( w.tSpr=  $Ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)

            T.t(function(){

                if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()}

                w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )

                w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )

                if(w.t == w._t){
                    w.t.XY(w.tSpr.X(), w.tSpr.Y())
                    w.s.rot(w.tSpr.rot())
                }
            })
        }

    }
}

$St=function(){var st, g=G(arguments), cv
    //get by canvas ID
    cv = g.A? g.f[0]:
        //if you pass it a canvas OR a $canvas object
        O(g.f)? $(g.f)[0] :
            //create a new canvas
            $.c(g.f||'p',g.s||1200,g.t||600,g[3],g[4])[0]
    st = new cjs.Stage( cv )
    st.cv=   st.c=st.can= $(st.canvas)
    st.cv0=  st.cv[0]
    st.xc= st.cv0.getContext('2d')
    if(g.p){st.t()}
    return st.A()
    //.t()
}