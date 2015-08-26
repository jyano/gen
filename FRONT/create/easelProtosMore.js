$PT()



    t.lW = _.gS('linewidth')
    t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    t.lWH = function (w, h) {return this.lW(w).lH(N(h, w))}
    t.tA = _.gS('textAlign')
    t.bl = function (bl) {var g = G(arguments)
        if (g.p) {
            bl = 'bottom'
        }
        if (g.n) {
            bl = 'top'
        }
        if (bl === '') {
            bl = 'middle'
        }
        if (U(bl)) {
            return this.textBaseline
        }
        this.textBaseline = bl
        return this
    }
    t.T = function (tS) {if (U(tS)) {return this._tS}
        this._tS = tS
        return this}
    t.ol = _.gS(t, 'outline')
    t.F = t.fo = function (f) {
        if (U(f)) {
            return this.font
        }
        this.font = N(f) ? f + 'px Arial' : f
        return this}
    t.C = function (cS) {
        if (U(cS)) {return this.color}
        this.color = oO('c', cS)
        return this}
    t.mW = function () {return this.getMeasuredWidth()}







function createStuff(){
    $El = cjs.el = function (a) {
        a = $(a)[0]
        return new cjs.DOMElement(a)
    }
    ELM = function () {
        z()
        d = $.d('r', 400, 400).A($.ip()).drag()
        el = $El(d)
        s = $St('y').t()
        s.A(el)
        // tw(el, [{x:300,y:300},2000])
        // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
    }

}
