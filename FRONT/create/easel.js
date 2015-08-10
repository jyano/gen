T = function(times,func){

    var timeout


    if(N(times)){

        return _.t(times, function(i){
            func(i+1)
        })

    }

    if(F(times)){
        timeout=N(func)?func:100
        func=times
    }

    return setTimeout(func,timeout)

}
//$.evx=function(a){return a}
$.space = function (fn){return $.kD('space',fn)}
timeout()
both()
utils()
grx()
obStuff()
$.update=function(curr, update, g){var res
    if(g.p){res = curr + update}
    else if(g.n){res = curr - update}
    else if(g.m){res = curr * update}
    else if(g.d){res = curr / update}
    else res = update
    return res}
utils2()
yan()
K=  function(k,fn) {var g = G(arguments), o,key
    if(g.u){
        if (K._loaded) {return}
        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
            K.l = 1;
            K.L = 0})
        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = false
            K.l = 0;
            K.L = 1
        })
        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            K.r = cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
            K.r = 1;
            K.R = 0
        })
        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
            K.r = 0;
            K.R = 1
        })
        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
            K.u = 1;
            K.U = 0
        })

        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
            K.u = 0;
            K.U = 1
        })
        $.kD('d', function () {
            if ($.test) {$l('down pressed')}
            cjs.Keys.d = cjs.Keys.down = true
            K.d = 1;
            K.D = 0
        })

        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
            K.d = 0;
            K.D = 1
        })

        K._loaded = 1

        return
    }
    if(O(k)){
        if(g.p){
            if(F(k.u)){z(function(){if(K.u){k.u(K.u)}})}
            if(F(k.d)){z(function(){if(K.d){k.d(K.d)}})}
            if(F(k.l)){z(function(){if(K.l){k.l(K.l)}})}
            if(F(k.r)){z(function(){if(K.r){k.r(K.r)}})}}
        else {_.e(k, function(fn,k){K(k,fn)})}
        return}
    o = s$(k).isUpper()?  {on:'keyup', k:k.toLowerCase()}:  {on:'keydown', k:k}
    if(g.p){   return z(function(){if(K[k]){ fn( )  }})}
    key=Key(o.k)
    return $('body').on( o.on , function(e){    if( e.which==key ){  fn(e) }    })
    function Key(k){var ob={u:38,d:40,l:37,r:39,s:32,e:13}; return ob[k]? ob[k]: k}}
Graphics.fromSource = crs=function(a){
    //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
    return a.split('/').pop().split('.png')[0] }
cjs.src = Graphics.toSource = src=function f(e){
    var _src=function(a){ a = $.extension(a)

        return s$(a).startsWith('/')? a : '/'+ a }
    //if(Q(e)){$l('q');e=$(e)[0]}
    if( e.image ){ e=e.image}
    if( C(e) ){ e = C(e) }
    if( e.src ){ e = e.src}
    if( e.toDataURL ){  e=tDU(e) }
    return s$(e).contains('data:')?  e
        :  S(e) ?  _src(e)
        : 0}
Graphics.isDataURL=function(d){
    if(U(d)){return false}
    return s$(d).contains('data:')
}
bad=function(){

    //xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}
//tf=function(){n=1;t=true;T(function(){t=false},1000);I(function(){if(t==true){co();n=n+1}else{$l(n)}},1)}


    $.inASec=function(func){return setTimeout(func, 1000)}
    cjs.waitFor=function(time){time=N(time)?time:1000
        cjs.wait = true
        setTimeout(function(){cjs.wait = false}, time)}
    Qx=function Q(a){
        if(!O(a)){return}
        if(s$(a.toString()).contains('Window')||a[0]
            && s$( a[0].toString()).contains('Window')){
            return $(window)}
        return a.name === 'q'? Q(a.q)
            :E(a)? $(E(a))
            :0

    }





//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//Object.prototype.__C = function(){ return this.constructor.name }

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////////////////////////////





    gT = withGetTest = function(url){
        $.get('/'+url, function(aa){a=aa})
    }


    vkl=function(a){
        return new Function("v","k","l","l[k]=" + a)
    }
    $.sec=function(f){return setTimeout(f,1000)}
    oO.V = values=function(a){if(S(a)){ a=oO(a) };return _.values(a)}

    scaleXandYBy = scl=function(v,a){
        v.x*=a;
        v.y*=a;
        return v
    }

//??? sub=function(a,b){return a.o('s',b)}


    _lX=function(a,b){

        if(F(b)){$(a).load(b);return a}
        return _.l(a,b)

    }
    _mX = function (a, b, c) {
        return F(b) ? _.m(a, b, c)
            : A(a) ? _.min(a) : function (z) {
            return z * a
        }}

    _hX=function _h(a,b,c){
        if(O(b)){return _h(b.toString(), a)}
        if(S(a)){ return s$(a).contains(b,c)}
        if(O(a)){
            if(U(b)){
                return a.height?(F(a.height)?a.height():a.height):F(a.h)?a.h():N(a.h)?a.h:false}
            if(N(b)){
                if(F(a.height)){a.height(b);return a}
                if(N(a.height)){a.height=b;return a}
                if(F(a.h)){a.h(b);return a}
                if(N(a.h)){a.h=b;return a}}
            return A(a)? _.contains(a,b): _.has(a,b)}
        if(U(a)){

            return qq($('html'))

        }
    }





    _IX=function(a,b){return U(a)?new Image()
        : U(b)? _.invert(a)
        : _a(_.intersection, arguments)

    }


    IX=function(a,b){if(N(b)){return setInterval(_v(a),b)}
        if(_h('Image', E(a))){return E(a)}}

    _wX=function(a,b){
        if(O(a)){
            var w=function(a,b){if(_.isUndefined(b)){return a.width}
                a.width=b;return a}
            if(U(b)){return F(w(a))?a.width():w(a)?w(a):F(a.w)?a.w():a.w}
            if(F(w(a))){a.width(b)}
            else if(w(a)){w(a,b)}
            else if(F(a.w)){a.w(b)}
            else {a.w=b}

            return a}}




//fCC=function(a){ return String.fromCharCode(a) }




//qx = function(a){return xx(qi(a))}


//ddd=function(){return (d=_d().c('y').Z().a())}
//ccc=function(){return (c=$b($c()).drg())}

//test functions
//fA=function(a){return function(){alert(a)}}
//fL=function(a){return function(){$l(a)}}
//a3=function(){alert(3)}
//a4=function(){alert(4)}
//al=function(a){a=a||':)';alert(a);return a}

    H=function(a){
        var oH=function(a){
            if(O(a=a||$(window))){return Q(a).outerHeight()}}
        a=a||$(window);return N(a)? W()/a:oH(Q(a))}

//logic
    df=function(a,b){
        a=ob(a)
        return G(arguments).p? D(a, oO(b||''+'D'))
            :D(a)?a :b}



//cL=function(a){console.log(a);return a}

    ll=function(a,b){
        if(S(b)){console.log(a+': '+b)}
        else {
            $l(a+' ->')
            $l(b)}
        return b}
    _iX=function(a,b){

        return U(a)? qq('i'):

            A(a)? _.i(a,b): pI(a)
    }


    //is=function(a){return function(b){return b===a}}
//_.io$=function(a,b,c){return a.indexOf(b,(c<0?c+_z(a):c))}



//_j=function(a,b){return(a||[]).join(b||' ')}
//K=function(a,b,c){return N(a)? I(b, a*1000): N(b)? I(a, b): _.keys(a)}


//graphics
    onReady =_k = function(a){return O(a) && a.complete}



    obX=function(o){ // ************
        var g=G(arguments);
        return !O(o)? {}
            :g.p? o.clone()
            :o}



    _s=function s(a,b,c){

        var g=G(arguments)

        if(D(g[1])){a[b]=c;return a}

        if(U(a)){return qq('s')}

        return src(a)
    }



    iW = function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
    iH = function(a){if(O(a=a||$$w)){return Q(a).innerHeight()}}


    $t = function(a, b){if(b2d.test){
        var g=G(arguments),
            a=g[0],
            b=g[1],str




        if(D(b)){

            str='||'
            _.e(g, function(s){
                str+=  ' '  + s.toString() + ' |'
            })

            str += '|'
        }

        else {
            str = a.toString()
        }


        $l(str)



    }; return a}



    Wx=function(a){var g=G(arguments)
        var oW=function(a){if(_.isObject(a=a||$(window))){
            return Q(a).outerWidth()}}
        a=a||$(window);
        return N(a)?W()/a:oW(Q(a))
    }


//just returns toDataUrl() on an object, safe
    tU=function(a){
        if(
            O(a) && F(a.toDataURL) ){
            return a.toDataURL() }


//tU=function(s){return  S(s)?sJ:tU(s)? tU(s)
// :s.u? s.u():iI(s)? s.src
// : s.image?s.image.src:0} //s/c/C/i/b->s sync
    }

    tDU=function(a){return a.toDataURL()}


    _W=function(a,b){

        if(U(b)){return a.which}
        return a.which==b
    } //_.without



    RX=function(a,b){

        var g=G(arguments)

        return( S(a) && S(b) )? (
            g.N? s$(a).ensureRight(b).s

                : s$(a).chompRight(b).s    )

            : N(b)? _.range(a, b)

            : N(a)? (g.P? _.range(a):  _.range(1,(a||10)+1)   )

            : new XMLHttpRequest()

    }
    _S = function (a, b) {
        return b ? String(a).split(b) : a.toString()
    }
    _r = function r(a, b, c, d) {

        return U(a) ? rnd()
            : (F(b) && D(c)) ? _.reduce(a, b, c)
            : (F(a) && D(c)) ? _.reduceRight(a, c, b)
            : (F(a) || F(b)) ? r(c, a, b)
            : N(a) ? _.random(a, b, c)
            : S(a) ? a.replace(b || '#', c || '')
            : _.rest(a, b)
    }
    ok = function (a) {
        return a || 'ok'
    }

    _P=function(a,b,c){
        return  S(a)?JSON.parse(a,b)
            :$(a).prepend(b,c)}

    P=function(a){
        return O(a)&&!F(a)&&!A(a)&&!(E(a))}


    _p=function(a,b,c){

        if(U(a)){return qq('p')}

        return(c===0)?function(c,d){  return a(c,b,d)}
            :F(a)? _a(_.partial, arguments)

            :O(a)?(G(arguments).N?$(a).parents(f)

            :$(a).parent(f))

            :S(b)?(S(a,b)?a:b+a)

            :nN(a)?a+'px'

            :a
    }









    _b=function(a,b,c){
        return U(a)? qq($('body'))//--
            :F(a)?_.b(a,b,c)//
            :S(a)?   a.split(b||'.')[0] //before('.')
            :_.bindAll(a,b,c)//
    }



    _e=function e(p,q,w){
        var eW=function (a,b){return l$(a,_z(b))==b}

        if(U(p)){return qq('li')}
        if(U(q)){return p.empty()}
        if(F(p)){p=O(p)}
        return (S(p) && S(q))? eW(p,q)
            :S(q)? e(p,function(v,k){eval(q)}, w)
            :_.e(p,q,w)
    }

    _F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }
    _f = function (a, b, c) {

        return U(a) ? qq('f') // need to deprecate this

            : F(b) ? _.find(a, b, c)

            : _.f(a, b)

    }


    _g = function (a) {
        if (_.isArray(a)) {
            a = _.f(a)
        }
        return F(a) ? a
            : O(a) ? (a.target ? a.target : Q(a)[0])
            : a
    }


    _C = function (a, b) {
        return U(a) ? _c()[0]
            : A(a) ? _.compact(a)//dep
            : a.connect(b)
    }


    _c = function (a, b) {

        if (N(a)) {
            clearInterval(a)
        }
        return U(a) ? qq('c').k('can')
            .at({w: 100, h: 100})
            : b ? (A(a) ? a : [a]).concat(b)
            : O(a) ? a.children()
            : 0
    }

    _t = function me(a, b, c) {
        return U(a) ? qq('t')
            : N(a) ? _.t(a, _v(b), c)
            : D(b) ? $(a).text(b)
            : S(a) ? me(_b(), a)
            : $(a).text()
    }

    tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }


}
function both() {
    _.slash = _.ensureSlash = function (str) {

        var hasSlash = str[0] == '/'

        return hasSlash ? str : '/' + str
    }
    String.prototype.ensureSlash = function () {
        var hasSlash = this[0] = '/'
        return hasSlash ? this : '/' + this
    }
    AA = function (a) {
        return A(a) && A(a[0])
    }
}
function grx(){
    Graphics = window['Graphics'] || {}
    Graphics.getCanvas = C=function(a){

        if(_.isObject(a= E(a)||a)){
            return a.canvas? a.canvas  :

                s$(a.toString() ).contains('Canvas')

                    ? Q(a)[0]:0}
    }
}
function obStuff() {
    oOo = function oOo(a, b) {
        if (_.isUndefined(b)) {
            return _I(lC(V(oO(a))))
        }
        if (oOo(a)[lC(b)]) {
            return b
        }
    }
    Oo = _.defaults(function o(a, b) {
        if (D(b)) {
            return o[a] && ( o[a][b] || oOo(a, b))
        }
    }, ooo)
    oO = _.defaults(function oO(a, b, c) {
        return _.isUndefined(a) ? _.keys(f)
            : '*' == b ? $r(a)
            : D(c) ? oO(oO(c, a), b)
            : _.isUndefined(b) ? D(function (x, y) {
            return oO(a, x, y)
        }, oO[a] || {})
            : (oO[a] && oO[a][b]) ?
            oO[a][b]
            : b
    }, ooo)
    oC = function (c) {
        return oO('c', c)
    }
    oK = function (a) {
        return oO('k', a)
    }
    oT = function (a) {
        return oO('t', a)
    }
    oE = function (a) {
        return oO('e', a)
    }
    oI = function (a) {
        return oO('i', a)
    }
    oS = function (a) {
        return oO('s', a)
    }
    $o = function o(a, b, c) {
        return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
    }
    oQ = function (f, m) {
        $(function () {
            Q(m || mf, f)
        })
    }
}
function utils(){

    Utils = {}
    Utils.isNested = isArrayWhoseFirstObjIsAlsoAnArray =

        Utils.isDataUrl = Du=function(a){ return s$(a).contains('data:') }
    Utils.asElement = E=function E(a,b,c){
        if(S(b)){return  s$(a).endsWith(b)   }
        if(F(b)){return _.every(a,b,c) }
        if(O(a)){

            a = O(a.e)? a.e
                :O(a.c)? a.c
                :a

            a=$(a)[0]

            if ( _.isElement(a) ){return a}

        }}
    Utils.apply =_a=function(a,b,c,d,e){//_.isUndefined(a)? qq('a')
        return  F(a)? a.apply(c||a, b)
            :S(a)? a.split(b||'/').pop()// after('/')

            :0//:a.animate(b,c,d,e)//
    }
    Utils.URL =_u=function(a){

        url = function(a){ return 'url("' +a+ '")' }

        return url(a)
        //return _.isUndefined(a)? qq('ul'): url(a)

    }
    Utils.func =_v=function(a){
        return S(a)?
            function(){Function(a)()}
            :F(a)?a:F(a.value)?a.value():a.value}
    Utils.extension = $.extension=_x=function(a, b){
        //if(_.isString(a)){
        return  s$(a).contains('.')  ? a:  s$(a).ensureRight(b||'.png').s
        //}
    }

}
function timeout() {
    $.in = function () {
        var g = G(arguments), o, n = 1,
            ret

        if (N(g[0])) {
            o = {s: g[0], fn: _.r(g)}
        }

        else {
            o = {s: 1, fn: g}
        }
        _.e(o.fn, function (fn) {
            var s = o.s * n
            ret = setTimeout(_v(fn), s * 1000)
            n++
        })
        return ret
    }

    $.T = function (a, b) {
        return setTimeout(_v(a), b)
    }
}
function utils2(){

    Utils.chompRight = chompRight=function(a,b){return s$(a).chompRight(b).s }
    Utils.ensureRight = ensureRight=function(a,b){return

        s$(a).ensureRight(b).s}
    Range=function(a,b){var g = G(arguments)

        return N(b)? _.range(a, b)

            : g.P? _.range(a)

            :  _.range(1, (a||10) + 1 )

    }
//should be dep? 'fsa'.toUpperCase()
    Utils.toUpperCase = toUpperCase=uC=function(a){
        return S(a)? a.toUpperCase()
            :A(a)? _.map(a,function(a){return uC(a)}):a
    }
    Utils.isUpper = isUpper=Uc=function(a){
        if(S(a)){ //for safety?
            return s$(a).isUpper()
        }}

    lC=function(a){return S(a)? a.toLowerCase()
        :A(a)? _.m(a,function(a){return lC(a)}):a }
    Lc=function(a){if(S(a)){return s$(a).isLower()}}
    _.props = Utils.props =$p=function p(i,t,kK,vf,f){
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
        if(O(kK)){
            _.each(kK,function(v,k){
                p(i,t,k,v,vf)})}                   //setOb

        if(U(kK)){return _p(p,i,t)}
        if(vf=="*"){return p(i,t,kK, $r(kK))} // set it randomly?!
        else if(U(vf)){return t[oO(i,kK)]}   //get
        else{f=f||_s  //function(t,k,v){t[k]=v}  //set
            f(t, oO(i,kK), oO(kK, vf, 'R'))}
        return t}
    _.methods = Utils.methods = $m=function f(i,x,m,g){ //=met
        if(U(i)){return}
        if(U(x)){return _p(f,i)}
        if(U(m)){return _p(f,i,x)}// if(U(g)){return _p(f,i,x,m)}
        if(!A(g)){return _a(f,[i,x,m,_r(arguments, 3)])}//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
        return _a( x[oO(i,m)], g, x) || x}
    nN=function(w){return Boolean(Number(w))}//M=
    Nn = _.isNan
    J=function(a,b,c){
        if(S(a)){return $.getJSON(a,b,c)};
        return JSON.stringify(a)
    }
    isWindow = function(a){if(O(a)){
        if( s$(a).contains('Window') ||
            s$(a[0]).contains('Window')){
            return window}
    }
    }
    z=   function(fn) {var g = G(arguments)
        if (g.F_) { return T.t(fn)}
        $('body').empty()
    }
    $w=window
    $$w=$(window)
    R=function(n,n2){var num
        n=N(n)?n:1
        n2=N(n2)?n2:0
        return M.round((M.random()*n)+n2)
    }
    $.tap=function(func){this('body').on('keydown mousedown', func); return this}
    _z=function z(a,b,c){return U(b)?_.size(a)
        :N(b)?_z(a)==b
        :_z(a)==_z(b)}
}
function yan(){
    Yano.func = function(){$('body').C('*')}
    Yano.interval = 1000
    Yano.intervalID = null
//when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on
    Yano.toggleFunc = function self(func, interval){
        var args = G(arguments),
            func = args[0],
            interval = args[1]


        if(Yano.intervalID){if(args.P){
            clearInterval(Yano.intervalID)
            Yano.intervalID=null
        }}
        else{
            if(args.N){
                Yano.intervalID = setInterval(Yano.func, Yano.interval)
            }}
    } //rat
    Yano.setToggleFunc = function (func, interval){
        if(func){Yano.intervalFunc = func}
        if(interval){Yano.interval =  interval}
        Yano.setIntervalID = setInterval(Yano.intervalFunc,  Yano.interval)
        return Yano.toggleFunc
    }
//random
    Yano.random = Yano.rand = $r = function(a,b){
        a = a||'c'; //cannot be 'color' ?? only abr??
        var values = _.values(oO(a))
        return Oo(a,b) || values[_.random(_.size(values)-1)]
    }

}
