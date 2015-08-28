dirs=[


    '/front/front', '/front/can', '/front/create', '/front/anim',

    'play/graphics',
    'fiz',    'fiz/deps',  'fiz/joints',
    'play', 'games','apps'
]


console.log('w'); both(); function both(){
    _ = require('./us')
    F = _.isFunction
    S = _.isString
    U = _.isUndefined
    D = function(a,b){return !U(a)}
    A = _.isArray
    O = _.isObject
    G = function(a){
        if(!_.isArguments(a)){return}
        var p, n, m,d
        a=_.toArray(a)

        if(_.last(a)==='+'){p=a.pop()}
        if(_.last(a)==='-'){n=a.pop()}
        if(_.last(a)==='*'){m=a.pop()}
        if(_.last(a)==='/'){d=a.pop()}

        return D(a,{
            z: a.length,
            f: _.first(a),l: _.last(a),
            r: _.rest(a),i: _.initial(a),
            p:p,
            P:!p,m:m,M:!m,d:d,D:!d,n:n,N:!n

        })
    }
    $l = function(a,b){


        if(b){
            console.log('{'+a+':'+b+'}')
            return b
        }

        console.log(a)
        return a
    }
    $d = function(a,b){cD=function(a){console.dir(a);return a}
        if(!b){return cD(a)} cL(a);return cD(b)}
    _.e= _.each
}
$e=require('express'); $a = $e(); $a.u= $a.use; $a.g=$a.get
_.e({port: process.env.PORT||4000, 'view engine' :'jade',
        views: __dirname + '/play/'},
    function(v,k){$a.set(k,v)})






$a.g('/play/:a/:p?', function(q,p){
    p.render('play',{app:q.params.a,pam:q.params.p})})
$a.use( $a.router )

_.e(dirs, function(dir){
    dir= __dirname +'/'+ dir
    $a.use($e.static(dir))
})



require('http').createServer($a).listen(80, function(){
    $l('game server listening on port 80')
})

