import React, { Component } from 'react'

class StokKarti extends Component {
    render() {
        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">StokKodu</th>
                            <th scope="col">StokAdi</th>
                            <th scope="col">Birim</th>
                            <th scope="col">Durum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <th scope="row">Active</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}


export default StokKarti;