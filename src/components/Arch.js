import React from 'react';
import Card from "./Card";
import Oranim from "../images/oraniumByThe Sea.PNG";
import DTowers from "../images/DTowers.PNG";
import Alpha from "../images/alpha.JPG";
import Hadera from "../images/Hadera.JPG"
import Elite from "../images/EliteTowers.PNG"

const Arch = () => {
    return (
        <div>
            <Card title = "Oranim By the Sea" image = {Oranim} text = "Luxury senior housing and retail space, located in Oranim, Israel. Architecture was modeled in Revit. 50,000 sq meters, currently under construction." />
            <Card title = "Dan Towers" image = {DTowers} text = "Mixed use, 2013 - currently under construction, located in Bnei Brak, Israel. Architecture and all systems were created in Revit. 180,000 sq meters of office and retail space."/>
            <Card title = "Alpha Tower" image = {Alpha} text = "Mixed use - apartments, hotel, retail, kindergarten. Located in Tel Aviv, Israel. 35,000 sq, currently under construction."/>
            <Card title = "Hadera Courthouse" image ={Hadera} text = "Courthouse in Hadera, Israel. 8,000 sq. Architecture and all systems modeled in Revit. Completed in 2020"/>
            <Card title = "Elite Towers" image = {Elite} text = "Mixed use - apartments, hotel, retail. Fully BIM project. Located in Ramat Gan, Israel. 100,000 sq, currently under construction." />
        </div>
    )
}

export default Arch
