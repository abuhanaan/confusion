import { Component } from "react";
import { Card, CardImg,  CardBody, CardTitle, CardText,  } from "reactstrap";

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    function RenderComment({comments}){
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
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

    const DishDetail = (props) => {
        console.log("DishDetail Component render is invoked")
        const selected = props.dish
        if (props.dish != null) {
            return (
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComment comments={props.dish.comments} />
                </div>    
            )
        } else {
            return <div></div>
        }
    }

export default DishDetail