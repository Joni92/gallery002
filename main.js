
let skewSetter = gsap.quickSetter(".col", "skewY", "deg");
let proxy = {skew:0};

ScrollTrigger.create({
    onUpdate: self => {
        let skew = self.getVelocity() / -300;
        /* console.log(skew) */

        if(Math.abs(skew) > Math.abs(proxy.skew)){
            proxy.skew = skew;
            /* console.log(proxy) */

            gsap.to(proxy, {skew:0, duration:1, ease:"power3", overwrite:true,onUpdate: ()=>skewSetter(proxy.skew)})
        }
    }
});

gsap.set(".col",{transformOrigin:"right center", force3D:true});