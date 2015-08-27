bD.bul = bD.bull = bD.fR = function (iBu) {var bD=this
    if (U(iBu)) {
        return bD.bullet
    }
    bD.bullet = iBu;
    return bD}
bD.inertia = function (inertia) {
    if (U(inertia)) { return this.insertiaScale }
    this.insertiaScale = inertia;
    return this
}
bD.T = bD.typ = bD.kind = function (type) {
    if (U(type)) {
        return this.type
    }
    this.type = type
    return this
}
bD.dyn = function () {
    return this.T(2)
}
bD.stat = function () {
    return this.T(0)
}
bD.kin = function () {
    return this.T(1)
}
b.n=  b.num = b.count = function () {
    return this.m_fixtureCount
}
b.N=  b.next =  b.gN =function(){ return  this.GetNext()   }
b.tf =b.transform=function(tf){var b=this
    if(U(tf)){return b.GetTransform() }
    b.SetTransform(tf)
    return b}
b._f= function(f,c){var b=this,g=G(arguments)
    if(g.u){return b.GetFixtureList()}
    f=b.CreateFixture(f)
    if(c){f.C(c)}
    return f}
b.iD=    function () {return this.GetType() == 2}
b.iK=    function () {return this.GetType() == 1}
b.iS=   function () {return this.GetType() == 0}
b.rad = function(){return this.f().rad()}
b.H = function () {return this.f().H()}
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
b.W= function(){return this.GetWorld()}
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
b.type = p.T = p.ty = p.t = function (a) {
    var b = this
    if (U(a)) {
        return b.GetType()
    }
    b.SetType(a)
    return b
}
b.dyn = function (resumeVel) {var b=this
    b.type(2)
    if (resumeVel == b && O(b._linVel)) {b.lV(b._linVel)}
    b._linVel = null
    return b
}
b.stat = function () {var b=this,
    v = b.lV()
//huh??? oh can get/set type of body
    b._linVel = V(v.x, v.y)
    b.type(0)
    return b

}
b.kin = function () {return this.type(1)}
b.ap=function(met,g){var b=this;return   b[met].apply(b,g)}
b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear =    function (f) {
    if(f){this.DestroyFixture(f)}
    else {this.fs(function (f) {this.xF(f)  })}
    return this
}
f.stat=function(){var b=this.B(); b.stat.apply(b,arguments); return this}
f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}
f.kin=function(){var b=this.B(); b.kin.apply(b, arguments); return this}
f.B= f.body=function(){return this.GetBody()}
f.W= function(){return this.B().W()}
f.N=  f.next=function(){return this.GetNext()}
f.iS=  function(){return this.B().iS()}
f.iD=   function(){return this.B().iD()}
f.iK=   function(){return this.B().iK()}
f.rad = function(){return this.H().m_radius*30}
f.H=  function(h){ //should let user specify dimensions of shape, // not just have to pass formed shape in
    if(U(h)) {return this.GetShape()}
    this.m_shape = h
    // it DOES WORK! // but is this much different than // just replacing the fixt?
    return this}
f.iC= function(){ return this.H() && this.H().m_type == 0 }
f.hT= f.hType=function(){return this.H().m_type}
f.pos = function(){// for circs
    return V(
        this.H().m_p.x * 30,
        this.H().m_p.y * 30
    )
}
f.isBType = f.isType = function(t){var f=this
    if(t){return f.bType()==t}}
f.bType=function(){return this.B().GetType()}
w.bs=  w.bL= w.getBodyList=function(){
    //can be result of w.b if g.u
    return this.GetBodyList()}
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
w.gB = function(){  return this.GetGroundBody()  }
w.G=function(x, y){var w=this,
    v, currG = w.GetGravity()
    if(U(x)){return  currG}
    if(N(x)){v=N(y)? V(x,y): V(0,x)}
    else if(x=='flip'){
        v =V( -currG.x, -currG.y)}
    w.SetGravity(v)
    return w}
w.xB=   w.Xx=   w.Xb=  function(b){var w=this
    if(U(b)){w.e(function(b){w.xB(b)})}
    else {w.DestroyBody(b)}
    return w
}
w.eEv = w.eachEvery = function (fn) {
    var w = this
    z(function () {
        w.e(fn)
    })
    return w
}
w.inEv = function (n1, n2, fn) {
    _.in(n1, function () {
        _.ev(n2, function () {
            fn()
        })
    })
}
w.evIn = function (n1, n2, fn) {
    _.ev(n1, function () {
        _.in(n2, function () {
            fn()
        })
    })
}
w.dbD = w.bug = w.debugDraw = function () {
    var w = this, g = G(arguments)


    b2d.dbD = b2d.debugDraw = function (sp, sc, flags, al, line) {

        var dd = new b2d.DebugDraw()

        //can pass in either canvas or context
        if ($.isCan(sp)) {
            sp = sp.ctx()
        }

        if (sp) {
            dd.sprite(sp)
        }
        if (sc) {
            dd.scale(sc)
        }
        if (flags) {
            dd.flags(flags)
        }

        dd.alpha(N(al, 0.5))

        // dd.line( N(line)? line :1 )
        // dd.SetLineThickness(1)
        return dd
    }
    // this.scale = dd.scale()
    w.SetDebugDraw(
        b2d.debugDraw.apply(null, g)
    )

    return w

}
w.step = function (time, a, b) {
    var w = this
    w.Step(time, N(a, 8), N(b, 3))
    return w

}
w.cF = w.clear = function () {
    var w = this
    w.ClearForces()
    return w
}
w.n= w.count = w.getBodyCount = w.bC = w.gBC=function(){
    return this.GetBodyCount() }
pH.vs = pH.vertsx = function () {
    var pH = this
    return _.m(pH.m_vertices, function (v) {
        return [v.x * 30, v.y * 30]
    })
}
pH.arr = function (v) {
    var p = this
    v = _.m(v, function (v) {
        return V(v).d()
    })
    p.SetAsArray(v, v.length)
    return p
}
pH._box = function () {
    var pH = this
    pH.SetAsOrientedBox.apply(this, arguments)
    return pH
}
pH.box = function () {
    var pH = this, g = G(arguments),
        o = g.O ? g.f :
            _.x({w: g.f, h: g.s}, O(g.t) ?
            {x: V(g.t).x, y: V(g.t).y, a: g[3]} :
            {x: g.t, y: g[3], a: g[4]})
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.a = N(o.a, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, 50)
    return pH._box(o.w / 60, o.h / 60, V(o.x, o.y, '-'), M.tR(o.a))
}
pH.setAsVec = function (v, sc) {
    var pH = this //used by SepLib
    pH.SetAsVector(_.m(v, function (v) {
        return V(v).div(N(sc, 30))
    }))
    return pH
}
b2d.Common.Math.b2Transform.prototype.toArr = function () {

    var tf = this,
        pos = tf.position,
        R = tf.R,
        col1 = R.col1,
        col2 = R.col2


    return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
}
b2d.edg= function(x1,y1, x2,y2){
    var fd = b2d.pol()
    fd.shape.SetAsEdge(V(x1,y1,'-') , V(x2, y2,'-') )
    return fd
}
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
b2d.dD= b2d.D= b2d.dyn=function(x,y){
    var v=V(x,y)
    return b2d.bD(v.x, v.y).dyn()
}
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
b2d.tB = b2d.toBody=function(b){
    return b2d.iB(b)?b:
        b2d.iF(b)?b.B():
            0}
fD.H =   function (h) {
    if (U(h)) {return this.shape}
    this.shape = h
    return this}
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