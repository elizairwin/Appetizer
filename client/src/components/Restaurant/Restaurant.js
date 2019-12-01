import React, { Component } from "react";
import AuthService from '../AuthService';
import API from "../../utils/API";
import EditableContent from "../EditableContent/EditableContent";

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService(); 
    }
    state={
        restaurant: {
          // userRestaurantName:"",
          // serRestaurantTagline:"",
          // userRestaurantAboutText:"",
          // userAppetizerHeader:""
        },
        edit: false
        
    }
    
    handleSubmit= (propertyName, propertyValue) =>  {
        console.log(this.state.restaurant);

        var restaurant = {...this.state.restaurant}
        var key = propertyName;
        restaurant[key] = propertyValue;
        this.setState({restaurant});

        console.log("after");
        console.log(this.state.restaurant);
    }


  componentDidMount() {

    API.getRestaurant(this.props.match.params.username).then(({data}) => {
        console.log("Data from database");
        console.log(data);
        if (this.Auth.loggedIn()) {
          this.setState({restaurant: data.restaurant, edit: data.id === this.Auth.getProfile().id});
        }
        else this.setState({restaurant: data.restaurant, edit: false});
        setTimeout(() => console.log(this.state), 3000)
    })
    .catch(err => console.log(err));
}



    handleLogout(){
        this.Auth.logout();
        this.props.history.replace('/');
     }
     updateRestaurantName() {
         this.setState({restaurantEdit:{
             userRestaurantName: true
         }})
     }


    render() {
        return(
            <div className="App">
                <header>
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="top-social"> <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a> <a href="#"><i
                  className="fa fa-instagram" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-yelp"
                  aria-hidden="true"></i></a> </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="logo text-center" id="userLogo"><img src="assets/img/restaurantlogo.jpg" className="img-responsive"/>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="top-call" id="userNumber"> <i className="fa fa-phone" aria-hidden="true"></i> 0000 000 0000 </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="navigation">
        <div className="navbar-wrapper">

          <nav className="navbar">
            <div className="navbar-header">
              <button aria-controls="navbar" aria-expanded="false" data-target={"#navbar"} data-toggle="collapse"
                className="navbar-toggle collapsed" type="button"> <span className="sr-only">Toggle navigation</span> <span
                className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#About-Us">About Us</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservations</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
                {this.state.edit ? ( <div dangerouslySetInnerHTML={ {__html: "<button className='edit-btn' id='userEdit' onclick='editFunction(id)' type='submit' name='submit' value='Edit'> Edit</button>"} } />) : null}
               
                
            </ul>
            
        </div>
        </nav>
      </div>
    </div>
    </div>
    <div className="slider">
      <div data-ride="carousel" className="carousel slide" id="myCarousel">

        <ol className="carousel-indicators">
          <li className="active" data-slide-to="0" data-target="#myCarousel"></li>
          <li data-slide-to="1" data-target="#myCarousel"></li>
          <li data-slide-to="2" data-target="#myCarousel" className=""></li>
        </ol>
        <div role="listbox" className="carousel-inner">
          <div className="item active"> <img src="assets/img/slider/slider_01.jpg" className="img-responsive"/>
            <div className="container">
              <div className="carousel-caption">
                <EditableContent handleSubmit={this.handleSubmit} propertyName="userRestaurantName" restaurantObject={this.state.restaurant}>
                <h1>{this.state.restaurant.userRestaurantName}</h1>
                </EditableContent>
                <EditableContent handleSubmit={this.handleSubmit} propertyName="userRestaurantTagline" restaurantObject={this.state.restaurant}>
                <p>{this.state.restaurant.userRestaurantTagline}</p>
                </EditableContent>
              </div>
            </div>
          </div>
          <div className="item"> <img src="assets/img/slider/slider_02.jpg" className="img-responsive"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>{this.state.restaurant.userRestaurantName}</h1>
                {/* <h1 id="userRestaurantName2"><span>Name of Your Restaurant Goes Here</span></h1> */}
                <p>{this.state.restaurant.userRestaurantTagline}</p>
                {/* <p id="userRestaurantTagline2"><span>Add a tagline to draw customers in!</span></p> */}
              </div>
            </div>
          </div>
          <div className="item"> <img src="assets/img/slider/slider_03.jpg" className="img-responsive"/>
            <div className="container">
              <div className="carousel-caption">
              <h1>{this.state.restaurant.userRestaurantName}</h1>
                {/* <h1 id="userRestaurantName3"><span>Name of Your Restaurant Goes Here</span></h1> */}
                <p>{this.state.restaurant.userRestaurantTagline}</p>
                {/* <p id="userRestaurantTagline3"><span>Add a tagline to draw customers in!</span></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </header>

  <div className="about-section" id="About-Us">
    <div className="container">
      <h2>About Us</h2>
      <div className="clearfix"></div>
      <div className="title-line"></div>
      <div className="gap"></div>
      <div className="col-md-6">
        <div className="about-content">
          Welcome to <span>{this.state.restaurant.userRestaurantName}</span>
          {/* <h4>Welcome to <span id="userRestaurantName4">Name of Your Restaurant Goes Here</span></h4> */}
          <EditableContent handleSubmit={this.handleSubmit} propertyName="userRestaurantAboutText" restaurantObject={this.state.restaurant}>
            <p>{this.state.restaurant.userRestaurantAboutText}</p>
          </EditableContent>
          {/* <p id="userRestaurantAboutText1">Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel
            sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim,
            veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid
            abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit </p> */}
          {/* <p id="userRestaurantAboutText2">Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel
            sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim,
            veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid
            abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit </p>
          <p id="userRestaurantAboutText3">Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel
            sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim,
            veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid
            abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit </p> */}
        </div>
      </div>
      <div className="col-md-6">
        <div className="about-content"> <img src="assets/img/about_thum.jpg" className="img-responsive" id="userAboutImage"/>
        </div>
      </div>
    </div>
  </div>

  <div className="menu-section" id="menu">
    <div className="container">
      <div className="menu-bg">
        <div className="menu-box" id="menu">
          <h2>menu</h2>
          <div className="clearfix"></div>
          <div className="title-line"></div>
          <ul id="filters" className="clearfix">
            <EditableContent handleSubmit={this.handleSubmit} propertyName="userAppetizerHeader" restaurantObject={this.state.restaurant}>
            <li><span className="filter" data-filter=".Appetizers">{this.state.restaurant.userAppetizerHeader}</span></li>
            </EditableContent>
            {/* <li><span id="userAppetizerHeader" className="filter" data-filter=".Appetizers">Appetizers</span></li> */}
            <li><span id="userSaladsHeader" className="filter" data-filter=".Salads">Soup and Salads</span></li>
            <li><span id="userMainsHeader" className="filter" data-filter=".Soups">Mains</span></li>
            <li><span id="userDessertsHeader" className="filter" data-filter=".Fried-Rice-Dishes">Desserts</span></li>
          </ul>
          <div id="menulist">
            <div className="menu Appetizers">
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userAppetizerOneName" className="food-name"><a href="#">Appetizer 1</a></h3>
                  <p id="userAppetizerOneDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userAppetizerOnePrice" className="food-price">$9.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userAppetizerTwoName" className="food-name"><a href="#">Appetizer 2</a></h3>
                  <p id="userAppetizerTwoDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userAppetizerOnePrice" className="food-price">$10.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userAppetizerThreeName" className="food-name"><a href="#">Appetizer 3</a></h3>
                  <p id="userAppetizerThreeDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userAppetizerThreePrice" className="food-price">$11.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userAppetizerFourName" className="food-name"><a href="#">Appetizer 4</a></h3>
                  <p id="userAppetizerFourName" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userAppetizerFourName" className="food-price">$12.95</p>
                </div>
              </div>
            </div>
            <div className="menu Salads">
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userSoupOneName" className="food-name"><a href="#">Soup 1</a></h3>
                  <p id="userSoupOneDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userSoupOnePrice" className="food-price">$9.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userSoupTwoName" className="food-name"><a href="#">Soup 2</a></h3>
                  <p id="userSoupTwoDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userSoupTwoPrice" className="food-price">$9.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userSaladOneName" className="food-name"><a href="#">Salad 1</a></h3>
                  <p id="userSaladOneDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userSaladOnePrice" className="food-price">$14.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userSaladTwoName" className="food-name"><a href="#">Salad 2</a></h3>
                  <p id="userSaladTwoDescrption" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userSaladTwoPrice" className="food-price">$14.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userSaladThreeName" className="food-name"><a href="#">Salad 3</a></h3>
                  <p id="userSaladThreeDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userSaladThreePrice" className="food-price">$16.95</p>
                </div>
              </div>
            </div>
            <div className="menu Soups">
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userMainOneName" className="food-name"><a href="#">Main Dish 1</a></h3>
                  <p id="userMainOneDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userMainOnePrice" className="food-price">$19.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userMainTwoName" className="food-name"><a href="#">Main Dish 2</a></h3>
                  <p id="userMainTwoDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userMainTwoPrice" className="food-price">$19.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userMainThreeName" className="food-name"><a href="#">Main Dish 3</a></h3>
                  <p id="userMainThreeDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userMainThreePrice" className="food-price">$22.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userMainFourName" className="food-name"><a href="#">Main Dish 4</a></h3>
                  <p id="userMainFourDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userMainFourPrice" className="food-price">$25.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userMainFiveName" className="food-name"><a href="#">Main Dish 5</a></h3>
                  <p id="userMainFiveDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userMainFivePrice" className="food-price">$25.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userMainSixName"className="food-name"><a href="#">Main Dish 6</a></h3>
                  <p id="userMainSixDescription" className="food-info">Use this space to describe the dish, including ingredients.</p>
                  <p id="userMainSixPrice" className="food-price">$25.95</p>
                </div>
              </div>
            </div>
            <div className="menu Fried-Rice-Dishes">
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userDessertOneName" className="food-name"><a href="#">Dessert 1</a></h3>
                  <p id="userDessertOneDescription" className="food-info">SUse this space to describe the dish, including ingredients.</p>
                  <p id="userDessertOnePrice" className="food-price">$9.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userDessertTwoName" className="food-name"><a href="#">Dessert 2</a></h3>
                  <p id="userDessertTwoDescription" className="food-info">Shredded chicken and shrimp, carrots, glass noodles, cabbage.</p>
                  <p id="userDessertTwoPrice" className="food-price">$9.95</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="food-item">
                  <h3 id="userDessertThreeName" className="food-name"><a href="#">Dessert 3</a></h3>
                  <p id="userDessertThreeDescription" className="food-info">Shredded chicken and shrimp, carrots, glass noodles, cabbage.</p>
                  <p id="userDessertThreePrice" className="food-price">$11.95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="testimonials-section" id="testimonials">
    <div className="container">
      <h2>Reviews</h2>
      <div className="title-line"></div>
      <div className="gap"></div>
      <div id="testimonials-Carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="container text-center"> <img src="assets/img/testimonials/1.jpg"/>
              <div className="carousel-caption quote-test">
                <p>Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne
                  nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim,
                  veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur
                  Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit </p>
                <h5><i className="fa fa-user" aria-hidden="true"></i> User Name</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container text-center"> <img src="assets/img/testimonials/2.jpg"/>
              <div className="carousel-caption quote-test">
                <p>Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne
                  nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim,
                  veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur
                  Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit </p>
                <h5><i className="fa fa-user" aria-hidden="true"></i> User Name</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container text-center"> <img src="assets/img/testimonials/3.jpg"/>
              <div className="carousel-caption quote-test">
                <p>Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne
                  nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim,
                  veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur
                  Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit </p>
                <h5><i className="fa fa-user" aria-hidden="true"></i> User Name</h5>
              </div>
            </div>
          </div>
        </div>

        <ol className="carousel-indicators">
          <li data-target="#testimonials-Carousel" data-slide-to="0" className="active"></li>
          <li data-target="#testimonials-Carousel" data-slide-to="1"></li>
          <li className="" data-target="#testimonials-Carousel" data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  </div>

  <div className="contact-section" id="contact">
    <div className="container">
      <div className="col-md-6">
        <div className="contact-section-form">
          <form action="php/Quick-Contact-Form.php" method="post" name="validation">
            <div className="row"> </div>
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder="Full Name *" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="text" id="email" name="email" placeholder="Email *" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="text" name="telephone" id="telephone" placeholder="Telephone *" className="form-control"/>
            </div>
            <div className="form-group">
              <textarea rows="3" name="message" id="message" placeholder="Message *" className="form-control"></textarea>
            </div>
            <div className="form-group">
            <div dangerouslySetInnerHTML={ {__html: '<input type="submit" value="Send Message" onclick="return contact_form();" className="reservation-btn" name="Submit"/>'} } />
              
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        <h2>CONTACT US</h2>
        <ul className="contact-infomation">
          <li><i className="fa fa-map-marker" id="userRestaurantAddress" aria-hidden="true"></i>Your Restaurant Address</li>
          <li><i className="fa fa-phone" id="userNumber" aria-hidden="true"></i>+00 000 000000</li>
          <li><i className="fa fa-envelope-o" id="userEmail" aria-hidden="true"></i>info@myrestaurant.com</li>
        </ul>
        <ul className="socials-footer">
          <li> <a title="Facebook'" id="userRestaurantFacebook" target="_blank" href="#"> <i className="fa fa-facebook"></i> </a> </li>
          <li> <a title="Twitter" id="userRestaurantInstagram" target="_blank" href="#"> <i className="fa fa-instagram"></i> </a> </li>
          <li> <a title="Tumblr" id="userRestaurantYelp" target="_blank" href="#"> <i className="fa fa-yelp"></i> </a> </li>
        </ul>
        <div className="map">
        <div dangerouslySetInnerHTML={ {__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60470630.45233501!2d73.17308624999994!3d22.32210265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1470837312627" width="100%" height="200" frameborder="0" style={{border:0}} allowfullscreen></iframe>'} } />

          
        </div>
      </div>
    </div>
  </div>

  <div className="submit-section">
  <div dangerouslySetInnerHTML={ {__html: '<input className="submit-btn" id="userSubmit" onclick="submitFunction(id)" type="submit" name="submit" value="Submit" />'} } />

    
  </div>

                <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>

            </div>
        )
    }

}

export default Restaurants;
