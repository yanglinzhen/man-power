import React, { Component } from 'react';
import './Demo.css'

class Demo extends Component {
constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this.state = {
        ctx: null,
        node: [
            'A', 'B', 'C', 'D', 'E', 'F', 'G'
        ],
        line: [
            {from: 'A', to: 'B', weight: 20, relation: 'unknown'}, 
            {from: 'A', to: 'E', weight: 40, relation: 'unknown'},
            {from: 'A', to: 'F', weight: 30, relation: 'unknown'},
            {from: 'A', to: 'G', weight: 60, relation: 'unknown'},
            {from: 'B', to: 'A', weight: 80, relation: 'unknown'},
            {from: 'B', to: 'C', weight: 10, relation: 'unknown'},
            {from: 'B', to: 'D', weight: 50, relation: 'unknown'},
            {from: 'C', to: 'F', weight: 90, relation: 'unknown'},
            {from: 'D', to: 'G', weight: 20, relation: 'unknown'},
            {from: 'E', to: 'F', weight: 10, relation: 'unknown'},
        ]
    };
  }

  handleMouseMove(event) {
    let point = {
        x: event.clientX,
        y: event.clientY
    }
    this.state.ctx.lineTo(point.x, point.y);
    // console.log('x: ' + event.clientX + ', y: ' + event.clientY);
  }

  handleMouseDown(event) {
    let point = {
        x: event.clientX,
        y: event.clientY
    }
    this.state.ctx.moveTo(point.x, point.y);
    // console.log('x: ' + event.clientX + ', y: ' + event.clientY);
  }

  handleMouseUp(event) {
    this.state.ctx.stroke();
    // console.log('x: ' + event.clientX + ', y: ' + event.clientY);
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    let context = canvas.getContext("2d")
    this.setState({
        ctx: context
    });
    context.font = "20px Airal"

    
    let nodeWithWeight = this.state.node.map((nodeItem) => {
        let result = {
            name: nodeItem,
            weight: 0
        }
        this.state.line.map((lineItem) => {
            if (lineItem.from === nodeItem || lineItem.to === nodeItem) {
                result.weight += lineItem.weight;
            }
        });
        return result;
    });
    nodeWithWeight.sort((a, b) => {
        return b.weight - a.weight;
    })
    console.log(JSON.stringify(nodeWithWeight));
    
    let space = {w: 50, h: 50}
    this.state.node.forEach((item) => {
        context.fillText(item, space.w, space.h)
        space.w += 50
    });
  }

  drawNode(context, nodeItem, point) {
    context.fillText(item, space.w, space.h)
    this.state.
  }

  render() {
    return (
      <div className="Demo">
         <canvas className="canvas" ref="canvas" width={640} height={480} 
            onMouseMove={this.handleMouseMove}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            />
      </div>
    );
  }

}

export default Demo;
