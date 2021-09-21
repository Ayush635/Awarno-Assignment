let fiheading=document.getElementById("fiheading");
fiheading.addEventListener('click',function()
{ let span1=document.getElementById('span1');
  let str=`lorem20 uptatem ducimus sapiente deserunt m laudantium et,Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Natus sed odio tempora dolo`;
  span1.innerText=str;
  fiheading.innerHTML='';
  let showless=document.getElementById('showless');
  showless.innerText='Show Less';
  showless.addEventListener('click',function()
  { 
    span1.innerHTML='';
    showless.innerHTML='';
    fiheading.innerHTML='Read More';
  })

 
})
let fiheading1=document.getElementById("fiheading1");
fiheading1.addEventListener('click',function()
{ let span2=document.getElementById('span2');
  let str=`lorem20 uptatem ducimus sapiente deserunt m laudantium et,Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Natus sed odio tempora dolo`;
  span2.innerText=str;
  fiheading1.innerHTML='';
  let showless2=document.getElementById('showless2');
  showless2.innerText='Show Less';
  showless2.addEventListener('click',function()
  { 
    span2.innerHTML='';
    showless2.innerHTML='';
    fiheading1.innerHTML='Read More';
  })

 
})
let fiheading2=document.getElementById("fiheading2");
fiheading2.addEventListener('click',function()
{ let span3 =document.getElementById('span3');
  let str=`lorem20 uptatem ducimus sapiente deserunt m laudantium et,Lorem ipsum dolor sit,
  amet consectetur adipisicing elit. Natus sed odio tempora dolo`;
  span3.innerText=str;
  fiheading2.innerHTML='';
  let showless3=document.getElementById('showless3');
  showless3.innerText='Show Less';
  showless3.addEventListener('click',function()
  { 
    span3.innerHTML='';
    showless3.innerHTML='';
    fiheading2.innerHTML='Read More';
  })

 
})
let things=document.getElementById('things');
things.addEventListener('click',function()
{   let cool1=document.getElementById('cool1');
    let precautions1=document.createElement('p');
    precautions1.id='precautions1'
    precautions1.className='precautions1'
  let ptext1=document.createTextNode('Maintain a safe distance from others, even if they don’t appear to be sick.');
  precautions1.appendChild(ptext1);
  cool1.appendChild(precautions1);
  
   
    let precautions2=document.createElement('p');
    precautions2.id='precautions2'
    precautions2.className='precautions2'
  let ptext2=document.createTextNode('Wear a mask in public, especially indoors or when physical distancing is not possible.');
  precautions2.appendChild(ptext2);
  cool1.appendChild(precautions2);
  
   
    let precautions3=document.createElement('p');
    precautions3.id='precautions3'
    precautions3.className='precautions3'
  let ptext3=document.createTextNode('Choose open, well-ventilated spaces over closed ones. Open a window if indoors.');
  precautions3.appendChild(ptext3);
  cool1.appendChild(precautions3);
  
    let showless4=document.createElement('p');
    showless4.id='showless4'
    showless4.className='showless4'
    showless4.style.margin='20px 0 0 0';
  let ptext4=document.createTextNode('Show Less');
  showless4.appendChild(ptext4);
  cool1.appendChild(showless4);
  
  things.innerHTML='';
  showless4.addEventListener('click',function()
  { 
      cool1.removeChild(document.getElementById('precautions1'));
      cool1.removeChild(document.getElementById('precautions2'));
      cool1.removeChild(document.getElementById('precautions3'));
      cool1.removeChild(document.getElementById('showless4'));
      things.innerHTML='Key Things to Remember';

      
  })

})
let things1=document.getElementById('things1');
things1.addEventListener('click',function()
{   let cool2=document.getElementById('cool2');
    let precautions4=document.createElement('p');
    precautions4.id='precautions4'
    precautions4.className='precautions4'
  let ptext5=document.createTextNode('Clean your hands often. Use soap and water, or an alcohol-based hand rub.');
  precautions4.appendChild(ptext5);
  cool2.appendChild(precautions4);
  
   
    let precautions5=document.createElement('p');
    precautions5.id='precautions5'
    precautions5.className='precautions5'
  let ptext6=document.createTextNode('Get vaccinated when it’s your turn. Follow local guidance about vaccination.');
  precautions5.appendChild(ptext6);
  cool2.appendChild(precautions5);
  
   
    let precautions6=document.createElement('p');
    precautions6.id='precautions6'
    precautions6.className='precautions6'
  let ptext7=document.createTextNode('Stay home if you feel unwell.');
  precautions6.appendChild(ptext7);
  cool2.appendChild(precautions6);
  
    let showless6=document.createElement('p');
    showless6.id='showless6'
    showless6.className='showless6'
    showless6.style.margin='20px 0 0 0';
  let ptext8=document.createTextNode('Show Less');
  showless6.appendChild(ptext8);
  cool2.appendChild(showless6);
  
  showless6.addEventListener('click',function()
  { 
      cool2.removeChild(document.getElementById('precautions4'));
      cool2.removeChild(document.getElementById('precautions5'));
      cool2.removeChild(document.getElementById('precautions6'));
      cool2.removeChild(document.getElementById('showless6'));

      
  })

})

