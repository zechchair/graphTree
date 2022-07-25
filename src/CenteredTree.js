import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "",
    attributes: {
      title: "Card title",
      subtitle: "Card subtitle",
      text: "Some text to build on the card."
    },
    children: [
      {
        name: "",
        attributes: {
          title: "Card title",
          subtitle: "Card subtitle",
          text: "Some text to build on the card."
        }
      },
      {
        name: "",
        attributes: {
          title: "Card title",
          subtitle: "Card subtitle",
          text: "Some text to build on the card."
        }
      }
    ]
  }
];

const containerStyles = {
  width: "100%",
  height: "100vh"
};

const Card = ({ nodeData }) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 style={{ margin: "5px" }} className="card-title">
          {nodeData.attributes.title}
        </h5>
        <h6 style={{ margin: "5px" }} className="card-subtitle mb-2 text-muted">
          {nodeData.attributes.subtitle}
        </h6>
        <p style={{ margin: "5px" }} className="card-text">
          {nodeData.attributes.text}
        </p>
      </div>
    </div>
  </div>
);

export default class CenteredTree extends React.PureComponent {
  state = {};

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={debugData}
          translate={this.state.translate}
          zoomable={true}
          scaleExtent={{ min: 1, max: 3 }}
          pathFunc="elbow"
          allowForeignObjects
          nodeSvgShape={{ shape: "none" }}
          translate={{ x: 200, y: 200 }}
          nodeSize={{x: 300, y: 200}}
          nodeLabelComponent={{
            render: <Card />,
            foreignObjectWrapper: {
              style: {
                border: "1px solid black",
                width: "150px",
                height: "100px",
                x: 10,
                y: -50
              }
            }
          }}
        />
      </div>
    );
  }
}
