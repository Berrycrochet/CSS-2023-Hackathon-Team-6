import React,{useState} from 'react'
import logo from "../assets/logo.png";
import "../components/Navbar.css"


function Navbar() {
    const [showText, setshowText ] = useState(false);
    const handleClick = ()=>{
        setshowText(true);
    }
        
        const [applyText, setapplyText ] = useState(false);
    const handleThis = ()=>{
        setapplyText(true);
    }
  return (
    < div className='Navbar'>
        <h4 align="left">Shape Shifters</h4>
         <div className='leftSide'>
             <img className="my-image" src ={logo} />
          </div>



        <div className='rightSide'>
           <button onClick={handleClick}>Contact us</button>
           {showText && <p>Za sva pitanja, komentare ili bilo kakve upite, možete nas kontaktirati putem sljedećih kanala:

            Email: info@primjer.com
           Telefon: +385 1 123 4567
            Adresa: Primjer d.o.o., Ulica Primjera 1, 10000 Zagreb

           Radno vrijeme:
           Ponedjeljak - Petak: 9:00 - 17:00
           Subota - Nedjelja: zatvoreno

            Radujemo se vašem kontaktu i pomoći vam u rješavanju bilo kojih pitanja koje imate.</p>}

           <button onClick={handleThis}>About us</button>
           {applyText && <p>Dobrodošli na našu web stranicu! Mi smo tim stručnjaka s dugogodišnjim iskustvom u fitness industriji. Naš cilj je pomoći ljudima da postignu i održe svoju optimalnu tjelesnu kondiciju.

                Naši treneri su visoko kvalificirani stručnjaci koji su posvećeni tome da vam pruže individualni pristup i pomoć u postizanju vaših ciljeva. Mi vjerujemo da svaki pojedinac ima jedinstvene potrebe i ciljeve, te pristupamo svakom klijentu sa takvim razumijevanjem.

                Naši programi vježbanja su osmišljeni na temelju najnovijih istraživanja i trendova u fitness industriji. Mi vjerujemo u sveobuhvatan pristup vježbanju koji uključuje i fizičko i psihičko zdravlje. Stoga smo razvili programe koji su prilagođeni vašem nivou kondicije i ciljevima.

                Naša misija je pomoći ljudima da se osjećaju zdravije i sretnije kroz vježbu i zdravu prehranu. Naši programi su osmišljeni tako da vam pomognu da ostvarite svoj potencijal i da se osjećate samopouzdano i snažno u svom tijelu.

                Hvala vam što ste posjetili našu web stranicu i nadamo se da ćete nam se pridružiti u našoj misiji za zdraviji i sretniji život.</p>}

           
        </div>
      
     </div>
      
    
  )
}

export default Navbar;