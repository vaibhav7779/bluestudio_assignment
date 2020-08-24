import React from "react";
const Classrow = ( { data = [], date }) => {
const imgurl = "https://dtsvkkjw40x57.cloudfront.net";
return(
<div class="container is-fluid">
{  date && <date class="livestream-page__day-date has-text-left" datetime="Mon Aug 24 2020 00:00:00 GMT+0530 (India Standard Time)">Monday, August 24</date> }
    <div id="classbox" class="livestream-page__day-table">
    { data && data.map( k => 


    <div class="columns livestream-page__day-table-row">
        <div class="column is-2">
            <nav class="level">
                <div>
            <p class="level-item title is-6 has-text-centered">
            {k.time}
            </p>
            </div>
            <div class="image is-64x64">
            <img class="is-rounded" src={imgurl + k.img} />
            </div>
            </nav>
        </div>
        <div class="column is-6" >
            <p class="title is-5 has-text-left"> {k.title} </p>
            <p class="subtitle is-6 has-text-left">{k.presentor} | {k.audience} </p>
        </div>
        <div class="column is-4">
            <button class="button is-rounded pinkbutton"> {k.primary}</button>
            <button class="button is-rounded yellowbutton">{k.secondary}</button>
        </div>
    </div>
    )}

    </div>
</div>
    );
}

export default Classrow;