cv = el = $.fn
c = HTMLCanvasElement.prototype
x=  ctx=  xx=CanvasRenderingContext2D.prototype
xGr = CanvasGradient.prototype


$.c = $.canvas= $.can = function(c, width, h, x,y){var g=G(arguments), o, el
    o = g.S_?
    {c: g.f, w: g.s, h: g.t, x:g[3], y:g[4]}:
    {w: g.f, h: g.s, x: g.t, y: g[3] }
    o.w = o.w|| 1200
    o.h = o.h|| 600
    o.c = o.c || 'x'
    el = $('<canvas>')
    el.attr({width: o.w, height: o.h})
    el.C(o.c)
    if(N(o.x)){ el.abs(o.x, o.y) }
    if(g.p){el.drag()}
    el.A().al(.8)
    return superCanvas(el)
}

superCanvas=function(el){
    el = $(el)

//to be called internally by $.c
//works on FIRST canvas in jquery obj
    el.canvas = el[0]
    el.context = el.canvas.getContext('2d')
    el.stage = new cjs.Stage(el.canvas)
    el.W=function(width){
        var args=G(arguments)
        width = args[0]
        if(U(width)){return this.attr('width')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('width', width)
        if(args.N){this.fit(dataUrl)}
        return this
    }
    el.H=function(height){
        var args=G(arguments)
        height = args[0]
        if(U(height)){return this.attr('height')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('height', height)
        if(args.N){this.fit(dataUrl)}
        return this
    }
    el.WH=function(w, h){
        if(U(w)){
            var width=this.W(), height=this.H()
            return {
                width:width,  w:width,
                height:height, h:height}}
        h = h||w
        return this.W(w).H(h)}
    //el.Z=function(d){d=d||5;return this.WH(d*100,d*100)}
    el.offsetLeft  =el.l=function(theOffset){
        if(!theOffset){
            return offsetLeft(x.q)}
        return parseInt( theOffset - x.offsetLeft() )};
    //  el.ox=function(){return x.q.q.offset().left}
    el.offsetTop   =el.t=function( y ){ if( !y ){ return offsetTop( y.q ) }; return parseInt( y - x.offsetTop() ) }
    //  el.oy=function(){return x.q.q.offset().top}
    el.copy= function(){
        el.img.src( el.toDataURL() )
        return el}
    el.paste= function(){
        var g=G(arguments)
        if(g.N){el.clearRect()}
        if(g.p){el.fit(el.img)}
        else {
            el.draw(el.img.src())
        }
    }
    el.save=function(){
        el.context.save()
        return el
    }
    el.restore=function(){
        el.context.restore()
        return el
    }
    //dont mix up with element/jquery alpha
    //maybe opacity for element and alpha for canvas?
    el.globalAlpha = el.alpha = el.op=function(alpha){
        if(U(alpha)){return this.context.globalAlpha}
        this.context.globalAlpha = alpha

        return this}
    el.comp = el.globalCompositionOperation = el.gc = function(compOp){
        if(U(compOp)){
            return this.context.globalCompositeOperation}
        this.context.globalCompositeOperation = oO('g', compOp)
        return this}
    //normal prop (as methods)
    el.lineWidth=function(w){
        if(U(w)){return el.context.lineWidth}
        el.context.lineWidth=w
        return el
    }
    el.lineCap=function(w){
        if(U(w)){return el.context.lineCap}
        el.context.lineCap=w
        return el
    }
    el.lineJoin=function(w){
        if(U(w)){return el.context.lineJoin}
        el.context.lineJoin=w
        return el
    }
    el.URL = el.dataURL = el.toDataURL=function(){
        return el.canvas.toDataURL()
    }

    //wap specific
    el.snap = function (  func ){

        pams = {

            d: el.toDataURL(),

            dats: el.dats

        }

        $.post('/img', pams, func )

    }
    el.img = $.i()
    el.img.src( el.toDataURL() )
    el.me=function me(n){//randomly draw my face
        var g=G(arguments),n=g[0]||200
        if(x.me.d){
            clearInterval(x.me.d);x.me.d=false}
        else{x.me.d=I(function(){
            x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
        return x}
    el.me.shouldDrawMeId=false
    el.mugX=function(m){
        qP('/mug',{u:m},
            function(m){x.fit(m)})
        return x}
    el.t=  el.tick=function(){
        var ctx=this.ctx()
        ctx.tick.apply(ctx, arguments)
        return this
    }
    el.$=function(func){
        el.click(function(e){
            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)})}
    el.$$=function(func){

        el.dblclick(function(e){

            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)

        })}
    el.over = el.MV=function(func){

        el.mouseover(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.out =el.MO=function(func){

        el.mouseout(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.enter = el.ME=function(func){

        el.mouseenter(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.leave = el.ML=function(func){

        el.mouseleave(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.up = el.MU=function(func){

        el.mouseup(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.move = el.MM=function(func){

        el.mousemove(function(e){

            func(e.pageX -$(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.down = el.MD=function(func){

        el.mousedown(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    return el

}

$.C=function(){ z();
    c = $.c('y').drag()
    x = c.ctx()
}



canEl=function(){

    c.u = function(){return this.toDataURL()}
    c.x = function(){return this.getContext('2d')}

}//;canEl()
paths=function(){

    cv.s = cv.ss = cv.strokeColor=setStrokeColor=function(c){

        this.ctx().strokeStyle =  oO('c', c)

        return this

    }
    cv.f = cv.fs = cv.fillColor=setFillColor=function(c){

        this.ctx().fillStyle =   oO('c',c)

        return this

    }
    cv.fi= cv.fill=function(){
        var cv=this
        cv.ctx().fill()
        //cv.stroke()
        return cv
    }
    cv.str= cv.stroke=function(){var cv=this,ctx=cv.ctx()
        ctx.stroke()
        //cv.stroke()
        return cv
    }
    cv.fSty= cv.fillStyle=function(fs){
        if(U(fs)){return this.context.fillStyle}
        this.context.fillStyle = fs
        return this}
    cv.fsX=function(c,sc){var g=G(arguments)

        if(O(c)){

            x.x.fillStyle=c;

            return x
        }

        if( c=g.p? $r('c',c) : Oo('c',c) ){
            x({f:c})
        }



        if(D(sc)){x.ss(sc)}

        return x

    }
    cv.sfl=function(c,f,s,l){
        x({f:f,s:s,w:l});return x
    }
    cv.clP= cv.closePath=function(){
        cv.context.closePath()
        return cv}
    cv.bg = cv.begin= cv.beginPath= function(x, y){var cv=this, ctx=cv.ctx()
        ctx.beginPath()
        if(N(x)){cv.mt(x,y)}
        if(A(x)){cv.mt(x[0],x[1])}
        return cv
    }
    cv.mt=  function(x,y){
        var cv=this, ctx = cv.ctx()
        ctx.moveTo(x,y)
        return cv
    }
    cv.lt=  function(x,y){var cv=this,ctx=cv.ctx(),g=G(arguments)

        if(A(x)){

            g.e(
                function(x){cv.lt(x[0],x[1])
                })}

        ctx.lineTo(x,y)

        return cv
    }
    cv.cl =function(){
        cv.context.clip()
        return cv}
    cv.fr= cv.fR= function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||cv.W()
        d=d||cv.H()
        cv.context.fillRect(a,b,c,d)
        return this
    }
//clear screen [+ fill with color || run fx]
    cv.clear = cv.clearRect=function(a,b,c,d){
        if(S(a)){
            cv.fillStyle(a);
            return cv.fillRect()}
        a=a||0
        b=b||0
        c=c||cv.W()
        d=d||cv.H()
        cv.context.clearRect(a,b,c,d)

        // if(F(a)){a()}
        return cv
    }
    cv.horizontalLine=cv.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    cv.verticalLine= cv.lnv=function(X,Y,len){var g=G(arguments),
        X=g[0], Y=g[1], len=g[2],
        Y2 = g.p ? Y + len
            : g.n ? Y - len
            : len
        return x.ln( X, Y , X, Y2 )
    }
//curves
    cv.arc=function(a,b,c,d,e,f,g){
        this.ctx().arc(a,b,c,d,e,f,g)
        return this
    }
    cv.arcTo =  function a2(X){var g=G(arguments)
        if(A(X)){return _a( a2(x), X)}
        this.arcTo([0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)
        this.stroke()
        return this
    }
    cv.bezierCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return this
    }
    cv.quadraticCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return cv
    }
    cv.curveTo=function(a,b,c,d,e,f,g){

        if(N(e)){
            return this.bezierCurveTo(a,b,c,d,e,f)
        }

        else return this.quadraticCurveTo(a,b,c,d,e,f,g)


    }
    cv.cir=function(X,Y,R,fs,ss){var cv=this, g=G(arguments),
        X=g[0]||200, Y=g[1]||200, r=g[2]||1, fs=g[3], ss=g[4]
        cv.beginPath()
        cv.arc(X, Y, r,0,7,false)
        cv.fillColor('red')
        cv.strokeColor('blue')
        cv.stroke()
        cv.fill()
        return cv
    }
//rect
    cv.fr= cv.fillRect=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||this.W()
        d=d||this.H()
        this.context.fillRect(a,b,c,d)

        return this}
    cv.colorFillRect = cv.cfr=function(a){

        var args=G(arguments)

        this.save()
        this.setFillColor( toColor.apply(null, args) )
        this.fillRect(0, 0, this.W(),this.H() )
        this.restore()

        return this

    }
    cv.roundRect= function(X, y, width, height, radius){

        cv = this.context
        cv.beginPath()
        cv.moveTo(X + radius, y);
        cv.lt(X + width - radius, y);
        cv.quadraticCurveTo(X + width, y, X + width, y + radius);
        cv.lt(X + width, y + height - radius);
        cv.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        cv.lt(X + radius, y + height);
        cv.quadraticCurveTo(X, y + height, X, y + height - radius);
        cv.lt(X, y + radius);
        cv.quadraticCurveTo(X, y, X + radius, y);
        cv.closePath();

        cv.fill()
        return cv

    }
    cv.roundRect.test=function(){
        cv.roundRect(100,100,200,400,20)

    }
//draw line ( [x,y],[x,y] || x,y,x,y )
//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
//fresh start
    cv.ln=cv.line = function rc(){
        var cv=this,
            ctx=cv.ctx(),
            g= G(arguments)

        if(g.N_){
            cv.begin(g.f, g.s)
            cv.lt(g.t, g[3])
            cv.stroke()
            return cv
        }

        if(g.A_ && N(g[0][0]) ){
            cv.begin(g.f)
            g.eR( function(p){
                cv.lt(p[0], p[1])
            })
            cv.stroke()
            return cv
        }

        if(AA(g.f)){
            g.e(function(p){ cv.ln.apply(cv,p)})
        }
        //cv.stroke()
        return cv
    }
    cv.pointInPath = cv.pip=function(c,a,b){
        return this.context.isPointInPath(a,b)
    }
};paths()
cv.dots=function(){var cv=this

    cv.copy()
    cv.DOTS=[]
    cv.dats=[]
    cv.$(function(x,y){
        x=parseInt(x)
        y=parseInt(y)
        cv.cir(x, y)
        cv.DOTS.push( [ x,y ] )
        cv.dats.push( x)
        cv.dats.push( y )
        cv.line( cv.DOTS )
    })
    cv.$$(function(X,Y){var du
        //el.C('X')
        cv.off('click')
        cv.closePath()  //el.paste() // el.copy()  //el.save()
        cv.clear() //du = el.toDataURL()
        cv.clip()
        cv.paste() //el.fit(du)
    })

    return cv

}
grads=function(){

    /*
     addColorStop = function rc( gr, stop, c ){
     // pass only a gr -> function with gr curried
     // add a color stop to a gr
     if(U(stop)){return _.p(rc, gr)}
     gr.cS(stop, oO('c', c))
     return gr
     }

     SuperGradient = function(gr){
     gr.stop = function(stop, c){cS(gr, stop,c); return gr}
     gr.stops = function(stopObject){
     _.e(stopObject,
     function(v, k){
     var o = S(v)? {k:k, v:v} : {k:v, v:k}
     cS(gr, o.k , $r('c', o.v))
     })
     }
     return gr
     }


     cv.linearGradient = cv.lG = cv.createLinearGradient = function(a,b,c,d){
     a=a||0
     b=b||0
     c=c||this.W()
     d=d||this.H()
     return SuperGradient(this.context.createLinearGradient(a, b, c, d))}
     cv.radialGradient = cv.rG = cv.createRadialGradient =  function rg(){
     var g=G(arguments)
     g[0]=g[0]||  200
     g[1]=g[1]||  200
     g[2]=g[2]||  100
     g[3]=g[3]||  250
     g[4]= g[4]|| 250
     g[5]= g[5]|| 800
     return this.context.createRadialGradient(  g[0],  g[1],   g[2],  g[3], g[4],  g[5] )
     }

     */

    cv.radGradSample=function(){
        var grd = this.rG()
        addColorStop(grd, 0, 'r')
        addColorStop(grd,.15, 'b')
        addColorStop(grd,.2, 'r')
        addColorStop(grd,.5, 'y')
        addColorStop(grd, 1, 'b')
        this.fillStyle(grd)
        this.fillRect()
        return this}
    cv.growingSun=function(){var that = this

        var a=0,
            b=1000,
            grd

        var fn =  function(){

            a += 1
            b -= 2

            grd = that.rG( 200, 200, a, 290, 270, b)
            grd.addColorStop(.1,'Yellow')
            grd.addColorStop(.3,'Red')
            grd.addColorStop(1, 'Violet')
            //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
            that.fillStyle( grd )
            that.fillRect()
        }
        $.ev(1, fn)
    }
    cv.pattern = cv.createPattern = function(im, pat){
        //im = im || $.img('me')[0]
        var pattern  = this.context.createPattern( im,  pat || 'repeat' )
        return pattern }
    cv.testPattern=function(){

        var that =this

        $.i('me',function(img) {

            var pattern = that.pattern(img[0],'repeat')

            that.fillStyle(pattern).fillRect()
        })
    }


    /*
     xGr.S=xGr.stop=function(n,c){var gr=this,g=G(arguments)
     if(N(n)){gr.cS(n, oO('c',c))}
     if(A(n)){_.e(g, function(g){gr.stop(g[0],g[1])})}
     return gr
     }
     */




    RADGRAD=function(){z()
        d= $.c('y', 500)
        c = $.c('y', 500).A()
        c.context.f(
            c.context.radGrad(50, 50, 50, 50,50,200).stop([.2,'o'],[.6, 'r'],[ .8,'g'])
        )
        c.fr()
    }



};grads()
pixels=function(){



    cv.gD=cv.getData = function(x,y,w,h){
        //historic.. dont delete ! data = x('G', X, Y, w, h).res
        var g=G(arguments),
            x=g[0] || 0,
            y=g[1] || 0,
            w=g[2] || this.W(),
            h=g[3] || this.H(),
            data = this.context.getImageData(x,y,w,h)
        // data.h = data.height
        // data.w = data.width
        // data.d = data.data
        return data
    }



    cv.pD=cv.putData=function(data,x,y){
        x=x||0
        y=y||0
        this.context.putImageData(data, x, y)
        return this
    }

    cv.gP=cv.getPut=function(a,x,y){
        var g=G(arguments),
            a=g[0],
            x=g[1],
            y=g[2],
            data=this.gD.apply(this.context, a)
        if(g.n){this.clear()}
        return x.pD(data,x,y)
    }
    cv.pixelsNegative=function(){
        var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
            data = imgData.data
        for (var i=0;i<data.length; i+=4){
            data[i]   =  255 - data[i];
            data[i+1] =  255 - data[i+1]
            data[i+2] =  255 - data[i+2]
            data[i+3] =  255
        }
        this.pD(imgData) //  this.pD(data,0,0)
    }
    cv.pixelsInvert=function(){
        var imgData = this.gD(), data = imgData.data
        for (var i = 0; i < data.length; i += 4) {
            data[i]     = 225 - data[i];
            data[i + 1] = 225 - data[i + 1]
            data[i + 2] = 225 - data[i + 2]

        }
        this.pD(imgData)
    }
    cv.pixelsGrayscale=function(){

        var imgData = this.gD(),
            data = imgData.data

        for (var i = 0; i < data.length; i += 4) {

            var avg = (data[i] + data[i +1] + data[i +2]) / 3;

            data[i]     = avg
            data[i + 1] = avg
            data[i + 2] = avg

        }

        this.pD(imgData) //  this.pD(data,0,0)

    }
    cv.pixelsFade=function( ){


        var imgData = this.gD(), data = imgData.data

        for(var i=7; i<_.size(data) ; i+=4){data[i] = 90}

        this.pD(imgData)

        return el}
    PIXELS=function(){

        c = $.can('y',900,500).A()

        c.draw('me', 100,100)

        $.in(.2,function(){

            c.pD( c.gD(100,100,500,500), 120,120)

            c.f("r").fr(10,10,50,50)

            imgData = c.gD(10,10,50,50)

            c.pD(imgData,10,70)


        })


    }
    CANVASQLOADER=function(){$.C()

        Q(['me'], function(q){me=Q.i('me')
            c.drawImage(me,100,100)

            c.pD( c.gD(100,100,500,500), 120, 120 )

            c.f("r").fr(10,10,50,50)

            imgData = c.gD(10, 10, 50, 50)

            c.pD(imgData,10,70) })
    }
    PIXELTEST=function(){
        c=$.C();
        Q(['me'],function(q){me=Q.i('me')
            c.drawImage(me,100,100)
            d = c.gD(100,100,500,500)
            // c.pD(d , 120, 120 )
            zeros=nums=0
            _.e(d.data, function(d){ if(d==0){zeros++} else {nums++} })
            $l('zeros: '+ zeros + ' - nums: '+ nums )
        })
    }
    pixelTest=function(){canvasPlayground()
        get = function(){d = m.getData(0,0,400,200)}
        // g.putData(d, 0, 100)
        put=function(){g.context.putImageData(d,200,200)}
        putget=function(){ get(); put() }
        putget()
        change=function(num){get()
            data = d.data
            _.e(data, function(pixel, index){ d.data[index] = pixel + (num ||100) })
            put()}
        anim=function(){num = 0; $.ev(.1, function(){change(num++)})}
    }


//give scale cos(rads), skew:sin(rads)  ??
};pixels()
trans=function(){


    cv.nl= cv.norm=function(){var cv=this,ctx=cv.ctx()

        cv.sc( this.W()/10, this.H()/10)

        return this
    }
    cv.sc=   function(X,Y){var g=G(arguments)
        X= g.f|| 1
        Y= g.s|| X
        this.ctx().scale(X,Y)
    }
    cv.tr=  function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}
    cv.rt=  function(r){
        var g=G(arguments),
            r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)
    }
    cv.al=function(al){
        this.opacity(al)
        return this

    }

    cv.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.u){return setTransform(2,0,0,2,0,0)}
        this.ctx().setTransform(a,c,e,b,d,f)
        return this
    }



    TRANS=function(){

        z()

        x = $.c('y', 1000,800)
        y = $.c('u', 400)

        x.$$(function(){  x.fit('me')  })

        x.fit('me')

        identity=function(x){ x.stf(1,0,0,1,0,0) }


        rotate=function(x,a){ identity(x); x.rt(tRad(a))  }

        rotateByAngle=function(px,py,a){var x,y
            x=(px*cos(a))-(py*sin(a))
            y=(py*cos(a))+(px*sin(a))
        }

        rotateAroundZero=function(px,py,r){var x, y,a='angle'
            x=(px * cos(PI/4))-(py*(sin(PI/4)))
            y=(py * cos(PI/4))+(px*(sin(PI/4)))}

        transformEquations=['x=ax+cy+e','y=bx+dy+f']

        //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
        //x=x+e,y=y+f
        //to scale, use a,d and set others to 0
    }

};trans()
texty=function(){


    cv.font=function(f){
        this.ctx().font = $l( HTML5.font(f) )
        return this
    }


    cv.strokeText = function(t,X,Y){var g=G(arguments),
        t=g[0],
        X=g[1]||100,
        Y=g[2]||X

        this.ctx().strokeText(t,X,Y)

        return this

    }


    cv.fillText = function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X
        if(g.p){
            this.tx(t,X,Y,'-')
            this.tx(t,X,Y)}
        else this.ctx().fillText(t,X,Y)
        return this
    }

    cv.mT= cv.measureText = cv.measure = function(t){
        return this.context.measureText(t)
    }

    cv.tW= cv.textWidth = function(t){return parseInt(this.measureText(t).width)}

    cv.centerHorizontalText=function(text, height){

        this.fillText(  text,
            this.W()/2 - this.textWidth(text)/2,
            height
        )

        return this}

}; texty()
drawin=function(){


    cv.dI=cv.drawImage = function(i){
        var cv=this, ctx = cv.ctx(), g=G(arguments),o

        g[1] = N( g[1], 0 )
        g[2] = N( g[2] || 0 )
        ctx.drawImage.apply(ctx, g)
    }
    cv.dr= cv.draw=function(i){var  cv=this, g=G(arguments)

        $.i(g.f, function(i){
            g[0] = i[0]
            cv.drawImage.apply(cv, g)
        })
    }
    cv.fit=function f(i, x,y) {var cv=this
        i= i || 'me'
        x = N(x,0)
        y = N(y,0)
        cv.draw(i, x, y,cv.W(), cv.H())
        return cv
    }
    cv.crop=function (x1,y1,x2,y2){var cv=this, ctx=cv.ctx(),i
        i= cv.toDataURL()
        if(A(x1)){
            return cv.crop(
                x1[0], x1[1], x1[2]-x1[0], x1[3]-x1[1]
            )}
        cv.dr(i, x1, y1, x2,y2, 0,0, cv.W(), cv.H())
        return cv
    }
    cv.scaleImCen=function(i, s ){
        var  w= this.W(),  h= this.H(), s= s||1
        this.draw(i,
            w * s/-2 + w/2,
            h * s/-2 + h/2//+ w/2
            ,
            w * s,
            h * s)
    }
    cv.scaleImCenSpiralMe=function(){
        var scaleNum = 1,
            that =this
        _.t(100, function(){

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })
    }
    cv.scaleImCenSpiral=function(){
        var scaleNum = 1, that =this
        _.t(100, function(){
            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }
    cv.dC=function f(i,x,y){

        var that = this

        i = i||'me'
        x= x||100
        y=y||100


        if(U(x)){//draw img in center of can
            $.img(i,function(i){
                that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})}

        else {//draw it by specifying location of its center
            y=y||x
            $.i(i, function (i) {
                that.dr(i, x - i.W() / 2, y - i.H() / 2)})}

        return this}

    //draw it where u say, but as if its reg point was its center

    cv.drawRegCenter=cv.dC2=  function f(i,x,y){var that =this

        $.i(i,function(i){
            that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})
        return this}
    cv.Cd=function(a, x,y){
        var that = this

        a= a||'me'
        x= x||100
        y=y||100

        $.i(a, function(img){that.drawImage(
            img.src,
            x- img.W()/2,
            y-img.H()/2
        )
        })
    }

}; drawin()
shadow=function() {

    cv.shdC = function (c) {
        if (U(c)) {return this.ctx().shadowColor}
        this.ctx().shadowColor = oO('c', c)
        return this
    }

    cv.shdBl =   function (bl) {
        if (U(bl)) {return this.ctx().shadowBlur}
        this.ctx().shadowBlur = bl
        return this
    }
    cv.shdX =  function (oX) {
        if (U(oX)) {return this.ctx().shadowOffsetX}
        this.ctx().shadowOffsetX = oX
        return this
    }
    cv.shdY =   function (oY) {
        if (U(oY)) {
            return this.ctx().shadowOffsetY
        }
        this.ctx().shadowOffsetY = oY
        return this
    }
    cv.shd = function (c, x, y, n) {var cv=this
        cv.shdC(c)
        cv.shdX(x)
        cv.shdY(y)
        cv.shdBl(n)
        return cv
    }

    SHAD = function () {$.C()
        c.dr('me', 100, 100)
        c.shdC('b').shdBl(100).shdX(200).shdY(100)
        c.dr('me', 200, 200)
        c.shdC('r')
            .shdBl(100)
            .shdX(200)
            .shdY(100)
        c.shdC('g')
        c.dr('me', 0, 300)
        c.shd('p', 30, 200, 20)
        c.dr('guy', 400, 200)
    }

};shadow()

$.imageSizeFuncCan = function(image, size, func){//xc=
    var x = $.c(100, 100).C('X')
    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }
    return x
}

cv.fitEx=function(){
    this.ln([0,0],
        [this.W(),this.H()],
        [0,this.W()],[this.H(),0])
}
