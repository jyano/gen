b2d.p(); b2d.mini()  // http://stackoverflow.com/questions/19342932/box2d-collision-impact-calculation

cx.w=  function(){var cx=this, g=G(arguments)
    // (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
    //if you have a second pam,, but its not a function
    cx.ic=function(){var cx=this,g=G(arguments)
        /* protosig
         //     str    :  str,fn   :   obj   :   obj,fn

         w.b(function(cx){
         cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
         var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
         cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
         var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
         })
         */
        if(F(g.s)){
            if(cx.A().of(g.f)){_.b(g.s,cx.A())(cx.B(),cx)}
            else if(cx.B().of(g.f)){_.b(g.s,cx.B())(cx.A(),cx)}
            return cx
        }

        //if this fixture 'of' that string(kind),fixt,or body
        //if so always passed back an array with the first mentioned selector in the [0] pos
        return cx.A().of(g.f)?[cx.A(), cx.B()]:
            cx.B().of(g.f)?[cx.B(),cx.A()]:
                false
        //if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx

    }
    cx.bw=   function () {var cx=this,
        g=G(arguments),
    // bw(k,k1)  or  bw(k,k1,fn)

        a=cx.A(), b=cx.B()



        if(F(g.t)){
            if(a.of(g.f)&&b.of(g.s)){g.t.apply(a,[b,cx])}
            else if(b.of(g.f)&&a.of(g.s)){g.t.apply(b,[a,cx])}
            return cx
        }

        return cx.A().of(g.f) && cx.B().of(g.s) ?  [cx.A(),cx.B(), cx] :cx.B().of(g.f) && cx.A().of(g.s)?  [cx.B(),cx.A(), cx] : false
    }
    return  g.s && !F(g.s)?
        cx.bw(g.f, g.s, g.t) :
        cx.ic(g.f, g.s)
}

// ALL 4 cx handlers give cx (can get points(pt) and normal(n))
cx.m= function(){var cx=this, m=new b2d.Collision.b2WorldManifold
    cx.GetWorldManifold(m); return m}
cx.pX= function(){return parseInt(this.m().m_points[0].m().x)}
cx.pY= function(){return parseInt(this.m().m_points[0].m().y)}
cx.pt= cx.cen=function(){return V(this.pX(), this.pY())}
cx.lP=function(b){return b.lP(this.pX(),this.pY())}
cx.n=  function(n){return this.m().m_normal.toFixed(2).m( N(n,1) )}
cx.nX= function(n){return this.n(n).x}
cx.nY= function(n){return this.n(n).y}
cx.t=function(){}//what about tangent?
//presolve
cx.e=cx.en= function (a) {var cx=this
    if(U(a)){return cx.IsEnabled()}
    cx.SetEnabled(a ? true : false);
    return cx}
w.b = w.beg= function(){var w=this,  g=G(arguments), o,fn

    if(g.u){return this.GetBodyList()}
    //ADDS one or more handlers to beginHandlers array
    //most common use, usually just need one func.
    // would i ever need more?lVWs
    //it just puts each item into bH arr
    fn=F(g.t)? function(cx){if(cx.w(g.f, g.s)){g.t(cx)}} :
        F(g.s)? function(cx){if(cx.w(g.f)){g.s(cx)}}:
            g.f

    //fn=$.mo(.2,fn)

    w.bH.push(fn)

    return w
}
w.end=function(){var w=this, g=G(arguments)

    if(g.F_){g.e(function(fn){w.eH.push(fn)})}

    else if(F(g.s)){w.eH.push(function(cx){ cx.w(g.f, g.s )})}

    else if(F(g.t)){w.eH.push(function (cx) { cx.w(g.f, g.s, g.t) })}

    return w
}
w.pre=function(fn){var w=this, g=G(arguments)

    //fn = $.mo(.2,fn )

    w.pH.push(fn)

    return w
}
w.pre= function(){var w=this,  g=G(arguments), o,fn


    if(F(g.t)){fn = function(cx,i){if(cx.w(g.f, g.s)){g.t(cx)}} }

    else if(F(g.s)){
        fn = function(cx,i){ cx.w(g.f, function(f){ _.b(g.s,this)(f, cx, i) })} //this good
    }

    else {fn = g.f}

    //fn=$.mo(.2,fn) //this will break it!!

    w.pH.push( fn )
    return w
}
b.pre=function(){var b=this,w= b.W(),g=G(arguments)

    w.pre(function(cx){cx.w(b, g.f, g.s, g.t)})

}
w.po=w.post=function(){var w=this,g=G(arguments)


    g.e(function(fn){



        w.PH.push(


            function(cx, I){
                var i=_.m(I.normalImpulses, M.fl)[0],
                    t=_.m(I.tangentImpulses, M.fl)[0]
                return fn(
                cx, i,t)


            })





    })

    return w

}
w.cl=function(){var w=this, g=G(arguments)


    if(g.F){

        w.b(function(cx){
            _.b(g.f, cx.A())( cx.B(), cx)
        })


    }

    else {


        w.b(function(cx){

            cx.w(g[0], g[1], g[2])

        })

    }



    return w

}
f.cl=function(k,fn){var f=this
    //ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
    if(F(k)){ fn=k; k='' }
    fn = _.b(fn,f)
    w.b(function(cx){var fA=cx.A(), fB=cx.B()
        if(f.of(fA) && fB.of(k)){fn(fB, cx)}
        if(f.of(fB) && fA.of(k)){fn(fA, cx)}})
    return f}
b.cl=function(){var b=this,w=b.W(),g=G(arguments),o

    // if body collides with ANYTHING
    // if body collides with body/fixt of specific kind
    // if body collides with specific body
    // if body collides with specific fixt
    // but always pass fixt into the cb

    if(F(g.f) && F(g.s)){
       this.cl(g.f)
        w.end(this, g.s)
    return this}

    if(g.F_){o= {fn:g.f, k:''}}

    else {
        o= {k:g.f, fn: g.s}
    }


    w.b(function(cx){

        var fA=cx.A(),
            fB=cx.B()


        if (b.of( cx.a() )  && fB.of(o.k)
        ){


            if (o.fn){_.b(o.fn, fA)(fB,cx);return w}
            return [fA,fB,cx]

        }


        else if (b.of(cx.b())&&fA.of(o.k)) {

            if (o.fn) {_.b(o.fn,fB)(fA,cx);return w}

            return [fB,fA,cx]
        }



    })
    return b
}
b.sr=  b.sen=function(){var b=this,f= b.f(), g=G(arguments)
    if(g.d){return b.sen(!b.sen())}//b.sen('/')->toggle sen
    if(U(g[0])){return f.m_isSensor}
    f.m_isSensor= g[0]?true:false
    return b
}
b.lP=function(x,y){return this.GetLocalPoint(V(x,y,'-')).m()}
cx.c= cx.cont=  cx.continuous = cx.iC = function () {var cx=this
            return cx.IsContinuous()
        } //Does this contact generate TOI events for continuous simulation
cx.iS= cx.s= cx.sen=function () {var cx = this, g = G(arguments)
    if(g.u){return cx.IsSensor()}
    cx.SetSensor(g.f ? true : false)

    return cx

}
cx.iT= cx.tch=cx.touching=cx.iT=function(){return this.IsTouching()}
cx.N= function(){return this.GetNext()}
cx.ty=cx.T=function(){return this.GetManifold().m_type}
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
b.lVL=   function(v, y){v = V(v,y)
            return this.GetLinearVelocityFromLocalPoint( v.div() )
                .mult().dec(2)

}
w.wn=function(){var w=this, g=G(arguments),o


            o = F(g[0]) ? {b:g[0],e:g[1]}
                : F(g[1]) ? {k:g[0],b:g[1],e:g[2]}
                : {k:g[0], k2:g[1], b:g[2], e:g[3]}

            //when b,[e]  k,b,[e]  k,k2,b,[e]

            if(o.k2){

                w.b(o.k, o.k2, o.b);

                if(o.e){w.end(o.k,o.k2,o.e)}
            }

            else if(o.k){

                w.b(o.k, o.b); if(o.e){w.end(o.k,o.e)}
            }
            else {
                w.b(o.b); if(o.e){w.end(o.e)}}
            return w

        }
w.wl=function (k, k2, fn) {var w = this, push


            if (F(fn)) {

                w.wn(k, k2,
                    function() {push = true},
                    function () {push = false})

                z(function () {if (push) {fn()}})
            }


            else if (F(k2)) {

                w.wn(k,   function() {push = true}, function () {push = false});
                z(function () {if (push) {k2()}})
            }




            return w



        }
b.wl=function(k,fn){var b=this,w=b.W()
            w.wl(b,k,fn)
            return b
        }
        b.wn=function(k, oB,oE){var b=this,
            w=b.W()
            w.wn(b, k, oB,oE)
            return b}
//my: to specify a sp body on what to do when one of its own fixts of a certain k has a col
        b.my=function(k,fn){var b=this, w=b.W()

            if(F(fn)){
                w.b(function(cx){cx.w(b,
                    function(f){
                        if(this.of(k)){
                            _.b(fn,this)(f,cx)}})})
            }

            else {w.wn(b,
                function(){ b.my[k] = 1},
                function(){ b.my[k] = 0})}

            return b
        }
//from tx:
    /*
     w.l(1000,200,100,900,'-')
     w.l (600,0,700,500)
     w.l(200,200,500,500,'+')
     w.dr(350,260, 200,200,'-')
     w.dr( 500,240, 160,160,'+')
     w.dr( 400,200, 100,100)
     b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
     w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
     */
b.lVW= function(){var b=this, g=G(arguments); return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
BIBLI=function(){
        function removeAllLVW(){

//cx.v= cx.lV= function(b){ return b.lVW( this.cen() )}
//linVel from LocalPoint.. i think not used
//f.lVW=function(){return this.B().lVW.apply(this.B(), arguments)}


            //  If you want to know the actual direction that these two corners impacted at, you can use:
// v1 = b1.GetLinearVelocityFromWorldPoint( cx.cen() )
//  v2 = b2.GetLinearVelocityFromWorldPoint( cx.cen() )
//  impactV = v1 - v2

//cx.vA=  function(){var cx=this; return cx.lV(cx.a())}
//cx.vB=  function(){var cx=this;return cx.lV(cx.b())}

            //so lvW is not from the ships perspective
//it is from world perspective
//if the ship is going towards the right part of the screen,
//it will have a positive x
//regardless of which direction the ship is facing (regardless of its rotation)

            AMPGUN =function () {W().stats().P()
                // var b1,b2

                // p.C('z')

                vor = w.S(400,300,'r', 100 )

                p.cl(vor,  function(f,cx){

                    var   v,lP,bu,imp

                    //p.C('g')

                    pt=cx.pt();

                    w.dot(pt)

                    //lP = pt.lP(v.x, v.y)

                    bu = w.D(300, 100, 'w', 10,'-')

                    imp = V(
                        p.lVW(pt).x - f.B().lVW(pt).x,
                        p.lVW(pt).y - f.B().lVW(pt).y
                    )

                    bu.I(imp.x, imp.y)
                })
            }



/// *** IMPORTANT PITFALL: CANNOT GET cx.pt() FROM SENSOR FIXTS
            LVW =function () {W([800, 600 ], {g:100,w:0 }).stats()

                var b1,b2
                vor = w.S(400,300,'r', 500,10 ).K('r')
                y= w.y(50,100).warp().lD(0).rt(70).I(10,10)

                y.cl(vor, $.mo(function(f,cx){var p,lP, b,imp

                    y.stat()
                    p= cx.p();  // w.dot(p.x, p.y)
                    lP = y.lP(p.x, p.y)
                    //y.cir({r:7, x:lP.x, y:lP.y, c:'z'})

                    b= w.D(400, 100, 'r', 10,'-')
                    $l('y.lVW(p).y: '+y.lVW(p).y)
                    imp = V( // ITS THE DIRECTION!!
                        //SO ITS A RATIO THAT WE NEED TO 'NORMALIZE' INTO A UNIT VALUE? THANKS MATH. :)


                        y.lVW(p).x-f.B().lVW(p).x,

                        f.B().lVW(p).y-y.lVW(p).y

                    )






                    b.I(imp.x, imp.y)


                }))


                /*
                 w.S(600,300,'w', 30,'-').K('r').cl( function(f,cx){
                 var  pt=cx.cen(), v1= f.B().lVW(pt), v2=r.lVW(pt)
                 w.D(630,250,'r',10)
                 .I(v1.x-v2.x, v1.y-v2.y)})
                 */

            }
            /*
             midRedSensor = w.S(600,400,'z', 30,'-').K('r')
             leftGreenWeap = w.S(300,300,'g',50)
             r = w.S(600,200,'w', 30,'-').K('r')
             r.cl( function(f,cx){
             var  pt=cx.cen(), v1= f.B().lVW(pt), v2=r.lVW(pt)
             w.D(630,250,'r',10).I(v1.x-v2.x, v1.y-v2.y)//.bS('sun')
             })
             */
            /*
             y.cl('r',function(f,cx){var b=this,
             sun= w.D(630,350,'r',30) ,
             pt=cx.cen()
             sun.I(b.lVW(pt).x-f.lVW(pt).x, b.lVW(pt).y-f.lVW(pt).y)})
             */



        }
        CX=function(){W()

            var centerFx = b2d.cir(80).K('center')

            b= w.D(500,300,'r',[
                centerFx,
                b2d.rec(60,90,0,40,10).sen(1).K('sen1')
            ]).aV(100)
            //wow!  no friction?? ..b and floor both hav fr .2!

            w.D(700,300,'p',[
                centerFx,
                b2d.cir(100).sen(1).K('sen2')

            ]).aV(100)

            w.col('s1','s2', function(){ w.D(100,100,'w', 100) })

            w.b(function(cx){
                if(cx.w('s1','s2')){
                    w.flag('new')
                }}) //w.on('new', function(){w.ball()})

        }
        THROTTLE=function(){W()
            b = w.ball(300,300, 100)
            b1 = w.brick(300,500)
            time = 0

            $.ev(1,function(){time++})

            cjs.t(function(){
                if(w.flagged('moveBrick')){
                    b1.X( 20 , '+' )}})

            lastTime=0
            change = 0

            w.b(function(cx){
                if(cx.w('brick')){
                    if(lastTime!=time){
                        lastTime=time;
                        w.flag('moveBrick')
                    }}})
        }



    }
old=function(){
        cxI.tY=function(){return this.tI(1)}
        cxI.nY = function(){return this.nI(1)}


        b.when1=function(){var b=this, w=b.W(),ob={}
            ob.cxs=function(k,fn){
                w.beg(k,fn)
                return { after: function(fn){w.end(k,fn)} }}
            return ob
        }



        rM=function(){
            cx.rM=cx.manifold=cx.gM=function(){var cx = this; return cx.GetManifold()}
            cx.lN = cx.localPlaneNormal = cx.lPN = function () {
                var cx = this
                return cx.rM().m_localPlaneNormal
            }
            cx.lP = cx.localPoint = function () {var cx = this; return cx.rM().m_localPoint
            }
            cx.n = cx.pointCount = cx.pC = function () {var cx = this
                return cx.rM().m_pointCount
            }
            cx.ps = cx.points = cx.p = function () {var cx = this
                return cx.rM().m_points
            }
        }; //rM()

        cx.cen= cx.mid=  cx.center= function (){var cx=this
            return M.lC(
                cx.A().cen(),
                cx.B().cen())

        }

        /*
         w.when = function(k, k2, oB, oE){var w=this,g=G(arguments)


         //instructions:
         //

         if (F(g[0])){

         oE=k2; oB=k
         w.beg(g[1])
         if (g[2]) { w.end(g[]) }
         }


         else if (F(what2)) {
         eFn = bFn
         bFn = what2
         w.beg(what, oB)
         if (eFunc) { w.end(what, eFn) }}

         else if (F(oB)){
         w.beg(what, what2, bFn)
         if (eFn) {w.end(what, what2, eFn)}}



         return w

         }*/

        //cx.excludes=function(u){return !this.includes(u)}
        /*
         cx.destroy = cx.destroyBoth = function () {
         this.a().setDestroy()
         this.b().setDestroy()
         return this
         }

         cx.destroyIf = function (kind) {
         this.a().setDestroyIf(kind);
         this.b().setDestroyIf(kind)
         }

         cx.destroyOtherIf = function (k) {
         var a = this.a(), b = this.b()
         if (a.is(k)) {
         b.setDestroy()
         }
         else if (b.is(k)) {
         a.setDestroy()
         }

         }

         */
        w.collx= function(k1, k2, fn){
            var w=this,
                n=k1+k2,
                cx

            if(F(k2)){return w.collideAny(k1,k2)}

            else {
                w.beg(function(cx){
                    if(cx.with(k1,k2)){ w.flag(n, cx) }
                })

                cjs.t(function(){ if(cx=w.flagged(n)){fn(cx)} })
            }

        }
        w.classx=function(k){var w=this,
            ob={class:k,  k:k,  world:w, w:w}
            ob.with=ob.collWith=function(k,fn){var ob=this
                if(O(k)){
                    _.e(k, function(fn,k){
                        ob.with(k,fn)})}
                else {w.with(w.class, k, fn)}
                return w}
            return ob}

        w.collideAny = function(a, fn){var w=this
            w.beg(a, function(cx){
                $.do(function(){fn(cx)})})
            return w}

        w.flagx = function (flag, val) {var w=this
            w.flags = w.flags || {}
            if (U(val)) {val = true}
            w.flags[flag] = val
            return w
        }

        w.flaggedx = function (flag) {var w=this, wasFlagged

            w.flags = w.flags || {}

            wasFlagged = w.flags[flag]

            if(wasFlagged){w.flags[flag] = false}

            return wasFlagged

        }
        w.onx = function (onWhat, fn){var w=this, val


            //this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)

            //interesting default !!!!!!!
            //func=func||function(val){val()}

            cjs.t(function(){

                val=w.flagged(onWhat)

                if(val){ fn(val) }

            })


            return w

        }


        b2d.superManifold =  function(m){//used????
            m.lPN = m.m_localPlaneNormal
            m.lP=m.m_localPoint
            m.pC=m.m_pointCount
            m.p=m.m_points
            m.t=m.m_type
            return m}

        function SuperImpulses(impulses){
            impulses.n= impulses.nI=function(){return impulses.normalImpulses}
            impulses.t= impulses.tI=function(){return impulses.tangentImpulses}
            return impulses}

//do any of these get used? i think filterData does
        b2d.manager = b2d.contactManager = b2d.cM=function(){//used?
            var m= new BXD.b2ContactManager
            m.c= m.cl= m.Collide
            m.a= m.aP=m.AddPair
            m.f= m.fNC= m.FindNewContacts
            m.d= m.ds= m.Destroy
            return m
        }
        b2d.cxFilt = b2d.filter =   function(){//used?
            var f=new b2d.b2ContactFilter
            f.rC =f.RayCollide
            f.sC =f.ShouldCollide
            return f
        }
        b2d.neither = function(b1, b2){//d~data
            return {
                is: function(d){
                    return !b1.is(d) && !b2.is(d)}
            }
        }
        b2d.either = function(b1, b2){
            return {is: function(d){
                return b1.is(d) || b2.is(d)}}}
        b2d.either1 = function(ob1,ob2, is1,is2){
            return (ob1.is(is1) && ob2.is(is2))||
                (ob1.is(is2) && ob2.is(is1))}

        //Array.prototype.sen=function(k){var arr=this; arr.isSensor=k||true; return arr}
    }
cx.A=function(){return this.GetFixtureA()}; cx.B=function(){return this.GetFixtureB()}
cx.a=function(){return this.A().B()}; cx.b=function(){return this.B().B()}
//cx.pt1=cx.XY= cx.cen=cx.V=function(){return this.m().m_points[1].m() }
//cx.p1X= function(){return parseInt(this.pt1().x)}
//cx.p1Y= function(){return parseInt(this.pt1().y)}
//cx.X=function(){return this.XY().x} //cx.Y=function(){return this.XY().y}

f.fil  = f.fl= f.flDa= function(){var f=this,g=G(arguments)
    if(g.u){return f.GetFilterData()};f.SetFilterData(g.f);return f}
f.cat= function(){var f=this,g=G(arguments),
    flDa = f.flDa()
    if(g.u){return flDa.categoryBits}
    flDa.categoryBits=g.f; f.flDa(flDa); return f}
f.msk= function(msk) {var f=this,g=G(arguments),
    flDa=f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
    if(g.u){return flDa.maskBits}
    if(A(g.f)){
        num=0
        _.e(g.f,
            function(bits){
                num+= bits})
        g.f=num}
    flDa.maskBits=g.f
    f.flDa(flDa)
    return f}
b.cat=function(){var b=this, g=G(arguments);
    if(g.u){return b}
    b.fs(function(f){f.cat(g.f)}); return b}
b.msk=function(){
    var b=this,
        g=G(arguments);
    b.fs(function(f){f.msk(g.f)}); return b}
f.bit=function (cat, msk) {
    if(N(cat)){this.cat(cat)}
    if(N(msk) || A(msk)){this.msk(msk)}
    return this
}
b.bit=function (cat, msk) {
    if(N(cat)){this.cat(cat)}
    if(N(msk) || A(msk)){this.msk(msk)}
    return this
}
/*  w.right.grp(-1)
 y.grp(-1)
 w.D(600,400,'r',30).grp(-1)
 w.D(600,400,'r',40).grp(-1)
 w.D(600,400,'r',50).grp(-1)

 w.D(600,400,'b',50,50).grp(-2)
 w.D(600,400,'b',60,60).grp(-2)
 w.D(600,400,'b',70,70).grp(-2)
 */


flDa.grp=    flDa.g=function(grp){var flDa=this
    if(U(grp)){ return flDa.groupIndex }

    flDa.groupIndex = grp

    return flDa
}


f.grp =  function(grpIx) {var f=this, fl=f.GetFilterData()

    if ( U(grpIx) ) { return fl.groupIndex }

    fl.groupIndex = grpIx

    f.SetFilterData(fl)

    return f
    //get/set for groupIndex
}
fd.grp = fd.group = fd.index = fd.gI = function (a) {

    if (U(a)) {

        return this.filter.groupIndex

    }

    this.filter.groupIndex = a;

    return this

}
f.grp =  function(i) {var f=this,fl=f.fl()

    if (U(i)) { return fl.groupIndex }

    fl.groupIndex = i

    return this.fl(fl)

}
b.grp = function(i){
    if (U(i)) {return this.f().grp()}

    this.fs(function(f){ f.grp(i) })

    return this

}
b.grp=function(grp){
    var b=this
    b.fs(function(f){
        f.grp(grp)
    })
    return b
}
w.cxFl= w.sCF= function(){var w=this, g=G(arguments)
    w.SetContactFilter.apply(w,g)
}
function advanced(){
    cx.fl=  function(){var cx=this//whats the point?
        cx.FlagForFiltering()
        return cx
    }// Flag this contact for filtering.
// Filtering will occur the next time step.

}
function bibliography(){

    b2d.flDa=  b2d.fl=function(){//this is a NEW OBJECT: FilterData
        var flDa = new b2d.Dynamics.b2FilterData
        return flDa}



    fd.bit =  function (cat, msk) {var fd=this
        fd.cat(cat).msk(msk)
        return fd
    }
    fD.cat = fD.cB = function (cB) {
        var fD = this
        if (U(cB)) {
            return fD.filter.categoryBits
        }
        fD.filter.categoryBits = cB
        return fD
    }

    fd.msk =   function (mB) {var fd=this,
        fl=fd.filter,n
        if(U(mB)){return fl.maskBits}
        if(A(mB)){
            n=0
            _.e(mB, function(b){n+=b})
            mB=n}
        fl.maskBits = mB
        return fd
    }

}
// i want the total power, // normal/tangent impulses
// the angles, cx.norm
// and their rel proportions ?
//and the excact center location point of the coll (cx.cen())
//norm is just the dir to quickest separate the overlapping shapes

/*
collide=function(){

    //  I have 3 categories of things: players, obstacles and triggers.

    //  players and obstacles collide with each other  but not with themselves.

    circleDef.filter.categoryBits = 0x2
    circleDef.filter.maskBits = 0x4


    shapeDef.filter.categoryBits = 0x4
    shapeDef.filter.maskBits = 0x2

    // I want to also have trigger types...
    //     these I'm only using to detect the player and trigger events ' +
    // 'but should not be collided with by anything. ' +
    //'Logically, that should be possible by setting the maskBits to 0x0.' +
    //' The JBox2D collision code is as follows.


    collide = function(){
        return (filter1.maskBits & filter2.categoryBits) != 0 &&
            (filter1.categoryBits & filter2.maskBits) != 0
    }

    //So if the maskBits = 0, then collide should never return true.
    // I set the category bits to the next free category - 0x8.

    shapeDef.filter.categoryBits = 0x8
    shapeDef.filter.maskBits = 0x0


    // I thought this could be to do with Java's ints working differently to how I expected,
    // but I tested and found the following results:

    //      0x2 & 0x2 = 2
    //0x2 & 0x0 = 0
    // The triggers are meant to be used to trigger events.
    // This is done by implementing the CollisionListener and testing
    // for player collisions with triggers and then setting boolean flags.
    // However, when I run the simulation, the player is colliding with the triggers,
    // and so are the obstacles.

    // I've also tried setting the category and mask bits
    // to the following respective values:

    // 0x0 0x0
    // 0x8 0x8
    // 0x2 0x4
    // 0x4 0x2

    //And the player always collides with the trigger object.
    // How do I get the player and obstacles to never collide with the trigger object?



//    Box2D supports 16 collision categories.
    //      For each shape you can specify which category it belongs to.
    //    You also specify what other categories this shape can collide with.
    // For example, you could specify in a multiplayer game that:
    //    all players don't collide with each other and
    // monsters don't collide with each other,
    // but players and monsters should collide.
    // This is done with masking bits. For example:


    playerShapeDef.filter.categoryBits = 0x0002
    playerShape.filter.maskBits = 0x0004

    monsterShapeDef.filter.categoryBits = 0x0004
    monsterShapeDef.filter.maskBits = 0x0002


    //Collision groups let you specify an integral group index.
    //   You can have all shapes with the same group index always collide (positive index)
    //or never collide (negative index).
    // Group indices are usually used for things that are somehow related,
    //   like the parts of a bicycle.
    //  In the following example, shape1 and shape2 always collide,
    // but shape3 and shape4 never collide.


    shape1Def.filter.groupIndex = 2

    shape2Def.filter.groupIndex = 2

    shape3Def.filter.groupIndex = -8

    shape4Def.filter.groupIndex = -8


    // Collisions between shapes of different group indices are filtered
    // according the category and mask bits.
    // In other words, group filtering has higher precendence than category filtering.


//    This is the way I've understood how maskBits and categoryBits work. Let's say you have 3 objects : objectA, objectB and objectC.

//        Define for each object a category :

//        objectA.categoryBits = 0x0002;
//    objectB.categoryBits = 0x0004;
//    objectC.categoryBits = 0x0008;

//    Then, set the maskBits, which define the collisions rules for each categoryBits :

//        -> objectA collide with everyone (0xFFFF) and (&) not(~) objectB (0x0004)
//    objectA.maskBits = 0xFFFF & ~0x0004;

//    -> objectB collide with objectA (0x0002) or (|) objectC (0x0008) but no one else
//    objectB.maskBits = 0x0002 | 0x0008;

//    -> objectC collide with objectA (0x0002) but no one else
//    objectC.maskBits = 0x0002;



}
collide2=function(){

    m_boundaryListener=new b2BoundaryListener()



    bound=function(){

        // addEventListener(Event.ENTER_FRAME, Update, false, 0, true);

        var worldAABB  = new b2AABB();

        worldAABB.lowerBound.Set(-100.0, -100.0);
        worldAABB.upperBound.Set(100.0, 100.0);


        w=  bW(worldAABB, bV(0 ,10 ) , true)

        w.SetBoundaryListener(m_boundaryListener)


        m_sprite = new Sprite()
        addChild(m_sprite)
        dbgDraw  = new b2DebugDraw()
        dbgSprite  = new Sprite()
        m_sprite.addChild(dbgSprite)

        dbgDraw.m_sprite=m_sprite
        dbgDraw.m_drawScale=30;
        dbgDraw.m_alpha=1;
        dbgDraw.m_fillAlpha=0.5;
        dbgDraw.m_lineThickness=1;
        dbgDraw.m_drawFlags=b2DebugDraw.e_shapeBit;
        w.SetDebugDraw(dbgDraw);


        // ground
        bodyDef = new b2BodyDef()
        bodyDef.position.Set(4,12)
        boxDef = new b2PolygonDef()

        boxDef.filter.categoryBits=2;
        boxDef.SetAsOrientedBox(10, 1,new b2Vec2(5, 1.5), Math.PI/32);
        boxDef.friction=0.3;
        boxDef.density=0;
        body=w.CreateBody(bodyDef);
        body.CreateShape(boxDef);
        body.SetMassFromShapes();


        bodyDef = new b2BodyDef()
        bodyDef.position.Set(8, 12)
        boxDef = new b2PolygonDef()
        boxDef.filter.categoryBits=4
        boxDef.SetAsBox(1, 3)
        boxDef.friction=0.3
        boxDef.density=0
        body=w.CreateBody(bodyDef)
        body.CreateShape(boxDef)
        body.SetMassFromShapes()

        create_circle()
    }



    create_circle=function() {
        bodyDef = new b2BodyDef()
        bodyDef.position.x=6
        bodyDef.position.y=2
        circleDef = new b2CircleDef()
        circleDef.filter.maskBits=Math.ceil(Math.random()*3)*2
        circleDef.radius=2
        circleDef.density=1
        circleDef.friction=0.5
        circleDef.restitution=0.2
        body=w.CreateBody(bodyDef)
        body.CreateShape(circleDef)
        body.SetMassFromShapes()
    }



    Update=function(e:Event):void {
        w.st(1/30,10)

    if (m_boundaryListener.get_contact()) {
        m_boundaryListener.no_contact()
        w.dB(body)
        bodyDef = new b2BodyDef()
        create_circle()
    }




}
*/
CAT=function(){W([800,800],{g:50 }).C('z')




    //g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
    // b=  w.D(600,600,'b',100).f().bit(2, [1,4] )



    w.t_.bit(1, [8])

    w.D(600,200,'w',180).bit(1,[1]).r(.5)

    w.D(400,0,'g',100).bit(2, [1,2, 4,8]).r(.8)
    w.D(300,0,'g',183,183).bit(2, [1,2, 4,8]).r(.8)

    _.t(38,function(){
        w.D(R(1100,100), R(300,-2500), 'w', 20).bit(1,[1])
    })

    y= w.y(100, 100).rt(40).bit(8, [1,2,4])


/////////////////

    //together, same with walls
    // w.D(300,300,'o',183,183)//.grp(-3)
    // w.D(300,600,'o',100).cat(2)//.grp(-3)

    //w.D(600,600,'u',150).r(1).I(100,0).cat(0)
    //w.D(600,600,'b',80).bit(2,[1,4])



    //w.D(600,600,'p',60,90).bit(4,[1,2,4])
    // w.D(600,600,'r',183,183).bit(4,[1,2,4])
}
CXPT= function(){W().randRects().Y() //only works on NON-sensors?
    y.stat()
    w.y(100,100)
    w.b(function(cx){

        w.i.dot($r(), cx.pt().x, cx.pt().y   )

    })



}
PT= function(){W({W:2000,g:0}).Y();


    _.t( 10, function(){ w.D(800,200,'r', 20).K('r')  })


    w.S(50,550,'o', 200);  //w.S(800,300,'z', 80)

    b= w.S(300,0,'o', 200,300).K('r')

    r=   w.D(300,300,'r', 80).K('b')


    // dot both upper and lower bounds of AABB of both fixts

    w.cl(function(f,cx){var ab,lb,up

        ab = f.GetAABB(); lb = ab.lowerBound; ub = ab.upperBound
        w.i.dot('w', ub.x* 30, ub.y* 30); w.dot('p', lb.x* 30, lb.y * 30)

        ab = this.GetAABB(); lb = ab.lowerBound; ub = ab.upperBound
        w.i.dot('w', ub.x* 30, ub.y* 30); w.dot('p', lb.x* 30, lb.y * 30)

        f.dot('g')

        this.dot('r')   //dot center of both fixts

        w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers

        cx.w(b, col)

        cx.w('b', 'r', col);
        cx.w(b, r, col) ;
        cx.w('b', r, col)


    })


    w.end(function(cx){     cx.w('b',  col)   })
    function col(f){this.C($r())}

    //2do:draw line to connect these pts..
    // w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')

}
LCXPT=function(){W([3000,1000],{g:0,t:0})
    //<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )

    b=w.D(300,400, 'b', 200,200).cn('thrust').K('sqr')
    r= w.D(300,400, 'r', 200,200).cn('thrust').K('sqr')
    b.SetBullet(true)
    w.b(function(cx){cx.w(
        'sqr',
        function(){
            if(!cx.w('bruise')){
                b.cir({c:'z',r:15,x:cx.lP(b).x,y:cx.lP(b).y})
                    .K('bruise')}}

    )})
    CRAZY = function(){W({g:0}).randRects();
        b=w.D(300,400, 'r', 200,200).cn('thrust')
        w.b(function(cx){
            w.dot($r(),cx.p())
            lP = b.lP( cx.p() )
            b.cir({c:'z', r:15, x:lP.x, y:lP.y })})}


}
NORMAL=function(){W({W:1500, H:1200, g:0}).C('b')

    y=   w.D(100,100,'w',40).fR().cn('thrust').bS('me')
    y.cir('y',50)



    y.cl(w.S(300,300,'g',50),
        function(f,cx){w.D(600,300,'g',20).K('g').I(-cx.nX(300) ,cx.nY(300))})

    y.cl(w.S(900,300,'o',50),function(f,cx){
        w.D(600,300,'o',20).K('o')
            .I(-cx.nX(300),cx.nY(300))})


    y1=w.D(300,300,'w',10).fR().cn('thrust').bS('me').I(20,20)

    y1.cir('y',40).r(.8)

    Ball= $.mo(.5, function(n){w.D( 600, 200, 'o', 5).bit(0)
        .K('o').r(.9).I(n.x, n.y)})
    w.D(600, 300,'o',70).r(.8)
        .cl(function(f,cx){
            if(cx.nX()||cx.nY()){Ball(cx.n(10000))}})

    /*
     //just copies lV
     b=w.D(500,300,'b',50).d(1).K('b')
     r = w.D(700,300,'r', 80).d(1)
     w.b( function(cx){ cx.w('b', function(f){
     if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
     else {r.lV( cx.lV(cx.b()))}})})
     */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})


//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
    NL0 =function(){W({W:900, H:600, g:0,w:'|'}).C('b')
        y=w.D(100,100,'w',40)
        y.fR().cn('thrust').warp().bS('me').cir('g',50)
        w.S(200,300,'g',100).cl(function(f, cx){
            w.D(600,300,'g',20).I(-cx.nX(300),
                cx.nY(300))
        })
    }
    NL=function(){W({W:1200, H:600, g:0,w:'|'}).C('b')

        y=w.D(100,100,'w',40).fR().cn('thrust').warp().bS('me')
        y.cir('y',50)

        y.cl(w.S(300,300,'g', 100), function(f,cx){
            w.D(300,300,'g',20 ).I(-cx.no(300).x,cx.no(300).y) })

        y.cl(w.S(900,300,'o',100),function(f,cx){
            w.D(900,300,'o',20).I(-cx.no(300).x, cx.no(300).y)
        })

        y.cl(w.S(600,300,'w', 60,'-'), function(f,cx){
            w.D(600,300,'z',20,'-' ).K('w').I(cx.no(300).x, cx.no(300).y)
        })

    }

}
PRESOLVE=function () {W([1200, 600, 1200, 2000], {g:-1000}).stats().P(600, 1800)
    var b1,b2
    plat([300, 300], [900, 600], [300, 900], [300, 1000],[1000, 1200],[500, 1400])
    pf = plat(900, 1700)


    // PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).

    function plat(x,y){var g=G(arguments)
        if(g.O_){g.e(function(g){plat(g[0], g[1])}); return}
        return w.S(x,y,'o', 500, 40).K('pf')}
    p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
    p.cl(w._t, //when player coll roof,
        function(){ w.C('z'); w.G(1000)})

    //one way wall
    w.pre('pf',  function(f, cx){
        if( p.Y() - this.B().Y() > 10){ cx.en(0) }
    })

}
POSTSOLVE=function(){W([1200,600], {g:10//g:50//,w:'='
})


    // I want the dir of the tangent and its ratio to the impulse part!!!

    //PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!


    w.b_.fr(100000000000)
    w.S(100, 100,$r(),800,100,0,0,-20).fr(100000)
    y= w.y(140,400,'+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'

    w.D(200,200,'b',20).r(1)
    w.D(900,200,'r',100).r(1)



    //JASON YANOFSKI LISTEN TO YOU:
    //OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
    // THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
    // THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
    //BUT YOU MAY HAVE REASON TO WANT TO
    //'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
    imp=0;  tang = 0; sum=0
    w.po(function(cx, i, t){
        imp =i; tang =t
        if(first && M.a(i+t)>5) {
            sum = M.a(i + t)
            first = 0}
    })

    w.b(function(){ first = 1})

    w.show(function(){return imp+' + '+tang+' = ' + sum  })


// $l('i:'+i+' t:'+t+' sum:'+(M.a(i)+ M.a(t)) + ' prod:'+M.a((i*t)))



// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.

    w.D(400, 200, 'y', 50).d(.1).lV(10)
    w.D(200, 500, 'r', 40).d(1)
    w.D(200, 500, 'b', 25).d(100)
    w.D(800, 200, 'p', 10).d(1000).lV(-10)



}
WLWN=function(){W([1200,800], {g:8 }).Y()
    vor=  w.S(600,200)
    vor.cir({s:1,c:'z',r:140,o:.2,C:'z',l:20})
    w.S(200,250,'r',400,20); w.S(400,250,'w',20,40)
    _.t(10, function(){
        w.D(100,100,'z',10).K('ball')
        w.D(200,100,'w',10)})
    _.t(3, function(){
        w.me(900,100,5).fR().my('feet', function(){this.lV(-2,-10)})
        w.me(700,100,5).fR().my('feet', function(){this.lV(2,-10)})})
    y.wl(vor,   function(){w.e('ball', function(b){b.tow(600,200)})})
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
    //w.wn
    //  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
    b=w.D(100,100,'b',40).warp()
    x=w.D(50,100,'x',60,60).K('x').warp()
    w.S(1000,200).cir({r:300, c:'w',C:'o',l:10,o:0.2, s:1}).K('vor')
    y.warp()
        .wl('vor', function(){b.vY(-20)})
        .wn('vor', function(){x.vY(-20)}, function(){w.C($r())})
    //w.plat(400,500,40,20).K('pf').cl('x', function(){w.D(50,100,'x',60,60).K('x').warp()})
    //w.D(440,100,'y',50).K('ball'); w.cl('ball', function(cx){this.B().dot() })
}
MY = function () {W()


// could i automatically have body listen to their sens?
    w.ball().r(.3)
    workingGoomba =   p = w.p(900,450).cn('jump')
    p.my('hat',function(){p.bS('guy')})
    p.my('right');
    p.my('left')
    $.space(function(){

        if(p.my.right){p.I(100,-400)}
        if(p.my.left){ p.I(-100,-400)}

    })


}

