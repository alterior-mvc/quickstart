import { Controller, Get, Put, RouteEvent } from '@alterior/core';

@Controller()
export class SampleController {
	@Get('/')
	home(ev : RouteEvent) {
		return { message: "/ works!" };
	}

	@Put('/')
	putHome(ev : RouteEvent) {
		return { message: "your item is added!" };
	}
} 