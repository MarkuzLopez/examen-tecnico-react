import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import carrologo from '../../assets/img/car.png';
import Uril from '../../envioroment/Uril';
import axios from 'axios';
import './Articulos.css';
import { Link } from 'react-router-dom';
import ReactDragList from 'react-drag-list' // para realizar el dragable de la lista



const { url } = Uril; 

class Articulos extends Component { 

    state = { 
        productos: {
            description: '',
            data: {
                products: []
            }
        },
        faavorites: [],
        fetching: false
    }

    componentDidMount() { 
        return axios.get(url).then(resp => {
            this.setState({
                productos: resp.data,
                fetching: true
            })
        })
    }
    
    // agregar articulos por medio de un evento y asu vez eliminarlo
    // donde se va a llenaar en faavorites para el carro de compras
    addCar = (articulo, index) => { 
        console.log(articulo, index);
        let aux = [];
        console.log(aux);
    }


    render() { 
        const validar = <div className="alert alert-primary text-center"> <strong>Cargando Articulos...</strong> <br />
        <i className="fa fa-spinner fa-spin"></i><br /> <span>Espere por favor</span> </div>  
        
        const { products } = this.state.productos.data;
        return(
            <React.Fragment>
              <div className="mt-5">
                <div className="car-shop text-center">
                         <div className="card" >
                            <div className="card-body">
                                <div className="contendor">
                                   <div className="circulo" >
                                        <div className="number-car">
                                                <h3>4</h3>
                                        </div>
                                   </div>
                                    <div>
                                        <img src={carrologo} className="rounded mx-auto d-block" alt="..." />
                                    </div>
                                </div>
                            </div>
                         </div>
                         <Link to={"/scroll"}>Scroll</Link>
                </div>
                { 
                this.state.fetching ? 
                <div className="articulos mt-5">
                    <div className="card-deck">
                        
                        {/* 
                         estaa funcion del dragable se comento0 ya que desbordaa laas taarjetas 
                         hacia abajo y no respeta los estilos de bootstraap
                        <ReactDragList 
                            dataSource={products}
                            row = {
                                (articulo, index) => 
                                <div className="col-md-6" key={articulo.sku} >
                                    <div className="card mt-3" >
                                        <img src={logo} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                        <h5 className="card-title">{articulo.name} -
                                        ${articulo.price}</h5>
                                        <p className="card-text">
                                                {articulo.description}
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            }
                        /> */}
                        {products.map((articulo, index) => (
                            <div className="col-md-4" key={articulo.sku} >
                                <div className="card mt-3" >
                                    <img src={logo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">{articulo.name} -
                                    ${articulo.price}</h5>
                                    <p className="card-text">
                                            {articulo.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={e => this.addCar(articulo, index)} >Agregar Carrito</button>
                                    </div>
                                </div>
                                
                            </div>
                        ))}        
                    </div>
                </div>
                : validar }
                
              </div>
            </React.Fragment>
        )
    }
}

export default Articulos;