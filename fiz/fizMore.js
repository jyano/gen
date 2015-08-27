


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
wowOld=function(){

    /*

     b.aI=function(sc){var b=this;
     b.i(b.v().m(N(sc,100))
     return b}
     //ApplyLinearImpulse(forceDirection, body->GetPosition(), true);

     */

//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}

    b2d.AHx=  b2d.AShapex= function(pam, p2){//dep .. use polyH
        var ag,arr,h
        ag=(p2)? arguments: pam
        arr = _.m(ag, function(v){return V(v).div()})
        h = b2d.pH()
        h.arr( arr )
        return h
    }

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
