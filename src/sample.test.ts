import { bootstrap } from '@alterior/core';
import { Application } from './app';

import { suite, test as it } from 'mocha-typescript';
import * as supertest from 'supertest';

describe("sample", () => {
	@suite class SampleController {
		@it "puts the lotion on its skin or it gets the hose again"(done) {
			bootstrap(Application, [], { silent: true, port: 10001 }).then(app => {
				supertest(app.express).get('/')
					.expect(200, <any>{
						message: "/ works!"
					})
					.end((err, res) => {
						app.stop();
						done(err || undefined);
					})
			});
		}
	}
});