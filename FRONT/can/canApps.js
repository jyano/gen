


canData()
canApps()
function canData() {

    tictactoe = [
        [[200, 0], [200, 600]],
        [[400, 0], [400, 600]],
        [[0, 200], [600, 200]],
        [[0, 400], [600, 400]]
    ]
    sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
    sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]
}
function canApps(){

    CC=function(){
        //$.C()
        c= $.c('X', 1200,600, 100,100,'+')
        c.fit()
        c.draw('me')
        c.ln(tictactoe)
        $.in(2, function(){
            c.crop(100,100,900,500)
        })
    }
    TXC=function(){$.C()



        c.dr('me')

        c.paperBag()


    }

    CAN=function(){

        var picHolder

        $.format()

        picHolder= $.sp().id('pics')

        s2.A(
            picHolder
        )


        $.getJSON('/img',   function(i){
            _.e(i, withImage)
        })


        function withImage(img){

            dataUrl = img.d
            can =   $.c(100, 100)
            can.click(function(){var mouse = $('#mouse')
                mouse.val('click')
                mouse.change()
                mug = img.d   })
            picHolder.A(can)
            can.fit(dataUrl)
        }

        s2.A(
            c=cv=  x = canvas = $.c('y',1000,800))
        //  $.ev(10, function(){x.bc()})

        s1.A($.lb('mouse'),

            /*
             $.scv('none','click','enter','leave','move').id('mouse').o(
             function(s){
             x.q.ub()
             if(s=='click'){
             x.$(function(X,Y){
             x.Cd(mug,X,Y)
             })}


             if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
             if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
             if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})

             x.MU(function(){x.q.ub('mousemove')})}


             }),


             */
            $.label('global comp'),

            //scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
            //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
            $.bt('SAVE(sv)',function(){ x.sv() }), $.br(2),

            $.bt('CUT(dots)', function(){x.q.q.unbind()
                qi('mouse').v('none')
                x.dots()
            }), $.br(2),

            $.bt('RESTORE(R)', function(){x.R()}), $.br(2),
            $.bt('bc:change background color',function(){x.bc()}),$.br(2),
            $.bt('cir:make circle',function(){x.cir(100,100,100)}),$.br(2),
            $.bt('d:draw',function(){

                c.dr(
                    $w['mug']||'me'

                )}), $.br(2),
            $.bt('dC:draw center',function(){
                cv.dC(window['mug']||'me')
            }), $.br(2),
            $.bt('me',function(){
                x.me()
            }), $.br(2),
            $.bt('sh1',function(){x.ln(sh1)}), $.br(2),

            $.bt('sh2',function(){x.ln(sh2)}),$.br(2),

            $.bt('tictactoe',
                function(){ x.ln(tictactoe) }), $.br(4),
            $.bt('sampLinGrad',
                function(){ x.sampLinGrad() }),$.br(2),
            $.bt('sampRadGrad',
                function(){  x.sampRadGrad()  }), $.br(2),
            $.bt('ctxx',
                function(){xxx('barney')}), $.br(2),
            $.bt('bads',
                function(){bad(x,200,8)  }), $.br(2),
            $.bt('coins',
                function(){coin(x,200,8)}),    $.br(2)
        )
    }
    FULLCAN=function(){z()

        $('html').css({
            height:'100%'//, of:'h'
        })

        $('body').css({
            margin:0,
            //g:0,
            height:'100%'
        })

        var s ='Click or tap the screen to start the game',

            fo ='bold 16px Arial',

            x = $.c('p',W(), H()).A()

        // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)


        $.i('me',function(image){

            var origW= image.W()

            image.W( Math.round( (50 * cW()) / 100 ) )
            image.H( Math.round( (image.W() * image.H() )/ origW) )


            x.draw(
                image,
                x.W()/2- image.W()/2,
                x.H()/2- image.H()/2
            )



        })


    }



    FAN=function(){
        x=$.c('y',1000,800).A()
        y=$.c('x',400).A()
        x.$$(function(){x.fit('me')})
        x.fit('me')
        guidewires=false
        dragging=false
        mousedown={}
        loc={}

        restoreDrawingSurface=function(){}

        updateRubberband=function(m){
            x.ln(mousedown.x,
                mousedown.y,
                m.x,
                m.y)
        }

        drawGuidewires=function(){}


        x.MD(function(X,Y){
            dragging=true
            mousedown={x:X,y:Y}})
        x.MM(function(X,Y){

            if(dragging){
                restoreDrawingSurface()
                updateRubberband({x:X,y:Y})}

            if(guidewires){drawGuidewires(loc.x,loc.y)}

        })
        x.MU(function(X,Y){dragging=false
            restoreDrawingSurface()
            updateRubberband({x:X,y:Y})})

    }

    RUB=function(){ z()
        can = $.c('y', 1000, 800).A()
        can.$$( function(){ can.fit('me') } )
        can.fit('me')
        guidewires = false
        dragging = false
        mousedown = {}
        loc = {}
        rr = null
        data = null
        can.MD(function(x, y){
            data = can.gD()
            dragging = true
            mousedown = { x:x, y:y }

        })
        can.MM(function(X,Y){var m={x:X, y:Y}, d = mousedown
            if(dragging){
                can.pD(data)
                can.ln(d.x, d.y, d.x, m.y)
                can.ln(d.x, d.y, m.x, d.y)
                can.ln(m.x, m.y, m.x, d.y)
                can.ln(m.x, m.y, d.x, m.y)}})
        can.MU(function(X,Y){
            dragging = false
            var d = mousedown, x1, x2, y1, y2
            if(X > d.x){ x1 = d.x; x2 = X } else {x1=X; x2=d.x}
            if(Y > d.y){ y1 = d.y; y2 = Y } else {y1=Y; y2=d.y}
            rr=[x1, y1, x2, y2]
            can.pD(data)
            can.crop(rr)

            //    data=can.gD()
        })


    }

    FIT=function(){$.C()
        c.fit('me')
    }

    CANVIIFIT=function(){z()
        m= $.c(800).fit('me')
        g= $.c('b',600).fit('guy')
    }
}
muggy()
function muggy(){

    cv.drawMug = cv.me = function me(interval){
        //randomly draw my face

        var that = this, g=G(arguments), args= g,

            interval = args[0] || 200

        if(that.drawMug.shouldDrawId){

            clearInterval(that.drawMug.shouldDrawId)

            that.drawMug.shouldDrawId = false}

        else{

            that.drawMug.shouldDrawId =  setInterval(function(){

                that.draw(  window['mug']||'me',  _.random( that.W()-200 ),  _.random( that.W()-200 )  )

            }, interval)}

        return this}
    cv.drawMug.shouldDrawId = false
    cv.fitMug = cv.mug= function(user){var that=this

        $.post('/mug', { u: user },  function(userMug){  that.fit(userMug)  })
        return this
    }



}
function beta(){
    cv.sun = function (a, b, s) {

        s = s || 1;

        this.rG(
            [[a || 0, b || a || 0], s * 100, s * 500],

            {'y': 0, 1: tCl('p', 0)},

            600,

            600
        )


    }
    cv.paperBag = function (x, y, width, height, blowX, blowY) {
        x = x || 100
        y = y || 100
        width = width || 100
        height = height || 100
        blowX = blowX || 100
        blowY = blowY || 100

        var lx, ly;

        this.ctx().strokeStyle = 'Red'
        this.ctx().beginPath();
        this.ctx().moveTo(x, y);

        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);

        return this

    }
}
old=function(){


    cv.ball=function(b){b=b||{}

        var dir = b.d||false,

            px  = b.x||100, py  = b.y||100, rad = b.r||100,

            per = b.p||Math.PI* 2,

            ss = $r('c', b.s) ,
            fs = $r('c', b.f),
            lw = D(b.l)? b.l: 4

        return x.com('b',['a',px,py,rad,0,per,dir], {f:fs,s:ss,w:lw},'f','s')
    }


}
