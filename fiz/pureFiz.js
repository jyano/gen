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
