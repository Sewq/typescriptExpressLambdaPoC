import {Controller, Get, Req, Res} from 'routing-controllers';
import { Request, Response } from 'express';

@Controller('/second')
export class SecondController {

    @Get()
    public getSecondMessage(@Req() request: Request, @Res() response: Response): void {
        response.status(200).send({message: `Hello from 'get' method for lambda from secondController`});
    }

}
