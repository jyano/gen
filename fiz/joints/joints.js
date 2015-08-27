b2d.p()
jD.A=  function(a){this.bodyA=a; return this}
jD.B= function(b){this.bodyB=b; return this}
jD.AB=function(a,b){return this.A(a).B(b)}
jD.aV= jD.lAA =function(){var pJD=this, g=G(arguments)
    pJD.localAnchorA=V(g[0],g[1]).div()
    return pJD}
jD.bV= jD.lAB =function(){var pJD=this, g=G(arguments)
    pJD.localAnchorB =  V(g[0],g[1]).div()
    return pJD}
jD.i= jD.init = function(){//joint.i=
    this.Initialize.apply(this,arguments)
    return this}
jD.cC =jD.cl= jD.coll = jD.collide =  function(a){var jD=this
    jD.collideConnected = a?true:false
    return jD}
j.i= j.init=function(){var j=this
    j.Initialize.apply(j, G(arguments))
    return j
}
j.a=function(a){
    if(U(a)){ return this.GetAnchorA().mult() }
    else {alert ('j.A cannot set')}}
j.b=function(a){
    if(U(a)){ return this.GetAnchorB().mult() }
    else {alert ('j.B cannot set')}}
j.A=function(a){return this.GetBodyA() }
j.B=function(a){return this.GetBodyB() }
j.a=function(a){return this.GetAnchorA().m() }
j.b=function(a){ return this.GetAnchorB().m() }
j.W=function(){return this.A().W()}
j.T=function(){return this.GetType()}
b.j= b.joint = function(){
    return this.GetJointList().joint
}
j.destroy=function(){
    var j = this.W().DestroyJoint(this)
    this.destroyed=true
    return j}
b.destroyAllJoints = function(){
    var b=this,
        toDestroy = [],
        je = b.j()

    while (je) {
        toDestroy.push(je.joint)
        je = je.next
    }
    _.e(toDestroy, function (j) {
        w.DestroyJoint(j)})

    return this
}
w.dJ = w.j = w.destroyJoint = function (a) {var w=this
    w.DestroyJoint(a);
    return w
}
w.cJ = w.J = w.joint = w.createJoint = function (a) {var w=this,
      j = this.CreateJoint(a)
    return  j
}
j.target = function(a,b){var j=this
    j.SetTarget(V(a,b))
    return j}//mouse
DENROT=function(){W(0) //w=b2d.m({g:0})

//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
    //something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
    //however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
    r= w.D(300,300,'y',400,20).bo(.5)
    r2= w.D(300,300,'w',400,10)
    r3= w.D(300,300,'w',400,10)
    r4= w.D(300,300,'w',400,10)
    r5= w.D(300,300,'w',400,10)

    flipDen=function(r){
        var d = r.den()
        if(d==0){r.den(1)} else {r.den(0)}}
    flipStage=function(){
        if(w.s.X()==0  && w.s.Y()==0){w.s.XY(10000,10000)}
        else {w.s.XY(0,0)}
    }

    flipStage()
    _.ev(6,function(){
        flipDen(r); flipDen(r2);
        flipDen(r3);flipStage()
    })

}
w.colBalls=function(){var w=this
    r = w.D(300, 300, 'r', 12).DFB(1,0.1,1)
    b = w.D(400, 300, 'b', 12).DFB(1,0.1,1)
    y = w.D(500, 300, 'y', 12).DFB(1,0.1,1)
    g = w.D(600, 300, 'g', 12).DFB(1,0.1,1)
    p = w.D(700, 300, 'p', 12).DFB(1,0.1,1)
    o = w.D(800, 300, 'o', 12).DFB(1,0.1,1)
    return w}
/*

 j.maxForce = j.mMF = j.mF = function (a, b, c) {
 this.SetMaxMotorForce(a, b, c);
 return this
 }
 j.lm = j.limits = j.setLimits = j.sL = function (a, b) {

 a = N(a) ? a : 20

 b = N(b) ? b : 180

 j.SetLimits(tRad(a), tRad(b))

 return j
 }
 j.enableLimits = j.enableLimit = j.eL = function (a) {
 this.EnableLimit(a ? true : false)
 return this
 }
 j.W = function () {
 return this.GetBodyA().GetWorld()
 }

 j.enabMot = function (a) {
 this.EnableMotor(a);
 return this
 }
 j.mot = function (speed, maxForce) {
 if (speed == '-') {
 this.EnableMotor(false);
 return this
 }
 speed = N(speed) ? speed : 100
 maxForce = N(maxForce) ? maxForce : 10000000
 this.enabMot(true).maxForce(maxForce).speed(speed)
 }



*/
wedJ=function(){


    w.wed=function () {var w=this,g=G(arguments)
        b2d.wed= function(a,b,  ancA, ancB, ang,  c, d){

            // can set 2 local anchor points and a reference angle


            b2d.WeldJointDef=b2d.Joints.b2WeldJointDef
            var g=G(arguments),

                jd =  new b2d.WeldJointDef()

            o={a:a, b:b}

            jd.bodyA= o.a
            jd.bodyB= o.b

            if(N(g[2])){
                o.ancA = V(g[2], g[3])
                o.ancB = V(g[4], g[5])
                o.ang = g[6]
                return jd
            }

            if(g[2]){
                jd.localAnchorA = o.ancA.div()}
            if(o.ancB){
                jd.localAnchorB = o.ancB.div()}
            if(N(o.ang)){// use ang to set a 'referenceAngle'
                jd.referenceAngle = M.tR(o.ang)}

            return jd

        }

        return w.J(
            b2d.wed.apply(null,g))}
    b.dX=function(b1){return this.X()-b1.X()}
    b.glu=  function(b1){var b=this, w=b.W()

        return w.wed( b, b1, -b.dX(b1), -b.Y(b1))

    }
    WED=function(){W([1500,1000 ],{g:0})

        w.wed(
            w.D(300,300,'r', 130),
            w.D(300,650, 'b', 130,400)
        )

        w.wed( w.S(200,100,'x',30),
            w.D(200,100,'v',30),0,10)
        w.wed( w.S(300,100,'l',30),
            w.D(300,200,'x',30),0,-10)

        w.wed( w.S(400,100,'g',30),
            w.D(400,300,'x',30),10,10)




        w.wed(w.S(500,100,'x',30), w.D(500,100,'v',30),10,-10)
        w.wed(w.S(600,100,'x',30), w.D(600,100,'v',30),10,-20)
        w.wed(w.S(700,100,'x',30), w.D(700,100,'v',30),10,-30)
        w.wed(w.S(800,100,'x',30), w.D(800,100,'v',30),-10,-40)
        w.wed(w.S(900,100,'x',30), w.D(900,100,'v',30),-10,-50)
        /*
         w.wed(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)
         w.wed(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10)
         w.wed(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10)
         w.wed(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10)
         w.wed(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10)
         w.wed(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20)
         w.wed(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30)
         w.wed(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40)
         w.wed(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50)

         w.wed(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0)

         w.wed( w.D(200,500,'x',30), w.S(200,500,'v',30) )


         w.wed(
         w.D(300,500, 'o', 30),
         w.D(300,500,'g', 50,50),

         V(0,-10)
         )

         w.wed(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
         w.wed(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
         w.wed(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
         w.wed(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
         w.wed(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
         w.wed(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
         */
    }
    j.form=function(){var j=this, w=j.W(), a=j.A(), b=j.B()
        if(j.T()==8){$l('J.T()==8:COMMENCE WEDDING '+ (n++))

            return w.wed(a, b)

        }}
    CRUSHREWED=function(){W([1200,600,1400,600],{}).C('p').P().P().P().P().P()
        n=0
        p.track().cir({r:10,c:'y'}).bS('sun')
        j = w.wed(
            w.D(100,200,'x',100,200).r(1.5),
            w.D(200,100,'u',200,100))
        _.ev(2, function(){
            if(!j.destroyed){  j.destroy()  }
            else {
                j = j.W().wed(j.A(),j.B())} })}
    b.j=function(){ return this.GetJointList() }


    LUMP=function(){W(5)//.Y()
        w.D(600,200,'w',180).bit(1,[1]).r(.5)

        w.D(400,0,'g',100).bit(2, [1,2, 4,8]).r(.8)
        w.D(300,0,'g',183,183).bit(2, [1,2, 4,8]).r(.8)

        _.t(38,function(){
            w.D(R(1100,100), R(300,-2500), 'w', 20).bit(1,[1])
        })

        y= w.y(100, 100).rt(40).bit(8, [1,2,4])

        fn=_.th(function(){
            var xx= y.X(),
                yy= y.Y()
            _.in(1, function(){
                w.S(xx,yy,'b',15)})},100)
        y.cl(fn)
        _.e([[400,500],[300, 500],[400, 300],
            [300, 100], [400, 200],[100, 300],
            [300, 300]
        ], function glb(v){
            return w.D(v[0],v[1],'z',20).K('glb')   })
        y.cl('glb', function(f){var glb=f.B()
            if(!glb.j()){glb.glu(y)}})
        w.wed(
            w.D(100,200,'x', 100,200).r(1),
            w.D(200,100, 'u', 200,100).r(1))
        w.wed(
            w.D(300,400,'w',50,100),
            w.D(300,400,'v', 100,50))

        w.t_.bit(1, [8])


    }




};wedJ()
prisJ=function(){


    b2d.p()

    /*

     pJD.maxForce= j.mMF=function(a){var j=this
     j.maxMotorForce = a; return j
     }


     pJD.speed=j.mS=function(a){this.motorSpeed = a; return this}
     pJD.motor=j.eM=function(a){
     this.enableMotor = a?true:false; return this}
     pJD.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }



     pJD.lowTrans=j.lT=function(a){
     this.lowerTranslation=a;return this}
     pJD.upTrans=j.uT=function(a){
     this.upperTranslation=a;
     return this}

     pJD.lm=function(a){ this.enableLimit=a?true:false;return this}

     -----


     pJ.speed = function (speed) {//j.mS
     this.SetMotorSpeed(speed)
     return this
     }



     */

    pJD.ax = pJD.axis= pJD.lAA=function(){
        var pJD=this, g=G(arguments),
            v = V(g[0],g[1])
        pJD.localAxisA.Set(v.x, v.y)
        pJD.localAxisA.Normalize()
        return pJD}
    pJD.rt= pJD.rA= pJD.ang=function(a){var pJD=this
        if(N(a)){pJD.referenceAngle=Math.toRadians(a)}
        return pJD}
    pJ.lm= pJ.limits=function(){
        var pJ=this,
            g=G(arguments), v, l,u
        if(U(g[0])){
            if(g.p){  pJ.EnableLimit(true); return pJ }
            else if (g.n) {pJ.EnableLimit(false); return pJ }
            else if (g.d) {pJ.lm( pJ.lm() ); return pJ }
            return pJ.m_enableLimit}
        v = V(g[0],g[1]).div()
        pJ.SetLimits(v.x, v.y) // ? pJ.SetLimits(l/30, (u+1)/30) ?
        if(g.N){pJ.EnableLimit(true) }
        return pJ}
    pJ.max=function(f){var pJ=this
        if(U(f)){return pJ.m_maxMotorForce}
        pJ.SetMaxMotorForce( f )
        return pJ}
    pJ.sp=function(s){var pJ=this
        if(U(s)){return pJ.GetMotorSpeed()}
        pJ.SetMotorSpeed(s)
        return pJ}
    pJ.F=function(f){var pJ=this
        if(U(f)){return pJ.GetMotorForce()}
        //pJ -> apply a force f
        return pJ}
    pJ.mt=function(){var pJ=this,g=G(arguments)

        if(N(g[0])){
            pJ.SetMotorSpeed(g[0])
            pJ.SetMaxMotorForce(N(g[1], 1000) )
            if(g.N){pJ.EnableMotor(true)}
        }

        else if(g.n){pJ.EnableMotor(false)}
        else if(g.p){pJ.EnableMotor(true)}

        return pJ
    }
    pJ.uL= pJ.U=function(uL){var j=this
        if(U(u)){return j.GetUpperLimit()*30}
        j.lm(j.lL(),uL)
        return j}
    pJ.lL= pJ.L=function(l){var j=this
        if(U(l)){return j.GetLowerLimit()*30}
        j.lm(l,j.U())
        return j
    }
    pJ.UL=function(u,l){return this.U(u).L(l)}
    pJ.LU=function(l,u){return this.L(l).U(u)}
    pJ.tl=pJ.val =pJ.tran= function(val){
        return parseInt(this.GetJointTranslation()*30)}
    pJ.lm= function(){var j=this, g=G(arguments),o
        o=A(g[0])?{
            lL:g[0][0],
            uL:g[0][1]}:
        {lL:g[0], uL:g[1]}
        if(g[0]==1){j.EnableLimit(true); return}
        if(g[0]==0){j.EnableLimit(false); return}
        j.SetLimits(o.lL/30, o.uL/30)
        if(g.N){j.EnableLimit(true)}
        return j
    }
    w.prism = function(a,b, x,y, rot){var w=this, jd, j
        jd=new b2d.Joints.b2PrismaticJointDef()



        a = A(a) ? a : [a]
        jd.bodyA = a[0]
        jd.localAnchorA =  O(a[1])  ?  a[1].div()  :  V(a[1],a[2],'-')

        b = A(b) ? b : [b]
        jd.bodyB = b[0]

        jd.localAnchorB =  O(b[1])  ?  b[1].div()  :  V(b[1],b[2],'-')
        jd.axis(x,y)
        jd.ang(O(x)? y: rot)

        o = O(g[0] && !b2d.iB(g[0]))? g[0]
            : _.x( {b1:g[0], b2:g[0]},
            O(g[2])? {axis:g[2], a:g[3]}  : {axis: V(g[2], g[3]), a:g[4]})
        g[0] = A(g[0]) ? g[0] : [g[0]]
        g[1] = A(g[1]) ? g[1] : [g[1]]
        o.A = g[0][0]
        o.aV =  O(g[0][1])  ?  g[0][1].div()  :  V(g[0][1], g[0][2],'-')
        o.B = g[1][0]
        o.bV =  O(g[1][1])  ?  g[1][1].div()  :  V(g[1][1], g[1][2],'-')
        jd.axis = V(g[2], g[3])
        jd.a =  O(g[2])? g[3]: g[4]


        if(A(o.a)){
            o.aV= V(o.a[1],o.a[2])
            o.a=o.a[0]}
        if(A(o.a)){
            jd.bodyA = o.a[0]
            if (O(o.a[1])) {jd.localAnchorA = o.a[1]}
            else if (N(o.a[1])) {
                jd.localAnchorA = V(o.a[1], o.a[2],'-')}}
        else {jd.bodyA = o.a}
        jD.bodyA=o.a



        if(A(o.b)){
            o.bV= V(o.b[1], o.b[2])
            o.b = o.b[0]}
        if (A(o.b)) {
            jd.bodyB = o.b[0]
            if (O(o.b[1])) {jd.localAnchorB = o.b[1]}
            else if (N(o.a[1])) {jd.localAnchorB = V(o.b[1], o.b[2],'-')}}
        else {jd.bodyB = o.b}
        jD.bodyB=o.b


        o.aV = o.aV  || o.a.wC();jD.localAnchorA= o.aV.div()

        o.bV = o.bV  || o.b.wC();jD.localAnchorB= o.bV.div()



        if (N(o.x)){jd.ax(o.x, o.y).rA(o.a)}
        else if(O(o.x)){jd.ax(x.x, x.y).rA(y)}
        jD.axis(o.ax)


        jD.rt(o.rA)

        return w.J(jd)
    }

    w.pJ=  function(){var w=this, g=G(arguments),o,j,
        jd = new b2d.PrismaticJointDef

        o = b2d.iB(g.f)  ?
        {a: g.f, b:g[1], ax:g[2], rA:g[3]} : g[0]
        jd.bodyA=o.a
        jd.bodyB=o.b
        o.aV=o.aV ||[0,0]; jd.aV(o.aV)
        o.bV=o.bV ||[0,0]; jd.bV(o.bV)
        o.ax=o.ax|| [0,1]; jd.ax(o.ax)
        o.rA=o.rA||0;
        jd.rA(o.rA)
        j=w.J(jd)
        if(o.lm){j.lm(o.lm)}
        return j

    }


    w.Elv=function(x, y, H){var w=this,elv, wire,j, speed = 10
        x=N(x, 400)
        j = w.pJ({
            a: wire= w.S(x, w.h - 200, 's', [[60, 60, '-']]).d(1).fr(1),
            b: elv= w.D(x+100, w.h-300, 'd', 200, 40).d(.1).K('elv'),
            lm: [-250, 100]
        }).mt(speed)
        elv.cl(
            _.db(reverse, 200, true)
        )
        function reverse(){ j.mt(speed *= -1) }
    }



    PJ=function(){W([1200, 600, 2400,1200], {}).P(100, w.h-200)

        p.d(.1).fr(1).K('p').track()

        speed=10

        j = w.pJ({

            a : w.S(400, w.h-200,'s',[[40,40,'-']]).d(1).fr(1),
            b : w.D(500, w.h-300,'d',200,40).d(.1).K('elv'),
            lm: [-250, 100]

        }).mt(speed)

        w.cl('elv', _.db(function(){j.mt(speed *= -1)}, 200, true))


        speed2=-100
        j2 = w.pJ({
            a:w.S(800,300,'s',40,40).d(1).fr(1),
            aV:[-30,2],
            b:w.D(800, 200,'d',200,40).d(1).K('box'),
            ax: V(0,1),
            rA:45

        }).mt(speed2)

        w.cl('box','p', function(){
            speed2 *= -1
            j2.mt(speed2)
        })



        w.p(500,200,'thrust').K('p').d(.02)




        w.pJ(
            w.S(1000,800,'y',40,40).d(1).fr(1),
            w.D(1100,900,'b',200,40).d(1),  [1,-.5],  25
        ).L(-300).U(200).lm('+')

        j3=w.pJ({
            a: w.S(240,150,'s',180,90),
            b: w.D(200,200,'d',200,20),
            aV: V(100, 10),
            rA: 5
        })

        j3.mt(-10)

        _.in(2, function(){ j3.mt('-') })
        _.in(4, function(){ j3.mt('+') })





    }


    ELV=function(){W([1200,600,3600,800])


        w.Z(1.2)
        w.Elv()
        sen =  w.S(1200,300, 'w', [[2400,200,'-']]).K('sen')
        aCo = w.aCo(-50, -150)
        aCo.do(sen)
        //<- sen.do(aCo) //  <- sen.cl(
        // function(f){if(!f.by(aCo)){aCo.B(f)}},
        // function(f){if(f.by(aCo)){aCo.xB(f)}
        // })


        p =  w.p(300, 400, '+').K('char')

        statMar= w.p(2600, 150).stat().K('mario')

        statBird= w.y(2350, 450, 2, '-').rt(90).stat().K('bird')


        statBird.cl('char', function(){
            p.kill()
            p= w.y(2350, 550,2,'+').fR().rt(90).lD(2).K('char')
            w.Z(1.6)

        })

        statMar.cl('char', function(){
            p.kill()
            p= w.p(2400, 250).tr().K('char')
            w.Z(1.2)
        })




        //.tr()


        w.D(300,100, 'r', 20); w.D(400,100, 'r', 40); w.D(500,100, 'r', 45); w.D(600,100, 'r', 180); w.D(700,100, 'r', 10)



        _.ev(2,  function(){   if(R()){

            // tog()
        }  })

        // Imagine that you have gusts of wind blowing sideways…
        // you can add your objects to a Contoller and have them pushed sideways…
        // then when the wind passes you could remove them from that controller.
        // now just add and remove bodies to the controller!!

        function tog(){

            $l('tog')
            // if(added){rm()} else {add()}
        }

        function add(){w.C('g');added=1; co.B(b)}
        function rm(){w.C('r');added=0; co.xB(b) }



        w.pJ(
            w.D( 1200,500, 'z', 60).K('ride'),
            w.S( 1200,500,'s',40,150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
            .lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)

        w.pJ(w.D(1400,500,'z',110).K('ride'),
            w.S(1400,500,'s',40,300).K('cart'))
            .lm(-30,60).mt(10)//.speed(-100).maxForce(1000)

        w.pJ(
            w.D( 1600,500,'z',80).K('ride'),
            w.S(1600,500,'s',40, 250).K('cart')
        ).lm(-30,60).mt(-100)//.speed(-100).maxForce(1000)


        w.b(function(cx){

            cx.w('cart',function(){

                w.e(function(b){

                    if(b.of('ride')){ b.I(0, -1000) }

                })

            })

        })
    }

    BUMPER=function(){W().P(800)


        j1= w.pJ(w.D( 200,500, 'z', 60).K('ride'),
            w.S( 200,500,'s',40,150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
            .lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)

        j2 = w.pJ(w.D(400,500,'z',110).K('ride'),
            w.S(400,500,'s',40,300).K('cart'))
            .lm(-30,60).mt(10)//.speed(-100).maxForce(1000)

        w.pJ(
            w.D( 600,500,'z',80).K('ride'),
            w.S(600,500,'s',40, 250).K('cart')
        ).lm(-30,60).mt(-100)//.speed(-100).maxForce(1000)


        w.b(function(cx){

            cx.w('cart',function(){

                w.e(function(b){

                    if(b.of('ride')){ b.I(0, -1000) }

                })

            })

        })



    }


    w.elev =function(x, yy, H){var w=this,
        y=w.h-yy,
        elv,
        speed= 5,
        wire,j
        j=w.pJ(
            wire=w.S(x, y-H/2, 'w', [[100, H, '-']]),
            elv= w.S(x,y-300, 'm', 30).r(3).K('elv').bS('sun'),
            V(0, 1)
        ).lm(-H/2, H/2).mt(-100)
        elv.cl( _.th( function(){
            j.mt(speed*=-1)
        },  200, {trailing:false} ) )
        elv.cl(function(p){ p.B().lV(0) })
    }


    MARIOACO =function(){W([1200,600,2400,1200],{g:400})
        w.p(100,300,'+')

        w.elev(300,100,300)
        w.elev(600,100,500)
        w.elev(900,300,400)
        w.elev(200,500,300)
        w.elev(400,800,200)
        w.elev(600,600,500)
        w.elev(750,700,300)
        w.elev(900,900,300)


    }

    JTRAN=function(){W({g:300}).P()

        p.XY(100, 550).track()


        j= w.pJ(
            w.S(400, 200,'s', 140,240).K('cart'),
            w.D(200, 100,'b', 40, 40).K('ride')
        )

        j.tran=function(){return this.GetJointTranslation()*30}


    }

    function JointGetJointTranslation(){
        var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
            p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
            p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
        return axis.x*(p2.x-p1.x)  +  axis.y*(p2.y-p1.y)
    }//box2d source


    old=function(){

        PRISM0=function(){W(5)
            p= w.player(500,200,'thrust').den(1).fric(1)


            j = w.pJ({
                a: w.S(400,300,'s',40,40).den(1).fric(1),
                aV:[-30, 2 ],
                b:w.D(500, 200,'d',200,40).den(1).K('box'),
                ax: V(1,-2),
                rA: 45})
            speed=10
            j.mt(speed)
            w.beg(function(cx){
                cx.with('box',
                    function(){speed *= -1})
                j.mt(speed)
            })

        }




        //jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works

        b2d.pJ=  function(b1, b2, lXA, lAA, lAB, rA){//b2d.prismaticJointDef = PrismaticJointDef = prJt=

            var j=new b2d.Joints.b2PrismaticJointDef()
            j.mt=function(a,b,c){
                j.mS(a)
                j.mMF(N(b)?b:100)
                if(c!='-'){j.eM(1)}
                return j}
            j.lm=function(lT,uT, enableLimit){
                j.lT(lT).uT(uT)
                if(enableLimit!='-'){ j.eL(true) }
                return j}
            if( D(b1) ){ j.A(b1)}
            if( D(b2) ){ j.B(b2)}
            //local direction A ? the angle of the actual slider joint
            j.lXA(D(lXA)?lXA: V(0,1))
            //local axis A
            j.lAA( D(d)? lAA : b1.worldCenter())
            //local axis B
            j.lAB( D(e)? lAB : b2.worldCenter())
            // something with rotation
            if( D(rA) ){  j.rA(rA)   }

            return j
        }


        w.Prism = function (a, b, c, d, e, f, g, h) {
            return this.J(b2d.pJ(a, b, c, d, e, f, g, h))
        }

        w.elevx=function(x){
            var elev={}
            elev.plat  = this.rect(x, 100, 100,10).den(1).K('elev')
                .coll(function(){elev.flip()})
                .collWithKind('player', function(p){p.linVel(0)})
            elev.base = this.brickSensor(x, 150, 1, 100 ).den(1).fric(100)
            elev.j =  this.prism(elev.plat, elev.base, V(0,1) )

            elev.speed = 2
            elev.j.mt(elev.speed)
            elev.flip =  _.throttle(function(){
                this.j.mt(this.speed*=-1)
            }, 200, {trailing:false})
            return elev

        }





    }

    /*



     enableLimit - whether the joint limits will be active
     lowerTranslation - position of the lower limit
     upperTranslation - position of the upper limit


     enableMotor - whether the joint motor will be active
     motorSpeed - the target speed of the joint motor
     maxMotorForce - the maximum allowable force the motor can use

     */


};prisJ()

