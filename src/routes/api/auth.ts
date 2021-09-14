// import YahooFantasy from "yahoo-fantasy";
// import type { RequestHandler, Request, Response } from '@sveltejs/kit';
// import type { Locals } from '$lib/types';

// export const get: RequestHandler<Locals> = async (request) => {
// 	// request.locals.userid comes from src/hooks.js
//   console.log("Request........ ", request)

//   const yf = new YahooFantasy(
//     process.env.YAHOO_CLIENT_ID,
//     process.env.YAHOO_CLIENT_SECRET,
//     null,
//     // `https://${process.env.APP_URL}/auth/callback`
//     `http://localhost:3000/auth/callback`
//   );

//   // redirect url for after authentication
//   const redirect = request.headers.referer.split(request.headers.host).pop();
//   console.log("Redirect........ ", redirect)
//   return {
//     body: {
//       redirect
//     }
//   };
//   // return yf.auth(res, redirect);
// };


import { api } from '../todos/_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// GET /todos.json
export const get: RequestHandler<Locals> = async (request) => {
	// request.locals.userid comes from src/hooks.js
	const response = await api(request, `todos/${request.locals.userid}`);

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return { body: [] };
	}

	return response;
};

// POST /todos.json
export const post: RequestHandler<Locals, FormData> = async (request) => {
	const response = await api(request, `todos/${request.locals.userid}`, {
		// because index.svelte posts a FormData object,
		// request.body is _also_ a (readonly) FormData
		// object, which allows us to get form data
		// with the `body.get(key)` method
		text: request.body.get('text')
	});

	return response;
};
