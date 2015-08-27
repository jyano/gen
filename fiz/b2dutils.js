b2d = b2 = Box2D
b2d.p= function(){
    aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
    b=b2d.Body.prototype
    bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Dynamics.Controllers.b2BuoyancyController
    bD= b2.Dynamics.b2BodyDef.prototype

    cx = b2d.Dynamics.Contacts.b2Contact.prototype
    cxI = b2d.Dynamics.b2ContactImpulse.prototype
    ct=cjs.Container.prototype
    co = b2d.Dynamics.Controllers.b2Controller.prototype
    c= HTMLCanvasElement.prototype

    dd= b2d.Dynamics.b2DebugDraw.prototype
    dJD=  b2d.Joints.b2DistanceJointDef.prototype
    dJ=   b2d.Joints.b2Joint.prototype
    eD=cjs.EventDispatcher.prototype
    f = b2d.Fixture.prototype
    fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
    fd=fD=b2d.FixtureDef.prototype
    gCo = b2d.Dynamics.Controllers.b2GravityController.prototype
    gx=cjs.Graphics.prototype
    h =  cjs.Shape.prototype
    i=    cjs.DisplayObject.prototype
    jD=   b2d.Joints.b2JointDef.prototype
    j=   b2d.Joints.b2Joint.prototype
    l = b2d.Dynamics.b2ContactListener.prototype
    mJ = b2d.Joints.b2MouseJoint.prototype
    mc=cjs.MovieClip.prototype
    flDa = b2d.Dynamics.b2FilterData.prototype
    pH=  b2d.PolygonShape.prototype
    pJ = b2d.Joints.b2PrismaticJoint.prototype
    pJD = pd = b2d.Joints.b2PrismaticJointDef.prototype
    pD= gpcas.geometry.PolyDefault.prototype
    ps= gpcas.geometry.PolySimple.prototype
    q = cjs.LoadQueue.prototype
    rJD=b2d.RevoluteJointDef.prototype
    rJ=b2d.RevoluteJoint.prototype
    st= s=  cjs.Stage.prototype
    sS = ss = cjs.SpriteSheet.prototype
    sSB=      cjs.SpriteSheetBuilder.prototype
    sp=s=cjs.Sprite.prototype
    tl= cjs.Timeline.prototype
    t=cjs.Text.prototype
    tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
    tw = cjs.Tween.prototype
    v=b2d.Common.Math.b2Vec2.prototype
    w=b2d.World.prototype
    wJD=b2d.Joints.b2WeldJointDef
    wJ=b2d.Joints.b2WeldJoint
    x=  ctx=  xx=CanvasRenderingContext2D.prototype
    xGr= CanvasGradient.prototype
}
b2d.mini=function(){
    iF=b2d.iF;
    iB=b2d.iB;
    iP=b2d.iGP
    pD=function(){return new PolyDefault()}
}
shortcuts=function(){


    b2d.Fixture= b2d.Dynamics.b2Fixture
//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs
    b2d.cn= b2d.controls={}
    b2d.pollute=function(){

        b2Vec2 = Box2D.Common.Math.b2Vec2
        b2AABB = Box2D.Collision.b2AABB
        b2BodyDef = Box2D.Dynamics.b2BodyDef
        b2Body = Box2D.Dynamics.b2Body
        b2FixtureDef = Box2D.Dynamics.b2FixtureDef
        b2Fixture = Box2D.Dynamics.b2Fixture
        b2World = Box2D.Dynamics.b2World
        b2MassData = Box2D.Collision.Shapes.b2MassData
        b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
        b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
        b2DebugDraw = Box2D.Dynamics.b2DebugDraw
        b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
        b2Shape = Box2D.Collision.Shapes.b2Shape
        b2Joint = Box2D.Dynamics.Joints.b2Joint
        b2Settings = Box2D.Common.b2Settings



    }
    b2B =b2Body= b2d.Dynamics.b2Body
    sB = b2Body.b2_staticBody
    dB = b2Body.b2_dynamicBody
    b2d.Joints = BXJ=b2d.Dynamics.Joints
    b2d.bodyDef = b2BodyDef  =b2d.Dynamics.b2BodyDef
    b2FixtureDef  = b2d.Dynamics.b2FixtureDef
    b2d.fixture = b2Fixture   =b2d.Dynamics.b2Fixture
    b2d.World = b2World   =b2d.Dynamics.b2World
    b2d.DebugDraw = b2DebugDraw   =b2d.Dynamics.b2DebugDraw
    shB = b2d.DebugDraw.e_shapeBit
    jB = b2d.DebugDraw.e_jointBit
    b2d.joint = bJ =  b2d.Joints.b2Joint
    b2d.jointDef = bJD = b2d.Joints.b2JointDef
    b2d.distanceJoint =bDJ =b2d.Joints.b2DistanceJoint
    b2d.mouseJointDef = b2MouseJointDef=b2d.Dynamics.Joints.b2MouseJointDef
    b2d.massData = b2MassData =b2d.Collision.Shapes.b2MassData
    b2d.AABB = b2AABB=b2d.Collision.b2AABB
    b2d.Shapes = b2d.Collision.Shapes //BXS=
    b2d.PolygonShape = b2PolygonShape= b2d.Shapes.b2PolygonShape
    b2d.CircleShape = b2CircleShape= b2d.Shapes.b2CircleShape
    b2d.Segment = b2d.Collision.b2Segment
    b2d.Collision.b2Simplex
    b2d.Collision.b2Bound
    b2d.Collision.b2AABB
    b2d.Collision.b2BoundValues
    b2d.Collision.b2ContactID
    b2d.Collision.b2ContactPoint
    b2d.Collision.b2Distance
    b2d.Collision.b2DistanceInput
    b2d.Collision.b2DistanceOutput
    b2d.Collision.b2DistanceProxy
    b2d.Collision.b2DynamicTree
    b2d.Collision.b2DynamicTreeNode
    b2d.Collision.b2DynamicTreePair
    b2d.Collision.b2RayCastInput
    b2d.Collision.b2RayCastOutput
    b2d.ControllerEdge= b2d.Dynamics.Controllers.b2ControllerEdge
    b2d.Controllers = b2d.Dynamics.Controllers
    b2d.Math = b2d.Common.Math
    b2d.Mat22 = b2d.Math.b2Mat22
    b2d.Mat33 = b2d.Math.b2Mat33
    b2d.FixtureDef = b2d.Dynamics.b2FixtureDef
    b2d.PrismaticJointDef=  b2d.Joints.b2PrismaticJointDef
    b2d.RevoluteJointDef=  b2d.Joints.b2RevoluteJointDef
    b2d.RevoluteJoint=b2d.Joints.b2RevoluteJoint
    b2d.Body = b2d.Dynamics.b2Body
    b2d.Fixture = b2d.Dynamics.b2Fixture
    b2d.ConstantAccelController= b2d.Dynamics.Controllers.b2ConstantAccelController
    b2d.BuoyancyController=new b2d.Dynamics.Controllers.b2BuoyancyController
    b2d.Fixture = b2d.Dynamics.b2Fixture
    b2d.FixtureDef= b2d.Dynamics.b2FixtureDef


};shortcuts()
b2d.p()
vecs=function(){
    v.m=  v.mult = function (num) {
        num = N(num) ? num : 30
        var v = _.clone(this)
        v.Multiply(num)
        return v
    }
    v.d= v.div = function (num) {
        num = N(num) ? num : 30
        return this.mult(1 / num)
    }
    v.add= v.a=function(){var v=this,g=G(arguments),v1
        if(g[2]){
            return _.m(g,function(g){return v.add(g)})
        }

        v1=g.u?V(1,1): V(g.f,g[1])

        return V(
            v.x+ v1.x,
            v.y+ v1.y
        )

    }
    ADD=function(){W().P()


        b=w.brick().C('r')

        p=M.p(b)

        //v=p.vs()

        //p.reg(b)


        w.S(100, 0).pol('z',  M.p(b) )



        $.in(function(){
            // w.S(0,0).pol('y',v)
        })

        //v1= v.add(400,500)



    }
    v.A=function(){var v=this,g=G(arguments),v1

        if( A(g[0]) && U(g[1]) ){
            _.e(g, function(g){
                v1=V(g)
                v.add(v1.x, v1.y)
            })}
        else {
            v1=V(g)
            v.add(v1.x, v1.y)}
    }
    /*
     b2d.add=function(vs,p){

     return _.m(vs, function(v){

     return v.add(p)

     })
     }*/
    v.s=  v.sub = function(){var v=this,g=G(arguments),
        o=V(g[0],g[1])
        o.x=N(o.x,0)
        o.y=N(o.y,0)
        return V(v.x-o.x,v.y-o.y)
    }
    v.tF=v.f=   v.dec = v.toFixed = function(n){var v=this
        n=N(n,1)
        return V(
            Number(v.x.toFixed(n)),
            Number(v.y.toFixed(n))
        )
    }
    v.r=   v.rot=function(rot){var x=this.x, y=this.y,
        rot=Math.toRadians(rot),
        cos=Math.cos, sin=Math.sin
        return V(
            x*cos(rot)-y*sin(rot),
            x*sin(rot)+y*cos(rot)
        ).dec(3)}
    V=function(x,y,x2,y2){var g=G(arguments),

        x=g[0],y=g[1],
        x2=g[2],y2=g[3],
        v

        if(A(x)){
            y2=x[3]
            x2=x[2]
            y=x[1]
            x=x[0]
        }

        if(N(y2)){
            x = (x-x2)/2
            y = (y-y2)/2
        } //for dist difs?



        else if(O(x)){

            if(b2d.isFixt(O(x))){x=x.B()}
            y= F(x.Y)? x.Y() : x.y
            x= F(x.X)? x.X() : x.x
        }

        x = N(x,0)

        y = N(y,x)


        v = new b2d.Common.Math.b2Vec2(x, y)
        if(g.n||g.d){ v=v.d() }
        if(g.p||g.m){ v=v.m() }
        return v
    }

    b2d.mult = function(v){return V(v).mult()}
    b2d.div = function(v){return V(v).div()}
    b2d.mat22=function(v1,v2){
        var m = new b2d.Mat22()
        m.SetVV(v1,v2)
        return m}


};vecs()
b2d.tf=function(v1,v2,v3){
    if(U(v1)){
        return new b2d.Math.b2Transform()
    }
    if(A(v1)){
        return b2d.tf(
            V(v1[0],v1[1]),
            V(v1[2],v1[3]),
            V(v1[4],v1[5]))}
    var tf= new b2d.Math.b2Transform(v1, b2d.mat22(v2,v3))
    return tf}
cv = el = $.fn
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




b2d.grad=function(o){o=o||{}
    o.c1 = oO('c',o.c1||'z')
    o.c2 = oO('c',o.c2||'w')
    o.s1 = N(o.s1)
    o.s2 = N(o.s2, 1)
    o.x1 = N(o.x1)
    o.y1 = N(o.y1)
    return o
}

b.W= function(){return this.GetWorld()}
f.W= function(){return this.B().W()}
w.gB = function(){  return this.GetGroundBody()  }
wak=function(){

    bD.act = bD.setActive = function (isActive) {
        this.active = isActive ? true : false
        return this
    }

    bD.sleepy = bD.aS = function (canSleep) {
        this.allowSleep = canSleep ? true : false
        return this
    }

    b.wake = b.wakeUp=function(){
        this.SetAwake(true); return this}

    b.awake= function(){
        var g=G(arguments)
        this.SetAwake(g.n? false:true)
        return this}

    b.sleep=function(){
        this.SetAwake(false); return this}

};wak()
w.G=function(x, y){var w=this,
    v, currG = w.GetGravity()
    if(U(x)){return  currG}
    if(N(x)){v=N(y)? V(x,y): V(0,x)}
    else if(x=='flip'){
        v =V( -currG.x, -currG.y)}
    w.SetGravity(v)
    return w}
v.tA=function(){
    return [this.x, this.y]
}
/*

 b.aI=function(sc){var b=this;
 b.i(b.v().m(N(sc,100))
 return b}
 //ApplyLinearImpulse(forceDirection, body->GetPosition(), true);

 */
b.I= function me(i, v, v2){ var b=this, g=G(arguments),o
    //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
    if(g.A){return b.I.apply(b,g.f)}
    o= N(g.s)?{i:V(g.f, g.s),v: g.t} :{i: g.f,v: g.s}
    o.i=  o.i || b.v().d(40)
    o.v=  o.v || b.wC()
    b.ApplyImpulse(o.i,  o.v.div())
    return b
}
b.wC=   function(){var b=this,w=b.W(),g=G(arguments)
    //gives {x,y}, but of its CENTER-OF-MASS
    if(g.p){return b.XY(w.hW, w.hH) }
    return b.GetWorldCenter().m()
}
b.lC=   function(){var b=this,w=b.W(),g=G(arguments)
    //gives {x,y}, but of its CENTER-OF-MASS
    if(g.p){return b.XY(w.hW, w.hH) }
    return b.GetLocalCenter().m()
}
b.F=  function(){
    //apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
    var b=this, g=G(arguments),o
    o= N(g[1])? {f:V(g[0],g[1]), wP:g[2]  }
        : {f:V(g[0]), wP:g[1] }
    o.wP=o.wP||b.wC()
    b.ApplyForce(o.f, o.wP)
    if(g.p){cjs.t(function(){  b.ApplyForce(o.f, o.wP) })}
    return b
}
b.mass = function(m){
    if( U(m) ){  return ( this.GetMass() * 900 ) / 100 }
}
bD.inertia = function (inertia) {
    if (U(inertia)) { return this.insertiaScale }
    this.insertiaScale = inertia;
    return this
}
w.n= w.count = w.getBodyCount = w.bC = w.gBC=function(){
    return this.GetBodyCount() }
b.n=  b.num = b.count = function () {
    return this.m_fixtureCount
}
b.N=  b.next =  b.gN =function(){ return  this.GetNext()   }
f.N=  f.next=function(){return this.GetNext()}
bD.bul = bD.bull = bD.fR = function (iBu) {var bD=this
    if (U(iBu)) {
        return bD.bullet
    }
    bD.bullet = iBu;
    return bD}
b.tf =b.transform=function(tf){var b=this
    if(U(tf)){return b.GetTransform() }
    b.SetTransform(tf)
    return b}
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
pos=function(){

    b.X=function(x){var g=G(arguments),pos=this.XY()
        if(U(x=g[0])){return pos.x}
        this.XY($.update(pos.x,x,g),pos.y)
        return this}

    b.Y=function(y){var b=this,
        g=G(arguments),
        pos=b.XY()

        if(g.u){return pos.y}

        this.XY(pos.x,
            $.update(pos.y,y,g))
        return this
    }

    b.XY=function(x,y){var b=this,g=G(arguments),
        newPos,pos
        if(x==='*'){x =R(10) }
        if(y==='*'){y =R(10)   }

        if(g.u){
            pos = b.GetPosition()

            return pos.m().tF(0)

        } //used to parseInt.. necessary?

        if(b2d.iB(x)){
            y=x.Y()
            x=x.X()
        }

        y= N(y)?y:x

        newPos= V( x/30, y/30 )
        this.SetPosition(newPos)
        return this
    }

    f.cen=  f.mid= f.cent=f.center=function(){
        //center point of its BOUNDING BOX
        var f=this,b= f.B(),w= b.W(), g=G(arguments),
            bd=f.GetAABB(),
            v=M.lC(bd.lowerBound, bd.upperBound).mult()
        if(g.p){w.dot(v)}
        return  v
    }
    w.cen=w.cent=function(){
        var w=this,g=G(arguments),
            v=V(w.s.W()/2, w.s.H()/2)
        if(g.p){w.dot(v)}
        return v}

    b.mid=function(){var b=this,w= b.W()
        return   b.XY(w.w/2, w.h/2)
    }



    f.pX=function(){return this.pos().x}
    f.pY=function(){return this.pos().y}

    w.left=function(n){var w=this;n=N(n,4)//w.horiz=
        w.e(function(b){b.X(n,'-')})}
    w.up=function(n){var w=this;n = N(n,4)//w.vert=
        w.e(function(b){b.Y(n,'-')})}

};pos()
vel=function(){


    bD.lV = function (v) {var bD=this
        if(U(v)){return pD.linearVelocity}
        pD.linearVelocity = v
        return pD}


    bD.aV =   function (vel) {
        if (U(a)) {
            return this.angularVelocity
        }


        this.angularVelocity = vel
        return this}

    b.aV=b.angVel= function(vel){
        if(U(vel)){return this.GetAngularVelocity() }
        this.SetAngularVelocity(vel)
        return this
    }


    b.lV= function(){var b=this,g=G(arguments),
        v=b.GetLinearVelocity(), o,lV
        // can pass in V | x,y
        // or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
        //(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
        if(g.u){return v}
        lV=U(g[1])?V(g[0],v.y):V(g[0],g[1])
        b.SetLinearVelocity( lV )
        return b.wakeUp()
    }

    f.lV=function(){var f=this,
        b=f.B(),
        g=G(arguments)

        b.lV.apply(b, g)

        return f
    }

    b.vX=function(x){var b=this,g=G(arguments),
        v= b.lV()
        if(g.u){return v.x}
        b.lV(x, v.y)
        return b}
    b.vY=function(y){var b=this
        if(U(y)){return b.lV().y}
        return b.lV(b.lV().x,y)}

};vel()
damp=function(){


    bD.lD = function (dm) {var bD=this
        if (U(dm)) {return bD.linearDamping}
        bD.linearDamping = dm
        return bD}

    bD.aD =   function (damp) {
        if (U(damp)) {
            return this.angularDamping
        }
        this.angularDamping = damp;
        return this
    }



    b.lD = b.linDamp=  function(damp){
        if(U(damp)){return this.GetLinearDamping()}
        this.SetLinearDamping(damp)
        return this}
    b.aD= b.angDamp=function(){
        var b=this,g=G(arguments),
            d=g[0]
        if(U(d)){return b.GetAngularDamping()}
        if(d=='++'){d=10000}
        b.SetAngularDamping(d)
        return b
    }
    b.damp=function(l,a){
        l=N(l)?l:1000
        a=N(a)?a:l
        this.lD(l).aD(a)
        return this}
};damp()
rot=function(){
    bD.rt= bD.rot = bD.ang = function (ang) {
        //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
        if (U(ang)) {
            return d.angle
        }
        this.angle = ang;
        return this
    }
    bD.fixedRot = bD.fR = function (isFixed) {
        if (U(isFixed)) {
            return this.fixedRotation
        }
        this.fixedRotation = isFixed;
        return this
    }
    b.rt=b.rot =function(angle,ms){var b=this,g=G(arguments),r=g[0],ms=g[1],
        a=Math.toDegrees(b.GetAngle()) //currAng
        if(U(r)){return a}
        if(N(ms)){b.stop= I(function(){b.rot(r,'+')}, ms)}
        else {b.SetAngle(M.toRadians(g.p?a+r:g.n?a-r:g.m?a*r:g.d?a/r:r))}
        return b}
    b.fixedRot= p.sFR= p.fR=function(bool){
        this.SetFixedRotation(bool? true: false)
        return this}
    b.fR=b.fixRot=function(){ return this.fixedRot(true) }
    b.FR=function(){ return this.fixedRot(false) }
    f.rot=function(rot, g){ return this.B().rot(rot, g) }
};rot()
b2d.iV=   b2d.isV= function(v){if(v){return v.constructor.name == "b2Vec2"}}
b2d.iH=   b2d.isShape = function (h) {var typ
    if (O(h)) {

        typ = h.constructor.name
        return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")}}
b2d.iBD=  b2d.isBDef = function (bd) {return O(bd) && F(bd.b2BodyDef)}
b2d.iB=   b2d.isB=b2d.isBody = isBody=function(b){if(O(b)){return b.constructor.name=='b2Body'}}
b2d.iFD=  b2d.isFD=b2d.isFixtDef=function(fD){return O(fD) && fD.b2FixtureDef}
b2d.iF=   b2d.isFixt=function(f){
    if(!f){return false}
    return f.constructor.name=="b2Fixture"}
b.iD=    function () {return this.GetType() == 2}
b.iK=    function () {return this.GetType() == 1}
b.iS=   function () {return this.GetType() == 0}
f.iS=  function(){return this.B().iS()}
f.iD=   function(){return this.B().iD()}
f.iK=   function(){return this.B().iK()}
b2d.tB = b2d.toBody=function(b){
    return b2d.iB(b)?b:
        b2d.iF(b)?b.B():
            0}
bD.T = bD.typ = bD.kind = function (type) {
    if (U(type)) {
        return this.type
    }
    this.type = type
    return this
}
bD.dyn = function () {return this.T(2)}
bD.stat = function () {return this.T(0)}
bD.kin = function () {return this.T(1)}
b.type = p.T = p.ty = p.t = function (a) {var b=this
    if (U(a)) {return b.GetType()}
    b.SetType(a)
    return b}
f.isBType = f.isType = function(t){var f=this
    if(t){return f.bType()==t}}
f.bType=function(){
    return this.B().GetType()
}
b.dyn = function (resumeVel) {var b=this
    b.type(2)
    if (resumeVel == b && O(b._linVel)) {b.lV(b._linVel)}
    b._linVel = null
    return b
}
f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}
b.stat = function () {var b=this,
    v = b.lV()
//huh??? oh can get/set type of body
    b._linVel = V(v.x, v.y)
    b.type(0)
    return b

}
f.stat=function(){var b=this.B(); b.stat.apply(b,arguments); return this}
b.kin = function () {return this.type(1)}
f.kin=function(){var b=this.B(); b.kin.apply(b, arguments); return this}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
fric=function(){


    f.fr=f.f=  f.fric=function(fric){if(U(fric)){return this.GetFriction()}
        this.SetFriction(fric);return this}
    fD.fr= fD.f= fD.frc = fD.fric = function (f) {var fD=this
        if (U(f)) {
            return this.friction
        }
        fD.friction = f
        return fD
    }
    b.fr=  b.fric = function (fr) {var b=this
        if(U(fr)){return b.f().GetFriction()}
        b.fs(function(f){
            f.SetFriction(fr)
        })
        return b
    }


};fric()
den=function(){f.d=  f.den=function(den){if(U(den)){return this.GetDensity()}
    this.SetDensity(den)
    this.body().ResetMassData()
    return this}

    fD.d= fD.den =  function (d) {var fD=this
        if (U(d)) {return fD.density}
        fD.density=d; return fD}

    b.DFR = b.DFB = function (d, f, r) {
        return this.den(d).fric(f).rest(r)
    }

    b.DBF = function (d, r, f) {
        var b = this
        b.den(d)

        if (N(r)) {

            this.rest(r)
        }

        if (N(f)) {
            b.fric(f)
        }

        return b
    }


    b.d=  b.den=function(d){var b=this

        if (U(d)) {
            return b.f().GetDensity()
        }

        b.fs(function(f){
            f.SetDensity(d)
        })

        b.ResetMassData()
        return b
    }



};den()
sen=function(){

    fD.sen= fD.sensor = fD.iS = function (isSensor) {
        if (U(isSensor)) {
            return this.isSensor
        }
        this.isSensor = isSensor ? true : false
        return this
    }

    f.sen =  function(s){var f=this
        if(U(s)){return f.IsSensor()}
        if(s=='/'){s= f.SetSensor(!f.IsSensor() )}
        else{f.SetSensor( s?true:false)}
        return f
    }
    b.sen=function(s){var b=this
        b.fs(function(f){
            f.sen(s)
        })
        return b}

};sen()
rest=function(){

    b.r=  b.bo=b.rest=function(r){var b=this

        if (U(r)) {
            return b.f().GetRestitution()
        }

        b.fs(function (f) {
            f.SetRestitution(r)
        })

        return b


    }

    f.r=  f.bo=  f.rest=  function(rest){if(U(rest)){return this.GetRestitution()}
        this.SetRestitution(rest);return this}

    fD.r=  fD.bo= fD.rst=fD.rest=function(r){var fD=this
        if(U(r)){return fD.restitution}
        fD.restitution=r; return fD
    }


};rest()
b2d.Common.Math.b2Transform.prototype.toArr = function () {

    var tf = this,
        pos = tf.position,
        R = tf.R,
        col1 = R.col1,
        col2 = R.col2


    return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
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
bShape=function(){
    fD.H =   function (h) {
        if (U(h)) {return this.shape}
        this.shape = h
        return this}
    f.rad = function(){return this.H().m_radius*30}
    f.H=  function(h){ //should let user specify dimensions of shape, // not just have to pass formed shape in
        if(U(h)) {return this.GetShape()}
        this.m_shape = h
        // it DOES WORK! // but is this much different than // just replacing the fixt?
        return this}
    b.rad = function(){return this.f().rad()}
    b.H = function () {return this.f().H()}

    f.iC= function(){ return this.H() && this.H().m_type == 0 }
    f.hT= f.hType=function(){return this.H().m_type}
    f.pos = function(){// for circs
        return V(
            this.H().m_p.x * 30,
            this.H().m_p.y * 30
        )
    }
};bShape()
b2d.cir=  function(r,x,y, d){//hmm.. fixt doesnt have a rel loc.. its shape does
    //what if u want to change 'shape' of shape, but keep its rel loc?
    var g= G(arguments),
        x=_.tN(g[1]), y=_.tN(g[2]),
        r= _.tN(g[0],50),
        d=_.tN(d,1),
        f,
        h



    f=new b2d.FixtureDef

    h = new b2d.CircleShape(r/30)

    h.SetLocalPosition(V(x,y).div())


    f.shape = h





    f.d(d)
    if(g.n){f.isSensor=true}
    return f

}
fD.vrt = fD.verts = function () {

    var shape = this.shape,

        verts = shape.m_vertices,

        verts = [
            verts[0].mult(),
            verts[1].mult(),
            verts[2].mult(),
            verts[3].mult()]

    return $l(verts)
}
fD.box = fD.sAB = function (a, b, p, A) {
    if (!p) {
        this.shape.SetAsBox(a / 30, b / 30)
    }
    else {
        this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
    }
    return this
}
b2d.sD= b2d.S=b2d.stat=function(x,y){return b2d.bD(x,y).stat()}
b2d.kD= function(x,y){return b2d.bD(x,y).T(1)}
b2d.f= function(h){var g=G(arguments),
    f=new b2d.FixtureDef,
    h  // simply makes one fixt,
    // tries to set its shape
    // and returns it
    //you can pass in a pre-made shape
    //or..
    // if you pass it an array, it makes a polyH from it
    // from verts/arr (confirmed)
    // or if you passed in anything (number(s))
    // it makes a circle or poly shape, depending on how many numbers you passed

    if(b2d.isShape(g[0])){h=g[0]}

    /*
     else {
     h =   A(g[0])? b2d.pH.apply(b2d, g)
     :(g.l==1|| g.l==3)? b2d.cH.apply(b2d, g)
     :b2d.pH.apply(b2d, g)}
     */

    f.shape = h
    return f
}
w.bs=  w.bL= w.getBodyList=function(){
    //can be result of w.b if g.u
    return this.GetBodyList()}
b.fs=b.e=function(fn){var b=this,
    fl=b.f(),
    g=G(arguments),
    fn = g[0],
    arr = []

    while (fl) { arr.push(fl); fl = fl.GetNext() }

    if(N(fn)){return arr[fn]}
    if(F(fn)){ _.e(arr, fn); return b }

    if(b2d.iB(fn)){

        b.fs(function(f){
            fn.pol(f)
        })

        return fn
    }

    return arr

    /*
     if (g.p) {//order by biggest
     arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
     if (g.n) {//order by smallest
     arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
     */

}
w.S=function(){var w=this, g=G(arguments),
    bD, b, fs, k, o//,D=b2d.D
    if(S(_.l(g))){
        k=g.pop() }
    if (N(g[0])){

        o= {
            b:V(g[0],g[1]),
            f:_.r(g,2)
        }
    }
    else {
        o= {b:V(g[0]),f:_.r(g)}
    }
    o.b = b2d.S(o.b)
    if(k){o.k=k}
    b = w.CreateBody(o.b)
    //array of multiple fixtures
    if(A(g[0]) && U(g[1])){
        alert('see w.D')
        $l('mult')
        _.e(o.f, function(f){if(g.n){b.f(f, '-')} else {b.f(f)}})
        if(o.k){b.K(o.k)}
        return b}
    if(g.n){o.f.push('-')}
    b.f.apply(b,o.f)
    if(o.k){b.K(o.k)}
    return b
}
f.B= f.body=function(){return this.GetBody()}
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
    return b}
w.polyCirc=function(x, y, r, sides){var w=this,
    b=w.D(x,y)

    b.pol( {v:b2d.polyCirc(r, sides)})

    return b
}
w.boxes = function () {var w = this,g=G(arguments)
    _.e(g, function (g) {w.box.apply(w,g)})
    return w}
w.brcks= w.boxesStat = function () {var w = this,g=G(arguments)
    _.e(g, function (g) {w.brick.apply(w, g)})
    return w}
rand=function() {


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


};rand()
kill=function(){
    w.xD=function(){

        w.e(function(b){

            if(b.iD()){  b.xx()}

        })
    }
    w.clr = w.wXx = function(){var w=this
        w.e(function(b){
            if(b!= w.right && b!= w.left&& b!= w.roof&& b!= w.floor)
                b.xx()
        })
        return w
    }
    w.xB=   w.Xx=   w.Xb=  function(b){var w=this

        if(U(b)){
            w.e(function(b){w.xB(b)})
        }
        else {
            w.DestroyBody(b)
        }

        return w
    }
    b.xx = b.kill =  b.destroy = function(){var b=this,

        v= b.pos()


        if(b.sprite){b.sprite.rm()}

        if(b.sp()){
            b.sp().rm()
        }

        b.fs(function(f){
            f.removeSprites()
            //if(f.sprite){f.sprite.remove()}

        })

        b.sprite=null
        b.SetActive(false)
        b.W().DestroyBody(b)

        return v
    }
    b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear =    function (f) {
        if(f){this.DestroyFixture(f)}
        else {this.fs(
            function (f) {this.xF(f)  }
        )}
        return this
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
};kill()
edgeB=function(){



    b2d.edg= function(x1,y1, x2,y2){
        var fd = b2d.pol()
        fd.shape.SetAsEdge(V(x1,y1,'-') , V(x2, y2,'-') )
        return fd
    }

    w.edgD = function(x1,y1,x2,y2){var w=this,
        l = w.l(x1,y1,x2,y2),
        e = w.D(0,0,b2d.edg(x1,y1,x2,y2)).d(1)
        e.bS(l) //bS2
        return e}
    w.edgs = function(){
        var w=this,
            g=G(arguments),
            X=0,
            Y= 0,
            x =w.D(X,Y, 'z', [[100,100, 400,400, '-']]),
            x2 =w.D(2000, 1200, 'z', [[400,400,  '-']])
        if(A(g[0])){
            //  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
            //  w.weld(x,b)
            // X=g[0][0]
            // Y=g[0][1]
        }
        _.e(g, function(e){
            if(A(e)){e = w.edgD.apply(w,e)}
            w.wed(e,x)})
        //  w.weld(x2  , x)
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


        return x}




};edgeB()
recs=function(){


    b2d.AHx=  b2d.AShapex= function(pam, p2){//dep .. use polyH
        var ag,arr,h
        ag=(p2)? arguments: pam
        arr = _.m(ag, function(v){return V(v).div()})
        h = b2d.pH()
        h.arr( arr )
        return h
    }

    pH.setAsVec=function(v, sc){var pH=this //used by SepLib
        pH.SetAsVector(_.m(v,function(v){return V(v).div(N(sc,30))}))
        return pH}
    b.ap=function(met,g){var b=this;return   b[met].apply(b,g)}
    w.dance=function(){var w=this
        w.e(function(b){if(b.iD()){b.thr()}})//w.eD
        return w}
    b2d.oDef = function(o){o=o||{}
        o.x =  N(o.x,0)
        o.y =  N(o.y,0)
        o.a =  N(o.a,0)
        o.w =  N(o.w, 50)
        o.h =  N(o.h, 50)
        o.r =  N(o.r, 50)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        return o}
    pH.vs= pH.vertsx= function(){var pH=this
        return _.m(pH.m_vertices, function(v){return [v.x*30, v.y*30]})
    }
    pH.arr=function(v){var p=this
        v=_.m(v,function(v){return V(v).d()})
        p.SetAsArray(v, v.length)
        return p}
    pH._box=function(){var pH=this
        pH.SetAsOrientedBox.apply(this,arguments)
        return pH}
    pH.box=function(){var pH=this, g=G(arguments),
        o=g.O?g.f:
            _.x({w:g.f,h:g.s}, O(g.t)?
            {x:V(g.t).x, y:V(g.t).y, a:g[3]}:
            {x:g.t, y:g[3], a:g[4]})
        o.x =  N(o.x,0)
        o.y =  N(o.y,0)
        o.a =  N(o.a,0)
        o.w =  N(o.w, 50)
        o.h =  N(o.h, 50)
        return pH._box(o.w/60,o.h/60,V(o.x,o.y,'-'),M.tR(o.a))}
    b2d.fD=function(h){var g=G(arguments),
        fD= new b2d.FixtureDef()
        if(g.n){f.isSensor = true}
        if(h){fD.shape = h}
        return fD}
    b2d.pH= function(W,H,x,y,a){var g=G(arguments),
        p=new b2d.PolygonShape()
//| 50,200[[,200,60,45
//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)

        if(g.O){

        }

        if(g.N_){p.box(g.f, g.s, g.t, g[3], g[4])}
        else if(g.OO_){$a(p, 'arr', g)}
        return p
    }

//makes a fixtDef with a polyShape
    b2d.pol = function(){
        return b2d.fD($a(b2d.pH, arguments)).d(1).fr(.2).r(.2)
    }
    b2d.rec= function(){var g = G(arguments), r, fD, o, v,p=b2d.pH()
        if(g.OO_){p.arr(g)}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!

        else {
            o=g.O?g.f:
            {w:g.f,h:g.s,x:g.t,y:g[3],a:g[4],d:g[5]}
            p.box(o)}

        fD=b2d.fD(p).d(N(o.d,.5))
        if (g.n){fD.isSensor = true}

        return fD

        /*
         //will set cols unless you pass in 0
         if(o.c==0){o.c=null}
         if(o.c==00){o.c=null;o.C=null}
         if(o.c=='*'){o.c=$r()}
         if(o.c=='**'){o.c=$r();o.C=$r()}
         o.c =o.c||'z'
         o.C =o.C||'w'
         o.l = _.tN(o.l,4)
         o.c1 = o.c1||'z'
         o.c2 = o.c2||'w'
         o.s1= _.tN(o.s1)
         o.s2= _.tN(o.s2,1)
         //
         o.x1 = _.tN(o.x1)
         o.y1 = _.tN(o.y1)
         o.x2 =_.tN(o.x2);
         o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
         o.r1=_.tN(o.r1)
         o.r2=_.tN(o.r2,200)
         // o.i image
         //o.k kind
         // o.p  layer position


         //o.bm//o.bM
         //o.g gradient

         //o.m mass
         //o.t type
         // o.v = o.v || [] //verts
         //o.X
         //o.z clr
         */
    }



    //b.rec -> graphics





    b._f= function(f,c){var b=this,g=G(arguments)
        if(g.u){return b.GetFixtureList()}
        f=b.CreateFixture(f)
        if(c){f.C(c)}
        return f}
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


    dD_Defs=function(){
        bD.XY= bD.p = bD.ps = bD.xy= function (x, y) {var bD=this, g = G(arguments),p
            if(g.u){return bD.position.m()}
            p=V(g.f, g.s, '-')
            bD.position.Set(p.x,p.y)
            return bD}
        bD.X = function (x) {var bD=this, p = bD.XY()
            if(U(x)){return p.x}
            return bD.XY(x,p.y)}
        bD.Y = function (y) {var bD=this, p = bD.XY()
            if (U(y)) {return p.y}
            return bD.XY(p.x, y)}
        b2d.bD= function(x,y){var v=V(x,y),
            bD = new b2BodyDef()
            return bD.XY(N(v.x,100),N(v.y,100))}
    };dD_Defs()
    b2d.dD= b2d.D= b2d.dyn=function(x,y){
        var v=V(x,y)
        return b2d.bD(v.x, v.y).dyn()
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
    }



    //w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}


    df.rec=  function (o){
        o.al=N(o.al,1)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        o.x =  N(o.x,0)
        o.y =  N(o.y,0)
        o.a =  N(o.a,0)
        o.w=N(o.w,50)
        o.h=N(o.h,50)
        return o}




    wowOld=function(){
        pH.arr=  function(){var pH=this
            var v = b2d.verts.apply(null, arguments)

            pH.SetAsArray(v, v.length)

            return pH

        }
//make polyShape (by box or arr) for a fD
        b2d.pH=  b2d.polyH=function me(W,H,x,y,a){var g=G(arguments),
            p=new b2d.PolygonShape()
            if(g.N_){//| 50,200[[,200,60,45
                p.box(g.f,g.s,g.t,g[3],g[4])}

            else if(g.O_){//| [20,300],..

                $a(p, 'arr', g)

                //-> g.a(p,'arr')
                // -> g.a(p.arr)
            }
            return p
        }
        pH.set= function(){var pH=this, g=G(arguments)
            if(N(g[0])){
                pH.box(g[0],g[1],g[2],g[3],g[4])}
            else if(O(g[0])){
                pH.arr.apply(pH,g)}
            return pH
        }
    }

};recs()
