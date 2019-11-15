import { WebService, Get, Put, RouteEvent } from '@alterior/web-server';

@WebService()
export class SampleService {
	@Get('/')
	home(ev : RouteEvent) {
		return { message: "/ works!" };
	}

	@Put('/')
	putHome(ev : RouteEvent) {
		return { message: "your item is added!" };
	}
}