import { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    const HomePage = () => {
        return (
            <Home />
        )
    }
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
            {/* Emphasis on how data is being passed into the Menu component inside the Route
            using an arrow function in the above line of code */}
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
  }


export default Main;
