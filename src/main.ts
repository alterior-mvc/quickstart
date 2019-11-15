import "zone.js";
import "reflect-metadata";

import { Application } from '@alterior/runtime';
import { SampleService } from "./sample-service";

Application.bootstrap(SampleService);