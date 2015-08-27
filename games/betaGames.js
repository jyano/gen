
//fizAnim

RUN=function() {
    W().C('r');
    Q([{id: 'I', src: "/MonsterAIdle.png"}, {id: 'run', src: "/MonsterARun.png"}], q)
    function q(i) {w.C('g')
        ss0=  $SS({
            i: [Q.i('I')],
            f: {width: 64, height: 64, regX: 32, regY: 32},
            a: {I: [0, 10, "I", 4]}
        })
        i = w.D(400, 200, 'b', 10).fR().Sp(ss0,0,0,5,'+')
        ss = $SS({
            i: [Q.i('run')],
            f: {width: 64, height: 64, regX: 32, regY: 32},
            // create sprite.. and set the registration point (the point it will be positioned and rotated around)
            // to the center of the frame dimensions:
            // sprite.regX = sprite.spriteSheet.frameWidth/2 || 0//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
            // To slow down the animation loop of the sprite,
            // we set the frequency to 4 to slow down by a 4x factor
            a: {L: [0, 9, "R", 4]}
        })
        ss = ss.flp(true, false, false)
        sp = w.D(160,302,'r',10).Sp(ss).p("R").dr(90).f(10,'+')
        /*
         T.tx(function(){

         if (sp.x >= 800){sp.dr(-90).p("R")}
         if (sp.x < 100) {sp.dr(90).p("I")}
         if (sp.dr() == 90) {sp.x += sp.vX;sp.y += sp.vY}
         else {sp.x -= sp.vX;
         sp.y -= sp.vY}
         })}

         */
    }
}


MFIL=function(){W()._(function(){
    b = $H()
    b.graphics
        .beginLinearGradientFill(["#000000",
            "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
    b.graphics.drawRect(0, 0, 100, 100);
    b.cache(0, 0, 100, 100);
    bm = w.i.qB("me")
    bm.filters = [
        new cjs.AlphaMaskFilter(b.cacheCanvas)
    ]
    bm.cache(0, 0, 100, 100);
})}


BI=function(){W()._(function(){
    b = w.D(600,300, 'r', 200,300).rt(10)
    f= b.f()

    f.bI('me')

})
}

SHT=function(){W(0)
    y= w.y(300,300,'-')
    y.aD(0).lD(20)
    y.fixedRot(false)
    y.SetAngularVelocity(10)
    z(function(){
        // y.ApplyTorque(100)
        if(K.r){
            y.SetAngularVelocity(15)
            // y.ApplyTorque(130)
        }
        else if(K.l){
            y.SetAngularVelocity(-15)
            // y.ApplyTorque(-130)
        }
        else {   y.SetAngularVelocity(0)}
    })
    // w.show(function(){return y.aV()})
}
THRUST = function(){W({ g:0//, i:'space.jpg'
})
    w.S(400, 200,'s', 40,40)
    p = w.p(300, 300, 'thrust')
    w.tim(3)
    w.b(function(cx){
        cx.w('bu', function(f){if(f.B()!=p){this.B().kill()}})
        cx.w('bu', 'tim', function(t){t.B().kill()})
    })
    $.space( function(){
        w.bu(p.wP(0,-100)).I(p.v(5,'*'))
    })

}


SPRBALLS=function(){
    W(400,400).C('w')._(function(){
        //cjs.rulers()
        w.p(0,0,10).stat()
        _.t(8, function(){w.D(R(100,50),R(100,50),'b',30)})
        w.$$(function(){
            _.t(8, function(){
                var b= w.D(R(100,50),R(100,50),'b',30)
                b.$h('x','X',1).c('x','X', 1).bf(w.s.cv0).cir(30)
            })
        })
        w.i.T(200,100, '$$ me')
    })}

PL=function (cn) {W();  df= cn||
'slide'
    //'jumper'
    cn = _pam.toLowerCase() || df
    p = w.p(400, 400, 4, cn)
}
WORLD = function () {W(0)

    b = w.D(100, 100, 'r', 50)
    b1 = w.D(100, 200, 'b', 40)

    // w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)

    w.AddController
    w.CreateController
    w.DestroyController
    w.GetGroundBody
    w.GetProxyCount
    w.SetDestructionListener
    w.SetBroadPhase
    w.SetWarmStarting
    w.SetContinuousPhysics
    w.IsLocked

    // proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
    //  pair - a record created when two proxies overlap.
    //  manifold - the set of contact points for two convex shapes.


    w.locked = function () {
        return b2World.e_locked != 2
    }

    w.m_island
    w.m_flags


}
BADDIES=function(){W(); w.goomba(); w.bobom(200,200)}
MOVCIR=function(){w=b2d.W({g:0})


    w.dot(300,300); w.dot(600,300); w.dot(900,300)

//rad,speed

    w.D(300,300,50,100).moveInCircle('+') //high oval

    w.D(600,300,50,100).moveInCircle()
    w.D(900,300,100,50).moveInCircle('-') //long oval




}


//err
    SUGAR =function(){
        W([800,1000],{g:0})
        w.roof.kill()
        w.floor.kill()




        // glider = w.D(300, 500, 'b', 100,200, 50, 50, 20)


        w.S(300, 500, 'b', [-100,0],[0,-100],[100,20]).K('b')


        w.S(500, 500, 'r', [-100,0],[0,-100],[100,20], '-').K('r')


        w.left.K('b')


        w.dot(300,500)



        i = -20
        //cjs.t(function(){glider.I(i,0)})
        // w.$(function(){glider.I(i*-12,0)})
        // w.$$(function(){i = ( i * -1  )})


        y=w.ship()



        y.col(function(f){if (f.of('b')) {f.B().kill()}})

    }
    SCALE = function () {W()

        bb=w.D(600,400,'o',150,150)

        bb.bS('me')//cant attach to above at the moment..




        cjs.t(function(){
            var p=bb.wP(80,-80)
            w.dot(p)
            bb.I(0,-200,p)
        })


        w.fricky=function(x,y){var w=this,
            b= w.D(x,y)
            b.rec('r',20,40,0,0,180).fr(1).r(0)
            b.rec('b',20,40,0,0,90).fr(1).r(0)
            return b}

        w.fricky(400,120)


        b23= w.D(400,100)
        b23.rec('r',20,40,0,0,180).fr(0).r(0)
        b23.rec('b',20,40,0,0,90).fr(0).r(0)





        w.S(100,100,'r',80,80)
        w.S(100,200,'b',50).f().dot()
        w.S(100,300,'r',80,80).f().dot().C('p').dot().C('x') //overwrites dot?
        b= w.S(500, 200, 'o', [
            [  [-100,0], [0,-100], [100,0] ]
        ]).rot(25)
        f = b.f()
        v = f.wV()
        w.S(400,200,'w', [v])
        _.e(v, function(v){
            w.dot(v)
        })
        w.S(600, 200, [f.wV('+')])

        w.S(400, 300,'r', 40);
        w.S(290, 350, 'b',40);
        w.S(280, 220,'y', 40)
        r = 10
        b = w.D(300, 300,'g',r)
        _.ev(.2, function(){
            if(b.f()){b.f().kill()
                r+=.2; b.cir('g',r)}})
        w.y(200, 200)
        w.show(function () {
            return w.count()})



        b33 = w.D(500,300,'r',[[40],['b',30,100,'arm','-']])
        w.b(function (cx) {
            if (cx.w('arm')){b33.I(50,50)}
            if (cx.w('arm',w.right)){w.C($r())}})


        b3 = w.D(100, 100, 'b', [
            [40],
            [100, 200, 100],
            [50, 200],
            [200, 200, 300, 400]
        ])

        _.in(2, function(){
            b3.fs(function (f) {
                f.sen(1)
                $l('shape type: ' + f.GetShape().m_type)
            })})

    }
    SPRY=function(){W([1200,600,2400,1200],{g:20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
        //w.s.bm('earth', function(me){me.XY(400,400)fn()})

        //function fn(){
        y = w.spBox($$ship).track()
        cjs.Keys($$ship.key)
        cjs.Keys({  //takes a spritebox!//uses cjs.watchKeys()
            l: function () {y.rot(8, '-')},
            r: function () {y.rot(8, '+')},
            u: function(){y.I(0,-10)}})
        y.aD(.5)
//}
    }
    ZILSCR=function(){w=b2d.W({g:0,w:0}).db()
        health=100
        y = w.ship().cl(function(){
            health-=5
        }) // insert message passing here!
        z = w.zilla(600, 300).fireBallsAtInt(4000)
        //w.follow(y)
        y.cam()
        w.show(function(){return 'health: '+ health + ', hits: ' + z.hits})

    }
