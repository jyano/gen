//-> G(arguments, fn)
b2d.p()
//  The easiest approach to utilize the controllers
// is to create sensor fixtures
// that test when a begin/end  event has occurred with a body.
// In the beginContact method, add the body to the controller.
// In the endContact method, remove the body.
// b=w.D(300, 300,'b', 50, 60); T.t(function(){b.F(10,10)}) //.zF(10,10)// <--MUST WRITE
// co = w.aCo(-5, -5)
// Imagine that you have gusts of wind blowing sideways…
// you can add your objects to a Contoller and have them pushed sideways…
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!
//pass 1 or more controllers, and it will get them goin'
w.co = function(){var w=this, g=G(arguments)
    g.e(function(co){
        w.AddController(co)
    })
    return this
}
co.N=   function(){return this.GetNext()}
co.W=   function(){return this.GetWorld()}
co.xB=function (b) {var g=G(arguments), b=g[0]

    if(g.u){
        if(g.n){ this.xB( _.l(this.bs() )) }
        else if(g.p){ this.xB( _.f(this.bs() )) }
        return this}

    if(!this.b()){return this}

    if(b){
        if(b2d.tB(b).by(this)){


            if( b2d.tB(b).by(co) ){
                this.RemoveBody(b2d.tB(b))
            }



        }}

    else {this.bs(function(b){this.xB(b)})}

    return this
}
b.xCo=function (co) {var b=this,g=G(arguments), co=g[0]


    if(!this.co()){return this}


    if(!co){
        if(g.n){this.xCo(_.l(this.cos()))}
        else if(g.p){this.xCo(_.f(this.cos()))}
        else {this.cos(function(co){ b.xCo(co)})}
    }

    else if(this.by(co)){co.RemoveBody(this)}

    return this
}
co.b = function(){
    var g=G(arguments), b = this.GetBodyList()
    return g.p? b.body : b
}
co._B = co._A = function(b){

    if(b){this.AddBody(b2d.tB(b))}
    return this
}
co.B= function(){var g=G(arguments), co=this



    if(g.n){
        if(g.f){
            this.xB(b2d.tB(g.f))
        }}

    else {


        g.e(function(b){
            if(g.p){co._B(b)}

            else {
                if(!b.by(co)){ co._B(b) }
            }
        })

    }

    return this
}
co.n=function(){

    var n=0,  b=this.GetBodyList()

    if(!b){return 0}
    n++
    while(b.nextBody){
        n++
        b= b.nextBody
    }
return n
}
co.by=function(b){
    if(b){ return _.contains(this.bs(), b)}
}
b.by=function(co){

    return co.by(this)
    var by=false,
    coL = this.GetControllerList()
    if(!coL){return false}
    if(coL == co ){return true}
    while(coL.nextController){
        coL = coL.nextController
        if(coL == co ){by = true}
    }
    return by
}
f.by=function(co){
    return this.B().by(co)
}
b.nCo=function(){
    var n=0,
        co=this.GetControllerList()


    if(!co){return n}
    n++
    while(co.nextController){
        n++
        co= b.nextController
    }


    return n
}
b.co= function () {var  g=G(arguments)
    if(g.n){
        if(g.u){this.xCo()}
        else {g.f.xB( this) }
        return this
    }

    if(g.u){

        var c=this.GetControllerList()

        return g.p? c.controller: c
    }
     if(g.F_){

         r.co('+').bs(function(b){

             if(!b==this){g.f(b)}
         })}
    return this
}
co.bs=function(fn){
    var b = this.b(), bs = []
    if(!b){return bs}
    bs.push(b.body)
    while(b.nextBody){
        b=b.nextBody
        bs.push(b.body) }
    if(fn){_.e(bs, function(b){fn(b)}); return this}
    return bs
}
b.cos=function(fn){
    var co = this.co(), cos = []
    if(!co){return cos}
    cos.push(co.controller)
    while(co.nextController){
        co=co.nextController
        cos.push(co.controller) }
    if(fn){_.e(cos, function(co){fn(co)}); return this}
    return cos
}
f.co= function () {
    return this.B().co()
}

//x as a verb is to delete/cancel

f.xCo=function(){this.B().xCo();return this}
//'(switch/change)to'
b.to=function(co){return this.xCo().co(this)}
f.to=function(co){this.B().to(co); return this}


//////////////////// general above ////
aCo.V = function () {
        var co = this, g = G(arguments), o
        //getter is a waste!  counterproductive... think about it! :)..
        // but for consistency..??? nah i can do better
        //applies 'gravity' by default

        o = g.N ? {y: g.f} : {x: g.f, y: g.s}
        o.y = N(o.x, 100)
        o.x = N(o.x, 0)

        co.A = g.u || (g.N_ && U(g.s)) ? V(0, N(g.f, 100)) : V(g.f, g.s)

        return co

}
fCo.V = function (x, y) {
        var fCo = this //applies 'gravity' by default
        fCo.F = U(x) ? V(0, 10) : V(x, y)
        return fCo
    }
gCo.g = gCo.grav = gCo.V = function (gv) {
   //applies 'gravity' by default
        this.G = V(1, 100)//N(gv,1)
        return this

}
gCo.r1 = function () {
    this.invSqr = false
    return this
    }
gCo.r2 = function () {
    this.invSqr = trie
    return this
} //this is default
tCo.axis = function (ax) {
        this.SetAxisAligned(ax);
        return this
    }
co.step = function(){
    alert('co.step')
    this.step(); return this}
w.aCo=   function(x, y){var w=this,

    co = new b2d.ConstantAccelController

    if(x || N(x)){   co.V(x, y)     }

    w.co(co)

    return co

}
w.fCo=  function(x,y){var w=this,co
    co = new b2d.Dynamics.Controllers.b2ConstantForceController()
    co.V(_.tN(x),_.tN(y))
    w.co(co)
    return co}
w.gCo=  function(gv, wantFasterR1){var w=this, g=G(arguments), co

    co = new b2d.Dynamics.Controllers.b2GravityController

    if(g.N_){ co.G = g.f  }
    if(g.s || g.p){ co.r1() }

    w.co(co)

    return co

}
w.eT=function(fn){var w=this

    T.t(function(){
        w.e(fn)
    })

    return w}
w.tCo=   function(a, b, c, d){var co
    co= new b2d.Dynamics.Controllers.b2TensorDampingController
    this.co(co)
    return co
}
b._xCo=function(){
    this.co().controller.xB(this); return this
}
b.do1=function(co){this.cl(

        function(f){  if(!f.by(co)){co.B(f)}  },
        function(f){  if(f.by(co)){co.xB(f)}  }
    )

return this
}
b.do=function(co){
    this.cl(function(f){

            if(!f.sen()){
                co.B(f)
               // f.C('z')
            }

        },

        function(f){

            if(!f.sen()){
           // co.xB(f)
            f.xCo(co)
            //f.C('w')
            }
        }); return this
}
co.do=function(b){
    if(b){b.do(this); return b}
}
w.bCo= function(nX, nY, lD, aD){var w=this, g=G(arguments), o,co
//co = new b2d.BuoyancyController
    co = new  b2d.Dynamics.Controllers.b2BuoyancyController
    o = {  nX:g.f,  nY:g.s,   lD:g.t,   aD:g[3]  }
    o.nX = N(o.nX,  0) //normX
    o.nY = N(o.nY, -1) //normY
    o.lD = N(o.lD,  2) //linDrag?
    o.aD = N(o.aD,  1) //angDrag?
    //Offset,Density,'Clear'
    co.no(o.nX, o.nY).drag(o.lD, o.aD) //dg? //wait drag or damp???
    this.co( co )
    return co
}
bCo.no =   function (x, y) {
    this.normal.Set(x, y); return this
}
bCo.os = function (os) {
    this.offset = os; return this
}
bCo.lD =   function (lD) {this.linearDrag= N(lD,0); return this}
bCo.aD =   function (aD) {

    this.angularDrag = N(aD,0)
    return this
}
bCo.dg= bCo.drag = function (lD, aD) { return this.lD(lD).aD(aD) }
bCo.d =  bCo.den = function () {var  g = G(arguments)
    this.density = g.f
    if (!g.n) { this.useDensity = true }
    return this
}
bCo.uD=   function (u) {
    this.useDensity = u;
    return this
}
b.cx=function(fn){var b=this,
    c,next, n,ent,cx


    if(U(fn)){
        return b.GetContactList()
    }

    cx = b.cx()
    if(!cx){$l('!'); return}
    n=0

    cx = cx.contact

    while(cx){
        next = cx.GetNext()
        fn = _.b(fn, b)
        ent = b.of(  cx.a()  )?  cx.B():  cx.A()
        fn( ent, cx, n++ )
        cx = next
    }
}
b.nCx=function (){

    var n=0,
        cx=this.cx()

    if(!cx){return n}

    n++

    while(cx.next ){

        n++

        cx= cx.next

    }

    return n
}
b.cxs= function (fn){var cx = this.cx(), CXS = []
    if(!cx){return CXS}
    CXS.push(cx.contact)
    while(cx.next){
        cx=cx.next
        CXS.push(cx.contact)
    }
    if(fn){_.e(CXS, function(cx){fn(cx)}); return this}
    return CXS
}
b.bc=  function (fn) {var b=this, g=G(arguments),

    origE, e, nextE

    if (g.n){fn = function(b){b.kill()}}

    origE = b.co()
    if (!origE) {return b}
    e = origE.nextBody
    while (e) {
        nextE = e.nextBody
        fn(e.body)
        e = nextE }
    e = origE.prevBody
    while (e) {
        nextE = e.prevBody
        fn(e.body)
        e = nextE }
    return b


}
b.al=function(al){

    al = N(al,.8)


    this.f().sprites[0].al(al)

    return this
}
b.end=function(){var b=this, w= b.W(), g=G(arguments), o

    o = F(g.s)? {k:g.f, fn:g.s} : {fn:g.f}

    if(o.k){

        w.end(b,  o.k, o.fn)
    }

    else { w.end(b, o.fn)  }


    return this

}
//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
//gives u a controller-edge, which is a body-controller pair
//it is linked both to other bodies for that controller..
//and to other controllers of that body!!!
//lets focus on other bodies first....
cx.bCo =  function (k) {
    var cx = this,g=G(arguments), f
    //if any fixt collides with a certain kind
    //switch to the controller with that name
    g.e( function (k) {
        cx.w(k,  function(){   this.to(window[k])  })} )
}
w.bindCo=function(){var g=G(arguments)
    return this.b(function(cx){
        cx.bCo.apply(cx, g)
    })
}
//// bindCo ******* was //w.bCo= (now that is bu controller)
