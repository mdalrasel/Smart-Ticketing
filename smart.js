function tickets (){
  const homeSection = document.getElementById('home-screen');
  homeSection.classList.add('hidden');

  const buyTickets = document.getElementById('buy-tickets');
  buyTickets.classList.remove('hidden');
}
function successful (){
  const buyTickets = document.getElementById('buy-tickets');
  buyTickets.classList.add('hidden');

  const bookingSeats = document.getElementById('success');
  bookingSeats.classList.remove('hidden');
}
function again(){
  const continues =  document.getElementById('success') ;
  continues.classList.add('hidden')
} 



let  count = 40;
let seatIncrement = 0;
let allSeatName = '';

const allBtn = document.getElementsByClassName('btn');
for(const btns of allBtn){
    btns.addEventListener('click', function(e){
    
        const mSeetName = document.getElementById('seetName');
        const mSeetNumber =(e.target.innerText);

        if(allSeatName.includes(mSeetNumber))
        return
        
        
        if(count>0){
            count -- 
        }else{
          return
        }
      
     seetInnarText('seetCount' ,count)
    
     if(seatIncrement<4){
        seatIncrement ++;
        
     }else {
      return
    }

    allSeatName = allSeatName+mSeetNumber
       seetInnarText('seetIncrement', seatIncrement )
        btns.style.backgroundColor = "green";
     
        const seetNumber =(e.target.innerText);
        const seetName = document.getElementById('seetName');
        const h1 = document.createElement("h1");
        h1.innerText = seetNumber;
      
        seetName.appendChild(h1)
      
        const classNmae = document.getElementById('classNmae');
        const h2 =  document.createElement('h2');
        h2.innerHTML = 'Economoy'
        classNmae.appendChild(h2)

        const seatPrice = document.getElementById('seatPrice');
        const h3 = document.createElement('h3');
        h3.innerHTML = '550'
        seatPrice.appendChild(h3)

        const total = document.getElementById('totalprice').innerText;

       const convertMoney = parseInt(total);
       document.getElementById('totalprice').innerText = convertMoney + parseInt(550);
    })
}


function seetInnarText(id , value){
    document.getElementById(id).innerText = value;
 

}
const applyCoupon = () => {
    const total = document.getElementById('totalprice').innerText;

    const convertMoney = parseInt(total);    
     
    const couponCode = document.getElementById('coupon').value
    if(seatIncrement > 3 && couponCode === "Couple20"){
    
        document.getElementById('totalprice').innerText = convertMoney / 100 * 80; 
    }

    if(seatIncrement > 3 && couponCode === "NEW15"){
        document.getElementById('totalprice').innerText = convertMoney / 100 * 70;
    }
    console.log('clicked');
}
