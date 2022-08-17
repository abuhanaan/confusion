import { Component } from "react";
import { Card, CardImg,  CardBody, CardTitle, CardText,  } from "reactstrap";


class DishDetail extends Component {
    

    renderDish(dish) {
        if (this.props.dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComment(comments){
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <div>
                        {comments.map((comment) => {
                            return (
                                <div key={comment.id} className='container'>
                                    <ul className="list-unstyled">
                                        <li>{comment.comment}</li>
                                        <li>{comment.author} {new Intl.DateTimeFormat('en-US',
                                            { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const selected = this.props.selectedDish
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selected)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComment(this.props.dish.comments)}
                    </div>
                </div>
                
            )
        }
    }

}

export default DishDetail