import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import {  collection, getDocs } from "firebase/firestore"; 
import { db } from '../../views/Firebase';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {


  const [team,setTeam]=useState([])
  const fetchTeam=async()=>{
    const querySnapshot = await getDocs(collection(db, "Team-2023"))
    
   
    //doc is document of collection and doc.data() is object in that doc. In book, all objects have been passed with index 0,1..
// querySnapshot is an is an array object of docs.

const data= querySnapshot.docs.map((doc)=>({...doc.data(),}));
data.sort((a, b) => {
  const rankA = getRank(a.role);
  const rankB = getRank(b.role);
  return rankA - rankB;
});
setTeam(data);
  }


useEffect(()=>{
  fetchTeam()
}, [])


const getRank = (role) => {
  switch (role) {
    case "Mentor":
      return 1;
    case "President":
      return 2;
    case "CP Lead":
      return 3;
    case "Manager":
      return 4;
    case "Event Coordinator":
      return 5;
    case "Web Developer":
      return 6;
    case "Outreach Media Lead":
      return 7;
    case "CP Team Member":
      return 8;
    case "Social Media Team":
      return 9;
    case "Volunteer":
      return 10;
    default:
      return 0;
  }
};




  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Team',
    paragraph: 'We introduce you to our glorious team'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id="team"
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
{team.slice(0,7).map((item,index)=>{
  return(
            <div className="tiles-item " key={index} >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <img src={item.imgLink}/>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">{item.name}</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">{item.role}</a>
                  </span>
                </div>
              </div>
            </div>
  )
})}
          </div>
        </div>
      </div>
    </section>
    
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;