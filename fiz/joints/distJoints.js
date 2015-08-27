b2d.p()
dJ.fq=  dJ.freq= function(fq){var j=this
    if(U(fq)){return j.GetFrequency()}
    j.SetFrequency(fq)
    return j}
dJ.l=   dJ.len= function(a){var j=this, g=G(arguments),
    l = j.GetLength() * 30
    if(g.u){return l}
    j.SetLength(
        $.update(j,g.f,g)/30)
    return j
}
dJ.d=   dJ.damp= function(dR){
    if(U(dR)){return this.GetDampingRatio()}
    this.SetDampingRatio(dR)
    return this
}
/*
 jd.freq=  function(a){
 if(U(a)){return this.frequencyHz}
 this.frequencyHz=a;return this
 }
 jd.len=function(len){
 if(U(len)){return this.length*30}
 this.length=len/30
 return this}
 jd.damp = function(a){if(U(a)){return this.dampingRatio}
 this.dampingRatio=a;return this}

 */
j.shrink=function(){var j=this
    j.len(0.97,'*')
    return j
}
DISTY1=function(){W([600,600,600,1200])
    b= w.D(300,200, 'b', 150).tr()
    x=  w.D(200,100,'x', 20).cn('thrust').bS('me').aD(100).fR()
    jD =new b2d.Joints.b2DistanceJointDef
    wAncA= V(300, 200,  '-')
    wAncB= V(200, 100 , '-')
    jD.Initialize(x, b, wAncA, wAncB )  // dJD.collideConnected = true;
    j = w.J(jD)
}
b2d.dJ=function(){var g=G(arguments),jD,o

    o = { a:g.f, b:g.s }

    if(N(g.t)){
        o.ancA = V(g.t, g[3] )
        o.ancB = V(g[4], g[5] )
    }

    if(O(g.t)){ o.ancA = V(g.t); o.ancB = V(g[3]) }

    o.ancA = o.ancA || o.a.wC()
    o.ancB = o.ancB || o.b.wC()


    jD = new b2d.Joints.b2DistanceJointDef
    jD.Initialize( o.a, o.b, o.ancA.d(), o.ancB.d() )

    return jD
}
w.Chain= function(fn){var w=this
    var chain = {
        JS:[],
        NS:[]
    }
    chain.eJ=function(fn){
        _.e(this.JS, fn)
        return this
    }
    chain.eN=function(fn){
        _.e(this.NS, fn)
        return this
    }
    chain.f=function(fq){return this.eJ(function(j){j.fq(fq)})}
    chain.d=function(d){return this.eJ(function(j){j.d(d)})}
    chain.l=function(l){return this.eJ(function(j){j.l(l)})}
    chain.j=function(){var g=G(arguments)
        var j=w.J(  $a(b2d.dJ, g)  )

        this.JS.push(j)
        return j
    }

    chain.J=function(o){

        var j =  this.j(o.a,  o.b)

        if(N(o.f)){j.fq(o.f)  }
        if(N(o.d)){j.d(o.d)  }
        if(N(o.l)){j.l(o.l)  }
        return j

    }
    return chain
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
/* overlap??
 http://www.box2d.org/manual.html - also has other stuff
 b2Transform xfA = …, xfB = …;

 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
 */
//body.GetTransform()
//body.GetFixtureList().GetShape()
w.dJ=function(){var w=this,g=G(arguments),jd,j,o

    o= g.O?g.f  : _.x(
        {a: g.f, b: g.s},
        O(g[3])? {av: g.t, bv:g[3], l:g[4], f:g[5], d:g[6]} :
            O(g.t)?{av: g.t, l:g[3], f:g[4], d:g[5]} :
            {l:g.t, f:g[3],d:g[4]}
    )

    b2d.dJ=   function(){var g=G(arguments), dJD=new b2d.Joints.b2DistanceJointDef


        dJD.i=function(a, b, aV, bV){var jd=this, g=G(arguments), o

            o = g.O ? g.f: { a: g.f,  b: g.s,  aV: g.t,  bV: g[3] }

            if(o.av){ o.aV=  o.a.wC().add( o.av || V() ) }

            else { o.aV = o.aV || o.a.wC() }

            o.bV = o.bv ? o.b.wC().add( o.bv || V() ) : o.bV || o.b.wC()

            if(g.n){

                o.aV = o.aV.d()
                o.bV = o.bV.d()
            }
            //////////////////////////////////
            jd.Initialize(o.a, o.b, o.aV, o.bV)
            /////////////////////////
            if(o.cl){jd.cl(true)}

            return jd

        }

        if(g.f){dJD.i(g.f,'-')}

        return dJD

    }


    jd = b2d.dJ(o)
    if(o.cl){jd.cl(1)}
    j= w.J(jd).fq(N(o.f,0)).d(N(o.d,0))
    if(N(o.l)){j.l(o.l)}
    return j

}
b.dJ=  function (nxB) {var b=this, w=b.W()
    w.dJ(b, nxB)
    return nxB
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
w.spg=  function (a,b){var w=this;
    a=a|| w.D(150,150,'b',50)
    b=b|| w.S(180,150,'w',50,50)
    return w.dJ({a:a,b:b,l:1,f:2})
}
w.brg=  function(x,y){var w=this,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
    x = N( x,400 );
    y = N( y,100)

    FIRST= w.S(x,y,10)
    LAST = w.S(x+700,y,'b',10)

    b2 = wood()
    b3 = wood()
    b4 = wood()
    b5 = wood()
    b6 = wood()
    b7 = wood()
    b8 = wood()
    b9 = wood()

    _.e([
            [FIRST,b2],
            [b2,b3],[b3,b4],[b4,b5],[b5,b6],[b6,b7],[b7,b8],[b8,b9],
            [b9,LAST]
        ],
        function(p){
            w.dJ({
                a:p[0],b:p[1],
                l:6,f:5,
                coll:1})})

    function wood(){
        return w.D(100,100,'d',90,60).d(1).fixRot()}
}
j.wU= j.wu= j.wind=function(){var j=this,wound
    cjs.t(function(){var l,m
        m=wound?1.01:.99
        l=j.l()*m
        j.l(l*m)
        if (l<5){wound=1}
        if (l>200){wound=0}})}
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
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!
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
b.ch=function(n){
    if(this.gx){
        return this.gx.children[N(n,0)]
    }
}
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
//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'
b2d.p()
b.rJ=function(b1,yOff){var b=this,w=b.W(),g=G(arguments), c,cc
    if(b2d.iF(b1)){b1=b1.B()}
    if(b2d.iB(b1)){b1.XY(b.X(),b.Y())
        w.rJ(b, b1)
        return b1}


    if(R()){
        c='r'
        cc=1}
    else {c='g'}

    _.t(N(g[0],1),function(){

        var nB = w.rJ( b )

        nB.Y( N(g[1],8),  '+')

        w.rJ(b, nB)
        b=nB})

    return b

    //pad=N(pad,15)
}
w.vine=function(x,y,n,m){

    return this.rJ(x,y, n,'/').rJ(n||10,m).K('leaf')
}
w.trap=function(x,y){var w=this
    x=N(x,300);y=N(y,50)
    w.vine(x, 100,5)
    w.vine(x+20, y, 6)
    w.vine(x+40, y, 10)
    w.vine(x+60, y, 10)
    w.vine(x+80, y, 6)
    w.vine(x+90, y, 4)
    return w
}
w.link1 = function self(x,y,n){var g=G(arguments),
    b=w.rJ(x,y,'*')
    b.add=function (n) {var b=this
        _.t(N(n,1),function(){var nB
            nB= w.rJ(b.X(), b.Y()+24,'*')
            w.rJ(b, b=nB)})
        return b}
    if (g.p) {b.stat()}
    if (N(g[2])) {b.add(g[2])}
    return b
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
//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}
//marionette game?
