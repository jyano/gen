
//dist
DISTY1=function(){W([600,600,600,1200])
    b= w.D(300,200, 'b', 150).tr()
    x=  w.D(200,100,'x', 20).cn('thrust').bS('me').aD(100).fR()
    jD =new b2d.Joints.b2DistanceJointDef
    wAncA= V(300, 200,  '-')
    wAncB= V(200, 100 , '-')
    jD.Initialize(x, b, wAncA, wAncB )  // dJD.collideConnected = true;
    j = w.J(jD)
}
DISTY=function(){W([1000,600], {})
    //p.lD(2).fR()//.r(1.6)

    // p.stat()
    chain = w.Chain()
    p = w.p(300,300, 2);
    v0 = w.S(200,100, 'r', 15).d(15)
    v1 = w.D(300,150, 'y', 15).d(15)
    v2 = w.D(200,200, 'g', 15 ).d(15)

    chain.j(v0, v1)//.fq(20).d(0)
    chain.j(v1, v2)//.fq(20).d(0)

    chain.j( p,v2, p.X(), p.Y()-40, v2.X(), v2.Y()
    )//.fq(30).d(1)

    // T.t(function(){  p.F(0,20)  })
    // _.e(js, function(j){ j.l(40).fq(12).d(3)  })

    // p.F(0,100,'+')

    // chain.d(0).f(60)

    chain.d(.4).f(12).l(40)
}
LOCDJ=function(){W([2000,1400], { })

    x = w.S(300,400, 'r' ,100, 100)
    //b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()

    b= w.y(400,200,'+')
    j=  w.dJ( {  a:x,  b:b    }  )


    _.ev(.2, function(){

        w.dot(   j.GetAnchorA().m().x,  j.GetAnchorA().m().y )

        w.dot(   j.GetAnchorB().m().x,  j.GetAnchorB().m().y )

    })

    j.fq(8)

    j.d(0)

    // w.dJ(x,b)

    w.dot('z', 1310,400)
}
DJ = function () {W([1400,800], {g: 1000}).Y(500,300);y.tr()


    w.S(400,500,'r', 4, 2000)

    w.dJ({
        a: w.D(200, 200, 'b', 50),
        b: w.D(300, 200, 'b', 60),
        l: 50, f: 3, d: .1,
        cl: 1
    })

    w.dJ({
        a: w.D(200, 200, 'd', 50, 50),
        b: w.D(300, 200, 'd', 60, 60),
        l: 50, f: 3, d: .1, cl: 1
    })



    w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)

    w.spg(  w.S(200, 100, 'g',10).sen(1),  w.D(200, 250, 'b',250, 10).K('rec')  ).fq(3).d(.1)

    oj = w.dJ(w.D(830,700,'o',50).bS('me'), w.S(900,0, 'o', 50,50)).l(200).fq(5).d(.1)
    T.t( function () {if (oj.l() > 1) {oj.l(oj.l() -.002)}})

    w.spg(
        w.S(500,100,'o',10,'-'),
        w.D(500,250,'r',250, 10).K('rec')
    ).fq(3).d(1)


    w.spg(
        w.S(1200, 125,'c', 10,'-'),
        w.D(1200, 275, 'r',250, 10).K('rec')
    ).fq(10).d(.5)


    w.dJ(
        w.D(600, 300, 'z', 30),
        w.S(900,500,'z',50,80,0,0,20)
    ).l(20).fq(5).d(.1)//.coll(false)

    w.dJ(
        w.D(130, 450,'b', 30),
        w.S(130,800)
    ).l(120).fq(5).d(0)//.coll(true)

    b2 = w.D(500,300,'w',4,500)

    w.dJ(w.S(500,200,'r', 70),  b2)

    w.dJ(b2, w.D(500,300,'g',90))
    w.dJ(
        y.XY(200,200),
        x=w.D(200,220, 'r', 12))
    w.dJ(x,x=w.D(200,250, 'r', 12))
    w.dJ(x,x=w.D(200,280, 'b', 12))
    w.dJ(x,x=w.D(200,320, 'g', 12))
    w.dJ(x,x=w.D(200,360, 'u', 12))
    w.dJ(x,x=w.D(200,420, 'g', 12))
    w.dJ(x,x=w.D(200,500, 'u', 12))

    xx=w.S(1100,40,'x',40)
    jj = w.dJ({  a:xx,
        b:w.D(1050,200,'r',20,60),
        l:200,  cl:1, coll:1})
    kk = w.dJ(xx, w.D(1100,200,'y',20,60),200)
    w.S(800,40,'o',200,100,'-','sen')  //can get triggered many many times?
    w.cl('sen',
        function(){
            jj.wind();kk.wind()
        }
    )
}
SPG = function () {W([2000,1300],{g:1000}) .P(300, 320)
    // y.tr()

    // w.brg(860, 1060)
    //and more..
    // here i bind bodies with fixtures that are alredy out of line
    w.dJ(w.D(800, 100, 'y', 20),
        w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
        30)
    w.dJ(
        w.D(900, 300, 'g', 20),
        w.D(910, 320, 'b', 20, 20),
        30)
    b1=w.S(200, 200, 'y', 50)
    b11= w.D(200, 200, 'x', 50, 50)
    w.dJ(b1, b11, 60)



    r = w.D(100, 100, 'r', 40)
    u = w.S(500, 300, 'u', 200, 100)
    j = w.dJ(u, r, V(100,100)).l(50)
    w.dJ(u, w.D(300,400,'b',20), V(-100, 100)).l(50)
    w.dJ(u, w.D(600,300,'g',20), V(100, -100)).l(50)
    w.dJ({a: u,
        b: w.D(300, 400, 'o', 20),
        av: V(-100, -100),
        coll: 1, l:50})


    p.tr().r(1)


    SoftPlat(300, 400)
    SoftPlat(500, 380)
    SoftPlat(700, 340)
    SoftPlat(900, 420)

    function SoftPlat(x, y) {x = N(x,300); y = N(y,60)

        w.dJ({
            a:w.S(x, y, 'z',8,'-'),
            b:w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
            l:.1,
            f:10
        }).d(.1)}




    w.tpl= function(x,r,fq,d){var w=this, bouncer, j
        x= N(x,290)
        r=N(r,75)
        fq=N(fq,6)
        d=N(d,0)
        j = w.dJ(
            w.S(x,1080,'w', 20, 20),
            w.D(x, 1000, 'b',200,20)
                .fR().d(0).r(r).fr(0))
        j.l(115).fq(fq).d(d)
        w.S(x- 120, 1090,'b',40,300).fr(0)
        w.S(x+120, 1090,'b',40,300).fr(0)
        return j
    }


    w.tpl(200, 0, 6)// not bouncy

    w.tpl(500, 1.2, 6)// too bouncy
    w.tpl(800, .75, 6)// mid bouncy, mid freq
    w.tpl(1100, .75, 2)//low freq
    w.tpl(1400, .75, 12)//high freq

    //_.ev(1,function () {p.I(0, -150)})
    //_.in(15, function(){w.addHundBalls()})


    //freq is SPEED of oscillation
    //damp is STRENGTH of oscillation
    // so bodies cant rotate if they dont have density???




}
SPOLL=function(){W({g:0,w:0});Q(function(){
    s=w.s
    e=w.S(200,200,'p',100)
        .d(1).r(2)
        .bS({i:q.bm('earth'),sc:.13})
        .K('earth'); eI= e.ch()


    // p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)

    p= w.D(200,200).cn('thrust').Bm( 'me', 0, 0,  0.25*sc    )

    w.dJ({a:p,b:e,l:50,f:100.15,cl:1})

    T.t(function(){var sp,
        dx=e.X()-p.X(),
        dy=e.Y()-p.Y(),
        sc= cjs.cap(300/
        M.sqrt(dx*dx+dy*dy), .3, 2)
        s.X( 300-sc*(p.X()-300) )
        s.Y( 150-sc*(p.Y()-150) )
    })



})}
SPOOM=function(){Q(function(){W({g:0, w:0});

    SCALE=1//W:600, H:300,

    w.can.C('z')
    s=w.s

    _.t(80,function(){
        w.cir(R(2000,-750),R(1600,-600 ),4,'w').d(0).r(2).K('star')})

    s.rXY(300, 150)

    e=w.S(600,300,'p',100).d(1).r(2).K('earth')

    e.gx= e.gx|| w.g.ct()

    e.gx.A(  Q.b('earth').rC().sXY(.13)    )


    eI= e.ch()

    //  p= w.me(200,200, 2.5).cn('thrust').d(.4).aD(8).lD(.8)

    p=  w.D(200,200,'x', 100,200)
    p.cn('thrust')
    p.Bm( 'me'  )

    j=w.dJ({
        a:p,
        b:e,
        l:600,
        f:2,
        d:2,
        cl:1
    })


    T.t(function(){var sp,
        wd=300
        ht=150
        dx=e.X()-p.X(),
            dy=e.Y()-p.Y(),
            sc= cjs.cap(300/ M.sqrt(dx*dx+dy*dy), .3, 2)
        s.X(wd- sc*(p.X()-wd))
        s.Y(ht- sc*(p.Y()-ht))
        s.sXY(sc)
        s.al(sc*2);
        eI.al(sc)
    })


    s.twL(
        [{kx:8},1000],
        [{kx:0}, 1000],
        [{ky:8}, 1000],
        [{ky:0}, 1000])
    eI.twL([{r: 360}, 10000])
    eI.twL([{kx:16}, 3000], [{kx:0}, 3000])
    p.cl('star', function(){p.ch().tw(
        [{kx:40},100],
        [{ky:40},100],
        [{kx:0,ky:0},100])})
    e.cl('star', function(){   w.pop('star hit earth!!')  })

})



}
RAGD=function(){W({})


    w.spring(
        b1 = w.D(100, 100,'b', 30),
        w.D(100, 200,'r', 40))

    w.dJ(
        b2 = w.D(100, 400,'g', 30,30),
        w.D(100, 500, 'o',40,40)
    )
    p = w.me(500,200)

    w.spring(b1, p)
    w.spring(b2, p)

}
VINE=function(){W(250).Y().P()


    w.trap(50)
    w.vine(200,100,15,8)
    w.vine(210,100,25,8)
    w.vine(220,100,25,5)
    w.vine(260,100,3,35).rJ(3,20).rJ(3,35)
    w.vine(300,100,30,2)



    //blinds
    w.rJ(
        w.link1(600,20,3,'+').add(10),
        w.p(500,200),'+')



    //ropey
    b = w.S(1100, 50, 'g', 60, 15).d(1)
    _.t(10, function (y) {
        w.rJ(
            b,
            b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))})
    w.rJ(b,
        w.D(1100, 11 * 20 + 50, 'd', 20).d(1))




    p.cl('leaf', function(l){
        w.jt=w.rJ(l.B(), p.XY(l.B()),  R()?'*':null)
        $.space(function(){w.j(w.jt)})})
}
LEASH=function(){W()




    p= w.p(300,200)
    base = link(300, 20).stat()
    l =  base.rJ(10)


    w.rJ(l, p.XY(l.X(), l.Y()))
    base = link(100, 20).stat()
    l =  base.rJ(10)
    w.rJ(l, p.XY(l.X(), l.Y()))


    function link(x,y){var l= w.rJ(x,y,'+')
        l.l= function(n){var lk; n=N(n)?n:1
            _.t(n,function(){
                lk =  link(l.X(), l.Y()+10)
                r= w.rJ(l,lk)
                l = lk })
            return l}
        return l}

    /*

     w.link2 = function(x,y){var w=this,b

     b=w.rJ(x,y,'+')

     b.l=function(n){var b=this, w=b.W()
     _.t(N(n,1), function(){
     w.rJ(b, b=w.l(b.X(),b.Y()+15))
     })
     return b}

     return b

     }

     link3 = function(x,y){
     var l= w.D(x,y,'y', 5, 10).d(4).r(2)
     l.l= function(n){
     _.t(N(n,1), function(){
     l = link3(l.X(),l.Y()+20)})
     return l}
     return l}

     link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}

     p2= w.p(1000,200)
     base2 = w.link2(1000,20).stat()
     l2 =  base2.rJ(10)
     w.rJ(l2,p2)


     w.$(function(){
     base3 = link3(600,20).stat()
     l3 =  base3.l(10)
     })



     w.floor.r(0)
     prev = top = w.S(400,50,'g', 60,15)
     _.t(10, function(i){var next
     next=link(255,(i+1)*30)
     prev = prev.rJ(next)})
     //body.rev(body2) returns body2 !!!!!
     w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))




     y = w.y(600,170).rot(265).stat()
     w.cl('bu',function(f){
     if(!f.of(y)){f.B().kill()}
     })

     */



}
BIO=function(){

    W().randRects()

    var dJ

    p = w.D(320,460,'b',40,80)
        .Bm('me',0,0,.2)
        .fR()

    var l, node

    w.mu(function(){

        dJ = dJ && w.j(dJ) // ??
        node = null
    })


    w.md(function(o){  if(o.f   ){

        var cen= p.wC()

        dJ = w.dJ(p,  o.b,
            cen.x, cen.y,
            o.x,  o.y)

        node= o.b




    }

    })



    T.t(function(){

        if(dJ){
            // $l(dJ.l())
            p.wake()
            dJ.l(dJ.l()*0.97)

            if(l){l.rm();l=null}
            l = w.l('w',
                p.X(), p.Y(), node.X(),  node.Y()
            )


        }
    })


}
KILL = function(){W()//.Y()
    y= w.y()

    w.randRects()

    l=w.S(255,50,'g',60,15)
    for(var i=1;i<=10;i++){w.rJ(l,b=w.D(255,i*30+30,'w',3,15).DFB(1,0,0));l=b}
    w.rJ(l, w.D(255,330,'d',20).DFB(1,0,1.1))
    l=w.S(900,50,'g',60,15)
    for(var i=1;i<=10;i++){w.rJ(l,b=w.D(900,i*30+30,'w',3,15).DFB(1,0,0));l=b}
    w.rJ(l,w.D(900,330,'d',20).DFB(1,0,1.1))

    // _.t(8,function(){w.me(700, 400)})
    _.t(4,function(){w.me(700, 300)})
    // _.t(1,function(){w.me(700, 200)})

    w.cl('bul', function(f){
        if(f.of(y)){alert('f.of y')}
        else {f.B().kill()}
    })



}





//wed
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



//pris
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




rev()
function rev() {
    games()
    wheel()
    demo()
    link()
    pinball()
    function demo() {


        RJ = function () {
            W({m: 0, g: 0}).Y()
            //  p1 = V(300,300) ;w.dot(p1)
            //  p2 = V(360,360) ;w.dot(p2)
            //  p3 = V(450,450) ;w.dot(p3)

            b = w.D(300, 300).lV(2).aV(1)
            b.cir({r: 150, lf: ['x', 'u']}).d(1)
            w.rJ(b,
                w.D(300, 300, 'b', 500, 40, 0, 0, 30)
            )

            //blue pin spinner in middle
            b1 = w.D(600, 300, 'b', 100, 50).pin()
            r1 = w.D(600, 300, 'r', 100, 100)
            w.$$(function () {
                w.rJ(b1, r1)
            })


        }


        REVJ = function () {
            W().C('z')


            j = w.rJ(w.S(700, 280), w.D(800, 280, 'r', 200, 40)).mt(4, 100000)
            _.ev(4, function () {
                j.sp(-j.sp())
            })
            _.in(2, function () {
                j.lm(0, 200)
            })


            c = w.D(300, 300)
            c.cir({r: 60, c: 'd', rf: 1})
            w.rJ(c, w.D(300, 300, 'h', 30, 300))
            box = w.D(150, 150, 'n', 80, 40)

            w.rJ(
                box,
                w.D(130, 130, 'p', 50))

            w.rJ(
                w.S(400, 200, 'o', 60).d(1),
                w.D(400, 200, 'o', 200, 40).d(1)).mt(-2)

            w.rJ(
                w.D(120, 50, 'y', 50, 50),
                w.D(100, 50, 'x', 50, 50)
            ).mt(2)

            w.rJ(
                w.D(400, 30, 'g', 30, 50),
                w.D(400, 30, 'g', 30, 50)).mt(3)

            w.rJ(
                w.D(400, 30, 'u', 10, 80),
                w.D(400, 30, 'r', 20, 160)
            ).mt(10)

            w.rJ(
                w.D(400, 30, 'p', 50),
                w.D(400, 30, 'o', 20, 160)
            ).mt(7)

        }

        ROUL = function () {
            W()


            w.D(400, 200, 'b', [
                [60],
                [100, 50, 0, 200]
            ]).pin()


            y = w.D(800, 200, 'y', [
                [60],
                [40, 80, 0, 60]])
            x = w.D(500, 200, 'x', 50)

            w.$$(function () {
                j1 = w.rJ(y, x)
            })

            w.rJ(
                w.D(350, 200, [
                    ['b', 125, 20],
                    ['o', 20, 60, -80, -40, 200]
                ]),

                w.D(210, 210, [
                    ['g', 150, 10, 0, 0, 0, 1],
                    ['r', 10, 20, -140, -30, 0, 1]
                ]),

                -80, -90, 60, 0
            ).mt(10)

        }
    }

    function link() {
        BL = function () {
            W(300).C('z')


            // w.S(600,300,'z',50,50).rJ(25).C('z').rJ(  w.y(300,300).cn('thrust')  )


            // p= w.p(300,200).cn('thrust').r(2)

            // base = Link(300, 20, 10)//.stat()
            // link =  base.rJ(10)

            //  w.rJ( link,  p.XY(link.X(), link.Y())  )


            //base = Link(100, 20).stat(); l =  base.rJ(10); w.rJ(l, p.XY(l.X(), l.Y()))

            link = w.S(100, 120, 'z', 20, 20)
            js = []
            _.t(20, function () {
                js.push(
                    w.rJ(
                        link,
                        link = w.D(
                            link.X(),
                            link.Y() + 10, 'w', 3).d(3000)))
            })
            link.rJ(w.p().cn('jump'))
            j = js[3]
        }
        LRJ = function () {
            W({m: 0, g: 0}).Y()

            b = w.S(600, 100, 'b', 10)
            w.rJ(b,
                link = w.D(600, 120, 'r', 10))
            w.rJ(link,
                link = w.D(600, 130, 'b', 10))
            w.rJ(link,
                link = w.D(600, 140, 'r', 10))
            w.rJ(link,
                link = w.D(600, 170, 'b', 10))
        }
        REVROPE = function () {
            W([1200, 600], {g: 0})

            // anchor = w.S(600,300,'z',50,50)
            //  anchor.rJ(15).C('z').rJ(w.y(300,100).cn('thrust'))


            w.S(200, 100, 'z', 50, 50)
                .rJ(200, 150, 'b', 30)
                .rJ(200, 180, 'r', 30)
                .rJ(200, 260, 'o', 10)


        }
    }

    function wheel() {

        BIKE = function () {
            W([1200, 600, 2000, 600], {})

            //yy=w.y().aD(5000)//.fixRot()
            dir = 12

            car = w.D(300, 300, 'r', [
                [200, 20],
                [20, 165, -50, -50, 45],
                [20, 165, 50, -50, -45]
            ]).fr(5).track()//.lD(1000)

            _.t(30, function () {
                w.me(R(9000, 500), 100, R(2, .5))
            })


            wh = w.D(250, 300, 'w', 60).C('b').bS('me', .6)//.lD(5).aD(5)
                .fr(10).r(.8)

            wh1 = w.D(250, 300, 'w', 60).C('g')//.lD(5).aD(5)
                .bS('me', .6).r(.8).fr(10)
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

            j1 = w.rJ(wh1, car, 0, 0, -100, 0)//.M(.5)


            // j.mt(-50)
            T.t(function () {
                var K = cjs.Keys

                car.I(0, 5000)

                if (K.r) {

                    // wh.ApplyTorque(5500)
                    j.mt(-500)
                    j1.mt(-500)
                }

                else if (K.l) {
                    // wh.ApplyTorque(-3500)

                    j.mt(500)
                    j1.mt(500)

                }
                else {
                    j.mt(0)
                }


                if (K.u) {

                    wh.ApplyTorque(1500)

                }

                if (K.d) {

                    j.SetMotorSpeed(0)
                    j1.SetMotorSpeed(0)

                    wh1.ApplyTorque(-500)

                }
            })


            //car.aD(1000).lD(1000)
        }


        TRICYCLE = function () {
            W([1200, 600, 10000, 600], {})

            //yy=w.y().aD(5000)//.fixRot()
            dir = 12

            car = w.D(300, 300, 'r', [
                [200, 20],
                [20, 165, -50, -50, 45],
                [20, 165, 50, -50, -45]
            ]).fr(5).track()

            _.t(30, function () {
                w.me(R(9000, 500), 100, R(2, .5))
            })

            wh = wheel(250, 300).C('b').bS('me', .7)

            j = w.rJ(
                wh, //.lD(100).aD(100).fr(100),
                car,
                0,
                0,
                100,
                0
            )


            w.rJ(
                wh2 = wheel(250, 300, 50, 10).C('g')
                    .bS('me', .4).aD(10).fr(2),
                car, 0, 0, -100, 0
            )

            j = w.rJ(
                wh3 = wheel(250, 300, 25, 6).C('y').bS('me', .2).lD(100).aD(100).fr(100),
                car, 0, 0, 0, -100
            )


            function wheel(x, y, r, n) {
                r = N(r, 80)
                n = N(n, 15)
                pC = [b2d.pC(r, n)]
                return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
            }


            // j.mt(-50)
            T.t(function () {
                var K = cjs.Keys
                car.I(0, 5000)

                if (K.r) {
                    wh.ApplyTorque(3500)
                    wh2.ApplyTorque(3500)
                    wh3.ApplyTorque(150)
                }

                if (K.l) {
                    wh.ApplyTorque(-3500)
                    wh2.ApplyTorque(-3500)
                    wh3.ApplyTorque(-150)
                }


                if (K.u) {
                    wh.ApplyTorque(1500)
                    wh3.ApplyTorque(-500)
                }

                if (K.d) {
                    wh2.ApplyTorque(-500)
                    wh3.ApplyTorque(1500)
                }
            })

            //car.aD(1000).lD(1000)
        }

        WAG = function () {
            W([1200, 600, 4000, 600], {}).P()


            p.d(.2).track().cl(function () {
                p.onGround = true
            })

            x = w.D(600, 300, 'r', 300, 50).d(2).fr(3)

            wh = w.D(500, 320)
            wh.cir({r: 20, lf: 'x'})
            w.rJ(x, wh)

            wh = w.D(550, 320)
            wh.cir({r: 20, lf: 'x'})
            w.rJ(x, wh)

            wh = w.D(600, 320)
            wh.cir({r: 20, lf: 'x'})
            w.rJ(x, wh)

            wh = w.D(650, 320)
            wh.cir({r: 20, lf: 'x'})
            w.rJ(x, wh)

            wh = w.D(700, 320)
            wh.cir({r: 20, lf: 'x'})
            w.rJ(x, wh)


        }
        STAND = function () {
            W([600, 1000, 600, 1200], {}).P('+')

            //y= w.ship(500,200)

            dir = 12


            car = w.D(300, 300, 'r', 200, 45)

            w1 = w.rJ(
                wheel(250, 300),
                car
            ).mt(10)

            w2 = w.rJ(
                wheel(350, 300), car
            ).mt(10)


            car3 = w.D(500, 300, 'r', 200, 45)
            w.rJ(wheel(450, 300), car3).mt(-10)
            w.rJ(wheel(550, 300), car3)
            car3 = w.D(700, 300, 'r', 200, 45)
            w.rJ(wheel(650, 300), car3).mt(-10)

            w.rJ(wheel(750, 300), car3).mt(-10)


            function wheel(x, y) {
                pC = [b2d.pC(45, 10)]
                return w.D(x, y, 'b', pC).d(5)
            }

            w.$(function () {

                dir *= -1
                w1.mt(dir)
                w2.mt(dir)

            })

        }
        WHEEL = function () {
            W([1200, 600, 2400, 600], {g: 50}).P()

            p.track()

            yy = w.y().aD(5000)//.fixRot()

            dir = 12
            pC = [b2d.pC(45, 10)]

            car = w.D(300, 300, 'r', 200, 45).fr(5)
            w.rJ(
                wheel(250, 300),
                car, 0, 0, 100, 0
            ).mt(-10)
            w.rJ(
                wheel(250, 300),
                car, 0, 0, -100, 0)

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
            function wheel(x, y) {
                return w.D(x, y, 'b', pC).d(5)
            }


        }
        TANK = function () {
            W({g: 0}).P()
            g = V(0, 1000)
            dir = 12

            car = w.S(300, 300, 'r', 100, 5)

            w1 = w.rJ(
                w.D(250, 300, 'b',
                    [b2d.pC(45, 10)]).d(5), car)//.mt(10)
            w2 = w.rJ(
                w.D(350, 300, 'b', [b2d.pC(45, 10)]).d(5), car)//.mt(10)
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
    }

    function games() {
        WHL = function () {
            W(0).Y()

            x = w.S(600, 300, 'r', 500, 500, '-')


            wh = w.pWh({
                x: 450,
                y: 50,
                c: 'z',
                r: 50,
                n: 9
            })


            w.rJ(x, wh, 50, -100)


            wh = w.pWh({
                x: 450, y: 50,
                c: 'b',
                r: 50,
                n: 5
            })

            w.rJ(x, wh, 0, 100)  //  x.rev(wh,0,100)


            wh = w.wh({
                x: 450,
                y: 50,
                c: 'z',
                r: 50,
                n: 9
            })


            w.rJ(x, wh, -150, -50)


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
        BOOTCAN = function () {
            W({g: 0})
            w.rJ(w.S(300, 600, 'a', 200),
                w.D(300, 400, 'b', 100, 100))
            b = w.D(270, 500, 'o', 40).r(.5)
            r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000, 1000).rt(100).dyn()
            r.rec('g', 20, 40, 60, -20)
            cjs.t(function () {
                b.F(0, 400)
            })

        }
        MECH = function () {
            W().P().P().P().Y()
            w.rJ(
                w.D(800, 300, 'r', 20, 300),
                w.D(800, 300, [['b', 100], ['y', 50, 10, 100, 0]])
            ).mt(10)

            dir = 10
            car = w.S(300, 300, 'r', 200, 20)

            b = w.D(250, 300, 'b', 40).d(5).bS('me')

            j = w.rJ(b, car)//.mt(10)

            b2 = w.D(350, 300, 'b', 40).d(5)

            b2.bS('me')

            j1 = w.rJ(b2,
                car).mt(10)


            w.$(function () {
                dir *= -1
                j.mt(dir)
                j1.mt(dir)
            })

            _.ev(1, function () {
                w.D(300, 500, 'y', 20)
            })


        }


        SPERCH = function () {
            W([1200, 600, 1200, 1200], {}).P()
            p.tr()
            w.perch()
            w.seesaw(600, 1100)
            w.seesaw(600, 700)
            w.seesaw(600, 500)
            w.spinner(400, 900)
            w.spinner(800, 900, '-')
        }


    }

    function pinball() {

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
        PINBALL = function () {
            W([420, 600], {})
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


    }

    function err() {
        BINOTAFUNCTION = DEMOREV = function () {
            W()


            w.rJ(a = w.S(100, 100, 20), b = w.D(100, 100, 100, 40)).mt(5, 1)


            w.rJ(w.S(250, 100, 20), w.D(250, 100, 100, 40)).mt(5, 2)

            w.rJ(w.S(400, 100, 20), w.D(400, 100, 100, 40)).mt(5, 10000)


            w.rJ(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5)

            w.rJ(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10)


            w.rJ(a2 = w.baa(850, 100), b2 = w.bi(850, 100, 100, 40, 'o')).mt(20, 10000)


            w.rJ(w.baa(100, 220), w.bi(100, 220, 100, 40)).lm(0, 0)

            w.rJ(w.baa(250, 220), w.bi(250, 220, 100, 40)).lm(0, 10)

            w.rJ(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180)
            w.rJ(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0)
            w.rJ(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180)
            w.rJ(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000)

            w.rJ(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1)
            w.rJ(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2)
            w.rJ(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000)
            w.rJ(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5)
            w.rJ(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10)
            w.rJ(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000)

            w.rJ(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1)

            w.rJ(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2)

            w.rJ(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000)


            w.rJ(
                w.baa(550, 460), w.bi(550, 460, 100, 40)
            )

                .lm(-180, 0).mt(-20, 5)

            w.rJ(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10)


            w.rJ(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)


        }
        CARNOTDEFINED = HORSE = function () {
            W({w: 'L'}).P()

            s = w.D(300, 400, 'b', 90, 30).d(1000).stat()


            //w.rJ(w.D(300-40, 400+50,'o',30), s)//.mt( 2)

            b = w.D(300 + 60, 400 + 50)

            b.cir({c: 'x', r: 30, rf: 1})

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

    }
}