import React from 'react'
import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

interface NewsletterProps {}

const Newsletter: StorefrontFunctionComponent<NewsletterProps> = ({}) => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');

  function handleSubmit() {

    let options: any = { dateStyle: 'short', timeStyle: 'medium' };
    let createdAt = new Intl.DateTimeFormat('pt-BR', options).format(Date.now());
    let lead = { name, email, phone, isLead: true, createdAt, clientAt: '' };

    const sendLead = async () => {
      
      if ( !window.fetch ) return;

      return window.fetch('https://joohnsro--hiringcoders202107.myvtex.com/_v/leads', {
        method: 'POST',
        body: JSON.stringify(lead)
      })
      .then((res: any) => res.json())
      .catch((err: any) => err);
    }

    sendLead().then((res) => console.log(res))
  }

  return (
    <Container>
      <div>
        <br />
        <Form>
          <Form.Group className="name">
            <Form.Label>Nome: </Form.Label>
            <Form.Control placeholder="Nome" onChange={(e: any) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control placeholder="Email" type="email" onChange={(e: any) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefone: </Form.Label>
            <Form.Control placeholder="Telefone" onChange={(e: any) => setPhone(e.target.value)} />
          </Form.Group>
          <Button onClick={handleSubmit}>Quero me cadastrar</Button>
        </Form>
      </div>
    </Container>
  )
}

Newsletter.schema = {
  title: 'editor.newsletter.title',
  description: 'editor.newsletter.description',
  type: 'object',
  properties: {},
}

export default Newsletter
