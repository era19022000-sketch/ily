const sb=window.supabase.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_PUBLISHABLE_KEY
);

let selectedFood="",selectedRide="";

async function saveAnswer(step,value){
  try{
    await sb.from("date_answers").insert({
      step,
      value,
      food:selectedFood||null,
      ride:selectedRide||null
    });
  }catch(e){
    console.error(e);
  }
}

const S=n=>
  document.querySelectorAll('.card').forEach((x,i)=>
    x.classList.toggle('hide',i!==n-1)
  );

const no=document.querySelector('#no');

no.onmouseenter=no.ontouchstart=()=>{
  no.style.transform=
    `translate(${Math.random()*180-90}px,${Math.random()*70-35}px)`;
};

document.querySelector('#yes').onclick=()=>{
  S(2);
  rain(15);
};

document.querySelectorAll('.foods button').forEach(b=>
  b.onclick=()=>{
    document.querySelectorAll('.foods button')
      .forEach(x=>x.classList.remove('sel'));

    b.classList.add('sel');

    selectedFood=b.dataset.food;

    document.querySelector('#fn').textContent=b.dataset.food;

    saveAnswer('food',selectedFood);

    setTimeout(()=>S(3),350);
  }
);

document.querySelectorAll('.ride button').forEach(b=>
  b.onclick=()=>{
    selectedRide=b.dataset.ride;

    document.querySelector('#rideName').textContent=selectedRide;

    saveAnswer('ride',selectedRide);

    S(4);
    rain(10);
  }
);

document.querySelector('#back').onclick=()=>{
  S(2);
};

document.querySelector('#final').onclick=()=>{
  saveAnswer('plan','Договорились 💗');
  S(5);
  rain(12);
};

function rain(n){
  for(let i=0;i<n;i++){
    let x=document.createElement('div');

    x.className='fall';

    x.textContent=
      ['❤️','💗','💖','💕','✨']
      [Math.floor(Math.random()*5)];

    x.style.left=Math.random()*100+'vw';
    x.style.fontSize=14+Math.random()*20+'px';
    x.style.animationDuration=1.6+Math.random()*2+'s';

    document.body.append(x);

    setTimeout(()=>x.remove(),4200);
  }
}

const loveSlider=document.querySelector('#loveSlider');
const loveValue=document.querySelector('#loveValue');

if(loveSlider){

  const updateLove=()=>{
    loveValue.textContent=loveSlider.value+'%';

    const v=loveSlider.value;

    loveSlider.style.background=
      `linear-gradient(
        90deg,
        #ffad9d 0%,
        #ed76bb ${v}%,
        #f7dbe9 ${v}%,
        #f7dbe9 100%
      )`;
  };

  loveSlider.addEventListener('input',updateLove);

  updateLove();
}

document.querySelector('#summary').onclick=()=>{
  saveAnswer(
    'meeting_wait',
    ''+loveSlider.value+'%'
  );

  S(6);
  rain(40);
};
