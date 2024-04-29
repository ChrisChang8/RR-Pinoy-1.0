import React from 'react'
import './Home_Faq.css'
import "react-accessible-accordion/dist/fancy-example.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import {
    MdOutlineArrowDropDown,
} from "react-icons/md";
import data from "../../utils/faq-accordion.jsx";

const Home_Faq = () => {
  return (
    <section className='flexCenter faq-container'>
        <div className="paddings innerWidth flexCenter">
            <div className='flexColCenter'>
                <span className='orangeText'>FAQ</span>
                <span className='secondaryText'>Please reach out to us if there's any other questions!</span>                    
            </div>
            <div className="flexCenter">
                <Accordion className="accordion flexCenter" allowMultipleExpanded={false} preExpanded={[0]}>
                    {data.map((item, i) => {
                        return (
                            <AccordionItem className="accordionItem" key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">      
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon"> <MdOutlineArrowDropDown size={20} /> </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText"> {item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Home_Faq

