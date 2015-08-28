
_xyr=function(o){
    o.x=N(o.x,0)
    o.y=N(o.y,0)
    o.r=N(o.r,0)
    return o}
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
$Ct= function(a){return new cjs.Container(a)}
ct.ct= function(x,y){var ct = this,
    g = G(arguments), ct1=$Ct()
    o= g.F_? {fn:g.f} : {x: g.f, y: g.s}
    ct.A( ct1 )
    if (o.fn) {o.fn(ct1, ct)}
    else if (N(o.x)) {ct1.XY(o.x, o.y)}
    if (g.p){cjs.bindSlide(ct1)}
    return ct1
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
ct.d= ct.dot=function(c, x, y){var ct=this, o, d, tw, g=G(arguments)

    if(b2d.isGPoly(g.f)){

        _.e(g.f.vs(), function(v){ct.dot(V(v))})

        return this
    }


    if(g.A){

        _.e(c, function(G){
            if( A(G) ){ ct.dot.apply(ct, G) }
            else { ct.dot(G) }
        })

        return this
    }


    o = g.S_? (

        b2d.iB(g.s)? {c:g.f, x:g.s.sX , y: g.s.sY }:

            O(g.s)? {c:g.f, x:g.s.x, y: g.s.y}:
            {c:g.f, x:g.s, y: g.t}

    ):
        b2d.iB(g.f)? { x:g.f.sX , y: g.f.sY }:
            g.O_? {x:g.f.x,  y: g.f.y}:
            {x:g.f, y:g.s}



    o.x= N(o.x, ct.W()/2)
    o.y= N(o.y, ct.H()/2)
    o.c = o.c||'y'
    d = this.h(o.x, o.y).cir(8,  o.c, 'z', 2).al(.7).drag()
    tw=d.twL( [{sxy:1.3},100], [{sxy:1},100]).$()
    d.$$(function(){ tw.$() })
    return d.K('dev dot')
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



$Bm=  function(bm){var g=G(arguments)
    bm= _bm(bm)
    if(g.p){ bm.drag() }
    return bm
}

