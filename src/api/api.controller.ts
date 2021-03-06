import {
  Controller,
  Get, Post,
  Request, Response, Next,
  Param, Body, Query,
  HttpStatus
} from '@nestjs/common';

import { ApiStore } from './api.store';

@Controller()
export class ApiController {
  constructor(private api: ApiStore) {}

	@Get()
	findAll(): string[] {
    return this.api.findAll();
  }
}
