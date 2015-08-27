R1=function(){
    W([1200,600,2400,1200] )//.P('+')

    //$.test=true
    w.Z(.1)

    w.roof.kill()
    w.S(100,570,'w',200,30).r(0).fr(0)
    w.S(325,570,'g',230,30).r(.3).fr(10)
    w.S(550,570,'r',200,30).r(.7).fr(.3)
    w.S(100,400,'g',230,30).r(.3).fr(10)
    w.plat([800,300,100], [260,240,60], [550,250,100], [1350,550,100], [300,200,100], [300,500,60,30], [150,400,60,30])
    w.S(1200,500,'w',100,100 )
    w.S(1240,450,'w',180,30 )
    w.S(1420,500,'y', 180,30)
    w.S(1560,450,'y',300,30)
    w.S(1600,500,'y',180,30)
    w.S(1960,450,'w',300,30)
    w.S(1900,500,'w',180,30)
    w.S(11300,200,'w',180,30)

    speed=1
    //  p.tr()

    p = w.p().cn('jump').tr()

    w.p(100, 100,.8)

    w.p(100, 100,.8)
    w.p(100, 100,.8)
    w.p(100, 100,.8)
    //p.lD(1)

///    w.show(function(){ return  'in air: '+ p.inAir() })

    //w.goomba(400).fr(0)

    setup=function(){
        score=0
        p.XY(150,100).lV(0,0)
        w.s.XY(0,0)
    }
    setup()

    T.t(function(){w.s.X(speed,'-')//.pen(score++)
        if(p.Y()> 600){setup()}})
}
MIRROR=function(){W('->')
    p= w.p(100,300).tr()
    w.Z(1.5)

    function left(){p.XY(1100,300); w.xW().walls('->')
        b.dyn().C('b');r.dyn().C('r');
        g.dyn().C('g')
        b2.dyn().C('o')
        b3.dyn().C('y')
    }

    function right(){
        p.XY(100,300); w.xW().walls('<->')
        b.stat().C('z');
        r.stat().C('z');
        g.stat().C('z')
        b2.stat().C('z')
        b3.stat().C('z')
    }


    T.t(function(){


        if(p.X()>1200){ right() } else if(p.X()<0){ left() }


    })





    b = w.D(400,400,'b', 150,150)
    r = w.D(500,400,'r', 50,300)
    g = w.D(400,500,'g', 120 )
    b2 = w.D(250,400,'o', 80,30)
    b3 = w.D(150,500,'y', 50 )



    w.$$(function(){
        w.e(function(b){b.dyn()})
        w.t_.kill()
        w.Z(.1)
    })






}
MARIOS=function(){W().P().P().P()

}
HEADACHE=function(){W().P()

    // w.clouds(100,200)
    // w.clouds(400,400)
    w.rub(100,100)
    w.grass(400,100)
    w.ice(300,300)
    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)
    //$.joystick()


    w.p(600,200).r(4)
}
AUTO=function(){W({g:300, w:0 }).P(300,-300)

    w.plat=function(x,y,W,H){var w=this//=brk=brick=
        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W
        return w.S( x,y,'w',W,H).r(.3).K('plat')
    }



    w.plat(800,500,600,100)
    w.plat(300, 530,100,100)
    w.plat(1400,300,600,100)
    w.plat(1800,500,1000,100)
    w.plat(1900,200,600,100)

    w.p(300,-100)

    T.t(function(){

        w.left(4)

        if(p.Y() > 2000){p.XY(300,-300) } //comeback

        if(b2d.onG){
            if(cjs.Keys.u){ p.jumping(180,30) }
            else {p.byVel(40)}
        }

        else {p.byImp(10)}

    })

    w.D(800,100,'r',50,50).bS('guy')
}
AUTOGAME =function(){W({w:0,t:0}).P()

    setup=function(){score=0

        p.XY(350, 100)
        p.lV(0,0)
        p.cn('j')
        p.d(.1).r(1).fr(0)
        w.s.XY(0,0)
    }
    setup()

    T.t(function(){ w.s.X(4,'-'); if( p.relPos() < -100 ){setup()}})//.pen(score++)

    w.ramps()
}
GOOMBA=function () {W()


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
DOODLE= function () {W([1200, 600, 1200, 2000], {g:-1000}).stats().P(600, 1800)
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
MINI = function(){W({g:10,W:1000,H:800})
    //d = $.div('y',1500,40).A().abs(200,200).pad(2)
    p = w.p(300,200, 2,'thrust')
    data=function(str){
        if(U(str)){str='data'}
        d.E($.h4(str))
    }}
JFAL=function(){W({g:10})
    w.right.kill()
    w.roof.kill()

    //w.s.sX(.95)
    num=0; heads=0
    y=w.ship()//.den(.3)

    _.ev(1,function(){
        w.me(100,100).K('head')
        num++})

    //w.show(function(){return num + ' - ' + heads  })
    game=true
    tickFunc=function(){
        /*
         if(num > 30){
         $.pop('score: '+heads)
         num=0
         heads=0
         w.each(function(b){
         if(b.data() == 'head'){
         b.kill()
         heads++}})}
         */
        if(game){
            if(num > 60){
                game=false
                $.pop('score: '+heads) }
            else {
                w.e(function(b){
                    if(b.K() == 'head' && b.Y()>600){b.kill();heads++}})}}
    }

    cjs.t(tickFunc)
}
WARP=function(){W().P()
    w.S(500, 600, 's', 30, 200)
    w.S(600, 600, 's', 30, 200)
    w.S(550, 550, 'z', 100, 20).K('warp')
    w.D(650, 580, 'd', 300,80).K('tramp').r(5).d(10).aD(10).lD(10)
    p.warp = function(){this.XY(200, 100)}
    p.cl('warp', function () { p.warp()  })
    p.cl('tramp', function () {p.I(0, -50000)})
}
