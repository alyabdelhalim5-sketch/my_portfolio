/* LOADER */

window.addEventListener('load',()=>{

  setTimeout(()=>{
  
  document.querySelector('.loader').style.opacity='0';
  
  setTimeout(()=>{
  
  document.querySelector('.loader').style.display='none';
  
  },1000);
  
  },1500);
  
  });
  
  /* YEAR */
  
  document.getElementById('year').innerHTML =
  new Date().getFullYear();
  
  /* TYPING EFFECT */
  
  const words = [
  'ALI',
  'AI ENGINEER',
  'LLM DEVELOPER',
  'ML SPECIALIST'
  ];
  
  let i = 0;
  let timer;
  
  function typingEffect(){
  
  let word = words[i].split("");
  
  var loopTyping = function(){
  
  if(word.length > 0){
  
  document.getElementById('typing').innerHTML +=
  word.shift();
  
  }else{
  
  deletingEffect();
  return false;
  
  }
  
  timer = setTimeout(loopTyping,120);
  
  };
  
  loopTyping();
  
  }
  
  function deletingEffect(){
  
  let word = words[i].split("");
  
  var loopDeleting = function(){
  
  if(word.length > 0){
  
  word.pop();
  
  document.getElementById('typing').innerHTML =
  word.join("");
  
  }else{
  
  if(words.length > (i + 1)){
  i++;
  }else{
  i = 0;
  }
  
  typingEffect();
  return false;
  
  }
  
  timer = setTimeout(loopDeleting,60);
  
  };
  
  loopDeleting();
  
  }
  
  typingEffect();
  
  /* CURSOR EFFECT */
  
  const cursor = document.querySelector('.cursor');
  
  document.addEventListener('mousemove',(e)=>{
  
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  });
  
  /* SCROLL ANIMATION */
  
  const observer = new IntersectionObserver(entries=>{
  
  entries.forEach(entry=>{
  
  if(entry.isIntersecting){
  
  entry.target.style.opacity = 1;
  entry.target.style.transform = 'translateY(0px)';
  
  }
  
  });
  
  });
  
  document.querySelectorAll('.glass').forEach(el=>{
  
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  el.style.transition = '1s';
  
  observer.observe(el);
  
  });