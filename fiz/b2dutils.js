b2d=b2=Box2D
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
cv = el = $.fn
b2d.p()
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
b2d.Common.Math.b2Transform.prototype.toArr = function () {

    var tf = this,
        pos = tf.position,
        R = tf.R,
        col1 = R.col1,
        col2 = R.col2


    return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
}
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
w.xD=function(){
    w.e(function(b){

        if(b.iD()){  b.xx()}

    })
}
w.xB=   w.Xx=   w.Xb=  function(b){var w=this
    if(U(b)){w.e(function(b){w.xB(b)})}
    else {w.DestroyBody(b)}
    return w
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
b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear =    function (f) {
    if(f){this.DestroyFixture(f)}
    else {this.fs(function (f) {this.xF(f)  })}
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
b2d.edg= function(x1,y1, x2,y2){
    var fd = b2d.pol()
    fd.shape.SetAsEdge(V(x1,y1,'-') , V(x2, y2,'-') )
    return fd
}
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