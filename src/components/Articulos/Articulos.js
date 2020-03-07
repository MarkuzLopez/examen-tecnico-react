import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import carrologo from '../../assets/img/car.png';
import Uril from '../../envioroment/Uril';
import axios from 'axios';
import './Articulos.css';
import { Link } from 'react-router-dom';
import  Swal  from 'sweetalert2';

import ReactDragList from 'react-drag-list' // para realizar el dragable de la lista



const { url } = Uril; 

class Articulos extends Component { 

    state = { 
        products: [],
        faavorites: [],
        fetching: false,
        total: 0
    }

    componentDidMount() { 
        return axios.get(url).then(resp => {
            this.setState({
                products: resp.data.data.products,
                fetching: true
            })
        })
    }


    restoreApp = () => {
        Swal.fire({
            title: '¿Estas Seguro de iniciar nuevamente?',
            text: "¡se eliminaran los articulos agregado al carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si eliminarlo'
          }).then((result) => {
            if (result.value) {
                return axios.get(url).then(resp => {
                    this.setState({
                        products: resp.data.data.products,
                        fetching: true,
                        faavorites: []
                    })
                })
            }
          })
    }
    
    // agregar articulos por medio de un evento y asu vez eliminarlo
    // donde se va a llenaar en faavorites para el carro de compras
    addCar = (articulo, indx) => {
       this.setState({
           faavorites: this.state.faavorites.concat(articulo),
           products: this.state.products.filter((products, index) => indx !== index)
       })
       Swal.fire({
        icon: 'success',
        title: 'Articulo Agregado Exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
    }


    render() {
        const validar = <div className="alert alert-primary text-center"> <strong>Cargando Articulos...</strong> <br />
        <i className="fa fa-spinner fa-spin"></i><br /> <span>Espere por favor</span> </div>  
        const { products } = this.state;
        const { faavorites } = this.state;
        return(
            <React.Fragment>
              <div className="mt-5">
                <div className="car-shop text-center">
                         <div className="card" >
                            <div className="card-body">
                                <div className="contendor">
                                   <div className="circulo" >
                                        <div className="number-car">
                                                <h3>{faavorites.length}</h3>
                                        </div>
                                   </div>
                                    <div>
                                        <img src={carrologo} className="rounded mx-auto d-block" alt="..." />
                                    </div>
                                    <button className="btn btn-primary" data-toggle="modal" data-target="#modalCar">Ver Articulos Carrito ({faavorites.length})</button>
                                </div>
                            </div>
                         </div>
                </div>
                { 
                this.state.fetching ? 
                <div className="articulos mt-5">
                    <div className="card-deck">
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

            {/* <!-- Modal --> */}
                    <div className="modal fade" id="modalCar" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-center" id="exampleModalLabel">Articulos Agregados {faavorites.length} </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="text-center">
                                        {
                                        faavorites.length > 0 ? <button className="btn btn-danger btn-lg btn-block" onClick={this.restoreApp}  data-dismiss="modal">Vaciar Carrito</button>
                                        : <p>No hay articulos agregados</p>
                                        }
                                         
                                    </div>
                                    <div className="articulos mt-5">
                                        <div className="card-deck">
                                            {faavorites.map((articulo, index) => (
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
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
              </div>
            </React.Fragment>
        )
    }
}

export default Articulos;