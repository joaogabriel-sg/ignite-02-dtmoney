import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
	models: {
		// nome da entidade que vamos salvar no db do miragejs
		transaction: Model,
	},
	seeds(server) {
		// possibilita modificarmos o servidos do miragejs e seus dbs
		// no caso abaixo, peço que ele carregue os dados que eu inseri
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelance de website',
					type: 'deposit',
					category: 'Dev',
					amount: 6000,
					createdAt: new Date('2021-02-12 09:00:00'),
				},
				{
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					category: 'Casa',
					amount: 1100,
					createdAt: new Date('2021-02-14 11:00:00'),
				},
			],
		});
	},
	routes() {
		this.namespace = 'api'; // tudo que tiver /api/... vai levar ao miragejs

		this.get('/transactions', () => {
			// quando houver requisição get para transactions retorna algo
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			// realizando a inserção de uma nova transação
			const data = JSON.parse(request.requestBody);
			return schema.create('transaction', data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
