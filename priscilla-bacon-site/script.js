document.querySelectorAll('.carousel').forEach(function(c){
  var s=c.querySelectorAll('.slide'),i=0;
  function show(n){s[i].classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on');}
  c.querySelector('.prev').onclick=function(){show(i-1)};
  c.querySelector('.next').onclick=function(){show(i+1)};
  s[0].classList.add('on');
});
