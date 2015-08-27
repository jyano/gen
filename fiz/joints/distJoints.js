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

b.ch=function(n){
    if(this.gx){
        return this.gx.children[N(n,0)]
    }
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



//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}
//marionette game?
