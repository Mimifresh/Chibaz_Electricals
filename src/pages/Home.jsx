import React from "react";  

export default function Home() {
    return (
        <section className="home">
            <div className="container home__container">
                <h1>Welcome to Chibaz Electricals</h1>
                <p>Your one-stop shop for all electrical needs. We provide high-quality electrical products and services to ensure your home and business are powered safely and efficiently.</p>
                <a href="/about" className="btn">Learn More About Us</a>
            </div>
        </section>
    )
}