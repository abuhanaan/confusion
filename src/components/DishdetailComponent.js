import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText,  } from "reactstrap";


class DishDetail extends Component {
    

    renderDish(dish) {
        if (this.props.dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const selected = this.props.selectedDish
        return (
            <div className="row">
                    {this.renderDish(selected)}
            </div>
        )
    }

}

export default DishDetail