b2d.cov = function(x,y,c,C,l,l2){var g=G(arguments),x=g[0],y=g[1],c=g[2],C=g[3],l=g[4],l2=g[5],

    o = N(c)? {x:x, y:y, a:c, c:C, C:l, l:l2}
        : N(x)? {x:x, y:y, c:c, C:C, l:l}
        : x,
    h = new cjs.Shape()

    b2d.oDef(o)

    h.XY(o.x,o.y).rot(o.a).c(o.c,o.C,o.l)

    if(o.d){h.drag()}

    return h
}
b2d.oDef = function (o) {
    o = o || {}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.a = N(o.a, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, 50)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    return o
}
w.sTW=w.sToW = function(x,y){var w=this, //works
    x=x/w.z - w.s.x/ w.z,
    y=y/w.z - w.s.y/w.z
    //w.dot(x,y,'*') // cool
    return {x: x  ,y: y}}
w.wTS=w.wToS=  function(x,y){var w=this,
    x=(x +w.s.x/w.z)*w.z,
    y=(y+ w.s.y/w.z)*w.z
    return {x:x, y:y}
}
f.C = function () {
    var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
        h
    o = g.O ? g.f :
    {c: g.f, C: g.s, l: g[2]}
    o.c = (o.c == '*') ? $r() : (o.c || 'b')
    o.C = o.C || o.c
    f.removeSprites()

    h = f.iC() ?
        // if circle?
        w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
        // if poly
        w.s.h().pol(f.rV(), o.c, o.C, o.l)

    f.bS(h)
    b.i = h
    return f
}
f.bS = function () {
    var f = this, b = f.B(), w = b.W(), s = f.S(), g = G(arguments), o, j

    if (g.S_) {
        Q(function () {
            var bm = Q.b(g.f)
            f.bS(
                $Ct().A(
                    bm.XY(f.pos().x, f.pos().y).rC())
            )
        })
        return f
    }

    o = cjs.iDO(g.f) ?

    {j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]} : g.O ? g.f : {}

    f.sprites = f.sprites || []

    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.rt = N(o.rt, 0)
    o.o = N(o.o, 1)

    o.al = N(o.al, 1)
    j = o.j.al(o.al)
    w.g.A(j)
    f.sprites.push(j)

    T.t(function () {

        j.XY(b.X() + o.x, b.Y() + o.y)
        j.rt(b.rt() + o.rt)

    })
    return f
}
f.S = f.stg = function () {
    return this.W().s
}
b.pol = function () {
    var b = this, w = b.W(), g = G(arguments), fs, n, arr, o, vs

    b2d.mini()

    //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
    // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}

    if (g.u) {
        return b
    }

    if (iP(g.f) && U(g.s)) {
        return b.pol({v: g.f})
    }

    if (S(g.f) && iP(g.s) && U(g.t)) {

        return b.pol({c: g.f, v: g.s})
    }

    if (iF(g.f)) {
        g.f = g.f.rV()
    }
    else if (iB(g.f)) {
        g.f.fs(b);
        return b
    }
    if (g.A) {
        o = S(g.f[0]) ?
        {c: g.f[0], v: _.r(g.f)} :
        {v: g.f}
    }
    else {
        o = g.O ? g.f :
            g.S_ ?
                (g.t ?
                {c: g.f, v: g.r} :
                {c: g.f, v: g.s}) :
            {v: g}
    }

    o = df.h(o)
    if (iP(o.v)) {
        o.v = o.v.vs()
    }
    n = b.n()
    if (O(o.v[0][0])) {
        _.e(o.v, function (v) {
            b2d.sep(b, v)
        })
    }

    //pass in 2 or more objs->
    else {
        b2d.sep(b, o.v);
        o.v = [o.v]
    }

    //pass in one object
    //->  ['r', [],[],[] ]//->  [[],[],[]]
    //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
    //just pass in loose verts//-> [],[],[]
    //same two as above but also nested in wrapper array.. so just ONE pam
    //if (o.X) {b.clear()}
    //the NEW fixts
    fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
    _.e(fs, function (f) {
        f.d(o.d).r(o.b).fr(o.f)
        if (o.s) {
            f.m_isSensor = o.s ? true : false
            f.sen(1)
        }
        f.K(o.k)
        f.C(o.c, o.C, o.l)
        if (o.lf) {
            f.bS(w.s.h().lf(o).lt(o.v))
        }
        if (o.rf) {
            f.bS(w.s.h().rf(o).lt(o.v))
        }
    })

    o.i = o.i || o.bf
    if (o.i) {
        h = w.g.h()
        h.bV(o)
        b.bS(h)
    }

    //b.cir('y', 10);b.cir('z', 6)
    return fs.length > 1 ? fs : fs[0]
}
b.C = function (c) {
    this.fs(function (f) {
        f.C(c)
    })
    this._col = c
    return this
}
b.St = b.S = b.stg = function () {
    return this.W().s
}
b.horizCenter = function () {
    var b = this
    //-> b.X('hC')
    b.X(b.W().hW)
    return b
} //b.g=function(){ return this.f().g }
b.rec = function (c, W, H, x, y, a) {
    var b = this, w = b.W(), g = G(arguments, 'k'),
        o, fD, p, f

    if (g.OO_) {
        g.e(function (g) {
            b.rec(g)
        });
        return b
    }
    if (g.A) {
        return $a(b, 'rec', g)
    }
    if (g.O) {
        o = g.f
    }
    else {
        if (N(g.f)) {
            g.ush('z')
        }

        o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}

    }

    b2d.oDef(o)
    o.k = o.k || g.k
    fD = b2d.fD(b2d.pH().box(o))
    if (o.s || g.n) {
        fD.isSensor = true;
        o.al = N(o.al, 0.8)
    }

    fD.d(o.d || .5)
    f = b.f(fD)
    f.K(o)

    if (o.c !== 0) {
        // f.g=w.g.h().rec(o)
        if (g.p) {
            f.g = w.g.h().rec(o)
        }//  f.g= w.g.h().rec(o) //this for but: (does something important)
        else {
            f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
            f.bS(f.g)
        }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
        // f.bS(f.g)
    }
    return f

}
b.$h = function () {
    var h = $H()
    this.bS(h)

    h.c.apply(h, G(arguments))
    return h
}
w.bfR = function () {
    var w = this, g = G(arguments), b, h, o
    o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
    {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed
    b = w.D(o.x, o.y, o.c, o.w, o.h)
    h = w.g.h().al(.5)
    if (o.c) {
        h.c(o.c)
    }
    h.bf(o.i)
    h.rec(o.w, o.h)
    b.bS(h)
    return b
}
w.$h = function () {
    return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.C = function (c) {
    var w = this
    w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
    return w
}
w.l = w.dl = function () {
    var w = this, g = G(arguments), o, i
    o = S(g[0]) ?
    {c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
        :
    {x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
    i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
    o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')

    return i.h()
        .c(10, o.c)
        .mt(o.x1, o.y1)
        .lt(o.x2, o.y2).K('dev line')


}
w.dr = function (c, x, y, W, h) {
    var w = this, g = G(arguments), o
    o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
        : {x: g[0], y: g[1], w: g[2], h: g[3]}
    _.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
        g.n ? {g: w.bg, c: o.c || 'r'} :
        {g: w.hud, c: o.c || 'b'})
    o.g.h().rec(o)
}
w.dbCross = function (x, y) {
    var w = this, c = w.cen()
    x = N(x, c.x)
    y = N(y, c.y)

    w.dr('t', -10 + x, -140 + y, 20, 300, '-')
    w.dr('t', -150 + x, -10 + y, 300, 20, '-')
    w.dot('r', x, y)

    return w

}
w.stats = function (n) {
    var w = this
    _d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))

    w.mdq(function (fx) {
        _f = _d._fix = fx;
        _b = _f.B()
    })

    if (n == 0) {
        z(upd)
    }

    else {
        _.ev(N(n, .2), upd)
    }

    return w

    function upd() {
        var f, b;
        if (_d._fix) {
            f = _d._fix
            b = f.B()

            _d.T(
                'ty: ' + (b.iD() ? 'dyn' : 'stat'),
                'x: ' + b.X(),
                'y: ' + b.Y(),
                'fK: ' + f.K(), 'bK: ' + b.K(),
                'sen: ' + f.sen(),
                'd: ' + f.d(),
                'fr: ' + f.fr(),
                'r: ' + f.r(),
                'bMass:' + parseInt(f.B().mass()),
                'bNum:' + f.B().n()
            )

        }

    }
}
w.devGrid = function () {
    var w = this
    _.t(12, function (i) {
        w.l(i * 200, 0, i * 200, w.h)
        w.l(i * 200, 0, i * 200, w.h, '-')
        w.l(0, i * 200, w.w, i * 200)
        w.l(0, i * 200, w.w, i * 200, '-')
    })
    return w
}
w.flash = function () {
    var w = this, s = w.s
    s.flash.apply(s, arguments)
    return w
}
w.pop = function (t) {
    var w = this
    t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
    t.tw([{a: .5, sxy: .5}, 4000])
    _.in(4, function () {
        t.rm()
    })
    return this
}
w.pen = function (t, f, c) {
    var g = G(arguments), o
    if (this._T) {
        this._T.rm();
        this._T = null
    }

    o = {y: 100}

    o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW

    this._T = this.i.T(t, f, c)
    this._T.XY(o.x, o.y)
    return this._T
}
w.chalk = function () {
    var w = this, g = G(arguments)
    w.i.chalk.apply(w.i, g)
    return w
}
w.show = function (fn) {
    var w = this, g = G(arguments)


    _.ev(.2, function () {

        w.pen(S(fn) ? window[fn] : fn())

    })

    return w

}
//
w.lG=function(c,c2){var w=this,o
    o={c1:c2||'z', c2:c||'r', x1:0,y1:0,x2:0,y2:0}
    _.x(o,R()?(R()?{y2:w.h}:{x2:w.w}):
        R()?(R()?{x1:w.w,y1:w.h}:{x2:w.w,y2:w.h}):
            R()?{x1:w.w,y2:w.h}:{y1:w.h,x1:w.w})
    w.bg.h().lf(o).dr(0,0,w.w,w.h)
    w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)

    return w
}
b2d.grad=function(o){o=o||{}
    o.c1 = oO('c',o.c1||'z')
    o.c2 = oO('c',o.c2||'w')
    o.s1 = N(o.s1)
    o.s2 = N(o.s2, 1)
    o.x1 = N(o.x1)
    o.y1 = N(o.y1)
    return o
}
w.clr = w.wXx = function(){var w=this
    w.e(function(b){
        if(b!= w.right && b!= w.left&& b!= w.roof&& b!= w.floor)
            b.xx()
    })
    return w
}
b.cir= function(){var b=this,g=G(arguments), o= g.f, fd,  h,  f
    //if passed array, it assumes it is arguments for ONE cir
    if(g.A){
        return b.cir.apply(b, g.f)
    }
    //if you pass at least two objects, it makes multiple cirs and passes back b
    if(O(g.s)){
        g.e(function(c){b.cir(c)})
        return b }
    // can pass obj
    // can pass: c C [r] [x] [y]
    // can pass: c [r] [x] [y]
    // can pass: [r] [x] [y] [c] [C]
    o = g.O? g.f
        :S(g.s)?{c: g.f,C: g.s, r:g[2],x:g[3],y:g[4]}
        :S(g.f)?{c: g.f,r: g.s, x:g[2],y:g[3]}
        :{r: g.f,x: g.s,y:g[2],c:g[3],C:g[4]}
    o.x = N(o.x,0)
    o.y =  N(o.y,0)
    o.r =  N(o.r,40)
    o.b =  N(o.b,.5)
    o.f =  N(o.f,.5)
    o.al=  N(o.al, 1)
    o.s = D(o.s)? o.s: 0; if(g.n){o.s=1}
    o.d =  N(o.d,.5)
    fd = new b2d.FixtureDef
    fd.d(o.d).r(o.b).fr(o.f)
    fd.shape = new b2d.CircleShape(o.r/30)
    fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
    fd.isSensor = o.s? true : g.n? true: false
    f = b.f(fd)
    f.K(o.k)
    if(o.c!=0){
        f.g = w.g.h().cir(o)
        f.bS(f.g)
    }
    return f
}
b.f=function(){var b=this,g=G(arguments), o,
    ag=g[0],
    l= g.L,
    FD=b2d.iFD
    if(g.u){return b._f()}
    if(g.S_){l--}
    if(g._S){l--}

    if(g.A){g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]

    else if(g.SA){
        g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
            if(FD(f)){b._f(f, g.f)}
            else {
                if(!S(_.f(f))){f.unshift(g.f)}
                if(FD(f[1])){b._f(f[1],f[0])}
                else { $a(b,'f',f) }}})}

    else if (FD(g.f)){return b._f(g[0])}//(fD)
    else if (g.S_ && FD(g.s)){ b._f(g[1], g[0]) }//('c', fD)

    else if(O(g.s)){
        o=g.S_?{c:g.f,v:g.r}:{v:g}//if (g.n) {o.s=1}
        b.pol(o)
        if(g.n){b.sen(1)}}//pol

    else if(l==1||l==3){
        o={c:g[0], r:g[1], x:g[2], y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)}

    else {
        o={c:g[0], w:g[1],  h:g[2], x:g[3], y:g[4], a:g[5]}
        if(g.n){o.s=1}
        b.rec(o).C(o.c)
        // $a(b,'rec', g.g)
    }
    return b.d(1)
}
w.D=function(){var w=this, g=G(arguments,'k'),o,b
    if(g.u){return w.D(w.hW, w.hH)}
    o= g.O? g.f:
        g.O_? {p:g.f, f:g.r}:
        {p:[g.f,g.s],f:_.r(g,2)}
    b = w.CreateBody( b2d.D(o.p) )
    b.K(g.k)
    $a(b, 'f', g.G( o.f ) )
    return b
}//w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
w.edgAr = function(){
    var w=this,
        g=G(arguments),
        X=0,
        Y= 0,
        x =w.D(400, 400,'z', [ [50, 50,  '-']])//.den(10)
    _.e(g, function(e){

        e =  w.edgD(e[0], e[1], e[2], e[3])
        w.wed(e,x,V(g[0][0], g[0][1]))
    })


    return x
}
w.boxes = function () {var w = this,g=G(arguments)
    _.e(g, function (g) {w.box.apply(w,g)})
    return w}
w.brcks= w.boxesStat = function () {var w = this,g=G(arguments)
    _.e(g, function (g) {w.brick.apply(w, g)})
    return w}
w.rR = w.randRects = function (ob) {
    var w = this, g = G(arguments),
        o = g.O ? g.f : {y: g.f, z: g.s}
    o.y = N(o.y, 0)
    o.z = N(o.z, 1)
    _.t(20,
        function (i) {
            w.S(R(1100, 20), R(150, 40 + o.y), $r(),
                R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
        })
    return w
}
w.ten = w.addTenBalls = function (n) {
    var w = this

    _.t(n || 10, function (i) {

        w.ball(100 + (i * 80), 200)
    })

    return w
}
w.hun = w.addHundBalls = function (n) {
    var w = this
    _.t(n || 100, function (i) {
        w.ball(100 + (i * 8), 50, 10)
    })
    return w
}
f.xSp= f.Xx=  f.removeSprites=function(){var f=this
    this._sp = this._sp || []
    this.SP = this.SP || []
    this.sprites = this.sprites||[]
    _.e(f.sprites, function(s){
        if(O(s) && s.parent ){
            s.remove()
        }
    })

    this.sprites=[]
    this_sp=[]
    this.SP=[]
    return f
}
w.pol=function(){var w=this,g=G(arguments), b,o
    if(g.A){return $a(w,'pol',g.f)}
    b2d.mini()
    if(g.OO){g.e(function(g){w.pol(g)})
        return w}



    // if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}

    else if(g.N_ && N(g.s) && O(g.t)    ){
        b = w.D(g.f,g.s)
        // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
        _.e(g.t, function(p){
            b.pol({v:p})})
        return g.m? M.p(b): b
    }
    o= g.O? g.f:
        N(g.f)? {x:g.f, y:g.s, p:g.t}
            : {p:g.f}

    o.x=N(o.x, w.hW)
    o.y=N(o.y, w.hH)
    o.p= M.p(o.p)

    b=w.D(o.x, o.y)

    if(g.P){
        if(iB(o.p)){o.p=M.p(o.p)}
        b.pol(o.p)
        return g.m? M.p(b): b
    }

    if(o.rg){o.p.ps(o.rg, function(p){b.pol(o)})}

    else {
        o.p.ps(function(p){
            b.pol(o)})}

    return b.f()
}
w.cir=   w.ball= w.ba= w.circ=function(x, y, r, c){var w=this, g=G(arguments), b,o

    o = g.O? g.f :

        N(g.s) ?

        {
            x: g.f, y: g.s,
            r: g.t,
            c: g[3]
        }
            :

        { r: g.f }


    o.x  = N(o.x, w.hW)
    o.y  = N(o.y, w.hH)
    o.r  = N(o.r, 50)
    o.c  = o.c || $r()

    b = w.D(o.x, o.y, o.c, o.r)

        .d(.5).fr(0).r(.5)

        .K('ball cir')

    if(g.n){b.sen(true)}

    return b

}
w.bump =  w.baa = function () {var w=this, g=G(arguments), b,o

    o = O(g[0])? g[0] : N(g[1])? {

        x:g[0],
        y:g[1],
        r:g[2]

    } : {r:g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.r  = _.tN(o.r, 40)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)

    if(g.n){b.sen(true)}
    return b}
w.brick = w.bii = function (x, y, W, H) {var w=this, g=G(arguments), b,o
    o = O(g[0])? g[0] : N(g[1])? {
        x:g[0],
        y:g[1],
        w:g[2],
        h:g[3]
    } : {w: g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.w  = _.tN(o.w, 40)
    o.h  = _.tN(o.h, o.w)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y,  o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

    if(g.n){b.sen(true)}
    return b
}
w.xD=function(){
    w.e(function(b){

        if(b.iD()){  b.xx()}

    })
}
b.xx = b.kill =  b.destroy = function(){var b=this, v= b.pos()
    if(b.sprite){b.sprite.rm()}
    if(b.sp()){b.sp().rm()}
    b.fs(function(f){f.removeSprites()  })     //if(f.sprite){f.sprite.remove()}
    b.sprite=null
    b.SetActive(false)
    b.W().DestroyBody(b)
    return v
}
f.xx=  f.kill=f.remove=function() {
    if (this) {this.removeSprites()

        if (this.B()) {
            this.B().xF(this)
        }
    }
}
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
f.xB= f.xX= f.XX=  function(){if(this && this.B()){ this.B().xx() }}
w.edgD = function(x1,y1,x2,y2){var w=this,
    l = w.l(x1,y1,x2,y2),
    e = w.D(0,0,b2d.edg(x1,y1,x2,y2)).d(1)
    e.bS(l) //bS2
    return e
}
w.edgs = function(){var w=this, g=G(arguments), X=0, Y= 0, x =w.D(X,Y, 'z', [[100,100, 400,400, '-']]), x2 =w.D(2000, 1200, 'z', [[400,400,  '-']])
    if(A(g[0])){
        //  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
        //  w.weld(x,b)
        // X=g[0][0]
        // Y=g[0][1]
    }
    _.e(g, function(e){if(A(e)){e = w.edgD.apply(w,e)}
        w.wed(e,x)})//  w.weld(x2  , x)
    w.dot(300, 300)
    return x2
}
w.edgsD=function(ar){var w=this

    ar = ar || [V(),V(100,100)]

    i = V( ar.shift() )
    i2 = V( ar.shift() )

    w.edg(i.x, i.y, i2.x, i2.y)

    _.e(ar, function(v){

        i = i2
        i2 = V(v)
        w.edg(i.x, i.y, i2.x, i2.y)})
}
w.edg= function(x1,y1,x2,y2){var w=this
    // you would always want a single stat?
    w.l(x1, y1, x2, y2,'-')

    return w.S(0, 0, b2d.edg(x1,y1,x2,y2))
}
w.edgs=function(ar){var w=this,e
    ar = ar || []
    i = V( ar.shift() )
    i2 = V( ar.shift() )
    e = w.edg(i.x, i.y, i2.x, i2.y)
    _.e(ar, function(v){
        i = i2
        i2 = V(v)
        e.glu(  w.edg(i.x, i.y, i2.x, i2.y) )
    })
}
w.dance=function(){var w=this
    w.e(function(b){if(b.iD()){b.thr()}})//w.eD
    return w
}
w.badGuy=function(x,y){var that=this,w=this
    b = w.D(x, y,'d',60).K('badGuy').bS(
        w.s.h(x,y)
    )
    b.draw=function(frame){var b=this
        b.sp().rf(['r','g'],
            [frame[0], frame[1]], 60).dc(60)
    }
    b.h = b.health = 100
    b.cl(function(){b.h--})
    funcId = I(function(){
        b.draw( frameByHealth(b) )
        if(b.h<=0){clearInterval(funcId);b.kill()}
        function frameByHealth(b){
            if(b.h<0){b.h=0}
            if(b.h>100){b.h=100}
            if(b.h<50){ return [ 1-((b.h/50)),1 ] }
            else {return [0, 1-((b.h-50)/50)  ]} }
    }, 300)
    return b
}
w.polyCirc=function(x, y, r, sides){var w=this,
    b=w.D(x,y)

    b.pol( {v:b2d.polyCirc(r, sides)})

    return b
}
w.txC = function () {
    var w = this
    _.ev(2, function () {
        w.e(function (b) {
            b.fs(function (f) {
                f.C($r())
            })
        })
    })

}
w.sH = function (h) {
    var w = this

    if (U(h)) {
        return w.H * w.s.scaleY
    }
    w.s.scaleY = h / w.H
    return w
}

b2d.oDef = function(o){o=o||{}
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    o.r =  N(o.r, 50)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    return o
}
df.rec=  function (o){
    o.al=N(o.al,1)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.w=N(o.w,50)
    o.h=N(o.h,50)
    return o
}