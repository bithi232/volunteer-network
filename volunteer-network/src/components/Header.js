import React from 'react';
import logo from '../logos/logo.png';
import picture from '../images/childSupport.png';
import shelter from '../images/refuseShelter.png';
import food from '../images/foodCharity.png';
import cloth from '../images/clothSwap.png';
import river from '../images/riverClean.png';
import clean from '../images/cleanWater.png';
import education from '../images/goodEducation.png';
import newBooks from '../images/newBooks.png';
import studyGroup from '../images/studyGroup.png';
import birds from '../images/birdHouse.png';
import library from '../images/libraryBooks.png';
import study from '../images/studyGroup.png';
import driver from '../images/driveSafety.png';
import music from '../images/musicLessons.png';
import vote from '../images/voteRegister.png';
import park from '../images/clearnPark.png';
import IT from '../images/ITHelp.png';
import animal from '../images/animalShelter.png';
import baby from '../images/babySit.png';
import stuffed from '../images/stuffedAnimals.png';
import school from '../images/schoolSuffiles.png';


import './Header/Header.css';

const Header = () => {
    return (
        <div className="Main">
        
           <nav className="Header">
             <img src={logo} alt=""/>
               <nav className="Header1">
               <a href="/home">Home</a>
               <a href="/donation">Donation</a>
               <a href="/events">Events</a>
               <a href="/blog">Register</a>
               <button type="button" class="btn btn-primary">Register</button>
               <button>Admin</button>
              </nav>
               <nav>
               <p><b>I GROW BY HELPING PEOPLE IN NEED</b>
               <br/>
               <button className="btn">search</button></p>
               </nav>

               <nav>
               <a><img src={picture} alt=""/>childSupport</a>
               <a><img src={shelter} alt=""/>refuseShelter</a>
               <a><img src={food} alt=""/>foodCharity</a>
               <a><img src={cloth} alt=""/>clothSwap</a>
               </nav>
              
               <nav>
               <a><img src={river} alt=""/>riverClean......</a>
               <a><img src={clean} alt=""/>cleanWater</a>
               <a><img src={education} alt=""/>goodEducation</a>
               <a><img src={newBooks} alt=""/>newBooks</a>
               </nav>
               
              <nav>
              <a><img src={birds} alt=""/>birds..........</a>
               <a><img src={library} alt=""/>libraryBooks</a>
               <a><img src={study} alt=""/>studyGroup</a>
               <a><img src={driver} alt=""/>driveSafety</a>
               
             </nav>
             <nav>
             <a><img src={music} alt=""/>musicLessons</a>
             <a><img src={vote} alt=""/>voteRegister</a>
             <a><img src={park} alt=""/>cleanPark</a>
             <a><img src={IT} alt=""/>ITHelp</a>
             </nav>

             <nav>
             <a><img src={animal} alt=""/>animalShelter</a>
             <a><img src={baby} alt=""/>babySit</a>
             <a><img src={stuffed} alt=""/>stuffedAnimal</a>
             <a><img src={school} alt=""/>schoolSuffiles</a>   
            </nav>
               
             



           

              

           
              

        



         
               
               
     
               
          </nav>
     
        
        </div>
    );
};

export default Header;