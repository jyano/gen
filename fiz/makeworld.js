b2d.p()

easel()
cjsMath()
worldPt()
debugPt()
scrolling()









NRM=function(){W()
    w.D(800,300,'b',10).d(1)
    w.D(800,300,'x',10,10).d(1)
    b= w.D(800,300,'b',100).d(1)
    x= w.D(800,300,'x',100,100).d(1)
    w.D(800,300,'b',200).d(1)
    w.D(800,300,'x',200,200).d(1)
    // w.s.al(0)
    w.i.autoClear=false
    return w
}
CANC=function(){Q(function(){z()


    w={W:1200, H:600}

    ii=w.I= $St('z', w.W, w.H, 0, 0).t()

    s= w.s= $St('X', w.W, w.H, 0, 0).t()

    w.canvas = w.s.canvas

    w.can= $(w.canvas)

    w.ctx = w.can.ctx('2d')

    bg= w.bg= w.s.ct()

    g=  w.g=  w.s.ct()

    fg=  w.fg= w.s.ct()

    i= w.i= $St('X',w.W,w.H, 0,0).t()

    g.bm('me', function(bb){b=bb.drag()})

    i.bm('me', function(bb){b=bb.drag()})

})



    CANC1=function(){

        w={W:1200,H:600}

        /*
         w.I = $St('z', w.W, w.H ,0, 0).t()
         w.s= $St('X', w.W, w.H, 0, 0).t()//.aC(0)
         w.canvas = w.s.canvas
         w.can= $(w.canvas)
         w.ctx = w.can.ctx('2d')
         w.bg= w.s.ct();
         w.g=  w.s.ct();
         w.fg= w.s.ct()
         */
        w.i =  $St('b', w.W, w.H, 0, 0).t()
        /*
         ii = w.I
         s= w.s
         bg= w.bg
         g= w.g
         fg= w.fg
         i= w.i
         */
        $.in(1,function(){
            w.i.bm('me','+')
        })
    }

}


function scrolling(){


    b2d.p()

    refMakeWorldScrollCode=function(){


        w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee
        w.i.A( w.tSpr=  $Ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)


        z(function(){


            if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()} // actually calls the callbacks


            // i see w.sXCap and w.sYCap.. i think they limit the scroll distances
            //distances are simply calculated and assigned right to **** w.s *****
            //so it moves the actual stage... (dont worry, not the canvas)
            w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )
            w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )


            if(w.t == w._t){// if the trackee is the generic one that world provided...
                //have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
                w.t.XY(
                    w.tSpr.X(),
                    w.tSpr.Y()
                )
                w.s.rot(  w.tSpr.rot()  )

            }

        })




    }

    w.track=  function(t,cX,cY, bf){var w=this    //i can leave the world-centering in fw//can optionally filter it with scale itself //  has limits now!  and more.. tis is the ultimate!

        if(U(t)){t = w._trackee}

        w.t=t
        cX=N(cX,w.W/2)
        cY=N(cY,w.H/2)  //option to set based on t's CURRENT X/Y?


        if(bf=='!'){

            z(function(){var sX,sY

                sX = w.z*(t.X()-cX)

                sX =  sX  *   1  / ( 1 + w.hW/w.w )

                sY = w.z*(t.Y()-cY)

                sY = sY /  (1+ w.hH/w.h)

                w.sXY(sX,sY)
            })
        }

        else if(bf=='-'){
            z(function(){
                w.s.x =  (cX-t.X())* w.z     -   w.W*(w.z/2-.5)
                w.s.y =  (cY-t.Y())*w.z     -   w.H*(w.z/2-.5)
            })
        }

//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
        else if(O(bf)){

            bf.x = N(bf.x)? bf.x : w.w/2
            bf.y = N(bf.y)? bf.y: w.h/2
            bf.w=  N(bf.w)? bf.w:  0
            bf.h=  N(bf.h)? bf.h:   0
            bf.mX = N(bf.mX)? bf.mX : 1
            bf.mY = N(bf.mY)? bf.mY: 1

            w.S(bf.x, bf.y, 'r',  [  [bf.w, bf.h, '-'] ] )
            w.S(bf.x, bf.y, 'w',  [  [bf.w+20, bf.h+20, '-'] ] )
            w.S(bf.x, bf.y, 'b', [ [bf.w, w.h,  '-'] ] )
            w.S(bf.x, bf.y, 'b', [ [w.w,  bf.h,  '-'] ] )
            w.S(bf.x, bf.y, 'z',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)
            w.S(bf.x, bf.y,'w',[[bf.w,bf.h,'-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')

            z(function(){var sX,sY
                // sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
                sX =  bf.x - w.hW  + cjs.adj(t.X()-bf.x, bf.w/2)*bf.mX /// bf.mX //scaling not needed?
                sY = (bf.y- w.hH)   + cjs.adj( t.Y()-bf.y,  bf.h/2)*bf.mX// /bf.mY
                w.sXY( sX,  sY)})
        }

        else {

            //each tick, literally just sets w.sXY() based on:
            // world dimensions, world zoom, and trackee position

            z(function(){var dX,dY
                //run pre-scroll hook cb's
                if(F(w.t.cb)){w.t.cb()}
                if(w.track.cb&& F(w.track.cb)){  w.track.cb()  }
                // if the designated trackee optionally has its own cb,
                // that over rules the (also optional) 'w.track.cb' cb
                dX=t.X()-cX
                dY=t.Y()-cY
                w.sX(  w.z* w.hW +  w.z*dX -   w.hW)
                w.sY(w.z* (w.hH+ dY )-w.hH)
            })
        }
        return w

    }

    w.sXY=function(x,y){
        $l('sXY')
        if(U(x)){return {}}
        this.sX(x)
        this.sY(y)
   return this
    }


    w.sXCap=function(s){return cjs.cap( s, 0, this.w * this.z - this.W) }
    w.sX=function(x){var w=this



        if(U(x)){return -this.s.x}
        this.s.x = -this.sXCap(x)

        return w
    }
    w.sYCap=function(s){return cjs.cap(s, 0, this.h*this.z-this.H )}
    w.sY=function(y){var w=this

        if(U(y)){return -w.s.y}
        w.s.y = -w.sYCap(y)
        return w

    }

    b.tr= b.track=function(x,y,z){var b=this,w= b.W()
        w.track(b,x,y,z)
        return b}

    //get/set zoom.. ok cool :)

    w.Z = function(s){var w=this
        if(U(s)){return w.z}
        w.z = s=='-'? w.mS : cjs.cap(s, w.mS)
        w.s.sXY(w.z)
        return w}

    b.centerScale = function(z){var b= this,w=b.W()

        w.s.sXY(z)

        w.s.X(

            w.hW -      (  (b.X()-w.hW) *z)

        )

        w.s.Y(w.hH - ((b.Y() - w.hH)) *z)

        return b

    }

    w.zoomOut=function(){var w=this //knows when to stop :)
        w.tCb= function(){  w.Z( cjs.cap( w.z*=.98, w.mS))  }
        return w}
    w.zoomIn=function(){var w=this
        w.tCb= function(){ w.Z( cjs.cap( w.z*=1.02,0,4))   }
        return w}
    w.inout=function(){var w=this, // now it works!!!!
        s=1,
        up=true

        w.t.cb = function(){
            if(up){
                if(s<2){ s+= .2; }
                else {up=false}
                w.Z(s)
            }

            else {
                if(s > .8){ s -= .2   }
                else {up=true}
                w.Z(s)
            }
        }

        return w}
    w.showOff=function(){var w=this
        zin()
        function zout(){w.zoomOut(); $.in(10, zin)}
        function zin(){w.zoomIn();  $.in(4, zout)}
        return w
    }
    w.pan=function(o){
        var  w=this,  g=G(arguments),  o=g[0],
            mZ = w.mZ ,
            MZ= mZ*3,
            z= w.mZ*3,  up=true,
            l
        if(g.m){
            l=function(){

                up = z > w.mZ*3? false :
                    z < w.mZ ? true:
                        up

                z *= up? 1.01 : .9
                w.Z(z / w.mZ)
            }
        }

        else {l=function(){

            up = z > w.mZ*3? false : z < mZ? true: up
            z += up? .03 : -.03
            w.Z(z / w.mZ)

        }}

        w.track.cb=l

        return w
    }

    old=function(){
        /*

         w.sW=function(W){
         var w=this, wW=w.W

         if(U(W)){return wW * w.s.scaleX}
         w.s.scaleX=W/wW
         return w}


         w.sWM=function(m){var w=this,cW=w.cW()
         if(U(m)){return w.sW()/cW}
         w.sW(  cW * m  )
         return this}

         w.fit=function(){var w=this

         w.s.scaleX = w.cW()/ w.w;
         w.s.scaleY = w.cY()/ w.h;
         }

         w.xX=function(X){

         var w=this,

         m = w.sWM()


         if(U(X)){return m-1}

         w.sWM(X+1)

         return w}


         w.zX=function(z){var w=this,

         zX=w.s.scaleX - 1

         if(U(z)){return zX}

         if(z>=0){ w.s.scaleX=z+1}

         else {

         cW = w.cW()

         half = cW/2

         newW =  cW + half*( -(z-1) )

         newSc = cW/newW

         w.s.scaleX = newSc
         }




         return w}




         */
//w.MIN = function(){var w=this; return w.Ww > w.Hh ? w.Ww : w.Hh }
//w.wz = function(){var w=this; return (V(   wX= w.s.x, wY= w.s.y ))} //we never want a positive wz!! means right stage corner is visible
//w.rOK = function(){var w=this; return  w.s.x + w.W*w.z - 1200}
//w.bOK = function(){var w=this; return w.s.y + w.H*w.z - 600}
////w.df=function(){var w=this; return {   x: w.Ww,  y: w.Hh }}


        /*
         w.cam=function(x,y){var w=this //<-pXY
         if(U(y)){y=x;x=0}
         w.pXY(x,y)
         w._camX=x; w._camY=y
         return w}

         w.camLims = function(xm, xM, ym, yM){var w=this
         if(A(xm)){
         w._camLimX = xm
         w._camLimY = xM}
         else {
         w._camLimX = [xm,xM]
         w._camLimY = [ym,yM]}
         return w}
         */
        //DEP TO TRACK
        w.folx= w.follx= function(b,x,y,pX){var w=this

            w.fw=function(b,x,y){var w=this


                w.S(x,y,'o', [ [40,400,'-']])

                w.dbCross(x,y)
                // w.dot(x,y,'+')


                cjs.tick(function(){
                    w.pX(b.X()-x)
                    w.pY(b.Y()-y)
                })

            }

            w.fwBuf=function(b,x,y, pX,pY,bX,bY){var w=this

                //  w.s.HUD.dot('w', x, y)

                w.S(pX, w.h/2, 'b', [ [bX*2, w.h,  '-'] ] )
                w.S(w.w/2,pY, 'b', [ [w.w, bY*2,  '-'] ] )
                w.S(pX, pY, 'w',  [  [bX*2+20, bY*2+20, '-'] ] )
                w.S(pX, pY, 'r',  [  [bX*2, bY*2, '-'] ] )
                w.S(pX, pY, 'o',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)


                scale = 1

                cjs.tick(function(){

                    w.pX( (pX-x)  +  cjs.adj(b.X()-pX,bX)  * scale )

                    w.pY( (pY-y)  +  cjs.adj(b.Y()-pY,bY)  *scale    )


                })

            }

            if(U(pX)){
                w.fw.apply(w, arguments)
            }

            else {

                w.fwBuf.apply(w, arguments)
            }
            return this}


        w.follRatio=function(t,cX,cY){
            //he reaches length of screen at same time as end of world!!!

            var w=this
            cjs.tick(function(){var sX,sY
                sX = w.z*(t.X()-cX)
                sX =  sX  *   1  / ( 1 + w.hW/w.w )
                sY = w.z*(t.Y()-cY)
                sY = sY /  (1+ w.hH/w.h)


                w.sX(sX).sY(sY)



            })


            return w}

//DEP TO TRACK
        w.bufFoll =function(t,cX,cY,bf){ var w=this

            bf=bf||{}
            bf.x = N(bf.x)? bf.x : w.w/2
            bf.y = N(bf.y)? bf.y: w.h/2
            bf.w=  N(bf.w)? bf.w:  0
            bf.h=  N(bf.h)? bf.h:   0
            bf.mX = N(bf.mX)? bf.mX : 1
            bf.mY = N(bf.mY)? bf.mY: 1

            w.S(bf.x, bf.y,'w',[[bf.w,bf.h,'-']])


            /* w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')

             w.dot(bf.x+bf.w/2, bf.y-bf.h/2    ,'+')

             w.dot(bf.x+bf.w/2, bf.y+bf.h/2         ,'+')

             w.dot(bf.x-bf.w/2, bf.y+bf.h/2 , '+')


             w.dot(bf.x, bf.y, '*')
             w.dot('z', 600,600,'+')
             */
            w.track(t,cX,cY,bf)
            /*
             cjs.tick(function(){var sX,sY
             // sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
             sX =  bf.x - w.hW  + cjs.adj(t.X()-bf.x, bf.w/2)*bf.mX /// bf.mX //scaling not needed?
             sY = (bf.y- w.hH)   + cjs.adj( t.Y()-bf.y,  bf.h/2)*bf.mX// /bf.mY
             w.sXY( sX,  sY)})
             */
            return w}


        w.pX =  function(x){var w=this
            if(U(x)){ return -w.s.x }
            //if(w._camLimX){w.s.x =  -cjs.cap(x,   w._camLimX[0]* w.z,  w._camLimX[1] * w.z  )}
            else {w.s.x = -x  }
            return w}
        w.pY =  function(y){var w=this

            if(U(y)){return -w.s.y}
            w.s.y = -cjs.cap(y,  w._camLimY|| [0,0] )

            return w}
        w.pXY = function(x,y){var w=this
            if(U(x)){ return V(w.pX(),w.pY()) }
            return w.pX(x).pY(y)}

        w.pos=function(x,y){var w=this
            w.s.XY(-x,-y)
            w.cX = -x
            w.cY = -y
            if(w.z){ w.scl(w.z) }
            return this}

        w.zoomx= w.zmx= function(z){var w=this,  g=G(arguments), z=g[0]

            if(U(z)){return w.z * w.mZ}


            z = g.n?  w.mZ : cjs.cap(z, 0)

            $l(  z / w.mZ )
            w.Z(z / w.mZ)

            // if(g.P){w.Z(cjs.cap(z, 0, w.mZ) / w.mZ); return w}

            return w}
        w.sclx=function(s){var w=this // scale and translate to keep centered
            w.z = s
            w.cX= w.cX||0;
            w.cY= w.cY||0

            w.s.X( w.W/2 +  ( w.cX- w.W/2 ) * s    )
            w.s.Y( w.H/2 +  ( w.cY- w.H/2 ) * s    )

            return w}
        w.limSclx=function(n){var w=this,hW,hH
            w.z=n
            w.cX=w.pX()
            w.cY=w.pY()
            w.s.sXY( n )
            hW=w.W/2
            hH= w.H/2
            w.pX( -((w.cX - hW)*n+hW))
            w.pY( -((w.cY - hH)*n+hH))

            return this
        }
        w.scalex=function(a){var w=this
            w.s.sXY(a)
            if(a<1){w.s.XY(w.W*(1-a)-w.W/2,w.H*(1-a)-w.H/2)}
            else {w.s.XY(w.W-(w.W*a)/2, w.H-(w.H*a)/2)}}
        w.ratx=function(){return {x: w.w/w.W, y: w.h/w.H}}
        w.followx= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

            cjs.tick(function(){
                K=function(n){return n*w.z}
                cW = w.cW()
                wW = w.w
                cH = w.cH()
                wH = w.h
                MULT = .9//1.1 //1//4 //zoom
                sX = cW/2 + cjs.adj( b.X()-cW, 0) * MULT //sX=K(b.X()-x) + (K(cW)-cW)/2
                w.s.x = -cjs.cap(sX, 0, K(wW)-cW )
                sY = cH/2 + cjs.adj( b.Y()-cH,  0)//  * MULT //sY=K(b.Y()-y) + (K(cH)-cH)/2
                w.s.y = -cjs.cap(sY,0, K(wH)-cH )
            })

            return w}



    }

    tSpr=function(){




        w.tX=function(t){var w=this
            if(U(t)){return w.tSpr.X()}
            w.tSpr.X.apply(w.tSpr, arguments)
            return w
        }


        w.tY=function(t){var w=this
            if(U(t)){return w.tSpr.Y()}
            w.tSpr.Y.apply(w.tSpr,arguments)
            return w}


        w.tXY=function(x,y){var w=this
            if(U(x)){return {x: w.tX(), y: w.tY()}}

            y=N(y)?y:x

            return w.tX(x).tY(y)
        }
        w.tRightLeft=function(){var w=this, left
            z(function(){
                if(!left){
                    w.tX(10,'+')
                    if(w.tX() > 2000){left=1}
                }
                else {
                    w.tX(10,'-')
                    if(w.tX() < 400){left=0}
                }})
            return w}

    };tSpr()

    w.ramps=function(){var w=this
        w.ramp(
            [400, 350, 200, 300, 100],
            [500, 350, 300, 300, 60],
            [600, 350, 200, 300, 100],
            [700, 350, 300, 300, 60],
            [800, 350, 200, 300, 100],
            [1000, 350, 300, 300, 60],
            [1030, 350, 200, 300, 100],
            [1200, 350, 300, 300, 60])
        return w
    }

    w.bricks=function(){var w=this,g=G(arguments)
        _.e(g, function(g){w.S.apply(w,g)})
        return w}


    SPACEGRAVMACH= SUNZOOM=function(){W({g:0,w:0})

        w.thrustPlayer=function(x,y){var w=this,p
            p=w.p(x,y,2.5,'thrust').lD(.8).aD(10000)
            return p}
        w.stars(10)
        w.s.rXY(600,300)
        w.s.XY(600,300)

        p = w.p().cn('thrust')
        sun = w.sun()

        $.in(.3,function(){


            sun.sp().twL([{r:360},10000])

        })




        //preload to the rescue ??


        w.dJ({a:p,b:sun,cl:1}).fq(10).d(10).l(10)


        green(400,100);
        green(400,200);
        green(200,100);
        green(200,200)
        function green(x,y,fq){
            w.dJ({
                a:w.gG(x,y),
                b:sun,
                cl:1})
                .fq(N(fq,1)).d(0).l(15)}
        b2d.scaleFunc = function(b1,b2,max){
            max=N(max,2)
            var dst = 150/M.sqrt(
                    M.sqr(b1.X()-b2.X())+
                    M.sqr(b1.Y()-b2.Y())
                )
            return dst>max?max:dst
        }

        T.t(function(){
            w.s.sXY(
                b2d.scaleFunc(sun,p,2) )
            p.centerScale( b2d.scaleFunc(sun,p,2) )

        })

    }




    SPACE=function(){W({g:0, w:0 });  Q(['earth'],function(){

        s=  w.s

        e=  w.S(200,200,'p',100).d(1).r(2)
            .bS({i:q.bm('earth'),sc:.13})
            .K('earth'); eI= e.sp()

        p=  w.player(200,200,2.5, 'thrust')
            .d(.4).aD(8).lD(.8)

        w.dJ({ a:p, b:e, l:50, f:0.15,
            coll:1
        })
        T.t(function(){var sp, dx=e.X()-p.X(), dy=e.Y()-p.Y(),
            sc = cjs.cap(
                300/ M.sqrt(dx*dx+dy*dy), .3, 2 )
            s.XY(
                300-sc*(p.X()-300),
                150-sc*(p.Y()-150) )
        })
    })

    }


}
function debugPt() {
    dd.i = dd.spr = dd.sprite = function (spr) {
        var dd = this  //it is looking for  a context?
        if (U(spr)) {
            return dd.GetSprite()
        }
        dd.SetSprite(spr)
        return dd
    }
    dd.scale = dd.drawScale = dd.dS = function (sc) {
        var dd = this
        if (U(sc)) {
            return dd.GetDrawScale()
        }
        dd.SetDrawScale(sc)
        return dd
    }
    dd.alpha = dd.fillAlpha = dd.fA = function (a) {
        var dd = this
        if (U(a)) {
            return dd.GetFillAlpha()
        }
        dd.SetFillAlpha(a)
        return dd
    }
    dd.line = dd.lineThickness = dd.lT = function (lt) {
        var dd = this
        if (U(lt)) {
            return dd.GetLineThickness()
        }
        dd.SetLineThickness(lt);
        return dd
    }
    dd.flags = dd.fl = function (flags) {
        var dd = this, DD = b2DebugDraw
        if (U(flags)) {
            return dd.GetFlags()
        }

        if (flags == '*') {
            flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
        }

        dd.SetFlags(flags)

        return dd
    }
}
function worldPt() {

    w.vW = function (col, H, x, y) {
        var w = this, g = G(arguments),
            cW = w.can.W(),
            cH = w.can.H()
        if (!S(col)) {
            y = x;
            x = H;
            H = col;
            col = 'x'
        }
        H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
        if (U(x)) {
            x = cW / 2;
            y = cH / 2 - H / 2
        }
        else if (U(y)) {
            x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
            y = cH / 2 - H / 2
        }
        //x-=10?
        return w.R(col, 20, H, x, y).bo(.2).K('wall')
    }

    w.eEv = w.eachEvery = function (fn) {
        var w = this
        z(function () {
            w.e(fn)
        })
        return w
    }
    w.inEv = function (n1, n2, fn) {
        $.in(n1, function () {
            $.ev(n2, function () {
                fn()
            })
        })
    }
    w.evIn = function (n1, n2, fn) {
        $.ev(n1, function () {
            $.in(n2, function () {
                fn()
            })
        })
    }
    w.warp = function () {
        var w = this
        w.eEv(function (b) {

            if (b.X() < 10) {
                b.X(w.W - 10)
            }
            if (b.X() > w.W - 10) {
                b.X(10)
            }
            if (b.Y() < 10) {
                b.Y(w.H - 10)
            }
            if (b.Y() > w.H - 10) {
                b.Y(10)
            }
        })

        return w
    }


//cjs.Ticker.removeAllEventListeners() //w.show(function(){})
// not working with scroll


    w.UI = function () {
        return $(this.i.canvas)
    }


    w.R = function (c, W, H, x, y) {
        var w = this, g = G(arguments),
            wC = w.cen(),
            r

        if (!S(g.f)) {
            y = x;
            x = H;
            H = W;
            W = c;
            c = 'x'
        }
        if (U(W)) {
            W = 200
            H = 200
            x = wC.x - W / 2
            y = wC.y - H / 2
        }
        else if (U(H)) {

            H = W
            x = wC.x - W / 2
            y = wC.y - H / 2
        }
        else if (U(x)) {
            x = wC.x - W / 2;
            y = wC.y - H / 2
        }
        return w.S(
            x + W / 2,
            N(y, x) + H / 2,
            c,
            W, H
        )

        /*
         x=N(g[0])?g[0]:wC.x
         y=N(y)?y:N(g[0])?N(g[0]):wC.y
         W=N(W)?W:100
         H=N(H)?H:W
         */
    }
    w.walls = function () {
        var w = this, g = G(arguments), o

        if (g.f === 0) {
            return
        }
        o = g.$S ? {w: g.f, c: g.s} : g.A ? {w: g.f[0], c: g.f[1]} : {}
        o.c = o.c || 'o';
        o.w = o.w || '*'
        o.l = 40

        if (o.w == '*') {
            sides();
            verSides()
        }
        if (o.w == '@') {
            w.warp();
            return w
        }
        if (o.w == '_') {
            bot()
        }
        if (o.w == '~') {
            top()
        }
        if (o.w == '[') {
            left()
        }
        if (o.w == ']') {
            right()
        }
        if (o.w == 'U') {
            sides();
            bot()
        }
        if (o.w == 'A') {
            sides();
            top()
        }

        if (o.w == 'C') {
            verSides();
            left()
        }

        if (o.w == 'L') {
            left();
            bot()
        }
        if (o.w == '=') {
            verSides()
        }
        if (o.w == '|') {
            sides()
        }


        if (o.w == '->') {
            verSides();
            left();
            right1()
        }
        if (o.w == '<-') {
            verSides();
            left1();
            right()
        }
        if (o.w == '<->') {
            verSides();
            left1();
            right1()
        }


        if (o.w == 'r2') {
            verSides();
            left();
            right2()
        }
        if (o.w == 'l2') {
            verSides();
            left2();
            right()
        }


        /*

         if (A(o.w)){

         c = o.w[0]
         if (!S(c)){
         h = W;
         W = c;
         c = 'o'
         }
         o.c = o.c || 'o'
         w.floor = w.R(o.c, w.wW, 20, 0, w.wH - 20)
         w.right = w.R(o.c, 20, w.wH, w.Ww - 20, 0)
         w.roof = w.R(o.c, w.wW, 20, 0, 0)
         w.left = w.R(o.c, 20, w.wH, 0, 0)}*/

        function sides() {
            right();
            left()
        }

        function verSides() {
            top();
            bot()
        }


        function left() {

            w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left')
            w.l_.SetBullet(true)

        }


        function right() {
            w.r_ = w.right = w.S(
                w.w, w.h / 2, o.c, o.l * 2, w.h
            ).K('wall side right')
            w.r_.SetBullet(true)
        }

        function right2() {
            w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
        }

        function right1() {
            w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
            w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
        }


        function left2() {
            w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
        }

        function left1() {
            w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
            w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
        }


        function top() {

            w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof')
            w.t_.SetBullet(true)

        }


        function bot() {
            w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor')
            w.b_.SetBullet(true)
        }

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
}
function cjsMath(){
    cjs.adj = cjs.camAdj = function (income, tax) {
//tax ~ deltaLimit ~ buffer
        var income = income || 0, tax = tax || 0
        if (income > 0) {
            return income > tax ? income - tax : 0
        }
        return -income > tax ? income + tax : 0
    }
    cjs.cap = function (n, m, M) {

        if (U(m)) {
            return n
        }


        if (A(m)) {
            M = m[1]
            m = m[0]
        }

        return n < m ? m
            : n > M ? M
            : n
    }
}
function easel(){
    ct.aC=function(ac){
        var ct=this
        if(U(ac)){return ct.autoClear}
        ct.autoClear = ac?true:false;
        return ct
    }

    T.iP=function(){return T.getPaused()}
}




