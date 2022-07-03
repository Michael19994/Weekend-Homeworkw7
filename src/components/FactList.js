import React from "react";

function FactList({ facts}) {
    const factNodes = facts.map((fact) => {
        return (
            <article className="animal">
                <div class="facts">
                    <p>Name: {fact.name}</p>
                    <p>Animal Type: {fact.animal_type}</p>
                    <p>Diet: {fact.diet}</p>
                    <p>Native to: {fact.geo_range}</p>
                    <p>Habitat: {fact.habitat}</p>
                    <p>Can live upto: {fact.lifespan} Years of age</p>
                </div>

                <hr></hr>
                <div><img src={fact.image_link} alt={fact.name}/></div>
                
            </article>
        )
    } );


return (
    <section className="animals">
        {factNodes}
    </section>
  );
}

export default FactList;