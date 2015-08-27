BIGSHIP=function(){W([1200,600,2400,600],{g:0})
    w.y({
        c:'b',
        sc:20
    },'+')

}
TRAP=function(){W(0).C('r')
    co=w.tCo()
    _.t(3, function(){
        co.B(
            w.y('z', R(500,50), R(300,50), '-').lV(10,20).lD(0)
            //  w.D(400,300, 'z',10,10)
        )
    })
    y=w.y()
    rot = 45
    bg = w.y('b', 500,300,'-').shtEv().stat()
    z(function(){ bg.rTow(y)  })
}
FLOCK=function(){W({g:0})//.P()
    w.D(300,100,'r',50)
    w.D(500,100,'y',50)
    w.D(700,100,'b',50)
    w.D(900,100,'g',50)
    var n=0
    _.t(8, function(){
        w.y('o'//,'-'
        )//.push('+')
    })
    //y=w.y('b',100,100,5)
    _.evx(.5, function(){
        if(y.going()){
            // w.C('p')
        }
        else {
            // w.C('z')
        }
    })
}
YIP = function(){W({g:4})
    y = w.y(300, 400, 3,'-').rt(90)
    y1 = w.y(600, 400, 3,'-').rt(90)
    _.ev(.5,  function(){
        y.I(0, -4)
        y1.I(4, 0)
        y.I(0,-.7).rt(4,'+')
        y1.lV(0,-3).rt(4,'+')})
    _.in(.5, function(){})
    YIPPY = function () {_.ev(1,YIP)} //ok this is crazy cool.. but something is wrong.  something is not getting reset, because force gets bigger each time
}
BLUE=function(){W({g: 0})

    y = w.y('b',200,300,6).aD(1).lD(1).r(0).fr(1).K('guy')
    _.t(5, function(){
        w.y(R(600,50),300,3,'-').K('bad').rt(45)
            .push('+')
            .shtEv('badBul')})
    w.cl('badBul', function(f){
        this.B().kill()
        //if(f.of('bad')){
        f.B().kill()
        //}
    })
}
TOW=function(){W({g:0}).C('z')
    b = w.D(500,300,'r',100)
    y = w.ship()
    cjs.t(function(){
        b.towards( y.X(), y.Y(),9  )})

    _.t(10,function(){w.ship('b',R(500,50), R(500,50))})
    w.b(function(cx){cx.w('ship','bul', function(bul,cx){
        this.kill()})})

    w.D(200,200,'b', 80).d(1).K('bad')
    w.D(200, 200, 'r', 150, 150).d(1).K('bad')

    y = w.y('b',100,200,6,'-').aD(1).lD(1)
        .r(0).fr(1).K('guy')
        .shootOnInt(.2)
        .cn('thrust')

    w.cl('bul', 'bad', function (b){

        if(this.B()){this.B().kill()}
        if( b.B()) {b.B().kill()  }
    })
}
WAR = function(){W({g:0})
    var n = 0, x = 50, Y = 50
    w.cl('bul', 'bad', function (bad) {
        this.B().kill();
        bad.B().kill()
    })
    _.t(10, function () {
        w.y(x += 4, Y += 2, 3,'-')
            .K('bad').rt(R(90))
            .push(20,'+')
            .shtEv(300, 'deathBall')
    })
}
STUM = function(){W({g:3})
    y=w.y(300,400,3,'-')
    _.ev(.1,function(){
        var v=y.v( 0 , 1.5 )
        v=V( M.tD(v.x), M.tD(v.y) )
        y.I(0,v.y/5).rt(2,'+')
    })
}
ARM=function(){W()
    y=w.ship(500,200)
    b=w.S(300,300,20,200)
    a= w.S(300,300,[['b',200,50,100,0]])
    _.ev(.1, function(){a.rot(1,'+')})
}
GRAV=function(){W({g:10}).Y()
    balls=function() {
        w.D(100, 100, 'a', 50).d(1)
        w.D(100, 200, 'c', 40).d(1)
        w.D(100, 100, 'd', 50).d(1)
        w.D(100, 200, 'e', 40).d(1)
        w.D(100, 100, 'f', 50).d(1)
        w.D(100, 200, 'h', 40).d(1)
        w.D(100, 100, 'i', 50).d(1)
        w.D(100, 200, 'j', 40).d(1)
        w.D(100, 100, 'k', 50).d(1)
        w.D(100, 200, 'l', 40).d(1)
    };balls()
    range = w.pJ(
        w.S(600,300, 'q',220, 20),
        w.D(600, 300, 's',20, 250).lD(10),
        V(1,0)).lm(-100,100)
    w.show(function(){return 'Welcome to Gravity Range: Current gravity is ' + range.val()  })

    cjs.t(function(){
        w.G(range.val())
        w.e(function(b){b.I(0,.1)})
    })

}
CAVEMAZE = function(){

    W([1200,600,1500,600],{g:10}).Y()

    w.S(0,0, 'z', [
        [500, 500, 600, 100],
        [500, 400, 500, 100],
        [500, 300, 500, 100],
        [500, 350, 450, 100],
        [320, 400, 50, 600]
    ])

    y.track()
    w.y(100,300).stat().rt(1,10)

    maze = [
        [1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    w.grid(maze, 900, 200, 20, 30)

}
COLORSHIP=   function(){W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')

    co =    w.tCo()

    co.B(

        r =  w.D(100,100,'r',100).lV(10,20).grp(-1).lD(.2),
        b =  w.D(500,500,'b',90).lV(-10,-20).grp(-1).lD(.2),
        y=  w.D(300,300,'y',70).lV(-10,-20).grp(-1).lD(.2)

    )

    o =  w.D(300,300,'o',70).lV(-10,-20).grp(-1).lD(.2)


    _.t(30, function(){
        var b= w.D(400, 300,'o', 20)//.lV(10,20).lD(0)//.L(10,20,0)
        b.f().grp(-1)

        co.B( b )
    })
    w.y().grp('-1')

    // w.r_.cl(function(f){f.C('b'); co.xB(f)})

    l= w.m_controllerList.GetBodyList()


}
STAB=function(){W({g:0})
    w.S(200, 200,'b',50,260)
    w.S(140,200,'d',140,50)


    co = w.tCo(); _.t(10, function(){
        co.B(
            w.D(R(1000,100),300,'x',30).lV(10,20).lD(0))})

    hits=0

    y=w.y().K('ship').lD(5)

    bg = w.y('b',500,300,'-').d(3).lD(2).K('bg').aD(.2)

    bg.rotTowards=function(y){
        var b=this,a
        a = -M.tD(M.atan((y.X()-b.X()) / (y.Y()-b.Y()))    )
        if(y.Y()>b.Y()){ a+= 180 }
        b.rt(R(40,a-20))
    }

    _.ev(.5, function(){
        bg.aV(0); bg.rotTowards(y)
    })

    bg.push(50,'+')

    T.t(function(){
        _.t(20, function(){
            bg.I()
        })
    })


    w.b(function(cx){var i
        if(cx.w('ship', 'bg')){

            i = cx.m().m_points[0].m()

            _.in(.1,
                (
                M.lD( V(i.x,i.y),  V(y.X(),y.Y())   ) >
                M.lD( V(i.x,i.y),  V(bg.X(),bg.Y()) )
                )?
                    function(){hits++;w.C('g'); bg.XY(300,300); y.XY(700,400)}
                    :
                    function(){w.C('p'); bg.XY(700,400); y.XY(100)
                    })
        }
    })
    //w.show(function(){return 'hits: '+ hits})
}

//combo
    TX= function (){

        W( {W:2000, H:1000, wW:4000, wH:2000, g:1000})._(onReady)


        //.stats();
        w.Z(.1).G(10);
        //w.bg.bm('earth', onReady)
        function onReady(w){ //, m: 'm'
            w.$$(function(){ w.showOff() })
            //platforms

            _.t(10, function (i) {w.S(   R(5000), 1000+R(500), 'r', R(250,50),  R(60, 15)).K('rr')})

            y = w.y(2600,1500,6).K('p')
            // p = Player().XY(2200, w.h-300).K('p')

            p = w.p(2200, w.h-300, 3).K('p')

            bike = x = Bike().K('p')

            but = b = Butterfly().aD(1000000).r(0).XY(500,200).K('p');

            _.in(1, function(){b.cn('thrust', 500)}) // b.track()



            pol = w.D(2500, 300).pol({

                v: [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]],


                c: {c:'r', C:'y', l:10, bf:'me'},

                bf: 'me'

            })[0].B()









            b.XY(pol.X(), pol.Y())
            j= w.dJ(b, pol ).l(600).fq(55).d(.1)
            flub = g=   w.D(3500,160).K('flub').K('m').K('p')
            flub.cir(
                { r:120, rf:{c1:'r',c2:'g'}  },
                { r:100, C:'y', l:2, bf:'chicks'  })
            flub.r(5).fr(1).lD(5)
            flub.fR().cn('pow')
            flub.bS('me', 1)
            flub.warp()
            r=w.D(300, 400, 'r', 250).r(.5).cl('p', function(f){

                if(f.B()== w.t){  }

                else {

                    r.C($r())
                    w.C($r())

                    w.y( r.X(), 400 ).C('b')

                    //  f.B().track()

                }


            })
            destWall = t=DestWall()

            curtain = w.i.h(-300,-200,'+').bf('me').rec(  {w:150,h:500}, {w:150,h:500,x:200}, {w:150,h:500,x:400}, {w:150,h:500,x:600} )

            p.track()
            y.track()
        }
        function Player(){var p = w.p(200,400,5).cn('j')
            w.S(100, w.h-100, 'r', R(70,150),  R(30,15)).K('rr')
            w.S(100, w.h-400, 'r', R(70,150),  R(30,15)).K('rr')

            _.t(10, function (i) {

                w.S(   R(5000), 1000+R(500),
                    'r', R(250,50),  R(60, 15)).K('rr')
            })


            p.webs=[]
            p.canW=1
            p.wb=p.web=function(K){
                return p.Web(p.X(),p.Y()-100, K)
            }
            p.iCn=function(){return p.webs && _.fW(p.webs,{cn:1})}
            p.shR=function(){var f=p.sw('-'); w.D(p.X()+80, p.Y()-20, 'w', 6).I( 2- f/50 , 0 - f/40);return p}
            p.shL=p.shootLeft=function(){var f=p.sw('-'); w.D(p.X()+80, p.Y()-20, 'w', 6).I( 2+ f/50, 0+f/40); return p}
            p.lWeb=function(){return _.l(_.wh(p.webs,{cn:1}))}
            p.detach=function(){if(p.iCn()){p.lWeb().die()};return p}
            $.k({l: function(){p.lV(-40, 0)}, r: function(){p.lV(40, 0)},
                u: function(){if(p.webs[0]){_.l(p.webs).die()}},
                d: function(){if(!p.iCn()){ p.web().b.I(0, -100000) }}})
            w.b(function (cx) {cx.w('wbB', 'rr', function(f){var web= _.fW(p.webs,{b:this.B()}); if(!web.cn){web.attach(f.B())}})})
            return p

        }
        function Butterfly(){
            //BLUE BUTTERFLY
            var  b=  w.D(500, 800,[  [300,100],   [100,200]]  ).C('z')//.track()
            b.i.rec('r', 'z',0,-45,20,150,'+')//gun
            b.i.rec('y','z', 0,0,300,100,'+') //wings
            b.i.rec('o','z', 0,20,320,10,'+')//stripes
            b.i.rec('o', 'z',0,-20,320,10,'+')
            b.i.rec('b','z', 0,0,100,200,'+')//top
            b.i.al(.9)
            //a little square snow
            //    _.ev(20, function(){w.D(R(1000),-300,$r(),60).g().al(.9).rec('w','z',0,0,180,180).al(.7)})
            return b
        }
        function Bike() {
            car = w.D(2300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
            dir = 12
            car.fr(5)
            car.track()

            j = w.rJ(
                wh = wheel(2250, 300).C('b'), car, 0, 0, 100, 0)

            wh.bS('me')
            w.rJ(
                wh2 = wheel(2250, 300, 50, 10).C('g'), car, 0, 0, -100, 0)
            w.rJ(
                wh3 = wheel(2250, 300, 25, 6).C('y').aD(10), car, 0, 0, 0, -100)


            wh2.bS('me')
            wh3.bS('me')



            z(function () {
                var K = cjs.Keys

                if (K.u) {
                    wh.ApplyTorque(150000)
                    wh3.ApplyTorque(-50000)
                }

                if (K.r) {
                    wh.ApplyTorque(150000)
                    wh3.ApplyTorque(15000)
                }

                if (K.l) {
                    wh.ApplyTorque(-50000)
                }

                if (K.d) {
                    wh2.ApplyTorque(-50000)
                    wh3.ApplyTorque(150000)
                }
            })



            function wheel(x, y, r, n) {
                r = N(r, 80)
                n = N(n, 15)
                pC = [b2d.pC(r, n)]
                return w.D(x, y, 'w', pC).d(5)
            }

            return car
        }
        function DestWall(){


            var  t=w.S(3000, 1450,'x',300,900)

            t.cl('bul', function(bu){var v,p

                bu=bu.B()

                v=bu.XY()
                bu.kill()
                // v=bu.kill()
                p=M.p([[0,100],[-100,0],[0,-100],[100,0]]  ).ger(v)
                w.rad(v.x, v.y, 15,function(f){f.sub(p)})//t.fs(function(f){f.sub(p)})
                t.fs(function(f){f.C($r())})
            })


            return t
        }
    }
    MARIOBROS  =function(){W([1200,600, 1200,1000], {  g:200}).P().Y();y.tr()


        // w.ice(800,280, 10000);


        // w.S(1200,30, 'r',600,4)
        // w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
        //w.s.XY(300, 150).rXY(300,150)

        T.t(function(){
            //p.centerScale(1-( (p.X()- w.hH)/ w.hH)*.1)
        })

        //w.s.XY(300,150)
        //w.s.rX(600)
        //w.s.rY(-200)

        //w.Z(.5)

        w.ice(30,450, 400)
        w.grass(850,650,400)
        w.grass(0,800,400)
        w.rubber(880,950,1000)

        /*
         //w.s.XY(300, 150)//.rXY(300, 150)
         w.grass(300,280,500)
         w.ice(1300, 280, 1000)
         w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)

         //w.s.XY(300, 150).rXY(300, 150)
         w.clouds().clouds(1000,-200)
         w.grass(300,280,500)
         w.ice(800,280, 5000)
         */

        //slide = w.rec(1200, 30, 1200,40, 'b').den(1).fric(.5).rest(.5)

    }
    SMASH=function(){W([2000,1500,2000,1500]).G(200).C('b'); var b1, b2
        // y and remote control fireball
        var y= w.y(300,100,'+')
        farMoon =  w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
        nearMoon =  w.D(400, 200,'y', 100)
        T.t(function(){
            var lV = y.lVW(y.X(),y.Y() ).mult(20)
            nearMoon.lV(lV.x, lV.y)
        })

        p= w.p(900, 400).cn('jump').cl(_.m(function () {w.D(300, 100, 'r', 5)}))

        sun =  r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')

        sun.cl(function (f, cx) {var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
            w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)})



    }


//space
    GG=function(){W({g: 0}).Y()

        w.gG(100,100); w.gG(200,200); w.gG(300,300)

    }
    GREEN=function(){W({w:'@',g:0})
        y= w.y(400,200).K('pop')
        w.gG(400,400)
    }
    COINWARP=function(){W({g:0, w:0}).Y()
        y.warp()

        score=0
        badScore=0
        // p = w.ship().K('player pop').warp()
        //p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()


        gg = w.gG( 300,300 ).warp()

        _.ev(1,function(){
            w.coin().sen(1)
        })
        /*
         w.beg(function(cx){var fixt
         cx.with('coin','player', function(){this.B().kill()
         score++})
         cx.with('coin','greenGuy', function(){
         this.B().kill()
         badScore++
         })
         })
         */
        // w.coll('coin','player', function(){this.B().kill(); score++})
        // w.coll('coin','gg', function(){this.B().kill();badScore++})
        /*
         // w.class('coin')
         //   .with('player', function(c){c.setDestroy();score++})
         // .with('greenGuy', function(c){c.setDestroy();badScore++})
         w.class('coin').with({
         player: function(){score++; return true},
         greenGuy: function(){badScore++; return true}
         })

         */
        _.ev(3,function(){
            w.pen( score + ' / '+ badScore)
        })

    }
    SPACEMAZE=function(){W({g:0,w:0})
        _.t(30, function(){w.D(R(1000,-500), R(800, - 400), 'w', 2).d(0).r(2)})
        grid= w.grid([
            [1,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,0,1],
            [1,0,0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1,1,1],
            [1,0,1,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1]


        ],  100, -100, 14, 40)// grid.aD(1)
        p= w.p(220, 70,2.5, 'thrust').aD( 10000 )
            .track()//.follow(300, 150)
        score=100
        cjs.t(function(){grid.aV(.2) })//w.s.HUD.pen(score)
        w.b(function(cx){if(cx.w('player', 'grid')){ score--}})
    }
    SPACEYOYO=function(){W({g:0,w:0})
        w.stars()
        p = w.p('thrust','+')
        star = w.sun(200,200)
        w.spg(p,star).fq(3).d(4)
    }
    ZIL=function(){W({g:0,w:0})
        health=100

        y = w.ship().warp().cl(function(){health-=5})


        z = w.zilla(600, 300).fireBallsAtInt(4000)


        w.show(function(){
            return 'health: '+ health + ', hits: ' + z.hits
        })
    }
    TALK=function(){   W({   g:0,   w:0   })
        score=0
        shots=0

        p= w.me(500,300).stat()




        _.t(100, function(){
            w.D(R(2200, -1000), R( 1600, - 1000), $r(), R(14,8)).lD(2)
        })

        /*
         $.space(function(){//can double on on shots!!!
         setInterval(function(){
         p.shoot(); shots++ }, 200)
         })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
         */
        w.cl('ball','bullet', function(){
            // score++;  cx.destroy()

        })



        cjs.t(function() {
            p.XY(500, 300)
            if (cjs.Keys.left) {
                p.rot(8, '-')
            }
            if (cjs.Keys.right) {
                p.rot(8, '+')
            }
            if (cjs.Keys.up) {

                w.e(function (b) {
                    if (
                        !b.of('bul') && !b.of('player')
                    ) {
                        b.I(p.vec(0, -100).div(-50))
                    }

                })


            }

        })
    }



//tap
    CLICKSHOOT=function(){W({g: 0})

        p = w.me(800,300).aD(10000)
        w.tim(7)

        w.b(function (cx){
            cx.w('bul', 'tim', function (t) {t.B().kill()})
            cx.w('bul', p, function () {this.B().kill()})
            cx.w('tim', p, function () {p.kill()})})


        $.click(function(e){
            var x=e.pageX-p.X(),  y=e.pageY-p.Y(),
                rot= M.tD(M.atan(y/x)),
                adj= x>0?90:270
            p.rot(rot+adj).I(x/20,y/20)
            w.bul(p.wP(0,-100),10).I(x,y) //.bS({i:'sun', sc:.1})
        })


//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)

    }
    MESHOOTER=function(){W({g: 0}) // u cant shoot when ur dead!

        p = w.me(800,300).aD('++')

        w.tim(7)

        w.b(function (cx){
            cx.w('bul', 'tim', function (t) {
                t.B().kill()})
            cx.w('bul', p, function () {
                this.B().kill()})
            cx.w('tim', p, function () {
                p.kill()})
        })


        $.click(function(e){

            var x = e.pageX - p.X(),
                y = e.pageY - p.Y(),

                rot,  adj

            rot = M.tD(M.atan(y/x))

            adj = x > 0 ? 90 : 270

            p.rot(rot + adj).I(x / 20, y / 20)

            w.bul(
                p.wP(0,-100), 10
            )
                .I(x,y)
                .bS({i:'sun',sc:.1})

        })


        //to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)

    }
    FLAPPY=function(){W({w:0,g:50})
        w.S( 800,500,'o',100,600).K('plat')
        w.S( 1200,0,'o',100,600).K('plat')
        w.S( 1600,500,'o',100,600).K('plat')
        w.S( 2000,0,'o',100,600).K('plat')
        game=true

        p = w.me(300,0).fixRot().cl('plat',function(){
            if(game){
                $.pop('you suck!')
                game=false}})

        cjs.t(function(){
            p.lV(3);
            w.left(4)
        }) // odd way?  uses 'w.left' ???

        w.$(function(){ p.I(0,-180) })
    }
