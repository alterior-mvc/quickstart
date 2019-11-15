import { suite } from 'razmin';
import { teststrap } from '@alterior/web-server';
import { SampleService } from './sample-service';

suite(describe => {
    describe('SampleService', () => {
        describe('home()', it => {
            it('responds correctly', async () => {
                await teststrap(SampleService)
                    .get('/')
                    .expect(200, {
                        message: '/ works!'
                    })
                ;
            })
        });

        describe('putHome', it => {
            it('successfully puts home', async () => {
                await teststrap(SampleService)
                    .put('/')
                    .send({ stuff: 123 })
                    .expect(200, {
                        message: 'your item is added!'
                    })
                ;
            });
        })
    });
});