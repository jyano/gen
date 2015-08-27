b2d.p()

rJD.i=rJD.init=function(){var jd=this,g=G(arguments)
    //just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
    jd.Initialize.apply(jd, g)
    return jd}
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
    j.SetMotorSpeed(s); return j}
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

    if(N(g[3])){jd.aV(g.t,g[3])
        if(N(g[5])){jd.bV(g[4],g[5])}}

    else if(O(g[3])){
        jd.aV(g[3])

        if(O(g[4])){jd.bV(g[4])}}

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
        dial= w.D(x, y,'r',200,40),
        rock= w.S(x, y,'b',10,10)
    ).mt(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })

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

SPERCH=function(){W([1200,600,1200,1200],{}).P()
    p.tr()


    w.perch()
    w.seesaw(600,1100)
    w.seesaw(600,700)
    w.seesaw(600,500)


    w.spinner(400,900)
    w.spinner(800,900,'-')



}
RJ=function(){W({  m:0,  g:0  }).Y()
    //  p1 = V(300,300) ;w.dot(p1)
    //  p2 = V(360,360) ;w.dot(p2)
    //  p3 = V(450,450) ;w.dot(p3)

    b=w.D(300,300).lV(2).aV(1)
    b.cir({r:150,lf:['x','u']}).d(1)
    w.rJ(b,
        w.D(300,300,'b',500,40,0,0,30)
    )

    //blue pin spinner in middle
    b1= w.D(600,300,'b', 100,50).pin()
    r1 = w.D(600,300,'r', 100,100)
    w.$$(function(){w.rJ(b1,r1)})


}
LRJ=function(){W({  m:0,  g:0  }).Y()

    b= w.S(600,100,'b',10)
    w.rJ(b,
        link=w.D(600,120,'r',10) )
    w.rJ(link,
        link=w.D(600,130,'b',10) )
    w.rJ(link,
        link=w.D(600,140,'r',10) )
    w.rJ(link,
        link=w.D(600,170,'b',10) )
}
BL=function(){W(300).C('z')



    // w.S(600,300,'z',50,50).rJ(25).C('z').rJ(  w.y(300,300).cn('thrust')  )


    // p= w.p(300,200).cn('thrust').r(2)

    // base = Link(300, 20, 10)//.stat()
    // link =  base.rJ(10)

    //  w.rJ( link,  p.XY(link.X(), link.Y())  )


    //base = Link(100, 20).stat(); l =  base.rJ(10); w.rJ(l, p.XY(l.X(), l.Y()))

    link= w.S(100,120,'z', 20,20)
    js=[]
    _.t(20,function(){
        js.push(
            w.rJ(
                link,
                link =  w.D(
                    link.X(),
                    link.Y() +10,'w',3).d(3000 ) ) ) })
    link.rJ(w.p().cn('jump'))
    j=js[3]
}
ROUL=function(){W()


    w.D(400,200,'b', [
        [60],
        [100,50,0,200]
    ]).pin()


    y= w.D(800,200,'y', [
        [60],
        [40,80,0,60]])
    x= w.D(500,200,'x',  50 )

    w.$$(function(){j1=w.rJ(y,x)})

    w.rJ(
        w.D(350, 200,[
            [ 'b', 125,20],
            ['o',20, 60,-80,-40,200 ]
        ]),

        w.D(210,210,[
            [ 'g',150, 10, 0,0,0 ,1],
            [ 'r',10, 20, -140,-30 ,0 ,1]
        ]),

        -80,-90,60,0

    ).mt(10)

}
REVJ=function(){W().C('z')


    j = w.rJ(w.S(700,280), w.D(800,280,'r',200,40)).mt(4,100000)
    _.ev(4,function(){j.sp(-j.sp())})
    _.in(2, function(){ j.lm(0,200) })


    c=w.D(300,300)
    c.cir({r:60, c:'d',rf:1})
    w.rJ(c, w.D(300,300,'h',30,300))
    box = w.D(150,150,'n', 80,40)

    w.rJ(
        box,
        w.D(130,130,'p',50))

    w.rJ(
        w.S(400,200,'o',60).d(1),
        w.D(400,200,'o',200,40).d(1)).mt(-2)

    w.rJ(
        w.D( 120, 50,'y', 50,50),
        w.D( 100, 50, 'x', 50,50)
    ).mt(2)

    w.rJ(
        w.D(400,30,'g',30,50),
        w.D(400,30,'g',30,50)).mt(3)

    w.rJ(
        w.D( 400,30,'u',10,80),
        w.D( 400,30,'r',20,160 )
    ).mt(10)

    w.rJ(
        w.D( 400,30,'p', 50  ),
        w.D( 400,30, 'o', 20,160 )
    ).mt(7)

}
DEMOREV=function(){W()


    w.rJ(   a= w.S(100,100,20),  b=w.D(100,100,100,40) ).mt(5, 1)


    w.rJ( w.S(250,100,20), w.D(250,100,100,40) ).mt(5, 2)

    w.rJ( w.S(400,100,20), w.D(400,100,100,40)) .mt(5, 10000)



    w.rJ( w.baa(550,100), w.bi(550,100,100,40)) .mt(20,5)

    w.rJ( w.baa(700,100), w.bi(700,100,100,40)) .mt(20, 10)


    w.rJ( a2=w.baa(850, 100), b2=w.bi(850,100,100,40,'o') ).mt(20, 10000)



    w.rJ( w.baa(100,220), w.bi(100,220,100,40)).lm(0, 0)

    w.rJ( w.baa(250,220), w.bi(250,220,100,40)).lm(0,10)

    w.rJ( w.baa(400,220), w.bi(400,220,100,40)).lm(0,180)
    w.rJ( w.baa(550,220), w.bi(550,220,100,40)).lm(-180,0)
    w.rJ( w.baa(700,220), w.bi(700,220,100,40)).lm(-360,180)
    w.rJ( w.baa(850,220), w.bi(850,220,100,40)).lm(0,1000)

    w.rJ( w.baa(100,340), w.bi(100,340,100,40)).lm(0,0).mt(5,1)
    w.rJ( w.baa(250,340), w.bi(250,340,100,40)).lm(0,10).mt(5,2)
    w.rJ( w.baa(400,340), w.bi(400,340,100,40)).lm(0,180).mt(5,10000)
    w.rJ( w.baa(550,340), w.bi(550,340,100,40)).lm(-180,0).mt(20,5)
    w.rJ( w.baa(700,340), w.bi(700,340,100,40)).lm(-360,180).mt(20,10)
    w.rJ( w.baa(850,340), w.bi(850,340,100,40)).lm(0,1000).mt(20,10000)

    w.rJ( w.baa(100,460), w.bi(100,460,100,40)).lm(0,0).mt(-5,1)

    w.rJ( w.baa(250,460), w.bi(250,460,100,40)).lm(0,10).mt(-5,2)

    w.rJ( w.baa(400,460), w.bi(400,460,100,40)).lm(0,180).mt(-5,10000)



    w.rJ(
        w.baa(550,460), w.bi(550,460,100,40)
    )

        .lm(-180,0).mt(-20,5)

    w.rJ( w.baa(700,460), w.bi(700,460,100,40)).lm(-360,180).mt(-20,10)


    w.rJ(   w.baa( 850, 460 ), w.bi( 850, 460, 100, 40 )  ).lm( 0, 1000 ).mt( -20, 10000 )





}
BOOTCAN = function () {W({g: 0})
    w.rJ(w.S(300,600, 'a', 200),
        w.D(300,400, 'b',100,100))
    b = w.D(270, 500, 'o', 40).r(.5)
    r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000,1000).rt(100).dyn()
    r.rec('g',20, 40, 60, -20)
    cjs.t(function(){b.F(0, 400)})

}
MECH=function(){W().P().P().P().Y()
    w.rJ(
        w.D(800,300,'r',20,300),
        w.D(800,300,[['b',100],['y',50,10,100,0]])
    ).mt(10)

    dir = 10
    car= w.S( 300,300, 'r',  200,20)

    b=w.D(250,300,'b', 40).d(5).bS('me')

    j = w.rJ(b, car)//.mt(10)

    b2=w.D(350,300,'b', 40).d(5)

    b2.bS('me')

    j1 = w.rJ(b2,
        car).mt(10)


    w.$(function(){
        dir*=-1
        j.mt(dir)
        j1.mt(dir)
    })

    _.ev(1, function(){w.D(300,500,'y',20)})


}
HORSETETH=function(){W({w: 'L'}).P()

    s= w.D(300, 400,'b',90,30).d(1000).stat()


    //w.rJ(w.D(300-40, 400+50,'o',30), s)//.mt( 2)

    b= w.D(300+60, 400+50)

    b.cir({c:'x', r:30,rf:1})

    w.rJ(b, s)//.mt(2)

    //   w.car(100, 350, -2, 2)
    //  w.car(440, 350, 2, -2)
    // w.car(440,350,4)
    // w.car(540,350,2)

//w.makeCar()

    //car = w.car()
    w.dst(p, car).len(0)
    w.floor.fr(.1)



    w.roller()

    //_.t(3, function(){w.roller()})

//    _.ev(2000, function(){w.roller()})
    //  p.X(1750)

}
WAG=function(){W([1200,600,4000,600],{}).P()


    p.d(.2).track().cl(function(){
        p.onGround=true
    })

    x= w.D(600,300,'r',300,50).d(2).fr(3)

    wh= w.D(500,320)
    wh.cir({r:20, lf:'x'})
    w.rJ(x,wh)

    wh= w.D(550,320)
    wh.cir({r:20, lf:'x'})
    w.rJ(x,wh)

    wh= w.D(600,320)
    wh.cir({r:20, lf:'x'})
    w.rJ(x, wh)

    wh= w.D(650,320)
    wh.cir({r:20, lf:'x'})
    w.rJ(x, wh)

    wh= w.D(700,320)
    wh.cir({r:20, lf:'x'})
    w.rJ(x, wh)


}
WHL=function(){W(0).Y()

    x= w.S(600,300, 'r', 500,500,'-')


    wh= w.pWh({
        x:450,
        y:50,
        c:'z',
        r:50,
        n:9
    })


    w.rJ(x, wh, 50,-100)





    wh=w.pWh({x:450, y:50,
        c:'b',
        r:50,
        n:5
    })

    w.rJ(x, wh, 0,100)  //  x.rev(wh,0,100)


    wh= w.wh({
        x:450,
        y:50,
        c:'z',
        r:50,
        n:9
    })


    w.rJ(x, wh, -150,-50)




    /*
     x.wheel(0,0)

     x.wheel({
     x:450, y:50,
     c:'b',
     r:50,
     n:5
     })
     */
}
STAND=function(){
    W([600,1000,600,1200],{}).P('+')

    //y= w.ship(500,200)

    dir = 12



    car= w.D(300,300, 'r', 200,45)

    w1 = w.rJ(
        wheel(250,300),
        car
    ).mt(10)

    w2 = w.rJ(
        wheel(350,300), car
    ).mt(10)


    car3=w.D(500,300, 'r',  200,45)
    w.rJ(wheel(450,300), car3).mt(-10)
    w.rJ(wheel(550,300), car3)
    car3= w.D(700,300, 'r',  200,45)
    w.rJ(wheel(650,300), car3).mt(-10)

    w.rJ(wheel(750,300), car3).mt(-10)


    function wheel(x,y){
        pC=[b2d.pC(45,10)]
        return w.D(x, y, 'b', pC ).d(5)
    }

    w.$(function(){

        dir*=-1
        w1.mt(dir)
        w2.mt(dir)

    })

}
WHEEL=function(){W([1200,600,2400,600],{g:50}).P()

    p.track()

    yy=w.y().aD(5000)//.fixRot()

    dir = 12
    pC=[b2d.pC(45,10)]

    car= w.D(300,300, 'r', 200,45).fr(5)
    w.rJ(
        wheel(250, 300),
        car,0,0,100,0
    ).mt(-10)
    w.rJ(
        wheel(250, 300),
        car,0,0,-100,0)

    /*
     car= w.D(800,300, 'r', 200,45).fr(5)
     w.rJ(
     wheel(850, 300),
     car,0,0,100,0
     )
     w.rJ(
     wheel(850, 300),
     car,0,0,-100,0).mt(10)

     */
    function wheel(x,y){
        return w.D(x,y,'b',pC).d(5)}


}
BIKE1=function(){  W([1200, 600, 10000, 600], {})

    //yy=w.y().aD(5000)//.fixRot()
    dir = 12

    car = w.D(300, 300, 'r', [
        [200, 20],
        [20, 165, -50, -50, 45],
        [20, 165, 50, -50, -45]
    ]).fr(5).track()

    _.t(30, function(){
        w.me(R(9000,500), 100, R(2,.5))
    })

    wh = wheel(250, 300).C('b').bS('me',.7)

    j = w.rJ(
        wh, //.lD(100).aD(100).fr(100),
        car,
        0,
        0,
        100,
        0
    )


    w.rJ(
        wh2= wheel(250, 300, 50,10).C('g')
            .bS('me',.4).aD(10).fr(2),
        car, 0, 0, -100, 0
    )

    j =  w.rJ(
        wh3= wheel(250, 300, 25,6).C('y').bS('me',.2).lD(100).aD(100).fr(100),
        car, 0, 0, 0, -100
    )


    function wheel(x, y, r,n) {
        r = N(r, 80)
        n = N(n,15)
        pC = [b2d.pC(r, n)]
        return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
    }


    // j.mt(-50)
    T.t(function(){var K=cjs.Keys
        car.I(0,5000)

        if(K.r){
            wh.ApplyTorque(3500)
            wh2.ApplyTorque(3500)
            wh3.ApplyTorque(150)
        }

        if(K.l){
            wh.ApplyTorque(-3500)
            wh2.ApplyTorque(-3500)
            wh3.ApplyTorque(-150)
        }


        if(K.u){
            wh.ApplyTorque(1500)
            wh3.ApplyTorque(-500)
        }

        if(K.d){
            wh2.ApplyTorque(-500)
            wh3.ApplyTorque(1500)
        }
    })

    //car.aD(1000).lD(1000)
}
TANK=function(){W({g:0}).P()
    g = V( 0, 1000 )
    dir = 12

    car= w.S( 300,300, 'r',  100, 5)

    w1 = w.rJ(
        w.D(250,300,'b',
            [ b2d.pC(45,10) ]  ).d(5),   car)//.mt(10)
    w2 = w.rJ(
        w.D( 350, 300, 'b', [ b2d.pC(45,10)]).d(5), car)//.mt(10)
    /*
     w.$(function(){
     dir*=-1
     w1.mt(dir)
     w2.mt(dir)
     g = V(-g.x,-g.y)

     })

     cjs.t(function(){
     car.F( g )
     })
     w.right.cl(function(){g=V(-1000,0)})
     w.left.cl(function(){g=V(1000,0)})
     w.roof.cl(function(){g=V(0,-1000)})
     w.floor.cl(function(){g=V(0,1000)})
     */

}
REVROPE=function(){W([1200,600], {g:0})

    // anchor = w.S(600,300,'z',50,50)
    //  anchor.rJ(15).C('z').rJ(w.y(300,100).cn('thrust'))



    w.S(200,100,'z',50,50)
        .rJ(200,150,'b', 30)
        .rJ(200,180,'r', 30)
        .rJ(200,260,'o', 10)


}
BIKE=function(){  W([1200, 600, 2000, 600], {})

    //yy=w.y().aD(5000)//.fixRot()
    dir = 12

    car = w.D(300, 300, 'r', [
        [200, 20],
        [20, 165, -50, -50, 45],
        [20, 165, 50, -50, -45]
    ]).fr(5).track()//.lD(1000)

    _.t(30, function(){w.me(R(9000,500), 100, R(2, .5))})


    wh = w.D(250, 300, 'w', 60).C('b').bS('me',.6)//.lD(5).aD(5)
        .fr(10).r(.8)

    wh1= w.D(250, 300, 'w', 60).C('g')//.lD(5).aD(5)
        .bS('me',.6).r(.8).fr(10)
    //.aD(10).fr(2)

    //w.b_.fr(100)

    j = w.rJ(
        wh, //.lD(100).aD(100).fr(100),
        car,
        0,
        0,
        100,
        0
    )//.M(.1)

    j1=  w.rJ( wh1, car, 0, 0, -100, 0 )//.M(.5)



    // j.mt(-50)
    T.t(function(){var K=cjs.Keys

        car.I(0,5000)

        if(K.r){

            // wh.ApplyTorque(5500)
            j.mt(-500)
            j1.mt(-500)
        }

        else if(K.l){
            // wh.ApplyTorque(-3500)

            j.mt(500)
            j1.mt(500)

        }
        else {j.mt(0)}


        if(K.u){

            wh.ApplyTorque(1500)

        }

        if(K.d){

            j.SetMotorSpeed(0)
            j1.SetMotorSpeed(0)

            wh1.ApplyTorque(-500)

        }
    })



    //car.aD(1000).lD(1000)
}



pinball=function(){

    w.flips = w.flippers = function (x, y, x2, y2) {

        if (U(y2)) {
            y2 = y
        }
        if (U(x2)) {
            x2 = x + 230
        }

        var lf = w.lFlip(x, y),
            rf = w.rFlip(x2, y2)

        var flip = function flip() {
            lf.flip();
            rf.flip();
            return flip
        }

        flip.left = lf
        flip.right = rf

        return flip
    }
    LFLIP = function () {
        W()

        w.lFlip(600, 300)
    }
    FLIP = function () {
        W()
        f1 = w.flippers(100, 430)
        f2 = w.flippers(100, 230)
        f3 = w.flippers(300, 130)
        flip = function () {
            f1();
            f2();
            f3()
        }
    }
    w.rFlip = w.rightFlipper = function (x, y) {
        var w = this
        var rightJoint = w.S(x, y, 'r', 20),
            rightFlip = w.D(x, y, 'b', 100, 25).DBF(1, .5, 0),

            flipper = w.rev(
                rightJoint, rightFlip, 0, 0, 40, 0
            ).lim(-70, 30)


        flipper.flip = function () {
            rightFlip.I(-1000, 0)
        }
        return flipper
    }
    w.lFlip = w.leftFlipper = function (x, y) {
        var w = this

        var fl = w.D(x, y, 'b', 100, 25).DBF(1, .5, 0),

            flipper = w.rev(
                w.S(x, y, 'r', 20), fl,

                0, 0, 40, 0
            ).lim(150, 250)

        flipper.flip = function () {
            fl.I(1000, 0)
        }

        return flipper
    }
    PINBALL = function(){W([420,600],{})
        w.floor.kill()



        w.S(215, 520, 'r', 30).K('bump').DBF(10, .8, 0)
        w.S(215, 100, 'b', 100, 10).K('shelf')



        w.D(215, 90, 'r', 20)
            .bS('sun', .24)
            .K('sun')
            .rot(10, 100)

        flip = w.flips(100, 430)

        $.tap(function () {
                var b = w.B(R(300, 40), 160, 'g', 20).DBF(1, .2, 2)
                if (!R(10)) {
                    b.bS('me', .24)
                }
                flip()
            }
        )

    }




}; pinball()

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