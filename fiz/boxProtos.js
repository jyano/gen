

b2d.p()
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



fProto()
bProto()
wProto()

function fProto(){
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
}
function bProto(){
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
}
function wProto(){


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
    w.lG=function(c,c2){var w=this,o
        o={c1:c2||'z', c2:c||'r', x1:0,y1:0,x2:0,y2:0}
        _.x(o,R()?(R()?{y2:w.h}:{x2:w.w}):
            R()?(R()?{x1:w.w,y1:w.h}:{x2:w.w,y2:w.h}):
                R()?{x1:w.w,y2:w.h}:{y1:w.h,x1:w.w})
        w.bg.h().lf(o).dr(0,0,w.w,w.h)
        w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)

        return w
    }


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
