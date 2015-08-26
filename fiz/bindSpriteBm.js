_src=function(a){ a = $.extension(a); return s$(a).startsWith('/')? a : '/'+ a }
cjs.src = Graphics.toSource = src=function f(e){//if(Q(e)){$l('q');e=$(e)[0]}
    if( e.image ){ e=e.image}
    if( C(e) ){ e = C(e) }
    if( e.src ){ e = e.src}
    if( e.toDataURL ){  e=tDU(e) }
    return s$(e).contains('data:')?  e
        :  S(e) ?  _src(e)
        : 0}
$.i = function(source, func){
    var img = $( new Image() )//gets rid of auto-scaling quirk
    img.load(function(img){var img = $(img.target)}) // img.W( img.W() ) // img.H( img.H() )
    if(func){img.load(function(event){func($(event.target), event)})}
    if(source){img.src(src(source))}
    return img
}
b2d.p()
$Ct= function(a){return new cjs.Container(a)}
$Bm=   function(){var g=G(arguments),        bm=new cjs.Bitmap(g[0])
    if(g.p){ bm.drag() }
    return bm}
ct.bm=  ct.b= function self(){var ct=this,g=G(arguments), bm,
    o=g.F_? {fn:g.s, sc:1, i: g.f} :
        g.N_ ? {sc: g.s,fn: g.t, i: g.f} :
            N(g.s)? {i: g.f, sc: g.s, fn: g.t}:
            {i: g.f, fn: g.s, sc: g.t}
    o.i  = o.i || 'me'
    //
    if (O(o.i)){alert('ct.bm O(o.i)'); return ct.A( $Bm(o.i) )}
    //
    $.i(o.i, function(i){
        bm = $Bm(i[0]).a2(ct)
        bm.sXY(o.sc)
        if(!g.n){ bm.rC() }
        if(g.p){ bm.drag() }
        if(o.fn){ o.fn(bm) }
    })
    return ct
}
ct.ct= function(x,y){var ct = this, g = G(arguments),
    x = g[0],  y = g[1]
    ct1=  $Ct()
    ct.A( ct1 )
    if (F(x)) {x(ct1, ct)}
    else if (N(x)) {ct1.XY(x, y)}
    if (g.p){cjs.bindSlide(ct1)}
    return ct1}
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

    p.Bm( 'me', 0, 0,  0.25*sc    )  // p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
    if(g.p){p.tr()}
    p.r(.4)
    p.lD(.5)
    return p
}
b.Bm=function(iS,x,y,sX,sY,rt){var b=this,
    w= b.W(),g=G(arguments); b.gx = b.gx || w.g.ct()
    if(S(iS)){this.gx.bm(iS, fn)}
    if(O(iS)){fn(iS);return iS}
    return b

    function fn(bm) {
        bm.rC().XY(N(x,0),N(y,0)).sXY(N(sX,1), N(sY,sX||1)).rt(N(rt,0))
    }
}
