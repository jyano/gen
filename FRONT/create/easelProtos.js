$PT()

df.b = function () {
    var g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    return o
}
df.h = function (o) {
    o = o || {}
    if (U(o.v)) {
        o.v = [[-100, 50], [0, -50], [100, 0]]
    }
    //o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
    o.c = o.c || 'p'
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.a = _.tN(o.a)
    o.r = N(o.r, 40)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w || 100)
    o.d = N(o.d, 0.5)
    o.b = N(o.b, 0.5)
    o.f = N(o.f, 0.5)
    o.s = D(o.s) ? o.s : 0
    o.o = N(o.o, 1)
    o.q = D(q) ? o.q : true
    return o
}

iProto() //displayObj
ctProto()
hProto()
stProto()

function stProto(){

    s.cannonBall=function(x,y){var s=this,h
        h=s.h(x,y)
        h.rf('a', 'z',18 ).dc(18).ef()
        return h}
    s.basketBall=function(x,y){var s=this
        return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
    }
    s.beachBall=function(x,y){var s=this
        return s.h(x,y)
            .rf('b','r',18).dc(18).ef()
    }
    s.snowBall=function(x,y){var s=this
        return s.h(x,y).rf('a','w',18).dc(18).ef()
    }




}
function iProto(){
    i.P=function(){return this.parent}

    i.X=function(x,dur){var i=this,g=G(arguments)
        if(U(x)){return i.x}
        i.x = g.p? i.x+x
            :g.n? i.x-x
            :g.m? i.x*x
            :g.d? i.x/x
            :     x

        return i
        //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
    }
    i.Y = function (y, dur) {
        var i = this, g = G(arguments)
        if (U(y)) {
            return this.y
        }
        if (g.p) {
            y = this.y + y
        }
        else if (g.n) {
            y = this.y - y
        }
        else if (g.m) {
            y = this.y * y
        }
        else if (g.d) {
            y = this.y / y
        }


        if (N(dur)) {
            tw([this], [{y: y}, duration])
        }

        else {
            this.y = y
        }
        return this
    }
    i.XY = function (x,y){var i=this,g=G(arguments),v
        if(U(g[0])){return {x:i.x, y:i.y}}
        v=V(g[0],g[1])
        x= v.x
        y= _.tN(v.y, v.x)
        return i.X(x).Y(y)
    }
    i.W = function (a) {var i=this
        if(U(a)){
            return i.getBounds().width * i.scaleX
        }

        i.sX(i.scaleX * a /i.W())

        return i
    }
    i.H = function (a) {
        var i = this

        if (U(a)) {
            return this.getBounds().height * this.scaleY
        }

        this.sY(this.scaleY * a / this.H())

        return this

    }
    i.WH = function (w, h) {
        var i = this
        return this.W(w).H(h || w)
    }
    i.sX=function(n){var i=this
        if(U(n)){return i.scaleX}
        i.scaleX=n
        return i
    }
    i.sY = function (n) {var i=this
        if(U(n)){return i.scaleY}
        i.scaleY = n
        return i
    }



    i.kX = function (skewX) {
        if (U(skewX)) {
            return this.skewX
        }
        this.skewX = skewX;
        return this
    }
    i.kY = function (skewY) {
        if (U(skewY)) {
            return this.skewY
        }
        this.skewY = skewY;
        return this
    }
    i.kXY = function (x, y) {

        y = N(y) ? y : x

        return this.kX(x).kY(y)
    }
    i.rX = function () {var i=this,g=G(arguments),rX=g[0]
        if(U(rX)){return i.regX}
        i.regX = g.p? i.regX+rX : rX
        return i
    }
    i.rY = function () {var i=this,g=G(arguments),rY=g[0]
        if(g.p){i.Y(i.y+(rY-i.regY) )}
        if (U(rY)){return i.regY}
        i.regY=rY
        return i
    }
    i.rXY = function(){var i=this,g=G(arguments),
        x= _.tN(g[0]),
        y= _.tN(g[1],x)
        return i.rX(x).rY(y)
    }
    i.rt = i.rot = function () {
        var i = this, g = G(arguments), a = g[0]
        if (g.p) {
            return i.rT(i.rotation + _.tN(a, 1))
        }
        if (g.n) {
            return i.rT(i.rotation - _.tN(a, 1))
        }
        if (U(a)) {
            return i.rotation
        }
        i.rotation = a
        return i
    }

    i.bd= i.bounds=function(a,b,c,d){var i=this

        this.nominalBounds = new cjs.Rectangle(a,b,c,d)

        return this

    }
    i.al= function(al){var i=this
        if(U(al)){
            return i.alpha
        }
        i.alpha=al;
        return i
    }


    i.a2=function(ct, x,y){

        ct.A(this)
        if(N(x)){this.X(x)}; if(N(y)){this.Y(y)}
        return this
    }
    i.rC=      i.rCenter=function(){var i=this,g=G(arguments), x, y,hW,hH

        x=i.W()/2
        hW=x
        y=i.H()/2

        hH=y

        return (g.p)?
            i.rX(hW,'+').rY(hH,'+'):
            i.rXY(hW,hH)
    }
    i.rgc=    function(){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
        return (g[0]===0)?
            i.rXY(0,0,(g.p?'+':null))
            : i.rXY(x,y,(g.p?'+':null))}//
    i.rZero=   function(a){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
        if (g.p) {
            i.rX(0,'+').rY(0,'+')
        }//i.X(a, i.regX()-a, '+')
        else {i.rXY(0,0)}
        return i}//
    i.gL= i.gTL=function(x,y){var i=this
        if(O(x)){y= x.y;x= x.x}
        return i.globalToLocal(x,y)}
    i.hT= i.test=function(x,y){var i=this
        if(cjs.iDO(x)){return i.hT(i.gTL(x))}
        if(O(x)){y= x.y;x= x.x}
        return i.hitTest(x, y)}
    i.uM= i.underMouse=function(){var i=this, s=i.S()
        if(s.mouseInBounds){
            var pt = i.gTL(s.mouseX,s.mouseY)
            return i.hT(pt)}}
    i.tf=  function(){var i=this,g=G(arguments)

        if(U(g[0])){return [
            i.x,
            i.y,
            i.scaleX,
            i.scaleY,
            i.rotation,
            i.skewX,
            i.skewY,
            i.regX,
            i.regY
        ]
        }
        if( O(g[0]) && F(g[0].getTransform)){
            g[0]= g[0].getTransform()}
        i.setTransform.apply(  i, A(g[0]) ? g[0] : g)
        return i
    }
    i.$=function(fn){return this.on('click', fn)}
    i.$$=function(fn){return this.on('dblclick', fn)}
    i.xx= i.rm= i.remove =function(){var i=this
        i.parent.removeChild(i)
        return i} //cant delete 'remove' quite yet
    i.hide=function(){this.visible=false; return this}
    i.of=function(k){
        this._K = this._K || []
        return !k  || this == k ||  _.ct( this._K ,  k)
    }
    i.K=function() {var i=this, g=G(arguments)
        this._K = this._K || []

        if (g.u) {return this._K.join(' ') }

        if (g.O) {this._K(g.f.k); return this }


        _.eW(g.f, function (k) {


            if (!i.of(k)) { i._K.push(k)
            }


        })

        return this
    }


//i.of=function(k){return this.K()==k || this.K()==''}
    i.cX=  function(a){var i=this
        if(U(a)){return i.x + i.W()/2 }
        return i.X( a- i.W()/2)}
    i.cY =   function(a){var i=this,
        hH=i.H()/2
        return U(a)?i.y+hH:i.Y(a-hH)}


    i.sib=function(){return this.P().ch()}



    i.ix=function(n){var i=this, g=G(arguments)
        if(U(g[0])){return }
        i.P().setChildIndex(i, n)
        return i
    }
    i.toFront = function(){ return this.ix( this.sib().length-1 ) }
    i.within = i.inStage =  function(){var i=this,g=G(arguments), s=i.S(),wthnS

        wthnS = i.x > 0 && i.y > 0

        &&   i.x < (s.W()-100)  &&   i.y< ( s.H()-100 )

        if(g.n && !wthnS){ s.rm() }

        return wthnS
    }

    i.belowStg = function(){ return this.y > this.S().H() }

    i.dg= i.drag=function(){var i=this;SL(i);return i}


// ~ scroll
    i.tickX = function (fn) {
        var i = this
        cjs.t(function () {
            i.X(fn())
        })
        return i
    }
    i.tickY = function (fn) {
        var i = this
        cjs.t(function () {
            i.Y(fn())
        })
        return i
    }

    i.RT = function(){var i=this; RT(i);return i}
    i.bB= i.bindBody=function(b){var i=this
        cjs.t(function(){
            b.X(i.X())
            b.Y(i.Y())
            b.rot(i.rot())})
        return i}
    i.toR = i.moveRight = function (num) {
        num = num || 20
        this.X(num, '+')
        return this
    }
    i.toL = i.moveLeft = function (num) {
        num = num || 20
        this.X(num, '-')
        return this
    }
    i.toU = i.moveDown = function (num) {
        num = num || 20
        this.Y(num, '-')
        return this
    }
    i.toD = i.moveDown = function (num) {
        num = num || 20

        this.Y(num, '+')
        return this
    }
    i.keyControls = function (num) {
        var args = G(arguments), i = this
        if (args.P) {
            $.kD('left', function () {
                i.toL(num)
            })
            $.kD('right', function () {
                i.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                i.toU(num)
            })
            $.kD('down', function () {
                i.toD(num)
            })
        }
    }


    i.warpX = function (lo, hi, cush) {
        var i = this, wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.x = wrp(i.x)
        })
        return i
    }

    i.warpY = function (lo, hi, cush) {
        var i = this, wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.y = wrp(i.y)
        })
        return i
    }


    i.warp = function (n) {
        var i = this, s = i.S(), n = n || 0
        i.warpX(0, s.W(), n)
        i.warpY(0, s.H(), n)
        return i
    }


    i.shootBullet = function(){
        shooter = this
        s =stage = shooter.stg()

        bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

        bullet.startMoving(

            (shooter.vx||1)*1.5, (shooter.vy||1) *1.5
        )

    }




    i.hitByBullet = i.isPointInMyRectBounds =  function(bullet){
        var args=G(arguments), bullet=args[0],

            didHit = M.pointInRectangle(
                bullet.cX(),  bullet.cY(),
                {x:this.cX(),
                    y:this.cY(),
                    w:this.W(),
                    h:this.H()}
            )
        if(args.n){
            if(didHit){this.rm()}

        }
        return didHit

    }






    i.killAllIAmHitting = function(){
        var i=this,
            stage = i.St()
        _.e(stage.children, function(obj){
            if(i != obj){ obj.hitByBullet(i, '-') }
        })

    }


    i.makeMeAKiller =function(){
        var i = this
        cjs.tick(function(){
            i.killAllIAmHitting()
        })
        return this}
    i.bounce=function(n){
        var i=this,
            stage = i.getStage() ,
            h=stage.H(),
            w=stage.W()
        n=N(n,0)
        T.t(
            function(){var x=i.x, y=i.y
                if(x > w - i.W() - n  || x <(n ) ){ i.vX('-') }
                if(y> h - i.H() -n|| y<(n )){ i.vY('-')  }
            })
        return i}

    i.startMoving=function(x,y){var i=this,vx,vy
        if(x){i.vX(x)}
        if(y){i.vY(y)}
        vx = i.vx||0
        vy = i.vy||0
        T.t(function(){
            i.X(vx,'+').Y(vy,'+')
        })
        return i}


    i.dot = function () {
        var i = this
        i.getStage().dot(i.X(), i.Y())
        return i
    }
    i.flash = function () {
        var i = this
        i.opacity(0)
        $.in(.3, function () {
            i.opacity(1)
        })
        return i
    }


    i.St = i.S= i.st=  function(){return this.getStage()}


    comp()
    function comp(){


        i.o=function(o){this.compositeOperation = o;return this}

        i.Ds= i.dO=function(){this.o('destination-out'); return this}
        i.dS= i.dI=function(){return this.o('destination-in')}
        i.sD= i.sI=function(){this.o('source-in'); return this }
        i.Sd= i.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
        i.ds= i.dV= function(){ this.o('destination-over'); return this }
        i.SD= i.sT= i.sA= function(){ this.o('source-atop'); return this }
        i.DS= i.dT= i.dA= function(){ this.o('destination-atop'); return this }

        i.li=function(){ this.o('lighter'); return this }
        i.co=function(){ this.o('copy'); return this }
        i.xo=function(){ this.o('xor'); return this }







    }


    function easPhys(){


        i.move = function () {
            return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
        }
        i.accelerate = function () {
            return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
        }
        i.jerk = function () {
            return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
        }
        i.vX = function (a) {
            var g = G(arguments);
            a = g[0]

            if (g.p) {
                this.vx = this.vx + a;
                return this
            }

            else if (g.n) {
                if (N(a)) {
                    this.vx = this.vx - a
                }

                else {
                    this.vx = this.vx * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vx
            }
            this.vx = a;
            return this
        }
        i.vY = function (a) {
            var g = G(arguments);
            a = g[0]
            if (g.p) {
                this.vy = this.vy + a;
                return this
            }
            else if (g.n) {
                if (N(a)) {
                    this.vy = this.vy - a
                }
                else {
                    this.vy = this.vy * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vy
            }

            this.vy = a
            return this
        }
        i.vXY = function (x, y) {
            return this.vX(x).vY(y)
        }
        i.aX = function (a) {
            var g = G(arguments);
            a = g[0]

            if (g.p) {
                this.vx = this.vx + a;
                return this
            }

            else if (g.n) {
                if (N(a)) {
                    this.vx = this.vx - a
                }

                else {
                    this.vx = this.vx * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vx
            }
            this.vx = a;
            return this
        }
        i.aY = function (a) {
            var g = G(arguments);
            a = g[0]
            if (g.p) {
                this.vy = this.vy + a;
                return this
            }
            else if (g.n) {
                if (N(a)) {
                    this.vy = this.vy - a
                }
                else {
                    this.vy = this.vy * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vy
            }

            this.vy = a
            return this
        }
        i.jX = function (a) {
            var g = G(arguments);
            a = g[0]

            if (g.p) {
                this.vx = this.vx + a;
                return this
            }

            else if (g.n) {
                if (N(a)) {
                    this.vx = this.vx - a
                }

                else {
                    this.vx = this.vx * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vx
            }
            this.vx = a;
            return this
        }
        i.jY = function (a) {
            var g = G(arguments);
            a = g[0]
            if (g.p) {
                this.vy = this.vy + a;
                return this
            }
            else if (g.n) {
                if (N(a)) {
                    this.vy = this.vy - a
                }
                else {
                    this.vy = this.vy * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vy
            }

            this.vy = a
            return this
        }
        i.brake = function () {
            this.vx = this.vy = 0
        }


    }
    easPhys()


}
function ctProto(){
    ct.T = function () {var ct = this, g = G(arguments), o, t
        o = g.O ? g.f :

            g.N_? {x: g.f, y: g.s, t: g.t, f:g[3], c:g[4]} :
                N(g.s)?   {t: g.f, x: g.s, y: g.t, f:g[3]} :
                    _.x({t: g.f, f: g.s, c: g.t},
                        N(g[3]) && N([4]) ?{x: g[3], y: g[4]}:
                        {y: g[3]})
        o.f = N(o.f) ? o.f + 'px Arial' : o.f
        o.f = o.f || '50px Arial'
        o.c = oO('c', o.c || 'y')
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.t = String(o.t)
        t = $T(o.t,o.f,o.c).XY(o.x, o.y).a2(this).drag()
        if (g.n) {t.regX = t.W() / 2}
        t.bl('middle')
        if (g.p) {t.bl('alphabetic')}
        if (!g.n) {t.rX(t.mW() / 2)}
        return t
        //o.x = N(o.x, this.St().cen().x)
        /* if(g.p){
         tO = cjs.T(g.f, 'y', '40px Arial')
         if(N(g[3])){ tO.XY(g[3], g[4]) }
         return tO
         }*/
    }

    ct.rec = function () {
        var ct = this, g = G(arguments), o, ct2, h
        if (g.OO_) {
            g.e(this, 'rec');
            return this
        } //it doesnt know that's this! (scope talk)
        o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
            g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f

        o.al = N(o.al, 1)
        o.rt = N(o.rt, 0)
        o.c = o.c || 'z';
        o.C = o.C || 'w'
        ct2 = ct.ct();
        h = ct2.h(o.x, o.y);
        h.rt(o.rt);
        h.c(o).al(o.al)
        if (o.lf) {
            h.lf(o)
        } else if (o.rf) {
            h.rf(o)
        }
        if (o.bm) {
            h.bR({i: 'me', hs: [o]})
        }
        else {
            h.rec(o.w, o.h)
        }
        if (g.p) {
            ct.drag()
        }
        return ct2
    }
    ct.h = function () {
        var ct = this,
            h = $H.apply($H, arguments)
        ct.A(h)
        return h
    }
    ct.pol = function () {
        var ct = this, g = G(arguments), p,

            h = ct.h()

        if (N(g.f)) {
            h.XY(
                g.shift(),
                g.shift())
        }
        p = $a(h, 'pol', g)
        if (g.p) {
            p.drag()
        }
        return p
    }
    ct.C = ct.backgroundColor = function (c) {
        var ct = this
        $(ct.canvas).C(c)
        return ct
    }
    ct.cX = function () {
        return this.St().cen().x
    }
    ct.cY = function () {
        return this.St().cen().y
    }

    ct.cir = function (c, r, x, y) {
        var g=G(arguments)
        alert('ct.cir')
        return $Cir(c, r, x, y).a2(this)
    }


    ct.Ct=function(){
        this.ct.apply(this, arguments)
        return this
    }

    ct.Bm=function(){
        this.bm.apply(this, arguments)
        return this
    }
    ct.W=function(w){var can= this.St().canvas
        if(U(w)){ return can.width }
        can.width = w
        return this
    }
    ct.H=function(w){var can= this.getStage().canvas
        if(U(w)){ return can.height }
        can.height = w
        return this
    }
    ct.abs=function(x, y){  var s=this
        alert('ct.abs')
        ct.can.abs(x, y)
        return s
    }
    ct.ch=   ct.e=   ct.ix= ct.sChI=  ct.sChI= function(fn,n){
        var ct=this,CH
        if(N(n)){ct.setChildIndex(fn,n); return ct}
        CH=[]
        _.e(ct.children, function(ch){ CH.push(ch)})
        if(U(fn)){return CH}
        _.e(CH, function(ch){
            fn(ch)
        })
        return ct
    }
    ct.E= ct.clr= function(){return this.e(function(i){i.rm()})}
    ct.Cv=function(){return this.St().canvas }
    ct.A=function(x,y){var ct=this,  g=G(arguments)
        if(U(x)){$('body').append(ct.Cv()) }
        else if( N(x) ){ $('body').append(ct.Cv()).abs(x,y)}
        else { g.e(function(ch){ ct.addChild(ch) }) }
        return ct
    }
    ct.cen= ct.pt= ct.M= function(){
        return V(this.W()/2, this.H()/2)
    }



    ct.bgI=function(i){var ct=this
        ct.bm(i, function(b){ct.ch(b,0)})
        return ct

    }


    ct.noAuCl= function(){
        this.autoClear=false;
        return this
    }
    ct.au=   function(au){
        this.autoClear=au?true:false;
        return this
    }

    ct.eMO=function(en){this.enableMouseOver(en?true:false); return this}

    ct.mc = function (x,y) {var ct = this, g = G(arguments),mc
        mc = cjs.Mc.apply(cjs,g)
        this.A(mc).XY(N(x,100), N(y,100))
        return mc}

    ct.N=function(n){
        var s=this; if(U(n)){return s.nextStage}; s.nextStage=n; return s
    }
    ct.u=function(){this.update();return this}


    ct.chalk = function () {
        var ct = this, g = G(arguments),
            h = 0
        g.e(function (t) {
            ct.T(t, 26, 'w', 475, h += 35)
        })
        return this
    }
}
function hProto(){
    h.rec = function () {
        var h = this, g = G(arguments), o

        if (g.OO_) {
            g.e(function (g) {
                h.rec(g)
            });
            return h
        }

        o = g.O ? g.f :
            S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
                g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                    N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
                    {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}

        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, o.w)
        if (o.i) {

            h.bf(o.i, function () {
                o.i = null
                h.rec(o)

            })
            return h
        }
        if (o.c) {
            h.c(o)
        }

        if (o.lf) {
            h.lf({
                c1: o.c1 || 'z', c2: o.c2 || 'w',
                s1: 0, s2: 1,
                x: o.x - o.w / 2, y: o.y - o.h / 2, x2: o.x - o.w / 2, y2: o.y + o.h / 2
            })
        }

        h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)

        return h
    }
    h.dr = function () {
        var h = this, gx = h.graphics, g = G(arguments),
            o = g.O ? g.f :
                N(g.t) ?
                {x: g.f, y: g.s, w: g.t, h: g[3]} :
                {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, 100);
        o.h = N(o.h, o.w)
        gx.dr(o.x, o.y, o.w, o.h)
        return h
    }
    h.pol = function (V, c, C, l) {
        var h = this, g = G(arguments), o
        //array must come first b/c its an obj
        o = A(g.f) ? {v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
        b2d.oDef(o)
        h.ef().es()
        h.c(o)
        if (o.bf) {
            h.bf('me', function () {
                h.lt(o.v).cp()
            })
        }
        else {
            h.lt(o.v).cp()
        }
        return h
    }
    h.col = h.fs = function () {
        var h = this, gx = h.graphics, g = G(arguments)
        gx.fs.apply(gx, g)
        return h
    }
    h.z = h.clr = function () {
        this.graphics.clear();
        return this

    }
    h.c = h.f = function (c, C, l) {
        var h = this, gx = h.graphics, g = G(arguments), o

        o = g.O ? g.f : g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
            g.u ? {c: 'z', C: 'w', l: 6} :
                // 'c-C-l'
                N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} : {c: g.f, C: g.s, l: g.t}

        if (A(o.c)) {
            if (N(o.c[1])) {
                o.l = o.c[1];
                o.c = o.c[0]
            }
            else if (N(o.c[0])) {
                o.l = o.c[0];
                o.C = o.c[1]
            }
            else {
                o.l = o.c[2];
                o.C = o.c[1];
                o.c = o.c[0]
            }
        }

        if (A(o.C)) {
            o.l = o.C[1];
            o.C = o.C[0]
        }

        if (o.c == 0) {
            gx.f(null);
            o.c = 'X'
        }
        if (o.C == 0) {
            gx.s(null);
            o.C = 'X'
        }
        if (o.c == 00) {
            gx.f(null);
            gx.s(null);
            o.c = 'X';
            o.C = 'X'
        }
        if (o.c == '*') {
            o.c = $r()
        }
        if (o.C == '*') {
            o.C = $r()
        }
        if (o.c == '**') {
            o.c = $r();
            o.C = $r()
        }
        if (o.c == '***') {
            o.c = $r();
            o.C = $r();
            o.l = R(20)
        }


        if (S(o.c)) {
            gx.f(oO('c', o.c))
        }
        if (S(o.C)) {
            gx.s(oO('c', o.C))
        }
        if (N(o.l)) {
            h.l(o.l)
        }
        if (o.lf) {
            o.lf = O(o.lf) ? o.lf : {}

            if (o.r) {
                o.r = N(o.r, 0)
                o.x = N(o.x, 0)
                o.y = N(o.y, 0)
                o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
                o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
                o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
                o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
            }
            /*
             $l('r: ' + o.r)
             $l('x: ' + o.x)
             $l('y: ' + o.y)
             $l('x1: '+ o.lf.x1)
             $l('y1: '+ o.lf.y1)
             $l('x2: '+ o.lf.x2)
             $l('y2: '+ o.lf.y2)

             */

            h.lf(o.lf)
        }


        if (o.rf) {
            o.rf = O(o.rf) ? o.rf : {}
            o.c = [2, 'z']
            if (o.r) {
                o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
                o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
                o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
                o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
                o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
            }
            h.rf(o.rf)
        }


        if (o.ls) {
            o.ls = O(o.ls) ? o.ls : {}
            if (o.r) {
                o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
                o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
                o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
                o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
            }
            h.ls(o.ls)
        }


        if (o.rs) {
            o.rs = O(o.rs) ? o.rs : {}
            if (o.r) {
                o.rs.x1 = _.tN(o.rs.x1) + o.x
                o.rs.y1 = _.tN(o.rs.y1) + o.y
                o.rs.x2 = _.tN(o.rs.x2) + o.x
                o.rs.y2 = _.tN(o.rs.y2) + o.y
                o.rs.r2 = _.tN(o.rs.r2) + o.r
            }
            h.rs(o.rs)
        }
        if (o.bs) {
            h.bs(o.bs)
        }
        if (o.bf) {
            h.bf(o.bf)
        }

        return h
    }
    h.C = h.s = function (C, l) {
        var h = this, gx = h.graphics
        gx.s(oO('c', C))
        if (N(l)) {
            h.l(l)
        }
        return h

    }
    h.l = h.ss = function (l, b, c) {
        var h = this, gx = h.graphics;
        gx.ss(l || 1, b, c)
        return h

    }
    h.bs = function (i) {
        var h = this;
        h.graphics.bs(i);
        return h

    }
    h.ef = function () {
        var h = this, gx = h.graphics

        gx.f()
        return h


    }
    h.es = function () {
        var h = this, gx = h.graphics
        gx.es()
        return h

    }
    h.cp = function () {
        this.graphics.cp();
        return this
    }
    h.lt = function (x, y) {
        var h = this, gx = h.graphics, v
        if (A(x) && O(x[0])) {
            return h.lt.apply(h, x)
        }
        if (N(x)) {
            gx.lt(x, y);
            return h
        }
        _.e(arguments, function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
        return h
    }
    h.mt = function (x, y) {
        var h = this,
            gx = h.graphics, g = arguments, x = g[0], y = g[1], v
        if (A(g[0]) && O(g[0][0])) {
            _.e(g, function (v) {
                h.mt.apply(h, v)
            });
            return h
        }


        if (N(x)) {
            v = V(x, y);
            gx.mt(v.x, v.y)
        }

        else {
            v = V(_.f(g))
            h.mt(v.x, v.y)
            _.e(_.r(g), function (v) {
                v = V(v)
                h.lt(v.x, v.y)
            })
        }

        return h
    }
    h.bf = function () {
        var h = this, gx = h.graphics, g = G(arguments), tf

        if (!F(Q)) {

            if (A(g.s)) {
                g.s = cjs.m2d.apply(cjs, g.s)
            }
            tf = g.s || cjs.m2d(R(500), R(300))

            if (S(g.f)) {
                gx.bf(Q.i(g.f), null, tf)
            }

            else if (O(g.f)) {
                gx.bf(g.f, null, tf)
            }

            return h
        }

        if (S(g.f)) {
            $.i(g.f, function (i) {
                gx.bf(i[0])
                if (F(g.s)) {
                    g.s(h)
                }
            })
        }
        else if (g.O_ && A(g.f.hs)) {
            $.i(g.f.i || 'me', function (i) {
                gx.bf(i[0])
                if (F(g.s)) {
                    _.e(g.f.hs, g.s)
                }
            })
        }
        else {
            gx.bf(g.f, null, g.s)
        }
        //h.ef()
        return h
    }  // BITMAP FILL  !!!!!!
    h.bV = function (o) {
        var h = this, g = G(arguments), o
        o = g.A ? {hs: g.f} : g.f || {}
        o.hs = o.hs || []
        o.i = o.i || 'me'

        if (F(Q)) {
            $.i(o.i, function (i) {
                h.bf(i[0])
                _.e(o.v, function (v) {
                    h.lt(v)
                })//
                h.cp()
                h.ef()
            })
            return h
        }


        h.bf(o.i)
        _.e(o.v, function (v) {
            h.lt(v)
        })

        return h

    }
    h.bC = function (o) {
        var h = this;
        return h.bf(o, function (h1) {
            h.dc(h1)
        })
    }//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
    h.bfR = h.bmR = h.bR = function (o) {
        var h = this;

        if (F(Q)) {
            h.bf(o, function (h1) {
                h.rec(h1)

            })

            return h
        }
        /*

         h.bmR1= function(o){var h=this;
         o=df.b(o)
         $.i(o.i,
         function(i){_.e(o.hs,
         function(g){
         h.bf(i[0])
         h.rec(g)
         h.ef() })
         })
         return
         }
         */
        h.bf(o.bf)

        h.rec(o.hs)
        _.e(o.hs, function (r) {
            w.rec(r.w, r.h)
        })

        return h
    }
    //more:
    h.C2= function (C, l) {var h=this,gx=h.graphics,g=G(arguments)
        o=O(g[0]) ? g[0]
            :
        {C:[0], l:g[1]}
        gx.s(o.C?  oO('c',o.C): null)
        if(N(o.l)){h.l(o.l)}
        return h
    }
    h.copy=h.same=function(){return $h(this)}//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
    h.rc = h.roundRectComplex = function () {
        var h = this, gx = h.graphics
        gx.drawRoundRectComplex.apply(gx, arguments)
        return h
    }
    h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
        var h = this, gx = h.graphics,

            g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

        o = N(g[3]) ? {
            x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]} :

            N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

                O(g[0]) ? g[0] : {}

        o.a = _.tN(o.a)
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.p = cjs.cap(o.p, 0, .99)

        gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
        return h
    }
    h.drawPolygons = function (paths, C, c) {
        var h = this
        h.C(C)
        if (c) {
            h.c(c)
        }
        _.each(paths, function (p) {
            h.drawPolygon(p)
        })
        return h
    }
    h.de = h.ell = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),
            o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                N(g[0]) ? {w: g[0], h: g[1]} :
                    O(g[0]) ? g[0] : {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)
        gx.drawEllipse(o.x, o.y, o.w, o.h)
        return h
    }
    h.de2 = function (x, y, W, H, r) {
        var h = this
        h.de(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }
    h.rr = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),

            o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
                N(g[1]) ? {w: g[0], r: g[1]} :
                    N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                        O(g[0]) ? g[0] : {}


        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)

        gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
        return h
    }
    h.rr2 = function (x, y, W, H, r) {
        var h = this
        h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }
    h.drawPolygon = function (V, c, C, l) {var h = this, //h.drawConnectedLines =

        n = V.length
        h.c(c, C, l)

        _.e(V, function (v) {
            v.X = v.x
            v.Y = v.y
        })

        if (n >= 3) {
            h.mt(V[0]) //move to the FIRST//lineTo the REST
            $.in(n, function (i) {h.lt(V[i % n])})
        }

        //just a clever way to start from 1

        return h
    }
    h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.bezierCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.qt=    function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.arc = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        /*
         Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
         For example, to draw a full circle with a radius of 20 centered at (100, 100):
         arc(100, 100, 20, 0, Math.PI*2)
         */

        h.arc(x, y, r, startA, endA, aCW)

        return h
    }
    h.arc2 = function (x, y, X, Y, r) {
        var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
        gx.arcTo(x, y, X, Y, r)
        return h
    }
    h.sC=function(){var h=this,gx= h.graphics,g=G(arguments)
        gx.sC.apply(gx,g)
        return h
    }


    h.dc= function(x,y,r){var h=this,gx=h.graphics,g=G(arguments),o
        h.cp() // i kinda like how it stroke-connects my cirs
        if(g.A){return $a(h,'dc',g.f)}
        if(g.OO_){g.e(function(c){ h.dc(c) })
            return h}
        o = g.O?g.f: g.$?{r:g.f}: {x:g.f,y:g.s,r:g.t}
        gx.dc(N(o.x,0),N(o.y,0),N(o.r,50))
        return h
    }
    h.cir= function () {var h = this, gx = h.graphics, g = G(arguments), o
        //h.ef().es()
        //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
        o = g.O ? g.f :
            N(g.t) ?  {x:g.f,y:g.s,r:g.t, c: g[3], C: g[4], l: g[5]} :
                N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                    g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]}:
                    {c:g.f,C:g.s,l:g.t}
        h.c(o)
        if(o.bf){
            if(N(o.bf)){o.bm = 'me'}
            if(F(Q)){
                h.bf(o.bf, function(){
                    h.dc(o)
                })
            }
            else {
                o.tf = o.tf || null
                h.bf(o.bf, o.tf).dc(o)
            }
        }
        else {h.dc(o)}
        h.alpha = N(o.al, 1)
        return h
    }
    h.lf=function(){var h=this, gx= h.graphics, g=G(arguments),o
        o = cjs.lg(g)
        gx.lf([o.c1,o.c2],[o.s1,o.s2],o.x1,o.y1,o.x2,o.y2)
        return h
    }
    h.rg=function(o){var h=this,g=G(arguments),
        gx=h.graphics,
        o


        if(A(g[0]) && A(g[1])){

            gx.rf(
                [oO('c', g[0][0]), oO('c', g[0][1])], g[1],  g[2],  g[3], g[4], g[5], g[6] ,g[7]
            )
            return h
        }


        o = O(g[0])?g[0]:


            S(g[1])? _.x({c1:g[0],c2:g[1]},
                N(g[7])?
                {x1:g[2], y1:g[3], r1:g[4], x2:g[5],y2:g[6],r2:g[7]}
                    :N(g[5])?
                {x2:g[2],y2:g[3],r1:g[4],r2:g[5]}
                    :N(g[4])?
                {x2:g[2],r1:g[3],r2:g[4]}
                    :N(g[3])?
                {r1:g[2],r2:g[3]}
                    :
                {r2:g[2]})

                : S(g[0])?
            {c2:g[0]}
                : {}

        b2d.grad(o)

        o.x2 = N(o.x2, o.x1)
        o.y2 = N(o.y2, o.y1)
        o.r1 = N(o.r1, 1);
        o.r2 = N(o.r2, 100)

        return o}
    h.ls=function me(){var h=this, gx= h.graphics, g=G(arguments),o
        if(A(g[0])){return me.apply(h,g[0])}
        o= h.lg.apply(h, g)
        gx.ls([o.c1, o.c2],[o.s1,o.s2],o.x1,o.y1,o.x2,o.y2)
        return h}
    h.rf=function me(){var h=this, gx=h.graphics, g=G(arguments), o
        if(A(g[0])){return me.apply(h, g[0])}

        o = h.rg.apply(h,g)

        gx.rf(
            [o.c1,o.c2],
            [o.s1,o.s2],
            o.x1, o.y1, o.r1,o.x2, o.y2, o.r2)
        return h


    }
    h.rs=function me(){var h=this, gx=h.graphics, g=G(arguments),o
        if(A(g[0])){return me.apply(h,g[0])}
        o=h.rg.apply(h,g)
        gx.rs([o.c1,o.c2],[o.s1,o.s2], o.x1,o.y1,o.r1,o.x2,o.y2,o.r2)
        return h}
    cjs.lg= h.lg=function(){var g=G(arguments), o//h=this, gx=h.graphics,

        if(g.A){
            return cjs.lg.apply(null, g.f)}
        o= g.O? g.f:
            _.x({c1:g.f, c2:g.s},
                N(g[5])?{x1:g[2],y1:g[3],x2:g[4],y2:g[5]}
                    :N(g[4])?{y1:g[2],x2:g[3],y2:g[4]}
                    :N(g[3])?{x2:g[2],y2:g[3]}:{y2:g[2]})
        o.c1 = oO('c', o.c1 || 'z');
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1,0); o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1,0); o.y1 = N(o.y1,0)
        o.x2 = N(o.x2,0)
        o.y2=N(o.y2)? o.y2: N(o.r)?o.r*2: 100
        return o
    }





}

