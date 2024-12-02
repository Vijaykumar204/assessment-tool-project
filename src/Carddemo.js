import React from "react";
import pc from './image/c.jpeg';
import pj from './image/java1.jpeg';
import pp from './image/python1.jpeg';
import ph from './image/html.png';
import pjs from './image/js.jpg';
import pr from './image/react.png';
import sf from './image/football.jpg';
import sc from './image/cricket.jpg';
import sv from './image/volley.jpg';
import sk from './image/kabaddi.jpg';
import sb from './image/basket.jpg';
import st from './image/table.jpg';
import Cards from "./Cards";
import 'bootstrap/dist/css/bootstrap.css';
function Carddemo(){
    return(
        <div className="container" >
            <h1>Programing Language</h1>
            <div className="row" style={{justifyContent:'space-evenly'}}>
                <Cards source={pc} cardtittle="C"/>
                <Cards source={pj} cardtittle="Java"/>
                <Cards source={pp} cardtittle="Python"/>
                <Cards source={ph} cardtittle="HTML"/>
                <Cards source={pjs} cardtittle="Javascript"/>
                <Cards source={pr} cardtittle="REACT"/> 
            </div>
            <h1>Sports</h1>
            <div className="row" style={{justifyContent:'space-evenly'}}>
                <Cards source={sf} cardtittle="Football"/>
                <Cards source={sc} cardtittle="Cricket"/>
                <Cards source={sv} cardtittle="Volleyball"/>
                <Cards source={sk} cardtittle="Kabadi"/>
                <Cards source={sb} cardtittle="Basketball"/>
                <Cards source={st} cardtittle="Table"/>
            </div>
        </div>
        
    );
}
export default Carddemo;
