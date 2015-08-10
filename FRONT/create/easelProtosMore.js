$PT()


tProto()
qProto()

function tProto(){

    t.lW = _.gS('linewidth')
    t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    t.lWH = function (w, h) {return this.lW(w).lH(N(h, w))}
    t.tA = _.gS('textAlign')
    t.bl = function (bl) {var g = G(arguments)
        if (g.p) {
            bl = 'bottom'
        }
        if (g.n) {
            bl = 'top'
        }
        if (bl === '') {
            bl = 'middle'
        }
        if (U(bl)) {
            return this.textBaseline
        }
        this.textBaseline = bl
        return this
    }
    t.T = function (tS) {if (U(tS)) {return this._tS}
        this._tS = tS
        return this}
    t.ol = _.gS(t, 'outline')
    t.F = t.fo = function (f) {
        if (U(f)) {
            return this.font
        }
        this.font = N(f) ? f + 'px Arial' : f
        return this}
    t.C = function (cS) {
        if (U(cS)) {return this.color}
        this.color = oO('c', cS)
        return this}
    t.mW = function () {return this.getMeasuredWidth()}



}
function qProto(){


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
            return S(item)? {src:cjs.src(item),id:item} : item
        })
        q.loadManifest( mf )
        return q
    }


}

function Proto(){




}
function Proto(){




}
function Proto(){




}



function createStuff(){
    $El = cjs.el = function (a) {
        a = $(a)[0]
        return new cjs.DOMElement(a)
    }
    ELM = function () {
        z()
        d = $.d('r', 400, 400).A($.ip()).drag()
        el = $El(d)
        s = $St('y').t()
        s.A(el)
        // tw(el, [{x:300,y:300},2000])
        // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
    }

}

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

Q = function () {
    var g = G(arguments), o, q
    o = g.F ? {c: g.f} : {m: g.f, c: g.s}
    o.m = o.m || ['me', 'guy', 'sun', 'chicks', 'earth']
    q = new cjs.LoadQueue
    Q = q.c(o.c).m(o.m)
}