import React from 'react'
import Card from "./Card";
import Leaf from "../images/littleleaf2.gif"
import Games from "../images/gamesApp.PNG"
import Weather from "../images/weatherApp.PNG"
import Schedule from "../images/WorkDayScheduler.PNG"
import Template from "../images/template-gen.gif"

const Web = () => {
    return (
        <div>
            <Card title = "Little Leaf" image = {Leaf} text = "An app that helps you give the best care to your house plants. Create rooms and add plants to your rooms. Once a plant is created it automatically sends reminders for when you need to water, prune, rotate your plants."/>
            <Card title = "Games App" image = {Games} text = "Website of 6 games to play while bored during quaratine. Uses three API calls, HTML, CSS, JQuery, and Bootstrap."/>
            <Card title = "Weather App" image ={Weather} text = "Open Weather API used to generate 5 day weather forecast based on user search. Saves city search to local storage."/>
            <Card title = "Daily Scheduler" image = {Schedule} text = "Work Day Scheduler where you can add daily tasks and they are saved to your local storage. Time slots are colored according to the current hour."/>
            <Card title = "Template Engine" image = {Template} text="Creates a page for employees based on user input. Uses Node.js and npm Inquirer"/>
        </div>
    )
}

export default Web
