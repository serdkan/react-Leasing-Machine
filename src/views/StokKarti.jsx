import React, { Component } from 'react'

class StokKarti extends Component {

    state = {
        StokKarts: []
    }
    componentDidMount() {
        this.getStokKart();
    }

    getStokKart = () => {
        fetch("http://192.168.1.25:3000/Stok/", { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ StokKarts: data }))
            .catch();
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">StokKodu</th>
                            <th scope="col">StokAdi</th>
                            <th scope="col">Birim</th>
                            <th scope="col">GrupKodu</th>
                            <th scope="col">Durum</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.StokKarts.map(kart => (
                            <tr className="table-warning" key={kart._id}>
                                <th scope="row">{kart.StokKodu}</th>
                                <td>{kart.StokAdi}</td>
                                <td>{kart.Birim}</td>
                                <td>{kart.GrupKodu}</td>
                                <td>{kart.Durum}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-outline-info">Edit</button>
                                    <button type="button" className="btn btn-outline-info">Kirala</button>
                                    <button type="button" className="btn btn-outline-info">Sil</button>
                                </div>
                                
                                </td>
                            </tr>


                        ))}


                    </tbody>
                </table>
            </div>
        )
    }



}


export default StokKarti;