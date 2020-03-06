import React, { Component } from 'react';
import ReactDragList from 'react-drag-list'

class Scroll extends Component { 

  

    render() { 
         const data = ['A', 'B', 'C', 'D', 'E', 'F',];
        return(
            <div className="row" >
                <div className="col">
                <ReactDragList
                className="col-md-3"
                dataSource={data}
                row={
                    (record, index) => <div>{record}</div>
                }
                />
                </div>
            </div>
          );
    }

    
}

export default Scroll;