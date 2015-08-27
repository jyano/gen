
w.Gear = function (a, b, c) {

    return world.createJoint(Gear(a, b, c))
    function Gear(bA, bB, ratio) {
        var gearJoint = new b2d.Joints.b2GearJointDef()
        gearJoint.joint1 = bA
        gearJoint.joint2 = bB
        gearJoint.bodyA = bA.GetBodyA()
        gearJoint.bodyB = bB.GetBodyA()
        gearJoint.ratio = N(ratio) ? ratio : 1
        return gearJoint
    }
}

PulleyJoint = pJt = function () {

    bPJD = BXJ.b2PulleyJointDef
    bPJ = BXJ.b2PulleyJoint

    var j = SuperJoint(new BXJ.b2PulleyJointDef())


    j.init = j.i = function () {
        j.Initialize.apply(j, G(arguments))
        return j
    }

    j.lenA = j.lA = function (a) {
        j.lengthA = a;
        return j
    }
    j.lenB = j.lB = function (a) {
        j.lengthB = a;
        return j
    }

    j.maxLenA = j.mLA = function (a) {
        j.maxLengthA = a;
        return j
    }
    j.maxLenB = j.mLB = function (a) {
        j.maxLengthB = a;
        return j
    }

    return j
}
SuperPulleyJoint = sPJ = function (x, y) {


    x = N(x) ? x : 100
    y = N(y) ? y : x

    b11 = w.A(bx1 = b2d.dynamicDef(x, y), fix())
    b22 = w.A(bx2 = b2d.dynamicDef(x, y), fix())


    var pulley = PulleyJoint()

        .init(
        b11,

        b22,

        b2d.V(15, 1),

        b2d.V(15, 2),

        b11.worldCenter(),

        b22.worldCenter(),

        1
    )

        .lenA(8)
        .lenB(4)
        .maxLenA(10)
        .maxLenB(5)

    w.J(pulley)

}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}

PULLEY = function () {
    W()
    b1 = w.D(300, 300, 'r', 200, 10)
    b2 = w.D(500, 300, 'b', 200, 10)
    var pulley = PulleyJoint().init(
        b1, b2,
        V(20, 1), V(25, 2), b1.wC(), b2.wC(), 1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
    w.J(pulley)   //makeMe()  //makeTim(10)   //makeCar()
}
ROPEJ = function () {


    function b2RopeJoint() {
        b2RopeJoint.b2RopeJoint.apply(this, arguments);
        if (this.constructor === b2RopeJoint) this.b2RopeJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2RopeJoint = b2RopeJoint;

    function b2RopeJointDef() {
        b2RopeJointDef.b2RopeJointDef.apply(this, arguments);
        if (this.constructor === b2RopeJointDef) this.b2RopeJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2RopeJointDef = b2RopeJointDef;

    b2RopeJoint = Box2D.Dynamics.Joints.b2RopeJoint
    b2RopeJointDef = Box2D.Dynamics.Joints.b2RopeJointDef

    Box2D.inherit(b2RopeJoint, Box2D.Dynamics.Joints.b2Joint);
    b2RopeJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    b2RopeJoint.b2RopeJoint = function () {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new b2Vec2();
        this.m_localAnchor2 = new b2Vec2();

        this.m_u = new b2Vec2();
    };
    b2RopeJoint.prototype.GetAnchorA = function () {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
    }
    b2RopeJoint.prototype.GetAnchorB = function () {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
    }
    b2RopeJoint.prototype.GetReactionForce = function (inv_dt) {
        if (inv_dt === undefined) inv_dt = 0;
        return new b2Vec2(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
    }
    b2RopeJoint.prototype.GetReactionTorque = function (inv_dt) {
        if (inv_dt === undefined) inv_dt = 0;
        return 0.0;
    }
    b2RopeJoint.prototype.GetLength = function () {
        return this.m_length;
    }
    b2RopeJoint.prototype.SetLength = function (length) {
        if (length === undefined) length = 0;
        this.m_length = length;
    }
    b2RopeJoint.prototype.GetFrequency = function () {
        return this.m_frequencyHz;
    }
    b2RopeJoint.prototype.SetFrequency = function (hz) {
        if (hz === undefined) hz = 0;
        this.m_frequencyHz = hz;
    }
    b2RopeJoint.prototype.GetDampingRatio = function () {
        return this.m_dampingRatio;
    }
    b2RopeJoint.prototype.SetDampingRatio = function (ratio) {
        if (ratio === undefined) ratio = 0;
        this.m_dampingRatio = ratio;
    }
    b2RopeJoint.prototype.b2RopeJoint = function (def) {
        this.__super.b2Joint.call(this, def);
        var tMat;
        var tX = 0;
        var tY = 0;
        this.m_localAnchor1.SetV(def.localAnchorA);
        this.m_localAnchor2.SetV(def.localAnchorB);
        this.m_frequencyHz = def.frequencyHz;
        this.m_dampingRatio = def.dampingRatio;
        this.m_impulse = 0.0;
        this.m_gamma = 0.0;
        this.m_bias = 0.0;
        this.m_length = def.length;
        this.m_maxLength = def.maxLength
        this.m_limitState = b2Joint.e_inactiveLimit;
    }
    b2RopeJoint.prototype.InitVelocityConstraints = function (step) {
        var tMat;
        var tX = 0;
        var bA = this.m_bodyA;
        var bB = this.m_bodyB;
        tMat = bA.m_xf.R;
        var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
        var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
        tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
        r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
        r1X = tX;
        tMat = bB.m_xf.R;
        var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
        var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
        tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
        r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
        r2X = tX;
        this.m_u.x = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
        this.m_u.y = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
        var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        this.m_length = length;
        var C = this.m_length - this.m_maxLength;
        if (C > 0) {
            this.m_limitState = b2Joint.e_atUpperLimit;
        } else {
            this.m_limitState = b2Joint.e_inactiveLimit;
        }
        if (length > b2Settings.b2_linearSlop) {
            this.m_u.Multiply(1.0 / length);
        } else {
            this.m_u.SetZero();
            this.m_mass = 0.0;
            this.m_impulse = 0.0;
            return;
        }
        var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
        var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
        var invMass = bA.m_invMass + bA.m_invI * cr1u * cr1u + bB.m_invMass + bB.m_invI * cr2u * cr2u;
        this.m_mass = invMass != 0.0 ? 1.0 / invMass : 0.0;
        if (step.warmStarting) {
            this.m_impulse *= step.dtRatio;
            var PX = this.m_impulse * this.m_u.x;
            var PY = this.m_impulse * this.m_u.y;
            bA.m_linearVelocity.x -= bA.m_invMass * PX;
            bA.m_linearVelocity.y -= bA.m_invMass * PY;
            bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
            bB.m_linearVelocity.x += bB.m_invMass * PX;
            bB.m_linearVelocity.y += bB.m_invMass * PY;
            bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
        }
        else {
            this.m_impulse = 0.0;
        }
    }
    b2RopeJoint.prototype.SolveVelocityConstraints = function (step) {
        var tMat;
        var oldImpulse = 0.0;
        var bA = this.m_bodyA;
        var bB = this.m_bodyB;
        tMat = bA.m_xf.R;
        var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
        var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
        var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
        r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
        r1X = tX;
        tMat = bB.m_xf.R;
        var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
        var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
        tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
        r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
        r2X = tX;
        var v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
        var v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
        var v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
        var v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
        var C = this.m_length - this.m_maxLength;
        var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
        if (C < 0.0) {
            Cdot += step.inv_dt * C;
        }
        var impulse = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
        oldImpulse = this.m_impulse;
        this.m_impulse = Math.min(0.0, this.m_impulse + impulse);
        impulse = this.m_impulse - oldImpulse;
        var PX = impulse * this.m_u.x;
        var PY = impulse * this.m_u.y;
        bA.m_linearVelocity.x -= bA.m_invMass * PX;
        bA.m_linearVelocity.y -= bA.m_invMass * PY;
        bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
        bB.m_linearVelocity.x += bB.m_invMass * PX;
        bB.m_linearVelocity.y += bB.m_invMass * PY;
        bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
    }
    b2RopeJoint.prototype.SolvePositionConstraints = function (baumgarte) {
        if (baumgarte === undefined) baumgarte = 0;
        var tMat;
        if (this.m_frequencyHz > 0.0) {
            return true;
        }
        var bA = this.m_bodyA;
        var bB = this.m_bodyB;
        tMat = bA.m_xf.R;
        var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
        var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
        var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
        r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
        r1X = tX;
        tMat = bB.m_xf.R;
        var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
        var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
        tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
        r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
        r2X = tX;
        var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
        var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
        var length = Math.sqrt(dX * dX + dY * dY);
        dX /= length;
        dY /= length;
        var C = length - this.m_maxLength;
        C = b2Math.Clamp(C, 0.0, b2Settings.b2_maxLinearCorrection);
        var impulse = (-this.m_mass * C);
        this.m_u.Set(dX, dY);
        var PX = impulse * this.m_u.x;
        var PY = impulse * this.m_u.y;
        bA.m_sweep.c.x -= bA.m_invMass * PX;
        bA.m_sweep.c.y -= bA.m_invMass * PY;
        bA.m_sweep.a -= bA.m_invI * (r1X * PY - r1Y * PX);
        bB.m_sweep.c.x += bB.m_invMass * PX;
        bB.m_sweep.c.y += bB.m_invMass * PY;
        bB.m_sweep.a += bB.m_invI * (r2X * PY - r2Y * PX);
        bA.SynchronizeTransform();
        bB.SynchronizeTransform();
        return length - this.m_maxLength < b2Settings.b2_linearSlop;
    }
    Box2D.inherit(b2RopeJointDef, Box2D.Dynamics.Joints.b2JointDef);
    b2RopeJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    b2RopeJointDef.b2RopeJointDef = function () {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new b2Vec2();
        this.localAnchorB = new b2Vec2();
    };
    b2RopeJointDef.prototype.b2RopeJointDef = function () {
        this.__super.b2JointDef.call(this);
        this.type = b2Joint.e_ropeJoint;
        this.length = 1.0;
        this.frequencyHz = 0.0;
        this.dampingRatio = 0.0;
    }
    b2RopeJointDef.prototype.Initialize = function (bA, bB, anchorA, anchorB) {
        this.bodyA = bA;
        this.bodyB = bB;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchorA));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchorB));
        var dX = anchorB.x - anchorA.x;
        var dY = anchorB.y - anchorA.y;
        this.length = Math.sqrt(dX * dX + dY * dY);
        this.frequencyHz = 0.0;
        this.dampingRatio = 0.0;
    }

    b2Joint.Create = function (def, allocator) {
        var joint = null;
        switch (def.type) {
            case b2Joint.e_ropeJoint:
            {
                joint = new b2RopeJoint((def instanceof b2RopeJointDef ? def : null));
            }
                break;
            case b2Joint.e_distanceJoint:
            {
                joint = new b2DistanceJoint((def instanceof b2DistanceJointDef ? def : null));
            }
                break;
            case b2Joint.e_mouseJoint:
            {
                joint = new b2MouseJoint((def instanceof b2MouseJointDef ? def : null));
            }
                break;
            case b2Joint.e_prismaticJoint:
            {
                joint = new b2PrismaticJoint((def instanceof b2PrismaticJointDef ? def : null));
            }
                break;
            case b2Joint.e_revoluteJoint:
            {
                joint = new b2RevoluteJoint((def instanceof b2RevoluteJointDef ? def : null));
            }
                break;
            case b2Joint.e_pulleyJoint:
            {
                joint = new b2PulleyJoint((def instanceof b2PulleyJointDef ? def : null));
            }
                break;
            case b2Joint.e_gearJoint:
            {
                joint = new b2GearJoint((def instanceof b2GearJointDef ? def : null));
            }
                break;
            case b2Joint.e_lineJoint:
            {
                joint = new b2LineJoint((def instanceof b2LineJointDef ? def : null));
            }
                break;
            case b2Joint.e_weldJoint:
            {
                joint = new b2WeldJoint((def instanceof b2WeldJointDef ? def : null));
            }
                break;
            case b2Joint.e_frictionJoint:
            {
                joint = new b2FrictionJoint((def instanceof b2FrictionJointDef ? def : null));
            }
                break;
            default:
                break;
        }
        return joint;
    }

    Box2D.postDefs.push(function () {
        Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
        Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
        Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
        Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
        Box2D.Dynamics.Joints.b2Joint.e_ropeJoint = 10;
        Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
        Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
        Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
        Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
        Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
        Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
        Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
        Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
        Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
        Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
    });
}
FRICJ = function () {

    w = b2d.W({g: 0})

    y = w.ship().XY(200, 200)
    w.right.kill();
    w.left.kill();
    y.warp2()
    //  Set the two anchor points to zero so the friction doesn't have any direction.

    frictionJoint = new b2d.Joints.b2FrictionJointDef()


    frictionJoint.localAnchorA = V(0, 0)
    frictionJoint.localAnchorB = V(0, 0)

    frictionJoint.bodyA = y//w.ball(100,100,50)
    frictionJoint.bodyB = b = w.ball(200, 200, 240).warp2()
    // 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn

    frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
    // The faster its moving the more force applied

    frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation

    w.CreateJoint(frictionJoint)


    frictionJoint = new b2d.Joints.b2FrictionJointDef()


    frictionJoint.localAnchorA = V(0, 0)
    frictionJoint.localAnchorB = V(0, 0)

    frictionJoint.bodyA = y//w.ball(100,100,50)
    frictionJoint.bodyB = b2 = w.ball(200, 200, 40).warp2()
    // 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn

    frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
    // The faster its moving the more force applied

    frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation

    w.CreateJoint(frictionJoint)


    w.ball(400, 500, 40)
    w.show(function () {
        return 'linVelX: ' + y.linVel().x.toFixed(0)
    })

    /*

     How to add friction joint and which anchor point i have to set to zero?? –  Diken Sep 5 '12 at 7:05

     Unlike surface friction between solids, air friction (drag) depends on the speed of the object, squared.

     An easy way to model friction and drag

     F(friction) = -k;
     F(drag) = speed * speed * -k;
     Both forces act in the opposite direction to the velocity of the object.

     Notice that surface friction is a constant whereas air friction (drag) must be modified each frame according to the object speed (length of velocity vector)
     */
}
DEMOGEAR=function(){W()
    w.Gear(
        w.rev( w.baa(100,220,40), w.bi(100,220,100,20) ),
        w.rev( w.baa(250,220), w.bi(250,220,100,20) ),.5)}


