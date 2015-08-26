b2d.p()

_src=function(a){
    a = $.extension(a); return s$(a).startsWith('/')? a : '/'+ a
}
$.fn.src  = function(a){
    if( U(a) ){return this.attr('src')}
    this.attr('src', _.src(a) )
    return this
}
q.f= q.l= function(fn){var q=this
    q.on("fileload", fn)
    return q}
q.c= function (fn) {var q=this
    if(F(fn)){ q.on("complete", fn) }
    return q
}
q.b=  q.bm =function(i, ct, x, y){var bm = cjs.B( this.r(i) )
    if(ct){bm.a2(ct,x,y)}
    return bm
}
q.i=  q.r= function(i){
    i  = this.getResult(i)
    i.w= i.width
    i.h = i.height
    return i
}
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
function qTests() {

    WQ = function () {
        var g = G(arguments),
            o = F(g.t) ? {ob: g.f, fn0: g.s, fn: g.t} :
                F(g.s) ? {ob: g.f, fn: g.s} : {fn: g.f}
        o.ob = o.ob || {}
        w = W(o.ob)
        if (o.fn0) {
            o.fn0(w)
        }
        Q(o.ob.I || ['me', 'guy', 'chicks', 'sun', 'flame', 'earth'],
            function () {
                o.fn(w)
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
    TXWQ = function () {
        WQ({C: 'r'}, function () {
            w.C('g')
            w.i.A(Q.b('me'), Q.b('guy'))
        })
    }
    QTX = function () {
        WQ(function () {
            i = w.i.qB('me', 0, 0, 3)
        })
    }
    WINDING = function () {
        W()._(function () {
            //$.header().A($.h1('grahics winding')).A()
            h = w.i.h().graphics.f("pink").dr(20, 20, 450, 360)
                .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
                .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
            bm = w.i.qB('chicks').X(470).drag()
            bm.mask = h.same().X(470)
        })
    }
    QUEUEMUG = function () {
        W()._(function (w) {
            ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
            // mug= s.bData( qu.gR("mug") ).drag()
            me = w.i.qB("me").drag()
        })
    }
}
Q = function () {var g = G(arguments), o, q
    o = g.F ? {c: g.f} :
    {m: g.f, c: g.s}

    o.m = o.m || ['me', 'guy', 'sun', 'chicks', 'earth']

    q = new cjs.LoadQueue

    Q = q.c(o.c).m(o.m)

}
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
$Bm=   function(bm){
    bm= _bm(bm)
    if(g.p){ bm.drag() }
    return bm
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
b.Bm=function(iS, x,y,sX,sY,rt){var b=this,
    w= b.W(),g=G(arguments);
    b.gx = b.gx || w.g.ct()
    if(S(iS)){this.gx.bm(iS, fn)}
    if(O(iS)){fn(iS);return iS}
    return b
    function fn(bm) {bm.rC().XY(N(x,0),N(y,0)).sXY(N(sX,1), N(sY,sX||1)).rt(N(rt,0))}
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
