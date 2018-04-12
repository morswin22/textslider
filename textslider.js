const TEXTSLIDER_LEFT = -1;
const TEXTSLIDER_RIGHT = 1;

function createSlider(self) {

  let span = $(self.children()[0]);
  
  if (span.is('span')) {
    let spanSize = {
    	w: span.width(),
      h: span.height()
    };
    let size = {
    	w: self.width(),
      h: self.height(),
    }
    
    if (size.h < spanSize.h) self.css({height: spanSize.h + 'px'})
    
    self.css({overflow: 'hidden'});
    span.css({position: 'relative'});
    
    let x = 0;
    
    this.started = false;
    
    this.dir = dir=>{
    	this.vel = dir;
      if (!this.started && dir < 0) x = size.w-spanSize.w;
    }
    
    this.animate = ()=>{
    	
      this.started = true;
      
      span.css({left: x + 'px'});
      
      x+=this.vel;
      
      if (this.vel > 0 && x > size.w) {
      	x = -spanSize.w;
      }
      if (this.vel < 0 && x < -spanSize.w) {
      	x = size.w;
      }
      
      window.requestAnimationFrame(this.animate);
    }
    
    return this;
  } else {
  	return false;
  }

}
