b2d.p()


b.net=function(K){
    //when a web is created it gets web.connected=false
    //when it hits certain things and forms a joint, then connected->true
    //then it just dies
    //pressing DOWN should release the most recent of the connectedWebs
    //note: non connected Webs can be shot off!
    var p=this,b=this,w=b.W(),
        y=b.Y()-100,
        x=b.X(),
        piece, web
    b.webs = b.webs||[]
    web = w.net(b,K)
    b2=web.Piece(x,y)
    w.dJ(b,b2,1,1000,1000)
    web.pieces.push(b2)
    piece = b2
    //add first piece to player
    _.t(9, function(i){
        piece = piece.add( web.Piece(x,y-i) )
    })  //add rest to each other
    web.ball = w.cir(x, y-100, 10, 'd').K('webBall').den(1).rest(0).fric(100)
    piece.add( web.ball )
    b.webs.push(web)
    return web
}

w.net=function(b, K){var w=this,web//K=shouldKill

    web={player: b, connected: false, cn:0, pieces:[]}


    web.Piece= function(x,y){var web=this,b

        b=w.D(x,y,'w',3,5).bo(0).aD(10).K('webPiece')

        b.add=function(b2){var b=this
            w.dJ(b,b2,1,1000,1000)
            web.pieces.push(b2)
            return b2}
        return b}

    web.die= function(){
        var web=this,
            p=web.player
        _.e(web.pieces,function(i){i.kill()})
        web.pieces=[]
        p.webs=_.reject(p.webs, function(w){return web===w})}

    web.attach= function(b){var web=this
        web.cn = web.connected = true
        w.dJ(web.ball,b,1,1000,1000)
        return web
    }


    if(K){
        setTimeout(function(){if(!web.cn){web.die()}},_.tN(K,1000))}
    return web

}



b.iCn=b.isConnected=function(){var res, b=this
    return A(b.webs) &&
        _.findWhere(b.webs, {connected:true} )

}


NETGUY = function(){W({ g:30 ,w:'_'}).C('r'); blocks=function() {

    w.goal(1800, 0)
    block(400, 100)
    block(800, 0)
    block(1100, -50)
    block(1300, -200)
    function block(x, y) {
        return  w.S(x, y,'t', 50, 50).K('randomRect')
    }

};blocks()

    sw = cjs.stopWatch()
    wM = p=b=w.me(4).XY(394,530).fixRot().rest(0).den(.14).fric(1).K('player')
    wM.canWeb = true
    //this is tracking !!
    w.s.tickX(function(){return 600- p.X()}); w.s.tickY(function(){return 510- p.Y()})
    w.beg(function(cx) {
        var wb
        cx.w('webBall', 'randomRect', function(rc){
            wb = _.findWhere(p.webs, {ball: this.B()})
            if(wb && !wb.connected){wb.attach(rc.B())}
        })
    })

    $.key({

        r:function(){var K=cjs.Keys
            if(K.d){p.didShoot = true; if(!F(p.shotClock)){ p.shotClock=cjs.stopWatch() };return }
            if  (p.isConnected())  {p.F(100,0)}  else  {p.I(8,0)}},

        l:function(){var K=cjs.Keys
            if(K.d){p.didShoot = true; if(!F(p.shotClock)) {p.shotClock=cjs.stopWatch()}}
            if  (p.isConnected())  {p.F(-250,-50) }  else  {p.I(-8,0)}},

        R:function(){var K=cjs.Keys; p.webs= p.webs||[]
            if(p.webs[1]){p.webs[1].die()};
            if(K.d){p.shootRight()}},

        L:function(){var K=cjs.Keys;  p.webs= p.webs||[]
            if(p.webs[1]){p.webs[1].die()}; if(K.d){p.shootLeft()}},

        D:function(){
            if(!p.didShoot && p.webs[0]){_.f(p.webs).die()}
            p.didShoot=false},

        U: function(){
            var cn= _.reject(p.webs,function(w){return !w.connected})||[]
            if(cn[0] && cn[1]){cn[0].die()}
            p.canWeb = true ; p.shotForce=0},

        u: function(){var K=cjs.Keys, web,ba,n
            if(p.isConnected() && !p.webs[1] && p.canWeb){

                n = Math.abs(p.lV().x*2)
                p.net(3000).ball
                    .XY(p.X(),p.Y()-100)
                    .I(K.r?n:K.l?-n:0,-30)}

            else if(!p.webs||!p.webs[0] &&  p.canWeb){
                p.net(3000).ball.XY(p.X(),p.Y()-100)
                    .I(K.l?[-30,-40]:K.r?[30,-40]:[0,-70])}

            p.canWeb=false
        }
    })
}

/////



webman=function(){
    w.Webman = w.wbMan = function (x, y, sc) {
        var w = this,
            p = w.me(N(x, 394), N(y, 530), N(sc, 4)).fR().r(0).d(.14).fr(1).K('wbMan')
        p.WEBS = []
        p.canW = 1
        return p
    }
    b.Web = function (K) {
        var b = this, w = b.W()
        return w.Web(this.X(), this.Y() - 100, this, K)
    }
    b.shR = function () {
        var f = this.sw('-')

        w.D(this.X() + 80, this.Y() - 20, 'w', 6).I(2 - f / 50, 0 - f / 40)
        return this
    }
    b.shL = function () {
        var f = this.sw('-')
        w.D(this.X() + 80, this.Y() - 20, 'w', 6).I(2 + f / 50, 0 + f / 40)
        return this
    }
    b.lWeb = function () {
        return _.l(_.where(this.WEBS || [], {cn: 1}))
    }
    b.iCn = b.fWeb = function () {
        return this.WEBS && _.fW(this.WEBS, {cn: 1})
    }
    b.unstick = function () {
        var web = _.l(this.WEBS || [])
        if (web) {
            web.kill()
        }
        //if(this.lWeb()){ this.lWeb().kill() }
        return this
    }
    b.Web = function () {
        var p = this, web

        web = {
            p: p,
            cn: 0,
            PIECES: [],
            to: function (link) {
                alert('to')
                w.dJ(this, link, 1, 500, 500);
                if (!G(arguments).n) {
                    this.PIECES.push(link)
                }
                ;
                return link
            },
            link: function (x, y, p) {
                var web = this, link
                link = Link(x, y) // the df link is yellow 4 by 5, yo.. says it right here.
                link.to = function (link) {
                    var j
                    j = w.dJ(this, link).l(25).fq(90).d(3.8)
                    return link
                }
                // / and i found the joint here //... the other important part of this equation.
                if (p) {
                    link.to(p)
                }
                return link
                function Link(x, y) {
                    var b = w.D(x, y, 't', 5)
                        .d(1.5).r(0).fr(0).fR().lD(1)
                    b.bit(0)
                    b.K('wbP')//.lD(2)
                    return b
                }
            },
            Ball: function (x, y) {
                var ball = w.D(x, y, 'd', 20, '-').r(0).K('wbB')
                ball.web = this
                return ball
            },
            stick: function (link) {
                this.cn = 1;
                w.dJ(this.ball, link, 10, 40, 0).l(20)
                return this
            },
            kill: function () {
                _.e(this.PIECES, function (piece) {
                    piece.kill()
                })
                this.PIECES = []
                p.WEBS = _.rj(p.WEBS,
                    function (web1) {
                        return web1 === web
                    })
            }
        }
        p.WEBS.push(web)
        return _web = web
    }
    b.shootWeb = function () {
        var g = G(arguments), p = this, link,
            web = p.Web(),
            x = p.X(),
            y = p.Y() - 120

        web.PIECES.push(link = web.link(x, y, p))

        _.t(12, function (i) {
            web.PIECES.push(
                link = link.to(
                    web.link(x, y)))
        })
        web.ball = link.to(web.Ball(link.X(), link.Y() - 220).d(.5))
        web.PIECES.push(web.ball)
        web.ball.SetBullet(true)
        return web.ball.d(.5).r(.2)

        //   _.in( N(p.expire, 2), function(){ if(!web.cn){ web.kill( )} })
    }
    WEBMAN = function () {
        W([1200, 1400], {g: 150, w: '_'}).C('z').s.C('z')

        block(400, 500);
        block(800, 400);
        block(1100, -505);
        block(1300, -400)

        function block(x, y) {
            return w.S(x, y, 't', 120, 120, 't').K('randomRect rr')
        }

        w.goal(1800, 0)
        sw = $sw()
        p = w.me(394, 530, 4).r(0).d(2).fr(1).K('wbMan')//.tr()
        p.WEBS = [];
        p.canW = 1;
        p.expire = 2
        p.d(.2)
        p.bit(0)
        //p.fixedRot(false)

        $.k({

            u: function () {
                p.unstick()
                // if(!p.iCn()){
                b = p.shootWeb()
                b.lD(0)
                if (K.r) {
                    b.lV(12000, -1000200)
                }
                else if (K.l) {
                    b.lV(-120000, -100200)
                }
                else {
                    b.lV(0, -14000)
                }
                //}
            },
            l: function () {
                p.I(-50, -30)
            },
            r: function () {
                p.I(50, -30)
            },
            d: function () {
                p.unstick()
            }
        })

        js = []
        w.b(function (cx) {
            cx.w('wbB', 'rr', function (rr) {
                var b = this.B(), rr = rr.B()
                web = _.fW(p.WEBS, {ball: b})
                // of all my WEBS, get me the web where the ball is the ball i just shot!
                if (web) {
                    web.stick(rr)
                }
            })
        })

        _.inx(1, function () {
            p.shootWeb()
        })

        //w.s.tickX(function(){return 600- p.X()});
        //w.s.tickY(function(){return 510- p.Y()})


        w.s.tickX(function () {
            return 600 - p.X()
        });
        w.s.tickY(function () {
            return 510 - p.Y()
        })


    }
    w.js = function (fn) {
        var js = this.GetJointList(),
            arr = []

        if (js) {
            arr.push(js)
        }
        while (js.GetNext()) {
            arr.push(js = js.GetNext())
        }

        if (fn) {
            _.e(arr, function (j) {
                fn(j)
            })
            return this
        }
        return arr
    }
    BEARD1 = function () {
        W().randRects()
        p = w.Webman()
        $.k({
            l: function () {
                p.I(-20, 0)
            },
            r: function () {
                p.I(20, 0)
            },
            d: function () {
                p.unstick()
            },
            u: function () {
                // if(!p.iCn()){
                p.Web().b.I(0, -100)
                // }
            }
        })

        w.b(function (cx) {
            cx.w('wbB', function (f) {
                var web = _.fW(p.WEBS, {ball: this.B()})
                if (!web.cn) {
                    web.stick(f.B())
                }
            })
        })
    }
    WEB = function () {
        W()

        w.roof.kill();
        w.right.kill();
        w.left.kill()
        _.t(40, function (i) {
            w.S(
                R(1100, 50), R(500, -50), 'r', R(30, 15), R(30, 15)
            ).K('rr')
        })
        p = w.Webman()

        $.k({
            l: function () {
                p.lV(-40, 0)
            },
            r: function () {
                p.lV(40, 0)
            },
            d: function () {
                if (p.WEBS[0]) {
                    _.l(p.WEBS).kill()
                }
            },
            u: function () {
                if (!p.iCn()) {

                    //make a web and shoot its ball (the dense part)
                    //the ball is kind of a brain for this thing

                    p.Web().ball.I(0, -100)

                }
            }
        })


        w.b(function (cx) {
            cx.w('wbB', 'rr', function (f) {//
                var web = _.fW(
                    p.WEBS, {ball: this.B()}
                )
                if (!web.cn) {
                    web.stick(f.B())
                }
            })
        })
    }
    WEBMAN1 = function () {

        W({g: 30, w: '_'}).C('z').s.C('z')

        block(400, 100)
        block(800, 0)
        block(1100, -50)
        block(1300, -200)
        w.goal(1800, 0)
        sw = $sw()

        p = w.Webman()

        w.b(function (cx) {
            cx.w('wbB', 'rr', function (rr) {
                var b = this.B(), rr = rr.B()
                web = _.fW(p.WEBS, {ball: b})
                // of all my WEBS, get me the web where the ball is the ball i just shot!
                if (web) {
                    web.stick(rr)
                }
            })
        })
        $.k({

            u: function (e, K) {
                var i

                if (p.iCn() && p.WEBS && !p.WEBS[1] && p.canW) {
                    i = M.a(p.lV().x * 2) * (K.r ? 1 : K.l ? -i : 0)
                    p.wb(3000).b.XY(p.X(), p.Y() - 100).I(i, -30)
                }
                else if (!p.WEBS || !p.WEBS[0] && p.canW) {
                    p.stat()
                    p.wb(3000).b.XY(p.X(), p.Y() - 200).bit(0)
                        .I(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -470])
                }

                p.canW = 0
            },

            U: function (e, K) {
                var cn = _.rj(p.WEBS, function (w) {
                        return !w.cn
                    }) || []
                if (cn[0] && cn[1]) {
                    cn[0].kill()
                }
                p.canW = 1;
                //p.shotForce=0
            },

            r: function (e, K) {
                if (K.d) {
                    p.didShoot = 1
                    p.sw = p.sw || $sw()
                }

                else {//k.D
                    p.F(//fX
                        p.iCn() ? 100 : 8, 0)
                }


            },
            R: function (e, K) {
                p.WEBS = p.WEBS || []
                if (p.WEBS[1]) {
                    p.WEBS[1].kill()
                }
                if (K.d) {
                    p.shR()
                }
            },
            l: function (e, K) {
                if (K.d) {
                    p.didShoot = 1;
                    if (!F(p.sw)) {
                        p.sw = $sw()
                    }
                }

                if (p.iCn()) {
                    p.F(-250, -50)
                }
                else {
                    p.I(-8, 0)
                }
            },

            L: function (e, K) {
                p.WEBS = p.WEBS || []
                if (p.WEBS[1]) {
                    p.WEBS[1].kill()
                }
                if (K.d) {
                    p.shL()
                }
            },

            D: function (e, K) {
                if (!p.didShoot && p.WEBS[0]) {
                    _.f(p.WEBS).kill()
                }
                p.didShoot = false
            }

        })

        w.s.tickX(function () {
            return 600 - p.X()
        });
        w.s.tickY(function () {
            return 510 - p.Y()
        })
        function block(x, y) {
            return w.S(x, y, 't', 50, 50, 't').K('randomRect rr')
        }
    }
    BLN = function () {
        W([1200, 600, 1200, 2000], {g: 300})


        p = w.me(394, 530, 4).track()
        Blns = []

        $.k({

            l: function () {
                p.I(-100, 0)
            },
            r: function () {
                p.I(100, 0)
            },
            d: function () {
                pop()
            },

            u: function () {
                p.I(0, 100)
                Bln()//.I(0,-100)
            }
        })


        //cjs.t(function(){_.e(Blns,function(b){b.F(0,-4000)})})

        function Bln() {
            $l('Bln')

            var y = p.Y(),
                x = p.X(), l,


                b = w.D(p.X(), p.Y() - 10)

            b.cir({c: $r(), r: 40, o: .5}).d(.1)
            b.ls = []
            b.K('bln')

            Blns.push(
                b
            )


            l = w.l(x, y);
            w.dJ(p, l);
            b.ls.push(l)

            _.t(9, function (i) {
                var nL;
                b.ls.push(nL = w.l(x, y - i));
                w.dJ(l, nL);
                l = nL
            })

            w.dJ(l, b)

            b.kill = function () {
                var b = this
                _.e(b.ls, function (l) {
                    l.kill()
                });
                b.kill()
                Blns[Blns.indexOf(b)] = null
                Blns = _.compact(Blns)
            }

            return b
        }

        /*

         function pop(){var wb;if(wb=_.l(Blns)){wb.kill()}}

         /*

         w.b(function(cx){cx.w('bln', function(f){

         if(  f.of(w.left)||f.of(w.right) ){
         this.B().kill()
         }})})
         */

        /*






         // x.w('web', 'floor', function(){p.destroyWeb();p.hanging = false})
         */

    }
//w.WebBall=function(o){return w.D(o.x, o.y-100,'d',10).d(1).r(0).fr(100).K('wbB') }
};webman()

//when a web is created it gets web.connected=false
//when it hits certain things and forms a joint, then connected->true
//then it just dies
//pressing DOWN should release the most recent of the connectedWebs
//note: non connected Webs can be shot off!
