b2d.p()

rJD.i=rJD.init=function(){var jd=this,g=G(arguments)
    //just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
    jd.Initialize.apply(jd, g)
    return jd
}

rJ.lm= function(){var j=this, g=G(arguments),
    a=g[0],b=g[1]
    if(a===true){j.EnableLimit(true); return}
    j.SetLimits(M.tR(a),M.tR(b))
    if(g.N){j.EnableLimit(true)}
    return j
}

rJ.mt=function(s,tor){var j=this,g=G(arguments)
    j.SetMotorSpeed(s)
    j.SetMaxMotorTorque(_.tN(tor, 100000))
    if(g.N){j.EnableMotor(true)}
    return j
}

rJ.sp=function(s){var j=this
    if(U(s)){return j.GetMotorSpeed()}
    j.SetMotorSpeed(s); return j
}

w._rJ=function(){var w=this,g=G(arguments), o,jd,j
    o= b2d.iB(g[0])?
    {a:g[0],b:g[1]}:
        g[0]

    jd=new b2d.RevoluteJointDef
    jd.bodyA= o.a
    jd.bodyB= o.b

    j=w.J(jd)
    return j
}


w.rJ=function(){var w=this,g=G(arguments),o, aC,bC,jd, b,v


    if(g.N_ || ( b2d.iB(g.f) && U(g.s) )  ){

        v= V(g.f, g.s)

        b= g.p? w.D(v.x, v.y,'y',10,10).d(1).r(.5):
            g.m? w.D(v.x, v.y, $r(), 50, 15):
                w.D(v.x, v.y, 'r', 4, 20).d(4).r(2)

        if(g.d){b.stat()}

        return b
    }


    if(g.p){ g.s.XY(g.f) }

    o=  b2d.iB(g.f)?  {a: g.f,  b: g.s}: g.f

    jd=new b2d.RevoluteJointDef

    jd.bodyA=o.a

    jd.bodyB=o.b

    if(g.m){jd.cl(true)}

    if(N(g[3])){
        jd.aV(g.t,g[3])
        if(N(g[5])){jd.bV(g[4],g[5])}
    }


    else if(O(g[3])){
        jd.aV(g[3])
        if(O(g[4])){jd.bV(g[4])}
    }

    else {

        aC=o.a.wC()
        bC=o.b.wC()

        xx=o.a.X() - o.a.wC().x
        yy=o.a.Y() - o.a.wC().y

        xx=bC.x-aC.x
        yy=bC.y-aC.y

        jd.aV(xx, yy)
    }

    return w.J(jd)
}




b.pin=function(){var b=this,w=b.W(), j,
    b1= w.S( b.X(), b.Y() )
    w.rJ(b1, b )
    return b
}


w.spinner=function(x,y,s,t){var g=G(arguments)
    x = N(g[0], 500)
    y = N(g[1], 200)
    s = N(g[2], 10)
    t = N(g[3], 100)
    if(g.n){s*=-1}
    w.rJ(
        dial= w.D(x, y,'r',200,40), rock= w.S(x, y,'b',10,10)
    ).mt(s, t)
    //<- rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}



w.perch = function(c){var w=this //specific structure, birdage in sky
    c=c||'t'
    w.S(200,50, c, 300,20) //top
    w.S(200,360, c, 300,20) //bottom
    w.S(60, 240, c, 20, 260) //left
    w.S(340, 320, c, 20, 100)//right
    return w}
w.seesaw=function(x,y){var w=this,
    anc = w.S(x,y, 'h', 60,60),
    lev = w.D(x,y, 'g', 300,20)
    w.rJ(  anc, lev ).lm(-30,30)
}
wh=function(wh,sp){var j
    j= w.rev(wh.fr(0).d(1), s)
    if(N(j)){j.mt(sp)}
    return j}
sus=function(x,y){return w.D(x,y,'b',90,30) }
w.car=function(x, y, sp1, sp2){var w=this,b
    s= w.D(x,y,'b',90,30)//.bS('me')
    sp1 = sp1||2;
    sp2 = sp2||sp1
    w.rJ( w.D(x-40, y+50,'o',30),s).mt( sp1)
    b= w.D(x+60, y+50)
    b.cir({c:'x', r:30,rf:1})
    w.rJ(b, s).mt(sp2)
    return s
}
w.car1=function(){var w=this, s=sus(150,150)
    wh( w.D(200,150,'r',30), 120)
    wh( w.D(100,150,'b',30), 150)
    return s}
w.roller=function () {var w=this,s=sus(250,150)
    a=w.D(300,150,'r',30)
    wh(a,6)

    // wh(w.D(200, 150, 'r', 30), -500)

    return s}
w.makeCar=function(){var w=this,s=sus(240,350)
    wh(w.D(300, 400, 'r', 30),  4)
    wh(w.D(200, 400, 'y', 30), 4)
    return s}
w.wh=function(){var w=this,g=G(arguments),wh,o
    o=O(g[0])? g[0]
        : {x:g[0],y:g[1],r:g[2],n:g[3]}
    o.r=N(o.r,40)
    o.c=o.c||'x'
    wh = w.D(o.x,o.y)
    wh.cir({c: o.c, r:o.r, C:'w',l:10, lf:1})
    return wh
}
w.pWh=function(){var w=this,g=G(arguments),wh,o
    o=O(g[0])? g[0]
        : {x:g[0],y:g[1],r:g[2],n:g[3]}
    o.r=N(o.r,40)
    o.n=N(o.n,15)
    o.c=o.c||'x'
    wh = b2d.pC(o.r,o.n)
    return w.D(o.x,o.y,o.c, [wh])
}
b.wheel=function(){var b=this,w= b.W(),g=G(arguments), o,
    j,wh
    o=O(g[0])? g[0]
        : {x:g[0], y:g[1]}//,r:g[2],n:g[3]}
    wh= w.wheel(600,300)
    j= w.rJ(wh, b,0,0, o.x, o.y)
    return j}
j.M=function(t){
    this.SetMaxMotorTorque(t)
    return this
}





function beta() {

//localAnchorA - the point in body A around which it will rotate
//localAnchorB - the point in body B around which it will rotate
//referenceAngle - an angle between bodies considered to be zero
// for the joint angle
//
    /*rev joint uses:
     wheels or rollers
     chains or swingbridges (using multiple revolute joints)
     rag-doll joints
     rotating doors, catapults, levers
     */
    /*
     jd.refAng=jd.rA=function(a){
     jd.referenceAngle= tRad(a); return this}
     jd.maxTorque=jd.mMT=function(a){
     this.maxMotorTorque=a
     return this}
     jd.lowAng= jd.lA = function(a){
     this.lowerAngle=tRad(a); return this}
     jd.upAng= jd.uA = function(a){this.upperAngle=tRad(a); return this}
     jd.rat = jd.r=function(a){this.ratio = a; return this}
     jd.axis = jd.lXA=function(a){ this.localAxisA=a; return this}
     jd.mot = jd.motor =  function(speed, torque, enable){
     this.speed(speed)
     this.maxTorque( N(torque)? torque : 100)
     if( enable != '-' ){
     this.enableMotor=true }
     return this }
     jd.limits = jd.lm = function( lowAng, upAng, enable ){
     this.lowAng( lowAng ).upAng( upAng )
     if( enable != '-' ){
     this.enableLimit = true}
     return this }
     */

    /*

     //revolute

     j.refAng = j.rA = function (a) {
     j.referenceAngle = tRad(a);
     return j
     }

     j.maxTorque = j.mMT = function (a) {
     j.maxMotorTorque = a
     return j
     }

     j.lowAng = j.lA = function (a) {
     j.lowerAngle = tRad(a);
     return j
     }

     j.upAng = j.uA = function (a) {
     j.upperAngle = tRad(a);
     return j
     }

     j.rat = j.r = function (a) {
     j.ratio = a;
     return j
     }
     j.axis = j.lXA = function (a) {
     j.localAxisA = a;
     return j
     }
     j.damp= function(a){if(U(a)){return this.GetDampingRatio()}
     this.SetDampingRatio(a)
     return this}
     // can change collideConnected dynamically?  if not i could replace the joint with a new one dynaically!!!!!
     // is it smart enough to know all its properties??? // it should be
     //motor


     j.maxSpeed=j.maxMotorSpeed=j.mMS=function(a){
     j.maxMotorSpeed=a
     return j}

     rev=function() {
     //motor rev
     j.mt = j.motor = j.enableMotor = j.eM = function (a) {
     j.EnableMotor(a ? true : false)
     return j
     }
     j.speed = j.motorSpeed = j.mS = function (speed) {
     if (U(speed)) {
     return this.GetMotorSpeed()
     }
     this.SetMotorSpeed(speed)
     return this
     }
     j.torque = function (torq) {
     if (U(torq)) {
     return this.GetMotorTorque()
     }
     this.SetMaxMotorTorque(torq)
     return this
     }
     j.maxTorq = j.maxTorque = j.mMT = j.mT = function (a, b, c) {
     this.SetMaxMotorTorque(a, b, c);
     return this
     }
     */

    /* more lVW!
     w.$(function(x,y){
     v=b.lVW(x,y)
     w.dot('w', M.a(v.x), M.a(v.y))
     $l(v.x+','+v.y)
     })*/
}