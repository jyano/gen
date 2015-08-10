cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}

$PT(); cjs=C$=createjs; T= cjs.Ticker
DRAG=function(){z()
    $.dragStage()
}

$.fn.T = function () {var d = this, g = G(arguments)
    d.E()
    g.e(function (str) { d.A($.h3(str)) })
    return d
}

TFSET= function(){W()._(function(){
    w.i.qB('me').grow().drag()

    i= w.i.qB('me').XY(200,200)

    ball = w.ball()

    $.in(3, function(){

        w.C('b'); ball.bS(i)

    })

    //  me.startMoving(10, 10)

    T.t(function(){iS = i.inStage()
        $l(iS)
    })
    b= w.i.qB('me')


    b.setTransform(0,0,2,.5,0,40,4,2,3)

    //m = b.getMatrix()
    function tf(a,b,c,d,e,f,g,h,i){
        return this.x=a||0,
            this.y=b||0,
            this.scaleX=null==c?1:c,
            this.scaleY=null==d?1:d,
            this.rotation=e||0,
            this.skewX=f||0,
            this.skewY=g||0,
            this.regX =h||0,
            this.regY =i||0,
            this}

})}
$St=function(){var st, g=G(arguments), cv
    //get by canvas ID
    cv = g.A? g.f[0]:
        //if you pass it a canvas OR a $canvas object
        O(g.f)? $(g.f)[0] :
            //create a new canvas
            $.c(g.f||'p',g.s||1200,g.t||600,g[3],g[4])[0]
    st = new cjs.Stage( cv )

    st.cv=   st.c=st.can= $(st.canvas)
    st.cv0=  st.cv[0]
    st.xc= st.cv0.getContext('2d')

    if(g.p){st.t()}

    return st.A()
    //.t()
}
cjs.iDO= function(i){return O(i)&&F(i.getStage)}
eD.init=function(){
    var eD=this
    eD.initialize.apply(eD, arguments)
    return eD
}
$Bm= cjs.B= cjs.bm= function(){var g=G(arguments),   i=g[0], bm
    bm=new cjs.Bitmap(i)
    if(g.p){ bm.drag() }
    return bm
}
$.fn.a2=function(el){el.A(this); return this}
$.St=function(){z()
    s = $St().t()
    s.bm('me', function(bb){
        b=bb.drag()
    })
    return s
}
$.dragStage = function (x, y) {
    s = $St('v',  '+')
    return $.dragFrame($(s.canvas))
}

//text
$T= function(a,b,c,d,e){var g = G(arguments), o, t
    return new cjs.Text(a,b,c,d,e)

    o = g.O ? g.f :

    {t: g.f, f:g.s, c:g.t, x:g[3], y:g[4]}

    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = o.c || 'y'
    o.x = N(o.x, 600)
    o.y = N(o.y, 100)
    t = new cjs.Text(o.t, o.f, o.c)
    t.XY(o.x, o.y).drag()

    if (g.n) {t.regX = t.W() / 2}
    if (g.p) {t.bl('alphabetic')}

    return t.bl('middle')

}



TEXT = function () {W()
    w.S(300, 100, 'z', 1500, 1)
    w.d('r', 300, 100)
    w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
    w.i.T('bottom').XY(500, 100).bl('-')
    w.i.T('middle').XY(700, 100)
    w.dot(300, 400)
    nice = w.i.T('nice', 135, 'x', 300, 400)
    /*
     w.i.T('linewidth 0').XY(100,300).lW(0)
     w.i.T('linewidth null').XY(100, 500).bl('bottom')
     w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
     w.i.T('lineheight -100').XY(700,300).lH(-100)
     w.i.T('lineheight 0').XY(700,500).lH(0)
     w.i.T('lineheight 100').XY(700,700).lH(100)
     w.i.T('linealign left').XY(600, 100)
     w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
     w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
     */
    hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
    w.show('hello')
}
SPEECH=function(){W()._(function(){
    t = w.i.T( 600, 300, 'hiiiiiiiiii', 200, 'r')
    ct = w.i.ct().drag()
    ct.h(200, 150).cir(130,'w').cir(100,50,100,'w')
    ct.T(250,150, 'yoyoyoo', 60, 'd')
    $.in(10, function(){ct.rm()})
    //ct.tw( [{   sxy:.1, x:x-250, y:y-250 }, 20000])
})}




ticker()


$Ct=cjs.Ct=cjs.ct=function(a){return new cjs.Container(a)}

NEWSTG=function(){z()
    //three ways to make a new stage
    s = cjs.s('r',100 ).A().bm('me')
    s.can.drag()
    c= $.canvas('b',100).A().drag().XY(400)
    s1=cjs.s(c)
    s1.A().bm('me')
    c2= $.canvas('b',100).A().id('someId').drag().XY(300,100)
    s2=  cjs.s(['someId'])
    s2.tick().bm('me')

}

movement()


function ticker(){

    cjs.xL= T.s= function(){
        T.removeAllEventListeners()  } // u might say xTHIS but not thisX? i dont know what i am talking about
    /* TICKER
     paused : Indicates whether the ticker is currently paused.
     d       delta :  time since the last tick
     t       time : how much  since T  started
     r      runTime  : how much time has T been running for
     */
    T.p=function(){T.setPaused(false);return T}
    T.P= T.s= function(){T.setPaused(true);return T}
    T.$=function(){
        T.setPaused( T.getPaused() == false ? true : false )
        return T}
    T.t=   cjs.t =   function(fn){var g=G(arguments)
        if(g.F_){
            if(!g.n){fn()}
            return T.on('tick', fn) // T.addEventListener? return T?
        }
        return   g.n?  T.t('+') - T.t() :
            Number( (T.getTime(g.p?false:true)/1000).toFixed(2) )
    }
    T.i=function(){
        //indicates the target time (in ms) between ticks
        //default is 50 (20 fps)
        //Note: actual time between ticks may be more than specified,
        //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
        return T.interval
    }
    T.f=  function(numTicks){var g=G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
        if(N(numTicks)){T.setFPS(numTicks);return T}
        return g.n?
            T.getFPS():
            T.getMeasuredFPS() //returns *ACTUAL* frames
        // / ticks per second//
        // Depending on performance,
        // this may differ from the target frames per second.
    }
    T.e= function( runTimePropReturnedInsteadOfTime ) {
        //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
        T.getEventTime ( runTimePropReturnedInsteadOfTime )//df: false ( If true, the runTime property will be returned instead of time  )
    }
    T.m=function( ticks  ){
        return T.getMeasuredTickTime (ticks )} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
    /*
     // returns   The average time spent in a tick in milliseconds.
     //This can vary significantly from the value provided by getMeasuredFPS because it only measures the time spent
     // within the tick execution stack.
     Example 1: With a target FPS of 20, getMeasuredFPS()
     returns 20fps, which indicates an average of 50ms between the end of one tick and the end of the next.
     However, getMeasuredTickTime() returns 15ms.
     This indicates i there may be up to 35ms of "idle" time between the end of one tick and the start of the next.

     Example 2: With a target FPS of 30, getFPS() returns 10fps,
     which indicates an average of 100ms between the end of one tick and the end of the next. However,
     getMeasuredTickTime() returns 20ms.
     This would indicate i something other than the tick is using ~80ms
     (another script, DOM rendering, etc).

     */
    ct.t=  ct.oT=  function(fn){var g=G(arguments)
        if(F(fn)){if(!g.n){fn()}; return this.on('tick', fn) }
        else {T.on('tick', this); return this
        }
    }
    ONOFFTICK=function(){W({w:0})
        //will break if u change it
        fun = w.s.t(ball)
        $.in(3, function(){
            w.s.xT(fun)
        })
        function ball(){if(R(5)<1){ w.ball()}}


    }
    ct.xT=function(fn){
        this.off( 'tick', fn )
        return this
    }



}

function movement() {

    cjs.bindSlide = SL = function () {
        var g = G(arguments),
            b = g[0],
            b2 = g[1] || b

        return b.on('mousedown',
            function (e) {
                var bx = b2.x - e.rawX,
                    by = b2.y - e.rawY
                b.on('pressmove', function (e) {

                    if (g.P) {
                        b2.x = bx + e.rawX
                    }

                    //if (g.N) {
                    b2.y = by + e.rawY
                    //}
                })

            })
    }
    cjs.bindReverseSlide = LS = function (b, b2) {
        var g = G(arguments),
            b = g[0],

            b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b

        return b.on(d, function (e) {
            var bx = b2.x + e.rawX, by = b2.y + e.rawY

            b.on(pm, function (e) {

                if (g.P) {
                    b2.x = bx - e.rawX
                }
                if (g.N) {
                    b2.y = by - e.rawY
                }

            })
        })
    }
    cjs.bindRotate = RT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)
        //if(g.p){  //b.rgc( '+' )   }

        var g = G(arguments), b = g[0], b2 = g[1] || b

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )


                })
            })

    }
    cjs.bindRotate2 = RTT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)


        var g = G(arguments), b = g[0], b2 = g[1] || b


        if (g.p) {  // b.rgc( '+' )
        }

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )


                })
            })

    }
    cjs.bindScale = SC = function (b, b2) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'), pm = oE('pm'), b2 = b2 || b,
            cp = function (n) {
                return n < .2 ? .2 : n > 2 ? 2 : n
            }

        return b.on(d,

            function (e) {
                var X = e.rawX, Y = e.rawY,
                    sx = b2.scaleX,
                    sy = b2.scaleY

                b.on(pm,

                    function (e) {
                        if (g.n) {
                            b2.sXY(cp(sx + (
                                (e.rawX - X) / 200)),
                                cp(sy - ((e.rawX - X) / 200))
                            )

                        }

                        else if (g.p) {
                            cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                            cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
                        }

                        else {
                            b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                        }
                    })
            }
        )
    }
    cjs.bindSkew = SK = function (b) {
        var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b

        return b.on(d,
            function (e) {
                var X = e.rawX, Y = e.rawY
                b.on(pm, function (e) {


                    b2.kXY(
                        (e.rawY - Y) * .5, (e.rawX - X) * .5
                    )

                })
            })
    }
    cjs.bindTransform = TR = function TR(b, b2, m) {

        var g = G(arguments),
            b = g[0],
            b2 = g[1],

            b2 = b2 || b, m = g[2] || 'SL'

        if (m == 'SL') {
            cjs.bindSlide(b, b2);
            m = 'SC'
        }

        else if (m == 'SC') {
            cjs.bindScale(b, b2);
            m = 'RT'
        }

        else if (m == 'RT') {
            cjs.bindRotate(b, b2);
            m = 'SL'
        }

        return b.on('pressup', function (e) {

            b.removeAllEventListeners();

            TR(b, b2, m)

        })
    }
    cjs.reggy = reggy = function (o, s) {

        s = s || o.parent

        s.bm('me', function (b) {

            b.W(40).H(40)

            I(function () {
                b.XY(o.x + o.regX, o.y + o.regY)
            }, 100)

        })


    }
    cjs.bindSlideAndRotate = KK = function (b, b2) {

        var g = G(arguments), b = g[0],
            b2 = g[1] || b
        cjs.bindSlide(b);
        cjs.bindRotate(b, b2)
        if (g.p) {

            b.rgc('+')
        }

        if (g.N) {
            //    reggy(b,b2)
        }
    }
    cjs.bindRotateThenSkew = RK = function (b, b2, m) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b,
            m = g[2] || 'RT'


        //if(g.p){var s=St('y',1000)
        //    _t(b||5,function(i){s.a().bm(
        //        function(bm){bm.xy(i*50);TR(bm)})});return s}

        if (m == 'RT') {
            RT(b, b2);
            m = 'SK'
        }

        else if (m == 'SK') {
            SK(b, b2);
            m = 'RT'
        }

        return b.on(oE('pu'),
            function (e) {
                Do(b).O();
                RK(b, b2, m)
            })
    }

}



ICEN=function(){Q(['guy','me'],function(){//z()
    s= new cjs.Stage( $.can( 'p', 1200, 600 )[0] ).A(); s.c=$(s.canvas)
    //s.bm('me', function(bb){b=bb.drag() })
    s.qB('guy').XY(300,300).spin()
    s.qB('guy').XY(300,300).sXY( .5, .3).spin()
    T.t(function(){ s.u() })
    $.in(3, function(){   T.f(1)   })
    $.in(9, function(){  T.f(1000)  })
})}




cjs.bulletHit = function (bullet, inWhat) {

    var x = bullet.centerX(),
        y = bullet.centerY()

    var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

    if (res == true) {
        $l('hit!')
    }
    return res
}

WHYQ = function () {
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false

    $.kU('l', function () {
        if ($.test) {
            $l('left lifted')
        }
        cjs.Keys.l = cjs.Keys.left = false
    })

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
    })

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
    })

    $.kD('r', function () {
        if ($.test) {
            $l('right pressed')
        }
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'
    })

    $.kU('r', function () {
        if ($.test) {
            $l('right lifted')
        }
        cjs.Keys.r = cjs.Keys.right = false
    })


    $.kD('u', function () {
        if ($.test) {
            $l('up pressed')
        }
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u', function () {
        if ($.test) {
            $l('up lifted')
        }
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d', function () {
        if ($.test) {
            $l('down pressed')
        }
        cjs.Keys.d = cjs.Keys.down = true
    })

    $.kU('d', function () {
        if ($.test) {
            $l('down lifted')
        }
        cjs.Keys.d = cjs.Keys.down = false
    })
}
FANCYEDIT = function (x, y) {


    z()

    canvas = $.canvas('g', 400)
    stage = new cjs.Stage(canvas[0]).tick()
    frame = $.dragFrame(theSpan = $.span())

    theSpan.A(
        $.button('X', function () {
            frame.remove()
        }),
        $.button('pics', function () {
            $.imagesDiv(stage)
        }),

        $.button('transform'),
        $.button('text'),

        $.button('paint', function () {

            _paintColor = '#0FF'

            var size = 10, oX = 0, oY = 0, shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(
                stage.du(), //?

                function (m) {


                    m.XY(40).sXY(.4)


                    stagePainter(paintStage)


                })


        }),
        $.button('cut'),

        $.button('save'))

    theSpan.A($.br(), canvas)

    theSpan.A($.div().A(
        $.button('clear', function () {
            stage.removeAllChildren()
        }),

        $.button('flat', function () {

            stage.removeAllChildren()

            stage.bm(stage.toDataURL(), function (bm) {
                bm.drag()
            })

        }),

        $.button('clone', function () {


            var newSpan = $span()

            var newStage = dragStage(newSpan)


            newStage.bm(stage.du(), function (bm) {
                SL(bm)

            })

        }),

        $.button('recur', function () {

            stage.bm(stage.du(), function (bm) {

                bm.sxy(.4)
                SL(bm)

            })
        }),

        $.button('copy', function () {

            _copy = stage.du()


        }),

        $.button('paste', function () {
            stage.bm(_copy, function (bm) {
                bm.drag()
            })
        }),

        $.button('replace', function () {

            stage.rm()
            stage.bm(_copy, function (bm) {
                bm.drag()
            })

        })
    ))

    theSpan.dblclick(function () {
        $('button').toggle()
    })


    theSpan.A()


}



//to shape -> ct.circle = function(x,y,r,c){var ct=this;ct.A(cjs.circle(x,y,r,c));return ct}

// 'P' is avaible.  potition?  (M is taken by Math, but mouse needs something)





old=function(){

    q.mf = q.manifest = function () {var q=this,g=G(arguments)
        q.loadManifest(cjs.mf.apply(null, g))
        return q}
    cjs.lQDep= cjs.lqDep=cjs.loadQueueDep=function(mf,fn){
        var q = new cjs.LoadQueue(true)
        if(A(mf)){q.loadManifest(cjs.mf.apply(null, mf))}
        if(F(fn)){q.complete(function () {fn(function (i) {return q.getResult(i)})})}
        return q}
    cjs.mfDep = cjs.manifestDep = function(a){var g=G(arguments), mf=[]
        _.e(g, function (v) {
            mf.push({
                src: cjs.src(v),
                id: v})})
        return mf
    }

    //cjs.handleFileLoad = function (e) {if (e.item.type == "image") {images[e.item.id] = e.result}}
//cjs.makeManifest = cjs.makeMan=function(a) {return cjs.manifest.apply(null, _.m(a.images, function (i) {return Graphics.fromSource(i)}))}

    QDep=function(i,fn){
        q=cjs.lQ(),
            mf=[]
        _.e(i,function(v) {mf.push({src: cjs.src(v), id: v})})
        q.mf(mf)
        q.c(function(){fn(q)})
        return q}

    tickX=function(e){j.Y(e.delta/1000*100,'-' )}
    timeStamp2 = function(s, j, pxPerSec){
        var fn=function(s,e){
            if(!N(j.ts)){j.ts=0;j.lts=e.ts}
            else{j.ts= e.ts-j.lts;j.lts=e.ts
                j.y((j.ts/1000) * pxPerSec,'-')  }}
        return s.t(fn)}
}

mug=function(){

    s.snap = function(f){
        $.post('/img', {
            d: this.toDataURL()//, dats: o.x.dats
        })
        sec(f)
        return this}

    $mugTest=function(){z();
        s = cjs.stage(800,800).A()
        s.mug( function(mug){ m=mug  })
    }


    ct.bData=function(data){

        var bm = cjs.bm( $.img().src($.parseJSON(data)) )
        this.A(

            bm
        )

        return bm}
// **** works!!!!

    ct.mug=function(sc,fn){var ct=this
        $.get('/myMug', function(m){ct.bm(m,sc,fn)})
        return ct}
}


touchEnable = function (s) {
    cjs.Touch.enable(s);
    return s
}//important for ipad//move this onto stage itself


old=function(){
    ct.bmR=   function(i,fn){var ct=this,bm
        alert('ct.bmR')
        $.i(i, function(i){
            bm = $Bm( i[0] ).a2(ct)
            bm.rXY(
                bm.W()/2,
                bm.H()/2
            )
            if(fn){ fn(bm) }
        })
        return ct
    }
}