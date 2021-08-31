import React, { FC, useState, useEffect } from 'react'

const LeadsList: FC = () => {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        let getLeads = async () => {
            await fetch('https://joohnsro--hiringcoders202107.myvtex.com/_v/leads')
                .then((res: any) => {
                    if (res.ok) {
                        res
                            .then((data: any) => data.json())
                            .then((resJson: any) => {
                                let response = resJson;
                                setLeads(response.Items);
                            })
                    }
                })
                .catch((err) => err);
        }
        getLeads();
    }, [])

    return (
        <>
          <h1>Leads Cadastrados</h1>
          <hr />

          <table style={{ width: '100%' }}>
              <thead>
                  <tr>
                      <th style={{ textAlign: "left", width: '80%' }}>E-MAIL</th>
                      <th style={{ textAlign: "center", padding: '12px 0' }}>STATUS</th>
                  </tr>
              </thead>
              <tbody>
                  {leads.map((lead: any, key: number) => (
                      <tr key={key}>
                          <td style={{ padding: '8px 0' }}>{lead.email}</td>
                          <td style={{ textAlign: "center", padding: '8px 0' }}>{lead.is_lead ? 'LEAD' : 'CLIENT'}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </>
    )
}

export default LeadsList