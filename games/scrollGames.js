SLOOM=function(){

    W([800,500,2400,500],
        {g:0}).Z(1.5).Y(200,200).showOff().bricks(
        [400,300,'r',200,100],[800,300,'z',100,100],
        [1200,300,'b',300,100],[1600,300,'z',100,100],
        [2000,300,'r',200,100])



    y.damp(1,10).track()
    _.in(4, "y.bS('me',.5)")

    _.t(5, function(){
        w.p(100,100)
    })

}
STREET=function(){

    W([1200, 600, 1400,1200], {g:300, t:0})
    w.S(700,1000, 'r',  800,20)
    w.S(500,800,  'g',  200,20)
    w.S(900,600,  'x',  200,20)

    p=w.p(700, 600)
    w.fg.A( p.sp())

    w.track(p, 600, 400,
        {x:700, y:1000, w:700, h:600, mX:1.5})
}
SPUFF=function(){

    W(800,600,800,800).G(0)


    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100);
    w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    y = w.ship(100, 100).rot(200)


    w.track(y, 500, 500 ,{x:1000, y:1000, w:400, h:400} )

    BUFFER=function(){


        W([1200,600,4800,1600],{g:0,t:0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')

        y=w.ship(100,100).damp(1,10).rot(90).lD(2).aD(2)
            .rot(120)//.lV(1)

        w.bufFoll (y, 600, 300, {
            x: 800, y: 300, mX:.8, mY:.8,  w: 200, h: 200  })



        // w.Z(.8)
    }

}
SLY=function(){W([1200, 600,2400, 1000],{g:300}).P()
    w.right.kill(); w.left.kill()
    w.track(p,300,400, {
        x:1200,y:700,
        w:800,h:500,
        mX:10,mY:10
    })
}
KISS=function(){
    W([  1200, 600, 2400, 600 ],{g:10})

    turtle =[
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12],
        ['u', 30,40, 75,-12]
    ]
    w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!


    w.D(600, 280, [
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12, '-'],
        ['u', 30,40, 75,-12 ,'-']
    ])



    _.times(10, function(i){
        w.D(100+i*100,100).cir({r:35,lf:{c1:'*',c2:'*'}}).den(.1)
        w.D(100+i*100,100).cir({r:20,lf:1}).den(.1)
    })



    _.times(10, function(i){
        w.D(100+i*140,160).cir({r:50,

            rf:{
                c1:$r(),
                c2:$r(),
            }
        }).den(.1)})


    w.D(800, 300).cir({r:120,
        C:'y',   l:2,  bf:'me', ls:['y','x']//?
    }).den(.1)




    y = w.ship(50,50).C('d').mid()
    y2 = w.ship(100, 300).C('x').rot(180)
    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
    w.tRightLeft()
    w.showOff()
    I(function changeT(){if( w.t == y2){w.C('w'); w.t=y } else {w.C('z');w.t= y2}}, 5000)

    b=w.D(100,300)
    pf = b.pol({s:1, C:'y',v:[[-200,-100],[0,-200],[100, -100]] })
    pfs =  b.pol({s:1, C: 'o',  v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})
    cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
    rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})

    w.D(200,300).pol({

        v:[[0,100],[0,-100],[200,-150],[200,150]],
        c:'y',C:'w',l:5,

        bm:1

    })




    //FROM POL ->0, -100]] })



    w.D(800,300).pol({
        v:[
            [[5,100],[0,-100],[200,-150],[200,150]],
            [[-50,50],[-50,-100],[450,-50],[450,50]]
        ],
        c:'b',C:'X',
        bm:1
    })



}
SCSPOOM=function(){W({g:0,w:0});w.cen('+')
    w.s.rXY(w.hW, w.hH)
    star= w.S(200, 200, 'p', 100).den(1).bo(2)
    star.bS('earth',.13)
    w.dJ(
        p= w.player(200,200,2.5, 'thrust').horizCenter().den(.4).aD(8).lD(.8),
        star
    ).freq(.15).damp(0).len(50)
    cjs.t(function(){trans(cjs.cap(300/M.dist(star,p),.3,2))})
    function trans(Z){w.s.sXY(Z)
        w.s.XY(w.hW-(p.X()-w.hW)*Z,
            w.hH-(p.Y()-w.hH)*Z)}
}
CUPBALL=function(){//should zoom in when near cup
    CUPS()
    b = w.D(w.W/2, w.H/2, 'w', [[10  ]]).r(.8).track()
    cjs.tick(function(){
        b.F(0, -20)})
    w.showOff()
}
SCROLLNOLIM=function(){W([1200,600,2400,1200], {  g:0 })
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(100, 100).rot(120).damp(1,10)

    w.Z(.8)

    w.track(y, 600,300,'-')
    w.dragScale=function(){var w=this,
        pX=0, pY= 0,  pmX,  pmY, o = {}
        c = $(w.i.canvas)

        c.mousedown(function(e){
            o.Scl = w.z
            o.Y = e.clientY
        })
        c.pressmove(function(e){
            var x=e.clientX,
                y=e.clientY,
                newSc = o.Scl +  (o.Y - e.clientY) * .005

            newSc = newSc>5?5  : newSc <.8 ?.8  : newSc
            w.Z( newSc )

        })

        return this}


    w.dragScale()
}
TRACKEE=function(){

    W([  1200, 600, 2400, 600 ],{g:10})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})

    y = w.ship(50,50).mid()
    y2 = w.ship(100, 300).C('x').rot(180)


    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


    w.tRightLeft()

    w.showOff()


    setTimeout(function(){setInterval(function changeT(){if( w.t == y2){w.C('b'); w.t=y } else {w.C('z');w.t= y2}}, 5000)},5000)


}
CAMBALL=function(){

    //W([1200,600,2400,600],{g:[10,10]}).Y()

    W([1200,600,2400,600],{g:100}).Y()


    mick(700,100, { c1:'b', c2:'X' })
    mick(700,300, { c2:'b' })
    //  mick(100,100, { y2:10 })
    //  mick(100,200, { y2:200 })
    //  mick(100,300, { x2:100 })
    function mick(x,y,lf){var g=G(arguments)
        w.i.h(x,y,'+').c({l:20, C:0, lf: lf||1})
            .dc([50], [200,0,100], [100,100,100])
        if(g.p){w.i.h(x,y).c({ l:20, C:0, ls:lf||1})
            .dc([50],[200,0,100],[100,100,100])}}
    y.i.c('y').dc(100, 100, 30)
        .c('o').dc(100, 100, 10)
        .c('X','g',8)
        .mt([
            [100, 100], [300, 300], [400, 100],
            [500, 300], [450, 450]],
        [[500, 0], [600, 100]])
        .cir(600,300,'u','g',10)


    h= w.i.h(600,300,'+')
    h.cir(105, 100,20,'b')
        .cir(100,20,100,'g')
        .cir(105, 100,8,'z')
        .cir(200, 100,20,'b')
        .cir(200, 100,8,'z')



    w.t =  b = w.D(300,300, 'r', 80).bo(.8).den(.1)



}
ZOOMSCALE=function(){

    W([1000, 1000], {g: 0, t: 0
    })

    w.dragX = function(){var w=this,d
        w.hud.c.m({
            mD: function(x){d = x-w.s.x},
            pM: function(x){w.s.x = x-d}
        })
        return w}
    w.dragY = function(){var w=this,d
        w.hud.c.m({
            mD: function(x,y){d = y - w.s.y},
            pM: function(x,y){w.s.y = y - d}
        })
        return w}
    w.drag=function(){return this.dragX().dragY()}





    // w.s.HUD.dot(500, 500)
    y = w.ship(100, 100).rot(200)
    w.S(500, 500, 'o', 200)
    w.S(500, 500, 'r', 10)
    w.S(200, 200, 'm', 40)
    w.S(800, 200, 'b', 60)
    w.S(800, 800, 'l', 80)
    w.S(200, 800, 'g', 100)

    //w.inout()
    w.drag()


    r = $.range().A()

    r.abs(775,500)
    r.css(  'transform', 'rotate(90deg)'  )
    r.W(500).val(0)


    cjs.tick(function(){

        w.Z( r.val()/25+1 )

    })

}
FOL =function(){W(500, 500, 1600, 1000).G(0)
    a = w.ship().C('b')
    b  = w.ship(400,400).C('o').track()
    I(5, function(){
        if(w.follA){b.track(); w.follA=0}
        else {a.track(); w.follA=1}

    })


}
BASICSCROLL=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit

    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0})


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)


    w.S(1200,600,'w',[[400,500,'-']])

    y = w.ship(200,200).rot(120).damp(1,10)

    w.track(y, 600, 300)

    // w.dot(600,300)
    //w.hud.dot(600,300)


//    w.dot(1200,600)
    //   w.hud.dot(1200,600)




    y.XY(1400,600).rot(90).lD(0).lV(1)


}
SHORTLONG=function(){
    W([900,300,3600,300],{g:0}).Z(3)
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(200,200).rot(120).damp(1,10).track()
}
TRACKEECB=function(){W([1200,600, 2400, 1200],{g:300})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.t(10, function(i){
        w.D(100+i*100, 100,$r(), 35).d(.1)})
    w.Z('-')
    w.t = w.p(1175,100,'jump') // no need to call track?
    _.in(3,function(){
        w.C('x')
        w.t.cb= function(){
            w.Z(w.z + .001)
        }
    })

}
SHOWOFF=function(){W([1200, 600, 2400, 600], {g:10})

    y=w.ship(50,50).track()//.P(100,1000)

    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})
    w.showOff()

}
WORLDPAN=function(){W([1200, 600, 2400, 600],{g:0})
    w.S(400,300,'r',200,100)
    w.S(800,300,'z',100,100)
    w.S(1200,300,'b',300,100)
    w.S(1600,300,'z',100,100)
    w.S(2000,300,'r',200,100)

    b= w.D(100,100, 'b', 30).lV(-10,-20).rest(.2)
    co = w.tCo().B( b.tr())
    _.t(10, function(i){
        co.B( w.D(100 + 30*i,100, 'r', 30).lV(10,20).r(.2) ) })

    y = w.y(100,100).rt(120).aD(100)

    w.pan('*')

}

