import React from 'react'

const ApiData = () => {
  return (
    <div className='pt-5 text-center'>
        <table className='table table-borderless table-striped'>
            <thead>
                <tr>
                    <th className='apth text-uppercase '>servers</th>
                    <th className='apth text-uppercase'>cpu</th>
                    <th className='apth text-uppercase'>current users</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>google</td>
                        <td>100%</td>
                        <td>saro</td>
                    </tr>
                    <tr>
                        <td>cgs</td>
                        <td>100%</td>
                        <td>saro</td>
                    </tr>
                    <tr>
                        <td>google</td>
                        <td>100%</td>
                        <td>saro</td>
                    </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ApiData