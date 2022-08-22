import React from 'react'

const ApiData = () => {
  return (
    <div className='pt-4 text-center'>
        <table className='table table-borderless table-striped'>
            <thead>
                <tr className='lh-lg'>
                    <th className='apth text-uppercase '>servers</th>
                    <th className='apth text-uppercase'>cpu</th>
                    <th className='apth text-uppercase'>current users</th>
                </tr>
            </thead>
            <tbody>
                    <tr className='lh-lg'>
                        <td className='shadow rounded-5'>10.2.2.148</td>
                        <td className='shadow rounded-5'>80%</td>
                        <td className='shadow rounded-5'>98</td>
                    </tr>
                    <tr className='lh-lg'>
                        <td className='shadow rounded-5'>20.2.2.158</td>
                        <td className='shadow rounded-5'>90%</td>
                        <td className='shadow rounded-5'>88</td>
                    </tr>
                    <tr className='lh-lg'>
                        <td className='shadow rounded-5'>30.2.2.168</td>
                        <td className='shadow rounded-5'>100%</td>
                        <td className='shadow rounded-5'>75</td>
                    </tr>
                    <tr className='lh-lg'>
                        <td className='shadow rounded-5'>40.2.2.168</td>
                        <td className='shadow rounded-5'>95%</td>
                        <td className='shadow rounded-5'>85</td>
                    </tr>
                    <tr className='lh-lg'>
                        <td className='shadow rounded-5'>50.2.2.168</td>
                        <td className='shadow rounded-5'>100%</td>
                        <td className='shadow rounded-5'>90</td>
                    </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ApiData