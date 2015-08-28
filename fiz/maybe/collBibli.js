

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