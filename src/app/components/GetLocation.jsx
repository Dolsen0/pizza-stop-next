import { useState, useEffect } from "react";

export default function GetLocation() {
    const [location, setLocation] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://pizza-stop-6b665c7cd62d.herokuapp.com/info")
        .then(res => res.json())
        .then(data => {
            setLocation(data)
            console.log(data)
        })
        .catch(err => {
            setError(err)
            console.log(err)
    })
    }, []);

    return(
        <>
        <h2>Location</h2>
        {location.address && <p>{location.address.street},</p>}
        {location.address && <p>{location.address.city}, {location.address.state}, {location.address.zip}</p>}
        </>
    )
}

// add style to address section
// add image to page