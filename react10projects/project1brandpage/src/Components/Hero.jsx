const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND
                    WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST
                    AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    
                </p>
                <div className="hero-btn">
                    <button>ShopNow</button>
                    <button className="secondary-btn">Catogery</button>
                </div>
                <div className="shopping">
                    <p> Now Available on</p>
                    <div className="brand-shopping">
                        <img src="/images/amazon.png" alt="amazon" />
                        <img src="images\flipkart.png" alt="flipkart" />
                    </div>


                </div>
            </div>
            <div className="hero-image">
            <img src="images\shoe_image.png" alt="shoe" />
            </div>
        </main>

    )
}

export default Hero;