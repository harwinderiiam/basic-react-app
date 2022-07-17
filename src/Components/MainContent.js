import Card from "./card"
export default function MainContent(){
    return (
        <div className="main-content">
            <h1 className="main-heading">
                Check out these EPIC Destinations!
            </h1>
            <div className="row-1">
                <div className="col-1">
                    <Card
                        img = "img-9.jpg"
                        text = "Explore the hidden waterfall deep inside the Amazon Jungle"
                    />
                </div>
                <div className="col-2">
                    <Card
                        img = "img-8.jpg"
                        text = "Ride through the Sahara Desert on a guided camel tour"
                    />
                </div>
            </div>
            <div className="row-2">
                <div className="item-1">
                    <Card
                        img = "img-3.jpg"
                        text = "Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                    />
                </div>
                <div className="item-2">
                    <Card
                        img = "img-4.jpg"
                        text = "Experience Football on Top of the Himilayan Mountains"
                    />
                </div>
                <div className="item-3">
                    <Card
                        img = "img-2.jpg"
                        text = "Travel through the islands of Bali in a Private Cruise"
                    />
                </div>
            </div>
        </div>
    )
}
