// import "./App.css";
import Star from "./Star";
import StarRating from "./StarRating";
import Colors from "./Colors";

import { Component } from "react";
import Color from "./Colors";
import ColorList from "./ColorList";
import Children from "./Children";
import Example from "./Click";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          id: "111",
          color: "yellow",
          title: "test1",
          rating: 3,
        },
        {
          id: "222",
          color: "pink",
          title: "test2",
          rating: 1,
        },
        {
          id: "333",
          color: "red",
          title: "test3",
          rating: 5,
        },
      ],
    };
    this.rateColor = this.rateColor.bind(this);
    this.remove = this.remove.bind(this);
  }
  rateColor(id, rating) {
    this.setState((prevState) => ({
      colors: prevState.colors.map((c) =>
        c.id !== id
          ? c
          : {
            ...c,
            rating,
          }
      ),
    }));
  }
  remove(id) {
    this.setState((prevState) => ({
      colors: prevState.colors.filter((c) => c.id !== id),
    }));
  }
  render() {
    const { rateColor, remove } = this;
    const { colors } = this.state;
    return (
      <div>
        <ColorList colors={colors} onRate={rateColor} onRemove={remove} />
      </div>
      // <Example />
    );
  }
}
