$a=function(ob,met,arr){var g=G(arguments)
    if(g.t){
        return g.f[g.s].apply(g.f,g.t)}
    return g.f.apply(null,g.s)
}
_.mo=function(n,fn){
    return N(n)?
        _.throttle(fn, n*1000): _.throttle(n, 1000)
}//$.mo
_.df= _.defaults

G=function(arg, str){var a,ag= _.tA(arguments), p, n, m, d,g

    //conflict with N(not neg) and N(g.$ && N(g.f) )

    if(S(ag[0])){
        a=_.tA(ag[1])
        if(S(a[0])){
            a[ag[0]]=a.shift()}}
    else{a=_.tA(ag[0])}
    if(_.l(a)=='+'){p= a.pop()}

    else if(_.l(a)=='-'){

        n=a.pop()}

    else if(_.l(a)=='*'){m=a.pop()}
    else if(_.l(a)=='/'){d=a.pop()}
    if(S(ag[1])&&S(_.l(a))){a[ag[1]]=a.pop()}

    g =  _.df(a, {
        z: a.length,
        f: _.f(a),
        s: a[1],
        t: a[2],
        l: _.l(a),
        r: _.r(a), i: _.i(a),
        p:p, P:!p, m:m, M:!m,
        d:d, D:!d, n:n, N:!n

    })



    g.u=U(g.f);g.U=!g.u

    g.L=g.length

    str=''
    _.t(g.L,function(){str=str+'$'})
    g[str]=1


    //g.N= g.$ && N(g.f);

    g.N = g.$ && N(g.f)
    g.N_ =N(g.f);

    g._N =N(g.l)

    g.$N= N(g.f)

    g.$_N= N(g.s)

    g.S = g.$ && S(g.f)
    g._S = S(g.l)
    g.$S=  g.S_ = S(g.f)

    g.$_S= S(g.s)



    g.O = g.$ && O(g.f)

    g.O_ = O(g.f)

    g._O = O(g.l)







    g.A=g.$ && A(g.f);g.A_=A(g.f);g._A=A(g.l)
    g.F=g.$ && F(g.f);g.F_=F(g.f);g._F=F(g.l)

    g.SA=  g.$$ && g.S_ && A(g.s)
    g.OO_ = O(g.f) && O(g.s)



    g.e=function(fn,str){var g=this
        if(str){
            g.e(function(g){fn[str](g)})
            return fn}

        _.e(g,fn)
        return g
    }
    g.e0=function(fn){_.e(this[0], fn)}
    g.e1=function(fn){_.e(this[1], fn)}
    g.eR=function(fn){_.eR(this, fn)}
    g.eS=function(fn){
        this.e(function(k) {
            if (S(k)){fn(k)}})}

    g.G=function(a){
        a=_.clone(a)
        if(g.n){a.push('-')}
        else if(g.p) {a.push('+')}
        else if(g.d) {a.push('/')}
        else if(g.m) {a.push('*')}
        return a}

    g.g = g.G( g )

    g.a=g.ap=function(){var g=this, gg=G(arguments)

        //if(g.A){

        return gg.s?
            $a(gg.s, gg.t, g.f):
            $a(gg.f, g.f)
    }

    g.ush=function(d){var g=this,
        res
        if(U(d)){d=null}
        g.t=g.s
        g.s=g.f
        g.f=d
        res=g.unshift(d)
        return res}
    return _g=g

}





_G=function(){

    g=G(arguments)



    $l(g.L + ' args')




}




s$=S
_.left = function(a,b){ //L=
    var g=G(arguments)
    return S(b)? (g.N?  s$(a).ensureLeft(b).s
        :s$(a).chompLeft(b).s):0
}
//its just this: s$=S!

M=Math

M.c=M.cos
M.s=M.sin
M.a = M.abs
_.gS = function (pop) {
    var g = G(arguments), that = this
    return function (val) {
        if (U(val)) {return this[pop]}
        this[pop] = val
        return this
    }
}

M.tD = function (n) {
    return M.toDegrees(n)
}
M.average =  function self(a){
    var g=G(arguments),
        z= _.size(g),  n=0;

    if(A(a)){
        return _a(self,a)}

    _.e(g,function(a){n+=a})

    return n/z}
M.distance=function self(a,b){


    M.xyz=function(a,b){

        a=a||{};a.x= a.x||0; a.y= a.y||0;a.z= a.z||0
        b=b||{}; b.x= b.x||0; b.y= b.y||0; b.z= a.z||0
        return  sqr(   a.x-b.x,  a.y-b.y,  a.z-b.z  )

        function sqr(a,b){var g=G(arguments)
            return M.sqrt(U(b)? a
                :sq.apply(this, g))}
        function sq(a){var g=G(arguments),  n=0
            g.e(function(a){n+=(a*a)})
            return n}}

    if(A(a) && U(b)){  return self(a[0], a[1]) }
    if(U(b)){return M.xyz( M.V({}), M.V(a)   )  }

    return M.xyz( M.V(a), M.V(b)   )



}
M.toDegrees= function(r){return r * (180/M.PI)}
M.tR =M.toRadians = M.toRads =function(degs){
    if(O(degs)){degs= degs.rotation}
    return  degs * Math.PI/180
}


M.lD=M.dist = M.lineDistance= function( p1, p2 ){
    var xs = 0,ys = 0;

    p1=V(p1)
    p2=V(p2)
    xs = p2.x - p1.x;
    xs = xs * xs;

    ys = p2.y - p1.y;
    ys = ys * ys;

    return M.sqrt( xs + ys );
}

M.lC= M.lineCenter=function(x1,y1,x2,y2) {

    if (A(x1)) {

        if(N(x1[3])){return center(  x1[0],x1[2],x1[2],x1[3]    )}
        return center(x1[0],x1[1],y1[0],y1[1])}

    if(O(x1)){return center(x1.x, x1.y, y1.x,y1.y)}

    return center(x1,y1,x2,y2)

    function center(x1,y1,x2,y2){var x,y

        if(x1 > x2){upperX = x1; lowerX = x2}
        else {upperX= x2; lowerX=x1}

        if(y1 > y2){upperY = y1; lowerY = y2}
        else {upperY= y2; lowerY=y1}

        x= lowerX + (upperX-lowerX)/2
        y = lowerY + (upperY-lowerY)/2

        return V(x,y)
    }
}
M.pointInCircle=function(x,y,circle){
    var withinX, withinY
    withinX = x < circle.x + circle.radius && x > circle.x -circle.radius
    withinY = y< circle.y+circle.radius  &&y >circle.y-circle.radius
    return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pointInRect=M.pointInRectangle=function(x,y,rect){var withinX, withinY

    var halfwidth = (rect.width || rect.w)/2
    var halfheight = (rect.height || rect.h)/2

    //assumes center

    withinX = x < rect.x + halfwidth && x > rect.x -  halfwidth

    withinY = y < rect.y +  halfheight  &&y > rect.y -  halfheight

    return withinX && withinY

}
M.circlesOverlap=function(c1, c2){

    var sum, dist, rads

    sum = sqr( c1.x - c2.x  ) +   sqr( c1.y - c2.y  )

    dist = sqrt(sum)

    rads = c1.r + c2.r

    return rads < dist
}
M.warp = function(lowBound,highBound,cushion){//wrp=
    cushion=cushion||0

    return function(num){
        return num<lowBound?highBound-cushion
            :num>highBound?lowBound+cushion
            :num
    }
}



    A = _.isArray
    B = _.isBoolean
    D=function(a,b,c){
        return _.isUndefined(b)? !_.isUndefined(a)
            : _.defaults.apply(_.defaults, arguments)}
    F=function f(a,b,c){
        //if(_.isDefined(b)){return _.filter(a,b,c)}
        return _.isFunction(a)  // return a.prototype||true

    }
    N=function(n,n2){

        if(U(n2)){return  _.isNumber(n)}

        return _.tN(n,n2)
    }
    S=function(a,b,c){

        return U(b)?
            _.isString(a)

            :N(b)? a.substr(b,c)
            :S(b)? s$(a).startsWith(b)
            :_.some(a, b||F,c)
    }
    U = function u(a,b){

        if ( _.isUndefined(b) ) {return _.isUndefined(a)}

        // return  _.extend.apply(_.extend, arguments)
    }
    O=function(a,b){
        if(U(b)){return _.isObject(a)}
        if(_.isObject(a)){
            // return  _.extend.apply(_.extend, arguments)

        }
    }



I=function(f, i){var g=G(arguments), clear



    if(F(g[0])){
        f=g[0];
        i=g[1]}

    else { f=g[1]; i=g[0]}

    i= !N(i)? 1000 : i>5? i : i * 1000




    if(g.N){f()}

    clear = setInterval(f,i)

    return function(){clearInterval(clear)}

}
_.l= _.last
_.f= _.first
_.i = _.initial
_.r = _.rest
_.e = _.each
_.m= _.map
_.t=_.times
_.b= _.bind
_.tN=function(what, aNum){return N(what)? what: aNum||0  }
_.tI=function(a,b){return parseInt(_.tN(a,b))}
_.c=function(c,orC){if(c=='*'){c=$r()}
    return oO('c',c||orC)}
_.x=_.extend
_.th=_.throttle
_.db=_.debounce
_.ev==function(n, fn){setInterval(fn, n*1000)}
_.eR=function(g,fn){_.e(_.r(g),fn)}
_.fW=_.findWhere
_.wh=_.where
_.rj=_.reject

_.tA= _.toArray
M.fl = M.floor
M.sqr=function(a){return a*a}


$$$ = function(a){$(_v(a))}
$J=JSON
$A=Array
$B=Boolean
$N=Number
$O=Object
$F=Function
$S=String


$l=function(a){var g=G(arguments),v

    if(O(a) && N(a.x) && N(a.y) ){


        v=a.toFixed()


        $l(v.x + ' , ' + v.y)

        return a}



    _.each(g,function(a){

        console.log(
            _.isFunction(a)? a.toString()
                :O(a)? J(a)
                :a
        )

    })

    return a}


_.pt=function(o){
    return O(o)? o.prototype: '!'
}
